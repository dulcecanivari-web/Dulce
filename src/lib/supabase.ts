export interface Order {
  id: string;
  customer_name?: string | null;
  email?: string | null;
  phone?: string | null;
  nif?: string | null;
  payment_method: 'mbway' | 'multibanco' | 'cartao';
  total: number;
  status: 'pendente' | 'pago' | 'cancelado';
  user_id?: string | null;
  created_at: string;
}

export interface PaymentRequestParams {
  orderId: string;
  amount: number;
  method: 'mbway' | 'multibanco' | 'cartao';
  customerName?: string | null;
  email?: string | null;
  phone?: string | null;
  nif?: string | null;
}

export interface PaymentResponse {
  success: boolean;
  message?: string;
  method: 'mbway' | 'multibanco' | 'cartao';
  // Multibanco
  entity?: string;
  reference?: string;
  // MB WAY
  requestId?: string;
  // Geral
  amount: number;
  orderId: string;
  error?: string;
}

// Cliente mock resiliente para Supabase & Edge Functions
export const supabase = {
  functions: {
    invoke: async <T = any>(
      functionName: string,
      options?: { body?: Record<string, any> }
    ): Promise<{ data: T | null; error: Error | null }> => {
      try {
        const body = options?.body || {};

        if (functionName === 'payment-request') {
          const method = body.method || 'mbway';
          const amount = body.amount || 0;
          const orderId = body.orderId || `ORD-${Date.now()}`;

          if (method === 'mbway') {
            return {
              data: {
                success: true,
                method: 'mbway',
                orderId,
                amount,
                requestId: `MBW-${Math.floor(100000 + Math.random() * 900000)}`,
                message: 'Notificação MB WAY enviada para o teu telemóvel.',
              } as unknown as T,
              error: null,
            };
          }

          if (method === 'multibanco') {
            return {
              data: {
                success: true,
                method: 'multibanco',
                orderId,
                amount,
                entity: '21245',
                reference: `${Math.floor(100 + Math.random() * 900)} ${Math.floor(100 + Math.random() * 900)} ${Math.floor(100 + Math.random() * 900)}`,
                message: 'Referência Multibanco gerada com sucesso.',
              } as unknown as T,
              error: null,
            };
          }
        }

        return {
          data: { success: true } as unknown as T,
          error: null,
        };
      } catch (err) {
        return {
          data: null,
          error: err instanceof Error ? err : new Error(String(err)),
        };
      }
    },
  },

  createOrder: async (
    order: Omit<Order, 'id' | 'status' | 'created_at'> & {
      status?: 'pendente' | 'pago' | 'cancelado';
    }
  ): Promise<{ data: Order; error: null }> => {
    const newOrder: Order = {
      id: `ord_${Date.now()}`,
      customer_name: order.customer_name ?? null,
      email: order.email ?? null,
      phone: order.phone ?? null,
      nif: order.nif ?? null,
      payment_method: order.payment_method,
      total: order.total,
      status: order.status ?? 'pendente',
      user_id: order.user_id ?? null,
      created_at: new Date().toISOString(),
    };

    return { data: newOrder, error: null };
  },

  createPaymentRequest: async (
    params: PaymentRequestParams
  ): Promise<{ data: PaymentResponse; error: null }> => {
    if (params.method === 'mbway') {
      return {
        data: {
          success: true,
          method: 'mbway',
          orderId: params.orderId,
          amount: params.amount,
          requestId: `MBW-${Math.floor(100000 + Math.random() * 900000)}`,
          message: 'Notificação MB WAY enviada com sucesso.',
        },
        error: null,
      };
    }

    return {
      data: {
        success: true,
        method: 'multibanco',
        orderId: params.orderId,
        amount: params.amount,
        entity: '21245',
        reference: `${Math.floor(100 + Math.random() * 900)} ${Math.floor(100 + Math.random() * 900)} ${Math.floor(100 + Math.random() * 900)}`,
        message: 'Referência Multibanco gerada.',
      },
      error: null,
    };
  },
};