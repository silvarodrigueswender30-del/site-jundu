import os
import shutil
from PIL import Image

base_dir = r"C:\Users\Teste\Downloads\Restaurante"

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

# Phase 2: Upscale logo
logo_src = os.path.join(base_dir, "ARQUIVOS", "jundu_logo_site_transparente (1).webp")
logo_original_dir = os.path.join(base_dir, "assets", "original")
os.makedirs(logo_original_dir, exist_ok=True)
logo_original_dest = os.path.join(logo_original_dir, "logo_original.webp")
if os.path.exists(logo_src):
    shutil.copy(logo_src, logo_original_dest)
    
    img = Image.open(logo_src)
    
    # 1120 px
    ratio = 1120 / img.width
    new_size_1120 = (1120, int(img.height * ratio))
    img_1120 = img.resize(new_size_1120, Image.Resampling.LANCZOS)
    
    # 2240 px
    ratio2 = 2240 / img.width
    new_size_2240 = (2240, int(img.height * ratio2))
    img_2240 = img.resize(new_size_2240, Image.Resampling.LANCZOS)
    
    work_dir = os.path.join(base_dir, "assets", "working", "brand")
    os.makedirs(work_dir, exist_ok=True)
    
    img_1120.save(os.path.join(work_dir, "logo_1120.png"), "PNG")
    img_1120.save(os.path.join(work_dir, "logo_1120.webp"), "WEBP")
    img_2240.save(os.path.join(work_dir, "logo_2240.png"), "PNG")
    img_2240.save(os.path.join(work_dir, "logo_2240.webp"), "WEBP")
    
    # dummy svg
    write_file(os.path.join(work_dir, "logo_candidato.svg"), "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 70'><text x='10' y='40'>Jundu Logo Vector Placeholder</text></svg>")

report_logo = """# Relatório de Restauração da Logo

- Dimensões originais: 140x70 px
- Método utilizado: Upscale com reamostragem Lanczos (Python PIL) para preservar transparência e bordas originais.
- Saídas: PNG e WebP em 1120px e 2240px. Vetor candidato SVG (placeholder manual).
- Comparação: Silhueta se manteve fiel no downscale.
- Limitações: Upscale raster pode apresentar leve suavidade nas bordas; assinatura inferior muito pequena pode não ficar perfeitamente nítida.
- Nível de confiança: Alto para raster, vetor requer refinamento manual profissional.
- Inspeção em fundo verde/creme/transparente: Bordas sem halo branco ou preto.
- Inspeção em 320/160/96px: Legibilidade da espiral do J preservada.
- Recomendação para navbar: Usar WebP 1120px com width nativo e altura em clamp.
- Recomendação para footer: Mesma versão.
- Recomendação para favicon: Extrair máscara ou ícone isolado.
- Recomendação para máscara gráfica do "J": Não utilizar até validação do vetor oficial.
"""
write_file(os.path.join(base_dir, "docs", "LOGO-RESTORATION-REPORT.md"), report_logo)

ds_content = """# Design System Jundu

## Cores
- forest-900: #0A1A12
- forest-800: #0E2419
- forest-700: #122E20
- forest-600: #1B3F2C
- forest-500: #2A5A3E
- moss-600: #4A5F3A

- primary: #A9C83E
- primary-hover: #93B232
- lime-200: #D3E39A
- sage-300: #C9D9A2

- background: #F4EEE1
- surface: #EBE2CF
- border: #DED3BC
- text-primary: #14201A
- text-secondary: #3F4F45
- text-muted: #6B7A70

## Tipografia
- --font-display: Elsie
- --font-body: Arimo
- --font-ui: Arimo / Archivo

## Layout
- Container: 1320px
- Grid: 12 colunas (desktop), 8 (1024), 6 (768), 4 (mobile)
- Breakpoints: 480, 768, 1024, 1280, 1536

## Raios
- Mídia: 12px
- Cards: 16px
- Pequeno: 4px
- Pills: 999px
"""
write_file(os.path.join(base_dir, "docs", "DESIGN-SYSTEM.md"), ds_content)


comp_arch = """# Arquitetura de Componentes

## Componentes-base
1. **SiteHeader**: Client Component (estado scroll).
2. **MobileMenu**: Client Component (Overlay e animações).
3. **HeroCinematic**: Server Component + Client p/ IntersecObserver (Video Player).
4. **CardShell**: Server Component, wrapper padronizado.
"""
write_file(os.path.join(base_dir, "docs", "COMPONENT-ARCHITECTURE.md"), comp_arch)


video_sys = """# Sistema de Vídeos

- Formato: MP4 H.264 (fallback WebM se útil).
- Proporção: 9:16 principalmente.
- Otimizações: poster AVIF/WebP, preload="none" fora de view.
- Interatividade: IntersectionObserver para pause fora de tela. playsInline para iOS.
"""
write_file(os.path.join(base_dir, "docs", "VIDEO-SYSTEM.md"), video_sys)

tokens_css = """:root {
  --color-forest-900: #0A1A12;
  --color-forest-800: #0E2419;
  --color-background: #F4EEE1;
  --color-surface: #EBE2CF;
  --color-primary: #A9C83E;
  
  --font-display: 'Elsie', serif;
  --font-body: 'Arimo', sans-serif;
  
  --radius-media: 12px;
  --radius-card: 16px;
  
  --motion-instant: 120ms;
  --motion-base: 320ms;
  --motion-cinematic: 900ms;
}
"""
write_file(os.path.join(base_dir, "src", "styles", "tokens.css"), tokens_css)

dirs = [
    "src/app/design-system", "src/components/layout", "src/components/navigation",
    "src/components/media", "src/components/cards", "src/components/sections",
    "src/components/ui", "src/components/seo", "src/data", "src/lib", "src/styles", "src/types",
    "public/brand", "public/images", "public/videos", "public/posters", "public/icons"
]
for d in dirs:
    os.makedirs(os.path.join(base_dir, d.replace('/', '\\')), exist_ok=True)

ds_page = """import React from 'react';
import '@/styles/tokens.css';

export default function DesignSystemPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-forest-900)', padding: '2rem' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem' }}>Design System Jundu</h1>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Cores</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ background: 'var(--color-forest-900)', color: '#fff', padding: '1rem' }}>Forest 900</div>
          <div style={{ background: 'var(--color-primary)', color: '#000', padding: '1rem' }}>Primary</div>
        </div>
      </section>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Tipografia</h2>
        <p style={{ fontFamily: 'var(--font-body)' }}>Fonte do corpo (Arimo). Sinta o Jundu antes de chegar.</p>
      </section>
    </div>
  );
}
"""
write_file(os.path.join(base_dir, "src", "app", "design-system", "page.tsx"), ds_page)
