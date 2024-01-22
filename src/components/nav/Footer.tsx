import Link from "next/link";
import RssIcon from "../svg/RssIcon";
import MailIcon from "../svg/MailIcon";
import GithubIcon from "../svg/GithubIcon";

interface IIconBoxProps {
  link: string;
  icon: JSX.Element;
}
const IconBox = ({ link, icon }: IIconBoxProps) => {
  return (
    <Link href={link}>
      <div className="w-5 h-5 cursor-pointer fill-black dark:fill-white hover:fill-gradient-end hover:dark:fill-gradient-start">
        {icon}
      </div>
    </Link>
  );
};

const Footer = () => {
  return (
    <div className="w-full mt-20 flex justify-center">
      <div className="w-full max-w-276 border-t-1 border-slate-300 dark:border-slate-700 pt-10 pb-5 flex flex-col justify-center items-center">
        <div className="flex space-x-5">
          <IconBox link="mailto:omh232323@gmail.com" icon={<MailIcon />} />
          <IconBox link="https://github.com/OU9999" icon={<GithubIcon />} />
          <IconBox link="/" icon={<RssIcon />} />
        </div>
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          2024﹒© OU9999. Powered by Next.js﹒Vercel
        </p>
      </div>
    </div>
  );
};

export default Footer;
