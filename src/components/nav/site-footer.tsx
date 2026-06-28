import Link from "next/link";
import type { ReactNode } from "react";
import { RssIcon } from "../svg/rss-icon";
import { MailIcon } from "../svg/mail-icon";
import { GithubIcon } from "../svg/github-icon";

interface IIconBoxProps {
  link: string;
  icon: ReactNode;
}
const IconBox = ({ link, icon }: IIconBoxProps) => {
  return (
    <Link href={link}>
      <div
        aria-label={`link-for-${link}`}
        className="w-4 h-4 cursor-pointer fill-google-paper transition-colors hover:fill-mineral-blue md:h-5 md:w-5"
      >
        {icon}
      </div>
    </Link>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative z-10 mt-20 flex w-full justify-center border-t-1 border-mineral-blue/16 bg-google-ink/86 backdrop-blur-sm">
      <div className="flex w-full max-w-276 items-center justify-between p-5">
        <div className="flex flex-col space-y-1 text-google-paper">
          <div className="flex text-sm">
            <p>{currentYear}﹒©</p>
            <p className="font-brand font-bold">&nbsp;OU9999</p>
          </div>
          <p className="text-xs">Powered by Next.js﹒Vercel</p>
        </div>
        <div className="flex space-x-4 md:space-x-5">
          <IconBox link="mailto:omh232323@gmail.com" icon={<MailIcon />} />
          <IconBox link="https://github.com/OU9999" icon={<GithubIcon />} />
          <IconBox link="/feed.xml" icon={<RssIcon />} />
        </div>
      </div>
    </div>
  );
};

export { Footer };
