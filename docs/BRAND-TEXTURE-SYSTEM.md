# Sistema de texturas da marca Jundu

O sistema visual aprovado possui três famílias complementares. A máscara fotográfica foi descartada. As referências raster em `ARQUIVOS/testuras/` são matrizes de direção de arte; a interface usa componentes SVG, nunca os JPEGs como fundos finais.

## Hierarquia

| Família | Frequência | Construção | Papel |
| --- | ---: | --- | --- |
| Território por Ausência | 70% | formas preenchidas e canais vazados | assinatura principal e transições |
| Arquitetura Enraizada | 20% | linhas orgânicas que se tornam trama | arquitetura e superfícies verdes |
| Trama de Restinga | 10% | linhas finas e poucos nós | manifesto, sustentabilidade e footer |

Os percentuais indicam frequência visual, não opacidade.

## Território por Ausência

- Componente: `territory-texture.tsx`.
- Usar em transições, CTA, unidades e blocos institucionais.
- Manter o espaço negativo à esquerda para conteúdo editorial.
- Creme: verde-floresta em baixa opacidade.
- Verde: creme ou âmbar em baixa opacidade.
- Não usar como máscara fotográfica.

## Arquitetura Enraizada

- Componente: `bamboo-texture.tsx`.
- Usar prioritariamente na galeria arquitetônica e, de forma pontual, em superfícies verdes.
- O desenho deve permanecer aberto, com poucos cruzamentos e traço fino.
- Nunca competir com fotografias ou textos pequenos.
- Não possui movimento contínuo.

## Trama de Restinga

- Componente: `root-texture.tsx`.
- Aplicação principal: seção “Onde a praia cria raízes”.
- Mostrar fragmentos ampliados e recortados; nunca o desenho completo e centralizado.
- Nós em rosa funcionam como acento da marca e devem permanecer escassos.
- Pode reaparecer em sustentabilidade e footer com opacidade inferior à aplicação do Manifesto.

## Tokens

```css
--texture-opacity-subtle: 0.03;
--texture-opacity-soft: 0.05;
--texture-opacity-visible: 0.08;

--texture-scale-sm: 160px;
--texture-scale-md: 320px;
--texture-scale-lg: 640px;
```

## Regras técnicas

- SVG decorativo com `aria-hidden="true"`.
- `pointer-events: none` e `user-select: none`.
- A seção controla o recorte com `overflow: hidden`.
- A textura nunca altera a altura ou a largura do layout.
- Cor baseada em `currentColor` e tokens do Design System.
- Recortes diferentes para desktop e mobile; não apenas redução proporcional.
- Sem loops de animação. Quando houver entrada, respeitar `prefers-reduced-motion`.
- Preservar áreas completamente limpas entre as aplicações.

## Estado de implantação

**STATUS: aplicação visual temporariamente adiada.**

Os SVGs permanecem como estudos técnicos. Nenhuma textura deve ser aplicada em produção até uma nova validação do método de renderização e fidelidade visual.

- Trama de Restinga: vetorizada, porém removida do Manifesto para auditoria visual.
- Território por Ausência: vetorizada, aguardando validação.
- Arquitetura Enraizada: vetorizada, aguardando validação.
