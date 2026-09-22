# Dossiê Técnico: Integração do Sistema Gráfico Jundu

## 1. Resumo Executivo
Este dossiê detalha as condições técnicas atuais do site do Grupo Jundu, mapeando os requisitos e as restrições para a futura reintegração dos elementos gráficos aprovados pela direção de arte (Território, Bambu e Restinga). A análise confirma que as tentativas anteriores falharam fundamentalmente porque matrizes raster (JPEG) foram rastreadas para SVG convertendo fundos brancos em *paths* sólidos, o que, somado à técnica de CSS Mask (`mask-image`), resultou em blocos opacos. O sistema atual possui uma hierarquia tipográfica sólida e paleta de cores CSS nativa (`@theme` do Tailwind v4), criando um terreno seguro para uma nova implementação que respeite o *stacking context* e as ressonâncias do layout editorial.

## 2. Estado Atual do Site
O projeto está na versão funcional, focado na tipografia e no *craft* da UI. O histórico Git reflete que a tentativa de implementação (`bdd2845` e `8251813`) foi adiada e desativada no commit `d6b8329`, deixando a UI atual limpa e sem obstruções visuais, pronta para uma integração planejada. O `hero` encontra-se plenamente restaurado em suas escalas fluidas (`clamp()`).

## 3. Arquitetura da Página
As seções carregadas na `page.tsx` (na ordem atual) são:

| Ordem | Seção | Componente | ID/âncora | Fundo | Cor do texto | Layout desktop | Layout mobile | Imagens | Animação | Z-index/overflow | Candidata a elemento gráfico? |
|-------|-------|------------|-----------|-------|--------------|----------------|---------------|---------|----------|------------------|-------------------------------|
| 1 | Hero | `HeroCinematic` | `#home` | Video Hero | `surface` | Centralizado (H1 Monumental) | Centralizado | Vídeo | `fade-in-up` | `z-10` / Sem overflow | **Não** (Já complexo) |
| 2 | Intro | `EditorialIntro` | - | `background` | `forest-900` | Flex (Colunas textuais) | Stack | Nenhuma | `fade-in-up` | Base | **Sim** (Território/Restinga) |
| 3 | Manifesto | `BrandManifesto` | `#manifesto` | `background` | `forest-900` | Grid assimétrico 5/7 | Stack vertical | 2 Fotos | `fade-in-up` | Base / Wrapper com gap | **Sim** (Bambu/Restinga) |
| 4 | Timeline | `BrandTimeline` | `#historia` | `background` | `surface` | Flex Header + Grid Items | Stack | Sim | `fade-in-up` | Base / Overflow hidden local | **Sim** (Território no fundo) |
| 5 | Pessoas | `PeopleBehindJundu` | - | `forest-800` | `surface` / `forest-900` | Grid | Stack | Não | `fade-in-up` | Relativo, banner text | **Sim** (Território sólido) |
| 6 | Gastronomia | `GastronomyPillars` | `#gastronomia` | `background` | `forest-900` | Flex Header + Grid | Stack | Não | `fade-in-up` | Base | **Sim** (Bambu) |
| 7 | Arquitetura | `ArchitecturalGallery` | - | `background` | `forest-900` | Grid (Imagens grandes) | Slider / Stack | Múltiplas | Scroll / Hover | Relativo a Imagens | **Não** (Alta densidade) |
| 8 | Eventos | `EventsShowcase` | `#eventos` | `background` | `forest-900` | Grid invertido | Stack | Sim (Overlay) | `fade-in-up` | Base | **Sim** (Bambu/Linhas) |
| 9 | Sustentabilidade | `NatureCommitment` | `#sustentabilidade`| `background` / Banner `forest-900` | `forest-900` / `surface` | Flex Header + Banner + Grid | Stack | Nenhuma | `fade-in-up` | Relativo, overflow hidden | **Sim** (Território) |
| 10 | Cozinha p/ Tela | `KitchenToScreen` | - | `forest-900` | `surface` | Centralizado / Grid de cards | Scroll horizontal | Mockups | `fade-in-up` | Relativo | **Não** |
| 11 | Locais | `LocationsAccordion` | `#restaurantes` | `background` | `forest-900` | Acordeão horizontal/vertical | Acordeão vertical | Sim | `fade-in` | `overflow-hidden` nativo | **Não** |
| 12 | CTA Final | `FinalCTA` | `#reserva` | Foto Full | `surface` | Centralizado | Centralizado | Background | `fade-in-up` | `z-10` overlay | **Não** |
| 13 | Footer | `SiteFooter` | - | `forest-900` | `surface` | Grid colunas | Stack | Logo SVG | Nenhum | Base | **Não** |

## 4. Sistema Visual

### Cores
Baseadas nos tokens de CSS extraídos do projeto (Tailwind v4 `globals.css` e `tokens.css`):
| Token | Valor | Onde é usado | Contraste | Possível cor de Textura? |
|-------|-------|--------------|-----------|--------------------------|
| `forest-900` | `#0A1A12` | Texto principal, Fundos escuros | Muito alto | Sim, em opacidade muito baixa (ex: 3% a 5%) |
| `forest-800` | `#0E2419` | Fundos secundários escuros | Alto | Sim |
| `background` | `#F4EEE1` | Fundo principal da página | Baixo/Luminoso | Sim, como recorte (máscara) de elemento sólido |
| `surface` | `#EBE2CF` | Fundos de cards, textos sobre escuro | Baixo | Não |
| `moss-600` | `#4A5F3A` | Eyebrows, acentos | Médio | Sim, para stroke de Bambu |
| `lime-200` | `#D3E39A` | Acentos luminosos | Médio/Luminoso | Não (chamaria atenção demais) |

### Tipografia
- Fonte Títulos: `--font-display` (Elsie)
- Fonte Corpo: `--font-body` (Satoshi/Inter, configurada via next/font)
- Optical Sizing ativado para tamanhos grandes (`font-optical-sizing: auto`).
- A hierarquia `clamp()` estabiliza o resize e proíbe a textura gráfica de empurrar o layout via height ou width extra. As classes utilitárias `.text-display-hero`, `.text-title-editorial`, etc., protegem o grid.

## 5. Inventário das Matrizes e SVGs

| Arquivo | Formato | Peso | Fill ou Stroke | Cores Incorporadas | Fidelidade à matriz | Uso Atual |
|---------|---------|------|----------------|--------------------|---------------------|-----------|
| `territory.svg` | SVG | 16KB | `fill="#fefefe"` e paths `#010101` | Sim | Fundo branco convertido em path! | Órfão/Desativado |
| `restinga.svg` | SVG | 285KB | `fill="#fefefe"` e paths `#383e39` | Sim | Baixa (parece rede neural devido ao trace automático) | Órfão/Desativado |
| `bamboo.svg` | SVG | 191KB | `fill="#fefdfd"` e paths `#0a0a0a` | Sim | Ruim (perda de nós arquitetônicos originais) | Órfão/Desativado |
| `territorio.jpeg` | Raster | ~1.1MB | Raster Opaco | Tons de cinza | Matriz Original Intacta | Documental |
| `raizes.jpeg` | Raster | ~1.4MB | Raster Opaco | Tons de cinza | Matriz Original Intacta | Documental |
| `bambu.jpeg` | Raster | ~2MB | Raster Opaco | Tons de cinza | Matriz Original Intacta | Documental |

## 6. Histórico e Causa das Falhas Anteriores

1. **Por que a primeira raiz ficou simplificada e diferente? (Confirmada)**: Foi traçada automaticamente em vetor ignorando a riqueza e densidade do raster JPEG original. O algoritmo de Image Trace interpretou ruídos finos como "bolhas" e "redes neurais".
2. **Por que a versão vetorizada apareceu como um bloco cinza? (Confirmada)**: As matrizes JPEG possuíam fundo opaco branco (sem alpha channel). Ao vetorizar, o fundo virou um `<path fill="#fefefe" d="M0 0h2752v1536H0z"/>`. Como a tentativa anterior (commit `8251813`) utilizou `mask-image`, e esta propriedade mascara com base no Alpha da imagem, o fundo branco sólido foi interpretado como 100% de opacidade, resultando num quadrado de cor maciça preenchido por `background-color`.
3. **O `currentColor` deixou de ser resolvido? (Provável)**: Porque o SVG retinha as cores `fill="#010101"` gravadas diretamente nele, impedia a herança do `currentColor` ou variáveis CSS como `var(--texture-color)`.
4. **O espaço vazio do Manifesto permanece reservado atualmente? (Confirmada)**: Não, o commit `d6b8329` deferiu as texturas e removeu os `root-artwork-slot`, unificando as colunas.

## 7. Mapa de Densidade e Aplicação (Análise por Seção)

- **Baixa Densidade**: Editorial Intro, Manifesto (coluna esquerda), Pessoas (fundo escuro).
- **Média Densidade**: Gastronomia, Eventos, Sustentabilidade.
- **Alta Densidade**: Hero, Galeria de Arquitetura, Locais, Cozinha, Final CTA.

Aplicações sugeridas:
| Seção | Aplicar? | Elemento Sugerido | Função | Posição Desktop | Posição Mobile | Cor | Opacidade Estimada | Risco | Justificativa |
|-------|----------|-------------------|--------|-----------------|----------------|-----|--------------------|-------|---------------|
| `EditorialIntro` | Sim | **Restinga** | Fragmento Narrativo | Canto Superior Dir. (absoluto) | Escondido | `forest-900` | 3 a 5% | Baixo | Há vazio generoso no canto direito; mobile ficaria muito denso. |
| `BrandManifesto` | Sim | **Bambu** | Arquitetura | Coluna esquerda (fundo) | Centro absoluto | `forest-900` | 5% | Médio | Evita competir com a foto de equipe; requer stroke fino. |
| `PeopleBehind...`| Sim | **Território** | Forma Principal | Recorte (Mask) no div global | Ajuste de Center | Negativo | 100% (Recorte) | Baixo | Traz respiro para o container escuro, evocando o vazio caiçara. |
| `Architectural...`| Não | - | - | - | - | - | - | Alto | Compete com as fotos ricas e texturas físicas dos materiais. |

## 8. Comparação das Estratégias Técnicas

| Estratégia | Recoloração | Controle de Stroke/Fill | Responsividade | Performance | Acessibilidade | Risco | Adequação ao Jundu |
|------------|-------------|-------------------------|----------------|-------------|----------------|-------|--------------------|
| **SVG Inline (JSX)** | Total (pode injetar `currentColor`) | Total | Alta | Ruim se SVG for pesado (>50KB) | Ótima (`aria-hidden`) | Pode inchar o bundle de JS severamente se a trama da Restinga for usada crua. | Ruim para Restinga/Bambu. |
| **CSS `mask-image`** | Requer `background-color` dinâmico | SVG precisa ser preto e branco | Alta | Ótima (GPU) | Ótima | Funciona apenas se os SVGs originais forem totalmente limpos (fundo transparente sem paths de fundo). | **Ideal para o Território.** |
| **SVG como Next `<Image>`** | Não é possível repintar nativamente | CSS Filters (Invert, Sepia) | Alta | Muito boa | Ótima | Limita recoloração dinâmica em React. | Segurança moderada. |
| **Raster AVIF/WebP c/ Alpha** | Difícil | Nenhum | Média (requer srcSets) | Excelente | Ótima | N/A | **Ideal para Restinga e Bambu**, preservando os ruídos naturais do jpeg original convertido com Alpha. |

A estratégia ideal dita que "Território" seja uma forma CSS Mask 100% vetorial sem fundo, enquanto "Restinga" e "Bambu" passem por um processo criativo raster (AVIF) para reterem suas nuances fotográficas e peso, sem transformar em "rede neural".

## 9. Responsividade
- **Limites de Escala**: Elementos absolutos. Gráficos não podem criar novos *stacking contexts* que prejudiquem modais, ou empurrar o `body` gerando *scrollbars* horizontais.
- **Posição e Orientação**: Em 1440px+, deve-se fixar o elemento a uma das margens (`right: 0`) para evitar o "esmagamento" do grid. Em telas mobile (320px - 390px), usar o elemento como decalque focal (cortado parcialmente).
- **Risco de Overflow**: Deve-se aplicar `.overflow-hidden` nativamente nos *containers parentes relativos* e não no `<body>`, blindando cada seção isoladamente.

## 10. Performance e Acessibilidade
- **Peso Vetorial**: É impossível usar 285KB (Restinga) como SVG inline (React). Causa degradação imensa no *First Contentful Paint*.
- **`aria-hidden="true"`**: Obrigatório para todos os `div`, `svg` ou `img` de texturas.
- **Modo Reduzido de Movimento/Transparência**: Aplicar `pointer-events: none` sem exceções. Adicionar media queries desativando texturas quando `@media (prefers-reduced-transparency: reduce)` e sem animações lentas.
- **Fallback Safari**: Incluir SEMPRE `-webkit-mask-image` ao lado do padrão `mask-image`.

---

# PACOTE PARA CONSULTORIA EXTERNA

As falhas foram investigadas, os assets mapeados e as vulnerabilidades técnicas isoladas. Encaminhar estes recursos ao especialista de frontend:

**Arquivos de Código Relevantes:**
1. `src/app/globals.css` (Para os tokens, especialmente `--texture-opacity`).
2. `src/styles/tokens.css` (Define as paletas e cores do Jundu).
3. `src/components/brand/textures/*.tsx` (O código legado desativado com as tentativas de `mask-image`).

**Matrizes Raster Originais (Fidelidade Intacta):**
- `ARQUIVOS/testuras/territorio.jpeg`
- `ARQUIVOS/testuras/bambu.jpeg`
- `ARQUIVOS/testuras/raizes.jpeg`

**SVGs Atuais (Corrompidos):**
- `public/brand/textures/*.svg` (Contêm `path` de fundo opaco bloqueando alpha, servindo apenas para análise do problema).

**Capturas de Estado:**
- Estão localizadas na pasta `.gemini/antigravity/brain/{session}` (Screenshots documentais das áreas limpas em 1440px e 390px, isolando blocos).

**Perguntas Técnicas (Em Aberto):**
1. O elemento "Restinga/Raízes", pela sua complexidade orgânica, deve ser re-vetorizado limpando paths ou seria mais perfomático convertê-lo para AVIF monocromático com fundo transparente (Alpha channel nativo)?
2. Como definiremos a âncora de `mask-position` (top, center, offset customizado) do elemento "Território" para que o corte no mobile mantenha o sentido de "ausência"?
3. O "Bambu" é essencialmente *stroke-based*. Deveríamos limpá-lo no Illustrator removendo os *fills* brancos e exportá-lo com `<path stroke="currentColor" fill="none">` para controle estrito via Tailwind?
4. A aplicação nas seções com grid assimétrico (`BrandManifesto`) exige que o *wrapper* decorativo seja contido dentro da coluna do grid ou que flutue atrás do *container* principal de 1320px sem interferir na semântica?
5. Qual é o limite aceitável de KBs fixado para essas artes antes de começarmos a ferir a métrica de LCP da página no carregamento estático do Next.js?

**O Que Não Pode Ser Alterado:**
- A ordem das seções estabelecida e mapeada em `page.tsx`.
- A tipografia de fluido com classes de escala (não criar *inline heights* pautadas pelo SVG).
- Fotografias primárias e paleta principal `forest`, `cream`, e `surface`.
- Não substituir fotografias fotográficas pelas texturas.
