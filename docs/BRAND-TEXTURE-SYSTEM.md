# Brand Texture System (Work In Progress)

Este documento descreve as quatro famílias do sistema de texturas da marca Jundu. Os assets visuais definitivos estão em desenvolvimento. Não aplique SVG provisórios que tentem simular o resultado final.

## 1. ROOT NETWORK
* **Representa:** Raízes do jundu, origem, resistência, proteção, conexão e crescimento.
* **Formas sugeridas:** Linhas orgânicas contínuas, nós naturais, entrelaçamento botânico (sem cair para o folclore excessivo).
* **Superfícies recomendadas:** Áreas de hero, fundos de seções manifesto, espaços reservados (`root-artwork-slot`).
* **Superfícies proibidas:** Sobre fotos de pratos, rostos de colaboradores, ou blocos de texto muito densos.
* **Opacidade:** `--texture-opacity-subtle` a `--texture-opacity-visible` dependendo do contraste com o fundo.
* **Escala:** `--texture-scale-lg` (640px) ou maior, permitindo vazamento intencional (overflow).
* **Comportamento mobile:** Cortar e reposicionar. A textura não deve ser escalonada de forma que os traços fiquem muito finos e percam presença.
* **Motion:** Revelação lenta em fade ou traçado SVG (`stroke-dashoffset`). Nenhuma animação contínua (loop).
* **Acessibilidade:** Não deve interferir na legibilidade de textos sobrepostos.
* **Performance:** Sempre priorizar SVG in-line ou WebP otimizado (se usar raster).
* **Risco de uso excessivo:** Muito alto. Usar em poucas seções para preservar o impacto do significado de "raiz".

## 2. PETAL CONSTELLATION
* **Representa:** Florescimento, pessoas, unidades, encontros, a assinatura abstrata da marca.
* **Restrição importante:** Não deve repetir literalmente a flor da logo. Deve ser uma abstração (ex: pétalas soltas ou composição fluida).
* **Formas sugeridas:** Formas geométricas suaves, ovais assimétricos, agrupamentos orgânicos.
* **Superfícies recomendadas:** Menus, seções secundárias de conteúdo (como a área de histórias), backgrounds de citação.
* **Superfícies proibidas:** Footer institucional, header fixo.
* **Opacidade:** `--texture-opacity-soft` (0.05).
* **Escala:** `--texture-scale-sm` a `--texture-scale-md`.
* **Comportamento mobile:** Pode ser suprimida ou usada com corte acentuado.
* **Motion:** Parallax sutil ao scroll (usando transform/translate) ou aparecimento progressivo.
* **Acessibilidade:** Altíssimo contraste necessário para textos em cima, já que pétalas podem criar áreas de brilho/sombra.
* **Performance:** Excelente, baixo impacto se for CSS pattern ou SVG leve.
* **Risco de uso excessivo:** Moderado. Pode virar um "confete" se usado sem intencionalidade.

## 3. WOVEN CEILING
* **Representa:** Teto tramado, bambu, cestaria, arquitetura do quiosque original, abrigo, acolhimento.
* **Formas sugeridas:** Tramas cruzadas, padrões geométricos naturais, linhas paralelas com leve irregularidade orgânica.
* **Superfícies recomendadas:** Blocos escuros, seção de arquitetura, CTA final, áreas de hospitalidade.
* **Superfícies proibidas:** Hero cinematic, áreas de Manifesto.
* **Opacidade:** `--texture-opacity-visible` (0.08) em fundos escuros (Forest 900).
* **Escala:** `--texture-scale-md` (320px). Deve formar um padrão (pattern).
* **Comportamento mobile:** Escalável sem perda de significado, pois é um pattern geométrico.
* **Motion:** Nenhum. A arquitetura é estática, transmitindo solidez e abrigo.
* **Acessibilidade:** Pode poluir visualmente se usado como background de textos pequenos.
* **Performance:** Muito leve, ideal para `background-image` repetido (CSS).
* **Risco de uso excessivo:** Baixo/Moderado. É uma textura de preenchimento, mas não deve competir com as fotos dos ambientes.

## 4. TIDAL CONTOURS
* **Representa:** Maré, linha do litoral, topografia, movimento, fluidez, território.
* **Formas sugeridas:** Linhas isométricas de mapa topográfico (simplificadas), ondas concêntricas, faixas de maré.
* **Superfícies recomendadas:** Timeline, seções de expansão do grupo e unidades.
* **Superfícies proibidas:** Áreas focadas apenas em gastronomia ou no interior dos restaurantes.
* **Opacidade:** `--texture-opacity-subtle` (0.03). Muito discreto.
* **Escala:** `--texture-scale-lg` (640px) ou superior. Linhas grandes e espaçadas.
* **Comportamento mobile:** Exibir apenas uma ou duas faixas/contornos.
* **Motion:** Movimento quase imperceptível ao scroll (parallax lento).
* **Acessibilidade:** Seguro, pois usa linhas finas e opacidade muito baixa.
* **Performance:** Moderado se usar múltiplos paths SVG grandes.
* **Risco de uso excessivo:** Alto se as ondas/linhas cruzarem botões e links, quebrando a geometria da interface.
