import { SiteHeader } from "@/components/navigation/site-header";
import { StickyMobileCTA } from "@/components/navigation/sticky-mobile-cta";
import { HeroCinematic } from "@/components/sections/hero-cinematic";
import { UnitsMarquee } from "@/components/layout/units-marquee";
import { BrandManifesto } from "@/components/sections/brand-manifesto";
import { BrandTimeline } from "@/components/sections/brand-timeline";
import { PeopleBehindJundu } from "@/components/sections/people-behind-jundu";
import { EditorialIntro } from "@/components/sections/editorial-intro";
import { GastronomyPillars } from "@/components/sections/gastronomy-pillars";
import { VerticalStories } from "@/components/sections/vertical-stories";
import { ArchitecturalGallery } from "@/components/sections/architectural-gallery";
import { JWindow } from "@/components/sections/j-window";
import { LocationsAccordion } from "@/components/sections/locations-accordion";
import { EventsShowcase } from "@/components/sections/events-showcase";
import { NatureCommitment } from "@/components/sections/nature-commitment";
import { KitchenToScreen } from "@/components/sections/kitchen-to-screen";
import { FinalCta } from "@/components/sections/final-cta";
import { SiteFooter } from "@/components/navigation/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      
      <main className="min-h-screen overflow-x-hidden">
        <HeroCinematic />
        <UnitsMarquee />
        <BrandManifesto />
        <BrandTimeline />
        <PeopleBehindJundu />
        <EditorialIntro />
        <GastronomyPillars />
        <VerticalStories />
        
        <ArchitecturalGallery />
        <JWindow />
        <LocationsAccordion />
        <EventsShowcase />
        <NatureCommitment />
        <KitchenToScreen />
        <FinalCta />
      </main>
      
      <SiteFooter />

      <StickyMobileCTA />
    </>
  );
}
