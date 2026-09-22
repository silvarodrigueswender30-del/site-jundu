# Relatório de Auditoria Integral - Site Jundu

## 1. Resumo Executivo
O site do Grupo Jundu encontra-se em um estado avançado de maturidade estrutural e coesão de interface. A separação entre dados (em `site.ts`) e componentes UI (em `src/components/sections/`) garantiu consistência. Contudo, constatamos uma severa **repetição de fotografias placeholders**, um conflito grave de **âncoras duplicadas** que quebra a navegação e a ausência de implementações essenciais de SEO Técnico e Acessibilidade (JSON-LD, focus traps). Esta auditoria prescreve a estabilização técnica e de conteúdo antes do lançamento final.

---

## 2. Estado Atual
- **Hash de Referência:** `4a4b65a`
- **Branch:** `main`
- **Ambiente de Produção:** [Vercel Deployment (1dcrgsqqy)](https://site-jundu-1dcrgsqqy-silvarodrigueswender30-dels-projects.vercel.app)

---

## 3. Pontos Fortes
1. **Performance Inicial:** Imagens convertidas para `.webp` garantem que o peso global da landing page seja muito baixo, resultando em builds extremamente rápidos (1.3s).
2. **Coesão Visual:** O uso rigoroso da tipografia (Elsie e Arimo) e da paleta (Creme/Surface e Verde-Floresta) entregou um tom de elegância litorânea alinhado ao branding.
3. **Escalabilidade de Dados:** A adoção de `src/data/site.ts` desvinculou 90% do conteúdo da camada de apresentação (React).
4. **Animação Unificada:** O uso de classes modulares como `animate-[fade-in-up]` evitou dependências pesadas de terceiros (como Framer Motion ou GSAP).

---

## 4. Problemas P0 (Críticos)
- **Âncoras Duplicadas:** O ID `#gastronomia` é utilizado duas vezes na mesma página (nas seções `GastronomyPillars` e `KitchenToScreen`), fazendo com que o link de menu leve o usuário ao primeiro bloco, ignorando o segundo e ferindo regras de HTML válido.
- **Link Cego no Menu:** O item "Contato" da navbar (`href="#contato"`) direciona ao `SiteFooter`. No entanto, em `site.ts`, há uma discrepância onde "Termos de Uso" e "Política de Privacidade" possuem apenas `href="#"`, causando recarregamento da página ou subida brusca.
- **Botões do Final CTA:** A estrutura de dados aponta `primaryAction.href = "#unidades"`, que apenas repete a ação de `LocationsAccordion`, frustrando o fluxo final do usuário.

---

## 5. Problemas P1 (Visual Relevante / Conteúdo)
- **Canibalização Fotográfica (Repetição Extrema):** As imagens provisórias `story-atendimento.webp`, `story-atmosfera.webp`, e `story-gastronomia.webp` estão repetidas exaustivamente ao longo de `PeopleBehindJundu`, `EditorialIntro`, `GastronomyPillars`, `VerticalStories`, `LocationsAccordion`, `EventsShowcase` e `KitchenToScreen`.
- **Placeholder de Baixa Resolução:** As imagens `arch-main.webp` (5.6KB), `arch-detail.webp` (2.1KB) e `arch-people.webp` (2.1KB) não possuem resolução comercial aceitável (estão severamente pixeladas).
- **Conteúdo Provisório:** Há comentários de `// TODO` remanescentes, como na seção `NatureCommitment` (fotografia sustentabilidade ausente) e em `EventsShowcase`.
- **Textos Hardcoded:** A seção `ArchitecturalGallery` possui suas imagens presas (hardcoded) no componente em vez de vir de `site.ts`.

---

## 6. Refinamentos P2
- **Densidade em Mobile:** Quando a navbar mobile fica "sticky", algumas seções podem sofrer com espaços de _offset_ mal calculados ao pular diretamente pelo ID.
- **Ausência de Fotografias Oficiais:**
  - Foto da matriz (Prumirim).
  - Fotos exclusivas de coquetelaria (Drinks oficiais).
  - Foto oficial da equipe (Mais de 200 colaboradores).
- **Inconsistência "Grupo Jundu":** Algumas copys apenas citam "Jundu" enquanto outras exigem "Grupo Jundu".

---

## 7. Sugestões P3
- Omitir "Red Beach Club" do pipeline enquanto não houver confirmação oficial do cliente.
- Vetores da "Textura Jundu" adiados (`brand-manifesto`) podem ser transformados em componentes menores puramente baseados em CSS para poupar tempo de renderização, ou definitivamente descartados do bundle se não forem usados.

---

## 8. Inventário de Seções (Ordem de Renderização)

| Ordem | Componente | ID (`id`) | `data-section` | Superfície | Status Atual |
|---|---|---|---|---|---|
| 01 | `HeroCinematic` | N/A | N/A | `bg-forest-900` | Provisório (Vídeos pendentes) |
| 02 | `BrandManifesto` | `#essencia` | `brand-manifesto` | `bg-background` | Texturas adiadas |
| 03 | `BrandTimeline` | `#historia` | `brand-timeline` | `bg-forest-900` | Definitivo |
| 04 | `PeopleBehindJundu` | `#pessoas` | `people-behind-jundu` | `bg-background` | Definitivo (Foto provisória) |
| 05 | `EditorialIntro` | `#experiencia` | `editorial-intro` | `bg-surface` | Definitivo (Foto provisória) |
| 06 | `GastronomyPillars` | `#gastronomia` | `gastronomy-pillars` | `bg-background` | P0 (ID Duplicado) |
| 07 | `VerticalStories` | `#historias` | `vertical-stories` | `bg-forest-900` | Definitivo (Foto provisória) |
| 08 | `ArchitecturalGallery` | N/A | `architectural-gallery`| `bg-background` | P1 (Hardcoded, Baixa resolução)|
| 09 | `JWindow` | `#j-mask` | `j-window` | `bg-background` | Definitivo |
| 10 | `LocationsAccordion` | `#unidades` | `locations-accordion` | `bg-forest-900` | Definitivo |
| 11 | `EventsShowcase` | `#eventos` | `events-showcase` | `bg-forest-900` | Definitivo (Foto provisória) |
| 12 | `NatureCommitment` | `#sustentabilidade` | `nature-commitment` | `bg-surface` | Definitivo (Sem foto oficial)|
| 13 | `KitchenToScreen` | `#gastronomia` | `kitchen-to-screen` | `bg-background` | P0 (ID Duplicado) |
| 14 | `FinalCta` | `#reserva` | N/A | `bg-forest-900` | Definitivo |

---

## 9. Matriz de Assets (Fotografia)

| Asset | Dimensões Est. | Peso | Repetições | Prioridade de Troca |
|---|---|---|---|---|
| `jundu-hero-desktop.webp` | Hero (1440+) | 87.32 KB | 1x | Baixa |
| `jundu-hero-mobile.webp` | Hero (390+) | 34.57 KB | 1x | Baixa |
| `gastronomia-provisoria.webp`| Várias | 45.71 KB | Múltiplas | Alta |
| `story-atendimento.webp` | Vertical/Várias | 30.81 KB | Múltiplas | Alta |
| `story-atmosfera.webp` | Vertical/Várias | 29.17 KB | Múltiplas | Alta |
| `story-gastronomia.webp` | Vertical/Várias | 14.84 KB | Múltiplas | Alta |
| `arch-main.webp` | Horizontal | 5.63 KB | 1x | Crítica (Baixa resolução) |
| `arch-detail.webp` | Vertical | 2.17 KB | 1x | Crítica (Baixa resolução) |
| `arch-people.webp` | Vertical | 2.17 KB | 1x | Crítica (Baixa resolução) |

*Faltam: Fotografias de Coquetelaria, Time (200 pessoas), Sustentabilidade e Filmagens em drone/detalhes.*

---

## 10. Navegação e CTAs
- **Navbar Links**: Todos testados. Maioria direciona corretamente, exceto pelo conflito em `#gastronomia`.
- **CTA Final**: Repete roteamentos. "Fazer uma Reserva" e "Conheça as Unidades". Deveríamos guiar o visitante diretamente ao sistema de reservas (ex: link externo para GetIn/Tagme/WhatsApp) ou formulário.

---

## 11. Responsividade
- **Desktop (1440/1280):** Fluxo perfeitamente desenhado.
- **Mobile (390):** Padding vertical bem resolvido (geralmente entre 80-96px), mas ao pular de âncoras na Navbar, a margem de respiro frequentemente engole os títulos se não houver compensação global (CSS `scroll-margin-top`).

---

## 12. Acessibilidade
- **Semântica HTML:** Boa utilização de `<section>` e `<main>`.
- **Alt Text:** Variáveis de texto de alt-text estão aplicadas, porém em seções puramente decorativas (como SVG Masks), exigem um `aria-hidden="true"`.
- **Focus Visível:** Navegação por teclado possui anéis de foco definidos em alguns links, mas botões de carrossel ou Accordion podem não possuir o atributo _Focus Trap_ ou captura de _Escape_.

---

## 13. Performance
- **Next Image Component:** Bem utilizado (com `fill` e `sizes` ajustados na maioria das partes).
- **Scripts Nativos:** Animações feitas puramente com Tailwind reduzem a carga computacional, mas seções mais complexas com scroll interceptado (`JWindow`) requerem vigilância contra _layout shifts_.

---

## 14. SEO Técnico
- `src/app/layout.tsx` exibe metadados extremamente rasos: apenas `title` e `description`.
- **Falta:** 
  - Open Graph / Twitter Cards.
  - Dados Estruturados Schema.org (`LocalBusiness`, `Restaurant`).
  - Tags `<link rel="canonical">`.
  - Configuração de `robots.txt` e `sitemap.xml`.

---

## 15. Higiene do Repositório
O branch `main` possui lixo de desenvolvimento que polui a árvore do GIT e não pertence a builds de produção:
- Inúmeros scripts na raiz do projeto (ex: `capture_qa.py`, `capture_hero.py`, `capture_editorial.py` etc.).
- Uma vasta pasta local `docs/qa/` contendo dezenas de megabytes de screenshots de debug que deveriam estar no `.gitignore`.
- Uma pasta não monitorada `ARQUIVOS/doc/` e `ARQUIVOS/testuras/`.

---

## 16. Plano de Correção em Fases

**Fase 1: Higiene e Estabilização Técnica (Imediato)**
- Limpar `scratch-*`, `capture_*.py`, e `docs/qa/` do controle de versão via GIT CLI.
- Corrigir o conflito grave do ID `#gastronomia` alterando um dos IDs e suas refêrencias.
- Configurar Metadados completos no `layout.tsx` (OpenGraph) e metatag de SEO.

**Fase 2: Arquitetura de Conteúdo e Assets**
- Receber pacote oficial de fotos de alta resolução do Grupo Jundu (Unidades, Coquetelaria, Sustentabilidade e Time).
- Substituir e mapear individualmente cada componente para encerrar o reuso massivo das mesmas fotografias em `site.ts`.
- Remover a declaração estática de imagens no `architectural-gallery.tsx` e integrá-la ao `site.ts`.

**Fase 3: Refinamento de Interface**
- Implementar `scroll-padding-top` ou similar no `<html className="scroll-smooth">` para prevenir que os IDs sejam devorados pela _Sticky Navbar_.
- Configurar devidamente os links de Reserva.
