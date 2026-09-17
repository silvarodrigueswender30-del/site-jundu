"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteData } from "@/data/site";

export function EditorialIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const data = siteData.sections.editorial;

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReducedMotion(motionQuery.matches);
    const handleMotion = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotion);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      motionQuery.removeEventListener("change", handleMotion);
      observer.disconnect();
    };
  }, []);

  const shouldAnimate = isVisible && !reducedMotion;
  const showContent = isVisible || reducedMotion;

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      data-section="editorial"
      className="relative w-full bg-surface pt-[104px] pb-[112px] lg:pt-[144px] lg:pb-[160px] overflow-hidden"
    >
      <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[88px] items-start">
        
        {/* Coluna Visual (Esquerda: ~7 colunas) */}
        <div className="lg:col-span-7 relative group w-full flex justify-center lg:justify-end">
          <div 
            className={`relative w-full max-w-[700px] aspect-[4/5] lg:aspect-square max-h-[700px] rounded-xl overflow-hidden bg-forest-900/5 ${
              shouldAnimate ? "opacity-0 animate-[reveal-up_850ms_cubic-bezier(.22,1,.36,1)_forwards]" : showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* TÉCNICO: Imagem provisória. 
                NOTA: A onda branca na base está GRAVADA no próprio arquivo raster do banner antigo, 
                NÃO é um clip-path do CSS atual. Ela sumirá quando a foto real HD for inserida. */}
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center transition-transform duration-[850ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.025]"
            />
          </div>
        </div>

        {/* Coluna Textual (Direita: ~5 colunas) */}
        <div className="lg:col-span-5 flex flex-col justify-start relative pt-4 lg:pt-[48px]">
          
          {/* Ornamento Botânico Abstrato - Decorativo */}
          <div className="absolute top-0 right-0 lg:-top-6 lg:-right-6 opacity-70 pointer-events-none" aria-hidden="true">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 12C32 12 42 22 42 32C42 42 32 32 32 32C32 32 22 42 22 32C22 22 32 12 32 12Z" fill="#D28F9E" className="mix-blend-multiply opacity-80" />
              <path d="M52 32C52 32 42 42 32 42C22 42 32 32 32 32C32 32 22 22 32 22C42 22 52 32 52 32Z" fill="#A881B5" className="mix-blend-multiply opacity-80" />
              <circle cx="32" cy="32" r="6" fill="#D3C1A5" className="mix-blend-multiply" />
            </svg>
          </div>

          <div className="relative z-10 w-full max-w-[480px]">
            <p 
              className={`font-body text-[12px] md:text-[14px] uppercase tracking-[0.28em] text-forest-800 mb-[28px] ${
                shouldAnimate ? "opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]" : showContent ? "opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: '100ms' }}
            >
              {data.eyebrow}
            </p>

            {/* O max-width foi ampliado para ~11.5ch para forçar exatamente 3 linhas. 
                Foi removida a restrição exagerada que forçava 4 linhas. */}
            <h2 
              className={`font-display text-forest-900 m-0 ${
                shouldAnimate ? "opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]" : showContent ? "opacity-100" : "opacity-0"
              }`}
              style={{ 
                animationDelay: '200ms',
                fontSize: 'clamp(3.5rem, 4.7vw, 4.75rem)', 
                lineHeight: 1.0, 
                letterSpacing: '-0.03em',
                maxWidth: '11.5ch',
                textWrap: 'balance'
              }}
            >
              {data.title}
            </h2>

            <p 
              className={`font-body text-[17px] md:text-[19px] text-forest-900/80 mt-[34px] max-w-[40ch] ${
                shouldAnimate ? "opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]" : showContent ? "opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: '300ms', lineHeight: 1.6 }}
            >
              {data.text}
            </p>

            <a 
              href={data.link.href}
              className={`group inline-flex items-center font-body text-[13px] font-bold tracking-[0.12em] text-forest-900 uppercase focus:outline-none rounded-sm mt-[44px] ${
                shouldAnimate ? "opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]" : showContent ? "opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: '400ms' }}
            >
              <span className="relative overflow-hidden group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-surface pb-[2px]">
                {data.link.label}
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-forest-900 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
              <span className="ml-[18px] transition-transform duration-300 group-hover:translate-x-1.5 flex items-center justify-center">
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 1L23 6L18 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 6H23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
