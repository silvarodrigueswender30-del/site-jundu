"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteData } from "@/data/site";

export function ArchitecturalGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Fallback data in case siteData is missing or hasn't been updated yet
  const fallbackData = {
    title: "Uma atmosfera de respiro e encontro.",
    images: [
      {
        src: "/images/architecture/arch-main.webp",
        alt: "Visão ampla da arquitetura",
        caption: "Arquitetura e atmosfera",
      },
      {
        src: "/images/architecture/arch-people.webp",
        alt: "Pessoas interagindo",
        caption: "Pessoas e hospitalidade",
      },
      {
        src: "/images/architecture/arch-detail.webp",
        alt: "Detalhe da gastronomia",
        caption: "Gastronomia e detalhe",
      },
    ],
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (siteData.sections as any).architecture || fallbackData;

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
      data-section="architectural-gallery"
      className="relative w-full bg-background pt-[104px] pb-[112px] lg:pt-[144px] lg:pb-[160px] px-6 lg:px-8 overflow-hidden"
    >
      <div className="w-full max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-14 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <p
              className={`font-body text-[12px] md:text-[13px] uppercase tracking-[0.26em] text-primary mb-[20px] transition-opacity duration-700 ${
                shouldAnimate
                  ? "opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]"
                  : showContent ? "opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: "50ms" }}
            >
              {data.eyebrow}
            </p>
            <h2
              className={`font-display text-forest-900 m-0 transition-opacity duration-700 ${
                shouldAnimate
                  ? "opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]"
                  : showContent ? "opacity-100" : "opacity-0"
              }`}
              style={{
                fontSize: "clamp(3rem, 4.5vw, 4rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.025em",
                textWrap: "balance"
              }}
            >
              <span className="whitespace-pre-line">{data.title}</span>
            </h2>
          </div>

          {data.text && (
            <div className="lg:col-span-5 flex items-end pb-2">
              <p
                className={`font-body text-[16px] md:text-[17px] text-forest-900/80 max-w-[40ch] leading-[1.6] transition-opacity duration-700 ${
                  shouldAnimate
                    ? "opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]"
                    : showContent ? "opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: "250ms" }}
              >
                {data.text}
              </p>
            </div>
          )}
        </div>

        {/* Galeria Mosaico - Topo e Base alinhados */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Foto dominante à esquerda (8 colunas) */}
          <div
            className={`lg:col-span-8 relative aspect-[4/3] lg:aspect-[6/5] overflow-hidden rounded-[16px] transition-all duration-[900ms] ${
              shouldAnimate
                ? "opacity-0 animate-[fade-in-up_900ms_cubic-bezier(.22,1,.36,1)_200ms_forwards]"
                : showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={data.images[0].src}
              alt={data.images[0].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(.22,1,.36,1)]"
              style={{ objectPosition: data.images[0].objectPosition || "center" }}
            />
            <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
              <span className="font-body text-[11px] uppercase tracking-[0.2em] text-surface drop-shadow-md">
                {data.images[0].caption}
              </span>
            </div>
          </div>

          {/* Fotografias menores empilhadas à direita (4 colunas) */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8 h-full">

            {/* Imagem 2 */}
            <div
              className={`relative flex-1 min-h-[250px] lg:min-h-0 overflow-hidden rounded-[16px] transition-all duration-[900ms] ${
                shouldAnimate
                  ? "opacity-0 animate-[fade-in-up_900ms_cubic-bezier(.22,1,.36,1)_400ms_forwards]"
                  : showContent ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={data.images[1].src}
                alt={data.images[1].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(.22,1,.36,1)]"
                style={{ objectPosition: data.images[1].objectPosition || "center" }}
              />
              <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
                <span className="font-body text-[11px] uppercase tracking-[0.2em] text-surface drop-shadow-md">
                  {data.images[1].caption}
                </span>
              </div>
            </div>

            {/* Imagem 3 */}
            <div
              className={`relative flex-1 min-h-[250px] lg:min-h-0 overflow-hidden rounded-[16px] transition-all duration-[900ms] ${
                shouldAnimate
                  ? "opacity-0 animate-[fade-in-up_900ms_cubic-bezier(.22,1,.36,1)_600ms_forwards]"
                  : showContent ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={data.images[2].src}
                alt={data.images[2].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(.22,1,.36,1)]"
                style={{ objectPosition: data.images[2].objectPosition || "center" }}
              />
              <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
                <span className="font-body text-[11px] uppercase tracking-[0.2em] text-surface drop-shadow-md">
                  {data.images[2].caption}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
