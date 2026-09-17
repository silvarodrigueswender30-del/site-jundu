import React from 'react';
import { siteData } from '@/data/site';

export function NatureCommitment() {
  const data = siteData.sections.natureCommitment;

  return (
    <section
      data-section="nature-commitment"
      id="sustentabilidade"
      className="bg-surface relative w-full overflow-hidden py-[80px] sm:py-[96px] lg:py-[120px] xl:py-[144px]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 w-full relative z-10 flex flex-col gap-12 lg:gap-20">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
          <div className="w-full lg:w-[58%]">
            <span className="block font-body text-[12px] md:text-[14px] uppercase tracking-[0.25em] text-moss-600 mb-6 font-semibold animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:80ms]">
              {data.eyebrow}
            </span>
            <h2 className="font-display text-forest-900 text-[42px] sm:text-[48px] lg:text-[64px] xl:text-[76px] leading-[0.98] tracking-[-0.02em] whitespace-pre-line animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:160ms] max-w-[15ch]">
              {data.title}
            </h2>
          </div>
          <div className="w-full lg:w-[42%] lg:pb-3">
            <p className="font-body text-[16px] lg:text-[19px] leading-[1.58] lg:leading-[1.72] text-forest-800 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:240ms]">
              {data.text}
            </p>
          </div>
        </div>

        {/* Central Banner */}
        <div className="w-full bg-forest-900 rounded-xl px-6 py-16 sm:py-24 lg:py-32 lg:px-16 flex flex-col items-center justify-center text-center relative overflow-hidden animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:320ms]">
          {/* Subtle geometric ornamentation */}
          <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-lime-400/20" />
          <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-lime-400/20" />
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lime-200/10 to-transparent" />
          
          {/* TODO: incorporar fotografia oficial das ações ambientais do Grupo Jundu quando disponível. */}
          
          <h3 className="font-display text-surface text-[38px] sm:text-[46px] lg:text-[64px] xl:text-[88px] leading-[1.0] tracking-[-0.02em] max-w-[20ch] relative z-10 whitespace-pre-line">
            {data.highlight}
          </h3>
        </div>

        {/* Commitments */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:400ms]">
          {data.commitments.map((item, idx) => (
            <li key={idx} className="flex flex-col gap-4 border-t border-forest-900/10 pt-6">
              <span className="font-display text-[16px] text-lime-600">
                {item.id}
              </span>
              <h4 className="font-display text-[22px] lg:text-[26px] leading-[1.2] text-forest-900 tracking-wide uppercase">
                {item.title}
              </h4>
              <p className="font-body text-[15px] lg:text-[16px] text-forest-800 leading-[1.6]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
