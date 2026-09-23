"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UnitData, unitsData } from "@/data/units";
import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { StickyMobileCTA } from "@/components/navigation/sticky-mobile-cta";

// --- HERO COMPONENT ---
function UnitHero({ data }: { data: UnitData }) {
  return (
    <section className="relative w-full h-[85svh] min-h-[600px] flex items-center overflow-hidden bg-forest-900">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={data.hero.image}
          alt={data.hero.alt || data.hero.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Directional Overlay: Dark on the left, clear on the right, dark at bottom for CTAs */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col justify-end pb-24 md:justify-center md:pb-0 h-full pt-24">
        <div className="w-full md:max-w-[720px] text-surface">
          <p className="font-body text-[11px] md:text-sm uppercase tracking-[0.25em] text-sage-300 mb-6 animate-[fade-in-up_600ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0" style={{ animationDelay: '100ms' }}>
            {data.hero.eyebrow}
          </p>
          
          <h1 
            className="font-display text-surface mb-8 opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]"
            style={{ 
              animationDelay: '180ms',
              fontSize: 'clamp(44px, 6vw, 88px)',
              lineHeight: 0.96,
              letterSpacing: '-0.02em',
              textWrap: 'balance'
            }}
          >
            {data.hero.title}
          </h1>
          
          <p className="font-body text-base md:text-[18px] text-surface/90 mb-12 max-w-[540px] opacity-0 animate-[fade-in-up_700ms_cubic-bezier(.22,1,.36,1)_forwards]" style={{ animationDelay: '260ms', lineHeight: 1.65 }}>
            {data.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 opacity-0 animate-[fade-in-up_750ms_cubic-bezier(.22,1,.36,1)_forwards]" style={{ animationDelay: '340ms' }}>
            <a 
              href={data.reserveUrl || "#localizacao"}
              className="font-body text-[14px] md:text-[15px] font-bold bg-primary text-forest-900 px-9 py-4 rounded-full hover:bg-primary-hover transition-colors w-full sm:w-auto text-center"
            >
              {data.hero.primaryCta}
            </a>
            
            <a 
              href="#localizacao"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-9 py-4 rounded-full border border-surface/40 text-surface hover:bg-surface hover:text-forest-900 transition-colors"
            >
              <span className="font-body text-[14px] md:text-[15px] font-bold">
                {data.hero.secondaryCta}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- INFORMATION RAIL COMPONENT ---
function UnitInformationRail({ data }: { data: UnitData }) {
  const infos = [];
  if (data.address) infos.push({ label: "ENDEREÇO", value: data.address });
  if (data.hours) infos.push({ label: "HORÁRIO", value: data.hours });
  infos.push({ label: "RESERVAS", value: data.phone || "Consultar disponibilidade" });
  if (data.address) infos.push({ label: "COMO CHEGAR", value: "Ver no mapa →", isLink: true });

  if (infos.length === 0) return null;

  return (
    <section className="w-full bg-surface text-forest-900 border-b border-forest-900/10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-forest-900/15">
          {infos.map((info, idx) => (
            <div key={idx} className={`flex flex-col lg:px-8 ${idx === 0 ? "lg:pl-0" : ""} ${idx === infos.length - 1 ? "lg:pr-0" : ""}`}>
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-forest-900/50 mb-3">
                {info.label}
              </span>
              {info.isLink ? (
                <a href="#localizacao" className="font-body text-[14px] font-medium text-forest-900 hover:text-forest-900/70 transition-colors">
                  {info.value}
                </a>
              ) : (
                <span className="font-body text-[14px] text-forest-900/90 leading-relaxed max-w-[24ch]">
                  {info.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- EXPERIENCE COMPONENT ---
function UnitExperience({ data }: { data: UnitData }) {
  return (
    <section className="relative w-full bg-surface text-forest-900 py-20 md:py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Text Area (approx 38%) */}
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
          <p className="font-body text-[11px] md:text-[13px] uppercase tracking-[0.28em] text-forest-800/60 mb-8">
            {data.experience.eyebrow}
          </p>
          <h2 className="text-title-editorial text-forest-900 mb-10 text-balance">
            {data.experience.title}
          </h2>
          <p className="font-body text-[16px] md:text-[17px] text-forest-900/80 leading-[1.8] max-w-[460px]">
            {data.experience.text}
          </p>
        </div>

        {/* Image Area (approx 58%) */}
        <div className="lg:col-span-7 relative w-full aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-forest-900/5 order-1 lg:order-2">
          <Image
            src={data.experience.image}
            alt={data.name}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}

// --- GASTRONOMY COMPONENT ---
function UnitGastronomy({ data }: { data: UnitData }) {
  return (
    <section className="relative w-full bg-background text-forest-900 py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        <div className="max-w-[640px] mb-16 lg:mb-24">
          <h2 className="text-title-editorial text-forest-900 mb-8 text-balance">
            {data.gastronomy.title}
          </h2>
          <p className="font-body text-[16px] md:text-[17px] text-forest-900/80 leading-[1.8] max-w-[500px]">
            {data.gastronomy.text}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 h-auto lg:h-[760px]">
          {/* Main Image (approx 65%) */}
          <div className="lg:col-span-8 relative w-full aspect-[4/5] lg:aspect-auto lg:h-full rounded-[20px] overflow-hidden">
            <Image
              src={data.gastronomy.mainImage}
              alt="Detalhe de gastronomia"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover object-center"
            />
          </div>
          
          {/* Secondary Images Stack (approx 35%) */}
          <div className="lg:col-span-4 flex flex-col gap-5 lg:gap-8 h-full">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:flex-[7] rounded-[20px] overflow-hidden">
              <Image
                src={data.gastronomy.secondaryImage1}
                alt="Bebidas e atmosfera"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:flex-[5] rounded-[20px] overflow-hidden">
              <Image
                src={data.gastronomy.secondaryImage2}
                alt="Ambiente"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// --- GALLERY COMPONENT ---
function UnitGallery({ data }: { data: UnitData }) {
  if (!data.gallery || data.gallery.length === 0) return null;

  return (
    <section className="relative w-full bg-forest-900 py-20 md:py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        <p className="font-body text-[11px] md:text-[13px] uppercase tracking-[0.25em] text-surface/40 mb-12 lg:mb-16 text-center lg:text-left">
          {data.name.toUpperCase()} EM DETALHES
        </p>
        
        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-6">
          
          {/* 1. Large Dominant Image */}
          {data.gallery[0] && (
            <div className="col-span-2 lg:col-span-8 aspect-[4/3] lg:aspect-auto lg:h-[640px] relative rounded-xl overflow-hidden group">
              <Image
                src={data.gallery[0].src}
                alt={data.gallery[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)]"
              />
            </div>
          )}

          {/* 2. Top Right Medium */}
          {data.gallery[1] && (
            <div className="col-span-1 lg:col-span-4 aspect-square lg:aspect-auto lg:h-[640px] relative rounded-xl overflow-hidden group">
              <Image
                src={data.gallery[1].src}
                alt={data.gallery[1].alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)]"
              />
            </div>
          )}

          {/* 3. Bottom Left Small */}
          {data.gallery[2] && (
            <div className="col-span-1 lg:col-span-3 aspect-square lg:aspect-[4/5] relative rounded-xl overflow-hidden group">
              <Image
                src={data.gallery[2].src}
                alt={data.gallery[2].alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)]"
              />
            </div>
          )}

          {/* 4. Bottom Middle Small */}
          {data.gallery[3] && (
            <div className="col-span-2 lg:col-span-3 aspect-[4/3] sm:aspect-square lg:aspect-[4/5] relative rounded-xl overflow-hidden group">
              <Image
                src={data.gallery[3].src}
                alt={data.gallery[3].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)]"
              />
            </div>
          )}

          {/* 5. Bottom Right Medium */}
          {data.gallery[4] && (
            <div className="col-span-2 lg:col-span-6 aspect-[16/9] lg:aspect-auto lg:h-full relative rounded-xl overflow-hidden group">
              <Image
                src={data.gallery[4].src}
                alt={data.gallery[4].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)]"
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

// --- LOCATION / CONVERSION COMPONENT ---
function UnitLocation({ data }: { data: UnitData }) {
  // Use a specific image for the location block, falling back to a hero or experience image.
  const locationImage = data.gallery?.[1]?.src || data.experience.image;

  return (
    <section id="localizacao" className="w-full bg-surface py-20 md:py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Details & CTAs */}
          <div className="flex flex-col max-w-[500px]">
            <p className="font-body text-[11px] md:text-[13px] uppercase tracking-[0.25em] text-forest-800/50 mb-6">
              ENCONTRE O JUNDU
            </p>
            <h2 className="font-display text-forest-900 text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.1] mb-12">
              {data.name}
            </h2>
            
            <div className="flex flex-col gap-8 mb-16">
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.15em] text-forest-900/50 mb-2">Endereço</p>
                <p className="font-body text-[15px] text-forest-900/90 leading-relaxed max-w-[32ch]">
                  {data.address ? data.address : data.location}
                </p>
              </div>
              
              {data.hours && (
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[0.15em] text-forest-900/50 mb-2">Horário</p>
                  <p className="font-body text-[15px] text-forest-900/90">
                    {data.hours}
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={data.reserveUrl || "#"}
                className="inline-flex justify-center items-center font-body text-[14px] font-bold bg-primary text-forest-900 px-8 py-4 rounded-full hover:bg-primary-hover transition-colors w-full sm:w-auto"
              >
                Reservar nesta unidade
              </a>
              
              {data.address && (
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(data.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center font-body text-[14px] font-bold px-8 py-4 rounded-full border border-forest-900/20 text-forest-900 hover:bg-forest-900 hover:text-surface transition-colors w-full sm:w-auto"
                >
                  Como chegar
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-forest-900/5">
            <Image
              src={locationImage}
              alt={`Localização da unidade ${data.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

// --- FAQ COMPONENT ---
function UnitFaq({ data }: { data: UnitData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!data.faq || data.faq.length === 0) return null;

  return (
    <section className="w-full bg-surface py-16 md:py-24 lg:py-32 border-t border-forest-900/10">
      <div className="max-w-[960px] mx-auto px-5 md:px-10 lg:px-16">
        
        <div className="mb-12 md:mb-16">
          <p className="font-body text-[11px] md:text-[12px] uppercase tracking-[0.25em] text-forest-800 mb-4">
            DÚVIDAS SOBRE A UNIDADE
          </p>
          <h2 className="font-display text-forest-900 text-[2rem] md:text-[2.5rem] lg:text-[42px] leading-tight max-w-[700px]">
            Perguntas frequentes sobre o {data.name}
          </h2>
        </div>
        
        <div className="flex flex-col border-t border-forest-900/15">
          {data.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${data.id}-${idx}`;
            const buttonId = `faq-button-${data.id}-${idx}`;
            
            return (
              <div key={idx} className="flex flex-col border-b border-forest-900/15">
                <button 
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full py-5 md:py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm min-h-[56px] lg:min-h-[64px]"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="font-body text-[16px] md:text-[18px] lg:text-[20px] text-forest-900 font-medium pr-8 leading-snug">
                    {item.question}
                  </span>
                  <span className={`flex-shrink-0 text-forest-900 transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    {isOpen ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14" strokeLinecap="square"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 5v14M5 12h14" strokeLinecap="square"/>
                      </svg>
                    )}
                  </span>
                </button>
                <div 
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)] ${
                    isOpen ? "max-h-[400px] opacity-100 pb-6 md:pb-8" : "max-h-0 opacity-0 pb-0"
                  }`}
                >
                  <p className="font-body text-[15px] lg:text-[16px] text-forest-900/80 leading-[1.65] max-w-[720px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20 pt-8 border-t border-forest-900/10 flex flex-col items-start">
          <p className="font-body text-[15px] lg:text-[16px] text-forest-900 font-medium mb-6">
            Ainda quer falar com a equipe?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href={data.reserveUrl || "#localizacao"}
              className="inline-flex justify-center items-center font-body text-[14px] font-bold bg-primary text-forest-900 px-8 py-3.5 rounded-full hover:bg-primary-hover transition-colors w-full sm:w-auto text-center"
            >
              Reservar uma mesa
            </a>
            {data.address && (
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(data.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center font-body text-[14px] font-bold px-8 py-3.5 rounded-full border border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-surface transition-colors w-full sm:w-auto text-center"
              >
                Como chegar
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

// --- OTHER UNITS COMPONENT ---
function OtherUnits({ currentId }: { currentId: string }) {
  const others = Object.values(unitsData).filter(u => u.id !== currentId);
  
  return (
    <section className="w-full bg-forest-900 py-20 md:py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <p className="font-body text-[11px] md:text-[13px] uppercase tracking-[0.25em] text-surface/40 mb-10 lg:mb-16">
          CONHEÇA TAMBÉM
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {others.map((unit) => (
            <Link 
              key={unit.id} 
              href={`/unidades/${unit.slug}`}
              className="group relative w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/10] rounded-[24px] overflow-hidden bg-forest-800 flex items-end p-8 lg:p-12 outline-none focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900"
            >
              <Image
                src={unit.hero.image}
                alt={unit.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center opacity-70 group-hover:scale-[1.02] transition-transform duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/20 to-transparent opacity-90 transition-opacity duration-700" />
              
              <div className="relative z-10 flex justify-between items-end w-full">
                <div>
                  <p className="font-body text-[10px] text-primary uppercase tracking-[0.2em] mb-3 opacity-90">
                    UNIDADE
                  </p>
                  <h3 className="font-display text-surface text-3xl md:text-4xl lg:text-5xl">
                    {unit.name}
                  </h3>
                </div>
                
                <div className="w-12 h-12 rounded-full border border-surface/20 flex items-center justify-center text-surface group-hover:bg-surface group-hover:text-forest-900 transition-colors group-hover:translate-x-1 duration-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className="rotate-45">
                    <path d="M5 19L19 5M19 5H8M19 5V16"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- MAIN PAGE COMPONENT ---
export function UnitPage({ data }: { data: UnitData }) {
  return (
    <div className="bg-forest-900 min-h-screen">
      <SiteHeader />
      
      <main>
        <UnitHero data={data} />
        <UnitInformationRail data={data} />
        <UnitExperience data={data} />
        <UnitGastronomy data={data} />
        <UnitGallery data={data} />
        <UnitLocation data={data} />
        <UnitFaq data={data} />
        <OtherUnits currentId={data.id} />
      </main>

      <SiteFooter />
      <StickyMobileCTA />
    </div>
  );
}
