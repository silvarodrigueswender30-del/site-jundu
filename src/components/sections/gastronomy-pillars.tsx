import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteData } from '@/data/site';

export function GastronomyPillars() {
  const data = siteData.sections.gastronomyPillars;

  return (
    <section
      data-section="gastronomy-pillars"
      id="gastronomia"
      className="bg-background relative w-full overflow-hidden py-[80px] sm:py-[96px] lg:py-[120px] xl:py-[136px]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 w-full relative z-10 flex flex-col gap-12 lg:gap-16">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
          <div className="w-full lg:w-[42%]">
            <span className="block font-body text-[12px] md:text-[14px] uppercase tracking-[0.25em] text-moss-600 mb-6 font-semibold animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:80ms]">
              {data.eyebrow}
            </span>
            <h2 className="font-display text-forest-900 text-[42px] sm:text-[48px] lg:text-[64px] xl:text-[76px] leading-[0.96] tracking-[-0.02em] whitespace-pre-line animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:160ms] max-w-[15ch]">
              {data.title}
            </h2>
          </div>
          <div className="w-full lg:w-[42%] lg:pb-2">
            <p className="font-body text-[16px] lg:text-[19px] leading-[1.58] lg:leading-[1.72] text-forest-800 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:240ms]">
              {data.text}
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="flex flex-col md:flex-row gap-4 lg:gap-6 h-auto md:h-[400px] lg:h-[500px] xl:h-[580px] animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:320ms]">
          
          {/* Main Image */}
          <div className="w-full md:w-[58.333%] h-[400px] sm:h-[480px] md:h-full relative rounded-xl overflow-hidden group">
            <Image
              src={data.gallery.main.src}
              alt={data.gallery.main.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>

          {/* Secondary Image */}
          <div className="w-full md:w-[41.666%] h-[400px] sm:h-[480px] md:h-full relative rounded-xl overflow-hidden group">
            {/* TODO: incorporar fotografia oficial da coquetelaria Jundu quando o asset for fornecido. */}
            <Image
              src={data.gallery.secondaryTop.src}
              alt={data.gallery.secondaryTop.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>
        </div>

        {/* Pillars */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pt-8 lg:pt-12 border-t border-forest-900/10 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:400ms]">
          {data.pillars.map((pillar, idx) => (
            <li key={idx} className="flex flex-col gap-4">
              <span className="font-display text-[18px] lg:text-[20px] text-moss-600">
                {pillar.id}
              </span>
              <h3 className="font-display text-[24px] lg:text-[28px] leading-[1.2] text-forest-900">
                {pillar.title}
              </h3>
              <p className="font-body text-[15px] lg:text-[16px] text-forest-800 leading-[1.6]">
                {pillar.description}
              </p>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-4 lg:mt-8 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:480ms]">
          <Link
            href={data.cta.href}
            className="font-body text-[14px] uppercase tracking-[0.1em] text-primary hover:text-primary-hover font-bold transition-colors border-b border-primary pb-1 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
          >
            {data.cta.label}
          </Link>
        </div>

      </div>
    </section>
  );
}
