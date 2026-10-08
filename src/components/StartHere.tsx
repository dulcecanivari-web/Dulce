import React, { useState } from 'react';
import { Sparkles, ArrowRight, HelpCircle, CheckCircle2, RotateCcw } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface StartHereProps {
  onOpenClubModal: () => void;
  onOpenContactModal: () => void;
}

export const StartHere: React.FC<StartHereProps> = ({ onOpenClubModal, onOpenContactModal }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [step, setStep] = useState<'quiz' | 'result'>('quiz');

  const symptomsList = [
    { id: 'bloat', label: 'Barriga estufada/inchada que piora ao longo do dia' },
    { id: 'constipation', label: 'Obstipação (dificuldade ou dias sem ir à casa de banho)' },
    { id: 'gas_pain', label: 'Gases frequentes, cólicas ou dor abdominal pós-refeição' },
    { id: 'fatigue', label: 'Cansaço inexplicável, névoa mental ou quebras de energia' },
    { id: 'skin_mood', label: 'Alterações de humor, ansiedade ou problemas de pele (acne/rosácea)' },
    { id: 'food_fear', label: 'Medo de comer e já não saber que alimentos te fazem mal' },
  ];

  const toggleSymptom = (id: string) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  const handleEvaluate = () => {
    if (selectedSymptoms.length === 0) {
      alert('Por favor, seleciona pelo menos um sintoma para fazermos a triagem.');
      return;
    }
    setStep('result');
  };

  const handleReset = () => {
    setSelectedSymptoms([]);
    setStep('quiz');
  };

  return (
    <section id="comeca-aqui" className="py-20 bg-[#D8C4A8]/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B86F4B]">
            Orientação Personalizada
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3F5B45]">
            Começa por Aqui: Qual é o teu maior desafio digestivo?
          </h2>
          <p className="text-base text-[#6B4F3F]/90 max-w-2xl mx-auto">
            Não sabes se precisas do Clube, de um Curso ou de Consulta Individual? Faz esta autoavaliação rápida e recebe o teu plano recomendado.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto bg-[#FDFBF7] border-2 border-[#D8C4A8] shadow-xl text-left rounded-3xl overflow-hidden">
          {step === 'quiz' ? (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[#D8C4A8]/40 pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A67878]">
                  Triagem Inicial • Seleciona o que sentes com frequência:
                </span>
                <span className="text-xs font-medium text-[#3F5B45]">
                  {selectedSymptoms.length} selecionados
                </span>
              </div>

              <div className="space-y-3">
                {symptomsList.map((symptom) => {
                  const isChecked = selectedSymptoms.includes(symptom.id);
                  return (
                    <button
                      key={symptom.id}
                      type="button"
                      onClick={() => toggleSymptom(symptom.id)}
                      className={`w-full p-4 rounded-xl border transition-all text-left flex items-center justify-between ${
                        isChecked
                          ? 'bg-[#3F5B45]/10 border-[#3F5B45] text-[#3F5B45] font-medium shadow-sm'
                          : 'bg-white/70 border-[#D8C4A8]/60 text-[#6B4F3F] hover:border-[#B86F4B]/50'
                      }`}
                    >
                      <span className="text-sm sm:text-base pr-4">{symptom.label}</span>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          isChecked
                            ? 'bg-[#3F5B45] border-[#3F5B45] text-white'
                            : 'border-[#D8C4A8]'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#6B4F3F]/70 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-[#A67878]" />
                  Respostas anónimas e recomendação imediata.
                </span>
                <Button
                  onClick={handleEvaluate}
                  className="w-full sm:w-auto bg-[#B86F4B] hover:bg-[#a15f3e] text-[#FDFBF7] font-semibold px-8 py-3 rounded-xl gap-2 shadow-md"
                >
                  <span>Ver Recomendação para Mim</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-8 space-y-6 animate-fade-in">
              <div className="p-4 rounded-2xl bg-[#3F5B45]/10 border border-[#3F5B45]/20 flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-[#3F5B45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#3F5B45]">
                    Diagnóstico de Perfil: Inflamação & Disbiose Funcional
                  </h4>
                  <p className="text-sm text-[#6B4F3F] mt-1 leading-relaxed">
                    Com base nos teus {selectedSymptoms.length} sintomas apontados, a tua mucosa intestinal e microbiota precisam de desinflamação, reposição da barreira intestinal e regulação do trânsito.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Opção Recomendada 1 */}
                <div className="p-5 rounded-2xl border-2 border-[#B86F4B] bg-[#FDFBF7] space-y-3 relative flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="bg-[#B86F4B] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Mais Recomendado
                    </span>
                    <h5 className="font-serif text-lg font-bold text-[#3F5B45]">
                      Clube GAIA (Comunidade & Protocolo Contínuo)
                    </h5>
                    <p className="text-xs text-[#6B4F3F] leading-relaxed">
                      Ideal para teres suporte semanal, cardápios anti-inflamatórios testados, aulas práticas e acompanhamento direto comigo e com outras mulheres com o mesmo percurso.
                    </p>
                  </div>
                  <Button
                    onClick={onOpenClubModal}
                    className="w-full bg-[#B86F4B] hover:bg-[#9c5938] text-white rounded-xl text-sm font-semibold"
                  >
                    Conhecer o Clube GAIA
                  </Button>
                </div>

                {/* Opção Recomendada 2 */}
                <div className="p-5 rounded-2xl border border-[#D8C4A8] bg-white/60 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="bg-[#3F5B45]/10 text-[#3F5B45] text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Abordagem Individual
                    </span>
                    <h5 className="font-serif text-lg font-bold text-[#3F5B45]">
                      Consulta Clínica Personalizada
                    </h5>
                    <p className="text-xs text-[#6B4F3F] leading-relaxed">
                      Para casos crónicos que necessitam de leitura de análises clínicas aprofundadas, modulação de suplementação avançada e plano 1:1 sob medida.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={onOpenContactModal}
                    className="w-full border-[#3F5B45] text-[#3F5B45] hover:bg-[#3F5B45]/10 rounded-xl text-sm font-medium"
                  >
                    Agendar Triagem de Consulta
                  </Button>
                </div>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-[#A67878] hover:text-[#6B4F3F] underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Repetir autoavaliação</span>
                </button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};