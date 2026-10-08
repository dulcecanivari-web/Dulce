import React from 'react';
import { MessageCircle, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight, UserCheck, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PersonalizedCareProps {
  onBackToHome?: () => void;
}

export const PersonalizedCare: React.FC<PersonalizedCareProps> = ({ onBackToHome }) => {
  const whatsappUrl = 'https://wa.me/351912345678?text=Ol%C3%A1%20Dulce,%20gostaria%20de%20saber%20informa%C3%A7%C3%B5es%20e%20vagas%20para%20o%20Acompanhamento%20Personalizado%201:1.';

  const features = [
    {
      title: 'Consulta Clínica Inicial Aprofundada (90 min)',
      desc: 'Análise detalhada de historial clínico, exames de fezes/sangue, rotina hormonal, sono e antecedentes de SII/SIBO.',
    },
    {
      title: 'Plano Nutricional e Fitoterápico 100% Individual',
      desc: 'Nada de protocolos genéricos. Uma estratégia sob medida respeitando as tuas preferências, intolerâncias e horários.',
    },
    {
      title: 'Suporte Direto e Próximo no WhatsApp',
      desc: 'Acesso ao canal privado de WhatsApp para tirar dúvidas de refeições, rótulos e sintomas em tempo real.',
    },
    {
      title: 'Consultas Quinzenais de Ajuste & Evolução',
      desc: 'Acompanhamento constante com reavaliação de biomarcadores e protocolo de reintrodução alimentar supervisionado.',
    },
  ];

  return (
    <section id="acompanhamento-personalizado" className="py-24 bg-[#FDFBF7] text-[#6B4F3F] text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className="text-xs font-bold text-[#3F5B45] hover:text-[#B86F4B] transition-colors flex items-center gap-1"
          >
            ← Voltar à Página Principal
          </button>
        )}

        {/* Cabeçalho */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3F5B45]/10 text-[#3F5B45] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#B86F4B]" />
            <span>Porta 4 • Vagas Restritas por Mês</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#3F5B45]">
            Acompanhamento Clínico Personalizado 1:1
          </h1>
          <p className="text-base sm:text-lg text-[#6B4F3F]/90 leading-relaxed max-w-3xl">
            Uma mentoria clínica individual para mulheres com quadros complexos de disbiose severa, SII, SIBO ou alterações hormonais acentuadas.
          </p>
        </div>

        {/* Grade de Pilares do Acompanhamento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#FDFBF7] border border-[#D8C4A8] shadow-sm space-y-2 hover:border-[#3F5B45] transition-colors"
            >
              <div className="flex items-center gap-2 text-[#3F5B45] font-serif font-bold text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#B86F4B] shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#6B4F3F]/80 leading-relaxed pl-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Card de Ação WhatsApp */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#3F5B45] text-[#FDFBF7] space-y-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D8C4A8]">Processo de Candidatura</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FDFBF7]">
              Como Agendar a Tua Triagem Inicial
            </h3>
            <p className="text-xs sm:text-sm text-[#FDFBF7]/90 leading-relaxed">
              Devido à alta proximidade e acompanhamento diário, abro apenas 4 a 6 vagas de mentoria individualizada por mês. Fala diretamente com a minha equipa no WhatsApp para verificar disponibilidade de agenda.
            </p>
          </div>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b859] text-white font-bold px-8 py-5 rounded-2xl text-sm uppercase tracking-wider shadow-lg transition-all transform active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Falar no WhatsApp para Vagas 1:1</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#D8C4A8]">
            <ShieldCheck className="w-4 h-4" />
            <span>Atendimento confidencial e triagem prévia sem compromisso</span>
          </div>
        </div>
      </div>
    </section>
  );
};