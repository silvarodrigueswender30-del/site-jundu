"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function KitchenToScreen() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Fallback data for the film strip
  const items = [
    { id: "kts-1", image: "/images/stories/story-atmosfera.webp", alt: "Bastidores Jundu 1" },
    { id: "kts-2", image: "/images/stories/story-atendimento.webp", alt: "Bastidores Jundu 2" },
    { id: "kts-3", image: "/images/stories/story-gastronomia.webp", alt: "Bastidores Jundu 3" },
    { id: "kts-4", image: "/images/stories/story-atmosfera.webp", alt: "Bastidores Jundu 4" },
    { id: "kts-5", image: "/images/stories/story-atendimento.webp", alt: "Bastidores Jundu 5" },
    { id: "kts-6", image: "/images/stories/story-gastronomia.webp", alt: "Bastidores Jundu 6" },
  ];

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
      id="gastronomia"
      data-section="kitchen-to-screen"
      className="relative w-full bg-background pt-[104px] pb-[112px] lg:pt-[144px] lg:pb-[160px] overflow-hidden"
    >
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-8 mb-12 lg:mb-16">
        
        {/* Header Editorial */}
        <div 
          className={`flex flex-col md:flex-row md:items-end justify-between gap-8 transition-all duration-[1000ms] ${
            shouldAnimate
              ? "opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]"
              : showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <p className="font-body text-[12px] md:text-[13px] uppercase tracking-[0.26em] text-primary mb-[20px]">
              BASTIDORES
            </p>
            <h2
              className="font-display text-forest-900 m-0"
              style={{
                fontSize: "clamp(3rem, 5vw, 4.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.025em",
              }}
            >
              Da cozinha
              <br />
              para a tela.
            </h2>
          </div>
          <div className="md:max-w-[40ch] pb-2">
            <p className="font-body text-[16px] md:text-[17px] text-forest-900/80 leading-[1.6]">
              Acompanhe a cadência dos preparos, a montagem dos pratos e o movimento do salão. O Jundu em tempo real.
            </p>
          </div>
        </div>
      </div>

      {/* Film Strip / Marquee */}
      <div 
        className={`relative w-full flex overflow-hidden transition-all duration-[1000ms] ${
          shouldAnimate
            ? "opacity-0 animate-[fade-in-up_1000ms_cubic-bezier(.22,1,.36,1)_200ms_forwards]"
            : showContent ? "opacity-100" : "opacity-0"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`flex w-max ${reducedMotion ? "" : "animate-[marquee_40s_linear_infinite]"}`}
          style={{ animationPlayState: isHovered && !reducedMotion ? 'paused' : 'running' }}
        >
          {/* Primeiro grupo */}
          <div className="flex gap-4 lg:gap-8 px-2 lg:px-4">
            {items.map((item, index) => (
              <div 
                key={`group1-${item.id}-${index}`}
                className="relative w-[240px] md:w-[280px] lg:w-[320px] aspect-[9/16] rounded-[16px] overflow-hidden group cursor-pointer shrink-0"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 280px, 320px"
                  className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                />
                
                {/* Overlay de vídeo */}
                <div className="absolute inset-0 bg-forest-900/10 group-hover:bg-forest-900/0 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100">
                  <div className="w-14 h-14 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center text-forest-900 pl-1 shadow-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Segundo grupo duplicado para continuidade */}
          <div className="flex gap-4 lg:gap-8 px-2 lg:px-4" aria-hidden="true">
            {items.map((item, index) => (
              <div 
                key={`group2-${item.id}-${index}`}
                className="relative w-[240px] md:w-[280px] lg:w-[320px] aspect-[9/16] rounded-[16px] overflow-hidden group cursor-pointer shrink-0"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 280px, 320px"
                  className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-forest-900/10 group-hover:bg-forest-900/0 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100">
                  <div className="w-14 h-14 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center text-forest-900 pl-1 shadow-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />

    </section>
  );
}
