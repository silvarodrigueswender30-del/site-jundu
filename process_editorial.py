import os
from PIL import Image

base_dir = r"C:\Users\Teste\Downloads\Restaurante"
# The user mentioned "fotografia da praia com o prato". Let's use banner-home-3 which we know is 1024x594.
src_path = os.path.join(base_dir, r"ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\09\banner-home-3-1024x594.webp")
out_dir = os.path.join(base_dir, "public", "images", "editorial")
os.makedirs(out_dir, exist_ok=True)

if os.path.exists(src_path):
    img = Image.open(src_path).convert("RGB")
    w, h = img.size
    
    # We want a 4:5 ratio. 
    target_ratio = 4 / 5
    current_ratio = w / h
    
    if current_ratio > target_ratio:
        # Crop width
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        img_cropped = img.crop((left, 0, left + new_w, h))
    else:
        # Crop height
        new_h = int(w / target_ratio)
        top = (h - new_h) // 2
        img_cropped = img.crop((0, top, w, top + new_h))
        
    out_path = os.path.join(out_dir, "gastronomia-provisoria.webp")
    img_cropped.save(out_path, "WEBP", quality=90)
    print("Editorial image processed.")
