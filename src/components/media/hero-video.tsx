"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  src?: string;
  posterDesktop: string;
  posterMobile: string;
}

export function HeroVideo({ src, posterDesktop, posterMobile }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", checkMobile);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  useEffect(() => {
    if (!src || reducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShouldPlay(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    const handleVisibilityChange = () => {
      const top = videoRef.current?.getBoundingClientRect().top;
      if (document.hidden) setShouldPlay(false);
      else if (top !== undefined && top < window.innerHeight) {
        setShouldPlay(true);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [src, reducedMotion]);

  useEffect(() => {
    if (videoRef.current) {
      if (shouldPlay) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [shouldPlay]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-forest-900 z-0">
      <picture>
        <source media="(max-width: 767px)" srcSet={posterMobile} />
        <img
          src={posterDesktop}
          alt="Jundu Praia Bar"
          className="absolute inset-0 w-full h-full object-cover object-center origin-center"
          style={{
            transform: reducedMotion ? "none" : "scale(1.02)",
            transition: "transform 10s ease-out",
          }}
        />
      </picture>
      
      {src && !reducedMotion && (
        <video
          ref={videoRef}
          src={src}
          poster={isMobile ? posterMobile : posterDesktop}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[640ms] ${shouldPlay ? "opacity-100" : "opacity-0"}`}
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      )}
      
      {/* Overlays cinematográficos (Lateral esquerdo + Base suave) */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-900/90 via-forest-900/50 to-transparent w-[90%] md:w-[70%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/95 via-forest-900/20 to-forest-900/10 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[#3F482F]/10 mix-blend-overlay" /> {/* Tonalização Verde/âmbar */}
    </div>
  );
}
