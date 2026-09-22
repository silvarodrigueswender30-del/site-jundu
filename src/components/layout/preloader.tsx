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

      const isMobile = window.innerWidth < 768;

      // Desktop (>= 768px): pula o preloader inteiramente, sem travar scroll nem exibir nada.
      // Tablet (768–1023px) cai neste mesmo ramo — sem preloader.
      if (!isMobile) {
        setTimeout(() => setIsVisible(false), 0);
        sessionStorage.setItem("jundu-preloader-seen", "true");
        return;
      }

      // — A partir daqui: somente mobile (<768px) —

      document.body.style.overflow = "hidden";

      // Vídeo mobile otimizado (faststart, sem áudio)
      // Original: https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/Animating_Jundu_logo_1080p_20260922155148.mp4
      setTimeout(() => {
        setVideoSrc("/videos/preloader-mobile-optimized.mp4");
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
      clearTimeout(fallbackTimerRef.current);
    }

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

    const t1 = setTimeout(() => setShowEyebrow(true), 800);
    const t2 = setTimeout(() => setShowTitles(true), 1150);
    const endTimer = setTimeout(endPreloader, 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(endTimer);
    };
  }, [isPlaying]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col bg-[#03140E] transition-opacity duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ pointerEvents: isFadingOut ? "none" : "auto" }}
    >
      {/* Background Video com crossfade sutil no carregamento */}
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          className={`absolute inset-0 w-full h-full object-cover [object-position:center_35%] transition-opacity duration-[350ms] ${
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

      {/* Overlay gradiente mobile */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(3, 20, 14, 0.65) 0%, rgba(3, 20, 14, 0.3) 25%, rgba(3, 20, 14, 0.05) 45%, transparent 65%)",
        }}
      />

      {/* Editorial Content — mobile only */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end items-center pb-12 px-6 text-center text-surface">
        <div className="flex flex-col items-center max-w-[340px]">
          <p
            className={`font-body text-[10px] uppercase tracking-[0.25em] text-[#C4D93C] mb-4 transition-all duration-[700ms] ease-out ${
              showEyebrow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            DESDE 2013 · UBATUBA
          </p>

          <p
            className={`font-display text-[28px] leading-[1.05] mb-5 text-[#F3F4F0] transition-all duration-[800ms] ease-out ${
              showTitles ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Uma história que faz parte de Ubatuba.
          </p>

          <p
            className={`font-body text-[15px] text-[#F3F4F0]/80 max-w-[300px] leading-relaxed transition-all duration-[900ms] ease-out delay-[400ms] ${
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
