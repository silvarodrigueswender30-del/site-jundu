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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      
      if (shouldPlay) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [shouldPlay]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-forest-900 z-0">
      <picture className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${isVideoLoaded ? "opacity-0" : "opacity-100"}`}>
        <source media="(max-width: 767px)" srcSet={posterMobile} />
        <img
          src={posterDesktop}
          alt="Jundu Praia Bar"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-center origin-center"
          style={{
            transform: reducedMotion ? "none" : "scale(1.02)",
            transition: "transform 10s ease-out",
            objectPosition: isMobile ? "55% center" : "center center"
          }}
        />
      </picture>
      
      {src && !reducedMotion && (
        <video
          ref={videoRef}
          src={src}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
          style={{
            objectPosition: isMobile ? "55% center" : "center center"
          }}
          muted
          loop
          playsInline
          autoPlay={shouldPlay}
          aria-hidden="true"
          preload="metadata"
          onCanPlay={() => setIsVideoLoaded(true)}
          onPlaying={() => setIsVideoLoaded(true)}
        />
      )}
      
      {/* Overlays cinematográficos refinados */}
      {/* Gradient lateral para o conteúdo (mais escuro na esquerda) */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-900/90 via-forest-900/40 to-transparent w-full md:w-[70%]" />
      
      {/* Gradient vertical para base e botões */}
      <div className="absolute bottom-0 w-full h-[60%] md:h-[50%] bg-gradient-to-t from-forest-900/90 via-forest-900/30 to-transparent" />
      
      {/* Tonalização suave no topo para a navbar */}
      <div className="absolute top-0 w-full h-[20%] bg-gradient-to-b from-forest-900/50 to-transparent" />
    </div>
  );
}
