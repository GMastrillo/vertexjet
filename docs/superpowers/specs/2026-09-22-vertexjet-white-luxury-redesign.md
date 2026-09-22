# Especificação de Design — VertexJet: Redesign White Luxury Editorial (Referência Avantgarde)

**Data:** 2026-09-22  
**Referência:** [Avantgarde Motors](https://avantgarde.com.br/)  
**Status:** Aprovado para Implementação Imediata  

---

## 1. Diretrizes do Redesign Visual

### 1.1 Eliminação Radical de Clichês de IA
- **Remoção Imediata do Fundo com Grid Quadrado:** Eliminado qualquer gradiente de linhas cruzadas (`grid-lines`), apontado explicitamente pelo cliente como "cara de IA".
- **Transição de Tema:** O projeto abandona o visual genérico escuro de tech/SaaS e adota a estética **White Luxury Editorial** inspirada na Avantgarde Motors (estúdio automotivo/náutico de hiperluxo).

### 1.2 Paleta de Cores White Luxury (Padrão Avantgarde)
- **Fundo Principal:** Branco puro (`#ffffff`) e off-white escultural (`#f8f9fa`, `#f3f4f6`).
- **Tipografia:** Preto absoluto (`#0a0a0a` e `#111827`) para títulos em alto contraste, com cinzas médios refinados (`#64748b`, `#475569`) para métricas e dados de engenharia.
- **Cor de Acento Editorial:** Terracota / Cobre Náutico Metálico (`#c43818` / `#b91c1c`) para tags de categoria, badges de homologação e detalhes de destaque, substituindo o ciano neon anterior.
- **Superfícies de Vidro Claro:** `backdrop-blur-md bg-white/85 border border-gray-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]`.

### 1.3 Hero Cinemática com `jetski1.mp4`
- **Vídeo Nativo:** `<video src="/jetski1.mp4" playsInline autoPlay muted={false} loop={false} className="w-full h-full object-cover" />`.
- **Transição de Entrada:** Abre no breu do vídeo. Ao término (`onEnded`), a página transiciona com fade suave para a claridade e sofisticação do ambiente branco editorial, revelando os textos principais e a Navbar clara.

---

## 2. Componentes e Estrutura

1. **`globals.css`:**
   - Fundo claro `--background: #ffffff;`, texto `--foreground: #0a0a0a;`.
   - Remoção de qualquer padrão quadriculado ou glow colorido.
   - Definição de classes `.luxury-card-white`, `.luxury-pill-white`, `.luxury-nav-white`.
2. **`navbar.tsx`:**
   - Vidro fosco branco translúcido (`bg-white/90 backdrop-blur-md border-b border-gray-200/80`).
   - Logo `VERTEX JET` em preto profundo com detalhe em cobre/terracota.
   - Botão `CONCIERGE VIP` em corte angular no estilo Avantgarde.
3. **`hero-cinematic.tsx`:**
   - Vídeo atualizado para `/jetski1.mp4`.
   - Transição de revelação para cartela branca de alto impacto.
4. **`performance-bento.tsx`:**
   - Totalmente limpo do fundo quadriculado.
   - Cards brancos esculturais com bordas ultra-finas de 1px cinza, tipografia Syne preta e curvas técnicas náuticas.
5. **`showroom.tsx`:**
   - Galeria no padrão catálogo Avantgarde: fundo branco/cinza estúdio, seletores com tags em terracota, métricas em preto e imagens destacadas.
6. **`cockpit-telemetry.tsx`:**
   - Painel digital em estilo náutico de luxo com fundo claro e mostradores em preto e terracota.
7. **`cta-vip.tsx` & `footer.tsx`:**
   - Formulário de agendamento VIP limpo, refinado e rodapé institucional minimalista claro.
