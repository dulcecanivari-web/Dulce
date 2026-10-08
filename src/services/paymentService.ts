import { supabase, Order, PaymentResponse } from '@/lib/supabase';

export interface CreateOrderPayload {
  customerName: string;
  email: string;
  phone?: string | null;
  nif?: string | null;
  paymentMethod: 'mbway' | 'multibanco' | 'cartao';
  total: number;
  productId: string;
}

export const paymentService = {
  async processPayment(payload: CreateOrderPayload): Promise<PaymentResponse> {
    // 1. Cria o registo do pedido
    const { data: order } = await supabase.createOrder({
      customer_name: payload.customerName || null,
      email: payload.email || null,
      phone: payload.phone || null,
      nif: payload.nif || null,
      payment_method: payload.paymentMethod,
      total: payload.total,
      status: 'pendente',
    });

    // 2. Aciona o Edge Function de pagamento
    if (supabase.functions && typeof supabase.functions.invoke === 'function') {
      const { data, error } = await supabase.functions.invoke<PaymentResponse>('payment-request', {
        body: {
          orderId: order?.id,
          amount: payload.total,
          method: payload.paymentMethod,
          customerName: payload.customerName,
          email: payload.email,
          phone: payload.phone,
          nif: payload.nif,
        },
      });

      if (error) {
        throw new Error(error.message || 'Falha ao processar pagamento');
      }

      if (data) {
        return data;
      }
    }

    // Fallback via helper direto se a Edge Function não retornar
    const fallbackResponse = await supabase.createPaymentRequest({
      orderId: order?.id ?? `ORD-${Date.now()}`,
      amount: payload.total,
      method: payload.paymentMethod,
      customerName: payload.customerName,
      email: payload.email,
      phone: payload.phone,
      nif: payload.nif,
    });

    return fallbackResponse.data;
  },
};