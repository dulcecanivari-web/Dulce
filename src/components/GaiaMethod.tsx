import React, { useState } from 'react';
import { Shield, Apple, Zap, Sparkles, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface GaiaMethodProps {
  onOpenClubModal: () => void;
}

export const GaiaMethod: React.FC<GaiaMethodProps> = ({ onOpenClubModal }) => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      letter: 'G',
      code: 'Gut & Microbiota',
      title: 'Gut (Microbiota e Barreira Intestinal)',
      subtitle: 'Cicatrizar a mucosa e restaurar a simbiose de bactérias benéficas.',
      icon: Shield,
      description:
        'A raiz da maioria dos sintomas femininos reside na hiperpermeabilidade intestinal ("leaky gut") e na disbiose. Através de estratégias com glutamina, butirato e modulação direcionada, regeneramos a parede digestiva para estancar a inflamação de base.',
      keyActions: [
        'Reparação da integridade do epitélio intestinal',
        'Controlo da fermentação desregulada e gases',
        'Inibição de agentes oportunistas e cândida',
      ],
      result: 'Sensação de alívio rápido, ventre liso ao fim do dia e melhoria da absorção de nutrientes.',
    },
    {
      letter: 'A',
      code: 'Alimentação Anti-inflamatória',
      title: 'Alimentação Consciente & Anti-inflamatória',
      subtitle: 'Nutrição curativa sem o terrorismo de dietas restritivas eternas.',
      icon: Apple,
      description:
        'Não precisas de viver à base de sopa e frango cozido. Aplicamos um ciclo seguro de desinflamação temporária (FODMAPs adaptados) seguido da correta reintrodução para que recuperes o prazer de comer em família e fora de casa.',
      keyActions: [
        'Estratégia de limpeza enzimática digestiva',
        'Identificação de gatilhos alimentares reais vs falsos mitos',
        'Protocolo de reintrodução segura passo a passo',
      ],
      result: 'Fim do medo de comer e digestões leves sem sonolência pós-prandial.',
    },
    {
      letter: 'I',
      code: 'Inflamação & Nervo Vago',
      title: 'Inflamação Sistémica & Eixo Intestino-Cérebro',
      subtitle: 'Regular o nervo vago e modular o impacto do cortisol na motilidade.',
      icon: Zap,
      description:
        'O intestino é o segundo cérebro da mulher. Stress crónico, noites mal dormidas e ansiedade paralisam o complexo motor migratório (CMM). Tratamos a comunicação neuroendócrina para que o trânsito flua diariamente.',
      keyActions: [
        'Técnicas de ativação do tónus vagal digestivo',
        'Higiene do sono para recuperação das células parietais',
        'Modulação de serotonina e dopamina pela microbiota',
      ],
      result: 'Intestino regular como um relógio e mente livre de névoa mental.',
    },
    {
      letter: 'A',
      code: 'Autonomia & Manutenção',
      title: 'Autonomia e Longevidade Hormonal',
      subtitle: 'Conhecimento prático para seres a mestre do teu próprio corpo.',
      icon: Sparkles,
      description:
        'O objetivo final nunca é dependeres de consultas perpétuas ou dezenas de suplementos caros. Criamos um plano de estilo de vida sustentável, adaptado aos teus ciclos menstruais ou à transição do climatério/menopausa.',
      keyActions: [
        'Leitura e compreensão dos sinais precoces do teu corpo',
        'Adaptação nutricional às fases hormonais femininas',
        'Plano de SOS para viagens, festas e imprevistos',
      ],
      result: 'Liberdade total e confiança no teu corpo sem medo de recaídas.',
    },
  ];

  const currentPillar = pillars[activeTab];
  const PillarIcon = currentPillar.icon;

  return (
    <section id="metodo-gaia" className="py-20 bg-[#FDFBF7] border-t border-[#D8C4A8]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#B86F4B]">
            Metodologia Proprietária
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3F5B45]">
            O Carrossel do Método GAIA
          </h2>
          <p className="text-base text-[#6B4F3F]/90">
            Substituímos abordagens genéricas por uma estrutura de 4 pilares sequenciais desenhados para a biologia e metabolismo feminino.
          </p>
        </div>

        {/* Seletores dos Pilares (G - A - I - A) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`p-4 rounded-2xl text-left transition-all border ${
                activeTab === index
                  ? 'bg-[#3F5B45] text-[#FDFBF7] border-[#3F5B45] shadow-lg scale-102'
                  : 'bg-[#FDFBF7] text-[#6B4F3F] border-[#D8C4A8] hover:border-[#3F5B45]/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-serif text-2xl font-black ${activeTab === index ? 'text-[#D8C4A8]' : 'text-[#B86F4B]'}`}>
                  {pillar.letter}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                  Pilar 0{index + 1}
                </span>
              </div>
              <p className="text-xs font-semibold mt-1 truncate">
                {pillar.code}
              </p>
            </button>
          ))}
        </div>

        {/* Painel Central Interativo do Pilar */}
        <div className="bg-[#D8C4A8]/20 border border-[#D8C4A8] rounded-3xl p-6 sm:p-10 shadow-lg relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#3F5B45] text-[#FDFBF7]">
                  <PillarIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#B86F4B] uppercase tracking-wider">
                    Pilar {currentPillar.letter} • {currentPillar.code}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3F5B45]">
                    {currentPillar.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B4F3F] leading-relaxed">
                {currentPillar.description}
              </p>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold text-[#3F5B45] uppercase tracking-wider">
                  O que implementamos neste pilar:
                </p>
                {currentPillar.keyActions.map((action, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6B4F3F]">
                    <CheckCircle2 className="w-4 h-4 text-[#3F5B45] shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-[#FDFBF7] border border-[#D8C4A8] text-xs text-[#3F5B45] font-medium">
                <strong className="text-[#B86F4B]">Impacto direto:</strong> {currentPillar.result}
              </div>
            </div>

            {/* Coluna Visual do Pilar */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#FDFBF7] border border-[#D8C4A8]/60 shadow-sm space-y-4">
              <div className="w-20 h-20 rounded-full bg-[#3F5B45]/10 flex items-center justify-center text-4xl font-serif font-black text-[#3F5B45]">
                {currentPillar.letter}
              </div>
              <h4 className="font-serif text-lg font-bold text-[#3F5B45] text-center">
                {currentPillar.subtitle}
              </h4>
              <Button
                onClick={onOpenClubModal}
                className="w-full bg-[#B86F4B] hover:bg-[#9e5c3c] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider shadow-md"
              >
                Aprender no Clube GAIA (24,97€)
              </Button>
            </div>
          </div>

          {/* Navegação Prev / Next do Carrossel */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#D8C4A8]/50">
            <button
              onClick={() => setActiveTab((prev) => (prev === 0 ? pillars.length - 1 : prev - 1))}
              className="flex items-center gap-1.5 text-xs font-bold text-[#3F5B45] hover:text-[#B86F4B] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Pilar Anterior</span>
            </button>
            <div className="flex items-center gap-1.5">
              {pillars.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`h-2 rounded-full transition-all ${activeTab === idx ? 'w-6 bg-[#3F5B45]' : 'w-2 bg-[#D8C4A8]'}`}
                  aria-label={`Ir para pilar ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveTab((prev) => (prev === pillars.length - 1 ? 0 : prev + 1))}
              className="flex items-center gap-1.5 text-xs font-bold text-[#3F5B45] hover:text-[#B86F4B] transition-colors"
            >
              <span>Próximo Pilar</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};