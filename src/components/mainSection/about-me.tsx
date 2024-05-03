import Link from "next/link";
import MailIcon from "../svg/mail-icon";
import GithubIcon from "../svg/github-icon";
import OwlIcon from "../svg/owl-icon";

interface IconBoxProps {
  link: string;
  icon: JSX.Element;
  owl?: boolean;
  subText?: string;
}

const IconBox = ({ link, icon, owl, subText }: IconBoxProps) => {
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

const AboutMe = () => {
  return (
    <div className="w-full mt-14 md:mt-20 flex flex-col justify-center items-center">
      <div className="w-full max-w-138 flex flex-col mt-10 space-y-10 text-xs md:text-sm text-slate-500 dark:text-slate-400">
        <p>
          어머니가 작고 사소한 일이라도 불편한 부분이 있다면 개선하시는
          사람이라는 것. 그것은 나에게 특별한 감정을 불러일으킨다. 다른
          분야일지라도, 나는 어머니와 비슷한 부분이 많다고 느낀다.
        </p>
        <p>
          부모님은 아들을 평가하시기보다는 감상하셨다. 감상을 우선으로 받고
          자랐기에, 있는 그대로의 세상을 사랑하는 건 어쩌면 당연했던 것 같다.
        </p>
      </div>

      <p className="mt-16 md:mt-20 text-md md:text-lg text-center">
        오유진﹒FrontEnd Developer
      </p>
      <div className="mt-1 flex space-x-1">
        <IconBox icon={<MailIcon />} link="mailto:omh232323@gmail.com" />
        <IconBox icon={<GithubIcon />} link="https://github.com/OU9999" />
        <IconBox icon={<OwlIcon />} link="https://ou-playground.com/" owl />
      </div>
    </div>
  );
};

export default AboutMe;
