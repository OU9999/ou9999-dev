import Link from "next/link";
import LinkIcon from "../svg/link-icon";

interface ContactLinkProps {
  title: string;
  link: string;
  linkText: string;
}

const ContactLink = ({ title, link, linkText }: ContactLinkProps) => {
  return (
    <div className="w-full flex">
      <p className="w-3/12 text-slate-500 dark:text-slate-400">{title}</p>

      <div className="w-9/12 flex justify-start items-center space-x-[0.5px]">
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

export default ContactLink;
