"use client";

import { motion } from "motion/react";
import {
  brandBrushMarkPreset,
  brandBrushStrokeMaskPresets,
} from "@/constant/motion-preset";

interface BrushBand {
  clipId: string;
  maskId: string;
  y: number;
  height: number;
}

const brandBrushBackgroundSvgHref =
  "/imgs/header/brand-brush-stack-background-vector.svg";
const brandBrushSvgHref = "/imgs/header/brand-brush-stack-vector.svg";

const brushBands: BrushBand[] = [
  {
    clipId: "brand-brush-band-top",
    maskId: "brand-brush-mask-top",
    y: 52,
    height: 158,
  },
  {
    clipId: "brand-brush-band-second",
    maskId: "brand-brush-mask-second",
    y: 184,
    height: 182,
  },
  {
    clipId: "brand-brush-band-third",
    maskId: "brand-brush-mask-third",
    y: 322,
    height: 194,
  },
  {
    clipId: "brand-brush-band-bottom",
    maskId: "brand-brush-mask-bottom",
    y: 482,
    height: 164,
  },
];

const BrandBrushMark = () => {
  return (
    <motion.div
      aria-hidden="true"
      className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-lg border-1 border-mineral-blue/20 bg-mineral-brush-soft shadow-[0_28px_90px_rgb(4_8_8/0.34)] ring-1 ring-mineral-bone/5 motion-reduce:!transform-none motion-reduce:!opacity-100 md:mt-12"
      data-testid="brand-brush-mark"
      variants={brandBrushMarkPreset}
    >
      <motion.svg
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1200 675"
      >
        <defs>
          <filter
            id="brand-brush-canvas-grain"
            x="-6%"
            y="-6%"
            width="112%"
            height="112%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.68"
              numOctaves="5"
              seed="8"
              result="grain"
            />
            <feColorMatrix
              in="grain"
              type="matrix"
              values="0 0 0 0 0.052 0 0 0 0 0.054 0 0 0 0 0.054 0 0 0 0.28 0"
            />
          </filter>
          <pattern
            id="brand-brush-canvas-thread"
            width="12"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 3H12"
              stroke="#E7ECEC"
              strokeOpacity="0.035"
            />
            <path d="M3 0V10" stroke="#000000" strokeOpacity="0.22" />
          </pattern>
          {brushBands.map((band) => (
            <clipPath key={band.clipId} id={band.clipId}>
              <rect x="0" y={band.y} width="1200" height={band.height} />
            </clipPath>
          ))}
          {brushBands.map((band, index) => (
            <mask key={band.maskId} id={band.maskId} maskUnits="userSpaceOnUse">
              <motion.rect
                x="0"
                y="0"
                height="675"
                fill="#FFFFFF"
                variants={brandBrushStrokeMaskPresets[index]}
              />
            </mask>
          ))}
        </defs>

        <rect width="1200" height="675" fill="#080909" />
        <rect
          width="1200"
          height="675"
          fill="#101111"
          filter="url(#brand-brush-canvas-grain)"
          opacity="0.76"
        />
        <rect
          width="1200"
          height="675"
          fill="url(#brand-brush-canvas-thread)"
          opacity="0.32"
        />
        <image
          href={brandBrushBackgroundSvgHref}
          width="1200"
          height="675"
          preserveAspectRatio="xMidYMid meet"
        />
        {brushBands.map((band) => (
          <g
            key={band.maskId}
            clipPath={"url(#" + band.clipId + ")"}
            mask={"url(#" + band.maskId + ")"}
          >
            <image
              href={brandBrushSvgHref}
              width="1200"
              height="675"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        ))}
        <rect
          width="1200"
          height="675"
          fill="none"
          stroke="#A2ADB3"
          strokeOpacity="0.08"
        />
      </motion.svg>
    </motion.div>
  );
};

export { BrandBrushMark };
