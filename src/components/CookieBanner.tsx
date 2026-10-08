import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CookieBannerProps {
  onOpenPrivacyModal: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacyModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('dulce_canivari_cookies_consent');
      if (!consent) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('dulce_canivari_cookies_consent', 'accepted');
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('dulce_canivari_cookies_consent', 'essential_only');
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-fade-in">
      <div className="bg-[#FDFBF7] border-2 border-[#3F5B45]/30 rounded-3xl p-5 shadow-2xl space-y-4 text-left backdrop-blur-md">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-[#3F5B45]">
            <Cookie className="w-5 h-5 text-[#B86F4B]" />
            <h4 className="font-serif text-sm font-bold">Privacidade & Cookies (RGPD)</h4>
          </div>
          <button
            onClick={handleDecline}
            className="text-[#6B4F3F]/60 hover:text-[#6B4F3F] p-1"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-[#6B4F3F]/80 leading-relaxed">
          Utilizamos cookies essenciais e analíticos para garantir a melhor navegação e segurança dos pagamentos. Podes consultar a nossa{' '}
          <button
            onClick={onOpenPrivacyModal}
            className="text-[#B86F4B] underline font-semibold hover:text-[#8e5234]"
          >
            Política de Privacidade
          </button>.
        </p>

        <div className="flex items-center gap-2 pt-1">
          <Button
            onClick={handleAccept}
            className="flex-1 bg-[#3F5B45] hover:bg-[#324937] text-white text-xs font-bold py-2 rounded-xl"
          >
            Aceitar Todos
          </Button>
          <Button
            onClick={handleDecline}
            variant="outline"
            className="flex-1 border-[#D8C4A8] text-[#6B4F3F] text-xs font-semibold py-2 rounded-xl hover:bg-[#D8C4A8]/20"
          >
            Apenas Essenciais
          </Button>
        </div>
      </div>
    </div>
  );
};