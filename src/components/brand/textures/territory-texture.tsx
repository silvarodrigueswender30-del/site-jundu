import React from 'react';
import { BrandTexture, BrandTextureProps } from './brand-texture';

export function TerritoryTexture({ className, opacity = "subtle", ...props }: React.ComponentProps<"div"> & { opacity?: BrandTextureProps["opacity"] }) {
  return (
    <BrandTexture
      variant="territory"
      tone="forest"
      opacity={opacity}
      className={className}
      {...props}
    />
  );
}
