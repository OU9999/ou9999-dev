import Link from "next/link";
import { LinkIcon } from "../svg/link-icon";

interface ContactLinkProps {
  title: string;
  link: string;
  linkText: string;
}

const ContactLink = ({ title, link, linkText }: ContactLinkProps) => {
  return (
    <div className="flex w-full">
      <p className="w-3/12 text-google-muted">{title}</p>

      <div className="flex w-9/12 items-center justify-start space-x-[0.5px]">
        <Link href={link}>
          <p className="cursor-pointer text-google-paper hover:text-mineral-blue hover:underline">
            {linkText}
          </p>
        </Link>
        <div className="h-3 w-3 fill-mineral-blue stroke-mineral-blue">
          <LinkIcon />
        </div>
      </div>
    </div>
  );
};

export { ContactLink };
