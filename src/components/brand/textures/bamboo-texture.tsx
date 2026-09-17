import type { SVGProps } from "react";

const looseLines = [86, 126, 168, 214, 262, 314];
const weaveLines = [520, 572, 624, 676, 728, 780, 832, 884];

export function BambooTexture({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1000 680" fill="none" aria-hidden="true" className={className} {...props}>
      <g stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" vectorEffect="non-scaling-stroke">
        {looseLines.map((y, index) => (
          <path key={y} d={`M0 ${y} C220 ${y - 55 + index * 8} 376 ${y + 118 - index * 5} 590 ${318 + index * 16}`} />
        ))}
        {weaveLines.map((x) => <path key={`a-${x}`} d={`M${x} 0 C${x - 52} 176 ${x + 36} 398 ${x - 34} 680`} />)}
        {weaveLines.map((x) => <path key={`b-${x}`} d={`M${x - 210} 680 C${x - 94} 455 ${x - 88} 235 ${x + 118} 0`} />)}
        <path d="M348 520 842 82M416 596 914 148M495 654 974 232" />
        <path d="M392 142 910 602M454 82 968 526M538 28 998 432" />
      </g>
    </svg>
  );
}
