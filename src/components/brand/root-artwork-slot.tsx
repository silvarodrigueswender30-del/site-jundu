import { RootTexture } from "@/components/brand/textures/root-texture";

export interface RootArtworkProps {
  lightSrc?: string;
  darkSrc?: string;
  alt?: string;
  opacity?: number;
}

export function RootArtworkSlot({ artwork }: { artwork?: RootArtworkProps }) {
  void artwork;

  return (
    <div
      className="relative h-[250px] w-full overflow-hidden sm:h-[360px] lg:h-[540px]"
      data-artwork="root-network-approved"
    >
      <RootTexture
        className="absolute left-[6%] top-[-18%] h-[142%] w-[142%] max-w-none text-forest-700 opacity-[0.26] sm:left-0 sm:top-[-13%] sm:h-[132%] sm:w-[132%] lg:left-[-4%] lg:top-[-10%] lg:h-[125%] lg:w-[125%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"
      />
    </div>
  );
}
