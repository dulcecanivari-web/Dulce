import React, { useState } from 'react';
import { ShoppingBag, BookOpen, Sparkles, Check, ArrowRight, ShieldCheck, Heart, AlertCircle, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export interface ShopProduct {
  id: string;
  title: string;
  category: 'suplemento' | 'guia' | 'mentoria';
  price: number;
  badge?: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  isSupplement?: boolean;
}

const PRODUCTS: ShopProduct[] = [
  {
    id: 'blend-flora-gaia',
    title: 'Blend Botânico Flora GAIA (Infusão 100g)',
    category: 'suplemento',
    price: 19.90,
    badge: 'Fórmula Exclusiva',
    tagline: 'Equilíbrio e alívio do inchaço pós-refeição',
    description: 'Sinergia botânica artesanal com erva-príncipe, funcho doce, camomila romana e folhas de oliveira para digestão serena e microbiota equilibrada.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
    features: [
      '100% biológico e livre de cafeína',
      'Apoio digestivo suave pós-prandial',
      'Rende 45 porções medicinais'
    ],
    isSupplement: true,
  },
  {
    id: 'probiotico-sinergia-feminina',
    title: 'Complexo Probiótico Sinergia Feminina (60 caps)',
    category: 'suplemento',
    price: 34.50,
    badge: 'Mais Procurado',
    tagline: 'Microbiota intestinal e urogenital fortalecidas',
    description: 'Fórmula multicepas com 10 biliões de UFC (Lactobacillus crispatus, gasseri, plantarum e Bifidobacterium) formulada para o microbioma feminino.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    features: [
      'Tecnologia gastro-resistente DRCaps®',
      'Equilíbrio do eixo estroboloma intestinal',
      'Sem glúten, lactose ou conservantes'
    ],
    isSupplement: true,
  },
  {
    id: 'guia-receitas-microbiota',
    title: 'Ebook: 50 Receitas Anti-inflamatórias GAIA',
    category: 'guia',
    price: 18.00,
    badge: 'Digital Instantâneo',
    tagline: 'Culinária saborosa que nutre as bactérias boas',
    description: 'Guia digital ilustrado com 50 receitas práticas, de digestão leve e ricas em fibras prebióticas, sem açúcares refinados ou excesso de FODMAPs.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80',
    features: [
      'Receitas de 20 minutos com ingredientes comuns',
      'Listas de compras semanais organizadas',
      'Substituições para intolerâncias e sensibilidades'
    ],
    isSupplement: false,
  },
  {
    id: 'oleo-essencial-digest',
    title: 'Roll-on Digestivo Aromático GAIA (10ml)',
    category: 'suplemento',
    price: 14.90,
    badge: 'Uso Tópico',
    tagline: 'Massagem abdominal para motilidade e relaxamento',
    description: 'Mistura terapêutica de óleos essenciais puros (hortelã-pimenta, gengibre e lavanda verdadeira) em base de óleo de jojoba para automassagem.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
    features: [
      'Aplicação tópica no abdómen com aroma relaxante',
      'Ideal para momentos de tensão e desconforto',
      'Prático para levar na mala'
    ],
    isSupplement: false,
  }
];

interface CoursesAndShopProps {
  onOpenCheckoutWithProduct: (prod: { id: string; title: string; price: number; description: string }) => void;
}

export const CoursesAndShop: React.FC<CoursesAndShopProps> = ({
  onOpenCheckoutWithProduct,
}) => {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'suplemento' | 'guia'>('todos');

  const filteredProducts = PRODUCTS.filter((item) => {
    if (activeCategory === 'todos') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="loja" className="py-20 bg-[#FDFBF7] text-[#6B4F3F] relative border-b border-[#D8C4A8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3F5B45]/10 text-[#3F5B45] text-xs font-bold uppercase tracking-wider">
            <ShoppingBag className="w-4 h-4 text-[#B86F4B]" />
            <span>Loja Oficial & Recursos Digitais</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3F5B45]">
            Ferramentas Selecionadas para o Teu Bem-Estar
          </h2>
          <p className="text-base text-[#6B4F3F]/85 leading-relaxed">
            Produtos pensados para complementar a tua rotina de cuidado e acelerar o teu equilíbrio digestivo diário.
          </p>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveCategory('todos')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'todos'
                  ? 'bg-[#3F5B45] text-white shadow-md'
                  : 'bg-white text-[#6B4F3F] border border-[#D8C4A8] hover:bg-[#D8C4A8]/20'
              }`}
            >
              Todos os Itens
            </button>
            <button
              onClick={() => setActiveCategory('suplemento')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'suplemento'
                  ? 'bg-[#3F5B45] text-white shadow-md'
                  : 'bg-white text-[#6B4F3F] border border-[#D8C4A8] hover:bg-[#D8C4A8]/20'
              }`}
            >
              Fórmulas Botânicas & Suplementos
            </button>
            <button
              onClick={() => setActiveCategory('guia')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'guia'
                  ? 'bg-[#3F5B45] text-white shadow-md'
                  : 'bg-white text-[#6B4F3F] border border-[#D8C4A8] hover:bg-[#D8C4A8]/20'
              }`}
            >
              Ebooks & Guias Práticos
            </button>
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-white rounded-3xl border border-[#D8C4A8]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group text-left"
            >
              {/* Imagem de Capa do Produto */}
              <div className="relative h-56 overflow-hidden bg-[#D8C4A8]/20">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#3F5B45] text-white shadow-sm">
                    {product.badge || 'Exclusivo'}
                  </span>
                </div>
              </div>

              {/* Detalhes do Produto */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#3F5B45] group-hover:text-[#B86F4B] transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#B86F4B] font-semibold">
                    {product.tagline}
                  </p>
                  <p className="text-xs text-[#6B4F3F]/80 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Lista de Recursos */}
                <div className="space-y-1.5 pt-2 border-t border-[#D8C4A8]/40">
                  {product.features?.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#6B4F3F]">
                      <Check className="w-3.5 h-3.5 text-[#3F5B45] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* AVISO LEGAL OBRIGATÓRIO DE SUPLEMENTO */}
                {product.isSupplement && (
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 leading-snug flex items-start gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>Aviso:</strong> Este produto é um suplemento alimentar e não substitui aconselhamento médico ou uma alimentação equilibrada.
                    </span>
                  </div>
                )}

                {/* Preço e Botão de Ação */}
                <div className="pt-3 flex items-center justify-between border-t border-[#D8C4A8]/40">
                  <div>
                    <span className="text-[11px] text-[#6B4F3F]/70 block font-medium">Valor único</span>
                    <span className="font-serif text-2xl font-bold text-[#3F5B45]">
                      {Number(product.price).toFixed(2)}€
                    </span>
                  </div>
                  <Button
                    onClick={() => onOpenCheckoutWithProduct(product)}
                    className="bg-[#B86F4B] hover:bg-[#9d5b3b] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 transition-all transform active:scale-95"
                  >
                    <span>Comprar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Garantia e Suporte */}
        <div className="p-6 rounded-3xl bg-[#3F5B45]/5 border border-[#3F5B45]/15 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#3F5B45] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-[#3F5B45]">
                Envios Seguros para Portugal Continental e Ilhas
              </h4>
              <p className="text-xs text-[#6B4F3F]/80">
                Pagamentos por MB WAY e Multibanco com processamento certificado pela Ifthenpay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};