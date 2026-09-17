import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteData } from '@/data/site';

export function EventsShowcase() {
  const data = siteData.sections.eventsShowcase;

  return (
    <section
      data-section="events-showcase"
      id="eventos"
      className="bg-forest-900 text-surface relative w-full overflow-hidden py-[80px] sm:py-[96px] lg:py-[120px] xl:py-[144px]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 w-full relative z-10 flex flex-col gap-12 lg:gap-20">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
          <div className="w-full lg:w-[55%]">
            <span className="block font-body text-[12px] md:text-[14px] uppercase tracking-[0.25em] text-lime-200 mb-6 font-semibold animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:80ms]">
              {data.eyebrow}
            </span>
            <h2 className="font-display text-[44px] sm:text-[56px] lg:text-[72px] leading-[0.98] tracking-[-0.02em] whitespace-pre-line animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:160ms] max-w-[15ch]">
              {data.title}
            </h2>
          </div>
          <div className="w-full lg:w-[45%] flex flex-col items-start lg:pb-2">
            <p className="font-body text-[16px] lg:text-[19px] leading-[1.58] lg:leading-[1.72] text-surface/90 max-w-[42ch] mb-8 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:240ms]">
              {data.text}
            </p>
            <Link
              href={data.cta.href}
              className="font-body text-[14px] uppercase tracking-[0.1em] text-lime-400 hover:text-lime-300 font-bold transition-colors animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:320ms] border-b border-lime-400 pb-1"
            >
              {data.cta.label}
            </Link>
          </div>
        </div>

        {/* Middle Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Photo */}
          <div className="lg:col-span-7 w-full order-1 lg:order-1 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:400ms]">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[6/5] overflow-hidden rounded-xl bg-forest-800">
              {/* TODO: substituir por fotografia oficial de evento realizado pelo Grupo Jundu. */}
              <Image
                src={data.photo.src}
                alt={data.photo.alt}
                fill
                className="object-cover object-[center_40%]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
          
          {/* Highlight Block */}
          <div className="lg:col-span-5 w-full order-2 lg:order-2 flex flex-col justify-center items-start lg:pl-8 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:480ms]">
            <span className="font-body text-[16px] lg:text-[20px] uppercase tracking-widest text-lime-200 mb-2 font-semibold">
              {data.highlight.prefix}
            </span>
            <div className="font-display text-[112px] sm:text-[128px] lg:text-[160px] xl:text-[180px] leading-[0.8] tracking-[-0.04em] text-surface mb-4">
              {data.highlight.number}
            </div>
            <span className="font-body text-[20px] lg:text-[24px] uppercase tracking-widest text-surface/90 mb-6 font-semibold">
              {data.highlight.suffix}
            </span>
            <p className="font-body text-[14px] lg:text-[15px] text-surface/60 max-w-[28ch] leading-[1.5]">
              {data.highlight.description}
            </p>
          </div>
        </div>

        {/* Modalities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pt-8 lg:pt-12 border-t border-surface/10 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:560ms]">
          {data.modalities.map((modality, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <span className="font-display text-[16px] text-lime-200">
                {modality.id}
              </span>
              <h3 className="font-display text-[22px] lg:text-[26px] leading-[1.2] text-surface">
                {modality.title}
              </h3>
              <p className="font-body text-[15px] lg:text-[16px] text-surface/70 leading-[1.6]">
                {modality.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
