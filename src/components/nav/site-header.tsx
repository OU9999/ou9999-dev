import { getTranslations } from "next-intl/server";
import { getLocalizedPath, type AppLocale } from "@/i18n/config";
import { HeaderShell } from "./site-header-shell";

interface HeaderProps {
  locale: AppLocale;
}

const Header = async ({ locale }: HeaderProps) => {
  const t = await getTranslations({ locale, namespace: "Navigation" });
  const homeHref = getLocalizedPath(locale, "/");
  const aboutHref = getLocalizedPath(locale, "/about");
  const localeSwitchLabel = locale === "ko" ? t("en") : t("ko");

  return (
    <HeaderShell
      homeHref={homeHref}
      aboutHref={aboutHref}
      homeLabel={t("home")}
      aboutLabel={t("about")}
      menuLabel={t("openMenu")}
      localeSwitchLabel={localeSwitchLabel}
      locale={locale}
    />
  );
};

export { Header };
