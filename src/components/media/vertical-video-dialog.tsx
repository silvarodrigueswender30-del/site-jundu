"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { StoryItem } from "@/data/site";

interface VerticalVideoDialogProps {
  story: StoryItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VerticalVideoDialog({ story, isOpen, onClose }: VerticalVideoDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      dialogRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      // Return focus to the original trigger
      triggerRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !story) return null;

  const hasVideo = !!story.videoSrc;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      role="presentation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-forest-900/95 animate-[fade-in_300ms_ease-out_forwards]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <dialog
        ref={dialogRef}
        open
        role="dialog"
        aria-modal="true"
        aria-label={`${story.title} — ${story.category}`}
        className="relative z-10 bg-transparent border-none p-0 m-0 max-h-[90vh] max-w-[min(420px,90vw)] outline-none"
        tabIndex={-1}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="
            absolute -top-12 right-0 z-20 
            w-10 h-10 rounded-full 
            bg-surface/20 text-surface
            flex items-center justify-center
            transition-colors duration-200
            hover:bg-surface/40
            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
          "
          aria-label="Fechar vídeo"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M2 2L14 14M14 2L2 14" />
          </svg>
        </button>

        {/* Content */}
        <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "9 / 16" }}>
          {hasVideo ? (
            <video
              ref={videoRef}
              src={story.videoSrc}
              poster={story.poster}
              playsInline
              controls={false}
              autoPlay
              className="w-full h-full object-cover"
              style={{ objectPosition: story.objectPosition }}
            />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={story.poster}
              alt={story.alt}
              className="w-full h-full object-cover"
              style={{ objectPosition: story.objectPosition }}
            />
          )}

          {/* Title overlay inside dialog */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-forest-900/80 to-transparent">
            <span className="font-body text-[11px] uppercase tracking-[0.24em] text-lime-200/90 block mb-2">
              {story.category}
            </span>
            <h3 className="font-display text-surface text-2xl" style={{ lineHeight: 1.1 }}>
              {story.title}
            </h3>
          </div>
        </div>
      </dialog>
    </div>
  );
}
