import React from "react";
import Link from "next/link";
import { siteData } from "@/data/site";
import { RootArtworkSlot } from "@/components/brand/root-artwork-slot";

export function BrandManifesto() {
  const data = siteData.brandManifesto;

  return (
    <section
      data-section="brand-manifesto"
      id="essencia"
      className="bg-background relative w-full overflow-hidden py-[80px] lg:py-[124px]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
        
        {/* Text Column (42%) */}
        <div className="w-full lg:w-[42%] flex flex-col items-start text-left">
          <span className="font-body text-[12px] md:text-[14px] uppercase tracking-[0.25em] text-moss-600 mb-6 font-semibold animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:80ms]">
            {data.eyebrow}
          </span>
          
          <h2 className="font-display text-forest-900 text-[44px] sm:text-[58px] lg:text-[72px] leading-[0.94] lg:leading-[1] tracking-[-0.02em] max-w-[11ch] whitespace-pre-line mb-8 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:160ms]">
            {data.title}
          </h2>
          
          <div className="flex flex-col gap-6 mb-10 max-w-[48ch] animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:240ms]">
            {data.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-[16px] lg:text-[19px] leading-[1.58] lg:leading-[1.72] text-forest-800">
                {p}
              </p>
            ))}
          </div>

          <Link
            href={data.historyHref}
            className="font-body text-[14px] uppercase tracking-[0.1em] text-primary hover:text-primary-hover font-bold transition-colors animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:320ms] border-b border-primary pb-1"
          >
            {data.historyLabel}
          </Link>
        </div>

        {/* Artwork Column (58%) */}
        <div className="w-full lg:w-[58%] mt-8 lg:mt-0 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:400ms]">
          <RootArtworkSlot artwork={data.rootArtwork} />
        </div>
        
      </div>
    </section>
  );
}
