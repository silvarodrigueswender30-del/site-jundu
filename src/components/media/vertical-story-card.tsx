"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { StoryItem } from "@/data/site";

interface VerticalStoryCardProps {
  story: StoryItem;
  size: "default" | "featured";
  isActive: boolean;
  onActivate: (id: string) => void;
  onDeactivate: () => void;
  reducedMotion: boolean;
  onRequestExpand: (story: StoryItem) => void;
}

export function VerticalStoryCard({
  story,
  size,
  isActive,
  onActivate,
  onDeactivate,
  reducedMotion,
  onRequestExpand,
}: VerticalStoryCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const hasVideo = !!story.videoSrc;
  const playButtonSize = size === "featured" ? 60 : 52;

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isActive && videoRef.current && isPlaying) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);

  const startPlayback = useCallback(async () => {
    if (!videoRef.current || !hasVideo || hasError) return;
    setIsLoading(true);
    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [hasVideo, hasError]);

  const stopPlayback = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  }, []);

  const handleClick = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }

    if (!hasVideo) {
      onRequestExpand(story);
      return;
    }

    if (isActive && isPlaying) {
      onRequestExpand(story);
    } else {
      onActivate(story.id);
      startPlayback();
    }
  };

  const handleMouseEnter = () => {
    if (reducedMotion || !hasVideo) return;
    hoverTimerRef.current = setTimeout(() => {
      if (!isActive) {
        onActivate(story.id);
        startPlayback();
      }
    }, 400);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    if (isActive) {
      stopPlayback();
      onDeactivate();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={`
        relative w-full overflow-hidden cursor-pointer group
        transition-transform duration-[640ms] ease-[cubic-bezier(.22,1,.36,1)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900
        ${!reducedMotion ? "hover:scale-[1.015]" : ""}
        ${isActive && isPlaying ? "ring-2 ring-primary ring-offset-2 ring-offset-forest-900" : ""}
      `}
      style={{
        aspectRatio: "9 / 16",
        borderRadius: "14px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="group"
      aria-label={`${story.category}: ${story.title}`}
    >
      {/* Poster */}
      <Image
        src={story.poster}
        alt={story.alt}
        fill
        sizes={size === "featured" ? "370px" : "280px"}
        className={`
          object-cover transition-transform duration-[850ms] ease-[cubic-bezier(.22,1,.36,1)]
          ${!reducedMotion ? "group-hover:scale-[1.035]" : ""}
        `}
        style={{ objectPosition: story.objectPosition }}
      />

      {/* Video element */}
      {hasVideo && (
        <video
          ref={videoRef}
          src={story.videoSrc}
          preload="none"
          playsInline
          muted
          loop
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-500
            ${isPlaying ? "opacity-100" : "opacity-0"}
          `}
          style={{ objectPosition: story.objectPosition }}
          onError={() => setHasError(true)}
          aria-hidden="true"
        />
      )}

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/15 to-forest-900/10 pointer-events-none" />
      <div className="absolute inset-0 bg-forest-900/10 pointer-events-none" />

      {/* Category (top) */}
      <div className="absolute top-0 left-0 right-0 p-5">
        <span className="font-body text-[11px] uppercase tracking-[0.24em] text-lime-200/90">
          {story.category}
        </span>
      </div>

      {/* Play button (center) */}
      <button
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10
          rounded-full flex items-center justify-center
          bg-surface/90 text-forest-900
          transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)]
          hover:bg-surface hover:scale-105
          focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900
          ${isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
        style={{ width: playButtonSize, height: playButtonSize }}
        aria-label={`Reproduzir ${story.title}`}
        aria-pressed={isPlaying}
      >
        {isLoading ? (
          <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="translate-x-[2px]">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Title + Duration (bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
        <h3
          className={`
            font-display text-surface m-0
            transition-transform duration-300
            ${!reducedMotion ? "group-hover:-translate-y-1" : ""}
          `}
          style={{
            fontSize: size === "featured" ? "clamp(1.5rem, 2vw, 2rem)" : "clamp(1.25rem, 1.8vw, 1.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          {story.title}
        </h3>
        {story.duration && (
          <span className="font-body text-[11px] text-surface/60 tracking-wide">
            {story.duration}
          </span>
        )}
      </div>
    </div>
  );
}
