import { cn } from "@/utils/tailwind-util";
import Link from "next/link";
import { LinkIcon } from "../svg/link-icon";
import { CarouselImg } from "./carousel-img";
import { CarouselStack } from "./carousel-stack";

interface PortfolioTitleProps {
  text: string;
}

const PortfolioTitle = ({ text }: PortfolioTitleProps) => {
  return <p className="mb-5 mt-14 text-lg text-google-paper">{text}</p>;
};

const PortfolioContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
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
    <div className="flex w-full">
      <div className="flex w-3/12 flex-col text-google-muted md:flex-row">
        {dateFrom && <p>{dateFrom} -&nbsp;</p>}
        {dateTo && <p>{dateTo}</p>}
        {date && <p>{date}</p>}
      </div>

      <div className="flex w-9/12 flex-col justify-start">
        <div className="flex w-full items-center justify-start space-x-[0.5px]">
          {link ? (
            <>
              <Link href={link}>
                <p className="cursor-pointer text-google-paper hover:text-mineral-blue hover:underline">
                  {projectTitle}
                </p>
              </Link>
              <div className="h-3 w-3 fill-mineral-blue stroke-mineral-blue">
                <LinkIcon />
              </div>
            </>
          ) : (
            <p className="">{projectTitle}</p>
          )}
        </div>
        <div className="flex w-full flex-col justify-start text-google-muted">
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
