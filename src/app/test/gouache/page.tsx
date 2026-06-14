import type { Metadata } from "next";
import { cn } from "@/utils/tailwind-util";
import styles from "./gouache.module.css";

export const metadata: Metadata = {
  title: "Gouache Test | ou9999.dev",
  description: "Procedural gouache background test page",
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
    title: "Carbon",
    body: "warm black paper with uneven pigment load",
  },
  {
    title: "Mineral",
    body: "oxidized teal and olive washes over dark ground",
  },
  {
    title: "Bloom",
    body: "rose ash, ochre, and ivory dry-brush accents",
  },
];

const paletteChips: PaletteChip[] = [
  {
    name: "carbon",
    className: "bg-[#11100c]",
  },
  {
    name: "teal",
    className: "bg-[#4f7f73]",
  },
  {
    name: "olive",
    className: "bg-[#7f8054]",
  },
  {
    name: "rose",
    className: "bg-[#8d5a62]",
  },
  {
    name: "ochre",
    className: "bg-[#b18a4a]",
  },
  {
    name: "ivory",
    className: "bg-[#ece1c8]",
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
          values="0.35 0 0 0 0.58 0 0.35 0 0 0.58 0 0 0.35 0 0.58 0 0 0 0.24 0"
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
          values="1.08 0 0 0 -0.02 0 1.08 0 0 -0.02 0 0 1.08 0 -0.02 0 0 0 1 0"
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
        <div className={cn(styles.wash, styles.washShadow)} />
        <div className={cn(styles.wash, styles.washTeal)} />
        <div className={cn(styles.wash, styles.washRose)} />
        <div className={cn(styles.wash, styles.washOchre)} />
        <div className={cn(styles.wash, styles.washIvory)} />
        <div className={styles.dryBrush} />
        <div className={styles.paperLift} />
        <div className={styles.inkBloom} />

        <div className="relative z-10 mx-auto flex w-full max-w-[1632px] flex-col gap-12 lg:min-h-[720px] lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-186">
            <p className="mb-5 text-sm font-semibold uppercase text-google-paper/58">
              Gouache Lab
            </p>
            <h1 className="max-w-[980px] break-keep text-[44px] font-normal leading-[1.08] text-google-paper md:text-[88px] md:leading-[0.98]">
              검은 종이에 구아슈 쌓아보기
            </h1>
            <p className="mt-8 max-w-186 break-keep text-lg leading-8 text-google-paper/72 md:text-xl md:leading-9">
              흰 종이 질감 대신 warm black을 바닥으로 두고, 탁한 색 물감이
              겹쳐진 배경을 테스트합니다. 이미지 자산 없이 CSS gradient, SVG
              turbulence, blend-mode로만 만든 절차형 레이어입니다.
            </p>
          </div>

          <aside className="w-full max-w-[420px] border-1 border-white/18 bg-google-ink/42 p-6 shadow-[0_24px_90px_rgb(0_0_0/0.34)] backdrop-blur-sm md:p-8">
            <p className="text-sm font-semibold uppercase text-google-paper/52">
              v1 dark surface
            </p>
            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
              <div>
                <dt className="text-google-paper/46">image assets</dt>
                <dd className="mt-1 text-2xl font-semibold">0</dd>
              </div>
              <div>
                <dt className="text-google-paper/46">z layers</dt>
                <dd className="mt-1 text-2xl font-semibold">11</dd>
              </div>
              <div>
                <dt className="text-google-paper/46">base</dt>
                <dd className="mt-1 text-2xl font-semibold">CSS</dd>
              </div>
              <div>
                <dt className="text-google-paper/46">grain</dt>
                <dd className="mt-1 text-2xl font-semibold">SVG</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-2">
              {paletteChips.map((chip) => (
                <span
                  aria-label={chip.name}
                  className={cn(
                    "block h-9 w-9 border-1 border-white/24",
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
                "min-h-[190px] border-1 border-white/18 p-5 text-google-paper shadow-[0_18px_70px_rgb(0_0_0/0.28)]",
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
