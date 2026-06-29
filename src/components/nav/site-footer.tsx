import Link from "next/link";
import type { ReactNode } from "react";
import { RssIcon } from "../svg/rss-icon";
import { MailIcon } from "../svg/mail-icon";
import { GithubIcon } from "../svg/github-icon";

interface FooterLinkProps {
  icon: ReactNode;
  label: string;
  link: string;
}

const FooterLink = ({ icon, label, link }: FooterLinkProps) => {
  return (
    <Link
      href={link}
      className="group flex items-center gap-3 font-brand text-lg leading-none text-google-paper/76 transition-colors hover:text-mineral-blue md:text-xl"
    >
      <div className="h-5 w-5 fill-google-paper/78 transition-colors group-hover:fill-mineral-blue md:h-6 md:w-6">
        {icon}
      </div>
      <span>{label}</span>
    </Link>
  );
};

const FooterBrush = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-[-36px] h-32 w-[188vw] -translate-x-1/2 scale-y-[0.42] bg-[url('/imgs/header/home-brush-hard-chalk-steel-v1.png')] bg-[length:100%_100%] bg-center bg-no-repeat opacity-32 md:top-[-78px] md:h-60 md:w-[168vw] md:scale-y-[0.48]"
    />
  );
};

const Footer = () => {
  return (
    <footer className="relative z-10 mt-20 min-h-[360px] w-full overflow-hidden bg-transparent px-6 pb-9 pt-0 text-google-paper md:mt-28 md:min-h-[300px] md:px-16 md:pb-10">
      <FooterBrush />

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col gap-14 pt-36 md:flex-row md:items-end md:justify-between md:gap-12 md:pt-40">
        <div className="max-w-[570px]">
          <p className="font-brand text-3xl font-normal leading-none tracking-[0.18em] text-google-paper/82 md:text-[34px]">
            Only Clear Later
          </p>
          <p className="mt-7 max-w-[560px] text-lg leading-9 text-google-paper/66 md:text-[19px]">
            I write to understand what was, to connect what is,{" "}
            <br className="hidden md:block" />
            and to prepare for what&apos;s next.
          </p>
        </div>

        <div className="w-full max-w-[390px] md:pb-3">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-5 md:justify-end">
            <FooterLink icon={<RssIcon />} label="RSS" link="/feed.xml" />
            <FooterLink
              icon={<GithubIcon />}
              label="GitHub"
              link="https://github.com/OU9999"
            />
            <FooterLink
              icon={<MailIcon />}
              label="Mail"
              link="mailto:omh232323@gmail.com"
            />
          </div>
          <div className="mt-7 h-px w-full bg-mineral-blue/24" />
          <p className="mt-6 text-right font-brand text-base leading-none text-google-paper/42 md:text-lg">
            Built with Next.js + Vercel
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
