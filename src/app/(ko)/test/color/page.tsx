import type { Metadata } from "next";
import { cn } from "@/utils/tailwind-util";
import { HighlightBrushText } from "./highlight-brush-text";
import styles from "./color.module.css";

export const metadata: Metadata = {
  title: "Color Test | OU9999",
  description: "Mineral Wash color reference page",
};

interface ColorChip {
  name: string;
  value: string;
  className: string;
  usage: string;
  textClassName?: string;
}

interface TextGradientCandidate {
  name: string;
  tone: string;
  className: string;
  intent: string;
}

const mineralWashColors: ColorChip[] = [
  {
    name: "soot",
    value: "#020303",
    className: "bg-[#020303]",
    usage: "deepest shadow",
  },
  {
    name: "graphite black",
    value: "#070707",
    className: "bg-[#070707]",
    usage: "page base",
  },
  {
    name: "graphite surface",
    value: "#101211",
    className: "bg-[#101211]",
    usage: "header, framed surface",
  },
  {
    name: "mineral teal",
    value: "#1F2A28",
    className: "bg-[#1F2A28]",
    usage: "gouache wash shadow",
  },
  {
    name: "slate mineral",
    value: "#202632",
    className: "bg-[#202632]",
    usage: "cool wash depth",
  },
  {
    name: "cool ash",
    value: "#8B9290",
    className: "bg-[#8B9290]",
    usage: "secondary text",
    textClassName: "text-[#020303]",
  },
  {
    name: "blue steel",
    value: "#A2ADB3",
    className: "bg-[#A2ADB3]",
    usage: "links, highlight core",
    textClassName: "text-[#020303]",
  },
  {
    name: "cold paper",
    value: "#E8ECEC",
    className: "bg-[#E8ECEC]",
    usage: "primary text",
    textClassName: "text-[#020303]",
  },
];

const textGradientCandidates: TextGradientCandidate[] = [
  {
    name: "Cold Pearl",
    tone: "recommended baseline",
    className: styles.gradientColdPearl,
    intent: "현재 Mineral Wash의 차가운 흰 글자를 유지하면서 명도 차만 더 키운 기본 후보입니다.",
  },
  {
    name: "Blue Steel",
    tone: "selected highlight",
    className: styles.gradientBlueSteel,
    intent: "링크와 포스트 제목에 쓸 때 가장 또렷하게 보이는 은청색 강조 후보입니다.",
  },
  {
    name: "Mineral Teal",
    tone: "gouache aligned",
    className: styles.gradientMineralTeal,
    intent: "구아슈 레이어의 teal wash를 텍스트 쪽으로 조금 끌어올린 후보입니다.",
  },
  {
    name: "Oxide Ash",
    tone: "analog warmth",
    className: styles.gradientOxideAsh,
    intent: "노란 기운은 피하고, 붓칠의 아날로그 질감만 약간 따뜻하게 보강한 후보입니다.",
  },
  {
    name: "Hard Chalk",
    tone: "highest contrast",
    className: styles.gradientHardChalk,
    intent: "검은 배경 위에서 가장 강하게 튀는 후보입니다. 포인트가 약하다고 느낄 때 비교용입니다.",
  },
];

const ColorChipCard = ({ color }: { color: ColorChip }) => {
  return (
    <article
      className={cn(
        "flex min-h-40 flex-col justify-between border-1 border-mineral-blue/18 p-4 text-google-paper",
        color.className,
        color.textClassName
      )}
    >
      <div>
        <p className="text-lg font-semibold">{color.name}</p>
        <p className="mt-2 max-w-[220px] break-keep text-sm leading-5 opacity-72">
          {color.usage}
        </p>
      </div>
      <p className="font-mono text-sm uppercase opacity-72">{color.value}</p>
    </article>
  );
};

const TextGradientCandidateCard = ({
  candidate,
}: {
  candidate: TextGradientCandidate;
}) => {
  return (
    <article
      className={cn(
        "relative overflow-hidden border-1 border-mineral-blue/18 bg-mineral-frame p-5",
        styles.gradientCard
      )}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase text-google-paper/52">
              {candidate.tone}
            </p>
            <HighlightBrushText
              as="h3"
              className="mt-4 break-keep text-5xl font-normal leading-none md:text-6xl"
              textClassName={candidate.className}
            >
              {candidate.name}
            </HighlightBrushText>
          </div>
          <span className="border-1 border-mineral-blue/18 px-3 py-1 text-xs font-semibold uppercase text-google-paper/58">
            text
          </span>
        </div>
        <p className="mt-8 break-keep text-sm leading-6 text-google-paper/62">
          {candidate.intent}
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_0.78fr]">
          <p
            className={cn(
              "break-keep text-3xl font-normal leading-tight",
              styles.gradientText,
              candidate.className
            )}
          >
            조용한 검은 붓질 위의 강조 문장
          </p>
          <p className="break-keep text-base leading-7 text-google-paper/66">
            일반 본문은 그대로 두고, 제목·링크·짧은 인용문 같은 순간에만
            적용합니다.
          </p>
        </div>
      </div>
    </article>
  );
};

const ColorGouacheFilters = () => {
  return (
    <svg
      aria-hidden="true"
      className="absolute h-0 w-0 overflow-hidden"
      focusable="false"
    >
      <filter id="color-gouache-paper">
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
      <filter id="color-gouache-bristle">
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

const GouacheLayer = () => {
  return (
    <div aria-hidden="true" className={styles.gouacheLayer}>
      <div className={cn(styles.gouacheTexture, styles.gouacheShadow)} />
      <div className={cn(styles.gouacheTexture, styles.gouachePrimary)} />
      <div className={cn(styles.gouacheTexture, styles.gouacheSecondary)} />
      <div className={cn(styles.gouacheTexture, styles.gouacheLight)} />
      <div className={styles.gouacheDryLine} />
      <div className={styles.gouacheReadingField} />
    </div>
  );
};

const ColorPage = () => {
  return (
    <main className="min-h-screen bg-google-ink text-google-paper">
      <ColorGouacheFilters />
      <section
        className={cn(
          "relative min-h-[calc(100dvh-56px)] overflow-hidden px-6 py-16 md:min-h-[calc(100dvh-100px)] md:px-10 md:py-24",
          styles.surface
        )}
      >
        <div className="relative z-10 mx-auto w-full max-w-[1632px]">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-google-paper/56">
                /test/color
              </p>
              <HighlightBrushText
                as="h1"
                className="mt-8 max-w-[900px] break-keep text-[52px] font-normal leading-[1.02] md:text-[104px] md:leading-[0.95]"
                textClassName={styles.gradientBlueSteel}
              >
                Mineral Wash
              </HighlightBrushText>
              <p className="mt-8 max-w-186 break-keep text-lg leading-8 text-google-paper/72 md:text-xl md:leading-9">
                블로그에서 사용할 최종 컬러만 남긴 기준표입니다. 색 변화는
                거의 검은 graphite 안에서 움직이고, 구아슈 느낌은 viewport를
                따라다니는 fixed 레이어와 얇은 표면 질감에서만 드러냅니다.
              </p>
            </div>

            <aside className={cn("border-1 border-mineral-blue/18 p-6", styles.brushField)}>
              <p className="text-sm font-semibold uppercase text-google-paper/52">
                canonical direction
              </p>
              <p className="mt-16 max-w-[340px] break-keep text-3xl font-normal leading-tight">
                black canvas, graphite wash, cold readable type
              </p>
            </aside>
          </div>

          <section className="mt-16">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="text-4xl font-normal leading-tight md:text-6xl">
                Palette
              </h2>
              <p className="max-w-[520px] break-keep text-sm leading-6 text-google-paper/60 md:text-base md:leading-7">
                이 페이지의 색만 현재 Mineral Wash 기준으로 사용합니다.
                `/test/jagae`의 자개색과 이전 구아슈 후보는 보존용입니다.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {mineralWashColors.map((color) => (
                <ColorChipCard color={color} key={color.name} />
              ))}
            </div>
          </section>

          <section className="mt-20">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="text-4xl font-normal leading-tight md:text-6xl">
                Text Gradient
              </h2>
              <p className="max-w-[560px] break-keep text-sm leading-6 text-google-paper/60 md:text-base md:leading-7">
                Blue Steel을 실제 하이라이트 기준으로 선택했습니다. 배경은
                검게 유지하고, 강조 텍스트 안에서만 차가운 광택과 붓질 명도
                차를 만듭니다.
              </p>
            </div>
            <div className="grid gap-4 xl:grid-cols-2">
              {textGradientCandidates.map((candidate) => (
                <TextGradientCandidateCard
                  candidate={candidate}
                  key={candidate.name}
                />
              ))}
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
            <article
              className={cn(
                "relative min-h-[520px] overflow-hidden border-1 border-mineral-blue/18 p-6",
                styles.previewSurface
              )}
            >
              <GouacheLayer />
              <div className="relative z-10 flex min-h-[472px] flex-col">
                <p className="text-sm font-semibold uppercase text-google-paper/50">
                  mineral wash + gouache layer
                </p>
                <h2 className="mt-10 max-w-[720px] break-keep text-5xl font-normal leading-tight md:text-7xl">
                  거의 단색처럼 보이는 검은 붓질
                </h2>
                <p className="mt-8 max-w-[620px] break-keep text-base leading-7 text-google-paper/68 md:text-lg md:leading-8">
                  색상은 밝게 튀지 않고, 구아슈 레이어의 입자와 가장자리
                  흐림만 남깁니다. 실제 블로그에서는 이 레이어가 최상단
                  layout의 fixed 배경으로 viewport를 따라다닙니다.
                </p>
                <div className={cn("mt-auto min-h-36 border-1 border-mineral-blue/14 p-4", styles.previewStrip)}>
                  <p className="max-w-[420px] break-keep text-2xl font-semibold leading-tight">
                    readable surface, low pigment, matte grain
                  </p>
                </div>
              </div>
            </article>

            <article className="border-1 border-mineral-blue/18 bg-mineral-frame p-5">
              <div className={cn("h-40", styles.graphiteStrip)} />
              <p className="mt-8 text-2xl font-semibold">surface strip</p>
              <p className="mt-4 break-keep text-sm leading-6 text-google-paper/60">
                밝은 색은 본문 배경이 아니라 텍스트와 얇은 경계선에만
                사용합니다. 표면 그라데이션은 black/graphite 범위로 제한합니다.
              </p>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
};

export default ColorPage;
