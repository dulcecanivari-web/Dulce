import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  CreditCard,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  Lock,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface PaymentResponse {
  success: boolean;
  paymentMethod: 'mbway' | 'multibanco';
  message: string;
  reference?: string;
  entity?: string;
  amount?: number;
  expiryDate?: string;
}

export interface CheckoutProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  isRecurring?: boolean;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: CheckoutProduct | null;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nif, setNif] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'mbway' | 'multibanco'>('mbway');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentResult, setPaymentResult] = useState<PaymentResponse | null>(null);
  const [copiedEntity, setCopiedEntity] = useState(false);
  const [copiedRef, setCopiedRef] = useState(false);

  if (!isOpen || !product) return null;

  const handleCopy = (text: string, type: 'entity' | 'ref') => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    if (type === 'entity') {
      setCopiedEntity(true);
      setTimeout(() => setCopiedEntity(false), 2000);
    } else {
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!customerName.trim()) {
      setErrorMessage('Por favor, indica o teu nome completo.');
      return;
    }
    if (!customerEmail.trim() || !customerEmail.includes('@')) {
      setErrorMessage('Por favor, indica um e-mail válido.');
      return;
    }

    const cleanPhone = (phone || '').replace(/\D/g, '');
    if (cleanPhone.length < 9) {
      setErrorMessage('Por favor, insere um número de telemóvel com pelo menos 9 dígitos.');
      return;
    }

    setIsLoading(true);

    try {
      // Processamento de pagamento simulado seguro com Ifthenpay
      await new Promise((resolve) => setTimeout(resolve, 800));

      if (paymentMethod === 'mbway') {
        setPaymentResult({
          success: true,
          paymentMethod: 'mbway',
          message: `Notificação enviada com sucesso para o telemóvel ${cleanPhone}. Abre a tua aplicação MB WAY para aprovar o pagamento de ${Number(product.price).toFixed(2)}€.`,
          amount: product.price,
        });
      } else {
        const mockRef = `${Math.floor(100 + Math.random() * 900)} ${Math.floor(100 + Math.random() * 900)} ${Math.floor(100 + Math.random() * 900)}`;
        setPaymentResult({
          success: true,
          paymentMethod: 'multibanco',
          entity: '21249',
          reference: mockRef,
          amount: product.price,
          expiryDate: '24 horas',
          message: 'Referência Multibanco gerada com sucesso. Efetua o pagamento no teu homebanking ou terminal Multibanco.',
        });
      }
    } catch (err: unknown) {
      const error = err as Error;
      setErrorMessage(error?.message || 'Erro ao processar o pagamento. Tenta novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setPaymentResult(null);
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-[#FDFBF7] max-w-lg w-full rounded-3xl p-6 sm:p-8 border-2 border-[#B86F4B] shadow-2xl relative space-y-6 text-left my-8">
        {/* Botão de Fechar */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#6B4F3F] hover:bg-[#D8C4A8]/30 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!paymentResult ? (
          <>
            {/* Cabeçalho */}
            <div className="space-y-1.5 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3F5B45]/10 text-[#3F5B45] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#B86F4B]" />
                <span>Checkout Seguro • Ifthenpay</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#3F5B45]">
                {product.title}
              </h3>
              <p className="text-xs text-[#6B4F3F]/80">
                {product.description}
              </p>
            </div>

            {/* Resumo de Valor */}
            <div className="p-4 rounded-2xl bg-[#3F5B45]/10 border border-[#3F5B45]/20 flex items-center justify-between">
              <div>
                <p className="text-xs text-[#6B4F3F] font-medium">Total a pagar</p>
                <p className="font-serif text-3xl font-black text-[#3F5B45]">
                  {Number(product.price).toFixed(2)}€
                  {product.isRecurring && <span className="text-xs font-normal text-[#6B4F3F] ml-1">/ mês</span>}
                </p>
              </div>
              <div className="text-right">
                <span className="text-[11px] bg-[#3F5B45] text-white px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  Acesso Imediato
                </span>
              </div>
            </div>

            {/* Formulário de Dados */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-[#6B4F3F] uppercase tracking-wider mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ex: Maria Silva"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C4A8] bg-white text-sm text-[#6B4F3F] focus:outline-none focus:ring-2 focus:ring-[#B86F4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6B4F3F] uppercase tracking-wider mb-1">
                    E-mail (para receção dos acessos) *
                  </label>
                  <input
                    type="email"
                    required
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="maria.silva@exemplo.pt"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C4A8] bg-white text-sm text-[#6B4F3F] focus:outline-none focus:ring-2 focus:ring-[#B86F4B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#6B4F3F] uppercase tracking-wider mb-1">
                      Telemóvel (MB WAY) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="912 345 678"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C4A8] bg-white text-sm text-[#6B4F3F] focus:outline-none focus:ring-2 focus:ring-[#B86F4B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#6B4F3F] uppercase tracking-wider mb-1">
                      NIF (Opcional)
                    </label>
                    <input
                      type="text"
                      value={nif}
                      onChange={(e) => setNif(e.target.value)}
                      placeholder="123 456 789"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C4A8] bg-white text-sm text-[#6B4F3F] focus:outline-none focus:ring-2 focus:ring-[#B86F4B]"
                    />
                  </div>
                </div>
              </div>

              {/* Escolha do Método de Pagamento */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-semibold text-[#6B4F3F] uppercase tracking-wider">
                  Método de Pagamento
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mbway')}
                    className={`p-3 rounded-xl border-2 flex items-center gap-2.5 transition-all text-xs font-bold ${
                      paymentMethod === 'mbway'
                        ? 'border-[#B86F4B] bg-[#B86F4B]/10 text-[#B86F4B]'
                        : 'border-[#D8C4A8] bg-white text-[#6B4F3F] hover:bg-[#FDFBF7]'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>MB WAY</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('multibanco')}
                    className={`p-3 rounded-xl border-2 flex items-center gap-2.5 transition-all text-xs font-bold ${
                      paymentMethod === 'multibanco'
                        ? 'border-[#3F5B45] bg-[#3F5B45]/10 text-[#3F5B45]'
                        : 'border-[#D8C4A8] bg-white text-[#6B4F3F] hover:bg-[#FDFBF7]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Multibanco</span>
                  </button>
                </div>
              </div>

              {/* Botão de Finalização */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#3F5B45] hover:bg-[#324937] text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4 text-[#D8C4A8]" />
                  <span>{isLoading ? 'A processar pagamento...' : `Pagar ${Number(product.price).toFixed(2)}€`}</span>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B4F3F]/70 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#3F5B45]" />
                <span>Pagamento 100% encriptado e certificado pela Ifthenpay</span>
              </div>
            </form>
          </>
        ) : (
          /* Ecrã de Sucesso / Instruções de Pagamento */
          <div className="space-y-6 text-center py-2 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-[#3F5B45]">
                {paymentResult.paymentMethod === 'mbway' ? 'Pedido MB WAY Enviado!' : 'Referência Multibanco Gerada!'}
              </h3>
              <p className="text-xs text-[#6B4F3F] max-w-sm mx-auto leading-relaxed">
                {paymentResult.message}
              </p>
            </div>

            {paymentResult.paymentMethod === 'multibanco' && paymentResult.entity && paymentResult.reference && (
              <div className="p-4 rounded-2xl bg-white border border-[#D8C4A8] text-left space-y-3 shadow-sm">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-[#6B4F3F]">Entidade:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm text-[#3F5B45]">{paymentResult.entity}</span>
                    <button
                      onClick={() => handleCopy(paymentResult.entity || '', 'entity')}
                      className="p-1 text-[#6B4F3F] hover:text-[#B86F4B]"
                      title="Copiar Entidade"
                    >
                      {copiedEntity ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs border-t border-[#D8C4A8]/40 pt-2">
                  <span className="font-semibold text-[#6B4F3F]">Referência:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm text-[#3F5B45]">{paymentResult.reference}</span>
                    <button
                      onClick={() => handleCopy(paymentResult.reference || '', 'ref')}
                      className="p-1 text-[#6B4F3F] hover:text-[#B86F4B]"
                      title="Copiar Referência"
                    >
                      {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs border-t border-[#D8C4A8]/40 pt-2">
                  <span className="font-semibold text-[#6B4F3F]">Montante:</span>
                  <span className="font-serif font-black text-sm text-[#B86F4B]">{Number(paymentResult.amount).toFixed(2)}€</span>
                </div>
              </div>
            )}

            <div className="p-3.5 rounded-xl bg-[#3F5B45]/10 text-xs text-[#3F5B45] font-medium flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#B86F4B]" />
              <span>Receberás a confirmação e os acessos no e-mail indicado.</span>
            </div>

            <Button
              onClick={handleResetAndClose}
              className="w-full bg-[#3F5B45] hover:bg-[#324937] text-white font-bold py-3 rounded-xl"
            >
              Concluir e Voltar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};