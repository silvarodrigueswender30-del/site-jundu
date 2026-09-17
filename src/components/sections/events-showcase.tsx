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
              <span className="block text-eyebrow text-lime-200 mb-6 font-semibold animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:80ms]">
                {data.eyebrow}
              </span>
              <h2 className="text-title-editorial text-surface whitespace-pre-line animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:160ms] max-w-[15ch]">
                {data.title}
              </h2>
            </div>
            <div className="w-full lg:w-[45%] flex flex-col items-start lg:pb-2">
              <p className="text-body-editorial text-surface/90 max-w-[42ch] mb-8 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:240ms]">
                {data.text}
              </p>
              <Link
                href={data.cta.href}
                className="text-eyebrow text-lime-400 hover:text-lime-300 font-bold transition-colors animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:320ms] border-b border-lime-400 pb-1"
              >
                {data.cta.label}
              </Link>
            </div>
          </div>

          {/* Body Gallery Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Block */}
            <div className="lg:col-span-7 w-full order-1 lg:order-1 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:400ms]">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[6/5] overflow-hidden rounded-xl bg-forest-800">
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
              <span className="text-body-aux uppercase tracking-widest text-lime-200 mb-2 font-semibold">
                {data.highlight.prefix}
              </span>
              <div className="text-number-hero text-surface mb-4">
                {data.highlight.number}
              </div>
              <span className="text-title-block uppercase tracking-widest text-surface/90 mb-6 font-semibold">
                {data.highlight.suffix}
              </span>
              <p className="text-body-aux text-surface/60 max-w-[28ch]">
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
                <h3 className="text-title-block text-surface">
                  {modality.title}
                </h3>
                <p className="text-body-aux text-surface/70">
                  {modality.description}
                </p>
              </div>
            ))}
          </div>

      </div>
    </section>
  );
}
