import Image from "next/image";
import Link from "next/link";
import { UnitData } from "@/data/units";
import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { StickyMobileCTA } from "@/components/navigation/sticky-mobile-cta";
import { unitsData } from "@/data/units";

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
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/10" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-[8%] flex flex-col justify-end pb-24 md:justify-center md:pb-0 h-full pt-24">
        <div className="w-full md:w-[65%] text-surface">
          <p className="font-body text-[11px] md:text-sm uppercase tracking-[0.25em] text-sage-300 mb-6 animate-[fade-in-up_600ms_cubic-bezier(.22,1,.36,1)_forwards] opacity-0" style={{ animationDelay: '100ms' }}>
            {data.hero.eyebrow}
          </p>
          
          <h1 
            className="font-display text-surface mb-8 drop-shadow-lg opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]"
            style={{ 
              animationDelay: '180ms',
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              textWrap: 'balance'
            }}
          >
            {data.hero.title}
          </h1>
          
          <p className="font-body text-base md:text-[18px] text-surface/90 mb-10 max-w-lg drop-shadow-md opacity-0 animate-[fade-in-up_700ms_cubic-bezier(.22,1,.36,1)_forwards]" style={{ animationDelay: '260ms', lineHeight: 1.6 }}>
            {data.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 opacity-0 animate-[fade-in-up_750ms_cubic-bezier(.22,1,.36,1)_forwards]" style={{ animationDelay: '340ms' }}>
            <a 
              href="#reserva"
              className="font-body text-[14px] md:text-[15px] font-bold bg-primary text-forest-900 px-8 py-4 rounded-full hover:bg-primary-hover transition-colors w-full sm:w-auto text-center"
            >
              {data.hero.primaryCta}
            </a>
            
            <a 
              href="#localizacao"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full border border-surface/30 text-surface hover:bg-surface hover:text-forest-900 transition-colors"
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

// --- QUICK INFO COMPONENT ---
function UnitQuickInfo({ data }: { data: UnitData }) {
  const infos = [];
  if (data.address) infos.push({ label: "ENDEREÇO", value: data.address });
  if (data.hours) infos.push({ label: "HORÁRIO", value: data.hours });
  if (data.phone) infos.push({ label: "CONTATO", value: data.phone });

  if (infos.length === 0) return null;

  return (
    <section className="w-full bg-forest-900 text-surface py-6 md:py-8 border-t border-surface/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[8%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-6 md:gap-12 lg:gap-16">
          {infos.map((info, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-surface/50 mb-2">
                {info.label}
              </span>
              <span className="font-body text-sm text-surface/90">
                {info.value}
              </span>
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
    <section className="relative w-full bg-surface text-forest-900 py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[8%] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        
        <div className="lg:col-span-5 flex flex-col justify-center">
          <p className="font-body text-[11px] md:text-[13px] uppercase tracking-[0.28em] text-forest-800 mb-8">
            {data.experience.eyebrow}
          </p>
          <h2 className="text-title-editorial text-forest-900 mb-10 text-balance">
            {data.experience.title}
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-forest-900/80 leading-[1.7] max-w-prose">
            {data.experience.text}
          </p>
        </div>

        <div className="lg:col-span-7 relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-forest-900/5">
          <Image
            src={data.experience.image}
            alt={data.name}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center hover:scale-105 transition-transform duration-1000 ease-out"
          />
        </div>

      </div>
    </section>
  );
}

// --- GASTRONOMY COMPONENT ---
function UnitGastronomy({ data }: { data: UnitData }) {
  return (
    <section className="relative w-full bg-background text-forest-900 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[8%]">
        
        <div className="max-w-[600px] mb-16 md:mb-24">
          <h2 className="text-title-editorial text-forest-900 mb-8">
            {data.gastronomy.title}
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-forest-900/80 leading-[1.7]">
            {data.gastronomy.text}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 h-auto md:h-[600px]">
          {/* Main Image */}
          <div className="md:col-span-7 relative w-full aspect-square md:aspect-auto md:h-full rounded-2xl overflow-hidden">
            <Image
              src={data.gastronomy.mainImage}
              alt="Detalhe de gastronomia"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          
          {/* Secondary Images Stack */}
          <div className="md:col-span-5 flex flex-col gap-6 md:gap-8 h-full">
            <div className="relative w-full flex-1 min-h-[300px] rounded-2xl overflow-hidden">
              <Image
                src={data.gastronomy.secondaryImage1}
                alt="Bebidas e atmosfera"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative w-full flex-1 min-h-[300px] rounded-2xl overflow-hidden">
              <Image
                src={data.gastronomy.secondaryImage2}
                alt="Ambiente"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
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
    <section className="relative w-full bg-forest-900 py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[8%]">
        <h2 className="font-body text-[11px] md:text-[13px] uppercase tracking-[0.25em] text-surface/50 mb-12 text-center md:text-left">
          GALERIA · {data.name.toUpperCase()}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {data.gallery.map((img, idx) => {
            // Make the first image larger in the grid for editorial asymmetry
            const isLarge = idx === 0;
            return (
              <div 
                key={idx} 
                className={`relative w-full rounded-xl overflow-hidden bg-forest-800 ${
                  isLarge ? "sm:col-span-2 sm:row-span-2 aspect-[4/3]" : "aspect-[4/5] sm:aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- LOCATION / CONVERSION COMPONENT ---
function UnitLocation({ data }: { data: UnitData }) {
  return (
    <section id="localizacao" className="w-full bg-surface py-24 md:py-32">
      <div className="max-w-[800px] mx-auto px-6 md:px-[8%] text-center">
        <p className="font-body text-[11px] md:text-[13px] uppercase tracking-[0.25em] text-forest-800 mb-8">
          ENCONTRE O JUNDU
        </p>
        <h2 className="font-display text-forest-900 text-[2.5rem] md:text-[4rem] mb-12">
          {data.name}
        </h2>
        
        <div className="flex flex-col gap-6 mb-16 items-center">
          <div className="max-w-sm">
            <p className="font-body text-sm uppercase tracking-[0.1em] text-forest-900/50 mb-2">Endereço</p>
            <p className="font-body text-[16px] text-forest-900 font-medium">
              {data.address ? data.address : data.location}
            </p>
          </div>
          
          {data.hours && (
            <div className="max-w-sm">
              <p className="font-body text-sm uppercase tracking-[0.1em] text-forest-900/50 mb-2">Horário</p>
              <p className="font-body text-[16px] text-forest-900 font-medium">
                {data.hours}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6" id="reserva">
          <a 
            href={data.reserveUrl || "#"}
            className="font-body text-[14px] md:text-[15px] font-bold bg-primary text-forest-900 px-10 py-4 rounded-full hover:bg-primary-hover transition-colors w-full sm:w-auto"
          >
            Reservar nesta unidade
          </a>
          
          {data.address && (
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(data.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[14px] md:text-[15px] font-bold px-10 py-4 rounded-full border border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-surface transition-colors w-full sm:w-auto"
            >
              Como chegar no Maps
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

// --- FAQ COMPONENT ---
function UnitFaq({ data }: { data: UnitData }) {
  if (!data.faq || data.faq.length === 0) return null;

  return (
    <section className="w-full bg-background py-24 md:py-32 border-t border-border">
      <div className="max-w-[800px] mx-auto px-6 md:px-[8%]">
        <h2 className="font-display text-forest-900 text-[2rem] md:text-[3rem] mb-12">
          Perguntas Frequentes
        </h2>
        
        <div className="flex flex-col divide-y divide-border">
          {data.faq.map((item, idx) => (
            <div key={idx} className="py-6">
              <h3 className="font-body text-[16px] md:text-[18px] font-bold text-forest-900 mb-3">
                {item.question}
              </h3>
              <p className="font-body text-[15px] md:text-[16px] text-forest-900/70 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- OTHER UNITS COMPONENT ---
function OtherUnits({ currentId }: { currentId: string }) {
  const others = Object.values(unitsData).filter(u => u.id !== currentId);
  
  return (
    <section className="w-full bg-forest-900 py-24 md:py-32 border-t border-surface/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[8%]">
        <p className="font-body text-[11px] md:text-[13px] uppercase tracking-[0.25em] text-surface/50 mb-12 text-center md:text-left">
          CONHEÇA TAMBÉM
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {others.map((unit) => (
            <Link 
              key={unit.id} 
              href={`/unidades/${unit.slug}`}
              className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-forest-800 flex items-end p-8 md:p-10"
            >
              <Image
                src={unit.hero.image}
                alt={unit.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/30 to-transparent opacity-80" />
              
              <div className="relative z-10 flex justify-between items-end w-full">
                <div>
                  <p className="font-body text-xs text-primary uppercase tracking-[0.2em] mb-3">
                    Unidade
                  </p>
                  <h3 className="font-display text-surface text-3xl md:text-4xl">
                    {unit.name}
                  </h3>
                </div>
                
                <div className="w-12 h-12 rounded-full border border-surface/30 flex items-center justify-center text-surface group-hover:bg-surface group-hover:text-forest-900 transition-colors">
                  <span className="text-xl leading-none -rotate-45 block">→</span>
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
        <UnitQuickInfo data={data} />
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
