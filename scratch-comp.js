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
    compositionClasses = 'hidden md:block md:w-[30%] md:right-[-4%] lg:w-[42%] lg:right-[-6%] opacity-100 text-background';
  } else if (composition === 'soft') {
    compositionClasses = 'hidden md:block md:w-[30%] md:right-[-4%] lg:w-[42%] lg:right-[-6%] opacity-[0.60] text-background';
  } else if (composition === 'fragment') {
    compositionClasses = 'hidden md:block md:w-[20%] md:h-[65%] md:right-0 md:bottom-0 lg:w-[25%] lg:h-[70%] opacity-100 text-background';
  }

  return (
    <div
      aria-hidden="true"
      className={\`absolute top-0 bottom-0 pointer-events-none select-none z-0 \${compositionClasses}\`}
    >
      <svg
        viewBox="0 0 2752 1536"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover object-right text-current"
      >
        ${svg.replace(/<svg[^>]+>/, '').replace(/<\/svg>/, '')}
      </svg>
    </div>
  );
}
`;

fs.mkdirSync('src/components/brand/artwork', { recursive: true });
fs.writeFileSync('src/components/brand/artwork/territory-artwork.tsx', comp);
