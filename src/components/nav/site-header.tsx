import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getLocalizedPath, type AppLocale } from "@/i18n/config";
import { hoverMineralTextGradient } from "../common/styles";
import { cn } from "@/utils/tailwind-util";
import { LocaleSwitchLink } from "./header/locale-switch-link";
import { PopoverButton } from "./header/popover-button";

interface HeaderProps {
  locale: AppLocale;
}

const Header = async ({ locale }: HeaderProps) => {
  const t = await getTranslations({ locale, namespace: "Navigation" });
  const homeHref = getLocalizedPath(locale, "/");
  const aboutHref = getLocalizedPath(locale, "/about");
  const localeSwitchLabel = locale === "ko" ? t("en") : t("ko");

  return (
    <header className="relative z-40 flex h-14 w-full items-center border-b-1 border-mineral-blue/10 bg-google-ink/92 px-6 text-google-paper backdrop-blur-md md:h-[100px]">
      <nav className="mx-auto flex h-full w-full max-w-[1632px] items-center justify-between">
        <Link
          href={homeHref}
          aria-label="OU9999 home"
          className="group flex h-10 w-[72px] cursor-pointer items-center justify-center overflow-hidden md:h-14 md:w-[100px]"
        >
          <span
            aria-hidden="true"
            className="block h-full w-full bg-[url('/imgs/header/ou-symbol-stamped-gouache-v1.webp')] bg-[length:126%_auto] bg-center bg-no-repeat transition-opacity group-hover:opacity-82 md:bg-[length:120%_auto]"
          />
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
          <LocaleSwitchLink label={localeSwitchLabel} locale={locale} />
        </div>
        <PopoverButton label={t("openMenu")} locale={locale} />
      </nav>
    </header>
  );
};

export { Header };
