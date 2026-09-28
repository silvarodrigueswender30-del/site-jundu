"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "@/data/site";
import { UNIDADES_JUNDU, UnidadeData } from "@/data/unidades";
import { MobileMenu } from "./mobile-menu";
import { UnitSelectorModal } from "./unit-selector-modal";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    actionType: "cardapio" | "reserva";
  }>({
    isOpen: false,
    actionType: "reserva"
  });

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Identify if current page is a specific unit
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-[320ms] ease-[cubic-bezier(.22,1,.36,1)] ${
          scrolled ? "bg-forest-900/95 backdrop-blur-md border-b border-forest-800 shadow-sm" : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 h-[72px] lg:h-[80px] flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1">
            <img 
              src="/brand/logo_1120.webp" 
              alt="Jundu Ubatuba" 
              className="h-10 w-auto opacity-90 object-contain"
              width={140}
              height={70}
            />
          </Link>
          
          <nav className="hidden lg:flex items-center gap-7">
            {siteData.navigation.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="font-body text-sm text-surface hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1 drop-shadow-md"
              >
                {item.label}
              </Link>
            ))}

            {/* Header Action Buttons (Cardápio & Reservar) */}
            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-surface/20">
              {/* Cardápio Button */}
              {activeUnit ? (
                <a
                  href={activeUnit.cardapioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    font-body text-sm font-semibold 
                    px-5 py-2.5 rounded-full 
                    border border-surface/30 text-surface 
                    hover:bg-surface hover:text-forest-900 transition-colors 
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  "
                >
                  Cardápio
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => openModal("cardapio")}
                  className="
                    font-body text-sm font-semibold 
                    px-5 py-2.5 rounded-full 
                    border border-surface/30 text-surface 
                    hover:bg-surface hover:text-forest-900 transition-colors 
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  "
                >
                  Cardápio
                </button>
              )}

              {/* Reservar Button */}
              {activeUnit ? (
                <a
                  href={activeUnit.reservaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    font-body text-sm font-bold 
                    bg-primary text-forest-900 
                    px-6 py-2.5 rounded-full 
                    hover:bg-primary-hover transition-colors 
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900
                  "
                >
                  Reservar Mesa
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => openModal("reserva")}
                  className="
                    font-body text-sm font-bold 
                    bg-primary text-forest-900 
                    px-6 py-2.5 rounded-full 
                    hover:bg-primary-hover transition-colors 
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900
                  "
                >
                  Reservar Mesa
                </button>
              )}
            </div>
          </nav>

          <MobileMenu />
        </div>
      </header>

      <UnitSelectorModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        actionType={modalState.actionType}
      />
    </>
  );
}
