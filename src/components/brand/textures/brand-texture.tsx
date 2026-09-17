import React from 'react';

export type BrandTextureProps = {
  variant: "territory" | "bamboo" | "roots";
  tone?: "forest" | "cream" | "sand" | "pink";
  opacity?: "subtle" | "soft" | "visible" | number;
  className?: string;
};

const toneMap: Record<string, string> = {
  forest: "var(--color-forest-700)",
  cream: "var(--color-background)",
  sand: "var(--color-surface)",
  pink: "var(--color-accent-blossom)"
};

const variantMap: Record<string, string> = {
  roots: "/brand/textures/restinga.svg",
  bamboo: "/brand/textures/bamboo.svg",
  territory: "/brand/textures/territory.svg"
};

const opacityMap: Record<string, string> = {
  subtle: "var(--texture-opacity-subtle)",
  soft: "var(--texture-opacity-soft)",
  visible: "var(--texture-opacity-visible)"
};

export function BrandTexture({ variant, tone = "forest", opacity = "soft", className = "" }: BrandTextureProps) {
  const imageUrl = variantMap[variant];
  const color = toneMap[tone] || toneMap.forest;
  
  let opacityValue: number | string = opacity;
  if (typeof opacity === "string" && opacityMap[opacity]) {
    opacityValue = opacityMap[opacity];
  }

  return (
    <div
      aria-hidden="true"
      className={`brand-texture ${className}`}
      style={{
        "--texture-image": `url('${imageUrl}')`,
        "--texture-color": color,
        opacity: opacityValue
      } as React.CSSProperties}
    />
  );
}
