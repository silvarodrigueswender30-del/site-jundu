// Ícone da flor botânica Jundu — extraído fiel do ornamento decorativo em editorial-intro.tsx
// Os dois paths (pétalas cruzadas) + círculo central formam a flor usada na identidade visual da marca.
// NÃO é uma recriação aproximada: é o mesmo shape exato já aprovado e em uso no site.

interface JunduFlowerIconProps {
  className?: string;
  size?: number;
}

export function JunduFlowerIcon({ className, size = 18 }: JunduFlowerIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Pétala vertical (rosa blossom da marca) */}
      <path
        d="M32 12C32 12 42 22 42 32C42 42 32 32 32 32C32 32 22 42 22 32C22 22 32 12 32 12Z"
        fill="currentColor"
        className="opacity-70"
      />
      {/* Pétala horizontal (violeta da marca) */}
      <path
        d="M52 32C52 32 42 42 32 42C22 42 32 32 32 32C32 32 22 22 32 22C42 22 52 32 52 32Z"
        fill="currentColor"
        className="opacity-55"
      />
      {/* Miolo central */}
      <circle cx="32" cy="32" r="6" fill="currentColor" className="opacity-80" />
    </svg>
  );
}
