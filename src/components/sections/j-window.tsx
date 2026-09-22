"use client";

import { useEffect, useRef, useState } from "react";
import { siteData } from "@/data/site";

export function JWindow() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (siteData.sections as any).jWindow || {
    eyebrow: "UMA MESMA ESSÊNCIA",
    title: "Muda o cenário.\nA sensação permanece.",
    text: "Entre praia, cidade e natureza, cada endereço encontra sua própria atmosfera — mantendo o mesmo cuidado, acolhimento e jeito de receber.",
    image: "/images/architecture/jundu-material-light.avif",
    alt: "Fotografia de detalhe do bar Jundu vista através da letra J",
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
      data-section="j-window"
      className="relative w-full bg-background pt-[104px] pb-[112px] lg:pt-[128px] lg:pb-[136px] overflow-hidden flex flex-col justify-center min-h-[700px]"
    >
      <style>{`
        @keyframes j-window-pan {
          0% { transform: scale(1.05) translate(0%, 0%); }
          100% { transform: scale(1.05) translate(-1.5%, 1.5%); }
        }
        .j-window-image-pan {
          animation: j-window-pan 20s ease-in-out infinite alternate;
          transform-origin: center center;
          transform-box: fill-box;
        }
        @media (prefers-reduced-motion: reduce) {
          .j-window-image-pan {
            animation: none;
            transform: scale(1.05);
          }
        }
      `}</style>
      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-8">
        
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          
          {/* Coluna Esquerda: Conteúdo */}
          <div 
            className={`flex flex-col transition-all duration-[1000ms] ${
              shouldAnimate
                ? "opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]"
                : showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="font-body text-[12px] md:text-[13px] uppercase tracking-[0.26em] text-forest-600 mb-[24px]">
              {data.eyebrow}
            </p>
            <h2 
              className="font-display text-forest-900 m-0 mb-6"
              style={{
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              {data.title.split('\n').map((line: string, i: number) => (
                <span key={i} className="block lg:whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h2>
            <p className="font-body text-[16px] md:text-[17px] text-forest-900/80 max-w-[38ch] leading-[1.6]">
              {data.text}
            </p>
          </div>

          {/* Coluna Direita: J fotográfico */}
          <div 
            className={`relative w-full flex items-start justify-start transition-all duration-[1000ms] -mt-4 lg:-mt-8 ${
              shouldAnimate
                ? "opacity-0 animate-[fade-in-up_1000ms_cubic-bezier(.22,1,.36,1)_200ms_forwards]"
                : showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Ornamento floral (5 pontos rosa/magenta) */}
            <div className="absolute top-0 right-0 lg:right-[-20px] lg:top-[-20px] w-16 h-16 opacity-90 pointer-events-none z-10" aria-hidden="true">
              <svg viewBox="0 0 100 100" fill="#C24B7F" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="20" r="12" />
                <circle cx="80" cy="40" r="10" />
                <circle cx="80" cy="70" r="10" />
                <circle cx="50" cy="90" r="12" />
                <circle cx="20" cy="40" r="10" />
              </svg>
            </div>

            <div className="relative w-full max-w-[250px] lg:max-w-[310px] aspect-[2/3]">
              <svg width="100%" height="100%" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="j-mask">
                    <text 
                      x="50%" 
                      y="85%" 
                      fontFamily="Georgia, 'Times New Roman', serif" 
                      fontSize="680" 
                      fontWeight="400" 
                      textAnchor="middle"
                    >
                      J
                    </text>
                  </clipPath>
                </defs>
                <g clipPath="url(#j-mask)">
                  <image
                    className="j-window-image-pan"
                    href={data.image}
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>
              </svg>
            </div>

          </div>
          
        </div>
        
      </div>
    </section>
  );
}
