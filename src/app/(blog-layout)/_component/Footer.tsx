import GithubIcon from "@/components/svg/GithubIcon";

interface IIconBoxProps {
  icon: JSX.Element;
}
const IconBox = ({ icon }: IIconBoxProps) => {
  return (
    <div className="w-5 h-5 cursor-pointer fill-black dark:fill-white hover:fill-gradient-end hover:dark:fill-gradient-start">
      {icon}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="w-full mt-20 flex justify-center">
      <div className="w-full max-w-276 border-t-1 pt-10 pb-5 flex flex-col justify-center items-center">
        <div className="flex space-x-5">
          <IconBox icon={<GithubIcon />} />
          <IconBox icon={<GithubIcon />} />
          <IconBox icon={<GithubIcon />} />
        </div>
        <p className="mt-3 text-xs">
          2024﹒© OU9999. All Right Reserved. Powered by Next.js﹒Vercel
        </p>
      </div>
    </div>
  );
};

export default Footer;
