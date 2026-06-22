import { cn } from "@/utils/tailwind-util";

interface BrandBrushMarkProps {
  className?: string;
}

interface BrushStrokeLayer {
  layerId: string;
  strokeMaskId: string;
  revealMaskId: string;
  strokeMaskHref: string;
  begin: string;
  duration: string;
}

const brandBrushSvgHref = "/imgs/header/brand-brush-stack-clean-vector.svg";
const brushStrokeLayers: BrushStrokeLayer[] = [
  {
    layerId: "top",
    strokeMaskId: "brand-brush-stroke-mask-top",
    revealMaskId: "brand-brush-reveal-mask-top",
    strokeMaskHref: "/imgs/header/brand-brush-stroke-mask-top.svg",
    begin: "0.08s",
    duration: "0.42s",
  },
  {
    layerId: "second",
    strokeMaskId: "brand-brush-stroke-mask-second",
    revealMaskId: "brand-brush-reveal-mask-second",
    strokeMaskHref: "/imgs/header/brand-brush-stroke-mask-second.svg",
    begin: "0.22s",
    duration: "0.56s",
  },
  {
    layerId: "third",
    strokeMaskId: "brand-brush-stroke-mask-third",
    revealMaskId: "brand-brush-reveal-mask-third",
    strokeMaskHref: "/imgs/header/brand-brush-stroke-mask-third.svg",
    begin: "0.36s",
    duration: "0.48s",
  },
  {
    layerId: "bottom",
    strokeMaskId: "brand-brush-stroke-mask-bottom",
    revealMaskId: "brand-brush-reveal-mask-bottom",
    strokeMaskHref: "/imgs/header/brand-brush-stroke-mask-bottom.svg",
    begin: "0.48s",
    duration: "0.66s",
  },
];

const BrandBrushMark = ({ className }: BrandBrushMarkProps) => {
  const idPrefix = "brand-brush-clean";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative mt-10 aspect-[16/9] w-full overflow-visible motion-reduce:!transform-none motion-reduce:!opacity-100 md:mt-12",
        className
      )}
      data-testid="brand-brush-mark-clean"
    >
      <svg
        className="h-full w-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1200 675"
      >
        <defs>
          {brushStrokeLayers.map((layer) => (
            <mask
              key={layer.strokeMaskId}
              id={idPrefix + "-" + layer.strokeMaskId}
              maskUnits="userSpaceOnUse"
            >
              <image
                href={layer.strokeMaskHref}
                width="1200"
                height="675"
                preserveAspectRatio="xMidYMid meet"
              />
            </mask>
          ))}
          {brushStrokeLayers.map((layer) => (
            <mask
              key={layer.revealMaskId}
              id={idPrefix + "-" + layer.revealMaskId}
              maskUnits="userSpaceOnUse"
            >
              <rect x="-1200" y="0" width="1200" height="675" fill="#FFFFFF">
                <animate
                  attributeName="x"
                  begin={layer.begin}
                  calcMode="spline"
                  dur={layer.duration}
                  fill="freeze"
                  from="-1200"
                  keySplines="0.8 0 0.2 1"
                  keyTimes="0;1"
                  to="0"
                />
              </rect>
            </mask>
          ))}
        </defs>

        {brushStrokeLayers.map((layer) => (
          <g
            key={layer.layerId}
            data-testid={"brand-brush-layer-clean-" + layer.layerId}
            mask={"url(#" + idPrefix + "-" + layer.strokeMaskId + ")"}
          >
            <g mask={"url(#" + idPrefix + "-" + layer.revealMaskId + ")"}>
              <image
                href={brandBrushSvgHref}
                width="1200"
                height="675"
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
};

export { BrandBrushMark };
