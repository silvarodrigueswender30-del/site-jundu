import React from "react";
import Image from "next/image";
import { siteData } from "@/data/site";

export function BrandTimeline() {
  const data = siteData.brandTimeline;

  return (
    <section
      data-section="brand-timeline"
      id="historia"
      className="bg-forest-900 relative w-full overflow-hidden py-[120px] lg:py-[136px]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 w-full relative z-10">
        
        {/* Header */}
        <div className="mb-16 lg:mb-24 flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between">
          <div className="flex flex-col">
            <span className="font-body text-[12px] md:text-[14px] uppercase tracking-[0.25em] text-lime-200 mb-6 font-semibold animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:80ms]">
              {data.eyebrow}
            </span>
            <h2 className="font-display text-surface text-[44px] sm:text-[58px] lg:text-[72px] leading-[0.94] lg:leading-[1] tracking-[-0.02em] whitespace-pre-line animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:160ms]">
              {data.title}
            </h2>
          </div>
          <div className="lg:w-[45%] lg:pt-8 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:240ms]">
            <p className="font-body text-[16px] lg:text-[19px] leading-[1.58] lg:leading-[1.72] text-sage-300 max-w-[48ch]">
              {data.description}
            </p>
          </div>
        </div>

        {/* Timeline Desktop (Grid 4 colunas) / Mobile (Vertical) */}
        <div className="relative">
          {/* Linha conectora Desktop */}
          <div className="hidden lg:block absolute top-[24px] left-[24px] right-[24px] h-[1px] bg-forest-700 z-0"></div>
          
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-12 lg:gap-6">
            {data.milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="relative flex flex-col animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 pl-6 lg:pl-0 border-l lg:border-l-0 border-forest-700" 
                style={{ animationDelay: `${320 + (index * 80)}ms` }}
              >
                {/* Ponto / Marker Desktop */}
                <div className="hidden lg:flex w-3 h-3 rounded-full bg-lime-200 absolute top-[19px] left-6 z-10"></div>
                
                {/* Marker / Ponto Mobile */}
                <div className="lg:hidden w-3 h-3 rounded-full bg-lime-200 absolute top-[12px] -left-[6.5px] z-10"></div>
                
                <div className="font-display text-lime-200 text-[28px] lg:text-[32px] mb-4 lg:mb-6 lg:mt-12 lg:px-6">
                  {milestone.marker}
                </div>
                
                {milestone.image && (
                  <div className="w-full aspect-[4/3] relative rounded-[12px] overflow-hidden mb-6 lg:mx-6 lg:w-[calc(100%-48px)]">
                    <Image 
                      src={milestone.image} 
                      alt={milestone.alt || ""}
                      fill
                      className="object-cover"
                      style={{ objectPosition: milestone.objectPosition }}
                    />
                  </div>
                )}
                
                <h3 className="font-body font-bold text-surface text-[20px] mb-3 lg:px-6">
                  {milestone.title}
                </h3>
                
                <p className="font-body text-sage-300 text-[16px] leading-[1.58] lg:px-6">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
