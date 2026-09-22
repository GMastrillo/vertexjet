# VertexJet White Luxury Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar o VertexJet para tema Branco de Hiperluxo (White Luxury Editorial), integrando o vídeo `jetski1.mp4`, removendo qualquer padrão de grade quadriculada, e aplicando as referências estéticas da Avantgarde Motors.

**Architecture:** Next.js 15 App Router, Tailwind CSS, Lenis SmoothScroll, Motion.

**Spec:** [docs/superpowers/specs/2026-09-22-vertexjet-white-luxury-redesign.md](file:///c:/Users/User/Music/VertexJet/docs/superpowers/specs/2026-09-22-vertexjet-white-luxury-redesign.md)

## Global Constraints
- Tema branco límpido (`#ffffff` e `#f8f9fa`).
- Zero fundos com grade quadriculada ("cara de IA").
- Zero emojis e zero glows neon borrados.
- Vídeo oficial de abertura: `/jetski1.mp4`.
- Acentos em Terracota Náutico / Cobre (`#c43818`) e Preto Intenso (`#0a0a0a`).
- TypeScript estrito sem `any`.

---

### Task 1: Design System Claro & Globals CSS

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] Atualizar paleta de cores para branco, cinza platina e acento terracota Avantgarde.
- [ ] Remover classes e utilitários escuros e de grades; criar utilitários de vidro branco e sombras suaves.

---

### Task 2: Atualização da Hero Cinemática com `jetski1.mp4`

**Files:**
- Modify: `src/components/sections/hero-cinematic.tsx`

- [ ] Apontar a tag `<video>` nativa para `/jetski1.mp4`.
- [ ] Ajustar a revelação pós-vídeo para harmonizar com a transição para o universo branco de luxo.

---

### Task 3: Navbar White Luxury

**Files:**
- Modify: `src/components/layout/navbar.tsx`

- [ ] Estilizar a barra flutuante em vidro branco translúcido (`bg-white/90 backdrop-blur-md border-b border-gray-200/80`).
- [ ] Tipografia em preto intenso com botão Concierge VIP angular estilo Avantgarde.

---

### Task 4: Bento Grid de Performance Limpo (Sem Grids de IA)

**Files:**
- Modify: `src/components/sections/performance-bento.tsx`

- [ ] Remover completamente qualquer camada de grid quadriculado.
- [ ] Reestilizar os cards para superfícies brancas esculpidas, bordas de 1px cinza claro, números em preto profundo e gráficos técnicos elegantes.

---

### Task 5: Showroom Náutico Estilo Catálogo Avantgarde

**Files:**
- Modify: `src/components/sections/showroom.tsx`

- [ ] Aplicar fundo branco estúdio com cartelas de produto limpas.
- [ ] Botões e abas de seleção com estética editorial e acento terracota.

---

### Task 6: Cockpit Digital & Telemetria em Tema Claro

**Files:**
- Modify: `src/components/sections/cockpit-telemetry.tsx`

- [ ] Adaptar mostrador digital para interface náutica de alta tecnologia clara e de alto contraste.

---

### Task 7: CTA de Agendamento VIP & Rodapé

**Files:**
- Modify: `src/components/sections/cta-vip.tsx`
- Modify: `src/components/layout/footer.tsx`
- Modify: `src/app/page.tsx`

- [ ] Reestilizar formulário de agendamento em cartela branca de alto padrão com campos minimalistas.
- [ ] Ajustar rodapé para harmonia editorial clara com tipografia fina e certificações.

---

### Task 8: Build e Validação Visual via Browser Subagent

**Files:**
- Verify: Todas as páginas

- [ ] Executar `npm run build` para garantir zero erros.
- [ ] Testar no navegador com `browser_subagent` capturando screenshots e gravando a experiência completa.
