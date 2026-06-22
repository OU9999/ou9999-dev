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
      className="relative mt-10 aspect-[16/9] w-full overflow-visible motion-reduce:!transform-none motion-reduce:!opacity-100 md:mt-12"
      data-testid="brand-brush-mark"
      initial="hidden"
      animate="visible"
      variants={brandBrushMarkPreset}
    >
      <motion.svg
        className="h-full w-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1200 675"
      >
        <defs>
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
      </motion.svg>
    </motion.div>
  );
};

export { BrandBrushMark };
