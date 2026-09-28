"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { UNIDADES_JUNDU, UnidadeData } from "@/data/unidades";
import { UnitSelectorModal } from "./unit-selector-modal";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    actionType: "cardapio" | "reserva";
  }>({
    isOpen: false,
    actionType: "reserva"
  });

  const pathname = usePathname();

  useEffect(() => {
    // Only show after initial scroll (approx 300px)
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if current page is a specific unit
  let activeUnit: UnidadeData | null = null;
  if (pathname.includes("/unidades/itagua")) {
    activeUnit = UNIDADES_JUNDU.itagua;
  } else if (pathname.includes("/unidades/prumirim")) {
    activeUnit = UNIDADES_JUNDU.prumirim;
  } else if (pathname.includes("/unidades/praia-grande")) {
    activeUnit = UNIDADES_JUNDU.praiaGrande;
  }

  const openModal = (actionType: "cardapio" | "reserva") => {
    setModalState({ isOpen: true, actionType });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  if (!visible) return null;

  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-forest-900/95 backdrop-blur-md border-t border-forest-800 p-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] shadow-[0_-4px_24px_rgba(10,26,18,0.5)] animate-[fade-in_0.3s_ease-out]">
        <div className="grid grid-cols-2 gap-3 max-w-[500px] mx-auto">
          {/* Cardápio Button */}
          {activeUnit ? (
            <a
              href={activeUnit.cardapioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2
                font-body text-sm font-bold 
                bg-forest-800 text-surface border border-forest-700/80
                py-3 px-4 rounded-xl 
                hover:bg-forest-700 transition-colors text-center
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
              "
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              <span>Cardápio</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={() => openModal("cardapio")}
              className="
                flex items-center justify-center gap-2
                font-body text-sm font-bold 
                bg-forest-800 text-surface border border-forest-700/80
                py-3 px-4 rounded-xl 
                hover:bg-forest-700 transition-colors text-center
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
              "
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              <span>Cardápio</span>
            </button>
          )}

          {/* Reservar Button */}
          {activeUnit ? (
            <a
              href={activeUnit.reservaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2
                font-body text-sm font-bold 
                bg-primary text-forest-900 
                py-3 px-4 rounded-xl 
                hover:bg-primary-hover transition-colors text-center
                focus:outline-none focus-visible:ring-2 focus-visible:ring-surface
              "
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                <line x1="16" x2="16" y1="2" y2="6"/>
                <line x1="8" x2="8" y1="2" y2="6"/>
                <line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
              <span>Reservar</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={() => openModal("reserva")}
              className="
                flex items-center justify-center gap-2
                font-body text-sm font-bold 
                bg-primary text-forest-900 
                py-3 px-4 rounded-xl 
                hover:bg-primary-hover transition-colors text-center
                focus:outline-none focus-visible:ring-2 focus-visible:ring-surface
              "
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                <line x1="16" x2="16" y1="2" y2="6"/>
                <line x1="8" x2="8" y1="2" y2="6"/>
                <line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
              <span>Reservar</span>
            </button>
          )}
        </div>
      </div>

      <UnitSelectorModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        actionType={modalState.actionType}
      />
    </>
  );
}
