# 🗺️ Mapa de Arquitetura e Estrutura — Dulce Canivari | Saúde Intestinal Feminina & Método GAIA

> **Sincronizado automaticamente pelo Code In Engine** em `2026-10-01 09:49:03`
> Este documento é a referência viva e em tempo real da arquitetura, componentes e entidades de negócio do projeto.

---

## 1. Visão Geral do Domínio e Identidade
- **Nome do Projeto**: `Dulce Canivari | Saúde Intestinal Feminina & Método GAIA`
- **Descrição**: Recupera a tua digestão, energia e equilíbrio hormonal. Especialista em saúde intestinal feminina, criadora do Método GAIA e mentora do Clube GAIA.
- **Stack Tecnológica**: React 18 + TypeScript + Vite + Tailwind CSS
- **Design Tokens**: Configurados em `src/index.css` e `tailwind.config.js`
- **Utilitários**: `src/lib/utils.ts` (função `cn`)

---

## 2. Fontes de Dados e Entidades de Domínio
_Os dados e coleções da aplicação são gerenciados diretamente nos componentes ou sob `src/data/`._

---

## 3. Árvore de Renderização (Hierarquia de Componentes)
- `src/main.tsx` — Host de montagem React DOM da SPA (#root)
  └── `src/App.tsx` — Componente raiz da aplicação (orquestra layout, estado global e todas as seções)
        ├── `src/components/About.tsx` — Seção Sobre nós / História da marca
        ├── `src/components/CheckoutModal.tsx` — Modal/Dialog interativo (CheckoutModal)
        ├── `src/components/ClubGaia.tsx` — Componente React modular (ClubGaia)
        ├── `src/components/ContactSection.tsx` — Formulário de contato e canais de atendimento
        ├── `src/components/CoursesAndShop.tsx` — Componente React modular (CoursesAndShop)
        ├── `src/components/Footer.tsx` — Rodapé com links, direitos, redes sociais e informações de contato
        ├── `src/components/FreeMapSection.tsx` — Componente React modular (FreeMapSection)
        ├── `src/components/GaiaMethod.tsx` — Componente React modular (GaiaMethod)
        ├── `src/components/Hero.tsx` — Seção Hero principal (headline, chamada de ação, banners e destaques do produto)
        ├── `src/components/MenopausaCourse.tsx` — Componente React modular (MenopausaCourse)
        ├── `src/components/Navbar.tsx` — Cabeçalho e barra de navegação global com links e ações
        ├── `src/components/PersonalizedCare.tsx` — Componente React modular (PersonalizedCare)
        ├── `src/components/PodcastSection.tsx` — Componente React modular (PodcastSection)
        ├── `src/components/Testimonials.tsx` — Depoimentos de clientes e prova social

---

## 4. Catálogo de Componentes e Responsabilidades

### 📦 Componentes da Aplicação (Seções e Features):
- **`src/components/About.tsx`** (About): Seção Sobre nós / História da marca
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`

- **`src/components/CheckoutModal.tsx`** (CheckoutModal): Modal/Dialog interativo (CheckoutModal)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`

- **`src/components/ClubGaia.tsx`** (ClubGaia): Componente React modular (ClubGaia)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/card.tsx`

- **`src/components/ContactSection.tsx`** (ContactSection): Formulário de contato e canais de atendimento
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/card.tsx`

- **`src/components/CookieBanner.tsx`** (CookieBanner): Faixa de marcas parceiras ou badges promocionais
  - *Importado por*: ⚠️ **Órfão (Ainda não importado)**
  - *Sub-componentes*: `src/components/ui/button.tsx`

- **`src/components/CoursesAndShop.tsx`** (CoursesAndShop): Componente React modular (CoursesAndShop)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/card.tsx`

- **`src/components/Footer.tsx`** (Footer): Rodapé com links, direitos, redes sociais e informações de contato
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: Nenhum

- **`src/components/FreeMapSection.tsx`** (FreeMapSection): Componente React modular (FreeMapSection)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/card.tsx`

- **`src/components/GaiaMethod.tsx`** (GaiaMethod): Componente React modular (GaiaMethod)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/card.tsx`

- **`src/components/Hero.tsx`** (Hero): Seção Hero principal (headline, chamada de ação, banners e destaques do produto)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`

- **`src/components/LegalModal.tsx`** (LegalModal): Modal/Dialog interativo (LegalModal)
  - *Importado por*: ⚠️ **Órfão (Ainda não importado)**
  - *Sub-componentes*: `src/components/ui/button.tsx`

- **`src/components/MenopausaCourse.tsx`** (MenopausaCourse): Componente React modular (MenopausaCourse)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/card.tsx`

- **`src/components/Navbar.tsx`** (Navbar): Cabeçalho e barra de navegação global com links e ações
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`

- **`src/components/PersonalizedCare.tsx`** (PersonalizedCare): Componente React modular (PersonalizedCare)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/card.tsx`

- **`src/components/PodcastSection.tsx`** (PodcastSection): Componente React modular (PodcastSection)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/card.tsx`

- **`src/components/StartHere.tsx`** (StartHere): Componente React modular (StartHere)
  - *Importado por*: ⚠️ **Órfão (Ainda não importado)**
  - *Sub-componentes*: `src/components/ui/card.tsx`, `src/components/ui/button.tsx`

- **`src/components/Testimonials.tsx`** (Testimonials): Depoimentos de clientes e prova social
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: Nenhum

### 🎨 Componentes Base de UI (`src/components/ui/`):
- `src/components/ui/badge.tsx`: Componente base de UI reutilizável (badge)
- `src/components/ui/button.tsx`: Componente base de UI reutilizável (button)
- `src/components/ui/card.tsx`: Componente base de UI reutilizável (card)
- `src/components/ui/input.tsx`: Componente base de UI reutilizável (input)

---

## 5. Módulos Utilitários, Funções e Exports Reais
- `src/lib/supabase.ts`: Exporta [`Order`, `PaymentRequestParams`, `PaymentResponse`, `supabase`]
- `src/lib/utils.ts`: Exporta [`cn`]
- `src/services/paymentService.ts`: Exporta [`CreateOrderPayload`, `paymentService`]

---

## 6. 🚨 Regras Críticas de Desenvolvimento e Modificação (Agent Directives)

1. **INTEGRAÇÃO OBRIGATÓRIA (ZERO COMPONENTES ÓRFÃOS)**:
   - Ao criar qualquer novo componente, animação ou elemento (ex: `DogAnimation.tsx`, `PricingTable.tsx`, `AuthModal.tsx`), **é OBRIGATÓRIO modificar o componente pai correspondente** (ex: `Hero.tsx` ou `App.tsx`) para incluir o `import` e renderizá-lo na árvore JSX.
   - NUNCA devolva apenas o arquivo do componente filho isolado sem atualizar o pai onde ele deve ser exibido.

2. **PREVENÇÃO DE ERROS DE RUNTIME E IMPORTS INEXISTENTES (SyntaxError / Module Not Found)**:
   - NUNCA tente importar funções, variáveis ou mocks de arquivos como `src/utils.ts`, `src/lib/utils.ts` ou `src/data/*` que NÃO estejam explicitamente exportados nesses módulos.
   - Se você precisar de uma constante, lista mockada ou função utilitária que não exista (ex: `pessoasLivres`), **declare-a explicitamente no arquivo do componente** ou crie a exportação com os dados no arquivo correspondente.
   - Use SEMPRE optional chaining (`?.`) e valores padrão (`|| []`, `?? ''`) ao renderizar listas e propriedades aninhadas.

3. **PROTEÇÃO DO CONTAINER SPA**:
   - O arquivo `index.html` é estritamente o host de montagem com `<div id="root"></div>` e `<script type="module" src="/src/main.tsx"></script>`.
   - NUNCA substitua `index.html` por páginas HTML estáticas.

4. **MODULARIDADE E ALTO PADRÃO VISUAL**:
   - Cada seção deve ser um componente independente sob `src/components/` e montado em `src/App.tsx`.
   - Use dados realistas (mockups completos sob `src/data/`), efeitos hover/active, estados de transição e paleta harmônica com tokens Tailwind.
