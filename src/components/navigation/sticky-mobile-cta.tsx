"use client";

import { useState, useEffect } from "react";
import { siteData } from "@/data/site";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show after the hero section (approx 100vh)
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-forest-900/95 backdrop-blur-md border-t border-forest-800 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-4px_24px_rgba(10,26,18,0.4)] animate-[fade-in_0.3s_ease-out]">
      <a
        href={siteData.ctas.reserve.href}
        className="block w-full font-body text-base font-bold bg-primary text-forest-900 py-3.5 text-center rounded-xl hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-surface transition-colors"
      >
        {siteData.ctas.reserve.label}
      </a>
    </div>
  );
}
