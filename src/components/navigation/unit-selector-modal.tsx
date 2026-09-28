"use client";

import { useEffect, useRef, useCallback } from "react";
import { UNIDADES_JUNDU, UnidadeData } from "@/data/unidades";

interface UnitSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  actionType: "cardapio" | "reserva";
}

export function UnitSelectorModal({ isOpen, onClose, actionType }: UnitSelectorModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
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
      triggerRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const title = actionType === "cardapio" 
    ? "Selecione a Unidade para Ver o Cardápio" 
    : "Selecione a Unidade para Fazer sua Reserva";

  const subtitle = actionType === "cardapio"
    ? "Cada casa possui uma experiência gastronômica e bebidas autorais exclusivas."
    : "Escolha em qual casa do Jundu você deseja reservar sua mesa:";

  const unitsList: UnidadeData[] = Object.values(UNIDADES_JUNDU);

  const handleSelectUnit = (unit: UnidadeData) => {
    const targetUrl = actionType === "cardapio" ? unit.cardapioUrl : unit.reservaUrl;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-forest-900/90 backdrop-blur-md animate-[fade-in_300ms_ease-out_forwards]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog Box */}
      <dialog
        ref={dialogRef}
        open
        role="dialog"
        aria-modal="true"
        aria-labelledby="unit-modal-title"
        aria-describedby="unit-modal-subtitle"
        className="
          relative z-10 w-full max-w-[560px] 
          bg-forest-900 border border-forest-700/60 rounded-3xl 
          p-6 sm:p-8 md:p-10 shadow-2xl text-surface
          outline-none animate-[fade-in-up_350ms_cubic-bezier(.22,1,.36,1)_forwards]
        "
        tabIndex={-1}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute top-5 right-5 z-20
            w-10 h-10 rounded-full
            bg-forest-800 text-surface/70
            hover:bg-forest-700 hover:text-surface
            flex items-center justify-center
            transition-colors duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
          "
          aria-label="Fechar modal"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="mb-8 pr-8">
          <p className="font-body text-[11px] uppercase tracking-[0.25em] text-primary mb-3">
            {actionType === "cardapio" ? "CARDÁPIO AUTORAL" : "RESERVA ONLINE"}
          </p>
          <h2 id="unit-modal-title" className="font-display text-2xl sm:text-3xl text-surface leading-tight mb-2">
            {title}
          </h2>
          <p id="unit-modal-subtitle" className="font-body text-sm text-surface/70 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Unit Selection Cards */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {unitsList.map((unit) => (
            <button
              key={unit.id}
              onClick={() => handleSelectUnit(unit)}
              className="
                group w-full text-left p-4 sm:p-5 rounded-2xl
                bg-forest-800/80 hover:bg-forest-700/90
                border border-forest-700/40 hover:border-primary/50
                transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)]
                flex items-center justify-between gap-4
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
              "
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display text-lg sm:text-xl text-surface group-hover:text-primary transition-colors">
                    {unit.nome}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-forest-900/60 text-primary/80 border border-primary/20">
                    Ubatuba
                  </span>
                </div>
                {unit.subtitulo && (
                  <p className="font-body text-xs sm:text-sm text-surface/60 group-hover:text-surface/80 transition-colors">
                    {unit.subtitulo}
                  </p>
                )}
              </div>

              <div className="
                w-10 h-10 rounded-full 
                bg-forest-900/60 group-hover:bg-primary group-hover:text-forest-900
                text-surface flex items-center justify-center flex-shrink-0
                transition-colors duration-300
              ">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-0 group-hover:translate-x-0.5 transition-transform">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-6 pt-4 border-t border-forest-800 text-center">
          <p className="font-body text-xs text-surface/50">
            {actionType === "cardapio" 
              ? "Você será redirecionado para o cardápio digital (LiveMenu)."
              : "Você será redirecionado para o sistema oficial de reservas (Tagme)."}
          </p>
        </div>
      </dialog>
    </div>
  );
}
