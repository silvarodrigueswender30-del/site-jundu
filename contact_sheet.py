import os
from PIL import Image, ImageDraw, ImageFont

base_dir = r"C:\Users\Teste\Downloads\Restaurante"
candidates = [
    r"ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\09\banner-home-3-1024x594.webp",
    r"ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\06\foto-home-1-jundu-600x411.webp",
    r"ARQUIVOS\251cfc0dd164f0cbe7e41ea28894afbe.jpg",
    r"ARQUIVOS\251cfc0dd164f0cbe7e41ea28894afbe (1).jpg",
    r"ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\06\Itagua-jundu-home-mini-banner.webp"
]

qa_dir = os.path.join(base_dir, "docs", "qa")
os.makedirs(qa_dir, exist_ok=True)
contact_sheet_path = os.path.join(qa_dir, "contact-sheet-hero-candidates.png")

sheet_w = 1200
sheet_h = 1000
sheet = Image.new("RGB", (sheet_w, sheet_h), (244, 238, 225))
draw = ImageDraw.Draw(sheet)

y_offset = 20
draw.text((20, y_offset), "PRANCHA DE CONTATO - CANDIDATAS A HERO", fill=(10, 26, 18))
y_offset += 40

for idx, c_path in enumerate(candidates):
    full_path = os.path.join(base_dir, c_path)
    if os.path.exists(full_path):
        img = Image.open(full_path)
        w, h = img.size
        size_kb = os.path.getsize(full_path) // 1024
        
        # thumbnail
        thumb_h = 120
        thumb_w = int(thumb_h * (w/h))
        thumb = img.resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)
        
        sheet.paste(thumb, (20, y_offset))
        
        info = f"Arquivo: {os.path.basename(c_path)}\nResolução: {w}x{h} px\nProporção: {w/h:.2f}:1\nTamanho: {size_kb} KB"
        
        rec = "Inadequado (Muito pequeno ou vertical)"
        if w >= 1000 and w > h:
            rec = "Candidato Forte (Horizontal, mas < 1920px). Requer uso com limitação registrada."
            
        draw.text((20 + thumb_w + 20, y_offset), info + f"\nRecomendação: {rec}", fill=(10, 26, 18))
        y_offset += 140

sheet.save(contact_sheet_path)

with open(os.path.join(base_dir, "docs", "HERO-ASSET-SELECTION.md"), "w", encoding="utf-8") as f:
    f.write("""# Seleção de Imagem para a Hero (Revisão)

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
""")
