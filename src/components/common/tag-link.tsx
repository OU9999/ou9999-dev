import Link from "next/link";
import { hoverMineralTextGradient } from "@/components/common/styles";
import {
  defaultLocale,
  getLocalizedPath,
  type AppLocale,
} from "@/i18n/config";
import { cn } from "@/utils/tailwind-util";

interface TagProps {
  tag: string;
  variant?: "ink" | "paper";
  locale?: AppLocale;
}

const Tag = ({ tag, variant = "paper", locale = defaultLocale }: TagProps) => {
  const tagHref = getLocalizedPath(locale, `/tags/${encodeURIComponent(tag)}`);

  return (
    <>
      <Link href={tagHref}>
        <p
          className={cn(
            "cursor-pointer rounded-full border px-3 py-1.5 font-mono text-base uppercase leading-none transition-colors",
            variant === "ink" &&
              "border-mineral-ink/40 text-mineral-ink hover:bg-mineral-ink hover:text-mineral-bone",
            variant === "paper" &&
              cn(
                "border-mineral-blue/32 text-google-paper hover:border-mineral-blue/70",
                hoverMineralTextGradient
              )
          )}
        >
          {tag.toUpperCase()}
        </p>
      </Link>
    </>
  );
};

export { Tag };
