from PIL import Image
import os

base_dir = r"C:\Users\Teste\Downloads\Restaurante"
img_path = os.path.join(base_dir, r"ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\09\banner-home-3-1024x594.webp")

if os.path.exists(img_path):
    img = Image.open(img_path).convert("RGBA")
    w, h = img.size
    
    # Check bottom center pixel
    r, g, b, a = img.getpixel((w//2, h-10))
    print(f"Bottom-center pixel color: RGB({r}, {g}, {b})")
    if r > 240 and g > 240 and b > 240:
        print("It's white/very light at the bottom. The wave is burned into the asset.")
else:
    print("File not found")
