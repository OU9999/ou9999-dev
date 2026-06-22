"use client";

import { motion } from "motion/react";
import {
  brandBrushMarkPreset,
  brandBrushStrokeMaskPresets,
} from "@/constant/motion-preset";
import { cn } from "@/utils/tailwind-util";

type BrandBrushVariant = "texture" | "clean";

interface BrandBrushMarkProps {
  className?: string;
  variant?: BrandBrushVariant;
}

interface BrushBand {
  layerId: string;
  clipId: string;
  maskId: string;
  enterY: number;
  y: number;
  height: number;
}

const brandBrushSvgHrefByVariant: Record<BrandBrushVariant, string> = {
  texture: "/imgs/header/brand-brush-stack-vector.svg",
  clean: "/imgs/header/brand-brush-stack-clean-vector.svg",
};

const brushBands: BrushBand[] = [
  {
    layerId: "top",
    clipId: "brand-brush-band-top",
    maskId: "brand-brush-mask-top",
    enterY: -8,
    y: 52,
    height: 158,
  },
  {
    layerId: "second",
    clipId: "brand-brush-band-second",
    maskId: "brand-brush-mask-second",
    enterY: -3,
    y: 184,
    height: 182,
  },
  {
    layerId: "third",
    clipId: "brand-brush-band-third",
    maskId: "brand-brush-mask-third",
    enterY: 4,
    y: 322,
    height: 194,
  },
  {
    layerId: "bottom",
    clipId: "brand-brush-band-bottom",
    maskId: "brand-brush-mask-bottom",
    enterY: 9,
    y: 482,
    height: 164,
  },
];

const BrandBrushMark = ({
  className,
  variant = "texture",
}: BrandBrushMarkProps) => {
  const brandBrushSvgHref = brandBrushSvgHrefByVariant[variant];
  const idPrefix = "brand-brush-" + variant;

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "relative mt-10 aspect-[16/9] w-full overflow-visible motion-reduce:!transform-none motion-reduce:!opacity-100 md:mt-12",
        className
      )}
      data-testid={"brand-brush-mark-" + variant}
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
          {brushBands.map((band) => {
            const clipId = idPrefix + "-" + band.clipId;

            return (
              <clipPath key={band.clipId} id={clipId}>
                <rect x="0" y={band.y} width="1200" height={band.height} />
              </clipPath>
            );
          })}
          {brushBands.map((band, index) => {
            const maskId = idPrefix + "-" + band.maskId;
            const transition =
              brandBrushStrokeMaskPresets[index].visible.transition;
            const begin = transition.delay + "s";
            const duration = transition.duration + "s";

            return (
              <mask key={band.maskId} id={maskId} maskUnits="userSpaceOnUse">
                <rect
                  x="-1200"
                  y="0"
                  width="1200"
                  height="675"
                  fill="#FFFFFF"
                >
                  <animate
                    attributeName="x"
                    begin={begin}
                    calcMode="spline"
                    dur={duration}
                    fill="freeze"
                    from="-1200"
                    keySplines="0.8 0 0.2 1"
                    keyTimes="0;1"
                    to="0"
                  />
                </rect>
              </mask>
            );
          })}
        </defs>

        {brushBands.map((band, index) => {
          const clipId = idPrefix + "-" + band.clipId;
          const maskId = idPrefix + "-" + band.maskId;
          const transition =
            brandBrushStrokeMaskPresets[index].visible.transition;
          const begin = transition.delay + "s";
          const layerOpacityDuration =
            Math.max(transition.duration * 0.46, 0.28) + "s";
          const layerTransformDuration =
            Math.max(transition.duration * 0.72, 0.42) + "s";

          return (
            <g
              key={band.layerId}
              data-testid={
                "brand-brush-layer-" + variant + "-" + band.layerId
              }
              opacity="0"
            >
              <animate
                attributeName="opacity"
                begin={begin}
                dur={layerOpacityDuration}
                fill="freeze"
                from="0"
                to="1"
              />
              <g transform={"translate(0 " + band.enterY + ")"}>
                <animateTransform
                  attributeName="transform"
                  begin={begin}
                  calcMode="spline"
                  dur={layerTransformDuration}
                  fill="freeze"
                  from={"0 " + band.enterY}
                  keySplines="0.8 0 0.2 1"
                  keyTimes="0;1"
                  to="0 0"
                  type="translate"
                />
                <g
                  clipPath={"url(#" + clipId + ")"}
                  mask={"url(#" + maskId + ")"}
                >
                  <image
                    href={brandBrushSvgHref}
                    width="1200"
                    height="675"
                    preserveAspectRatio="xMidYMid meet"
                  />
                </g>
              </g>
            </g>
          );
        })}
      </motion.svg>
    </motion.div>
  );
};

export { BrandBrushMark };
export type { BrandBrushVariant };
