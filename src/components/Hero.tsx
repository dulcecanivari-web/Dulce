import React from 'react';
import {
  Sparkles,
  Users,
  Compass,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onOpenClubModal: () => void;
  onNavigateToCourse: () => void;
  onScrollToFreeMap: () => void;
  onNavigateToCare: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenClubModal,
  onNavigateToCourse,
  onScrollToFreeMap,
  onNavigateToCare,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#F8F4EC] to-[#FDFBF7]">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D8C4A8]/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-[#3F5B45]/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Bloco 1: Headline de Autoridade e Apresentação */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3F5B45]/10 border border-[#3F5B45]/20 text-[#3F5B45] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#B86F4B]" />
              <span>Saúde Intestinal Feminina • Método GAIA</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3F5B45] leading-[1.15] tracking-tight">
              O teu corpo não está contra ti.{' '}
              <span className="italic font-normal text-[#B86F4B]">Está a comunicar.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#6B4F3F] leading-relaxed max-w-2xl font-normal">
              Especialmente desenhado para <strong className="font-semibold text-[#3F5B45]">mulheres 35+</strong> que sentem inchaço diário, alterações no trânsito intestinal, névoa mental e oscilações do climatério. Recupera a tua digestão, energia e equilíbrio hormonal com fitoterapia clínica e nutrição funcional.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                onClick={onOpenClubModal}
                className="bg-[#3F5B45] hover:bg-[#324937] text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 text-sm flex items-center gap-2.5 group"
              >
                <span>Entrar no Clube GAIA (24,97€/mês)</span>
                <ArrowRight className="w-4 h-4 text-[#D8C4A8] group-hover:translate-x-1 transition-transform" />
              </Button>

              <a
                href="https://tally.so/r/Y5kQJv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#B86F4B] text-[#B86F4B] hover:bg-[#B86F4B] hover:text-white transition-all font-semibold text-sm shadow-sm"
              >
                <Compass className="w-4 h-4" />
                <span>Preencher Mapa Gratuito</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs text-[#6B4F3F]/80 border-t border-[#D8C4A8]/40">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3F5B45]" />
                Cédula Profissional C-004750
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3F5B45]" />
                +1.200 Mulheres Acompanhadas
              </span>
            </div>
          </div>

          {/* Imagem de Autoridade da Dulce Canivari */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#3F5B45]/30 via-[#B86F4B]/20 to-transparent blur-xl -z-10" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-[#FDFBF7] shadow-2xl bg-[#E8DEC8]/50 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                  alt="Dulce Canivari — Especialista em Saúde Intestinal Feminina"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3F5B45]/80 via-transparent to-transparent" />
                
                {/* Badge Flutuante na Foto */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#FDFBF7]/95 backdrop-blur-md border border-[#D8C4A8]/60 text-left shadow-lg">
                  <p className="font-serif font-bold text-[#3F5B45] text-sm sm:text-base">
                    Dulce Canivari
                  </p>
                  <p className="text-xs text-[#B86F4B] font-medium">
                    Fitoterapeuta & Criadora do Método GAIA
                  </p>
                  <p className="text-[11px] text-[#6B4F3F]/80 mt-1 leading-snug">
                    Mais de 10 anos dedicados à saúde digestiva, microbiota e equilíbrio hormonal feminino.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 2: As 4 Portas de Acesso (Cards com Ação Direta) */}
        <div className="space-y-6 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#B86F4B]">
              Escolhe o Teu Caminho
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3F5B45]">
              As 4 Portas de Transformação
            </h2>
            <p className="text-xs sm:text-sm text-[#6B4F3F]">
              Soluções pensadas para o teu momento, desde o acompanhamento contínuo em comunidade até ao diagnóstico gratuito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {/* Porta 1: Clube GAIA */}
            <div className="group relative bg-[#FDFBF7] rounded-2xl p-6 border-2 border-[#3F5B45]/20 hover:border-[#3F5B45] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#3F5B45]/10 text-[#3F5B45]">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#B86F4B] text-white">
                    24,97€/mês
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#3F5B45] group-hover:text-[#B86F4B] transition-colors">
                    Porta 1: Clube GAIA
                  </h3>
                  <p className="text-xs text-[#6B4F3F] mt-1.5 leading-relaxed">
                    Comunidade ativa, encontros quinzenais ao vivo, receitas anti-inflamatórias e protocolos sazonais contínuos.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Button
                  onClick={onOpenClubModal}
                  className="w-full bg-[#3F5B45] hover:bg-[#324937] text-white text-xs font-bold py-2.5 rounded-xl shadow transition-all flex items-center justify-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Aderir ao Clube</span>
                </Button>
              </div>
            </div>

            {/* Porta 2: Curso Meno(s)pausa */}
            <div className="group relative bg-[#FDFBF7] rounded-2xl p-6 border-2 border-[#D8C4A8]/60 hover:border-[#B86F4B] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#B86F4B]/10 text-[#B86F4B]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#3F5B45] text-white">
                    97,00€ (Único)
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#3F5B45] group-hover:text-[#B86F4B] transition-colors">
                    Porta 2: Meno(s)pausa
                  </h3>
                  <p className="text-xs text-[#6B4F3F] mt-1.5 leading-relaxed">
                    Curso completo para aliviar sintomas do climatério, inchaço pós-refeição, afrontamentos e sono instável.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Button
                  onClick={onNavigateToCourse}
                  className="w-full bg-[#B86F4B] hover:bg-[#8e5234] text-white text-xs font-bold py-2.5 rounded-xl shadow transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Ver Detalhes do Curso</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>

            {/* Porta 3: Mapa do Jardim Interno */}
            <div className="group relative bg-[#FDFBF7] rounded-2xl p-6 border-2 border-[#A67878]/40 hover:border-[#A67878] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#A67878]/10 text-[#A67878]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    100% Gratuito
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#3F5B45] group-hover:text-[#A67878] transition-colors">
                    Porta 3: Mapa do Jardim
                  </h3>
                  <p className="text-xs text-[#6B4F3F] mt-1.5 leading-relaxed">
                    Questionário de diagnóstico rápido para mapear os gatilhos digestivos e receber orientações iniciais.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <a
                  href="https://tally.so/r/Y5kQJv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#A67878] hover:bg-[#885d5d] text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow transition-all text-center"
                >
                  <span>Preencher no Tally</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Porta 4: Acompanhamento Personalizado 1:1 */}
            <div className="group relative bg-[#FDFBF7] rounded-2xl p-6 border-2 border-[#D8C4A8]/60 hover:border-[#3F5B45] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#3F5B45]/10 text-[#3F5B45]">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#E8DEC8] text-[#6B4F3F]">
                    Vagas Limitadas
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#3F5B45] group-hover:text-[#3F5B45] transition-colors">
                    Porta 4: Acompanhamento 1:1
                  </h3>
                  <p className="text-xs text-[#6B4F3F] mt-1.5 leading-relaxed">
                    Mentoria clínica individual, plano fitoterápico sob medida e sessões de alinhamento com a Dulce Canivari.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Button
                  onClick={onNavigateToCare}
                  variant="outline"
                  className="w-full border-2 border-[#3F5B45] text-[#3F5B45] hover:bg-[#3F5B45] hover:text-white text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Saber Mais</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};