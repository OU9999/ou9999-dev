import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getLocalizedPath, type AppLocale } from "@/i18n/config";

interface NotFoundContentProps {
  locale: AppLocale;
}

const NotFoundContent = async ({ locale }: NotFoundContentProps) => {
  const t = await getTranslations({ locale, namespace: "NotFound" });

  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center space-y-10">
      <p className="bg-mineral-lettering bg-clip-text text-9xl font-bold text-transparent">
        404
      </p>
      <Link
        href={getLocalizedPath(locale, "/")}
        className="rounded-lg border-1 border-google-paper/22 bg-content-header-black px-5 py-3 font-bold text-google-paper transition-colors hover:border-google-paper/60 hover:text-white"
      >
        {t("home")}
      </Link>
    </div>
  );
};

export { NotFoundContent };
