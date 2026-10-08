import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Headphones, ShoppingBag, Mail, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onOpenClubModal: () => void;
  onNavigateToCourse: () => void;
  onNavigateToCare: () => void;
  onNavigateHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenClubModal,
  onNavigateToCourse,
  onNavigateToCare,
  onNavigateHome,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm border-b border-[#D8C4A8]/40 py-3'
          : 'bg-[#FDFBF7]/85 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="group flex flex-col text-left focus:outline-none"
          >
            <span className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-[#3F5B45] group-hover:text-[#B86F4B] transition-colors">
              Dulce Canivari
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#A67878] font-semibold -mt-0.5">
              Saúde Intestinal Feminina • Método GAIA
            </span>
          </button>

          <nav className="hidden xl:flex items-center gap-6 text-[14px] font-medium text-[#6B4F3F]">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#3F5B45] transition-colors"
            >
              Início
            </button>
            <a href="#metodo-gaia" className="hover:text-[#3F5B45] transition-colors">
              Método GAIA
            </a>
            <button
              onClick={onOpenClubModal}
              className="text-[#B86F4B] font-semibold hover:text-[#8e5234] flex items-center gap-1"
            >
              <span>Clube GAIA</span>
              <span className="text-[10px] bg-[#B86F4B]/15 text-[#B86F4B] px-1.5 py-0.5 rounded-full font-bold">24,97€/mês</span>
            </button>
            <button
              onClick={onNavigateToCourse}
              className="hover:text-[#3F5B45] transition-colors flex items-center gap-1"
            >
              <span>Curso Meno(s)pausa</span>
              <span className="text-[10px] bg-[#3F5B45]/15 text-[#3F5B45] px-1.5 py-0.5 rounded-full font-bold">97€</span>
            </button>
            <a href="#loja" className="hover:text-[#3F5B45] transition-colors flex items-center gap-1">
              <ShoppingBag className="w-3.5 h-3.5 text-[#B86F4B]" />
              <span>Loja</span>
            </a>
            <a href="#podcast" className="hover:text-[#3F5B45] transition-colors flex items-center gap-1">
              <Headphones className="w-3.5 h-3.5 text-[#B86F4B]" />
              <span>Podcast</span>
            </a>
            <a
              href="https://tally.so/r/Y5kQJv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3F5B45] transition-colors font-medium flex items-center gap-1"
            >
              <Compass className="w-3.5 h-3.5 text-[#A67878]" />
              <span>Mapa Gratuito</span>
            </a>
            <a href="#contactos" className="hover:text-[#3F5B45] transition-colors flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-[#3F5B45]" />
              <span>Contactos</span>
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <Button
              onClick={onOpenClubModal}
              className="bg-[#3F5B45] hover:bg-[#324937] text-[#FDFBF7] font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 text-xs tracking-wider uppercase flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D8C4A8]" />
              <span>ENTRAR NO CLUBE</span>
            </Button>
          </div>

          <div className="flex xl:hidden items-center gap-2">
            <Button
              onClick={onOpenClubModal}
              size="sm"
              className="bg-[#3F5B45] text-xs px-3 py-1.5 rounded-lg text-[#FDFBF7]"
            >
              CLUBE
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-[#6B4F3F] hover:bg-[#D8C4A8]/30 transition-colors focus:outline-none"
              aria-label="Abrir Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-[#FDFBF7] border-b border-[#D8C4A8] px-5 py-6 shadow-2xl animate-fade-in text-left">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => {
                onNavigateHome();
                setIsOpen(false);
              }}
              className="text-base font-medium py-2 px-3 rounded-lg hover:bg-[#D8C4A8]/20 text-left"
            >
              Início
            </button>
            <a
              href="#metodo-gaia"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium py-2 px-3 rounded-lg hover:bg-[#D8C4A8]/20"
            >
              Método GAIA (4 Pilares)
            </a>
            <button
              onClick={() => {
                onOpenClubModal();
                setIsOpen(false);
              }}
              className="text-base font-semibold py-2 px-3 rounded-lg bg-[#B86F4B]/10 text-[#B86F4B] flex items-center justify-between text-left"
            >
              <span>Clube GAIA</span>
              <span className="text-xs bg-[#B86F4B] text-white px-2 py-0.5 rounded-full font-bold">24,97€/mês</span>
            </button>
            <button
              onClick={() => {
                onNavigateToCourse();
                setIsOpen(false);
              }}
              className="text-base font-semibold py-2 px-3 rounded-lg hover:bg-[#3F5B45]/10 text-[#3F5B45] flex items-center justify-between text-left"
            >
              <span>Curso Meno(s)pausa</span>
              <span className="text-xs bg-[#3F5B45] text-white px-2 py-0.5 rounded-full font-bold">97€</span>
            </button>
            <a
              href="#loja"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium py-2 px-3 rounded-lg hover:bg-[#D8C4A8]/20"
            >
              Loja Oficial & Suplementos
            </a>
            <a
              href="#podcast"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium py-2 px-3 rounded-lg hover:bg-[#D8C4A8]/20"
            >
              Podcast "O Intestino Fala"
            </a>
            <a
              href="https://tally.so/r/Y5kQJv"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium py-2 px-3 rounded-lg hover:bg-[#D8C4A8]/20 text-[#A67878]"
            >
              Mapa do Jardim Interno (Tally)
            </a>
            <button
              onClick={() => {
                onNavigateToCare();
                setIsOpen(false);
              }}
              className="text-base font-semibold py-2 px-3 rounded-lg hover:bg-[#D8C4A8]/20 text-emerald-800 text-left"
            >
              Acompanhamento 1:1
            </button>
            <a
              href="#contactos"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium py-2 px-3 rounded-lg hover:bg-[#D8C4A8]/20"
            >
              Contactos
            </a>
          </div>
        </div>
      )}
    </header>
  );
};