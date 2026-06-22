import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isAppLocale } from "./config";

export default getRequestConfig(async ({ locale, requestLocale }) => {
  const requestedLocale = locale ?? (await requestLocale);
  const resolvedLocale = isAppLocale(requestedLocale)
    ? requestedLocale
    : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default,
    timeZone: "Asia/Seoul",
  };
});
