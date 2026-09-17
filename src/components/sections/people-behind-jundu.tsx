import React from 'react';
import Image from 'next/image';
import { siteData } from '@/data/site';

export function PeopleBehindJundu() {
  const data = siteData.peopleBehindJundu;

  return (
    <section
      data-section="people-behind-jundu"
      id="pessoas"
      className="bg-background relative w-full overflow-hidden py-[72px] sm:py-[88px] lg:py-[120px]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 w-full relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 mb-12 lg:mb-20">
          <div className="w-full lg:w-[58%]">
            <span className="block text-eyebrow text-moss-600 mb-6 font-semibold animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:80ms]">
              {data.eyebrow}
            </span>
            <h2 className="text-title-editorial text-forest-900 whitespace-pre-line animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:160ms] max-w-[15ch]">
              {data.title}
            </h2>
          </div>
          <div className="w-full lg:w-[42%] lg:pb-2">
            <p className="text-body-editorial text-forest-800 max-w-[48ch] animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:240ms]">
              {data.description}
            </p>
          </div>
        </div>

        {/* Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Photo Column */}
          <div className="lg:col-span-7 w-full animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:320ms]">
            <div className="relative w-full aspect-[6/5] overflow-hidden rounded-xl">
              {/* TODO: substituir por fotografia oficial da equipe do Grupo Jundu. */}
              <Image
                src={data.photo.src}
                alt={data.photo.alt}
                fill
                className="object-cover object-[center_30%]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>

          {/* Institutional Block */}
          <div className="lg:col-span-5 w-full flex flex-col pt-2 lg:pt-0 lg:pl-4 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0 [animation-delay:400ms]">
            <div className="mb-8 lg:mb-10">
              <div className="text-number-hero text-forest-900">
                {data.stats.number}
              </div>
              <div className="text-eyebrow text-moss-600 font-semibold mt-4">
                {data.stats.label}
              </div>
            </div>

            <div className="h-[1px] w-full bg-forest-900/10 mb-8 lg:mb-10" aria-hidden="true" />

            <ul className="flex flex-col gap-6 lg:gap-8">
              {data.leaders.map((leader, i) => (
                <li key={i} className="flex flex-col gap-1">
                  <span className="font-display text-[22px] lg:text-[26px] text-forest-900 leading-[1.2]">
                    {leader.name}
                  </span>
                  <span className="font-body text-[15px] lg:text-[16px] text-forest-800 leading-[1.5]">
                    {leader.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
