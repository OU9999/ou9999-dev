import AboutMe from "@/components/mainSection/about-me";
import LinkIcon from "@/components/svg/link-icon";
import XIcon from "@/components/svg/x-icon";
import Link from "next/link";

interface ContactLinkProps {
  title: string;
  link: string;
  linkText: string;
}

const ContactLink = ({ title, link, linkText }: ContactLinkProps) => {
  return (
    <div className="w-full flex">
      <p className="w-2/12 text-slate-500 dark:text-slate-400">{title}</p>

      <div className="w-10/12 flex justify-start items-center space-x-[0.5px]">
        <Link href={link}>
          <p className="cursor-pointer hover:underline">{linkText}</p>
        </Link>
        <div className="w-3 h-3 fill-black dark:fill-white stroke-black dark:stroke-white">
          <LinkIcon />
        </div>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <>
      <AboutMe />
      <div className="mt-10 w-full flex justify-center">
        <div className="w-full max-w-138 flex flex-col relative">
          <Link href={"/about"}>
            <div className="absolute cursor-pointer top-0 right-0 w-5 h-5 fill-black dark:fill-white">
              <XIcon />
            </div>
          </Link>
          <p className="text-lg mb-5">Contact</p>
          <div className="space-y-4">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
