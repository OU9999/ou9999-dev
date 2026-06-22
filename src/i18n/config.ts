const locales = ["ko", "en"] as const;
const defaultLocale = "ko";

type AppLocale = (typeof locales)[number];

const isAppLocale = (value: unknown): value is AppLocale => {
  return typeof value === "string" && locales.includes(value as AppLocale);
};

const getLocalizedPath = (locale: AppLocale, pathname: string): string => {
  const normalizedPathname = pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (locale === defaultLocale) {
    return normalizedPathname;
  }

  if (normalizedPathname === "/") {
    return `/${locale}`;
  }

  return `/${locale}${normalizedPathname}`;
};

export { defaultLocale, getLocalizedPath, isAppLocale, locales };
export type { AppLocale };
