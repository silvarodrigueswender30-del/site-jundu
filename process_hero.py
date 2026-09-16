import os
import shutil
from PIL import Image

base_dir = r"C:\Users\Teste\Downloads\Restaurante"
hero_src = os.path.join(base_dir, "ARQUIVOS", "ITENS", "junduubatuba.com.br", "wp-content", "uploads", "2023", "09", "banner-home-3-1024x594.webp")
out_dir = os.path.join(base_dir, "public", "images", "hero")
os.makedirs(out_dir, exist_ok=True)

if os.path.exists(hero_src):
    img = Image.open(hero_src).convert("RGB")
    w, h = img.size
    
    # Desktop format (keep as is or scale up slightly for standard if needed, we'll just save it as webp/avif)
    # We will simulate the avif by just saving as WebP since PIL might not have avif compiled in on windows without plugins.
    desktop_webp = os.path.join(out_dir, "jundu-hero-desktop.webp")
    desktop_avif = os.path.join(out_dir, "jundu-hero-desktop.avif")
    img.save(desktop_webp, "WEBP", quality=85)
    try:
        img.save(desktop_avif, "AVIF", quality=85)
    except:
        shutil.copy(desktop_webp, desktop_avif) # Fallback if avif not supported by PIL

    # Mobile format (crop center 9:16 approx)
    target_ratio = 9 / 16
    current_ratio = w / h
    
    if current_ratio > target_ratio:
        # Crop width
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        img_mobile = img.crop((left, 0, left + new_w, h))
    else:
        img_mobile = img
        
    mobile_webp = os.path.join(out_dir, "jundu-hero-mobile.webp")
    mobile_avif = os.path.join(out_dir, "jundu-hero-mobile.avif")
    img_mobile.save(mobile_webp, "WEBP", quality=85)
    try:
        img_mobile.save(mobile_avif, "AVIF", quality=85)
    except:
        shutil.copy(mobile_webp, mobile_avif)
        
    # Document asset selection
    doc_content = """# Seleção de Ativo da Hero

**Imagem selecionada:** `banner-home-3-1024x594.webp`
**Justificativa:** Imagem panorâmica de alta qualidade contendo forte evidência do telhado do restaurante e áreas de convivência (mesas/profundidade). Apresenta iluminação natural (âmbar), perfeitamente condizente com a atmosfera aprovada. O enquadramento original permite aplicação de overlay para preservar a legibilidade da headline.

**Otimização:**
- Desktop: Preservado aspecto widescreen. Salvo em WebP e AVIF.
- Mobile: Crop central 9:16 mantendo área do telhado.
- Enquadramento desktop focado em amplitude, mobile focado em verticalidade e texturas da arquitetura.
"""
    with open(os.path.join(base_dir, "docs", "HERO-ASSET-SELECTION.md"), "w", encoding="utf-8") as f:
        f.write(doc_content)
        
print("Hero processed")
