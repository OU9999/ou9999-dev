import type { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/utils/tailwind-util";

export const metadata: Metadata = {
  title: "Jagae Test | OU9999",
  description: "Nacre gradient test page",
};

interface Swatch {
  className: string;
  name: string;
}

const swatches: Swatch[] = [
  {
    className: "bg-[#f8fff9]",
    name: "pearl",
  },
  {
    className: "bg-[#ffeaf4]",
    name: "blush",
  },
  {
    className: "bg-[#f7cfe3]",
    name: "rose",
  },
  {
    className: "bg-[#dcd6ff]",
    name: "lilac",
  },
  {
    className: "bg-[#c8dfff]",
    name: "ice blue",
  },
  {
    className: "bg-[#f7ffff]",
    name: "silver",
  },
  {
    className: "bg-[#fff1e4]",
    name: "cream",
  },
];

const JagaePage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-google-ink text-google-paper">
      <section className="mx-auto w-full max-w-[1632px] px-6 py-24 md:py-32">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,520px)] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase leading-none text-google-paper/50 md:text-sm">
              /test/jagae
            </p>
            <h1 className="mt-8 bg-nacre-moonlit bg-clip-text text-[88px] font-normal leading-[0.9] text-transparent md:text-[160px]">
              자개
            </h1>
            <p className="mt-8 max-w-186 break-keep text-lg leading-8 text-google-paper/78 md:text-xl md:leading-9">
              검은 옻칠 위에 흰 자개, 연분홍, 라벤더, 은청색 빛이 얇게
              겹치는 방향으로 그라데이션을 조정합니다.
            </p>
          </div>

          <div className="rounded-lg bg-nacre-moonlit p-px shadow-[0_28px_90px_rgb(0_0_0/0.34)]">
            <div className="rounded-[7px] bg-google-ink p-5">
              <div className="h-48 rounded-md bg-nacre-moonlit md:h-64" />
              <div className="mt-5 grid grid-cols-7 gap-2">
                {swatches.map((swatch) => (
                  <div
                    aria-label={swatch.name}
                    className={cn(
                      "h-10 rounded-sm border-1 border-white/16",
                      swatch.className
                    )}
                    key={swatch.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 h-px w-full bg-nacre-moonlit" />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <article className="rounded-lg border-1 border-white/12 bg-white/5 p-6">
            <p className="bg-nacre-moonlit bg-clip-text text-5xl font-normal leading-none text-transparent md:text-6xl">
              Shell Text
            </p>
            <p className="mt-20 text-sm leading-6 text-google-paper/62">
              Large title, logo, link hover
            </p>
          </article>

          <article className="rounded-lg bg-nacre-moonlit p-px">
            <div className="h-full rounded-[7px] bg-google-ink p-6">
              <div className="h-32 rounded-md bg-[radial-gradient(circle_at_22%_18%,rgb(255_255_255/0.12),transparent_28%),linear-gradient(135deg,rgb(31_29_25),rgb(14_13_10))]" />
              <p className="mt-20 text-sm leading-6 text-google-paper/62">
                Hairline frame
              </p>
            </div>
          </article>

          <article className="rounded-lg border-1 border-white/12 bg-white/5 p-6">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border-1 border-white/22 px-3 py-1.5 font-mono text-sm uppercase leading-none text-google-paper">
                lacquer
              </span>
              <span className="rounded-full bg-nacre-moonlit px-3 py-1.5 font-mono text-sm uppercase leading-none text-google-ink">
                nacre
              </span>
            </div>
            <p className="mt-28 text-sm leading-6 text-google-paper/62">
              Tag and action states
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-lg bg-nacre-moonlit p-px">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[7px] bg-google-ink">
            <Image
              alt="Jagae image frame sample"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 96vw"
              src="/imgs/header/ocr.webp"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default JagaePage;
