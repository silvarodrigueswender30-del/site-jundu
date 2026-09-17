"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteData } from "@/data/site";

export function LocationsAccordion() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  // null means balanced state (all equal)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (siteData.sections as any).locations || {
    title: "Três unidades.\nTrês atmosferas.",
    units: [
      {
        id: "itagua",
        name: "Itaguá",
        image: "/images/stories/story-atmosfera.webp",
        alt: "Unidade Itaguá",
        objectPosition: "center 40%"
      },
      {
        id: "prumirim",
        name: "Prumirim",
        image: "/images/stories/story-gastronomia.webp",
        alt: "Unidade Prumirim",
        objectPosition: "center center"
      },
      {
        id: "praia-grande",
        name: "Praia Grande",
        image: "/images/stories/story-atendimento.webp",
        alt: "Unidade Praia Grande",
        objectPosition: "center 30%"
      }
    ]
  };

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
      { threshold: 0.1, rootMargin: "100px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

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
      id="unidades"
      data-section="locations-accordion"
      className="relative w-full bg-forest-900 pt-[104px] pb-[112px] lg:pt-[144px] lg:pb-[160px] overflow-hidden"
    >
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-8">
        
        {/* Header Editorial */}
        <div className="mb-12 lg:mb-20">
          <div className="grid items-end gap-8 lg:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            
            {/* Esquerda: Eyebrow + Titulo */}
            <div 
              className={`flex flex-col transition-all duration-[1000ms] ${
                shouldAnimate
                  ? "opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]"
                  : showContent ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="font-body text-[12px] md:text-[13px] uppercase tracking-[0.26em] text-primary mb-[20px]">
                {data.eyebrow}
              </p>
              <h2
                className="font-display text-surface m-0"
                style={{
                  fontSize: "clamp(3.5rem, 5vw, 5rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.025em",
                }}
              >
                <span className="lg:whitespace-nowrap">Três unidades.</span>
                <br />
                <span className="lg:whitespace-nowrap">Três atmosferas.</span>
              </h2>
            </div>

            {/* Direita: Texto */}
            <div 
              className={`transition-all duration-[1000ms] pb-2 ${
                shouldAnimate
                  ? "opacity-0 animate-[fade-in-up_1000ms_cubic-bezier(.22,1,.36,1)_200ms_forwards]"
                  : showContent ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="font-body text-[16px] md:text-[17px] text-surface/80 max-w-[42ch] leading-[1.6]">
                {data.text}
              </p>
            </div>

          </div>
        </div>

        {/* Accordion Container */}
        <div 
          className={`flex flex-col lg:flex-row w-full h-[700px] lg:h-[640px] gap-4 transition-opacity duration-[1000ms] ${
            shouldAnimate
              ? "opacity-0 animate-[fade-in-up_1000ms_cubic-bezier(.22,1,.36,1)_200ms_forwards]"
              : showContent ? "opacity-100" : "opacity-0"
          }`}
          onMouseLeave={() => window.innerWidth >= 1024 && setActiveIndex(null)}
        >
          {data.units.map((unit: {id: string, name: string, image: string, alt: string, objectPosition?: string}, index: number) => {
            const isActive = activeIndex === index;
            const isBalanced = activeIndex === null;
            
            // Flex basis logic
            let flexClass = "";
            if (isBalanced) {
              flexClass = "flex-1";
            } else if (isActive) {
              flexClass = "flex-[2.5] lg:flex-[3]";
            } else {
              flexClass = "flex-[0.6] lg:flex-[0.8]";
            }

            return (
              <button
                key={unit.id}
                className={`group relative overflow-hidden rounded-[16px] transition-[flex] duration-700 ease-[cubic-bezier(.22,1,.36,1)] outline-none focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900 ${flexClass}`}
                onClick={() => setActiveIndex(isActive ? null : index)}
                onMouseEnter={() => window.innerWidth >= 1024 && setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
                aria-expanded={isActive}
              >
                {/* Background Image */}
                <Image
                  src={unit.image}
                  alt={unit.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(.22,1,.36,1)] ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  style={{ objectPosition: unit.objectPosition || "center" }}
                />
                
                {/* Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/20 to-transparent transition-opacity duration-700" />
                
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 flex flex-col justify-end h-full">
                  <div className={`transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] flex flex-col lg:flex-row lg:items-end justify-between ${
                    isActive || isBalanced ? "translate-y-0" : "translate-y-4"
                  }`}>
                    
                    <h3 className={`font-display text-surface text-3xl md:text-4xl lg:text-5xl whitespace-nowrap transform transition-all duration-700 origin-left ${
                      isActive || isBalanced ? "opacity-100" : "opacity-60"
                    }`}>
                      {unit.name}
                    </h3>
                    
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
