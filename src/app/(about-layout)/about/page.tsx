import AboutMe from "@/components/mainSection/about-me";
import GithubIcon from "@/components/svg/github-icon";
import MailIcon from "@/components/svg/mail-icon";
import OwlIcon from "@/components/svg/owl-icon";
import Link from "next/link";

interface IIconBoxProps {
  link: string;
  icon: JSX.Element;
  owl?: boolean;
  subText?: string;
}

const IconBox = ({ link, icon, owl, subText }: IIconBoxProps) => {
  return (
    <Link href={link}>
      <div className="cursor-pointer flex justify-center p-2 rounded-md items-center space-x-1 hover:bg-gray-200 hover:dark:bg-gray-700">
        <div
          className={`w-5 h-5 fill-black dark:${
            owl ? "fill-black" : "fill-white"
          }`}
        >
          {icon}
        </div>
        {subText && <p className="font-xs relative top-[-2px] ">{subText}</p>}
      </div>
    </Link>
  );
};

const AboutPage = () => {
  return (
    <>
      <AboutMe
        child={
          <div className="mt-1 flex space-x-1">
            <IconBox icon={<MailIcon />} link="mailto:omh232323@gmail.com" />
            <IconBox icon={<GithubIcon />} link="https://github.com/OU9999" />
            <IconBox icon={<OwlIcon />} link="https://ou-playground.com/" owl />
          </div>
        }
      />
    </>
  );
};

export default AboutPage;
