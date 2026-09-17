import React from 'react';
import { BrandTexture, BrandTextureProps } from './brand-texture';

export function BambooTexture({ className, opacity = "soft", ...props }: React.ComponentProps<"div"> & { opacity?: BrandTextureProps["opacity"] }) {
  return (
    <BrandTexture
      variant="bamboo"
      tone="forest"
      opacity={opacity}
      className={className}
      {...props}
    />
  );
}
