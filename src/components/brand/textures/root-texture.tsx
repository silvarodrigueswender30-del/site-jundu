import React from 'react';
import { BrandTexture } from './brand-texture';

export function RootTexture({ className, opacity = 0.22, ...props }: React.ComponentProps<"div"> & { opacity?: number }) {
  return (
    <BrandTexture
      variant="roots"
      tone="forest"
      opacity={opacity}
      className={className}
      {...props}
    />
  );
}
