-- ========================================================
-- Schema do Supabase: E-commerce Dulce Canivari / Método GAIA
-- Integração Ifthenpay (MB WAY e Referência Multibanco)
-- ========================================================

-- 1. Criação da tabela principal de Encomendas (Orders)
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    user_id UUID DEFAULT NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    phone VARCHAR(20) NOT NULL,
    nif VARCHAR(20) DEFAULT NULL,
    product_id TEXT NOT NULL, -- Slug tipo TEXT (ex: 'clube-gaia-mensal', 'curso-menos-pausa')
    product_title TEXT NOT NULL,
    total NUMERIC(10, 2) NOT NULL,
    status TEXT NOT NULL DEFAULT 'pendente', -- 'pendente', 'pago', 'cancelado', 'falhado'
    payment_method TEXT NOT NULL, -- 'mbway' ou 'multibanco'
    mb_entity VARCHAR(10) DEFAULT NULL,
    mb_reference VARCHAR(15) DEFAULT NULL,
    mbway_request_id TEXT DEFAULT NULL,
    paid_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    metadata JSONB DEFAULT '{}'::jsonb
);

-- 2. Criação da tabela de Itens da Encomenda (Order Items)
CREATE TABLE IF NOT EXISTS public.order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
    product_id TEXT NOT NULL,
    product_title TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Índices para performance e consultas rápidas
CREATE INDEX IF NOT EXISTS idx_orders_status ON public.orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_product_id ON public.orders(product_id);
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON public.orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON public.order_items(order_id);

-- 4. Configuração de Segurança: Desativação de RLS para inserções públicas
ALTER TABLE public.orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items DISABLE ROW LEVEL SECURITY;

-- Em alternativa, caso RLS seja mantido ativado na infraestrutura:
-- ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Permitir checkout publico" ON public.orders FOR INSERT WITH CHECK (true);
-- CREATE POLICY "Permitir leitura de encomenda com ID" ON public.orders FOR SELECT USING (true);
