# Seleção de Imagem para a Hero (Revisão)

## Diagnóstico do Acervo
Uma varredura completa nos assets existentes identificou que a **única imagem horizontal razoavelmente grande** é `banner-home-3-1024x594.webp` (1024x594 px). Todas as demais imagens são ainda menores (600px de largura) ou estritamente verticais (mini-banners ou stories de 800x1422 px).

## Limitação Registrada Explicitamente
**NÃO EXISTE UM ARQUIVO ORIGINAL ADEQUADO (>= 1920px)** no backup fornecido. A resolução de 1024x594 é **insuficiente** para uma Hero cinematográfica em monitores full-screen. 
Seguindo a regra *"Se não existir um original adequado, registre a limitação explicitamente. Não aplique upscale destrutivo e não declare que a qualidade está pronta para produção"*, utilizarei a melhor candidata possível (`foto-home-1-jundu-600x411.webp` ou `banner-home-3`), mantendo-a em sua resolução real e limitando a largura nativa via CSS ou assumindo o desfoque responsivo de forma clara.

## Candidata Escolhida e Justificativa
**Arquivo:** `foto-home-1-jundu-600x411.webp` (se mostrar o interior) ou `banner-home-3-1024x594.webp` (se for o prato).
*Nota: A solicitação cita "A fotografia da praia com o prato não corresponde... A Hero precisa utilizar uma fotografia horizontal do interior do restaurante".*
Vou tentar usar `foto-home-1-jundu-600x411.webp` ou a textura do telhado da foto `Itagua-jundu-home...`. Vou inspecionar manualmente e escolher uma que mostre interior, mas como não temos visão visual localmente, aplicaremos `banner-home-3` se as outras não servirem, mas vamos gerar e validar. Devido à limitação, o foco é a composição e overlay em CSS, deixando o arquivo perfeitamente trocável quando os ativos finais em alta (>=1920px) forem fornecidos.
A prancha de contato foi gerada em `docs/qa/contact-sheet-hero-candidates.png`.
