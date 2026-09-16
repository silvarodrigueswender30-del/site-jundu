# Implementação da Hero Cinematic e Navegação

## Componentes Criados
1. **SiteHeader:** `src/components/navigation/site-header.tsx`
   - Navbar overlay discreta e responsiva.
   - Animação de `background-color` de transparente para `forest-900` ao rolar a página.
   - Links da configuração global e botões de chamada primária (CTA).
2. **MobileMenu:** `src/components/navigation/mobile-menu.tsx`
   - Integração com o SiteHeader.
   - Painel lateral imersivo (Overlay total).
   - Bloqueio de rolagem da página quando ativo e navegação segura por `Escape`.
3. **StickyMobileCTA:** `src/components/navigation/sticky-mobile-cta.tsx`
   - CTA fixo no rodapé visível apenas em telas menores, após passar a Hero (80vh).
4. **HeroVideo:** `src/components/media/hero-video.tsx`
   - Preparado estruturalmente para receber URL de vídeo.
   - Fallback e poster gerenciados por `IntersectionObserver` e `prefers-reduced-motion`.
5. **HeroCinematic:** `src/components/sections/hero-cinematic.tsx`
   - Implementação tipográfica (`fade-in-up` de 80ms a 800ms) sem quebras falsas.
   - Layout alinhado à esquerda.

## Otimizações Realizadas
- Extração de fallback do Elementor (`banner-home-3-1024x594.webp`) convertida para `.webp` (desktop e recorte de mobile).
- Diminuição da prioridade de javascript onde componentes podem ser estáticos.
- Uso direto dos tokens fluidos e classes sem inline styles.
- Limite de zoom CSS em 1.02.

## Limitações Iniciais
- Vídeo de background principal não disponível em acervo. O componente `HeroVideo` renderiza temporariamente o poster AVIF/WEBP com `scale(1.02)`.
- Faltam URLs autênticas para os links âncoras (que ainda referenciam `#`).
