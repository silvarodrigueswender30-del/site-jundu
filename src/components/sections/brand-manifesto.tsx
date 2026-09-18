import React from "react";
import Link from "next/link";
import { siteData } from "@/data/site";
import { TerritoryArtwork } from "@/components/brand/artwork/territory-artwork";

export function BrandManifesto() {
  const data = siteData.brandManifesto;

  return (
    <section
      data-section="brand-manifesto"
      id="essencia"
      className="relative isolate w-full overflow-hidden bg-background py-[80px] lg:py-[124px]"
    >
      <TerritoryArtwork />
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-[42%_58%] items-center gap-8 lg:gap-0 relative z-10">
        
        {/* Text Column (42%) */}
        <div className="w-full flex flex-col items-start text-left relative z-10">
          <span className="text-eyebrow text-moss-600 mb-6 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:80ms]">
            {data.eyebrow}
          </span>
          
          <h2 className="text-title-editorial text-forest-900 max-w-[11ch] whitespace-pre-line mb-8 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:160ms]">
            {data.title}
          </h2>
          
          <div className="flex flex-col gap-6 mb-10 max-w-[48ch] animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:240ms]">
            {data.paragraphs.map((p, i) => (
              <p key={i} className="text-body-editorial text-forest-800">
                {p}
              </p>
            ))}
          </div>

          <Link
            href={data.historyHref}
            className="text-eyebrow text-primary hover:text-primary-hover transition-colors animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:320ms] border-b border-primary pb-1"
          >
            {data.historyLabel}
          </Link>
        </div>

        {/* Empty Column to preserve Grid (58%) */}
        <div className="hidden lg:block w-full"></div>
        
      </div>
    </section>
  );
}
