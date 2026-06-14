import type { Metadata } from "next";
import { cn } from "@/utils/tailwind-util";
import styles from "./color.module.css";

export const metadata: Metadata = {
  title: "Color Test | ou9999.dev",
  description: "Analog gouache color test page",
};

interface ColorChip {
  name: string;
  value: string;
  className: string;
  textClassName?: string;
}

interface PaletteGroup {
  title: string;
  note: string;
  colors: ColorChip[];
}

interface Candidate {
  eyebrow: string;
  title: string;
  note: string;
  surfaceClassName: string;
  stripClassName: string;
  colors: ColorChip[];
}

const baseColors: ColorChip[] = [
  {
    name: "ink black",
    value: "#191714",
    className: "bg-[#191714]",
  },
  {
    name: "bone white",
    value: "#F5EEDE",
    className: "bg-[#F5EEDE]",
    textClassName: "text-[#191714]",
  },
  {
    name: "paper ash",
    value: "#AFA89A",
    className: "bg-[#AFA89A]",
    textClassName: "text-[#191714]",
  },
];

const paletteGroups: PaletteGroup[] = [
  {
    title: "Mineral",
    note: "차갑지만 네온으로 가지 않는 개발 블로그용 보조색",
    colors: [
      {
        name: "oxide teal",
        value: "#42534F",
        className: "bg-[#42534F]",
      },
      {
        name: "slate indigo",
        value: "#4B5979",
        className: "bg-[#4B5979]",
      },
      {
        name: "dried moss",
        value: "#626449",
        className: "bg-[#626449]",
      },
    ],
  },
  {
    title: "Earth",
    note: "붓질과 종이 질감을 살리는 낮은 채도의 따뜻한 안료",
    colors: [
      {
        name: "burnt sienna",
        value: "#7E453D",
        className: "bg-[#7E453D]",
      },
      {
        name: "raw ochre",
        value: "#B77F52",
        className: "bg-[#B77F52]",
      },
      {
        name: "mud violet",
        value: "#6D5362",
        className: "bg-[#6D5362]",
      },
    ],
  },
];

const candidates: Candidate[] = [
  {
    eyebrow: "candidate 01",
    title: "Ink Bone Minimal",
    note: "본문 가독성을 최우선으로 두고, 붓질은 섹션 전환과 썸네일 표면에만 남기는 가장 조용한 후보",
    surfaceClassName: styles.candidateInkBone,
    stripClassName: styles.stripInkBone,
    colors: [
      baseColors[0],
      baseColors[1],
      {
        name: "smoke umber",
        value: "#3A322A",
        className: "bg-[#3A322A]",
      },
      {
        name: "soft ochre",
        value: "#9C7450",
        className: "bg-[#9C7450]",
      },
    ],
  },
  {
    eyebrow: "candidate 02",
    title: "Mineral Wash",
    note: "검은 바탕 위에 산화 청록과 남색을 얇게 올린 후보. 차갑지만 AI 네온처럼 보이지 않게 낮은 채도로 제한",
    surfaceClassName: styles.candidateMineral,
    stripClassName: styles.stripMineral,
    colors: [
      baseColors[0],
      {
        name: "oxide teal",
        value: "#42534F",
        className: "bg-[#42534F]",
      },
      {
        name: "slate indigo",
        value: "#4B5979",
        className: "bg-[#4B5979]",
      },
      {
        name: "chalk blue",
        value: "#9DAFC5",
        className: "bg-[#9DAFC5]",
        textClassName: "text-[#191714]",
      },
    ],
  },
  {
    eyebrow: "candidate 03",
    title: "Sienna Archive",
    note: "아날로그 붓질의 따뜻함을 가장 직접적으로 드러내는 후보. 썸네일 시스템과 잘 맞는지 확인 필요",
    surfaceClassName: styles.candidateSienna,
    stripClassName: styles.stripSienna,
    colors: [
      baseColors[0],
      {
        name: "burnt sienna",
        value: "#7E453D",
        className: "bg-[#7E453D]",
      },
      {
        name: "raw ochre",
        value: "#B77F52",
        className: "bg-[#B77F52]",
      },
      {
        name: "paper ash",
        value: "#AFA89A",
        className: "bg-[#AFA89A]",
        textClassName: "text-[#191714]",
      },
    ],
  },
  {
    eyebrow: "candidate 04",
    title: "Night Violet",
    note: "감성은 가장 강하지만 본문 전체에 쓰기엔 위험한 후보. 강조 장면이나 대표 이미지용으로 비교",
    surfaceClassName: styles.candidateViolet,
    stripClassName: styles.stripViolet,
    colors: [
      baseColors[0],
      {
        name: "mud violet",
        value: "#6D5362",
        className: "bg-[#6D5362]",
      },
      {
        name: "dust rose",
        value: "#9A6B70",
        className: "bg-[#9A6B70]",
      },
      {
        name: "lavender ash",
        value: "#B9ACC9",
        className: "bg-[#B9ACC9]",
        textClassName: "text-[#191714]",
      },
    ],
  },
];

const ColorChipCard = ({ color }: { color: ColorChip }) => {
  return (
    <article
      className={cn(
        "flex min-h-32 flex-col justify-between border-1 border-white/14 p-4 text-google-paper",
        color.className,
        color.textClassName
      )}
    >
      <p className="text-lg font-semibold">{color.name}</p>
      <p className="font-mono text-sm uppercase opacity-72">{color.value}</p>
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
          values="0.35 0 0 0 0.58 0 0.35 0 0 0.58 0 0 0.35 0 0.58 0 0 0 0.24 0"
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
          values="1.08 0 0 0 -0.02 0 1.08 0 0 -0.02 0 0 1.08 0 -0.02 0 0 0 1 0"
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

const CandidatePreview = ({ candidate }: { candidate: Candidate }) => {
  return (
    <article
      className={cn(
        "relative min-h-[520px] overflow-hidden border-1 border-white/14 p-5 text-google-paper md:p-6",
        styles.candidateSurface,
        candidate.surfaceClassName
      )}
    >
      <GouacheLayer />
      <div className="relative z-10 flex min-h-[472px] flex-col">
        <p className="text-sm font-semibold uppercase text-google-paper/50">
          {candidate.eyebrow}
        </p>
        <h3 className="mt-6 max-w-[520px] break-keep text-4xl font-normal leading-tight md:text-5xl">
          {candidate.title}
        </h3>
        <p className="mt-5 max-w-[560px] break-keep text-sm leading-6 text-google-paper/64 md:text-base md:leading-7">
          {candidate.note}
        </p>

        <div
          className={cn(
            "mt-auto min-h-36 border-1 border-white/12 p-4",
            styles.previewStrip,
            candidate.stripClassName
          )}
        >
          <p className="max-w-[360px] break-keep text-2xl font-semibold leading-tight">
            글 표면은 조용하게, 이미지는 손으로 칠한 듯하게
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-4">
          {candidate.colors.map((color) => (
            <div
              className={cn(
                "flex min-h-20 flex-col justify-between border-1 border-white/14 p-3 text-xs text-google-paper",
                color.className,
                color.textClassName
              )}
              key={color.name}
            >
              <span className="font-semibold">{color.name}</span>
              <span className="font-mono uppercase opacity-72">
                {color.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
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
              <h1 className="mt-8 max-w-[900px] break-keep text-[52px] font-normal leading-[1.02] md:text-[104px] md:leading-[0.95]">
                아날로그 붓질을 위한 컬러
              </h1>
              <p className="mt-8 max-w-186 break-keep text-lg leading-8 text-google-paper/72 md:text-xl md:leading-9">
                자개 팔레트는 보존하고, 블로그 본문에는 구아슈의 손맛을 더
                잘 살리는 저채도 컬러를 따로 탐색합니다. 배경은 조용하게,
                색은 썸네일과 강조 표면에서 먼저 검증합니다.
              </p>
            </div>

            <aside className={cn("border-1 border-white/14 p-6", styles.brushField)}>
              <p className="text-sm font-semibold uppercase text-google-paper/52">
                direction
              </p>
              <p className="mt-16 max-w-[340px] break-keep text-3xl font-normal leading-tight">
                black canvas, muted pigment, readable writing
              </p>
            </aside>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {baseColors.map((color) => (
              <ColorChipCard color={color} key={color.name} />
            ))}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {paletteGroups.map((group) => (
              <section
                className="border-1 border-white/14 bg-white/[0.03] p-5"
                key={group.title}
              >
                <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <h2 className="text-3xl font-normal">{group.title}</h2>
                  <p className="max-w-[320px] break-keep text-sm leading-6 text-google-paper/58">
                    {group.note}
                  </p>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {group.colors.map((color) => (
                    <ColorChipCard color={color} key={color.name} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-20">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase text-google-paper/50">
                  color + gouache candidates
                </p>
                <h2 className="mt-4 break-keep text-4xl font-normal leading-tight md:text-6xl">
                  여러 후보를 같은 조건에서 비교
                </h2>
              </div>
              <p className="max-w-[520px] break-keep text-sm leading-6 text-google-paper/60 md:text-base md:leading-7">
                `/test/color`의 저채도 팔레트와 `/test/gouache`의 붓질 레이어
                감각을 섞은 후보입니다. 본문 가독성, 썸네일 개성, 블로그 톤을
                같이 비교합니다.
              </p>
            </div>

            <div className="grid gap-5 xl:grid-cols-2">
              {candidates.map((candidate) => (
                <CandidatePreview
                  candidate={candidate}
                  key={candidate.title}
                />
              ))}
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
            <article className="border-1 border-white/14 bg-[#191714] p-6">
              <p className="text-sm font-semibold uppercase text-google-paper/50">
                readability sample
              </p>
              <h2 className="mt-12 max-w-[720px] break-keep text-5xl font-normal leading-tight md:text-6xl">
                글을 읽는 표면은 끝까지 조용해야 한다
              </h2>
              <p className="mt-8 max-w-186 break-keep text-lg leading-8 text-google-paper/72">
                구아슈의 질감은 본문 뒤에 직접 깔지 않고, 제목 주변의 여백,
                카드 이미지, 섹션 전환부에서만 낮은 농도로 드러냅니다.
              </p>
            </article>

            <article className="border-1 border-white/14 bg-white/[0.03] p-5">
              <div className={cn("h-32", styles.paperStrip)} />
              <p className="mt-8 text-2xl font-semibold">thumbnail strip</p>
              <p className="mt-4 break-keep text-sm leading-6 text-google-paper/60">
                밝은 종이색은 전체 배경이 아니라 썸네일 안에서만 제한적으로
                사용합니다.
              </p>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
};

export default ColorPage;
