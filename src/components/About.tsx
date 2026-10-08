import React from 'react';
import { Heart, Award, Sparkles, BookOpen, Quote, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AboutProps {
  onOpenContactModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContactModal }) => {
  return (
    <section id="sobre-mim" className="py-20 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Imagem Dulce Canivari */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-3xl overflow-hidden border-4 border-[#D8C4A8] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1594824813568-75f822262573?auto=format&fit=crop&w=800&q=85"
                  alt="Dulce Canivari no consultório"
                  className="w-full h-auto object-cover filter contrast-[1.03]"
                />
              </div>

              {/* Caixa de Citação */}
              <div className="mt-6 p-5 rounded-2xl bg-[#D8C4A8]/30 border border-[#D8C4A8] relative text-left">
                <Quote className="w-8 h-8 text-[#B86F4B]/30 absolute top-3 right-3" />
                <p className="font-serif italic text-sm text-[#6B4F3F] leading-relaxed">
                  "O teu intestino não é apenas um tubo digestivo: é o centro das tuas emoções, da tua imunidade e da tua produção hormonal."
                </p>
                <span className="block mt-2 text-xs font-bold uppercase tracking-wider text-[#3F5B45]">
                  — Dulce Canivari
                </span>
              </div>
            </div>
          </div>

          {/* Biografia e Missão */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B86F4B]">
                Sobre Mim
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3F5B45]">
                Ajudar-te a viver sem dor, sem inchaço e em sintonia com o teu corpo.
              </h2>
            </div>

            <p className="text-base text-[#6B4F3F]/90 leading-relaxed">
              Olá! Sou a <strong className="text-[#3F5B45]">Dulce Canivari</strong>, especialista dedicada à Saúde Intestinal da Mulher. Durante anos acompanhei centenas de mulheres que se sentiam incompreendidas após ouvirem repetidamente que <em>"é apenas stress"</em> ou que <em>"ter a barriga inchada é normal"</em>.
            </p>

            <p className="text-base text-[#6B4F3F]/90 leading-relaxed">
              Não, não é normal viver refém de laxantes, chás desinchantes ineficazes ou sentir desconforto depois de cada refeição. A minha abordagem une a mais recente <strong>evidência científica da microbiota</strong>, nutrição anti-inflamatória funcional e a regulação do sistema nervoso parassimpático.
            </p>

            {/* Pilares Profissionais */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#3F5B45]/15 text-[#3F5B45] shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3F5B45]">Formação Especializada Contínua</h4>
                  <p className="text-xs text-[#6B4F3F]/80">
                    Certificações internacionais em Microbiota Intestinal, Disbiose, Síndrome do Intestino Irritável (SII) e Eixo Cérebro-Intestino.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#B86F4B]/15 text-[#B86F4B] shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#B86F4B]">Escuta Ativa e Humanizada</h4>
                  <p className="text-xs text-[#6B4F3F]/80">
                    Aqui não há planos copiados. Cada mulher tem um ecossistema único, uma rotina e uma história de vida que importam.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#A67878]/20 text-[#A67878] shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#6B4F3F]">Criadora do Método GAIA & Autora</h4>
                  <p className="text-xs text-[#6B4F3F]/80">
                    Autora de guias práticos e anfitriã do Podcast sobre saúde feminina e digestão descomplicada.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button
                onClick={onOpenContactModal}
                className="bg-[#3F5B45] hover:bg-[#324937] text-white rounded-xl px-6 py-3 font-semibold shadow-md"
              >
                Falar Diretamente Comigo
              </Button>
              <a
                href="#metodo-gaia"
                className="text-sm font-semibold text-[#B86F4B] hover:text-[#8e5234] underline underline-offset-4"
              >
                Conhecer o Método GAIA →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};