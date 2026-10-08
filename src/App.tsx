import { useState, useCallback, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { GaiaMethod } from '@/components/GaiaMethod';
import { ClubGaia } from '@/components/ClubGaia';
import { MenopausaCourse } from '@/components/MenopausaCourse';
import { FreeMapSection } from '@/components/FreeMapSection';
import { PersonalizedCare } from '@/components/PersonalizedCare';
import { PodcastSection } from '@/components/PodcastSection';
import { CoursesAndShop } from '@/components/CoursesAndShop';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { CheckoutModal, CheckoutProduct } from '@/components/CheckoutModal';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function App() {
  // Estado de navegação de páginas / vistas
  const [currentView, setCurrentView] = useState<'home' | 'menopausa' | 'care' | 'loja'>('home');
  const [checkoutProduct, setCheckoutProduct] = useState<CheckoutProduct | null>(null);
  const [cookieConsent, setCookieConsent] = useState<boolean>(true);

  // Verificação inicial de consentimento de cookies no browser
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('dulce_cookie_consent');
      if (!consent) {
        setCookieConsent(false);
      }
    }
  }, []);

  const handleAcceptCookies = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('dulce_cookie_consent', 'accepted');
    }
    setCookieConsent(true);
  };

  // Abertura do Checkout para o Clube GAIA (24,97€)
  const handleOpenClub = useCallback(() => {
    setCheckoutProduct({
      id: 'clube-gaia-mensal',
      title: 'Clube GAIA — Subscrição Mensal',
      price: 24.97,
      description: 'Acesso imediato à comunidade, encontros quinzenais e biblioteca de protocolos anti-inflamatórios.',
      isRecurring: true,
    });
  }, []);

  // Abertura do Checkout para o Curso Meno(s)pausa (97€)
  const handleOpenCourseCheckout = useCallback(() => {
    setCheckoutProduct({
      id: 'curso-menos-pausa',
      title: 'Curso Meno(s)pausa — Compra Única',
      price: 97.00,
      description: 'Guia definitivo para climatério, digestão, sono e equilíbrio hormonal feminino.',
      isRecurring: false,
    });
  }, []);

  const handleNavigateToCourse = useCallback(() => {
    setCurrentView('menopausa');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleNavigateToCare = useCallback(() => {
    setCurrentView('care');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleNavigateHome = useCallback(() => {
    setCurrentView('home');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleScrollToFreeMap = useCallback(() => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('mapa-gratuito');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('mapa-gratuito');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentView]);

  const handleScrollToContacts = useCallback(() => {
    const el = document.getElementById('contactos');
    el?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#6B4F3F] font-sans relative selection:bg-[#B86F4B]/20 selection:text-[#6B4F3F]">
      {/* Barra de Navegação Superior */}
      <Navbar
        onOpenClubModal={handleOpenClub}
        onNavigateToCourse={handleNavigateToCourse}
        onNavigateToCare={handleNavigateToCare}
        onNavigateHome={handleNavigateHome}
      />

      {/* Conteúdo Renderizado com Base na Estratégia das 4 Portas */}
      <main>
        {currentView === 'home' && (
          <>
            {/* Bloco 1 & 2: Hero com as 4 Portas Integradas */}
            <Hero
              onOpenClubModal={handleOpenClub}
              onNavigateToCourse={handleNavigateToCourse}
              onScrollToFreeMap={handleScrollToFreeMap}
              onNavigateToCare={handleNavigateToCare}
            />

            {/* Bloco 3: Carrossel / Tabs Interativas do Método GAIA (G-A-I-A) */}
            <GaiaMethod onOpenClubModal={handleOpenClub} />

            {/* Bloco 4: Porta 1 — Clube GAIA (24,97€/mês com Testemunhos e Benefícios) */}
            <ClubGaia onOpenClubModal={handleOpenClub} />

            {/* Bloco 5: Porta 3 — Mapa Gratuito do Jardim Interno (Tally) */}
            <FreeMapSection onNavigateToCare={handleNavigateToCare} />

            {/* Bloco 6: Podcast "O Intestino Fala" */}
            <PodcastSection />

            {/* Bloco 7: Loja Oficial com Suplementos e Checkout Integrado */}
            <CoursesAndShop
              onOpenCheckoutWithProduct={(prod: { id: string; title: string; price: number; description: string }) => {
                if (prod) {
                  setCheckoutProduct({
                    id: prod.id ?? 'produto',
                    title: prod.title ?? 'Produto Dulce Canivari',
                    price: prod.price ?? 0,
                    description: prod.description ?? '',
                    isRecurring: false,
                  });
                }
              }}
            />

            {/* Bloco 8: Prova Social e Testemunhos de Clientes (Sofia, Carla, Teresa) */}
            <Testimonials />

            {/* Bloco 9: Sobre Dulce Canivari (História e Cédula Profissional) */}
            <About onOpenContactModal={handleScrollToContacts} />

            {/* Bloco 10: Formulário de Contacto e Canais */}
            <ContactSection />
          </>
        )}

        {currentView === 'menopausa' && (
          <MenopausaCourse
            onBuyCourse={handleOpenCourseCheckout}
            onBackToHome={handleNavigateHome}
          />
        )}

        {currentView === 'care' && (
          <PersonalizedCare onBackToHome={handleNavigateHome} />
        )}
      </main>

      {/* Rodapé Oficial com 4 Colunas e Conformidade */}
      <Footer
        onOpenClubModal={handleOpenClub}
        onNavigateToCourse={handleNavigateToCourse}
        onNavigateToCare={handleNavigateToCare}
        onNavigateHome={handleNavigateHome}
      />

      {/* Modal Unificado de Checkout Ifthenpay (MB WAY & Multibanco) */}
      <CheckoutModal
        isOpen={Boolean(checkoutProduct)}
        onClose={() => setCheckoutProduct(null)}
        product={checkoutProduct}
      />

      {/* Banner de Cookies RGPD */}
      {!cookieConsent && (
        <aside
          aria-label="Consentimento de Cookies"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-[#3F5B45] text-white p-5 rounded-2xl shadow-2xl border border-[#D8C4A8]/40 animate-fade-in text-left space-y-3"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-white/10 text-[#D8C4A8] flex-shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-sm font-bold text-[#D8C4A8]">
                Privacidade & Cookies (RGPD)
              </h4>
              <p className="text-[11px] text-white/80 leading-relaxed">
                Utilizamos cookies essenciais para garantir o funcionamento seguro da loja, pagamentos e navegação adaptada ao teu bem-estar.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 pt-1">
            <Button
              onClick={handleAcceptCookies}
              className="bg-[#D8C4A8] hover:bg-[#c4b094] text-[#3F5B45] font-semibold text-xs px-4 py-2 rounded-xl transition-all shadow"
            >
              Aceitar e Continuar
            </Button>
          </div>
        </aside>
      )}
    </div>
  );
}