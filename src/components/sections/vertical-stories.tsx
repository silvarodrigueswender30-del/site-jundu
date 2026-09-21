"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { siteData } from "@/data/site";
import type { StoryItem } from "@/data/site";
import { VerticalStoryCard } from "@/components/media/vertical-story-card";
import { VerticalVideoDialog } from "@/components/media/vertical-video-dialog";

export function VerticalStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeStoryId, setActiveStoryId] = useState<string | null>(null);
  const [dialogStory, setDialogStory] = useState<StoryItem | null>(null);
  const [currentSnap, setCurrentSnap] = useState(0);

  const data = siteData.sections.stories;
  const stories = data.items;

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);
    const handleMotion = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotion);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isDesktop = window.innerWidth >= 1024;
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (isDesktop && !motionQuery.matches) {
              setActiveStoryId((current) => current || "story-gastronomia");
            }
          } else {
            // When leaving viewport, pause all by clearing active ID
            setActiveStoryId(null);
          }
        });
      },
      { threshold: 0.45, rootMargin: "0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      motionQuery.removeEventListener("change", handleMotion);
      observer.disconnect();
    };
  }, []);

  // When returning to the center / hover logic
  const handleContainerMouseLeave = useCallback(() => {
    if (window.innerWidth >= 1024 && isVisible && !reducedMotion) {
      setActiveStoryId("story-gastronomia");
    }
  }, [isVisible, reducedMotion]);

  // Mobile scroll-snap tracker
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const handleScroll = () => {
      const children = Array.from(gallery.children) as HTMLElement[];
      const scrollCenter = gallery.scrollLeft + gallery.offsetWidth / 2;

      let closestIdx = 0;
      let closestDist = Infinity;
      children.forEach((child, i) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(scrollCenter - childCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });

      setCurrentSnap(closestIdx);
    };

    gallery.addEventListener("scroll", handleScroll, { passive: true });
    return () => gallery.removeEventListener("scroll", handleScroll);
  }, []);

  const handleActivate = useCallback((id: string) => {
    setActiveStoryId(id);
  }, []);

  const handleDeactivate = useCallback(() => {
    setActiveStoryId(null);
  }, []);

  const handleRequestExpand = useCallback((story: StoryItem) => {
    setDialogStory(story);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setDialogStory(null);
  }, []);

  const shouldAnimate = isVisible && !reducedMotion;
  const showContent = isVisible || reducedMotion;

  return (
    <>
      <section
        ref={sectionRef}
        data-section="vertical-stories"
        className="relative w-full bg-forest-900 pt-[104px] pb-[112px] lg:pt-[128px] lg:pb-[144px] px-6 lg:px-8"
        id="historias"
      >
        <div className="w-full max-w-[1280px] mx-auto">

          {/* ── Cabeçalho Editorial ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-14 lg:mb-20 items-end">

            {/* Lado esquerdo: Eyebrow + Título (~7 colunas) */}
            <div className="lg:col-span-7">
              <p
                className={`font-body text-[12px] md:text-[13px] uppercase tracking-[0.26em] text-primary mb-[24px] transition-opacity duration-700 ${
                  shouldAnimate
                    ? "opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]"
                    : showContent ? "opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: "50ms" }}
              >
                {data.eyebrow}
              </p>

              <h2
                className={`font-display text-surface m-0 transition-opacity duration-700 ${
                  shouldAnimate
                    ? "opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]"
                    : showContent ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  animationDelay: "150ms",
                  fontSize: "clamp(2.75rem, 4.5vw, 4.25rem)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.025em",
                  maxWidth: "760px",
                  textWrap: "balance"
                }}
              >
                <span className="whitespace-pre-line">{data.title}</span>
              </h2>
            </div>

            {/* Lado direito: Texto de apoio (~5 colunas) */}
            <div className="lg:col-span-5 flex items-end">
              <p
                className={`font-body text-[16px] md:text-[17px] text-surface/95 max-w-[40ch] transition-opacity duration-700 ${
                  shouldAnimate
                    ? "opacity-0 animate-[fade-in-up_800ms_cubic-bezier(.22,1,.36,1)_forwards]"
                    : showContent ? "opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: "250ms", lineHeight: 1.6 }}
              >
                {data.text}
              </p>
            </div>
          </div>

          {/* ── Galeria Desktop: 3 cards assimétricos ── */}
          <div
            className="hidden lg:flex justify-center items-end gap-[30px]"
            onMouseLeave={handleContainerMouseLeave}
          >
            {stories.map((story, i) => {
              const isFeatured = i === 1;
              const delay = 350 + i * 100;
              // Card central (featured) é maior
              const cardWidth = isFeatured ? "350px" : "280px";

              return (
                <div
                  key={story.id}
                  className={`flex-shrink-0 transition-opacity duration-700 ${
                    shouldAnimate
                      ? "opacity-0 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards]"
                      : showContent ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${delay}ms`,
                    width: cardWidth,
                  }}
                >
                  <VerticalStoryCard
                    story={story}
                    size={isFeatured ? "featured" : "default"}
                    isActive={activeStoryId === story.id}
                    onActivate={handleActivate}
                    onDeactivate={handleDeactivate}
                    reducedMotion={reducedMotion}
                    onRequestExpand={handleRequestExpand}
                  />
                </div>
              );
            })}
          </div>

          {/* ── Galeria Mobile: Carrossel scroll-snap ── */}
          <div className="lg:hidden">
            <div
              ref={galleryRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 stories-scroll"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
              role="region"
              aria-label="Histórias verticais"
              tabIndex={0}
            >
              <style>{`.stories-scroll::-webkit-scrollbar { display: none; }`}</style>
              {stories.map((story, i) => {
                const delay = 350 + i * 100;
                return (
                  <div
                    key={story.id}
                    className={`snap-center flex-shrink-0 transition-opacity duration-700 ${
                      shouldAnimate
                        ? "opacity-0 animate-[fade-in-up_850ms_cubic-bezier(.22,1,.36,1)_forwards]"
                        : showContent ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      width: "min(80vw, 320px)",
                      animationDelay: `${delay}ms`,
                    }}
                  >
                    <VerticalStoryCard
                      story={story}
                      size={i === 1 ? "featured" : "default"}
                      isActive={activeStoryId === story.id}
                      onActivate={handleActivate}
                      onDeactivate={handleDeactivate}
                      reducedMotion={reducedMotion}
                      onRequestExpand={handleRequestExpand}
                    />
                  </div>
                );
              })}
            </div>

            {/* Indicador de progresso mobile */}
            <div className="flex items-center justify-center mt-4 gap-1" aria-live="polite" aria-atomic="true">
              <span className="font-body text-[12px] text-surface/50 tracking-wider">
                {currentSnap + 1} / {stories.length}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Modal de vídeo expandido */}
      <VerticalVideoDialog
        story={dialogStory}
        isOpen={!!dialogStory}
        onClose={handleCloseDialog}
      />
    </>
  );
}
