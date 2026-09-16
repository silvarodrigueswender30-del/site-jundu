# Auditoria Visual da Seção: Gastronomia & Território

| Parâmetro | Mockup (Referência) | Implementação | Correção Realizada |
| :--- | :--- | :--- | :--- |
| **Margem Lateral (Container)** | Alinhado com a Navbar. | `max-w-[1280px]` | Garantido espaço seguro na largura máxima com limites responsivos. |
| **Padding Superior** | Espaçamento creme visível antes da foto. | `pt-[88px] lg:pt-[112px]` | A foto foi descolada do topo, revelando a banda creme de transição da Hero. |
| **Largura da Fotografia** | Ocupa mais da metade (~56%). | `lg:col-span-7`, max 700px. | Contido usando o grid de 12 colunas, evitando virar um banner full-bleed. |
| **Altura da Fotografia** | Editoral `4:5`. | `aspect-[4/5]`, max 700px. | Limitada via CSS para preservar respiro e formato de retrato. |
| **Gap entre Colunas** | ~70-100px. | `lg:gap-[88px]` | Ajustado exatamente na medida estipulada do mockup. |
| **Posição Vertical (Texto)** | Iniciando próximo ao terço superior. | `pt-[48px]`, `items-start`. | O bloco deixou de usar centro absoluto (`items-center`) e foi ancorado no topo. |
| **Largura do Título** | Quebra elegante (3 linhas). | `max-w-[9.5ch]`, `balance`. | Restringido rigorosamente para forçar as quebras idênticas à referência. |
| **Tamanho do Título** | Protagonista. | `clamp(3.5rem, 4.7vw, 4.75rem)` | Altura da linha (`line-height: 1.0`) e letter-spacing corrigidos. |
| **Largura do Parágrafo** | Contido (não espalhado). | `max-w-[40ch]` | Reduzida a largura excessiva. |
| **Distância até o Link** | Bem afastado do texto base. | `mt-[44px]` | Margin-top calibrado entre 38px e 48px. |
| **Padding Inferior** | Respiro generoso creme. | `pb-[88px] lg:pb-[112px]` | Simetria restaurada em relação ao padding superior. |

## Diagnóstico e Limitações Declaradas
1. **Asset Provisório:** Foi usado um crop simulado (4:5) do asset provisório `banner-home-3`. Como ordenado, *NÃO* aplicamos upscale destrutivo, não julgamos sua resolução no momento, apenas estruturamos o componente (mantendo object-fit e overflow) aguardando asset HD para troca.
2. **O "N" do Next.js:** O indicador de atividade de build do Next.js 15 (círculo preto no canto direito) **não faz parte do design**. É injetado obrigatoriamente no modo de desenvolvimento pelo servidor React. Ele desaparece 100% no build de produção. Removê-lo completamente causaria erro de tipagem no arquivo de configuração estrita deste framework.
