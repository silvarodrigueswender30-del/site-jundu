from PIL import Image
import os

base_dir = r"C:\Users\Teste\Downloads\Restaurante"
mockup_path = os.path.join(base_dir, "ARQUIVOS", "Mockup_Jundu_Ubatuba_Variacao_03_Imagem_Video.png")
impl_path = os.path.join(base_dir, "docs", "qa", "stories", "stories-section-1440px.png")
out_path = os.path.join(base_dir, "docs", "qa", "stories", "side-by-side-stories-1440px.png")

if os.path.exists(mockup_path) and os.path.exists(impl_path):
    mockup = Image.open(mockup_path).convert("RGB")
    impl = Image.open(impl_path).convert("RGB")
    
    w_m, h_m = mockup.size
    # Focus on the vertical stories section (y ~1900 to 2900)
    mockup_sec = mockup.crop((0, 1900, w_m, min(2900, h_m)))
    
    if w_m != 1440:
        ratio = 1440 / w_m
        mockup_sec = mockup_sec.resize((1440, int(mockup_sec.size[1]*ratio)), Image.Resampling.LANCZOS)
    
    w_i, h_i = impl.size
    
    combined = Image.new("RGB", (1440 * 2, max(mockup_sec.size[1], h_i)))
    combined.paste(mockup_sec, (0, 0))
    combined.paste(impl, (1440, 0))
    
    combined.save(out_path)
    print("Side-by-side stories generated.")
else:
    print("Files not found for side-by-side.")
