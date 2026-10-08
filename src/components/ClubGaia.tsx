import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Heart, Users, Calendar, Video, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ClubGaiaProps {
  onOpenClubModal: () => void;
}

export const ClubGaia: React.FC<ClubGaiaProps> = ({ onOpenClubModal }) => {
  const testimonials = [
    {
      name: 'Sofia Rodrigues',
      age: '44 anos',
      city: 'Lisboa',
      quote: 'Depois de anos a acordar inchada e com cólicas constantes, em 3 semanas no Clube GAIA a minha digestão normalizou por completo.',
    },
    {
      name: 'Carla Mendes',
      age: '51 anos',
      city: 'Porto',
      quote: 'Os encontros quinzenais e o suporte da Dulce dão uma segurança que nunca tive com dietas restritivas normais. A energia voltou!',
    },
    {
      name: 'Teresa Antunes',
      age: '47 anos',
      city: 'Coimbra',
      quote: 'Os protocolos anti-inflamatórios são fáceis de aplicar no dia a dia da família. O Clube vale cada cêntimo.',
    },
  ];

  return (
    <section id="clube-gaia" className="py-20 lg:py-28 bg-[#3F5B45]/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Cabeçalho */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B86F4B]/15 text-[#B86F4B] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Porta 1 • Mentoria & Comunidade Mensal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3F5B45]">
              Clube GAIA: Acompanhamento contínuo por apenas 24,97€/mês
            </h2>
            <p className="text-base text-[#6B4F3F]/90 leading-relaxed max-w-3xl">
              Não precisas de enfrentar os desafios da digestão e dos desequilíbrios hormonais sozinha. O Clube GAIA oferece apoio clínico, orientação nas rotinas e uma comunidade calorosa de mulheres que partilham o mesmo propósito.
            </p>
          </div>

          <div className="lg:col-span-4 text-left lg:text-right">
            <Button
              onClick={onOpenClubModal}
              className="bg-[#B86F4B] hover:bg-[#a15f3e] text-white font-bold py-7 px-8 rounded-2xl text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all transform active:scale-95 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <span>Aderir ao Clube (24,97€)</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <p className="text-xs text-[#A67878] mt-2 font-medium">
              Sem fidelização • Cancela em 1 clique
            </p>
          </div>
        </div>

        {/* Pilares do Clube */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-3xl border border-[#D8C4A8]/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#3F5B45]/10 text-[#3F5B45] flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#3F5B45]">Encontros Quinzenais ao Vivo</h3>
            <p className="text-xs text-[#6B4F3F]/80 leading-relaxed">
              Sessões de mentoria com a Dulce Canivari para tirar dúvidas em direto e ajustar as tuas rotinas conforme a evolução do teu corpo.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#D8C4A8]/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#B86F4B]/10 text-[#B86F4B] flex items-center justify-center">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#3F5B45]">Biblioteca de Masterclasses</h3>
            <p className="text-xs text-[#6B4F3F]/80 leading-relaxed">
              Acesso total a gravações sobre SIBO, disbiose, suplementação orientada, receitas anti-inflamatórias e saúde do climatério.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#D8C4A8]/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#3F5B45]/10 text-[#3F5B45] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#3F5B45]">Comunidade & Apoio Ativo</h3>
            <p className="text-xs text-[#6B4F3F]/80 leading-relaxed">
              Ambiente seguro de partilha de experiências, dicas práticas de culinária saudável e celebração das tuas conquistas diárias.
            </p>
          </div>
        </div>

        {/* Carrossel de Testemunhos das Alunas do Clube */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#A67878]">Resultados Reais</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3F5B45]">
              O que dizem as mulheres do Clube GAIA
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#FDFBF7] p-6 rounded-3xl border border-[#D8C4A8] shadow-sm space-y-4">
                <p className="text-xs text-[#6B4F3F] italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-2 border-t border-[#D8C4A8]/40 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#3F5B45] block">{t.name}</span>
                    <span className="text-[11px] text-[#A67878]">{t.age} • {t.city}</span>
                  </div>
                  <span className="text-[10px] bg-[#3F5B45]/10 text-[#3F5B45] px-2 py-0.5 rounded-full font-bold">Membro Ativo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};