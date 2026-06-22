import type { Metadata } from "next";
import { cn } from "@/utils/tailwind-util";
import styles from "./gouache.module.css";

export const metadata: Metadata = {
  title: "Gouache Test | ou9999.dev",
  description: "Mineral Wash gouache layer test page",
};

interface LayerCard {
  title: string;
  body: string;
}

interface PaletteChip {
  name: string;
  className: string;
}

const layerCards: LayerCard[] = [
  {
    title: "Graphite",
    body: "near-black field that keeps long-form reading stable",
  },
  {
    title: "Mineral",
    body: "thin teal and slate wash kept below visible text",
  },
  {
    title: "Gouache",
    body: "matte paper grain and dry brush edges following the viewport",
  },
];

const paletteChips: PaletteChip[] = [
  {
    name: "soot",
    className: "bg-[#020303]",
  },
  {
    name: "graphite black",
    className: "bg-[#070707]",
  },
  {
    name: "graphite surface",
    className: "bg-[#101211]",
  },
  {
    name: "mineral teal",
    className: "bg-[#1F2A28]",
  },
  {
    name: "slate mineral",
    className: "bg-[#202632]",
  },
  {
    name: "cool ash",
    className: "bg-[#8B9290]",
  },
  {
    name: "blue steel",
    className: "bg-[#A2ADB3]",
  },
  {
    name: "cold paper",
    className: "bg-[#E8ECEC]",
  },
];

const GouacheFilters = () => {
  return (
    <svg
      aria-hidden="true"
      className="absolute h-0 w-0 overflow-hidden"
      focusable="false"
    >
      <filter id="gouache-paper">
        <feTurbulence
          baseFrequency="0.72"
          numOctaves="4"
          result="noise"
          seed="17"
          type="fractalNoise"
        />
        <feColorMatrix
          in="noise"
          result="paper"
          type="matrix"
          values="0.35 0 0 0 0.5 0 0.35 0 0 0.5 0 0 0.35 0 0.5 0 0 0 0.2 0"
        />
        <feBlend in="SourceGraphic" in2="paper" mode="multiply" />
      </filter>
      <filter id="gouache-bristle">
        <feTurbulence
          baseFrequency="0.018 0.16"
          numOctaves="5"
          result="grain"
          seed="31"
          type="fractalNoise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="grain"
          scale="28"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feColorMatrix
          type="matrix"
          values="1.05 0 0 0 -0.02 0 1.05 0 0 -0.02 0 0 1.05 0 -0.02 0 0 0 1 0"
        />
      </filter>
    </svg>
  );
};

const GouachePage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-google-ink text-google-paper">
      <section
        className={cn(
          "relative isolate min-h-[calc(100dvh-56px)] overflow-hidden px-6 py-14 md:min-h-[calc(100dvh-100px)] md:px-10 md:py-20",
          styles.surface
        )}
      >
        <GouacheFilters />
        <div className={cn(styles.textureLayer, styles.lacquerBloom)} />
        <div className={cn(styles.textureLayer, styles.nacreVeil)} />
        <div className={cn(styles.textureLayer, styles.shellMist)} />
        <div className={styles.dryLine} />
        <div className={styles.readingField} />

        <div className="relative z-10 mx-auto flex w-full max-w-[1632px] flex-col gap-12 lg:min-h-[720px] lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-186">
            <p className="mb-5 text-sm font-semibold uppercase text-google-paper/58">
              Gouache Layer
            </p>
            <h1 className="max-w-[980px] break-keep text-[44px] font-normal leading-[1.08] text-google-paper md:text-[88px] md:leading-[0.98]">
              검은 Mineral Wash 레이어
            </h1>
            <p className="mt-8 max-w-186 break-keep text-lg leading-8 text-google-paper/72 md:text-xl md:leading-9">
              이 레이어가 최상단 layout에 배치되어 viewport를 따라다니는 최종
              배경입니다. 색은 `/test/color`의 Mineral Wash만 사용하고, 구아슈
              질감은 거의 검은 표면 안에서 낮은 농도로만 드러냅니다.
            </p>
          </div>

          <aside className="w-full max-w-[420px] border-1 border-mineral-blue/18 bg-google-ink/52 p-6 shadow-[0_24px_90px_rgb(0_0_0/0.34)] backdrop-blur-sm md:p-8">
            <p className="text-sm font-semibold uppercase text-google-paper/52">
              global fixed layer
            </p>
            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
              <div>
                <dt className="text-google-paper/46">image assets</dt>
                <dd className="mt-1 text-2xl font-semibold">0</dd>
              </div>
              <div>
                <dt className="text-google-paper/46">z layers</dt>
                <dd className="mt-1 text-2xl font-semibold">7</dd>
              </div>
              <div>
                <dt className="text-google-paper/46">base</dt>
                <dd className="mt-1 text-2xl font-semibold">CSS</dd>
              </div>
              <div>
                <dt className="text-google-paper/46">position</dt>
                <dd className="mt-1 text-2xl font-semibold">fixed</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-2">
              {paletteChips.map((chip) => (
                <span
                  aria-label={chip.name}
                  className={cn(
                    "block h-8 w-8 border-1 border-mineral-blue/24",
                    chip.className
                  )}
                  key={chip.name}
                />
              ))}
            </div>
          </aside>
        </div>

        <div className="relative z-10 mx-auto mt-12 grid w-full max-w-[1632px] grid-cols-1 gap-4 md:grid-cols-3">
          {layerCards.map((card) => (
            <article
              className={cn(
                "min-h-[190px] border-1 border-mineral-blue/14 p-5 text-google-paper shadow-[0_18px_70px_rgb(0_0_0/0.2)]",
                styles.strokeCard
              )}
              key={card.title}
            >
              <h2 className="text-2xl font-semibold">{card.title}</h2>
              <p className="mt-20 max-w-[260px] text-sm leading-6 text-google-paper/62">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GouachePage;
