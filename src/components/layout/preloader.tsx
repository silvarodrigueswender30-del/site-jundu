"use client";

import { useEffect, useState, useRef } from "react";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [showEyebrow, setShowEyebrow] = useState(false);
  const [showTitles, setShowTitles] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasSeen = sessionStorage.getItem("jundu-preloader-seen");
      if (hasSeen) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsVisible(false);
        return;
      }

      document.body.style.overflow = "hidden";

      const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isMobile = window.innerWidth < 768;

      setVideoSrc(
        isMobile
          ? "https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/Animating_Jundu_logo_1080p_20260922155148.mp4"
          : "https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/Animate_Jundu_logo_20260922154436.mp4"
      );

      if (videoRef.current) {
        videoRef.current.defaultMuted = true;
        videoRef.current.muted = true;
      }

      const endPreloader = () => {
        setIsFadingOut(true);
        sessionStorage.setItem("jundu-preloader-seen", "true");
        setTimeout(() => {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setIsVisible(false);
          document.body.style.overflow = "";
        }, 800);
      };

      if (isReducedMotion) {
        setShowEyebrow(true);
        setShowTitles(true);
        const rmTimer = setTimeout(endPreloader, 1500);
        return () => {
          clearTimeout(rmTimer);
          document.body.style.overflow = "";
        };
      }

      const t1 = setTimeout(() => setShowEyebrow(true), 800);
      const t2 = setTimeout(() => setShowTitles(true), 1300);

      const endTimer = setTimeout(endPreloader, 4500);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(endTimer);
        document.body.style.overflow = "";
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#03140E] transition-opacity duration-[800ms] ease-in-out ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ pointerEvents: isFadingOut ? "none" : "auto" }}
    >
      {/* Background Video */}
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          aria-hidden="true"
        />
      )}

      {/* Overlay to ensure text readability without hiding the scenario */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(3, 20, 14, 0.65) 0%, rgba(3, 20, 14, 0.3) 25%, rgba(3, 20, 14, 0.05) 45%, transparent 65%)",
        }}
      />

      {/* Editorial Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end items-center pb-12 md:pb[-8%] px-6 md:px-8 text-center text-surface">
        <p
          className={`font-body text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#C4D93C] mb-4 transition-all duration-[700ms] ease-out ${
            showEyebrow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          DESDE 2013 · UBATUBA
        </p>

        <p
          className={`font-display text-[28px] md:text-[42px] leading-[1.05] mb-5 text-surface transition-all duration-[800ms] ease-out ${
            showTitles ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Uma história que faz parte
          <br className="hidden md:block" /> de Ubatuba.
        </p>

        <p
          className={`font-body text-[15px] md:text-[16px] text-[#F3F4F0]/80 max-w-[560px] leading-relaxed transition-all duration-[900ms] ease-out delay-[150ms] ${
            showTitles ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Gastronomia, hospitalidade e encontros que atravessam mais de uma década.
        </p>
      </div>
    </div>
  );
}

