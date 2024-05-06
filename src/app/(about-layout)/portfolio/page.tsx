import AboutMe from "@/components/mainSection/about-me";
import Carousel from "@/components/portfolio/carousel";
import ContactLink from "@/components/portfolio/contact-link";
import {
  PortfolioContent,
  PortfolioTitle,
  ProjectLayout,
} from "@/components/portfolio/portfolio-ui";
import XIcon from "@/components/svg/x-icon";
import Link from "next/link";

const PortfolioPage = () => {
  return (
    <>
      <AboutMe />
      <div className="mt-10 w-full flex justify-center">
        <div className="w-full max-w-138 flex flex-col relative">
          <Link href={"/about"}>
            <div className="absolute cursor-pointer top-14 right-0 w-5 h-5 fill-black dark:fill-white">
              <XIcon />
            </div>
          </Link>

          <PortfolioTitle text="Contact" />
          <PortfolioContent>
            <ContactLink title="Blog" linkText="ou9999-dev.com" link="/" />
            <ContactLink
              title="PG"
              linkText="ou-playground.com"
              link="https://ou-playground.com"
            />
            <ContactLink
              title="Github"
              linkText="github.com/OU9999"
              link="https://github.com/OU9999"
            />
            <ContactLink
              title="Email"
              linkText="omh232323@gmail.com"
              link="mailto:omh232323@gmail.com"
            />
            <ContactLink
              title="Age"
              linkText="25 (1999.03.12)"
              link="https://superkts.com/cal/age/ymd/19990312"
            />
          </PortfolioContent>

          <PortfolioTitle text="Project" />
          <PortfolioContent>
            <ProjectLayout dateFrom="2024.04" dateTo="Now" />
          </PortfolioContent>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
