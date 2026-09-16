"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { siteData } from "@/data/site";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden flex items-center">
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label="Menu principal"
        className="w-11 h-11 flex items-center justify-center text-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-forest-900/90 z-40 transition-opacity duration-[320ms] ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        id="mobile-menu-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
        className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-forest-900 z-50 flex flex-col transition-transform duration-[320ms] ease-[cubic-bezier(.22,1,.36,1)] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 h-[72px] border-b border-forest-800">
          <img src="/brand/logo_1120.webp" alt="Jundu" className="h-8 w-auto ml-2 opacity-90" />
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Fechar menu"
            className="w-11 h-11 flex items-center justify-center text-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
          <ul className="space-y-6">
            {siteData.navigation.map((item) => (
              <li key={item.label}>
                <Link 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-h4 text-surface block focus:outline-none focus-visible:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pt-8 border-t border-forest-800">
            <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-4">Unidades</p>
            <ul className="font-body text-sm text-sage-300 space-y-3">
              {siteData.units.map(unit => (
                <li key={unit}>{unit}</li>
              ))}
            </ul>
          </div>
          
          <a
            href={siteData.ctas.reserve.href}
            onClick={() => setIsOpen(false)}
            className="w-full font-body text-sm font-bold bg-primary text-forest-900 py-4 text-center rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-surface"
          >
            {siteData.ctas.reserve.label}
          </a>
        </nav>
      </div>
    </div>
  );
}
