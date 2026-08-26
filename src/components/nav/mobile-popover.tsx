import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { BackButton } from "@/components/nav/header/back-button";
import {
  defaultLocale,
  getLocalizedPath,
  type AppLocale,
} from "@/i18n/config";
import { getTagsFromPosts } from "@/utils/post-util";

interface LinkButtonProps {
  lang?: string;
  text: string;
  link: string;
}

const LinkButton = ({ lang, text, link }: LinkButtonProps) => {
  return (
    <Link
      href={link}
      lang={lang}
      className="text-2xl font-semibold text-google-paper transition-colors hover:text-white"
    >
      {text}
    </Link>
  );
};

interface TagItemProps {
  title: string;
  count: number;
  locale: AppLocale;
}

const TagItem = ({ title, count, locale }: TagItemProps) => {
  return (
    <Link href={getLocalizedPath(locale, `/tags/${encodeURIComponent(title)}`)}>
      <div className="flex w-full items-center rounded-md px-3 py-1">
        <p className="cursor-pointer text-google-paper/64 transition-colors hover:text-white hover:underline">
          {title.toUpperCase()}
        </p>
        <p className="text-xs text-google-muted">&nbsp;({count})</p>
      </div>
    </Link>
  );
};

interface MobilePopoverProps {
  locale: AppLocale;
}

const MobilePopover = async ({ locale }: MobilePopoverProps) => {
  const tagsCount = await getTagsFromPosts(locale);
  const t = await getTranslations({ locale, namespace: "Navigation" });
  const targetLocale = locale === defaultLocale ? "en" : defaultLocale;
  const localeSwitchLabel = locale === defaultLocale ? t("en") : t("ko");

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 h-dvh w-dvw overflow-y-auto bg-dark-bg text-google-paper">
      <div className="relative flex min-h-dvh w-full flex-col items-center justify-start">
        <BackButton label={t("closeMenu")} />
        <p className="mb-7 mt-20 text-4xl font-bold">{t("menu")}</p>
        <div className="flex flex-col items-center justify-center space-y-3">
          <LinkButton text={t("home")} link={getLocalizedPath(locale, "/")} />
          <LinkButton
            text={t("about")}
            link={getLocalizedPath(locale, "/about")}
          />
          <LinkButton
            lang="en"
            text={localeSwitchLabel}
            link={getLocalizedPath(targetLocale, "/popover")}
          />
        </div>
        <p className="mb-7 mt-20 text-4xl font-bold">{t("tag")}</p>
        <div className="flex flex-col items-center justify-center space-y-3">
          {tagsCount?.map((tag) => (
            <TagItem
              key={"POPOVERTAGITEM" + tag.tag}
              title={tag.tag}
              count={tag.count}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { MobilePopover };
