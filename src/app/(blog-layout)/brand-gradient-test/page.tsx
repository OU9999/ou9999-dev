import { cn } from "@/utils/tailwind-util";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Gradient Test | ou9999.dev",
};

interface GradientVariation {
  name: string;
  role: string;
  description: string;
  surfaceClassName: string;
  accentClassName: string;
}

const gradientVariations: GradientVariation[] = [
  {
    name: "Pearl Sweep",
    role: "link / hover text",
    description: "청록, 보라, 분홍이 한 방향으로 미끄러지는 천연자개식 광택",
    surfaceClassName:
      "bg-[linear-gradient(115deg,#f8fffb_0%,#79ffe2_18%,#7d74ff_42%,#ff75c8_67%,#f8f0c8_84%,#f8fffb_100%)]",
    accentClassName:
      "bg-[linear-gradient(115deg,#f8fffb_0%,#79ffe2_18%,#7d74ff_42%,#ff75c8_67%,#f8f0c8_84%,#f8fffb_100%)]",
  },
  {
    name: "Shell Prism",
    role: "tag border / focus ring",
    description: "각도에 따라 달라지는 조개 안쪽의 프리즘 컬러를 원형으로 압축",
    surfaceClassName:
      "bg-[conic-gradient(from_150deg_at_50%_50%,#fafffb_0deg,#68fce1_48deg,#6f7cff_112deg,#ff70c9_174deg,#fff0b8_236deg,#65dfff_304deg,#fafffb_360deg)]",
    accentClassName:
      "bg-[conic-gradient(from_150deg_at_50%_50%,#fafffb_0deg,#68fce1_48deg,#6f7cff_112deg,#ff70c9_174deg,#fff0b8_236deg,#65dfff_304deg,#fafffb_360deg)]",
  },
  {
    name: "Lacquer Inlay",
    role: "button hover / card edge",
    description: "흑칠 바탕 위에 자개 조각이 박힌 듯한 깊은 어두운 표면",
    surfaceClassName:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(248,255,251,0.98)_0_4%,rgba(105,255,225,0.64)_9%,transparent_24%),radial-gradient(circle_at_72%_26%,rgba(142,117,255,0.82)_0_6%,transparent_27%),radial-gradient(circle_at_64%_78%,rgba(255,113,201,0.72)_0_7%,transparent_28%),linear-gradient(135deg,#1d1813_0%,#12110c_58%,#050505_100%)]",
    accentClassName:
      "bg-[linear-gradient(120deg,#12110c_0%,#46f7d7_30%,#8d73ff_52%,#ff6ec8_73%,#f6e7a9_100%)]",
  },
  {
    name: "Moonlit Nacre",
    role: "caption / subtle underline",
    description: "은백색과 청록을 낮은 채도로 눌러 본문 근처에서도 부담 없는 빛",
    surfaceClassName:
      "bg-[linear-gradient(135deg,#edf7f3_0%,#9df4e6_24%,#b7b9ff_52%,#f4b9de_76%,#fff4ca_100%)]",
    accentClassName:
      "bg-[linear-gradient(135deg,#edf7f3_0%,#9df4e6_24%,#b7b9ff_52%,#f4b9de_76%,#fff4ca_100%)]",
  },
  {
    name: "Fragment Glow",
    role: "thumbnail overlay",
    description: "얇은 자개 파편들이 겹친 느낌. 썸네일 hover 위에 얹기 좋음",
    surfaceClassName:
      "bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0_1px,transparent_1px_17px),radial-gradient(circle_at_21%_24%,rgba(117,255,228,0.82)_0_7%,transparent_25%),radial-gradient(circle_at_78%_32%,rgba(255,111,202,0.72)_0_8%,transparent_28%),radial-gradient(circle_at_45%_78%,rgba(255,235,159,0.68)_0_8%,transparent_30%),linear-gradient(135deg,#12110c_0%,#080706_100%)]",
    accentClassName:
      "bg-[linear-gradient(90deg,#65ffe2_0%,#8579ff_35%,#ff75ca_68%,#fff0b7_100%)]",
  },
  {
    name: "Blue Mother",
    role: "primary accent",
    description: "청록과 푸른빛을 더 강하게 둔 가장 기술 블로그다운 포인트",
    surfaceClassName:
      "bg-[radial-gradient(circle_at_22%_32%,#fafffb_0_5%,#78ffe4_14%,transparent_34%),radial-gradient(circle_at_72%_58%,#7d88ff_0_10%,transparent_38%),linear-gradient(135deg,#103c3b_0%,#12110c_58%,#040404_100%)]",
    accentClassName:
      "bg-[linear-gradient(120deg,#fafffb_0%,#74ffe2_24%,#39d8ff_48%,#7d88ff_76%,#fafffb_100%)]",
  },
];

const BrandGradientTestPage = () => {
  return (
    <section className="min-h-dvh w-full bg-google-ink px-6 py-16 text-google-paper md:py-24">
      <div className="mx-auto w-full max-w-[1632px]">
        <div className="max-w-5xl">
          <p className="font-mono text-sm uppercase leading-none text-google-muted md:text-base">
            Brand color test
          </p>
          <h1 className="mt-8 text-5xl font-normal leading-none md:text-7xl lg:text-[96px] lg:leading-[0.95]">
            나전칠기 포인트
            <br />
            그라데이션
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-google-paper md:text-2xl md:leading-10">
            전체 배경은 흑칠처럼 깊게 두고, hover와 포인트에만 천연자개의
            청록, 보라, 분홍, 은백색 광택을 얇게 올리는 실험 페이지입니다.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gradientVariations.map((variation) => (
            <article
              key={variation.name}
              className="group rounded-[28px] border border-white/12 bg-white/[0.03] p-4 transition-colors hover:border-white/28"
            >
              <div
                className={cn(
                  "h-64 rounded-3xl shadow-[inset_0_0_48px_rgba(255,255,255,0.14)] transition-transform duration-500 group-hover:scale-[1.015]",
                  variation.surfaceClassName
                )}
              />
              <div className="mt-6 flex flex-col gap-4">
                <div>
                  <p className="font-mono text-xs uppercase text-google-muted">
                    {variation.role}
                  </p>
                  <h2 className="mt-2 text-3xl font-normal leading-tight">
                    {variation.name}
                  </h2>
                </div>
                <p className="text-base leading-7 text-google-paper">
                  {variation.description}
                </p>
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "block h-3 w-28 rounded-full",
                      variation.accentClassName
                    )}
                  />
                  <span className="font-mono text-xs uppercase text-google-muted">
                    accent strip
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-24 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="rounded-[28px] border border-transparent bg-[linear-gradient(#12110C,#12110C)_padding-box,conic-gradient(from_150deg,#fafffb,#68fce1,#6f7cff,#ff70c9,#fff0b8,#65dfff,#fafffb)_border-box] p-8">
            <p className="font-mono text-xs uppercase text-google-muted">
              border hover
            </p>
            <h2 className="mt-5 text-4xl font-normal leading-tight">
              태그와 카드 경계
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/35 px-4 py-2 font-mono text-sm uppercase transition-colors hover:border-transparent hover:bg-[linear-gradient(115deg,#f8fffb_0%,#79ffe2_18%,#7d74ff_42%,#ff75c8_67%,#f8f0c8_84%,#f8fffb_100%)] hover:text-google-ink">
                clova-ocr
              </span>
              <span className="rounded-full border border-white/35 px-4 py-2 font-mono text-sm uppercase transition-colors hover:border-transparent hover:bg-[conic-gradient(from_150deg,#fafffb,#68fce1,#6f7cff,#ff70c9,#fff0b8,#65dfff,#fafffb)] hover:text-google-ink">
                algorithm
              </span>
            </div>
          </article>

          <article className="rounded-[28px] border border-white/12 bg-white/[0.03] p-8">
            <p className="font-mono text-xs uppercase text-google-muted">
              text hover
            </p>
            <h2 className="mt-5 text-4xl font-normal leading-tight">
              링크와 제목 강조
            </h2>
            <a
              href="#gradient-link"
              className="mt-8 inline-block text-3xl leading-tight text-google-paper transition-colors hover:bg-[linear-gradient(115deg,#f8fffb_0%,#79ffe2_18%,#7d74ff_42%,#ff75c8_67%,#f8f0c8_84%,#f8fffb_100%)] hover:bg-clip-text hover:text-transparent"
            >
              hover하면 자개광으로 변하는 텍스트
            </a>
            <div className="mt-5 h-1 w-48 rounded-full bg-[linear-gradient(90deg,#65ffe2_0%,#8579ff_35%,#ff75ca_68%,#fff0b7_100%)]" />
          </article>

          <article className="rounded-[28px] border border-white/12 bg-white/[0.03] p-8">
            <p className="font-mono text-xs uppercase text-google-muted">
              thumbnail hover
            </p>
            <h2 className="mt-5 text-4xl font-normal leading-tight">
              썸네일 위 광택막
            </h2>
            <div className="group/thumb mt-8 aspect-[16/9] overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#23211a,#12110c)]">
              <div className="h-full w-full bg-[radial-gradient(circle_at_22%_30%,rgba(255,255,255,0.2)_0_9%,transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_18px)] opacity-40 transition-opacity duration-500 group-hover/thumb:opacity-100" />
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default BrandGradientTestPage;
