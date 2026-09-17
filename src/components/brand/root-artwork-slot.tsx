import React from 'react';

export interface RootArtworkProps {
  lightSrc?: string;
  darkSrc?: string;
  alt?: string;
  opacity?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function RootArtworkSlot({ artwork }: { artwork?: RootArtworkProps }) {
  // Arte botânica definitiva pendente de curadoria.
  // Não substituir por ilustração genérica.
  return (
    <div 
      className="relative w-full h-[280px] sm:h-[380px] lg:h-[495px] flex items-center justify-center overflow-hidden z-10"
      data-artwork="pending-root-curation"
    >
      {/* Espaço negativo intencional preparado para o SVG futuro */}
    </div>
  );
}
