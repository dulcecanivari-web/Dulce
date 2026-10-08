import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Mariana Fontes',
      age: '34 anos, Porto',
      text: 'Vivia há 6 anos a achar que o inchaço severo era normal do meu corpo. Após 3 semanas com o Método GAIA e no Clube, passei a comer sem medo de terminar o dia com dores agudas. É uma libertação que não tem preço.',
      highlight: 'Ventre desinchado & digestão diária sem dor',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Catarina Silva',
      age: '41 anos, Lisboa',
      text: 'A Dulce é uma profissional com uma sensibilidade e conhecimento raros. Acompanhou a minha disbiose e ajudou-me a parar com o uso diário de laxantes. Hoje o meu intestino funciona como um relógio.',
      highlight: 'Fim dos laxantes após 8 anos',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Inês Albuquerque',
      age: '29 anos, Coimbra',
      text: 'Os encontros ao vivo no Clube GAIA são o meu refúgio quinzenal. As receitas são deliciosas e fáceis de fazer para quem tem uma rotina de trabalho intensa. Sinto-me com o dobro da energia!',
      highlight: 'Mais disposição e clareza mental',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
  ];

  return (
    <section className="py-20 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B86F4B]">
            Histórias Reais de Transformação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3F5B45]">
            Mulheres que recuperaram a paz com o seu corpo
          </h2>
          <p className="text-base text-[#6B4F3F]/90">
            Mais do que números de balança ou diagnósticos frios: vidas transformadas com dignidade digestiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#FDFBF7] border-2 border-[#D8C4A8]/60 shadow-lg relative space-y-4 hover:-translate-y-1 transition-transform"
            >
              <Quote className="w-8 h-8 text-[#A67878]/30 absolute top-6 right-6" />

              <div className="flex items-center gap-1 text-[#B86F4B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-sm text-[#6B4F3F] leading-relaxed italic">
                "{t.text}"
              </p>

              <div className="pt-2">
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-[#3F5B45]/10 text-[#3F5B45]">
                  {t.highlight}
                </span>
              </div>

              <div className="pt-4 border-t border-[#D8C4A8]/40 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#3F5B45]"
                />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#3F5B45]">
                    {t.name}
                  </h4>
                  <span className="text-xs text-[#A67878]">{t.age}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};