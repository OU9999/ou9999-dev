import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { MailIcon } from "../svg/mail-icon";
import { GithubIcon } from "../svg/github-icon";
import { OwlIcon } from "../svg/owl-icon";
import { defaultLocale, type AppLocale } from "@/i18n/config";

interface IconBoxProps {
  link: string;
  icon: ReactNode;
  subText?: string;
}

const IconBox = ({ link, icon, subText }: IconBoxProps) => {
  return (
    <Link href={link}>
      <div className="flex cursor-pointer items-center justify-center space-x-1 rounded-md p-2 transition-colors hover:bg-mineral-teal/22">
        <div className="h-5 w-5 fill-mineral-blue">
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
    <section className="relative min-h-dvh w-full overflow-hidden px-6 text-google-paper md:px-0">
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 max-md:hidden">
          <Image
            alt=""
            src="/imgs/about/about-brush-left.png"
            fill
            className="object-cover opacity-80"
            sizes="100vw"
            preload
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-google-ink via-google-ink/82 to-transparent" />
        <div className="absolute inset-y-0 left-[240px] right-0 hidden bg-[linear-gradient(90deg,rgb(7_7_7/0)_0%,rgb(7_7_7/0.9)_12%,rgb(7_7_7/0.96)_24%,rgb(7_7_7/0)_100%)] md:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-google-ink/5 to-google-ink/18" />
      </div>

      <div className="relative z-10 mx-auto min-h-dvh w-full max-w-[1536px] pb-16 pt-36 md:pb-0 md:pl-[386px] md:pt-[365px]">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-[238px_minmax(0,540px)] md:gap-[96px]">
          <div className="flex flex-col items-start">
            <h1 className="font-mono text-sm uppercase leading-none tracking-[0.5em] text-google-paper md:text-base">
              About
            </h1>
            <span
              className="mt-6 h-1 w-[74px] rounded-full bg-google-paper/84 shadow-[0_0_12px_rgb(162_173_179/0.18)]"
              aria-hidden="true"
            />
            <p className="mt-6 font-mono text-base leading-none tracking-[0.12em] text-mineral-blue md:text-lg">
              Only Clear Later
            </p>
          </div>

          <div className="w-full max-w-[540px] md:-mt-2">
            <div className="flex flex-col gap-10 text-[17px] font-normal leading-[31px] text-google-paper/92 md:text-lg md:leading-[34px]">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
            </div>

            <p className="mt-14 font-mono text-sm leading-none tracking-normal text-mineral-blue md:text-base">
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
    </section>
  );
};

export { AboutMe };
