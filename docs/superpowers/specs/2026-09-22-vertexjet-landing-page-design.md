# Especificação de Design — VertexJet: Landing Page de Hiperluxo Náutico

**Data:** 2026-09-22  
**Status:** Aprovado para Implementação  
**Autor:** Antigravity AI Creative Front-End Team  
**Escopo:** Landing page de altíssimo padrão para a marca de jet skis de hiperluxo **VERTEX JET** (Vertex Marine Dynamics), seguindo estritamente as diretrizes de design editorial e anti-IA de `AGENTS.md`.

---

## 1. Visão Geral e Posicionamento

A **VERTEX JET** é uma fabricante de embarcações pessoais de alta performance (PWC - Personal Watercraft) que combina engenharia aeroespacial, hidrodinâmica avançada e acabamento artesanal em fibra de carbono.

O objetivo desta landing page é criar uma experiência imersiva e cinematográfica de padrão editorial internacional (nível Awwwards / Porsche / Riva / Bugatti), convertendo visitantes ultra-qualificados em agendamentos de test ride exclusivo (private concierge).

---

## 2. Diretrizes Estéticas Anti-IA (Tolerância Zero a Clichês)

1. **Zero Emojis:** Proibido uso de qualquer emoji em botões, badges, textos ou menus. Todo o iconography utiliza `lucide-react` monocromático com traço ultra-fino (`strokeWidth={1}` ou `strokeWidth={1.25}`).
2. **Sem Glows Neon Borrados:** Proibido fundos com círculos roxos/azuis/verdes borrados (`blur-3xl`). Iluminação gerada através de fotografia fotorrealista de estúdio, reflexos náuticos precisos, gradientes de sombra nítidos e bordas translúcidas de 1px (`border-white/10`).
3. **Sem Badges Explicativos Infantis:** Nenhum selo óbvio como "60 FPS", "Clique aqui", "Melhor do mercado". UI limpa, elegante e autoexplicativa.
4. **Sem Spinners ou Telas de Loading Artificiais:** Abertura no breu absoluto (`#000000` / `#05080c`) sem barras percentuais. Transição direta para o vídeo cinematográfico em 60 FPS.
5. **Tipografia Editorial de Hiperluxo:**
   - **Títulos e Displays:** Fonte **Syne** (Google Fonts) em caixa alta, peso 700/800, `tracking-tight` ou `tracking-[0.15em]`.
   - **Textos de Apoio e Metadados:** Fonte **Geist** e **Geist Mono** com tracking expandido (`tracking-[0.2em]`) para especificações náuticas, coordenadas e telemetria.

---

## 3. Arquitetura da Experiência e Seções

### 3.1 Hero Cinemática de Entrada (Vídeo Nativo)
- **Tag Nativa:** `<video src="/jetski-intro.mp4" playsInline autoPlay muted={false} loop={false} className="w-full h-full object-cover" />`
- **Comportamento de Áudio:** Inicialização com áudio a 0.35; caso o navegador bloqueie áudio não iniciado por gesto, realiza fallback instantâneo para mudo com botão minimalista de controle de áudio no canto inferior da tela.
- **Transição de Revelação:** O vídeo apresenta a navegação em alta velocidade na água. Ao finalizar (`onEnded`), através de `motion/react`:
  - O título principal *"O ÁPICE DA HIDRODINÂMICA PURA"* e subtítulo emergem em fade-in suave (`y: 30 -> 0`, duração 0.9s, cubic bezier de luxo `[0.22, 1, 0.36, 1]`).
  - A **Navbar Superior** surge descendo suavemente do topo (`y: -20 -> 0`, fade-in).
  - Um botão primário *"EXPLORAR FROTA"* e indicador de rolagem sutil surgem para guiar o usuário.

### 3.2 Barra de Navegação Flutuante (Navbar)
- Inicialmente oculta durante a reprodução do vídeo da Hero.
- Ao término do vídeo, fixa-se no topo com vidro translúcido (`backdrop-blur-md bg-black/60 border-b border-white/10`).
- Elementos:
  - Marca: `VERTEX` em caixa alta com `tracking-[0.3em]`, acompanhado pelo sufixo metálico `JET`.
  - Links: `FROTA`, `ENGENHARIA`, `TELEMETRIA`, `EXPERIÊNCIA`.
  - CTA Superior: `CONCIERGE VIP` em estilo wireframe minimalista de alta precisão.

### 3.3 Bento Grid de Performance e Engenharia
Disposição em Bento Grid com 4 cartões com acabamento em fibra de carbono e vidro lapidado:
- **Card 1 (Principal):** Motor Marinho V8 Supercharged de 380 HP — 0 a 100 km/h em 2.4s. Gráfico vetorial de curva de torque náutico.
- **Card 2:** Casco Monocoque Aero-Náutico em Fibra de Carbono T1000 — 32% mais leve, rigidez torsional extrema contra ondas oceânicas.
- **Card 3:** Telemetria Marinha Satelital em Tempo Real — Sensores de atitude giroscópica, temperatura de turbina e profundímetro com HUD digital.
- **Card 4:** Sistema de Propulsão Hidrojato Duplo em Liga de Titânio — Bocal de empuxo vetorial com sistema de trim dinâmico variável.

### 3.4 Showroom Náutico Interativo (A Frota Vertex)
Galeria horizontal com transição de modelos:
- **Modelo 1: VERTEX PHANTOM V900 (Stealth Edition)**
  - Foco: Velocidade pura e interceptação costeira.
  - Specs: 380 HP, 138 km/h, 2.3s 0-60, Peso: 310 kg.
- **Modelo 2: VERTEX AERODYNE GT (Grand Touring)**
  - Foco: Cruzeiro oceânico de longo alcance e estabilidade offshore.
  - Specs: 320 HP, 122 km/h, Autonomia: 240 milhas náuticas, Conforto ergonômico em couro náutico repelente.
- **Modelo 3: VERTEX CORSAIR R-SPEC (Competition)**
  - Foco: Manobrabilidade extrema para curvas fechadas e aceleração instantânea.
  - Specs: 350 HP, casco estreito em carbono forjado, guidão com telemetria direta.
- Controles com botões táteis e indicadores numéricos com paginação editorial (`01 / 03`, `02 / 03`, `03 / 03`).

### 3.5 Cockpit Digital & Telemetria em Tempo Real
- Simulação interativa do painel digital do piloto com switch de modos de pilotagem:
  - `SPORT+`: Resposta imediata de acelerador e trim agressivo.
  - `OFFSHORE`: Amortecimento ativo de impacto contra mar agitado.
  - `STEALTH`: Operação ultra-silenciosa para aproximação de iates e ancoradouros.

### 3.6 Seção de Agendamento VIP (CTA Test Ride)
- Título editorial de alto impacto: *"DOMINE AS ÁGUAS. AGENDE SEU TEST RIDE PRIVADO."*
- Formulário modal/inline de alta conversão:
  - Seleção do modelo desejado.
  - Base náutica exclusiva (Angra dos Reis, Balneário Camboriú, Miami, Mônaco).
  - Informações de contato para atendimento discreto via Concierge Náutico.

### 3.7 Rodapé de Alta Precisão (Footer)
- Grid sóbrio com dados de certificação ISO Marítima, coordenadas geográficas de estaleiros de manufatura e links institucionais discretos.

---

## 4. Stack Tecnológico

- **Framework:** Next.js 15 (App Router, React 19, Server Components).
- **Linguagem:** TypeScript estrito com zero `any`.
- **Estilização:** Tailwind CSS (v4 com `@theme` ou v3 conforme padrão de dependências estáveis).
- **Tipografia:** Google Fonts (`Syne`, `Geist`, `Geist Mono`).
- **Animações e Física:**
  - `lenis`: Smooth scroll universal com física inercial de rolagem.
  - `gsap` + `ScrollTrigger`: Sincronização do ticker do GSAP com Lenis para evitar janks e garantir 60/120 FPS cravados.
  - `motion` (`motion/react`): Reveals de texto, entrada de seções e animações de estado.
- **Ícones:** `lucide-react` (com `strokeWidth={1.25}`).

---

## 5. Critérios de Aceite (Definition of Done)

- [x] Zero emojis na interface.
- [x] Zero glows coloridos ou orbs de IA no fundo.
- [x] Transição fluida da Hero com vídeo e áudio sem travamentos.
- [x] Lenis + GSAP operando em 60/120 FPS estáveis.
- [x] Build de produção limpo sem erros de tipagem TypeScript (`npm run build`).
- [x] Validação funcional visual via subagente de navegação (agent-browser).
