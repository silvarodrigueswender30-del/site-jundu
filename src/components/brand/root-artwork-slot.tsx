import { BrandTexture } from "@/components/brand/textures/brand-texture";

export interface RootArtworkProps {
  lightSrc?: string;
  darkSrc?: string;
  alt?: string;
  opacity?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function RootArtworkSlot({ artwork }: { artwork?: RootArtworkProps }) {
  return (
    <div
      className="relative h-[250px] w-full overflow-hidden sm:h-[360px] lg:h-[540px]"
      data-artwork="root-network-approved"
    >
      <BrandTexture
        variant="roots"
        tone="forest"
        opacity={0.22}
        className="absolute left-[15%] top-[10%] h-[150%] w-[150%] sm:left-[10%] sm:top-[5%] sm:h-[130%] sm:w-[130%] lg:left-[5%] lg:top-[5%] lg:h-[120%] lg:w-[120%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/3 lg:w-1/4 bg-gradient-to-r from-background to-transparent"
      />
    </div>
  );
}
