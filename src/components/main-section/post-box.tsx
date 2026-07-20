import Link from "next/link";
import { hoverMineralTextGradient } from "../common/styles";
import { formatDateToString } from "@/utils/date-util";
import { cn } from "@/utils/tailwind-util";
import { ImageWithPlaceholderHeader } from "../content-header/image-with-placeholder-header";
import {
  defaultLocale,
  getLocalizedPath,
  type AppLocale,
} from "@/i18n/config";

interface PostBoxProps {
  title: string;
  tags: string[];
  description: string;
  date: string;
  thumbnail: string;
  slug: string;
  locale?: AppLocale;
}

const PostBox = ({
  title,
  tags,
  description,
  date,
  thumbnail,
  slug,
  locale = defaultLocale,
}: PostBoxProps) => {
  const postHref = getLocalizedPath(locale, `/p/${slug}`);

  return (
    <article className="w-full flex flex-col">
      <Link
        href={postHref}
        className="relative block aspect-[16/9] w-full overflow-hidden rounded-lg border-1 border-mineral-blue/18 bg-mineral-frame shadow-[0_18px_60px_rgb(4_8_8/0.28)] transition duration-200 hover:-translate-y-1 hover:border-mineral-blue/34 hover:shadow-[0_22px_70px_rgb(66_83_79/0.24)]"
      >
        <ImageWithPlaceholderHeader alt={title} img={thumbnail} />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mineral-soot/24 via-transparent to-mineral-bone/5" />
      </Link>
      <div className="mt-7 w-full">
        <Link href={postHref}>
          <p
            className={cn(
              "inline cursor-pointer text-2xl font-normal leading-tight text-google-paper sm:text-[32px] sm:leading-[35px]",
              hoverMineralTextGradient
            )}
          >
            {title}
          </p>
        </Link>
      </div>
      <div className="mt-4 w-full text-sm text-google-muted md:text-base">
        <p>{formatDateToString(date, locale)}</p>
      </div>
      <div className="mt-2 w-full text-sm text-google-paper/72 md:text-base">
        <p>{description}</p>
      </div>
      <div className="mt-5 flex w-full flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-mineral-blue/32 px-3 py-1.5 font-mono text-base uppercase leading-none text-google-paper"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export { PostBox };
