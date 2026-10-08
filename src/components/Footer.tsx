import React, { useState } from 'react';
import { Heart, Instagram, Youtube, Sparkles, Headphones, Shield, FileText, Check, X } from 'lucide-react';

interface FooterProps {
  onOpenClubModal?: () => void;
  onNavigateToCourse?: () => void;
  onNavigateToCare?: () => void;
  onNavigateHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenClubModal,
  onNavigateToCourse,
  onNavigateToCare,
  onNavigateHome,
}) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <>
      <footer className="bg-[#3F5B45] text-[#FDFBF7] pt-16 pb-12 border-t border-[#3F5B45]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {/* Coluna 1: Identidade */}
            <div className="space-y-4">
              <button
                onClick={onNavigateHome}
                className="font-serif text-2xl font-bold tracking-tight text-[#D8C4A8] text-left hover:text-white transition-colors"
              >
                Dulce Canivari
              </button>
              <p className="text-xs text-[#FDFBF7]/80 leading-relaxed">
                Mentoria e acompanhamento em Saúde Intestinal Feminina, microbiota e equilíbrio digestivo-hormonal. Criadora do Método GAIA.
              </p>
              <div className="flex items-center gap-3 text-[#D8C4A8]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#FDFBF7]/10 hover:bg-[#B86F4B] transition-colors text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#FDFBF7]/10 hover:bg-[#B86F4B] transition-colors text-white"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Coluna 2: Páginas de Conteúdo */}
            <div className="space-y-3">
              <h4 className="font-serif text-base font-bold text-[#D8C4A8]">
                Páginas
              </h4>
              <ul className="space-y-2 text-xs text-[#FDFBF7]/80">
                <li>
                  <button onClick={onNavigateHome} className="hover:text-white transition-colors text-left">
                    Início
                  </button>
                </li>
                <li>
                  <a href="#metodo-gaia" className="hover:text-white transition-colors">
                    Os 4 Pilares G-A-I-A
                  </a>
                </li>
                <li>
                  <a href="#loja" className="hover:text-white transition-colors">
                    Loja & Suplementos
                  </a>
                </li>
                <li>
                  <a href="#podcast" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <Headphones className="w-3.5 h-3.5 text-[#D8C4A8]" />
                    <span>Podcast O Intestino Fala</span>
                  </a>
                </li>
                <li>
                  <a href="#sobre-mim" className="hover:text-white transition-colors">
                    Sobre Mim
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Trabalhar Comigo (Hierarquia das 4 Portas) */}
            <div className="space-y-3">
              <h4 className="font-serif text-base font-bold text-[#D8C4A8]">
                Trabalhar Comigo
              </h4>
              <ul className="space-y-2.5 text-xs text-[#FDFBF7]/80">
                <li>
                  <button
                    onClick={onOpenClubModal}
                    className="hover:text-white transition-colors text-left flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B86F4B] group-hover:scale-125 transition-transform" />
                    <span>Clube GAIA (24,97€/mês)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={onNavigateToCourse}
                    className="hover:text-white transition-colors text-left flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8C4A8] group-hover:scale-125 transition-transform" />
                    <span>Curso Meno(s)pausa (97€)</span>
                  </button>
                </li>
                <li>
                  <a
                    href="https://tally.so/r/Y5kQJv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A67878] group-hover:scale-125 transition-transform" />
                    <span>Mapa do Jardim Interno (Gratuito)</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={onNavigateToCare}
                    className="hover:text-[#D8C4A8] text-white/95 font-medium transition-colors text-left flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                    <span>Acompanhamento Personalizado 1:1</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Comunidade & Legal */}
            <div className="space-y-3">
              <h4 className="font-serif text-base font-bold text-[#D8C4A8]">
                Comunidade & Legal
              </h4>
              <p className="text-[11px] text-[#FDFBF7]/70 leading-relaxed">
                Este espaço é dedicado à educação sobre nutrição funcional e bem-estar intestinal feminino.
              </p>
              <div className="pt-2 flex flex-col space-y-2 text-xs">
                <button
                  onClick={() => setShowPrivacyModal(true)}
                  className="hover:text-[#D8C4A8] text-left transition-colors flex items-center gap-1 text-[#FDFBF7]/80"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Política de Privacidade (RGPD)</span>
                </button>
                <button
                  onClick={() => setShowTermsModal(true)}
                  className="hover:text-[#D8FBF7] text-left transition-colors flex items-center gap-1 text-[#FDFBF7]/80"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Termos e Condições</span>
                </button>
              </div>
            </div>
          </div>

          {/* Linha Final de Copyright */}
          <div className="pt-8 border-t border-[#FDFBF7]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FDFBF7]/70 gap-4">
            <p>© {new Date().getFullYear()} Dulce Canivari. Todos os direitos reservados. Portugal.</p>
            <p className="flex items-center gap-1">
              Saúde Intestinal Feminina <Heart className="w-3.5 h-3.5 text-[#B86F4B] fill-current" />
            </p>
          </div>
        </div>
      </footer>

      {/* Modal Política de Privacidade */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FDFBF7] max-w-lg w-full rounded-2xl p-6 border border-[#D8C4A8] shadow-2xl relative space-y-4 text-left text-[#6B4F3F]">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#D8C4A8]/20"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-xl font-bold text-[#3F5B45]">
              Política de Privacidade (RGPD)
            </h3>
            <div className="text-xs space-y-2 max-h-72 overflow-y-auto leading-relaxed text-[#6B4F3F]/90">
              <p>Os teus dados pessoais (nome, e-mail e contacto) são tratados exclusivamente para o fornecimento dos materiais do Método GAIA, subscrições no Clube GAIA e comunicação de novidades.</p>
              <p>Garantimos a total confidencialidade dos teus dados e o cumprimento escrupuloso do Regulamento Geral sobre a Proteção de Dados (RGPD).</p>
              <p>Podes a qualquer momento solicitar a atualização ou eliminação dos teus dados enviando um e-mail para ola@dulcecanivari.pt.</p>
            </div>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="w-full py-2 bg-[#3F5B45] text-white rounded-xl text-xs font-bold"
            >
              Compreendi
            </button>
          </div>
        </div>
      )}

      {/* Modal Termos e Condições */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FDFBF7] max-w-lg w-full rounded-2xl p-6 border border-[#D8C4A8] shadow-2xl relative space-y-4 text-left text-[#6B4F3F]">
            <button
              onClick={() => setShowTermsModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#D8C4A8]/20"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-xl font-bold text-[#3F5B45]">
              Termos e Condições
            </h3>
            <div className="text-xs space-y-2 max-h-72 overflow-y-auto leading-relaxed text-[#6B4F3F]/90">
              <p>Os programas, conteúdos e recomendações partilhados pela Dulce Canivari destinam-se a fins educativos e de promoção do bem-estar e equilíbrio digestivo.</p>
              <p>Os suplementos sugeridos não substituem uma dieta equilibrada nem consultas médicas diagnósticas.</p>
              <p>A subscrição do Clube GAIA pode ser cancelada a qualquer momento antes da renovação seguinte sem penalizações.</p>
            </div>
            <button
              onClick={() => setShowTermsModal(false)}
              className="w-full py-2 bg-[#3F5B45] text-white rounded-xl text-xs font-bold"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};