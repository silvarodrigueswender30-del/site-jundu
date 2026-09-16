import os
from PIL import Image

base_dir = r"C:\Users\Teste\Downloads\Restaurante"
mockup_path = os.path.join(base_dir, "ARQUIVOS", "Mockup_Jundu_Ubatuba_Variacao_03_Imagem_Video.png")
impl_path = os.path.join(base_dir, "docs", "qa", "hero", "capture_1440px.png")
out_path = os.path.join(base_dir, "docs", "qa", "hero", "side-by-side-1440px.png")

if os.path.exists(mockup_path) and os.path.exists(impl_path):
    mockup = Image.open(mockup_path).convert("RGB")
    impl = Image.open(impl_path).convert("RGB")
    
    # We only care about the hero section, let's crop top 1000px of mockup
    w_m, h_m = mockup.size
    mockup_hero = mockup.crop((0, 0, w_m, min(1000, h_m)))
    
    # Resize mockup to 1440 if it isn't
    if w_m != 1440:
        ratio = 1440 / w_m
        mockup_hero = mockup_hero.resize((1440, int(mockup_hero.size[1]*ratio)), Image.Resampling.LANCZOS)
    
    # We take top 1000px of implementation too
    w_i, h_i = impl.size
    impl_hero = impl.crop((0, 0, w_i, min(1000, h_i)))
    
    # Create side-by-side
    combined = Image.new("RGB", (1440 * 2, max(mockup_hero.size[1], impl_hero.size[1])))
    combined.paste(mockup_hero, (0, 0))
    combined.paste(impl_hero, (1440, 0))
    
    combined.save(out_path)
    print("Side-by-side generated.")
else:
    print("Files not found for side-by-side.")
