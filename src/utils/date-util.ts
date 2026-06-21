import { defaultLocale, type AppLocale } from "@/i18n/config";

const formatDateToString = (
  dateString: string,
  locale: AppLocale = defaultLocale
): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  if (locale === "en") {
    return new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  return `${year}년 ${month}월 ${day}일`;
};

export { formatDateToString };
