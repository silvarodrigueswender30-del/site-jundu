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

## Proximas texturas

Os assets `ARQUIVOS/testuras/bambu.jpeg` e `ARQUIVOS/testuras/raizes.jpeg`
devem seguir o mesmo processo deterministico. Eles ainda nao foram implementados e
nao devem reutilizar curvas, vetores ou aproximacoes manuais.
