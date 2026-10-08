import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, Sparkles, CheckCircle2, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('clube');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contactos" className="py-20 bg-[#FDFBF7] text-[#6B4F3F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3F5B45]/10 text-[#3F5B45] text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4 text-[#B86F4B]" />
            <span>Contacto Direto & Dúvidas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3F5B45]">
            Fala Comigo ou com a Equipa
          </h2>
          <p className="text-base text-[#6B4F3F]/85 leading-relaxed">
            Tens alguma questão sobre o Clube GAIA, o Curso Meno(s)pausa ou pretendes agendar uma sessão individual? Deixa a tua mensagem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Informações de Apoio */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <Card className="p-6 sm:p-8 bg-[#3F5B45] text-[#FDFBF7] rounded-3xl shadow-xl space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#D8C4A8]">
                  Canais de Atendimento
                </h3>
                <p className="text-xs text-[#FDFBF7]/80 mt-1 leading-relaxed">
                  Respondemos habitualmente a todas as mensagens em menos de 24 horas úteis.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/10 text-[#D8C4A8] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#D8C4A8] block uppercase font-bold">E-mail de Apoio</span>
                    <span className="font-semibold text-white">contacto@dulcecanivari.pt</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/10 text-[#D8C4A8] shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#D8C4A8] block uppercase font-bold">WhatsApp Equipa</span>
                    <span className="font-semibold text-white">+351 912 345 678</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/10 text-[#D8C4A8] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#D8C4A8] block uppercase font-bold">Localização</span>
                    <span className="font-semibold text-white">Lisboa / Online em todo o Mundo</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                <div className="flex items-center gap-2 text-xs text-[#D8C4A8]">
                  <Clock className="w-4 h-4" />
                  <span>Segunda a Sexta • 09h00 às 18h00 (GMT)</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Formulário com Dropdown de Assunto */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 bg-white rounded-3xl border border-[#D8C4A8] shadow-lg text-left">
              {submitted ? (
                <div className="py-10 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#3F5B45] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#3F5B45]">
                    Mensagem Recebida com Sucesso!
                  </h3>
                  <p className="text-xs text-[#6B4F3F]/80 max-w-md mx-auto leading-relaxed">
                    Obrigada pelo teu contacto, {name}. A nossa equipa entrará em contacto para o e-mail {email} brevemente.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="bg-[#3F5B45] text-white text-xs px-6 py-2.5 rounded-xl font-semibold"
                  >
                    Enviar Outra Mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl font-bold text-[#3F5B45]">
                      Envia uma Mensagem
                    </h3>
                    <p className="text-xs text-[#6B4F3F]/70">
                      Preenche os campos abaixo para esclarecer dúvidas sobre os programas.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#6B4F3F] uppercase tracking-wider mb-1">
                        O Teu Nome *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Clara Ribeiro"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C4A8] bg-[#FDFBF7] text-sm text-[#6B4F3F] focus:outline-none focus:ring-2 focus:ring-[#B86F4B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#6B4F3F] uppercase tracking-wider mb-1">
                        O Teu E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="clara@exemplo.pt"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C4A8] bg-[#FDFBF7] text-sm text-[#6B4F3F] focus:outline-none focus:ring-2 focus:ring-[#B86F4B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#6B4F3F] uppercase tracking-wider mb-1">
                      Assunto Principal *
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C4A8] bg-[#FDFBF7] text-sm text-[#6B4F3F] focus:outline-none focus:ring-2 focus:ring-[#B86F4B]"
                    >
                      <option value="clube">Clube GAIA (Comunidade & Protocolos - 24,97€/mês)</option>
                      <option value="curso">Curso Meno(s)pausa (Climatério & Digestão - 97€)</option>
                      <option value="mapa">Sessão Gratuita / Dúvida do Mapa do Jardim Interno</option>
                      <option value="personalizado">Acompanhamento Personalizado 1:1</option>
                      <option value="parceria">Parceria / Palestras / Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#6B4F3F] uppercase tracking-wider mb-1">
                      A Tua Mensagem *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Partilha comigo o teu principal desafio digestivo ou questão..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C4A8] bg-[#FDFBF7] text-sm text-[#6B4F3F] focus:outline-none focus:ring-2 focus:ring-[#B86F4B]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#3F5B45] hover:bg-[#324937] text-white py-3.5 rounded-xl font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-2 text-xs transition-all"
                  >
                    {isSubmitting ? (
                      <span>A Enviar...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};