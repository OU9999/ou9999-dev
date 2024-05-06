import { cn } from "@/utils/tailwindUtil";
import Link from "next/link";
import LinkIcon from "../svg/link-icon";
import Carousel from "./carousel";

interface PortfolioTitleProps {
  text: string;
}

const PortfolioTitle = ({ text }: PortfolioTitleProps) => {
  return <p className="text-lg mt-14 mb-5">{text}</p>;
};

interface PortfolioContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const PortfolioContent = ({ className, ...props }: PortfolioContentProps) => {
  return <div className={cn("space-y-5", className)} {...props} />;
};

interface ProjectLayoutProps {
  dateFrom: string;
  dateTo: string;
}

const ProjectLayout = ({ dateFrom, dateTo }: ProjectLayoutProps) => {
  return (
    <div className="w-full flex">
      <div className="flex flex-col md:flex-row w-3/12 text-slate-500 dark:text-slate-400">
        <p>{dateFrom} -&nbsp;</p>
        <p>{dateTo}</p>
      </div>

      <div className="w-9/12 flex flex-col justify-start">
        <div className="w-full flex justify-start items-center space-x-[0.5px]">
          <Link href={"/"}>
            <p className="cursor-pointer hover:underline">ou-playground.com</p>
          </Link>
          <div className="w-3 h-3 fill-black dark:fill-white stroke-black dark:stroke-white">
            <LinkIcon />
          </div>
        </div>
        <div className="w-full flex flex-col justify-start text-slate-500 dark:text-slate-400">
          <p>Side Project</p>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export { PortfolioTitle, PortfolioContent, ProjectLayout };
