const fs = require('fs');

const code = "use client\\";

import { useEffect, useState, useRef } from \\"react\\";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [showEyebrow, setShowEyebrow] = useState(false);
  const [showTitles, setShowTitles] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window !== \\"undefined\\") {
      const hasSeen = sessionStorage.getItem(\\"jundu-preloader-seen\\");
      if (hasSeen) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsVisible(false);
        return;
      }

      document.body.style.overflow = \\"hidden\\";

      const isReducedMotion = window.matchMedia(\\"(prefers-reduced-motion: reduce)\\").matches;
      const isMobile = window.innerWidth < 768;

      setVideoSrc(
        isMobile
          ? \\"https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/Animating_Jundu_logo_1080p_20260922155148.mp4\\"
          : \\"https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/Animate_Jundu_logo_20260922154436.mp4\\"
      );

      if (videoRef.current) {
        videoRef.current.defaultMuted = true;
        videoRef.current.muted = true;
      }

      const endPreloader = () => {
        setIsFadingOut(true);
        sessionStorage.setItem(\\"jundu-preloader-seen\\", \\"true\\");
        setTimeout(() => {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setIsVisible(false);
          document.body.style.overflow = \\"\\";
        }, 800);
      };

      if (isReducedMotion) {
        setShowEyebrow(true);
        setShowTitles(true);
        const rmTimer = setTimeout(endPreloader, 1500);
        return () => {
          clearTimeout(rmTimer);
          document.body.style.overflow = \\"\\";
        };
      }

      const t1 = setTimeout(() => setShowEyebrow(true), 800);
      const t2 = setTimeout(() => setShowTitles(true), 1300);

      const endTimer = setTimeout(endPreloader, 4500);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(endTimer);
        document.body.style.overflow = \\"\\";
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={\ixed inset-0 z-[9999] flex flex-col bg-[#03140E] lg:bg-[#06170F] transition-opacity duration-[800ms] ease-in-out \\}
      style={{ pointerEvents: isFadingOut ? \\"none\\" : \\"auto\\" }}
    >
      {/* Background Video */}
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          className=\\"absolute inset-0 w-full h-full object-cover lg:object-contain\\"
          autoPlay
          muted
          playsInline
          aria-hidden=\\"true\\"
        />
      )}

      {/* Overlay Mobile/Tablet (preserved) */}
      <div
        className=\\"absolute inset-0 lg:hidden\\"
        style={{
          background:
            \\"linear-gradient(to top, rgba(3, 20, 14, 0.65) 0%, rgba(3, 20, 14, 0.3) 25%, rgba(3, 20, 14, 0.05) 45%, transparent 65%)\\",
        }}
      />

      {/* Overlays Desktop */}
      <div className=\\"absolute inset-0 hidden lg:block\\" style={{ background: \\"rgba(3, 18, 12, 0.15)\\" }} />
      <div
        className=\\"absolute inset-0 hidden lg:block\\"
        style={{
          background:
            \\"linear-gradient(to top, rgba(3, 18, 12, 0.96) 0%, rgba(3, 18, 12, 0.84) 18%, rgba(3, 18, 12, 0.58) 34%, rgba(3, 18, 12, 0.26) 50%, rgba(3, 18, 12, 0.05) 68%, transparent 80%)\\",
        }}
      />
      <div
        className=\\"absolute inset-0 hidden lg:block\\"
        style={{
          background:
            \\"linear-gradient(to right, rgba(3, 18, 12, 0.68) 0%, rgba(3, 18, 12, 0.44) 24%, rgba(3, 18, 12, 0.12) 48%, transparent 68%)\\",
        }}
      />

      {/* Editorial Content */}
      <div className=\\"relative z-10 w-full h-full flex flex-col justify-end items-center lg:items-start pb-12 md:pb-[8%] lg:pb-[clamp(38px,6vh,72px)] px-6 md:px-8 lg:px-0 lg:pl-[max(64px,calc((100vw-1280px)/2))] text-center lg:text-left text-surface\\">
        <div className=\\"flex flex-col items-center lg:items-start lg:max-w-[620px]\\">
          <p
            className={\ont-body text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#C4D93C] mb-4 transition-all duration-[700ms] ease-out \\}
          >
            DESDE 2013 · UBATUBA
          </p>

          <p
            className={\ont-display text-[28px] md:text-[42px] lg:text-[48px] leading-[1.05] lg:leading-[1] mb-5 text-[#F3F4F0] transition-all duration-[800ms] ease-out \\}
          >
            <span className=\\"lg:hidden\\">
              Uma história que faz parte
              <br className=\\"hidden md:block\\" /> de Ubatuba.
            </span>
            <span className=\\"hidden lg:inline\\">
              Uma história que faz <br /> parte de Ubatuba.
            </span>
          </p>

          <p
            className={\ont-body text-[15px] md:text-[16px] text-[#F3F4F0]/80 max-w-[560px] lg:max-w-[580px] leading-relaxed transition-all duration-[900ms] ease-out delay-[150ms] \\}
          >
            Gastronomia, hospitalidade e encontros que atravessam mais de uma década.
          </p>
        </div>
      </div>
    </div>
  );
}
;

fs.writeFileSync('src/components/layout/preloader.tsx', code, 'utf8');
