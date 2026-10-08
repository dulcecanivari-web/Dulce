import React from 'react';
import { Sparkles, ArrowUpRight, CheckCircle2, ClipboardCheck, Calendar, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface FreeMapSectionProps {
  onNavigateToCare: () => void;
}

export const FreeMapSection: React.FC<FreeMapSectionProps> = ({ onNavigateToCare }) => {
  const tallyUrl = 'https://tally.so/r/Y5kQJv';

  return (
    <section id="mapa-gratuito" className="py-20 bg-[#FDFBF7] border-t border-[#D8C4A8]/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A67878]/15 text-[#A67878] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#B86F4B]" />
            <span>Porta 3 • Diagnóstico Gratuito</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3F5B45]">
            Mapa Gratuito da Saúde Intestinal + Sessão
          </h2>
          <p className="text-base text-[#6B4F3F]/90">
            Descobre em que fase inflamatória se encontra o teu intestino e recebe orientações personalizadas através de um fluxo simples de 2 passos.
          </p>
        </div>

        {/* O Fluxo de 2 Passos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Passo 1 */}
          <Card className="bg-[#FDFBF7] border-2 border-[#D8C4A8] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm relative hover:border-[#3F5B45] transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold bg-[#3F5B45] text-white px-3 py-1 rounded-full uppercase tracking-wider">
                Passo 1
              </span>
              <ClipboardCheck className="w-6 h-6 text-[#B86F4B]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3F5B45]">
              Preenche o Questionário de Avaliação
            </h3>
            <p className="text-xs sm:text-sm text-[#6B4F3F]/80 leading-relaxed">
              Responde a 8 perguntas rápidas no formulário confidencial do Tally sobre a frequência de inchaço, sintomas digestivos e nível de energia. Demora menos de 3 minutos.
            </p>
            <div className="pt-2">
              <a
                href={tallyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#3F5B45] hover:bg-[#314836] text-[#FDFBF7] font-bold py-4 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <span>Abrir Questionário no Tally</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </Card>

          {/* Passo 2 */}
          <Card className="bg-[#FDFBF7] border-2 border-[#D8C4A8] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm relative hover:border-[#3F5B45] transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold bg-[#B86F4B] text-white px-3 py-1 rounded-full uppercase tracking-wider">
                Passo 2
              </span>
              <Calendar className="w-6 h-6 text-[#3F5B45]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3F5B45]">
              Recebe o Teu Mapa + Sessão de Orientação
            </h3>
            <p className="text-xs sm:text-sm text-[#6B4F3F]/80 leading-relaxed">
              Com base nas tuas respostas, recebes o teu mapa digestivo e a oportunidade de agendar uma sessão rápida para esclarecer o caminho mais eficiente para a tua cura.
            </p>
            <div className="p-3.5 rounded-xl bg-[#D8C4A8]/20 text-xs text-[#6B4F3F] space-y-1">
              <div className="flex items-center gap-2 font-semibold text-[#3F5B45]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Gratuito & Sem Compromisso</span>
              </div>
              <p className="text-[11px] text-[#6B4F3F]/80">Os teus dados clínicos são tratados sob total sigilo profissional.</p>
            </div>
          </Card>
        </div>

        {/* Transição Suave para a Porta 4 (Acompanhamento) */}
        <div className="p-6 rounded-2xl bg-[#D8C4A8]/20 border border-[#D8C4A8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-serif text-base font-bold text-[#3F5B45]">
              Precisas de uma análise clínica completa e personalizada imediata?
            </h4>
            <p className="text-xs text-[#6B4F3F]/80">
              Conhece o Acompanhamento 1:1 com consultas diretas e suporte no WhatsApp.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={onNavigateToCare}
            className="border-[#3F5B45] text-[#3F5B45] hover:bg-[#3F5B45] hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider shrink-0"
          >
            Ver Acompanhamento 1:1
          </Button>
        </div>
      </div>
    </section>
  );
};