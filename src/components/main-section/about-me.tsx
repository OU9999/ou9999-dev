import Link from "next/link";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { cn } from "@/utils/tailwind-util";
import { MailIcon } from "../svg/mail-icon";
import { GithubIcon } from "../svg/github-icon";
import { OwlIcon } from "../svg/owl-icon";
import { defaultLocale, type AppLocale } from "@/i18n/config";

interface IconBoxProps {
  link: string;
  icon: ReactNode;
  owl?: boolean;
  subText?: string;
}

const IconBox = ({ link, icon, owl, subText }: IconBoxProps) => {
  return (
    <Link href={link}>
      <div className="flex cursor-pointer items-center justify-center space-x-1 rounded-md p-2 transition-colors hover:bg-mineral-teal/22">
        <div
          className={cn("h-5 w-5", owl ? "fill-mineral-ink" : "fill-google-paper")}
        >
          {icon}
        </div>
        {subText && <p className="font-xs relative top-[-2px] ">{subText}</p>}
      </div>
    </Link>
  );
};

interface AboutMeProps {
  locale?: AppLocale;
}

const AboutMe = async ({ locale = defaultLocale }: AboutMeProps) => {
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return (
    <div className="mt-14 flex w-full flex-col items-center justify-center md:mt-20">
      <div className="mt-10 flex w-full max-w-138 flex-col space-y-10 text-xs text-google-muted md:text-sm">
        <p>{t("paragraph1")}</p>
        <p>{t("paragraph2")}</p>
      </div>

      <p className="text-md mt-16 text-center text-google-paper md:mt-20 md:text-lg">
        {t("profile")}
      </p>
      <div className="mt-1 flex space-x-1">
        <IconBox icon={<MailIcon />} link="mailto:omh232323@gmail.com" />
        <IconBox icon={<GithubIcon />} link="https://github.com/OU9999" />
        <IconBox icon={<OwlIcon />} link="https://ou-playground.com/" owl />
      </div>
    </div>
  );
};

export { AboutMe };
