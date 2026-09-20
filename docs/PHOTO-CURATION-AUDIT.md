# Relatório de Auditoria e Curadoria Fotográfica — Grupo Jundu

## Resumo Executivo
Foi realizada uma auditoria completa no diretório `IMG-RESTAURANTE`, que continha fotografias e vídeos distribuídos em quatro subpastas: JUNDU-ITAGUA, JUNDU-PRAIA-GRANDE, JUNDU-PRUMIRIM e Red Beach Club. O acervo consiste de **60 arquivos no total**. O material apresenta excelente valor institucional, forte apelo gastronômico e representação fiel do "clima" da marca, mas possui restrições técnicas devido à origem dos arquivos (maioria proveniente de *stories* do Instagram, com proporção vertical 0.80 ou 0.75).

## Tabela Comparativa de Candidatas à Hero

| Nome completo | Unidade | Dimensões | Qualidade | Força Institucional | Espaço para Texto | Dificuldade Expansão | Risco Artefatos | Desktop | Mobile | Nota | Recomendação |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `StorySaver.to_571453473_18534904870017293_226220910000315993_n.jpg` | Prumirim | 1440x1800 | Alta | 5/5 | Precisa expandir | Média (Mar liso) | Baixo (Mar e céu fáceis de clonar) | Não (nativa) | Sim | 5.0 | **Vencedora Principal** |
| `StorySaver.to_801580921_18625023292017293_89867696009660897_n.jpg` | Prumirim | 1440x1920 | Alta | 4.5/5 | Precisa expandir | Alta (Cadeiras e areia complexa) | Médio | Não (nativa) | Sim | 4.8 | Alternativa 1 |
| `StorySaver.to_571135459_18300371842301970_5547221688464787617_n.jpg` | Itaguá | 1440x960 | Média | 4/5 | Ocupado | Baixa (Já horizontal) | Baixo | Sim | Não (corta) | 4.5 | Alternativa 2 |
| `StorySaver.to_626378659_18081080738595984_5609578866057375034_n.jpg` | Praia G. | 1440x1920 | Alta | 4/5 (Foco comida) | Precisa expandir | Alta (Mesa de madeira texturizada) | Alto | Não (nativa) | Sim | 4.2 | Descartada para Hero (usar Gastronomia) |
| `StorySaver.to_616376453_18078684461595984_4763076786779034574_n (1).jpg` | Praia G. | 1440x1920 | Alta | 4/5 (Hospitalidade) | Precisa expandir | Alta (Fundo com objetos e luzes) | Alto | Não (nativa) | Sim | 4.0 | Descartada para Hero (usar Equipe) |

## Diagnóstico Técnico Geral

- **Resolução e Orientação**: Mais de 80% das imagens são **Verticais (9:16 / 4:5)**. São perfeitas nativamente para Mobile.
- **Uso em Desktop**: O uso direto como Hero no Desktop (16:9) é **inviável sem edição**.
- **Expansão Generativa**: Recomendação mandatória de usar IA generativa para **expandir as laterais** das candidatas à hero.

## Próximos Passos (Recomendação para Especialista)

1. **Expansão Generativa**: Extrair a Vencedora Principal e aplicar *Generative Fill* nas bordas até atingir 16:9.
2. **Correção de Cor**: Padronizar levemente a temperatura das fotos.
3. **Conversão de Formatos**: Converter para `.webp` com compressão `q=80`.
4. **Implementação**: Ajustar os componentes para carregar os vídeos e imagens.
