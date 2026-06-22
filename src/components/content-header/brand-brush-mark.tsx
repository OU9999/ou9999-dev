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

interface BrushStrokeLayer {
  layerId: string;
  strokeMaskId: string;
  revealMaskId: string;
  strokeMaskHref: string;
  assetHrefByVariant: Record<BrandBrushVariant, string>;
  enterX: number;
  enterY: number;
}

const brushStrokeLayers: BrushStrokeLayer[] = [
  {
    layerId: "top",
    strokeMaskId: "brand-brush-stroke-mask-top",
    revealMaskId: "brand-brush-reveal-mask-top",
    strokeMaskHref: "/imgs/header/brand-brush-stroke-mask-top.svg",
    assetHrefByVariant: {
      texture: "/imgs/header/brand-brush-stack-vector.svg",
      clean: "/imgs/header/brand-brush-stack-clean-vector.svg",
    },
    enterX: -16,
    enterY: -8,
  },
  {
    layerId: "second",
    strokeMaskId: "brand-brush-stroke-mask-second",
    revealMaskId: "brand-brush-reveal-mask-second",
    strokeMaskHref: "/imgs/header/brand-brush-stroke-mask-second.svg",
    assetHrefByVariant: {
      texture: "/imgs/header/brand-brush-stack-vector.svg",
      clean: "/imgs/header/brand-brush-stack-clean-vector.svg",
    },
    enterX: -22,
    enterY: -3,
  },
  {
    layerId: "third",
    strokeMaskId: "brand-brush-stroke-mask-third",
    revealMaskId: "brand-brush-reveal-mask-third",
    strokeMaskHref: "/imgs/header/brand-brush-stroke-mask-third.svg",
    assetHrefByVariant: {
      texture: "/imgs/header/brand-brush-stack-vector.svg",
      clean: "/imgs/header/brand-brush-stack-clean-vector.svg",
    },
    enterX: -18,
    enterY: 4,
  },
  {
    layerId: "bottom",
    strokeMaskId: "brand-brush-stroke-mask-bottom",
    revealMaskId: "brand-brush-reveal-mask-bottom",
    strokeMaskHref: "/imgs/header/brand-brush-stroke-mask-bottom.svg",
    assetHrefByVariant: {
      texture: "/imgs/header/brand-brush-stack-vector.svg",
      clean: "/imgs/header/brand-brush-stack-clean-vector.svg",
    },
    enterX: -14,
    enterY: 9,
  },
];

const BrandBrushMark = ({
  className,
  variant = "texture",
}: BrandBrushMarkProps) => {
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
          {brushStrokeLayers.map((layer) => {
            const strokeMaskId = idPrefix + "-" + layer.strokeMaskId;

            return (
              <mask
                key={layer.strokeMaskId}
                id={strokeMaskId}
                maskUnits="userSpaceOnUse"
              >
                <image
                  href={layer.strokeMaskHref}
                  width="1200"
                  height="675"
                  preserveAspectRatio="xMidYMid meet"
                />
              </mask>
            );
          })}
          {brushStrokeLayers.map((layer, index) => {
            const revealMaskId = idPrefix + "-" + layer.revealMaskId;
            const transition =
              brandBrushStrokeMaskPresets[index].visible.transition;
            const begin = transition.delay + "s";
            const duration = transition.duration + "s";

            return (
              <mask
                key={layer.revealMaskId}
                id={revealMaskId}
                maskUnits="userSpaceOnUse"
              >
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

        {brushStrokeLayers.map((layer, index) => {
          const strokeMaskId = idPrefix + "-" + layer.strokeMaskId;
          const revealMaskId = idPrefix + "-" + layer.revealMaskId;
          const transition =
            brandBrushStrokeMaskPresets[index].visible.transition;
          const begin = transition.delay + "s";
          const layerAssetHref = layer.assetHrefByVariant[variant];
          const initialTransform = layer.enterX + " " + layer.enterY;
          const layerOpacityDuration =
            Math.max(transition.duration * 0.46, 0.28) + "s";
          const layerTransformDuration =
            Math.max(transition.duration * 0.72, 0.42) + "s";

          return (
            <g
              key={layer.layerId}
              data-testid={
                "brand-brush-layer-" + variant + "-" + layer.layerId
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
              <g transform={"translate(" + initialTransform + ")"}>
                <animateTransform
                  attributeName="transform"
                  begin={begin}
                  calcMode="spline"
                  dur={layerTransformDuration}
                  fill="freeze"
                  from={initialTransform}
                  keySplines="0.8 0 0.2 1"
                  keyTimes="0;1"
                  to="0 0"
                  type="translate"
                />
                <g mask={"url(#" + strokeMaskId + ")"}>
                  <g mask={"url(#" + revealMaskId + ")"}>
                    <image
                      href={layerAssetHref}
                      width="1200"
                      height="675"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>
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
