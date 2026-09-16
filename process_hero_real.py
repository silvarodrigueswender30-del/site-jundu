import os
from PIL import Image

base_dir = r"C:\Users\Teste\Downloads\Restaurante"
# Assuming foto-home-1 is the interior
src_path = os.path.join(base_dir, r"ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\06\foto-home-1-jundu-600x411.webp")
out_dir = os.path.join(base_dir, "public", "images", "hero")

if os.path.exists(src_path):
    img = Image.open(src_path).convert("RGB")
    
    # Save Real WEBP without fake AVIF
    desktop_path = os.path.join(out_dir, "jundu-hero-desktop.webp")
    img.save(desktop_path, "WEBP", quality=90)
    
    # Mobile crop
    w, h = img.size
    target_ratio = 9 / 16
    current_ratio = w / h
    
    if current_ratio > target_ratio:
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        img_mobile = img.crop((left, 0, left + new_w, h))
    else:
        img_mobile = img
        
    mobile_path = os.path.join(out_dir, "jundu-hero-mobile.webp")
    img_mobile.save(mobile_path, "WEBP", quality=90)
    
    # Remove fake AVIFs
    avif1 = os.path.join(out_dir, "jundu-hero-desktop.avif")
    avif2 = os.path.join(out_dir, "jundu-hero-mobile.avif")
    if os.path.exists(avif1): os.remove(avif1)
    if os.path.exists(avif2): os.remove(avif2)

print("Hero image regenerated as WebP only.")
