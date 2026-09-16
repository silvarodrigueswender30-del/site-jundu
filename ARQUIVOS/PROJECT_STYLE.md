# PROJECT_STYLE.md
# Design system deste projeto. Edite à vontade.
# Gerado em: 2026-09-16 · derivado de JUNDU_DIRECAO_MESTRE.md

## Projeto
name: Jundu Ubatuba
description: Site institucional cinematográfico de três restaurantes à beira-mar em Ubatuba, que vende a experiência de estar no Jundu e conduz à reserva.
tone: Tropicalismo artesanal editorial · cinematográfico · sofisticado sem ser frio · brasileiro contemporâneo

## Stack
framework: Next.js (App Router)
typescript: sim (estrito)
component_library: nenhuma (componentes próprios sobre CardShell)
icons: Lucide
animations: CSS puro (85%) + Framer Motion (15%, dynamic import, máx. 3 componentes)

## Cores
# Superfícies escuras
forest_900: "#0A1A12"
forest_800: "#0E2419"   # superfície escura padrão
forest_700: "#122E20"
forest_600: "#1B3F2C"
forest_500: "#2A5A3E"   # hover escuro
moss_600:   "#4A5F3A"

# Marca / ação
primary:       "#A9C83E"  # lime-400 — botão primário. NUNCA como texto sobre creme (1.5:1)
primary_hover: "#93B232"
lime_200:      "#D3E39A"
sage_300:      "#C9D9A2"  # texto secundário sobre verde

# Superfícies claras
background: "#F4EEE1"   # cream-50
surface:    "#EBE2CF"   # sand-100
border:     "#DED3BC"   # sand-200
text_primary:   "#14201A"  # ink-900
text_secondary: "#3F4F45"  # ink-600
text_muted:     "#6B7A70"  # ink-400 — só ≥16px

# Sotaques (uso restrito)
accent_amber:   "#E0A33C"  # luz. Nunca sobre creme
accent_blossom: "#E4498C"  # rosa floral. Decorativo/≥24px. Máx. 2 usos por página
accent_violet:  "#6E4E9A"  # máx. 1 uso por página
accent_sea:     "#6F9BA8"  # identidade da unidade Prumirim

success: "#4C8C5A"
error:   "#B3452F"
warning: "#B87A22"

# Proibido: #000, #FFF, dourado metálico, gradiente colorido, textura de madeira como fundo

## Dark Mode
dark_mode: light_only
# O site alterna superfícies verde/creme por seção — não é tema, é ritmo editorial.

## Tipografia
font_heading: "A CONFIRMAR — rodar o protocolo de auditoria (Seção 3.2 do documento mestre) antes da Fase 1. Alternativa se houver limitação: Fraunces — Google Fonts"
font_body: "Archivo — Google Fonts (variável, wght + wdth)"
font_mono: "não utilizada"
font_loading: "next/font/google (self-host), subset latin + latin-ext, máx. 2 famílias / 4 arquivos"

## Layout & Tokens
border_radius: modern
# --radius-media: 12px (TODA imagem e vídeo, sem exceção)
# --radius-card: 16px · --radius-pill: 999px · --radius-sm: 4px

density: spacious
# --space-section-md: clamp(72px, 9vw, 120px) é o padrão de seção

container_max: 1320px
container_prose: 62ch
breakpoints: sm:480 md:768 lg:1024 xl:1280 2xl:1536
grid: 12 col ≥1280 · 8 col 1024 · 6 col 768 · 4 col ≤430

shadows: praticamente nenhuma
# --shadow-lift apenas em card de vídeo em hover e painel ativo da sanfona

## Motion
ease_principal: "cubic-bezier(.22,1,.36,1)"  # --ease-jundu
durations: "instant 120ms · fast 200ms · base 320ms · editorial 640ms · cinematic 900ms"
rise: 24px
scale_max: 1.03      # teto absoluto de zoom
parallax_max: 6%     # desligado ≤768px
stagger: 80ms
regras:
  - só transform e opacity em animação contínua
  - clip-path apenas em reveals únicos
  - máx. 3 propriedades animadas por card
  - prefers-reduced-motion desliga tudo, mantendo opacity ≤200ms
  - conteúdo NUNCA pode ficar invisível com reduced motion
  - não animar a transição de cor entre seções (corte seco)

## Proporções de mídia autorizadas
21:9 · 16:9 · 3:2 · 4:5 · 3:4 · 9:16
# Nenhuma outra proporção é permitida.

## Componentes Específicos do Domínio
- CardShell: casca comum de TODOS os cards (raio 12px, overflow hidden, scrim, foco). Nenhum card é criado fora dela.
- CardUnit: 4:5 fechado / 3:4 aberto. DEVE exibir topônimo, tipologia, atmosfera, HORÁRIO, endereço curto e 2 CTAs.
- CardVideo: 9:16, autoplay mudo por IntersectionObserver, play só no hover/foco, sem badge de proporção, sem UI de rede social.
- UnitsAccordion: padrão ARIA de tabs (não disclosure). 18%↔46% ≥1280. Gatilho por clique, nunca hover. Vira cards sequenciais ≤768.
- BrandMaskJ: máscara SVG derivada do vetor OFICIAL da logo. Código controla só preenchimento, máscara, posição, escala, opacidade e revelação. Proibido redesenhar o path.
- VideoPlayer: centraliza 100% da lógica de autoplay (reduced-motion + saveData + effectiveType + ≥50% visível + visibilitychange).
- StickyMobileCTA: barra de 64px após a hero, com safe-area-inset-bottom.
- MotionToggle: botão "Pausar movimento" (obrigatório para WCAG 2.2.2), persistido em localStorage.
- OpeningHours: horários DIFERENTES por unidade (Prumirim 09–18h; Itaguá e Praia Grande 11:30–00h). "Aberto agora" calculado no cliente.

## Regras de Qualidade (além das padrão)
- Mobile-first: base 360px; md:/lg: adicionam, nunca corrigem
- Touch targets ≥44×44px (botões 48px desktop / 52px mobile)
- Todo texto sobre mídia exige scrim, verificado no frame MAIS CLARO do vídeo (meta 7:1)
- focus-visible obrigatório em 100% dos interativos
- Card clicável usa <a> real + overlay ::after — nunca onClick em <div>
- Server Components por padrão; 'use client' só em navbar, sanfona, player, menu mobile, seletor de unidade
- Vídeo: preload="none" em tudo exceto a hero
- Orçamento: LCP ≤2.0s · CLS ≤0.02 · INP ≤150ms · JS inicial ≤140KB gz

## Anti-Patterns Proibidos
- ❌ style={{ }} inline · ❌ !important · ❌ IDs CSS para estilização
- ❌ hex hardcoded fora dos tokens
- ❌ componentes >200 linhas sem quebrar
- ❌ iframe/embed do Instagram
- ❌ carrossel como solução padrão de galeria
- ❌ sombra para criar hierarquia
- ❌ animação fora do catálogo do documento mestre
