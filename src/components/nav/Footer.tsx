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
      <div className="w-4 h-4 md:w-5 md:h-5 cursor-pointer fill-black dark:fill-white hover:fill-gradient-end hover:dark:fill-gradient-start">
        {icon}
      </div>
    </Link>
  );
};

const Footer = () => {
  return (
    <div className="w-full mt-20 flex justify-center border-t-1 border-slate-300 dark:border-slate-700">
      <div className="w-full max-w-276 p-5 flex justify-between items-center">
        <div className="flex flex-col space-y-1  text-slate-500 dark:text-slate-400">
          <div className="flex text-sm">
            <p>2024﹒©</p>
            <p className="font-bold">&nbsp;OU9999</p>
          </div>
          <p className="text-xs">Powered by Next.js﹒Vercel</p>
        </div>
        <div className="flex space-x-4 md:space-x-5">
          <IconBox link="mailto:omh232323@gmail.com" icon={<MailIcon />} />
          <IconBox link="https://github.com/OU9999" icon={<GithubIcon />} />
          <IconBox link="/" icon={<RssIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
