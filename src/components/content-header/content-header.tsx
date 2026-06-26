import { Tag } from "@/components/common/tag-link";
import { mineralTextGradient } from "@/components/common/styles";
import { formatDateToString } from "@/utils/date-util";
import { cn } from "@/utils/tailwind-util";
import {
  defaultLocale,
  getLocalizedPath,
  type AppLocale,
} from "@/i18n/config";
import Link from "next/link";
import {
  ContentHeaderMotionBrush,
  ContentHeaderMotionImage,
  ContentHeaderMotionItem,
  ContentHeaderMotionRoot,
  ContentHeaderMotionText,
  ContentHeaderMotionTitle,
} from "./content-header-motion";
import { HomeBrushMark } from "./home-brush-mark";
import { ImageWithPlaceholderHeader } from "./image-with-placeholder-header";

interface ContentHeaderProps {
  title: string;
  text: string;
  img?: string;
  tags?: string[];
  date?: string;
  main?: boolean;
  brandBrush?: boolean;
  locale?: AppLocale;
}

const ContentHeader = ({
  title,
  text,
  img,
  tags,
  date,
  main,
  brandBrush,
  locale = defaultLocale,
}: ContentHeaderProps) => {
  if (!main) {
    return (
      <ContentHeaderMotionRoot className="w-full bg-transparent pb-0 pt-[88px] text-google-paper md:pt-[51px]">
        <div className="w-full">
          <ContentHeaderMotionText className="w-full text-left">
            {tags && (
              <ContentHeaderMotionItem className="flex flex-wrap items-center justify-start gap-3 font-mono text-xs uppercase leading-none tracking-normal text-google-paper/70 md:text-sm">
                {tags.map((tag) => (
                  <Link
                    key={"POST_TAG" + tag}
                    href={getLocalizedPath(
                      locale,
                      `/tags/${encodeURIComponent(tag)}`
                    )}
                    className="transition-colors hover:text-google-paper"
                  >
                    {tag}
                  </Link>
                ))}
              </ContentHeaderMotionItem>
            )}
            <ContentHeaderMotionTitle
              className={cn(
                "w-full max-w-[900px] text-[32px] font-normal leading-9 sm:text-4xl sm:leading-10 md:text-5xl md:leading-none",
                mineralTextGradient,
                tags ? "mt-5 md:mt-4" : "mt-0"
              )}
            >
              {title}
            </ContentHeaderMotionTitle>
          </ContentHeaderMotionText>

          {img && (
            <ContentHeaderMotionImage className="relative mt-10 aspect-[342/186] w-full overflow-hidden rounded-lg bg-mineral-frame shadow-[0_28px_90px_rgb(4_8_8/0.34)] ring-1 ring-mineral-blue/20 md:mt-14 md:aspect-[61/30]">
              <ImageWithPlaceholderHeader alt={title} img={img} preload />
            </ContentHeaderMotionImage>
          )}

          {date && (
            <ContentHeaderMotionItem className="mx-auto mt-8 flex w-full max-w-[624px] flex-col items-start justify-start gap-1 font-mono text-xs uppercase leading-[21px] tracking-normal text-google-paper/72 md:flex-row md:gap-2 md:text-[15px] md:leading-6">
              <span>OU9999</span>
              <span className="hidden md:inline">·</span>
              <time dateTime={date}>{formatDateToString(date, locale)}</time>
            </ContentHeaderMotionItem>
          )}

          {text && (
            <ContentHeaderMotionItem className="mx-auto mt-14 max-w-[624px] text-left text-[15px] leading-6 text-google-paper/82 md:text-[17px] md:leading-[27px]">
              <p>{text}</p>
            </ContentHeaderMotionItem>
          )}
        </div>
      </ContentHeaderMotionRoot>
    );
  }

  return (
    <ContentHeaderMotionRoot
      className={cn(
        "w-full bg-transparent px-6 text-google-paper",
        main
          ? "pb-6 pt-24 md:pb-8 md:pt-20"
          : "pb-16 pt-24 md:pb-24 md:pt-[126px]"
      )}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <ContentHeaderMotionText
          className={cn(
            "w-full",
            brandBrush && "relative min-h-[230px] md:min-h-[168px]"
          )}
        >
          {brandBrush && (
            <ContentHeaderMotionBrush className="pointer-events-none absolute left-[12%] top-[84px] z-0 w-[min(82vw,310px)] translate-x-0 opacity-90 md:left-[330px] md:top-[-14px] md:w-[650px] md:opacity-85 lg:left-[410px] lg:top-[7px] lg:w-[650px]">
              <HomeBrushMark />
            </ContentHeaderMotionBrush>
          )}

          <div
            className={cn(
              "relative z-10 min-w-0",
              brandBrush && "pt-16 md:ml-[170px] md:pt-0 lg:ml-[228px]"
            )}
          >
            {date && (
              <ContentHeaderMotionItem className="font-mono text-xs uppercase leading-none tracking-normal text-current md:text-base">
                <time dateTime={date}>{formatDateToString(date, locale)}</time>
              </ContentHeaderMotionItem>
            )}
            <ContentHeaderMotionTitle
              className={cn(
                "w-full text-5xl font-normal leading-none sm:text-6xl md:text-7xl lg:text-[90px] lg:leading-[0.95]",
                mineralTextGradient,
                date ? "mt-10 md:mt-[51px]" : "mt-0"
              )}
            >
              {title}
            </ContentHeaderMotionTitle>
            <ContentHeaderMotionItem
              className={cn(
                "flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between",
                brandBrush ? "mt-3" : "mt-8",
                !main && "md:mt-16"
              )}
            >
              <div className="max-w-2xl text-base text-google-paper/78 md:text-lg">
                <p>{main ? text : "OU9999"}</p>
              </div>
              {tags && (
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {tags.map((tag) => (
                    <Tag
                      key={"ITEM" + tag}
                      tag={tag}
                      variant="paper"
                      locale={locale}
                    />
                  ))}
                </div>
              )}
            </ContentHeaderMotionItem>
          </div>
        </ContentHeaderMotionText>

        {text && !main && (
          <ContentHeaderMotionItem className="mx-auto mt-14 max-w-[684px] text-2xl leading-snug text-google-paper/82 md:mt-20 md:text-3xl">
            <p>{text}</p>
          </ContentHeaderMotionItem>
        )}
      </div>
    </ContentHeaderMotionRoot>
  );
};

export { ContentHeader };
