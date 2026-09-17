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
            <span className="block text-eyebrow text-moss-600 mb-6 font-semibold animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:80ms]">
              {data.eyebrow}
            </span>
            <h2 className="text-title-editorial text-forest-900 whitespace-pre-line animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:160ms] max-w-[15ch]">
              {data.title}
            </h2>
          </div>
          <div className="w-full lg:w-[42%] lg:pb-3">
            <p className="text-body-editorial text-forest-800 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:240ms]">
              {data.text}
            </p>
          </div>
        </div>

        {/* Banner Tipográfico */}
        <div className="w-full bg-forest-900 rounded-[12px] p-8 sm:p-12 lg:p-20 flex flex-col justify-center items-center text-center animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:320ms] relative overflow-hidden">
          
          {/* TODO: incorporar fotografia oficial das ações ambientais do Grupo Jundu quando disponível. */}
          
          <h3 className="text-title-editorial text-surface max-w-[20ch] relative z-10 whitespace-pre-line">
            {data.highlight}
          </h3>
        </div>

        {/* Pillars List */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:400ms]">
          {data.commitments.map((item, idx) => (
            <li key={idx} className="flex flex-col gap-4 border-t border-forest-900/10 pt-6">
              <span className="font-display text-[16px] text-lime-600">
                {item.id}
              </span>
              <h4 className="text-title-block text-forest-900 uppercase">
                {item.title}
              </h4>
              <p className="text-body-aux text-forest-800">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
