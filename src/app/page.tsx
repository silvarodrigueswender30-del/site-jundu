import { SiteHeader } from "@/components/navigation/site-header";
import { StickyMobileCTA } from "@/components/navigation/sticky-mobile-cta";
import { HeroCinematic } from "@/components/sections/hero-cinematic";
import { EditorialIntro } from "@/components/sections/editorial-intro";
import { VerticalStories } from "@/components/sections/vertical-stories";

export default function Home() {
  return (
    <>
      <SiteHeader />
      
      <main className="min-h-screen overflow-x-hidden">
        <HeroCinematic />
        <EditorialIntro />
        <VerticalStories />
        
        {/* Placeholder: próxima seção (Imagem em escala arquitetônica) */}
        <div className="h-[30vh] bg-surface flex items-center justify-center">
          <p className="text-text-muted text-sm tracking-widest uppercase">Próxima seção...</p>
        </div>
      </main>

      <StickyMobileCTA />
    </>
  );
}
