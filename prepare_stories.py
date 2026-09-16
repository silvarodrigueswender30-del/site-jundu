from PIL import Image
import os

base_dir = r"C:\Users\Teste\Downloads\Restaurante"
out_dir = os.path.join(base_dir, "public", "images", "stories")
os.makedirs(out_dir, exist_ok=True)

# Map the 3 story cards to available vertical photos
sources = [
    # Story 1: "Servir é acolher" (ATENDIMENTO) - DSC05816 shows a server/person
    (os.path.join(base_dir, r"ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\08\DSC05816-1-1.png"), "story-atendimento.webp"),
    # Story 2: "O prato chega à mesa" (GASTRONOMIA) - DSC06625 shows food/plating
    (os.path.join(base_dir, r"ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\08\DSC06625-1.png"), "story-gastronomia.webp"),
    # Story 3: "A noite acende" (ATMOSFERA) - Rectangle-8-1 shows ambiance
    (os.path.join(base_dir, r"ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\08\Rectangle-8-1.png"), "story-atmosfera.webp"),
]

for src_path, out_name in sources:
    if os.path.exists(src_path):
        img = Image.open(src_path).convert("RGB")
        w, h = img.size
        
        # Target 9:16, keeping height and cropping width
        target_ratio = 9 / 16
        current_ratio = w / h
        
        if current_ratio > target_ratio:
            new_w = int(h * target_ratio)
            left = (w - new_w) // 2
            img = img.crop((left, 0, left + new_w, h))
        elif current_ratio < target_ratio:
            new_h = int(w / target_ratio)
            top = (h - new_h) // 2
            img = img.crop((0, top, w, top + new_h))
        
        out_path = os.path.join(out_dir, out_name)
        img.save(out_path, "WEBP", quality=88)
        final = Image.open(out_path)
        print(f"{out_name}: {final.size[0]}x{final.size[1]}")
    else:
        print(f"NOT FOUND: {src_path}")
