import React, { useState } from 'react';
import { Flame, CheckCircle2, ShieldCheck, Sparkles, BookOpen, Clock, Heart, ArrowRight, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface MenopausaCourseProps {
  onBuyCourse: () => void;
  onBackToHome: () => void;
}

export const MenopausaCourse: React.FC<MenopausaCourseProps> = ({ onBuyCourse, onBackToHome }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const modules = [
    {
      num: '01',
      title: 'A Dança Hormonal & o Trato Digestivo',
      desc: 'Como a queda de estrogénio afeta o pH gástrico, a motilidade e a barreira da mucosa.',
      topics: ['O eixo estroboloma-microbiota', 'Porque a digestão abranda a partir dos 40 anos', 'Diferenciar SII de sintomas do climatério'],
    },
    {
      num: '02',
      title: 'Estratégia Nutricional Anti-Fogachos & Desinchaço',
      desc: 'Fitoestrogénios alimentares, fibras fermentáveis seguras e alimentos que acalmam os afrontamentos.',
      topics: ['Alimentos termogénicos amigos vs inimigos', 'Cardápio para barriga lisa pós-menopausa', 'Estratégia de proteínas e massa muscular'],
    },
    {
      num: '03',
      title: 'Suplementação Estratégica Baseada em Evidência',
      desc: 'O que realmente funciona: magnésio bisglicinato, probióticos direcionados e fitoterapia.',
      topics: ['Guia de suplementos indispensáveis', 'Como evitar suplementos inúteis ou prejudiciais', 'Horários ótimos para absorção celular'],
    },
    {
      num: '04',
      title: 'Sono Reparador, Nervo Vago e Emoções',
      desc: 'Protocolo de desaceleração do sistema nervoso simpático para recuperar noites tranquilas.',
      topics: ['Higiene do sono para evitar suores noturnos', 'Respiração vagal digestiva', 'Rotina matinal para estabilidade de humor'],
    },
  ];

  const faqs = [
    {
      q: 'O curso serve para quem ainda está na perimenopausa / pré-menopausa?',
      a: 'Sim! De facto, quanto mais cedo aprenderes a modular a tua microbiota e a tua alimentação, mais suave e assintomática será a transição para a menopausa definitiva.',
    },
    {
      q: 'Quanto tempo tenho de acesso ao conteúdo?',
      a: 'O acesso ao Curso Meno(s)pausa é vitalício, incluindo todas as atualizações futuras e materiais de suporte em PDF.',
    },
    {
      q: 'Como funciona o pagamento de 97€?',
      a: 'É um pagamento único de 97€ (sem quaisquer mensalidades ou cobranças adicionais). Podes pagar via Cartão de Crédito, MB WAY ou Multibanco.',
    },
    {
      q: 'Existe garantia de devolução?',
      a: 'Sim, tens 14 dias de garantia incondicional. Se sentires que o conteúdo não transformou a tua digestão e bem-estar, devolvemos 100% do teu dinheiro.',
    },
  ];

  return (
    <section id="curso-menopausa" className="pt-28 pb-20 bg-[#FDFBF7] text-[#6B4F3F] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top bar de navegação rápida */}
        <div className="flex items-center justify-between border-b border-[#D8C4A8]/60 pb-4">
          <button
            onClick={onBackToHome}
            className="text-xs font-bold text-[#3F5B45] hover:text-[#B86F4B] transition-colors flex items-center gap-1"
          >
            ← Voltar à Página Principal
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3F5B45]/10 text-[#3F5B45] text-xs font-bold uppercase">
            <Flame className="w-3.5 h-3.5 text-[#B86F4B]" />
            <span>Porta 2 • Compra Única (97€)</span>
          </div>
        </div>

        {/* Hero da Sales Page */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#3F5B45] leading-tight">
              Curso Meno(s)pausa: Vence o Inchaço, os Fogachos e o Cansaço.
            </h1>
            <p className="text-base sm:text-lg text-[#6B4F3F]/90 leading-relaxed">
              O programa definitivo de digestão e equilíbrio hormonal para mulheres que recusam aceitar o desconforto como "normal da idade".
            </p>

            <div className="p-4 rounded-2xl bg-[#D8C4A8]/20 border border-[#D8C4A8] space-y-2">
              <p className="text-xs font-bold text-[#3F5B45] uppercase tracking-wider">
                O que vais desbloquear neste curso:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B4F3F]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3F5B45]" />
                  <span>Protocolo anti-distensão abdominal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3F5B45]" />
                  <span>Redução natural de afrontamentos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3F5B45]" />
                  <span>Guia de fitoestrogénios e suplementos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3F5B45]" />
                  <span>Plano de sono e sistema nervoso</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card de Checkout da Sales Page */}
          <div className="lg:col-span-5">
            <Card className="bg-[#FDFBF7] border-2 border-[#3F5B45] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#B86F4B] uppercase tracking-wider">
                  Acesso Imediato & Vitalício
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#3F5B45]">
                  Curso Completo Meno(s)pausa
                </h3>
              </div>

              <div className="py-2 border-y border-[#D8C4A8]/60">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl font-black text-[#3F5B45]">97€</span>
                  <span className="text-xs text-[#6B4F3F] font-semibold">pagamento único</span>
                </div>
                <p className="text-[11px] text-[#A67878] mt-1">Sem subscrições. Acesso a todas as futuras atualizações.</p>
              </div>

              <div className="space-y-2 text-xs text-[#6B4F3F]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#3F5B45]" />
                  <span>4 Módulos completos em vídeo de alta definição</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#3F5B45]" />
                  <span>E-books e tabelas práticas descarregáveis em PDF</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#3F5B45]" />
                  <span>Áudios de ativação do Nervo Vago para o sono</span>
                </div>
              </div>

              <Button
                onClick={onBuyCourse}
                size="lg"
                className="w-full bg-[#3F5B45] hover:bg-[#2d4231] text-[#FDFBF7] font-bold py-6 rounded-xl text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
              >
                <span>Comprar Curso por 97€</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#A67878]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Garantia de satisfação incondicional de 14 dias</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Grade de Módulos */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#B86F4B]">Estrutura Pedagógica</span>
            <h2 className="font-serif text-3xl font-bold text-[#3F5B45]">O Conteúdo Passo a Passo</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FDFBF7] border border-[#D8C4A8] shadow-sm space-y-4 hover:border-[#3F5B45] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif font-black text-[#B86F4B]">Módulo {m.num}</span>
                  <div className="p-2 rounded-xl bg-[#3F5B45]/10 text-[#3F5B45]">
                    <BookOpen className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#3F5B45]">{m.title}</h3>
                <p className="text-xs text-[#6B4F3F]/80 leading-relaxed">{m.desc}</p>
                <div className="pt-2 border-t border-[#D8C4A8]/40 space-y-1.5">
                  {m.topics.map((t, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 text-xs text-[#6B4F3F]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3F5B45] shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs da Sales Page */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#B86F4B]">Tira as Tuas Dúvidas</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3F5B45]">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#D8C4A8] bg-[#FDFBF7] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between font-serif font-bold text-sm sm:text-base text-[#3F5B45]"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#B86F4B]" /> : <ChevronDown className="w-4 h-4 text-[#6B4F3F]" />}
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-[#6B4F3F]/90 leading-relaxed border-t border-[#D8C4A8]/30 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final da Sales Page */}
        <div className="p-8 rounded-3xl bg-[#3F5B45] text-[#FDFBF7] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-[#FDFBF7]">Pronta para transformar a tua menopausa?</h3>
            <p className="text-xs text-[#FDFBF7]/80">Compra hoje por 97€ com acesso vitalício e garantia de 14 dias.</p>
          </div>
          <Button
            onClick={onBuyCourse}
            className="bg-[#B86F4B] hover:bg-[#a15f3e] text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider shrink-0"
          >
            Comprar Agora (97€)
          </Button>
        </div>
      </div>
    </section>
  );
};