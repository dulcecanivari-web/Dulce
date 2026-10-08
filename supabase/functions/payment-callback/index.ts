// Supabase Edge Function: payment-callback
// Webhook Ifthenpay com verificação de segurança ANTI_PHISHING_KEY

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const expectedAntiPhishing = Deno.env.get('ANTI_PHISHING_KEY') || 'DULCE_SECURE_PHISHING_TOKEN_2026';

    // Os parâmetros da Ifthenpay chegam normalmente via Query String no callback GET ou POST
    const antiPhishing = url.searchParams.get('key') || url.searchParams.get('antiphishing') || '';
    const orderId = url.searchParams.get('order_id') || url.searchParams.get('id') || '';
    const amount = url.searchParams.get('amount') || '';
    const paymentMethod = url.searchParams.get('type') || 'payment';

    // 1. Verificação rigorosa do token Anti-Phishing para evitar fraudes
    if (antiPhishing !== expectedAntiPhishing) {
      console.warn('Tentativa de callback não autorizada / Anti-phishing inválido:', antiPhishing);
      return new Response(
        JSON.stringify({ error: 'Chave de segurança Anti-Phishing inválida.' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!orderId) {
      return new Response(
        JSON.stringify({ error: 'Identificador da encomenda não informado.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 2. Atualiza o estado da encomenda para 'pago'
    const { data: updatedOrder, error: updateError } = await supabase
      .from('orders')
      .update({
        status: 'pago',
        paid_at: new Date().toISOString(),
        metadata: {
          callback_received_at: new Date().toISOString(),
          callback_amount: amount,
          payment_type: paymentMethod,
        },
      })
      .eq('id', orderId)
      .select()
      .single();

    if (updateError) {
      console.error('Erro ao atualizar status da encomenda:', updateError);
      return new Response(
        JSON.stringify({ error: 'Erro ao processar encomenda na base de dados.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Encomenda ${orderId} confirmada e marcada como PAGA com sucesso.`);

    return new Response(
      JSON.stringify({ success: true, message: 'Pagamento registado com sucesso.', order: updatedOrder }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Erro interno no webhook callback:', error);
    return new Response(
      JSON.stringify({ error: error?.message || 'Erro interno no callback.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});