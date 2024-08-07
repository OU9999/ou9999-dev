import { cn } from "@/utils/tailwindUtil";
import Link from "next/link";
import LinkIcon from "../svg/link-icon";
import CarouselImg from "./carousel-img";
import CarouselStack from "./carousel-stack";

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
  dateFrom?: string;
  dateTo?: string;
  date?: string;
  projectTitle: string;
  projectType: "Side Project" | "FactorLabs" | string;
  link?: string;
  stack?: string[];
  imgs?: string[];
  children?: React.ReactNode;
}

const ProjectLayout = ({
  dateFrom,
  dateTo,
  date,
  projectTitle,
  projectType,
  link,
  stack,
  imgs,
  children,
}: ProjectLayoutProps) => {
  return (
    <div className="w-full flex">
      <div className="flex flex-col md:flex-row w-3/12 text-slate-500 dark:text-slate-400">
        {dateFrom && <p>{dateFrom} -&nbsp;</p>}
        {dateTo && <p>{dateTo}</p>}
        {date && <p>{date}</p>}
      </div>

      <div className="w-9/12 flex flex-col justify-start">
        <div className="w-full flex justify-start items-center space-x-[0.5px]">
          {link ? (
            <>
              <Link href={link}>
                <p className="cursor-pointer hover:underline">{projectTitle}</p>
              </Link>
              <div className="w-3 h-3 fill-black dark:fill-white stroke-black dark:stroke-white">
                <LinkIcon />
              </div>
            </>
          ) : (
            <p className="">{projectTitle}</p>
          )}
        </div>
        <div className="w-full flex flex-col justify-start text-slate-500 dark:text-slate-400">
          <p>{projectType}</p>
          {stack && <CarouselStack stack={stack} />}
          {imgs && <CarouselImg imgs={imgs} />}
          {children}
        </div>
      </div>
    </div>
  );
};

export { PortfolioTitle, PortfolioContent, ProjectLayout };
