"use client";

import { useEffect, useRef, useState } from "react";
import { siteData } from "@/data/site";
import Link from "next/link";

export function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const data = siteData.sections.finalCta;

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
      id="reserva"
      className="relative w-full bg-forest-900 py-[120px] lg:py-[200px]"
    >
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        
        <h2 
          className={`font-display text-surface m-0 mb-6 transition-all duration-[1000ms] ${
            shouldAnimate
              ? "opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]"
              : showContent ? "opacity-100" : "opacity-0"
          }`}
          style={{
            fontSize: "clamp(3.5rem, 6vw, 6rem)",
            lineHeight: 1,
            letterSpacing: "-0.025em",
          }}
        >
          {data.title}
        </h2>
        
        <p 
          className={`font-body text-[16px] md:text-[18px] text-surface/80 max-w-[50ch] mb-12 transition-all duration-[1000ms] ${
            shouldAnimate
              ? "opacity-0 animate-[fade-in-up_1000ms_cubic-bezier(.22,1,.36,1)_200ms_forwards]"
              : showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          {data.subtitle}
        </p>

        <div 
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-[1000ms] ${
            shouldAnimate
              ? "opacity-0 animate-[fade-in-up_1000ms_cubic-bezier(.22,1,.36,1)_400ms_forwards]"
              : showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link 
            href={data.primaryAction.href}
            className="inline-flex items-center justify-center px-8 py-4 bg-surface text-forest-900 font-body text-[14px] uppercase tracking-[0.1em] rounded-full hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900"
          >
            {data.primaryAction.label}
          </Link>
          <Link 
            href={data.secondaryAction.href}
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-surface border border-surface/30 font-body text-[14px] uppercase tracking-[0.1em] rounded-full hover:bg-surface/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900"
          >
            {data.secondaryAction.label}
          </Link>
        </div>

      </div>
    </section>
  );
}
