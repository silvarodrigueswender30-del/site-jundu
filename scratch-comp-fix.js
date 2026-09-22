const fs = require('fs');

const svg = fs.readFileSync('scratch-territory-clean.svg', 'utf8');

const comp = `import React from 'react';

export type TerritoryComposition = 'strong' | 'soft' | 'fragment';

interface TerritoryArtworkProps {
  composition: TerritoryComposition;
}

export function TerritoryArtwork({ composition }: TerritoryArtworkProps) {
  let compositionClasses = '';
  
  if (composition === 'strong') {
    compositionClasses = 'hidden md:block md:top-0 md:bottom-0 md:right-[-4%] md:w-[30%] md:opacity-100 lg:right-[-6%] lg:w-[42%]';
  } else if (composition === 'soft') {
    compositionClasses = 'hidden md:block md:top-0 md:bottom-0 md:right-[-4%] md:w-[30%] md:opacity-[0.60] lg:right-[-6%] lg:w-[42%]';
  } else if (composition === 'fragment') {
    compositionClasses = 'hidden md:block md:top-auto md:bottom-0 md:right-0 md:w-[20%] md:h-[65%] md:opacity-100 lg:w-[25%] lg:h-[70%]';
  }

  return (
    <div
      aria-hidden="true"
      className={\`absolute pointer-events-none select-none z-0 text-forest-900 \${compositionClasses}\`}
    >
      <svg
        viewBox="0 0 2752 1536"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
        className="w-full h-full text-current"
      >
        ${svg.replace(/<svg[^>]+>/, '').replace(/<\/svg>/, '')}
      </svg>
    </div>
  );
}
`;

fs.writeFileSync('src/components/brand/artwork/territory-artwork.tsx', comp);
