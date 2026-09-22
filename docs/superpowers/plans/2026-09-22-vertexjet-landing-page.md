# VertexJet Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir uma landing page de altíssimo padrão para a marca de jet skis premium VERTEX JET, com entrada em vídeo cinemático nativo, animações a 60/120 FPS via Lenis + GSAP, estética editorial anti-IA e showroom interativo.

**Architecture:** Next.js 15 App Router com Server Components e Client Components isolados onde há interatividade (Lenis, Motion, GSAP, Video Engine). Layout envelopado com SmoothScroll e tipografia Google Fonts (Syne e Geist).

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Lenis, GSAP, motion/react, lucide-react.

**Spec:** [docs/superpowers/specs/2026-09-22-vertexjet-landing-page-design.md](file:///c:/Users/User/Music/VertexJet/docs/superpowers/specs/2026-09-22-vertexjet-landing-page-design.md)

## Global Constraints

- Zero emojis em qualquer parte da interface (botões, cards, badges, textos).
- Zero orbs/glows neon borrados no fundo; iluminação nítida através de fotos, gradientes e bordas sutis de 1px.
- Sem badges infantis ("60 FPS", "Clique aqui", etc.).
- Sem spinners ou telas de loading; início no breu absoluto com vídeo direto.
- Tipografia estrita: Syne para títulos (caixa alta) e Geist/Geist Mono para textos e métricas.
- TypeScript estrito sem nenhum `any`.
- Smooth scroll universal com Lenis sincronizado ao GSAP ticker.

## Review Focus

1. Autoplay com áudio restrito pelo navegador — deve haver fallback transparente silencioso com botão minimalista para desmutar.
2. Responsividade mobile — vídeo e layout não devem estourar proporção em 9:16 e desktop 16:9.
3. Cleanup de instâncias Lenis e GSAP ticker em desmontagem para evitar vazamento de memória.
4. Desempenho de renderização — transições sem jank na rolagem e sem layout shifts (CLS < 0.1).
5. Acessibilidade — contraste nítido em texto sobre fundo escuro e atributos semânticos em formulários e controles.

---

### Task 1: Scaffolding do Projeto Next.js & Instalação de Dependências

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `tailwind.config.ts`
- Create: `src/app/globals.css`
- Modify: `.gitignore`

- [ ] **Step 1: Inicializar o projeto Next.js com TypeScript e Tailwind**
- [ ] **Step 2: Instalar as dependências essenciais (`lenis`, `gsap`, `@gsap/react`, `motion`, `lucide-react`)**
- [ ] **Step 3: Configurar `globals.css` com paleta profunda (`#05080c` a `#0a0a0a`), fontes e utilitários de vidro**
- [ ] **Step 4: Validar compilação inicial com `npm run build`**

---

### Task 2: Provider Global de Rolagem Suave (Lenis + GSAP Ticker) e Layout Base

**Files:**
- Create: `src/components/providers/smooth-scroll.tsx`
- Create: `src/app/layout.tsx`

- [ ] **Step 1: Implementar `smooth-scroll.tsx` integrando Lenis ao ticker do GSAP e suporte a `prefers-reduced-motion`**
- [ ] **Step 2: Configurar `app/layout.tsx` com fontes Syne, Geist e metadados SEO editoriais**
- [ ] **Step 3: Testar hidratação e montagem limpa do layout**

---

### Task 3: Hero Cinemática com Vídeo Nativo e Revelação com Motion

**Files:**
- Create: `public/jetski-intro.mp4`
- Create: `src/components/sections/hero-cinematic.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Fornecer/gerar o vídeo cinemático de alta qualidade em `public/jetski-intro.mp4`**
- [ ] **Step 2: Implementar `hero-cinematic.tsx` com `<video>`, controle de volume inicial em 0.35, fallback de autoplay e callback de fim de vídeo (`onEnded`)**
- [ ] **Step 3: Implementar animação de reveal do título principal e botão de rolagem após o término do vídeo**
- [ ] **Step 4: Testar transição visual no navegador**

---

### Task 4: Barra de Navegação Flutuante com Revelação Sincronizada

**Files:**
- Create: `src/components/layout/navbar.tsx`
- Modify: `src/components/sections/hero-cinematic.tsx` ou `src/app/page.tsx`

- [ ] **Step 1: Implementar `navbar.tsx` com design de vidro ultra-escuro (`backdrop-blur-md bg-black/60 border-b border-white/10`)**
- [ ] **Step 2: Sincronizar a revelação da barra apenas quando o vídeo terminar ou quando o usuário rolar a página**
- [ ] **Step 3: Adicionar links de âncora suaves e botão de ação VIP Concierge**

---

### Task 5: Bento Grid de Performance e Engenharia Náutica

**Files:**
- Create: `src/components/sections/performance-bento.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Criar componentes dos 4 cards de alta tecnologia (Motor 380 HP, Casco Monocoque T1000, Telemetria Satelital, Hidrojato de Titânio)**
- [ ] **Step 2: Adicionar gráficos vetoriais SVG de telemetria, curva de potência e acabamento em fibra de carbono**
- [ ] **Step 3: Garantir responsividade impecável em mobile e desktop**

---

### Task 6: Showroom Náutico Interativo dos Modelos Vertex

**Files:**
- Create: `src/components/sections/showroom.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Desenvolver seletor interativo para os modelos Phantom V900, Aerodyne GT e Corsair R-Spec**
- [ ] **Step 2: Exibir especificações detalhadas (potência, velocidade máxima, peso, autonomia náutica, acabamento)**
- [ ] **Step 3: Integrar troca suave de modelo com transição via `motion/react`**

---

### Task 7: Cockpit Digital e Telemetria em Tempo Real

**Files:**
- Create: `src/components/sections/cockpit-telemetry.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Desenvolver interface do HUD náutico com mostradores digitais de nós (knots), RPM, trim angular e nível de empuxo**
- [ ] **Step 2: Implementar alternador interativo de modos de condução (`SPORT+`, `OFFSHORE`, `STEALTH`) com atualização dinâmica de telemetria**

---

### Task 8: Seção de Agendamento VIP (CTA Test Ride) e Rodapé Editorial

**Files:**
- Create: `src/components/sections/cta-vip.tsx`
- Create: `src/components/layout/footer.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Construir formulário de alto contraste para agendamento de test ride privado com seleção de marina exclusiva (Angra dos Reis, Balneário Camboriú, Miami, Mônaco)**
- [ ] **Step 2: Criar rodapé com certificação náutica ISO, coordenadas de estaleiro e tipografia refinada**
- [ ] **Step 3: Integrar todas as seções em `src/app/page.tsx`**

---

### Task 9: Validação, Verificação de Build e Auditoria Visual no Navegador

**Files:**
- Verify: Todas as páginas e componentes

- [ ] **Step 1: Executar compilação de produção com `npm run build` e certificar que não há erros de tipagem TypeScript nem de linting**
- [ ] **Step 2: Iniciar servidor local (`npm run dev`)**
- [ ] **Step 3: Disparar agente de navegador (`browser_subagent`) para testar a experiência completa, verificar vídeo, interações e capturar gravação visual**
