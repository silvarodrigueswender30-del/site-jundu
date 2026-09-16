import React from 'react';

export const metadata = {
  title: 'Laboratório | Design System Jundu',
};

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary pb-32">
      
      {/* 1. CAPA DO SISTEMA */}
      <section className="bg-forest-900 text-surface min-h-[60vh] flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
        <div className="absolute top-8 left-8">
          <img src="/brand/logo_1120.webp" alt="Logo Provisória Jundu" className="h-16 w-auto opacity-90" />
        </div>
        <div className="max-w-4xl mx-auto space-y-6 z-10">
          <p className="font-body text-primary tracking-widest uppercase text-sm font-bold">V.1.0 • Foco em Imagem e Vídeo</p>
          <h1 className="font-display text-h1 text-surface leading-none">Design System Jundu</h1>
          <p className="font-body text-h5 text-sage-300 max-w-2xl mx-auto">
            Laboratório visual para validação de componentes, escala, tipografia e ritmo.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mt-12 pt-12 border-t border-forest-800">
            {['Tropical', 'Editorial', 'Cinematográfico', 'Brasileiro', 'Artesanal Contemporâneo'].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full border border-forest-700 bg-forest-800/50 text-sm font-body text-surface">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-32 py-24">
        
        {/* 2. IDENTIDADE TIPOGRÁFICA */}
        <section className="space-y-12">
          <header className="border-b border-border pb-4">
            <h2 className="font-display text-h2 text-forest-900">2. Identidade Tipográfica</h2>
            <p className="font-body text-text-secondary">Elsie (Display) & Arimo (Body)</p>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <p className="text-sm text-text-muted mb-2">Elsie • 96px (6rem)</p>
                <div className="font-display text-[96px] leading-[1.1] text-forest-900">Aa</div>
              </div>
              <div>
                <p className="text-sm text-text-muted mb-2">Elsie • 80px (5rem)</p>
                <div className="font-display text-[80px] leading-[1.1] text-forest-900">Elsie Display</div>
              </div>
              <div>
                <p className="text-sm text-text-muted mb-2">Elsie • 64px (4rem)</p>
                <div className="font-display text-[64px] leading-[1.1] text-forest-900">Tropical</div>
              </div>
              <div>
                <p className="text-sm text-text-muted mb-2">Elsie • 48px, 40px, 32px, 24px</p>
                <div className="font-display text-[48px] leading-[1.1] text-forest-900">Sinta o Jundu antes de chegar.</div>
                <div className="font-display text-[40px] leading-[1.1] text-forest-900">O sabor de Ubatuba em cada detalhe.</div>
                <div className="font-display text-[32px] leading-[1.1] text-forest-900">Histórias verticas, experiência imersiva.</div>
                <div className="font-display text-[24px] leading-[1.1] text-forest-900">Três unidades. Três atmosferas.</div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-sm text-text-muted mb-2">Caracteres e Acentos (Elsie)</p>
                <div className="font-display text-h3 text-forest-900">ÁÂÃÀÉÊÍÓÔÕÚÇ • 0123456789 • !@#$%&</div>
              </div>
              
              <div className="pt-8 border-t border-border space-y-6">
                <div>
                  <p className="text-sm text-text-muted mb-2">Arimo • 20px (1.25rem) • Body Large</p>
                  <p className="font-body text-[20px] text-text-secondary leading-relaxed">
                    Da cozinha para a tela. O Jundu Ubatuba preserva a essência caiçara combinada com a alta gastronomia contemporânea, rodeado pelo mar e pela Mata Atlântica.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-2">Arimo • 16px (1rem) • Body Base</p>
                  <p className="font-body text-[16px] text-text-secondary leading-relaxed">
                    A arquitetura se mistura com a natureza de Ubatuba. Nossos pratos são elaborados com ingredientes frescos, celebrando os sabores do litoral.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-2">Arimo • 14px (0.875rem) • Navegação / Botões</p>
                  <p className="font-body text-[14px] font-bold text-forest-900 uppercase tracking-widest">
                    Faça sua Reserva
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-2">Arimo • 12px (0.75rem) • Legendas / Endereços</p>
                  <p className="font-body text-[12px] text-text-muted">
                    Rodovia Rio-Santos, Km 33, Praia do Prumirim, Ubatuba - SP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PALETA COMPLETA */}
        <section className="space-y-12">
          <header className="border-b border-border pb-4">
            <h2 className="font-display text-h2 text-forest-900">3. Paleta Completa</h2>
          </header>

          <div className="space-y-8">
            <div>
              <h3 className="font-body font-bold text-text-secondary mb-4 uppercase tracking-widest text-sm">Superfícies Escuras</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { name: 'forest-900', var: 'var(--color-forest-900)', hex: '#0A1A12', text: '#EBE2CF' },
                  { name: 'forest-800', var: 'var(--color-forest-800)', hex: '#0E2419', text: '#EBE2CF' },
                  { name: 'forest-700', var: 'var(--color-forest-700)', hex: '#122E20', text: '#EBE2CF' },
                  { name: 'forest-600', var: 'var(--color-forest-600)', hex: '#1B3F2C', text: '#EBE2CF' },
                  { name: 'forest-500', var: 'var(--color-forest-500)', hex: '#2A5A3E', text: '#EBE2CF' },
                  { name: 'moss-600', var: 'var(--color-moss-600)', hex: '#4A5F3A', text: '#EBE2CF' },
                ].map((c) => (
                  <div key={c.name} className="rounded-xl overflow-hidden shadow-sm border border-border">
                    <div className="h-24 p-3 flex items-end" style={{ backgroundColor: c.var, color: c.text }}>
                      <span className="font-display text-lg">Aa</span>
                    </div>
                    <div className="p-3 bg-surface">
                      <p className="font-body font-bold text-sm text-forest-900">{c.name}</p>
                      <p className="font-body text-xs text-text-muted">{c.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-body font-bold text-text-secondary mb-4 uppercase tracking-widest text-sm">Superfícies Claras & Marca</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {[
                  { name: 'background', var: 'var(--color-background)', hex: '#F4EEE1', text: '#0A1A12' },
                  { name: 'surface', var: 'var(--color-surface)', hex: '#EBE2CF', text: '#0A1A12' },
                  { name: 'border', var: 'var(--color-border)', hex: '#DED3BC', text: '#0A1A12' },
                  { name: 'primary', var: 'var(--color-primary)', hex: '#A9C83E', text: '#0A1A12' },
                  { name: 'primary-hover', var: 'var(--color-primary-hover)', hex: '#93B232', text: '#0A1A12' },
                  { name: 'lime-200', var: 'var(--color-lime-200)', hex: '#D3E39A', text: '#0A1A12' },
                  { name: 'sage-300', var: 'var(--color-sage-300)', hex: '#C9D9A2', text: '#0A1A12' },
                ].map((c) => (
                  <div key={c.name} className="rounded-xl overflow-hidden shadow-sm border border-border">
                    <div className="h-24 p-3 flex items-end" style={{ backgroundColor: c.var, color: c.text }}>
                      <span className="font-display text-lg">Aa</span>
                    </div>
                    <div className="p-3 bg-surface">
                      <p className="font-body font-bold text-sm text-forest-900">{c.name}</p>
                      <p className="font-body text-xs text-text-muted">{c.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-body font-bold text-text-secondary mb-4 uppercase tracking-widest text-sm">Acentos (Pontuais)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'accent-amber', var: 'var(--color-accent-amber)', hex: '#E0A33C' },
                  { name: 'accent-blossom', var: 'var(--color-accent-blossom)', hex: '#E4498C' },
                  { name: 'accent-violet', var: 'var(--color-accent-violet)', hex: '#6E4E9A' },
                  { name: 'accent-sea', var: 'var(--color-accent-sea)', hex: '#6F9BA8' },
                ].map((c) => (
                  <div key={c.name} className="rounded-xl overflow-hidden shadow-sm border border-border">
                    <div className="h-16" style={{ backgroundColor: c.var }}></div>
                    <div className="p-3 bg-surface">
                      <p className="font-body font-bold text-sm text-forest-900">{c.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. CONTRASTE E COMBINAÇÕES */}
        <section className="space-y-12">
          <header className="border-b border-border pb-4">
            <h2 className="font-display text-h2 text-forest-900">4. Contraste e Combinações</h2>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 bg-forest-900 text-surface rounded-2xl flex flex-col justify-center items-center text-center space-y-4">
              <h3 className="font-display text-h3">Creme sobre Verde</h3>
              <p className="font-body text-sage-300">Aprovado: Alto contraste, elegante, natural. Ideal para capas e seções imersivas.</p>
              <button className="px-6 py-3 bg-primary text-forest-900 font-bold rounded-full mt-4">Botão Primário</button>
            </div>
            
            <div className="p-12 bg-surface border border-border text-forest-900 rounded-2xl flex flex-col justify-center items-center text-center space-y-4">
              <h3 className="font-display text-h3">Verde sobre Creme</h3>
              <p className="font-body text-text-secondary">Aprovado: Excelente legibilidade para editoriais e blocos de texto longos.</p>
              <button className="px-6 py-3 bg-forest-900 text-surface font-bold rounded-full mt-4">Botão Secundário</button>
            </div>
            
            <div className="p-12 bg-surface border border-border rounded-2xl flex flex-col justify-center items-center text-center space-y-4">
              <h3 className="font-display text-h3 text-primary">Primary sobre Creme (PROIBIDO)</h3>
              <p className="font-body text-text-secondary">O contraste falha miseravelmente (WCAG). Primary deve ser usado como background ou em fundos escuros.</p>
            </div>

            <div className="p-12 bg-forest-900 rounded-2xl relative overflow-hidden flex flex-col justify-center items-center text-center space-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-amber opacity-20 blur-3xl rounded-full"></div>
              <h3 className="font-display text-h3 text-surface">Luz Âmbar</h3>
              <p className="font-body text-surface opacity-80 z-10">Uso do âmbar como ponto de luz sutil no fundo forest.</p>
            </div>
          </div>
        </section>

        {/* 5. BOTÕES E LINKS */}
        <section className="space-y-12">
          <header className="border-b border-border pb-4">
            <h2 className="font-display text-h2 text-forest-900">5. Botões e Links (Interativos)</h2>
          </header>

          <div className="flex flex-wrap gap-8 items-center bg-surface p-12 rounded-2xl border border-border">
            <button className="px-6 py-3 bg-primary text-forest-900 hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 focus-visible:ring-offset-surface font-bold rounded-full transition-colors duration-200">
              Primário Default
            </button>
            
            <button className="px-6 py-3 bg-forest-900 text-surface hover:bg-forest-800 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface font-bold rounded-full transition-colors duration-200">
              Secundário
            </button>
            
            <button className="px-6 py-3 border border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-surface focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 focus-visible:ring-offset-surface font-bold rounded-full transition-colors duration-200">
              Outline Escuro
            </button>
            
            <button className="px-6 py-3 text-forest-900 hover:bg-forest-900/5 focus-visible:ring-2 focus-visible:ring-forest-900 rounded-full font-bold transition-colors duration-200">
              Ghost Button
            </button>
            
            <a href="#" className="font-body font-bold text-forest-900 border-b border-forest-900 pb-1 hover:text-primary hover:border-primary transition-colors duration-200">
              Link Editorial
            </a>
            
            <button disabled className="px-6 py-3 bg-border text-text-muted font-bold rounded-full cursor-not-allowed">
              Disabled
            </button>

            <button className="px-6 py-3 bg-primary text-forest-900 font-bold rounded-full flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              Loading
            </button>
          </div>

          <div className="flex flex-wrap gap-8 items-center bg-forest-900 p-12 rounded-2xl">
            <button className="px-6 py-3 bg-primary text-forest-900 hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900 font-bold rounded-full transition-colors duration-200">
              Primário Escuro
            </button>

            <button className="px-6 py-3 border border-surface text-surface hover:bg-surface hover:text-forest-900 focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900 font-bold rounded-full transition-colors duration-200">
              Outline Claro
            </button>
            
            <button className="w-14 h-14 bg-surface text-forest-900 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
              ▶
            </button>
          </div>
        </section>

        {/* 6. CARDS */}
        <section className="space-y-12">
          <header className="border-b border-border pb-4">
            <h2 className="font-display text-h2 text-forest-900">6. Cards & Image Ratios</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 4:5 */}
            <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
              <div className="aspect-[4/5] bg-forest-800 overflow-hidden relative">
                {/* Fallback image style since actual images might be missing */}
                <div className="absolute inset-0 bg-forest-700 transition-transform duration-[900ms] group-hover:scale-[1.03]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12]/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-surface">
                <span className="text-xs uppercase tracking-widest text-primary mb-2 block">Itaguá</span>
                <h3 className="font-display text-h4 mb-1">Cozinha e Coquetelaria</h3>
                <p className="font-body text-sm opacity-80">Experiência completa à beira-mar.</p>
              </div>
            </div>
            
            {/* Card 16:9 */}
            <div className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-end">
              <div className="aspect-[16/9] bg-forest-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-moss-600 transition-transform duration-[900ms] group-hover:scale-[1.03]"></div>
              </div>
              <div className="mt-4">
                <h3 className="font-display text-h4 text-forest-900">Gastronomia Caiçara</h3>
                <p className="font-body text-sm text-text-secondary mt-1">Ingredientes frescos da região.</p>
              </div>
            </div>
            
            {/* Card Evento 3:4 */}
            <div className="group relative rounded-2xl overflow-hidden border border-border bg-surface flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] bg-forest-800 overflow-hidden">
                <div className="w-full h-full bg-forest-600 transition-transform duration-[900ms] group-hover:scale-[1.03]"></div>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-forest-900 tracking-widest mb-1">24 NOV • 20:00</p>
                <h3 className="font-display text-h4 text-forest-900">Jantar Harmonizado</h3>
                <p className="font-body text-sm text-text-secondary mt-2">Prumirim</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. VÍDEOS VERTICAIS */}
        <section className="space-y-12">
          <header className="border-b border-border pb-4">
            <h2 className="font-display text-h2 text-forest-900">7. Vídeos Verticais (9:16)</h2>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="aspect-[9/16] bg-forest-900 rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-surface opacity-50 mb-4 block">Poster {i}</span>
                  <button className="w-16 h-16 bg-surface/20 backdrop-blur-md text-surface rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-forest-900 transition-colors duration-300">
                    ▶
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-display text-lg text-surface">Imersão {i}</h4>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-black/40 text-white text-xs flex items-center justify-center backdrop-blur-sm">
                    {/* Icone Som */}
                    ♪
                  </button>
                </div>
              </div>
            ))}
            
            <div className="aspect-[9/16] rounded-2xl border-2 border-dashed border-border flex items-center justify-center p-6 text-center">
              <p className="text-text-muted text-sm">Espaço para fallback estático (Save-Data ativado)</p>
            </div>
          </div>
        </section>

        {/* 8. SANFONA DAS UNIDADES */}
        <section className="space-y-12">
          <header className="border-b border-border pb-4">
            <h2 className="font-display text-h2 text-forest-900">8. Sanfona das Unidades</h2>
          </header>

          <div className="bg-surface rounded-3xl overflow-hidden border border-border">
            {/* Ativo */}
            <div className="border-b border-border">
              <button className="w-full text-left p-8 flex justify-between items-center bg-forest-900 text-surface" aria-expanded="true">
                <h3 className="font-display text-h3">Itaguá</h3>
                <span className="text-2xl transform rotate-45">＋</span>
              </button>
              <div className="p-8 bg-forest-900 text-surface grid grid-cols-1 md:grid-cols-2 gap-8 pt-0">
                <div>
                  <p className="font-body text-sage-300 mb-6">Restaurante e Coquetelaria no coração de Ubatuba. Ideal para jantares e encontros.</p>
                  <p className="text-sm opacity-80 mb-1">Av. Leovigildo Dias Vieira, 810</p>
                  <p className="text-sm opacity-80">Terça a Domingo • 12h às 23h</p>
                </div>
                <div className="flex items-end justify-start md:justify-end">
                  <button className="px-6 py-3 bg-primary text-forest-900 font-bold rounded-full">Fazer Reserva</button>
                </div>
              </div>
            </div>
            
            {/* Inativo 1 */}
            <div className="border-b border-border">
              <button className="w-full text-left p-8 flex justify-between items-center text-forest-900 hover:bg-border/30 transition-colors" aria-expanded="false">
                <h3 className="font-display text-h3 opacity-70">Prumirim</h3>
                <span className="text-2xl opacity-50">＋</span>
              </button>
            </div>

            {/* Inativo 2 */}
            <div>
              <button className="w-full text-left p-8 flex justify-between items-center text-forest-900 hover:bg-border/30 transition-colors" aria-expanded="false">
                <h3 className="font-display text-h3 opacity-70">Praia Grande</h3>
                <span className="text-2xl opacity-50">＋</span>
              </button>
            </div>
          </div>
        </section>

        {/* 9. BRAND MASK "J" */}
        <section className="space-y-12">
          <header className="border-b border-border pb-4">
            <h2 className="font-display text-h2 text-forest-900">9. Brand Mask "J"</h2>
          </header>

          <div className="h-[60vh] bg-forest-800 rounded-3xl flex items-center justify-center p-8 relative overflow-hidden">
            <div className="text-center space-y-4 max-w-md mx-auto z-10">
              <div className="w-32 h-32 mx-auto border-4 border-dashed border-surface/30 flex items-center justify-center rounded-2xl mb-8">
                <span className="text-surface/50 font-body text-sm text-center px-4">Aguardando Vetor Oficial</span>
              </div>
              <h3 className="font-display text-h3 text-surface">Máscara Proibida Temporariamente</h3>
              <p className="font-body text-sage-300">
                A aplicação gráfica da espiral do "J" recortando vídeos e imagens será ativada aqui assim que o vetor oficial for aprovado. O uso livre está suspenso para não comprometer a fidelidade.
              </p>
            </div>
          </div>
        </section>

        {/* 10. FORMULÁRIOS */}
        <section className="space-y-12">
          <header className="border-b border-border pb-4">
            <h2 className="font-display text-h2 text-forest-900">10. Formulários e Inputs</h2>
          </header>

          <div className="max-w-2xl bg-surface p-10 rounded-3xl border border-border space-y-8">
            <h3 className="font-display text-h4 text-forest-900">Faça sua Reserva</h3>
            
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-forest-900 uppercase tracking-widest">Unidade</label>
                <select className="p-4 bg-background border border-border rounded-xl text-forest-900 font-body focus:outline-none focus:ring-2 focus:ring-forest-900">
                  <option>Itaguá</option>
                  <option>Prumirim</option>
                  <option>Praia Grande</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-forest-900 uppercase tracking-widest">Data</label>
                  <input type="date" className="p-4 bg-background border border-border rounded-xl text-forest-900 font-body focus:outline-none focus:ring-2 focus:ring-forest-900" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-forest-900 uppercase tracking-widest">Pessoas</label>
                  <select className="p-4 bg-background border border-border rounded-xl text-forest-900 font-body focus:outline-none focus:ring-2 focus:ring-forest-900">
                    <option>2 Pessoas</option>
                    <option>4 Pessoas</option>
                    <option>6+ Pessoas</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-forest-900 uppercase tracking-widest">Estado de Erro</label>
                <input type="text" defaultValue="Email inválido" className="p-4 bg-background border-2 border-error rounded-xl text-error font-body focus:outline-none" />
                <span className="text-xs text-error">Por favor, insira um email válido.</span>
              </div>

              <button className="w-full p-4 bg-primary text-forest-900 font-bold rounded-xl mt-4 hover:bg-primary-hover transition-colors">
                Confirmar Reserva
              </button>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-900/5 text-forest-900 rounded-full border border-forest-900/10">
              <span className="w-2 h-2 rounded-full bg-success"></span>
              <span className="text-sm font-bold">Itaguá: Aberto Agora</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-900/5 text-forest-900 rounded-full border border-forest-900/10">
              <span className="w-2 h-2 rounded-full bg-error"></span>
              <span className="text-sm font-bold">Prumirim: Fechado</span>
            </div>
          </div>
        </section>

        {/* 11. MOTION LAB */}
        <section className="space-y-12">
          <header className="border-b border-border pb-4 flex justify-between items-end">
            <div>
              <h2 className="font-display text-h2 text-forest-900">11. Motion Lab</h2>
              <p className="font-body text-text-secondary">Demonstração de tokens de animação (Hover para ver)</p>
            </div>
            <button className="px-4 py-2 bg-surface border border-border rounded-full text-sm font-bold hover:bg-border transition-colors">
              Pausar Movimento
            </button>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-8 bg-surface border border-border rounded-2xl flex items-center justify-center hover:bg-forest-900 hover:text-surface transition-all duration-[320ms] cursor-pointer group">
              <span className="font-body group-hover:-translate-y-2 transition-transform duration-[320ms]">Base (320ms)</span>
            </div>
            
            <div className="p-8 bg-surface border border-border rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-[640ms] cursor-pointer shadow-sm hover:shadow-xl">
              <span className="font-body">Editorial (640ms)</span>
            </div>
            
            <div className="p-8 bg-forest-900 text-surface rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-[900ms] ease-out"></div>
              <span className="font-body relative z-10 group-hover:text-forest-900 transition-colors duration-[900ms]">Cinematic (900ms)</span>
            </div>
            
            <div className="p-8 bg-surface border border-border rounded-2xl flex items-center justify-center hover:opacity-50 transition-opacity duration-[120ms] cursor-pointer">
              <span className="font-body">Instant (120ms)</span>
            </div>
          </div>
        </section>

        {/* 12. RESPONSIVIDADE */}
        <section className="space-y-12">
          <header className="border-b border-border pb-4">
            <h2 className="font-display text-h2 text-forest-900">12. Responsividade</h2>
            <p className="font-body text-text-secondary">Grids fluídos. Para testar 360px a 1440px, redimensione a janela do navegador.</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-32 bg-forest-900/10 rounded-xl border border-forest-900/20 flex items-center justify-center">
                <span className="text-forest-900/50 font-bold">Col {i}</span>
              </div>
            ))}
          </div>
        </section>
        
        {/* 13. ACESSIBILIDADE */}
        <section className="space-y-12">
          <header className="border-b border-border pb-4">
            <h2 className="font-display text-h2 text-forest-900">13. Acessibilidade (Focus / Aria)</h2>
          </header>
          
          <div className="p-8 bg-surface rounded-2xl border border-border flex flex-col items-start gap-4">
            <p className="font-body text-text-secondary mb-4">Navegue com "Tab" para testar o anel de foco padronizado (outline).</p>
            <button className="px-6 py-3 bg-forest-900 text-surface rounded-full focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface">
              Foco Bem Definido
            </button>
            <a href="#" className="text-forest-900 underline focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/20 rounded p-1">
              Link com Foco
            </a>
          </div>
        </section>

      </div>
      
      {/* 14. RODAPÉ DO LABORATÓRIO */}
      <footer className="bg-forest-900 text-surface py-12 border-t border-forest-800">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm opacity-80">
          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Status do Sistema</h4>
            <ul className="space-y-2">
              <li>Versão: 1.0 (Laboratório Inicial)</li>
              <li>Fonte Confirmada: Elsie & Arimo (Local)</li>
              <li>Logo: Provisória Raster 1120px</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Componentes Base</h4>
            <ul className="space-y-2">
              <li>✓ Tipografia & Escalas</li>
              <li>✓ Paleta Completa</li>
              <li>✓ Cards Base</li>
              <li>✓ Motion Lab</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Pendências & Bloqueios</h4>
            <ul className="space-y-2 text-sage-300">
              <li>⚠️ Vetor oficial pendente</li>
              <li>⚠️ Imagens finais em alta pendentes</li>
              <li>⚠️ Conteúdo de vídeo real (9:16)</li>
            </ul>
          </div>
        </div>
      </footer>

    </main>
  );
}
