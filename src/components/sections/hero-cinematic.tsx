import { siteData } from "@/data/site";
import { HeroVideo } from "../media/hero-video";

export function HeroCinematic() {
  return (
    <section className="relative w-full h-[100svh] min-h-[760px] flex items-center overflow-hidden bg-forest-900">
      
      {/* Mídia de Fundo */}
      <HeroVideo 
        posterDesktop="/images/hero/jundu-hero-desktop.webp" 
        posterMobile="/images/hero/jundu-hero-mobile.webp"
      />

      {/* Conteúdo Principal */}
      {/* Container left-aligned at ~8% desktop */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-[8%] flex flex-col justify-end pb-32 md:justify-center md:pb-0 h-full">
        <div className="w-full md:w-[58%] text-surface pt-16 md:pt-0">
          
          <p className="font-body text-xs md:text-sm uppercase tracking-widest text-sage-300 mb-6 drop-shadow-md animate-[fade-in-up_600ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0" style={{ animationDelay: '100ms' }}>
            Filme de abertura · Experiência Jundu
          </p>
          
          {/* Título Monumental com Elsie */}
          <h1 
            className="font-display text-surface mb-8 drop-shadow-lg opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]"
            style={{ 
              animationDelay: '180ms',
              fontSize: 'clamp(2.65rem, 10vw, 6.75rem)',
              lineHeight: 0.92,
              letterSpacing: '-0.035em',
              fontWeight: 400,
              maxWidth: '9.5ch',
              textWrap: 'balance'
            }}
          >
            Sinta o Jundu antes de chegar.
          </h1>
          
          <p className="font-body text-base md:text-lg text-surface/90 mb-10 max-w-sm md:max-w-md drop-shadow-md opacity-0 animate-[fade-in-up_700ms_cubic-bezier(.22,1,.36,1)_forwards]" style={{ animationDelay: '260ms' }}>
            Arquitetura, sabores e encontros em movimento.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 opacity-0 animate-[fade-in-up_750ms_cubic-bezier(.22,1,.36,1)_forwards]" style={{ animationDelay: '340ms' }}>
            <a 
              href={siteData.ctas.primary.href}
              className="font-body text-base font-bold bg-primary text-forest-900 px-8 py-3.5 rounded-full hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-surface transition-colors w-full sm:w-auto text-center"
            >
              {siteData.ctas.primary.label}
            </a>
            
            <button className="flex items-center gap-4 group focus:outline-none rounded-full pr-4">
              <span className="w-12 h-12 rounded-full border border-surface/30 backdrop-blur-sm flex items-center justify-center text-surface group-hover:bg-surface group-hover:text-forest-900 transition-colors group-focus-visible:ring-2 group-focus-visible:ring-surface">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </span>
              <span className="font-body text-sm font-bold text-surface tracking-wide group-hover:text-primary transition-colors drop-shadow-md">
                {siteData.ctas.video.label}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Indicação de Unidades e Scroll (Desktop) */}
      <div className="absolute bottom-10 left-0 w-full z-10 hidden md:block opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]" style={{ animationDelay: '500ms' }}>
        <div className="max-w-[1440px] mx-auto px-[8%] flex justify-between items-end text-surface">
          <p className="font-body text-[11px] tracking-widest uppercase text-surface/60">
            {siteData.units.join(" · ")}
          </p>
          
          {/* Scroll Autoral Discreto */}
          <div className="flex flex-col items-center gap-3 opacity-60">
            <span className="font-body text-[10px] tracking-widest uppercase">Descobrir</span>
            <span className="w-px h-16 bg-gradient-to-b from-surface/80 to-transparent"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
