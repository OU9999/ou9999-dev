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

const layerCards: LayerCard[] = [
  {
    title: "Paper",
    body: "fixed grain, warm base, lifted white pigment",
  },
  {
    title: "Wash",
    body: "large blurred shapes with multiply blending",
  },
  {
    title: "Brush",
    body: "distorted streaks from SVG turbulence",
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
    <main className="min-h-screen overflow-hidden bg-google-paper text-google-ink">
      <section
        className={cn(
          "relative isolate min-h-[calc(100dvh-56px)] overflow-hidden px-6 py-14 md:min-h-[calc(100dvh-100px)] md:px-10 md:py-20",
          styles.surface
        )}
      >
        <GouacheFilters />
        <div className={cn(styles.wash, styles.washDark)} />
        <div className={cn(styles.wash, styles.washMiddle)} />
        <div className={cn(styles.wash, styles.washLight)} />
        <div className={styles.dryBrush} />
        <div className={styles.paperLift} />
        <div className={styles.inkBloom} />

        <div className="relative z-10 mx-auto flex w-full max-w-[1632px] flex-col gap-12 lg:min-h-[720px] lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-186">
            <p className="mb-5 text-sm font-semibold uppercase text-google-ink/60">
              Gouache Lab
            </p>
            <h1 className="max-w-[900px] break-keep text-[44px] font-normal leading-[1.08] text-google-ink md:text-[88px] md:leading-[0.98]">
              붓칠을 이미지 없이 쌓아보기
            </h1>
            <p className="mt-8 max-w-186 break-keep text-lg leading-8 text-google-ink/72 md:text-xl md:leading-9">
              CSS gradient, SVG turbulence, blend-mode만으로 만든 절차형
              구아슈 배경입니다. 최종 블로그 디자인으로 옮기기 전에 이
              페이지에서 밀도와 대비를 계속 조정합니다.
            </p>
          </div>

          <aside className="w-full max-w-[420px] border-1 border-google-ink/25 bg-white/42 p-6 shadow-[0_24px_80px_rgb(18_17_12/0.16)] backdrop-blur-sm md:p-8">
            <p className="text-sm font-semibold uppercase text-google-ink/52">
              v0 surface
            </p>
            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
              <div>
                <dt className="text-google-ink/48">image assets</dt>
                <dd className="mt-1 text-2xl font-semibold">0</dd>
              </div>
              <div>
                <dt className="text-google-ink/48">z layers</dt>
                <dd className="mt-1 text-2xl font-semibold">8</dd>
              </div>
              <div>
                <dt className="text-google-ink/48">base</dt>
                <dd className="mt-1 text-2xl font-semibold">CSS</dd>
              </div>
              <div>
                <dt className="text-google-ink/48">grain</dt>
                <dd className="mt-1 text-2xl font-semibold">SVG</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="relative z-10 mx-auto mt-12 grid w-full max-w-[1632px] grid-cols-1 gap-4 md:grid-cols-3">
          {layerCards.map((card) => (
            <article
              className={cn(
                "min-h-[190px] border-1 border-google-ink/22 p-5 text-google-ink shadow-[0_18px_60px_rgb(18_17_12/0.13)]",
                styles.strokeCard
              )}
              key={card.title}
            >
              <h2 className="text-2xl font-semibold">{card.title}</h2>
              <p className="mt-20 max-w-[260px] text-sm leading-6 text-google-ink/64">
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
