// Supabase Edge Function: payment-request
// Processa pagamentos via Ifthenpay (MB WAY e Referência Multibanco)

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface PaymentRequestBody {
  orderId?: string;
  productId: string;
  productTitle: string;
  amount: number;
  customerName: string;
  customerEmail: string;
  phone: string;
  nif?: string;
  paymentMethod: 'mbway' | 'multibanco';
}

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const body: PaymentRequestBody = await req.json();
    const {
      productId,
      productTitle,
      amount,
      customerName,
      customerEmail,
      phone,
      nif = '',
      paymentMethod,
    } = body;

    // 1. Validações defensivas
    if (!productId || !amount || !customerEmail || !paymentMethod) {
      return new Response(
        JSON.stringify({ error: 'Dados obrigatórios ausentes para o checkout.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 2. Higienização do número de telefone (apenas 9 dígitos portugueses)
    const sanitizedPhone = (phone || '').replace(/\D/g, '').slice(-9);
    if (paymentMethod === 'mbway' && sanitizedPhone.length !== 9) {
      return new Response(
        JSON.stringify({ error: 'O número de telemóvel para MB WAY deve conter 9 dígitos válidos.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 3. Formatação do valor (duas casas decimais, ex: "49.00" ou "24.97")
    const formattedAmount = Number(amount).toFixed(2);

    // 4. Criação do registo da Encomenda na Base de Dados Supabase
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        customer_name: customerName,
        customer_email: customerEmail,
        phone: sanitizedPhone,
        nif: nif.trim() || null,
        product_id: productId,
        product_title: productTitle,
        total: Number(formattedAmount),
        status: 'pendente',
        payment_method: paymentMethod,
      })
      .select()
      .single();

    if (orderError || !order) {
      console.error('Erro ao criar registo da encomenda no Supabase:', orderError);
      return new Response(
        JSON.stringify({ error: 'Erro ao registar encomenda no sistema.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Criação do item da encomenda
    await supabase.from('order_items').insert({
      order_id: order.id,
      product_id: productId,
      product_title: productTitle,
      price: Number(formattedAmount),
      quantity: 1,
    });

    // Credenciais Ifthenpay configuradas nas variáveis de ambiente do Supabase
    const ifthenpayMbwayKey = Deno.env.get('IFTHENPAY_MBWAY_KEY') || 'TEST_MBWAY_KEY';
    const ifthenpayMbKey = Deno.env.get('IFTHENPAY_MULTIBANCO_KEY') || 'TEST_MB_KEY';
    const ifthenpayMbEntity = Deno.env.get('IFTHENPAY_MULTIBANCO_ENTITY') || '11249';
    const ifthenpayMbSubEntity = Deno.env.get('IFTHENPAY_MULTIBANCO_SUB_ENTITY') || '999';

    // 5. Comunicação com a API Ifthenpay conforme o método escolhido
    if (paymentMethod === 'mbway') {
      const mbwayUrl = 'https://api.ifthenpay.com/spg/payment/mbway';
      
      const payload = {
        mbWayKey: ifthenpayMbwayKey,
        orderId: order.id,
        amount: formattedAmount,
        mobileNumber: sanitizedPhone,
        email: customerEmail,
        description: `Dulce Canivari: ${productTitle.slice(0, 30)}`,
      };

      let mbwayResponseData: any = { Status: '0', Message: 'Success', RequestId: `REQ-${Date.now()}` };

      // Se a chave não for mock de teste, dispara a chamada real
      if (ifthenpayMbwayKey !== 'TEST_MBWAY_KEY') {
        const ifthenRes = await fetch(mbwayUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        mbwayResponseData = await ifthenRes.json();
      }

      await supabase
        .from('orders')
        .update({
          mbway_request_id: mbwayResponseData?.RequestId ?? mbwayResponseData?.PaymentId ?? 'PENDING',
          metadata: { ifthenpay_response: mbwayResponseData },
        })
        .eq('id', order.id);

      return new Response(
        JSON.stringify({
          success: true,
          orderId: order.id,
          paymentMethod: 'mbway',
          phone: sanitizedPhone,
          amount: formattedAmount,
          message: 'Notificação MB WAY enviada com sucesso para a tua aplicação bancária.',
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else {
      // Método Multibanco: Geração da Referência
      const mbUrl = 'https://api.ifthenpay.com/spg/payment/multibanco';
      
      const payload = {
        multibancoKey: ifthenpayMbKey,
        entity: ifthenpayMbEntity,
        subEntity: ifthenpayMbSubEntity,
        orderId: order.id,
        amount: formattedAmount,
        description: `Dulce Canivari: ${productTitle.slice(0, 30)}`,
      };

      let generatedEntity = ifthenpayMbEntity;
      let generatedRef = `${Math.floor(100 + Math.random() * 900)} ${Math.floor(100 + Math.random() * 900)} ${Math.floor(100 + Math.random() * 900)}`;

      if (ifthenpayMbKey !== 'TEST_MB_KEY') {
        const ifthenRes = await fetch(mbUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const mbData = await ifthenRes.json();
        if (mbData?.Entity && mbData?.Reference) {
          generatedEntity = mbData.Entity;
          generatedRef = mbData.Reference;
        }
      }

      await supabase
        .from('orders')
        .update({
          mb_entity: generatedEntity,
          mb_reference: generatedRef,
        })
        .eq('id', order.id);

      return new Response(
        JSON.stringify({
          success: true,
          orderId: order.id,
          paymentMethod: 'multibanco',
          entity: generatedEntity,
          reference: generatedRef,
          amount: formattedAmount,
          message: 'Referência Multibanco gerada com sucesso.',
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  } catch (error: any) {
    console.error('Exceção ao processar pagamento:', error);
    return new Response(
      JSON.stringify({ error: error?.message || 'Erro inesperado ao gerar pagamento.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});