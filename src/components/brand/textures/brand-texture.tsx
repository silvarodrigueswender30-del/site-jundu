import type { ComponentProps } from "react";
import { BambooTexture } from "./bamboo-texture";
import { RootTexture } from "./root-texture";
import { TerritoryTexture } from "./territory-texture";

type BrandTextureProps = Omit<ComponentProps<"div">, "children"> & {
  variant: "territory" | "bamboo" | "roots";
  tone?: "forest" | "cream" | "sand";
  opacity?: "subtle" | "soft" | "visible";
};

const tones = {
  forest: "text-forest-700",
  cream: "text-surface",
  sand: "text-accent-amber",
};

const opacities = {
  subtle: "opacity-[var(--texture-opacity-subtle)]",
  soft: "opacity-[var(--texture-opacity-soft)]",
  visible: "opacity-[var(--texture-opacity-visible)]",
};

export function BrandTexture({ variant, tone = "forest", opacity = "soft", className = "", ...props }: BrandTextureProps) {
  const textureClassName = `h-full w-full ${tones[tone]}`;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none ${opacities[opacity]} ${className}`}
      {...props}
    >
      {variant === "territory" && <TerritoryTexture className={textureClassName} />}
      {variant === "bamboo" && <BambooTexture className={textureClassName} />}
      {variant === "roots" && <RootTexture className={textureClassName} />}
    </div>
  );
}
