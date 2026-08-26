import Link from "next/link";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { MailIcon } from "../svg/mail-icon";
import { GithubIcon } from "../svg/github-icon";
import { OwlIcon } from "../svg/owl-icon";
import { defaultLocale, type AppLocale } from "@/i18n/config";
import { AboutBrushLayer } from "./about-brush-layer";
import { AboutCopyMotion, type AboutCopySegment } from "./about-copy-motion";

interface IconBoxProps {
  link: string;
  icon: ReactNode;
  subText?: string;
}

const IconBox = ({ link, icon, subText }: IconBoxProps) => {
  return (
    <Link href={link}>
      <div className="group flex cursor-pointer items-center justify-center space-x-1 rounded-md p-2 transition-colors hover:bg-google-paper/8">
        <div className="h-5 w-5 fill-google-paper/72 transition-colors group-hover:fill-white">
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
  const statementLines: AboutCopySegment[] = [
    {
      prefix: t("statement.line1.prefix"),
      highlight: t("statement.line1.highlight"),
      suffix: t("statement.line1.suffix"),
    },
    {
      prefix: t("statement.line2.prefix"),
      highlight: t("statement.line2.highlight"),
      suffix: t("statement.line2.suffix"),
    },
    {
      prefix: t("statement.line3.prefix"),
      highlight: t("statement.line3.highlight"),
      suffix: t("statement.line3.suffix"),
    },
  ];
  const meaningLine2: AboutCopySegment = {
    prefix: t("meaning.line2.prefix"),
    highlight: t("meaning.line2.highlight"),
    suffix: t("meaning.line2.suffix"),
  };

  return (
    <section className="relative flex min-h-[calc(100dvh-56px)] w-full items-start px-6 pb-20 pt-28 text-google-paper md:min-h-[calc(100dvh-100px)] md:px-0 md:pb-0 md:pt-[264px]">
      <AboutBrushLayer />

      <div className="relative z-10 mx-auto w-full max-w-[1536px] md:pl-[386px]">
        <div className="grid w-full grid-cols-1 gap-14 md:grid-cols-[238px_minmax(0,540px)] md:gap-[96px]">
          <div className="flex flex-col items-start">
            <h1 className="font-mono text-sm uppercase leading-none tracking-[0.5em] text-google-paper md:text-base">
              About
            </h1>
            <span
              className="mt-6 h-1 w-[74px] rounded-full bg-google-paper/84 shadow-[0_0_12px_rgb(255_255_255/0.14)]"
              aria-hidden="true"
            />
            <p className="mt-6 font-mono text-base leading-none tracking-[0.12em] text-google-paper/66 md:text-lg">
              Only Clear Later
            </p>
          </div>

          <div className="w-full max-w-[540px] md:-mt-2">
            <AboutCopyMotion
              statementLines={statementLines}
              meaningLine1={t("meaning.line1")}
              meaningLine2={meaningLine2}
            />

            <div data-testid="about-profile">
              <p className="mt-14 font-mono text-sm leading-none tracking-normal text-google-paper/66 md:text-base">
                {t("profile")}
              </p>
              <div className="mt-6 flex items-center gap-5">
                <IconBox icon={<GithubIcon />} link="https://github.com/OU9999" />
                <IconBox icon={<OwlIcon />} link="https://ou-playground.com/" />
                <IconBox icon={<MailIcon />} link="mailto:omh232323@gmail.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutMe };
