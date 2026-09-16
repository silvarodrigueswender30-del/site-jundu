# Diagnóstico da Implementação Anterior

## 1. Imagem Carregada na Hero
* **Arquivo Base:** `banner-home-3-1024x594.webp`
* **Dimensões Reais:** 1024 x 594 pixels.
* **Formato Real:** WebP.
* **Tamanho Original:** ~80KB.
* **Caminho Público Utilizado:** `/images/hero/jundu-hero-desktop.avif` e `.webp`
* **Status HTTP / MIME:** Retornava HTTP 200 via servidor local do Next.js, com MIME `image/avif` (errado, pois era arquivo WebP renomeado).
* **Imagem em breakpoints:** O crop central (`jundu-hero-mobile.webp` - 334x594) foi renderizado no Mobile. O arquivo original (1024x594) renderizado em desktop, porém a resolução é insuficiente para monitores como 1440px.

## 2. Marca (Logo)
* **Arquivo Usado:** `/brand/logo_1120.webp` (Faltante no diretório `/public/brand`).
* **Motivo da quebra:** O script Python inicial salvou o asset em `assets/working/brand/logo_1120.webp`, mas o arquivo não foi copiado para a pasta de arquivos estáticos `public/brand/`, ocasionando um erro 404 (Not Found).

## 3. Tipografia do Título (Hero)
* **Fonte Computada:** Fallback do sistema ou Arimo/Elsie carregadas com classe incorreta no elemento H1.
* **Tamanho Computado (Aproximado) usando `text-h1` do Tailwind:**
  * 1440px / 1280px / 1024px: `4.5rem` (72px).
  * 768px: `~3.5rem` (56px).
  * 430px / 390px / 360px: `~2.8rem` (44px).
* **Veredito:** O título estava pequeno e distante da proposta monumental da Variação 03.
