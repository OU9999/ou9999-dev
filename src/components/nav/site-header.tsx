import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getLocalizedPath, type AppLocale } from "@/i18n/config";
import { getTagsFromPosts } from "@/utils/post-util";
import { HeaderFrame } from "./header/header-frame";
import { HeaderNavLink } from "./header/header-nav-link";
import { LocaleSwitchLink } from "./header/locale-switch-link";
import { PopoverButton } from "./header/popover-button";

interface HeaderProps {
  locale: AppLocale;
}

const Header = async ({ locale }: HeaderProps) => {
  const [t, tagsCount] = await Promise.all([
    getTranslations({ locale, namespace: "Navigation" }),
    getTagsFromPosts(locale),
  ]);
  const homeHref = getLocalizedPath(locale, "/");
  const aboutHref = getLocalizedPath(locale, "/about");
  const localeSwitchLabel = locale === "ko" ? t("en") : t("ko");

  return (
    <header className="relative z-40 w-full px-5 pt-4 text-google-paper md:px-10 md:pt-6">
      <nav className="relative mx-auto flex h-[58px] w-full max-w-[1460px] items-center justify-between bg-google-ink/72 px-8 backdrop-blur-[2px] md:h-[92px] md:px-[50px]">
        <HeaderFrame />
        <Link
          href={homeHref}
          aria-label="OU9999 home"
          className="group relative z-10 flex h-10 w-[72px] cursor-pointer items-center justify-center overflow-hidden md:ml-2 md:h-11 md:w-[72px]"
        >
          <span
            aria-hidden="true"
            className="block h-full w-full bg-[url('/imgs/header/ou-symbol-negative-space-v1.webp')] bg-[length:116%_auto] bg-center bg-no-repeat transition-opacity group-hover:opacity-82 md:bg-[length:112%_auto]"
          />
        </Link>

        <div className="relative z-10 hidden items-center gap-[54px] md:flex">
          <HeaderNavLink href={homeHref} label={t("home")} />
          <HeaderNavLink href={aboutHref} label={t("about")} />
          <LocaleSwitchLink label={localeSwitchLabel} locale={locale} />
        </div>
        <div className="relative z-10 md:hidden">
          <PopoverButton
            aboutHref={aboutHref}
            aboutLabel={t("about")}
            closeLabel={t("closeMenu")}
            homeHref={homeHref}
            homeLabel={t("home")}
            locale={locale}
            localeSwitchLabel={localeSwitchLabel}
            menuLabel={t("menu")}
            openLabel={t("openMenu")}
            tagLabel={t("tag")}
            tags={tagsCount}
          />
        </div>
      </nav>
    </header>
  );
};

export { Header };
