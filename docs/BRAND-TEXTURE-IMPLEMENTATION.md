# Implementacao das texturas de marca

## Padrao aprovado

- O arquivo raster original e a fonte de verdade da geometria.
- E proibido redesenhar, simplificar ou vetorizar criativamente a textura.
- A conversao deve calcular a luminancia de cada pixel e transforma-la em canal alpha.
- O branco e os halos de compressao JPEG devem se tornar transparentes.
- As massas escuras devem preservar integralmente sua geometria original.
- A cor deve ser aplicada por CSS mask usando tokens da paleta, sem filtros ou blend modes.
- A textura deve ser uma camada absoluta com `inset: 0`, sem participar do fluxo da pagina.
- O conteudo da secao deve permanecer acima da textura por meio de `z-index`.
- Desktop e mobile devem usar a mesma matriz, com recortes responsivos diferentes.
- Breakpoints podem alterar somente escala, posicao e intensidade da mascara.
- Em fundos claros, a textura deve usar um verde da paleta.
- Em fundos verdes, a textura deve usar creme ou areia da paleta.
- A textura nunca pode alterar a altura, largura ou alinhamento da secao.

## Territorio

- Fonte original: `ARQUIVOS/testuras/territorio.jpeg`
- Gerador deterministico: `scripts/generate-brand-textures.mjs`
- Mascara aprovada: `public/brand/textures/territory-alpha.png`
- Componente: `src/components/brand/artwork/territory-artwork.tsx`
- Estilos responsivos: `src/components/brand/artwork/territory-artwork.module.css`
- Secao de uso: `src/components/sections/brand-manifesto.tsx`
- Commit-base aprovado: `70dee4f2d7331c35f0bf3eda94621190b05c22cf`

## Territorio e Bambu utilizam o mesmo sistema tecnico

Territorio e Bambu compartilham o mesmo metodo deterministico de conversao
luminancia → canal alpha e a mesma arquitetura de componente (CSS Module + div aria-hidden).

Cada textura possui composicao responsiva INDEPENDENTE.
Nenhuma textura pode copiar automaticamente os valores de mask-size, mask-position
ou opacity da outra.

## Bambu

- Significado: arquitetura / estrutura / materialidade / ritmo espacial / trama construtiva
- Fonte original: `ARQUIVOS/testuras/bambu.jpeg`
- Gerador deterministico: `scripts/generate-bamboo-texture.mjs`
- Mascara aprovada: `public/brand/textures/bamboo-alpha.png` (2752x1536)
  - Curva Alpha refinada: `blackPoint=0`, `whitePoint=245`, `gamma=0.45` para densidade de linha
- Componente: `src/components/brand/artwork/bamboo-artwork.tsx`
- Estilos responsivos: `src/components/brand/artwork/bamboo-artwork.module.css`
- Secao de uso: `src/components/sections/architectural-gallery.tsx`
- Token de cor: `var(--color-forest-900)`

### Valores responsivos Bambu

A matriz foi ancorada com peso na lateral direita.

**Mobile (< 768px)**
- opacity: 0.09
- mask-size: 900px auto
- mask-position: 100% 0%

**Tablet (>= 768px)**
- opacity: 0.09
- mask-size: 1000px auto
- mask-position: calc(100% + 80px) 15%

**Desktop (>= 1024px)**
- opacity: 0.08
- mask-size: clamp(900px, 75vw, 1150px) auto
- mask-position: calc(100% + clamp(60px, 6vw, 140px)) 10%

## Proximas texturas

O asset `ARQUIVOS/testuras/raizes.jpeg` deve seguir o mesmo processo deterministico.
Ele ainda nao foi implementado e nao deve reutilizar curvas, vetores ou aproximacoes manuais.
