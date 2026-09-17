import type { SVGProps } from "react";

type RootTextureProps = SVGProps<SVGSVGElement> & {
  showNodes?: boolean;
};

const branches = [
  "M552 304 C493 267 430 222 344 185 C270 153 181 143 52 154",
  "M552 304 C480 301 405 288 330 259 C240 224 156 220 36 242",
  "M552 304 C476 340 402 364 319 369 C217 375 128 401 28 466",
  "M552 304 C505 374 468 436 447 520 C430 592 397 648 329 704",
  "M552 304 C558 387 575 459 618 528 C655 589 669 653 657 732",
  "M552 304 C622 350 695 376 786 378 C886 381 964 419 1038 486",
  "M552 304 C625 292 696 256 759 198 C825 139 913 111 1048 112",
  "M552 304 C577 233 594 165 586 69 C582 41 585 20 596 0",
  "M425 365 C382 421 363 472 364 541 C365 598 344 652 292 711",
  "M425 365 C349 344 274 344 202 367 C139 387 74 382 0 354",
  "M618 528 C705 521 777 532 844 569 C918 610 983 618 1080 596",
  "M618 528 C621 598 606 661 571 720 C562 736 556 752 554 768",
  "M330 259 C289 207 236 170 165 145 C115 127 81 102 54 68",
  "M759 198 C807 212 849 240 884 284 C924 335 977 360 1080 357",
  "M344 185 C319 132 314 79 327 20",
  "M786 378 C827 333 855 288 862 233 C869 182 893 139 941 96",
  "M447 520 C377 510 314 521 258 559 C205 595 144 613 63 610",
  "M657 732 C707 676 759 649 823 648 C906 647 972 672 1053 725",
];

const nodes = [
  [552, 304, 8],
  [425, 365, 5],
  [618, 528, 7],
  [330, 259, 4],
  [759, 198, 5],
] as const;

export function RootTexture({ showNodes = true, className, ...props }: RootTextureProps) {
  return (
    <svg
      viewBox="0 0 1080 768"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      >
        {branches.map((path) => <path key={path} d={path} />)}
      </g>
      {showNodes && (
        <g className="text-accent-blossom" fill="currentColor">
          {nodes.map(([cx, cy, r]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />)}
        </g>
      )}
    </svg>
  );
}
