"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "@/data/site";
import { UNIDADES_JUNDU, UnidadeData } from "@/data/unidades";
import { UnitSelectorModal } from "./unit-selector-modal";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    actionType: "cardapio" | "reserva";
  }>({
    isOpen: false,
    actionType: "reserva"
  });

  const pathname = usePathname();
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

  // Determine if current page is a specific unit
  let activeUnit: UnidadeData | null = null;
  if (pathname.includes("/unidades/itagua")) {
    activeUnit = UNIDADES_JUNDU.itagua;
  } else if (pathname.includes("/unidades/prumirim")) {
    activeUnit = UNIDADES_JUNDU.prumirim;
  } else if (pathname.includes("/unidades/praia-grande")) {
    activeUnit = UNIDADES_JUNDU.praiaGrande;
  }

  const toggleMenu = () => setIsOpen(!isOpen);

  const openModalFromMenu = (actionType: "cardapio" | "reserva") => {
    setIsOpen(false);
    setModalState({ isOpen: true, actionType });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <>
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
            <ul className="space-y-5">
              {siteData.navigation.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-2xl text-surface block focus:outline-none focus-visible:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 pt-6 border-t border-forest-800">
              <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-4">Nossas Unidades</p>
              <ul className="font-body text-base space-y-3">
                {Object.values(UNIDADES_JUNDU).map(unit => (
                  <li key={unit.id}>
                    <Link
                      href={unit.slug}
                      onClick={() => setIsOpen(false)}
                      className="text-surface/90 hover:text-primary transition-colors flex items-center justify-between"
                    >
                      <span>{unit.nome}</span>
                      <span className="text-xs text-primary/70">Ver casa →</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto pt-6 border-t border-forest-800 flex flex-col gap-3">
              {activeUnit ? (
                <>
                  <a
                    href={activeUnit.cardapioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="w-full font-body text-sm font-semibold border border-surface/30 text-surface py-3.5 text-center rounded-xl hover:bg-surface hover:text-forest-900 transition-colors"
                  >
                    Ver Cardápio ({activeUnit.nome})
                  </a>
                  <a
                    href={activeUnit.reservaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="w-full font-body text-sm font-bold bg-primary text-forest-900 py-3.5 text-center rounded-xl hover:bg-primary-hover transition-colors"
                  >
                    Reservar Mesa ({activeUnit.nome})
                  </a>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => openModalFromMenu("cardapio")}
                    className="w-full font-body text-sm font-semibold border border-surface/30 text-surface py-3.5 text-center rounded-xl hover:bg-surface hover:text-forest-900 transition-colors"
                  >
                    Ver Cardápio
                  </button>
                  <button
                    type="button"
                    onClick={() => openModalFromMenu("reserva")}
                    className="w-full font-body text-sm font-bold bg-primary text-forest-900 py-3.5 text-center rounded-xl hover:bg-primary-hover transition-colors"
                  >
                    Reservar Mesa
                  </button>
                </>
              )}
            </div>
          </nav>
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
