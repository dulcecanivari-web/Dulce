import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  type,
  onClose,
}) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-[#FDFBF7] max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-[#D8C4A8] shadow-2xl relative space-y-6 text-left my-8 max-h-[85vh] flex flex-col">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between border-b border-[#D8C4A8]/50 pb-4">
          <div className="flex items-center gap-2.5 text-[#3F5B45]">
            {type === 'privacy' ? <ShieldCheck className="w-6 h-6 text-[#B86F4B]" /> : <FileText className="w-6 h-6 text-[#B86F4B]" />}
            <h3 className="font-serif text-xl font-bold">
              {type === 'privacy' ? 'Política de Privacidade & Proteção de Dados' : 'Termos e Condições Gerais'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#6B4F3F] hover:bg-[#D8C4A8]/30 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo com Scroll */}
        <div className="overflow-y-auto pr-2 space-y-4 text-xs text-[#6B4F3F]/85 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="font-semibold text-sm text-[#3F5B45]">
                1. Compromisso de Privacidade e Conformidade com o RGPD (Regulamento UE 2016/679)
              </p>
              <p>
                A privacidade e segurança dos teus dados pessoais são uma prioridade absoluta. Todos os dados recolhidos (como nome, endereço de e-mail e número de telemóvel para processamento de pagamentos MB WAY/Multibanco) são tratados com estrita confidencialidade e utilizados única e exclusivamente para a prestação dos serviços subscritos, envio de materiais didáticos e comunicação sobre o Clube GAIA e formações.
              </p>

              <p className="font-semibold text-sm text-[#3F5B45]">
                2. Processamento de Pagamentos e Segurança
              </p>
              <p>
                Os pagamentos realizados através de MB WAY ou Referência Multibanco são processados pela entidade autorizada Ifthenpay Lda. A nossa plataforma não armazena dados bancários confidenciais ou palavras-passe de autenticação bancária.
              </p>

              <p className="font-semibold text-sm text-[#3F5B45]">
                3. Os Teus Direitos
              </p>
              <p>
                Em conformidade com a legislação europeia de proteção de dados, tens o direito de aceder, retificar, limitar ou solicitar o apagamento dos teus dados pessoais a qualquer momento, através do e-mail <strong>contacto@dulcecanivari.pt</strong>.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-sm text-[#3F5B45]">
                1. Natureza dos Serviços e Aconselhamento
              </p>
              <p>
                Os programas, mentorias do Clube GAIA, cursos e conteúdos disponibilizados no website de Dulce Canivari têm finalidade estritamente educativa, de mentoria e promoção do bem-estar. Não constituem prescrição médica nem substituem a consulta de profissionais de saúde habilitados.
              </p>

              <p className="font-semibold text-sm text-[#3F5B45]">
                2. Cancelamento e Subscrições
              </p>
              <p>
                A subscrição do Clube GAIA (24,97€/mês) não possui período de fidelização obrigatório, podendo ser cancelada a qualquer momento antes da renovação seguinte mediante contacto com o nosso suporte.
              </p>

              <p className="font-semibold text-sm text-[#3F5B45]">
                3. Propriedade Intelectual
              </p>
              <p>
                Todo o material didático, infográficos, protocolos e ebooks disponibilizados são propriedade exclusiva de Dulce Canivari e estão protegidos por direitos de autor, sendo proibida a sua reprodução ou partilha pública sem autorização prévia por escrito.
              </p>
            </>
          )}
        </div>

        {/* Rodapé */}
        <div className="pt-3 border-t border-[#D8C4A8]/50 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-[#3F5B45] hover:bg-[#324937] text-white text-xs font-semibold px-6 py-2.5 rounded-xl"
          >
            Compreendido e Fechar
          </Button>
        </div>
      </div>
    </div>
  );
};