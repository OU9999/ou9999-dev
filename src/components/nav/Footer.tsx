import Link from "next/link";
import RssIcon from "../svg/rss-icon";
import MailIcon from "../svg/mail-icon";
import GithubIcon from "../svg/github-icon";

interface IIconBoxProps {
  link: string;
  icon: JSX.Element;
}
const IconBox = ({ link, icon }: IIconBoxProps) => {
  return (
    <Link href={link}>
      <div
        aria-label={`link-for-${link}`}
        className="w-4 h-4 md:w-5 md:h-5 cursor-pointer fill-black dark:fill-white hover:fill-gradient-end hover:dark:fill-gradient-start"
      >
        {icon}
      </div>
    </Link>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full mt-20 flex justify-center border-t-1 border-slate-300 dark:border-slate-700">
      <div className="w-full max-w-276 p-5 flex justify-between items-center">
        <div className="flex flex-col space-y-1  text-slate-500 dark:text-slate-400">
          <div className="flex text-sm">
            <p>{currentYear}﹒©</p>
            <p className="font-bold">&nbsp;OU9999</p>
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

export default Footer;
