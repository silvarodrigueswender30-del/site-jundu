"use client";

import { useEffect, useState, useRef } from "react";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEyebrow, setShowEyebrow] = useState(false);
  const [showTitles, setShowTitles] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fallbackTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasSeen = sessionStorage.getItem("jundu-preloader-seen");
      if (hasSeen) {
        setTimeout(() => setIsVisible(false), 0);
        return;
      }

      document.body.style.overflow = "hidden";

      const isMobile = window.innerWidth < 768;

      // Usando os derivados otimizados localmente (faststart, an, yuv420p) para corrigir travamentos.
      // Originais Supabase mantidos como fallback/referência:
      // Desktop Original: https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/Animate_Jundu_logo_20260922154436.mp4
      // Mobile Original: https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/Animating_Jundu_logo_1080p_20260922155148.mp4
      setTimeout(() => {
        setVideoSrc(
          isMobile
            ? "/videos/preloader-mobile-optimized.mp4"
            : "/videos/preloader-desktop-optimized.mp4"
        );
      }, 0);

      if (videoRef.current) {
        videoRef.current.defaultMuted = true;
        videoRef.current.muted = true;
      }

      // Safety fallback: encerra o preloader se o vídeo travar completamente por 8s
      fallbackTimerRef.current = setTimeout(() => {
        setIsFadingOut(true);
        sessionStorage.setItem("jundu-preloader-seen", "true");
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = "";
        }, 800);
      }, 8000);

      return () => {
        if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
        document.body.style.overflow = "";
      };
    }
  }, []);

  // Timeline baseada ESTRITAMENTE no início real do playback
  useEffect(() => {
    if (!isPlaying) return;

    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current); // O vídeo tocou, podemos cancelar o fallback extremo
    }

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    const endPreloader = () => {
      setIsFadingOut(true);
      sessionStorage.setItem("jundu-preloader-seen", "true");
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "";
      }, 800);
    };

    if (isReducedMotion) {
      setTimeout(() => {
        setShowEyebrow(true);
        setShowTitles(true);
      }, 0);
      const rmTimer = setTimeout(endPreloader, 1500);
      return () => clearTimeout(rmTimer);
    }

    // Timeline fluida baseada no playback real
    const t1 = setTimeout(() => setShowEyebrow(true), 800);
    const t2 = setTimeout(() => setShowTitles(true), 1150);

    // Fade-out trigger: 5.4s para desktop, 5.0s para mobile (garante o "Hold" visual da logo antes da saída)
    const endTimer = setTimeout(endPreloader, isMobile ? 5000 : 5400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(endTimer);
    };
  }, [isPlaying]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col bg-[#03140E] lg:bg-[#06170F] transition-opacity duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ pointerEvents: isFadingOut ? "none" : "auto" }}
    >
      {/* Background Video com crossfade sutil no carregamento */}
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          className={`absolute inset-0 w-full h-full object-cover lg:object-contain transition-opacity duration-[350ms] ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          playsInline
          preload="auto"
          onPlaying={() => setIsPlaying(true)}
          aria-hidden="true"
        />
      )}

      {/* Overlay Mobile/Tablet (preserved) */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(to top, rgba(3, 20, 14, 0.65) 0%, rgba(3, 20, 14, 0.3) 25%, rgba(3, 20, 14, 0.05) 45%, transparent 65%)",
        }}
      />

      {/* Overlays Desktop */}
      <div className="absolute inset-0 hidden lg:block" style={{ background: "rgba(3, 18, 12, 0.15)" }} />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to top, rgba(3, 18, 12, 0.96) 0%, rgba(3, 18, 12, 0.84) 18%, rgba(3, 18, 12, 0.58) 34%, rgba(3, 18, 12, 0.26) 50%, rgba(3, 18, 12, 0.05) 68%, transparent 80%)",
        }}
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(3, 18, 12, 0.68) 0%, rgba(3, 18, 12, 0.44) 24%, rgba(3, 18, 12, 0.12) 48%, transparent 68%)",
        }}
      />

      {/* Editorial Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end items-center lg:items-start pb-12 md:pb-[8%] lg:pb-[clamp(38px,6vh,72px)] px-6 md:px-8 lg:px-0 lg:pl-[max(64px,calc((100vw-1280px)/2))] text-center lg:text-left text-surface">
        <div className="flex flex-col items-center lg:items-start lg:max-w-[620px]">
          <p
            className={`font-body text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#C4D93C] mb-4 transition-all duration-[700ms] ease-out ${
              showEyebrow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            DESDE 2013 · UBATUBA
          </p>

          <p
            className={`font-display text-[28px] md:text-[42px] lg:text-[48px] leading-[1.05] lg:leading-[1] mb-5 text-[#F3F4F0] transition-all duration-[800ms] ease-out ${
              showTitles ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <span className="lg:hidden">
              Uma história que faz parte
              <br className="hidden md:block" /> de Ubatuba.
            </span>
            <span className="hidden lg:inline">
              Uma história que faz <br /> parte de Ubatuba.
            </span>
          </p>

          <p
            className={`font-body text-[15px] md:text-[16px] text-[#F3F4F0]/80 max-w-[560px] lg:max-w-[580px] leading-relaxed transition-all duration-[900ms] ease-out delay-[400ms] ${
              showTitles ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Gastronomia, hospitalidade e encontros que atravessam mais de uma década.
          </p>
        </div>
      </div>
    </div>
  );
}
