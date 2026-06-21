import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  hoverMineralTextGradient,
  mineralTextGradient,
} from "../common/styles";
import { cn } from "@/utils/tailwind-util";
import { PopoverButton } from "./header/popover-button";
import { getLocalizedPath, type AppLocale } from "@/i18n/config";

interface HeaderProps {
  locale: AppLocale;
}

const Header = async ({ locale }: HeaderProps) => {
  const t = await getTranslations({ locale, namespace: "Navigation" });
  const homeHref = getLocalizedPath(locale, "/");
  const aboutHref = getLocalizedPath(locale, "/about");

  return (
    <header className="relative z-40 flex h-14 w-full items-center border-b-1 border-mineral-blue/10 bg-google-ink/92 px-6 text-google-paper backdrop-blur-md md:h-[100px]">
      <nav className="mx-auto flex h-full w-full max-w-[1632px] items-center justify-between">
        <Link
          href={homeHref}
          className={cn(
            "flex cursor-pointer items-center justify-center text-2xl font-bold md:text-3xl",
            mineralTextGradient
          )}
        >
          <span>&lt;</span>
          <span className="hidden sm:inline-block">OU9999</span>
          <span>/&gt;</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <Link href={homeHref}>
            <p
              className={cn(
                "text-lg font-semibold text-google-paper",
                hoverMineralTextGradient
              )}
            >
              {t("home")}
            </p>
          </Link>
          <Link href={aboutHref}>
            <p
              className={cn(
                "text-lg font-semibold text-google-paper",
                hoverMineralTextGradient
              )}
            >
              {t("about")}
            </p>
          </Link>
          <div className="flex items-center gap-3 font-mono text-xs uppercase text-google-muted">
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-google-paper",
                locale === "ko" && "text-google-paper"
              )}
            >
              {t("ko")}
            </Link>
            <span>/</span>
            <Link
              href="/en"
              className={cn(
                "transition-colors hover:text-google-paper",
                locale === "en" && "text-google-paper"
              )}
            >
              {t("en")}
            </Link>
          </div>
        </div>
        <PopoverButton label={t("openMenu")} locale={locale} />
      </nav>
    </header>
  );
};

export { Header };
