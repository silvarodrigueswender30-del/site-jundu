import os
import shutil
from PIL import Image, ImageDraw, ImageFont

base_dir = r"C:\Users\Teste\Downloads\Restaurante"

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

# 1. Expand ASSET-INVENTORY.md
asset_inventory = """# Inventário de Ativos (Asset Inventory)

## Documentação e Mockups
- `Mockup_Jundu_Ubatuba_Variacao_03_Imagem_Video.png`: Direção artística aprovada (Foco em Imagem e Vídeo).
- `Conceito-Projeto.txt`: Informações do briefing.

## Tipografia (Extraída do site antigo)
- Origem: Google Fonts hospedadas localmente no Elementor.
- `elsie-bcanqzabrez54xyp_mg.woff2` (Elsie)
- `arimo-p5smzzcdf9_t_10zxce.woff2` (Arimo)

## Logo
- `jundu_logo_site_transparente (1).webp`: Raster original, muito pequeno (140x70px), necessita de redesenho vetorial.
- O arquivo candidato original era na verdade um placeholder e foi renomeado.

## Imagens e Vídeos
- Encontrados diversos rasters e webps na pasta `wp-content/uploads/2023/`.
- Mídia de fundo verde/creme para testes.
- **Necessidade de otimização:** Os webps e jpgs precisarão ser convertidos e tratados em srcset. Vídeos 9:16 precisarão de posters.

## Ação Recomendada
- Utilizar apenas materiais copiados.
- Preservar originais de forma intocada.
- Aguardar aprovação do vetor final da marca.
"""
write_file(os.path.join(base_dir, "docs", "ASSET-INVENTORY.md"), asset_inventory)

# 2. Expand LOGO-RESTORATION-REPORT.md
logo_report = """# Relatório de Restauração da Logo

- **Dimensões originais:** 140x70 px.
- **Método utilizado:** Upscale com reamostragem Lanczos para arquivos rasterizados temporários.
- **Saídas provisórias:** PNG e WebP em 1120px e 2240px.
- **Atenção (Limitações do Upscale):** O método Lanczos apenas interpola pixels e não restaura detalhes inexistentes.
- **Assinatura:** A assinatura inferior encontra-se com nitidez muito limitada nestas versões ampliadas.
- **Vetor Oficial:** Pendente. O arquivo `logo-placeholder.svg` não deve ser tratado como vetor.
- **Máscara do "J":** Está estritamente bloqueada até que exista um vetor válido para garantir qualidade gráfica.
- **Recomendação de Uso Atual:** Apenas utilizar o webp/png em 1120px estritamente como provisório para desenvolvimento de layout.
"""
write_file(os.path.join(base_dir, "docs", "LOGO-RESTORATION-REPORT.md"), logo_report)

# 3. Expand VIDEO-SYSTEM.md
video_system = """# Sistema de Vídeos

- **Codecs:** H.264 em MP4 (com fallback para WebM).
- **Dimensões e Proporção:** Principalmente 9:16 para experiência imersiva vertical. Suporte para 16:9 em paisagem quando aplicável.
- **Bitrate:** Otimizado (alvo de < 2Mbps para mobile, < 4Mbps desktop para vídeos curtos).
- **Posters:** Obrigatório gerar poster AVIF/WebP do primeiro frame (ou frame-chave).
- **Atributos HTML5:**
  - `preload="none"` (exceto para Hero que deve ser "metadata" ou "auto").
  - `playsInline` (crítico para iOS).
  - `muted` sempre que possuir autoplay.
- **Interatividade:**
  - Pause automático usando `IntersectionObserver` quando fora da viewport.
  - Pause via evento `visibilitychange` quando a aba fica oculta.
- **Acessibilidade & Preferências:**
  - Atender a `prefers-reduced-motion` e pausar.
  - Conceder botão "Pausar movimento" flutuante.
- **Fallback Estático:** Imagens devem assumir a responsabilidade visual via `Save-Data` ou conexão lenta (`navigator.connection.effectiveType`).
- **Limites de Peso:** O arquivo de vídeo principal na Hero não deve exceder 5MB na inicialização móvel.
"""
write_file(os.path.join(base_dir, "docs", "VIDEO-SYSTEM.md"), video_system)

# 4. Expand DESIGN-SYSTEM.md
design_system = """# Design System Jundu - Mestre

## Cores
* **Superfícies Escuras:**
  * forest-900: #0A1A12
  * forest-800: #0E2419
  * forest-700: #122E20
  * forest-600: #1B3F2C
  * forest-500: #2A5A3E
  * moss-600: #4A5F3A
* **Superfícies Claras:**
  * background: #F4EEE1
  * surface: #EBE2CF
  * border: #DED3BC
* **Marca e Ação:**
  * primary: #A9C83E
  * primary-hover: #93B232
  * lime-200: #D3E39A
  * sage-300: #C9D9A2
* **Textos:**
  * text-primary: #14201A
  * text-secondary: #3F4F45
  * text-muted: #6B7A70
* **Acentos & Estados:**
  * accent-amber: #E0A33C
  * accent-blossom: #E4498C
  * accent-violet: #6E4E9A
  * accent-sea: #6F9BA8
  * success: #4C8C5A
  * error: #B3452F
  * warning: #B87A22
  
## Tipografia
* `--font-display`: Elsie (Confirmação técnica)
* `--font-body`: Arimo (Confirmação técnica)
* `--font-ui`: Arimo
* **Síntese:** `font-synthesis: none;` aplicado globalmente.

## Espaçamento e Layout
* **Grid:** 12 col (1024+), 8 col (768), 4 col (Mobile).
* **Container:** 1320px máximo.
* **Gutter:** fluido, tipicamente 16px a 32px.

## Raios (Border Radius)
* pequeno: 4px
* mídia: 12px
* card: 16px
* pill: 999px

## Motion
* **Tokens de Tempo:** instant (120ms), fast (200ms), base (320ms), editorial (640ms), cinematic (900ms).
* **Easing:** `cubic-bezier(.22,1,.36,1)`
* **Scale:** max 1.03 (hover card/media).
"""
write_file(os.path.join(base_dir, "docs", "DESIGN-SYSTEM.md"), design_system)

# 5. Expand COMPONENT-ARCHITECTURE.md
component_architecture = """# Arquitetura de Componentes

1. **SiteHeader**: Client Component. Lida com interatividade de scroll (fade in/out background).
2. **MobileMenu**: Client Component. Overlay fullscreen com animações de stagger list.
3. **HeroCinematic**: Server + Client Component. Componente de topo da página inicial, vídeos de autoplay e poster AVIF. 
4. **EssenceIntro**: Server Component. Seção de tipografia grande para "Sinta o Jundu antes de chegar".
5. **GastronomyEditorial**: Server Component. Grid misto de texto e fotografia macro.
6. **VerticalStories**: Client Component. Carrossel flexível de vídeos 9:16.
7. **ArchitectureMosaic**: Server Component. Grid assimétrico para mostrar fotos dos ambientes.
8. **BrandWindowJ**: Client Component. Container que usará o SVG Mask (quando oficializado).
9. **UnitsAccordion**: Client Component. Painéis expandíveis (Prumirim, Itaguá, Praia Grande).
10. **EventsSection**: Server Component. Layout de calendário e agendas.
11. **MenuTeaser**: Server Component. Card de chamada para PDF/Página do menu.
12. **FinalCTA**: Server Component. Footer-pre-footer com parallax suave.
13. **SiteFooter**: Server Component. Rodapé estático com endereços e logos.
14. **CardShell / CardVideo / CardUnit**: Componentes de display semântico.
15. **VideoPlayer**: Client Component. IntersecObserver embutido e acessibilidade custom.
16. **OpeningHours**: Server Component. Micro-UI de lista de horários.
17. **StickyMobileCTA**: Client Component. Botão persistente nas telas pequenas.
18. **MotionToggle**: Client Component. Acessibilidade para desativar parallax e transições.
19. **UnitSelector**: Client Component. Select customizado para escolher a unidade.
"""
write_file(os.path.join(base_dir, "docs", "COMPONENT-ARCHITECTURE.md"), component_architecture)

# 6. Create logo comparison image
logo_orig_path = os.path.join(base_dir, "assets", "original", "logo_original.webp")
if os.path.exists(logo_orig_path):
    img_orig = Image.open(logo_orig_path).convert("RGBA")
    
    # Create a blank canvas for comparison
    comp_width = 1200
    comp_height = 800
    comp_img = Image.new("RGBA", (comp_width, comp_height), (244, 238, 225, 255)) # Creme background
    draw = ImageDraw.Draw(comp_img)
    
    # Text helper
    def draw_text(x, y, text, color=(20, 32, 26)): # text-primary
        draw.text((x, y), text, fill=color)
    
    # Top info
    draw_text(50, 30, "PRANCHA COMPARATIVA DE LOGO (QA)")
    
    # Original
    comp_img.paste(img_orig, (50, 100), img_orig)
    draw_text(50, 80, "Original (140x70)")
    
    # Upscaled (simulate from high-res)
    logo_high_path = os.path.join(base_dir, "assets", "working", "brand", "logo_1120.png")
    if os.path.exists(logo_high_path):
        img_high = Image.open(logo_high_path).convert("RGBA")
        
        # 320px
        img_320 = img_high.resize((320, int(img_high.height * (320/img_high.width))), Image.Resampling.LANCZOS)
        comp_img.paste(img_320, (50, 250), img_320)
        draw_text(50, 230, "Visualização 320px (Transparente Creme)")
        
        # 160px
        img_160 = img_high.resize((160, int(img_high.height * (160/img_high.width))), Image.Resampling.LANCZOS)
        comp_img.paste(img_160, (400, 250), img_160)
        draw_text(400, 230, "Visualização 160px")
        
        # 96px
        img_96 = img_high.resize((96, int(img_high.height * (96/img_high.width))), Image.Resampling.LANCZOS)
        comp_img.paste(img_96, (600, 250), img_96)
        draw_text(600, 230, "Visualização 96px")
        
        # Backgrounds: Green
        green_bg = Image.new("RGBA", (400, 200), (10, 26, 18, 255)) # forest-900
        comp_img.paste(green_bg, (50, 500))
        comp_img.paste(img_320, (90, 550), img_320)
        draw_text(50, 480, "Fundo Verde (forest-900)")
        
        # Bottom signature zoom
        box = (int(img_high.width * 0.2), int(img_high.height * 0.7), int(img_high.width * 0.8), int(img_high.height * 1.0))
        img_sig = img_high.crop(box)
        img_sig_display = img_sig.resize((img_sig.width // 2, img_sig.height // 2), Image.Resampling.NEAREST)
        comp_img.paste(img_sig_display, (500, 500), img_sig_display)
        draw_text(500, 480, "Detalhe Ampliado da Assinatura Inferior")

    comp_img.save(os.path.join(base_dir, "docs", "qa", "logo-comparison.png"))
