import { cn } from "@/utils/tailwind-util";
import Link from "next/link";
import { LinkIcon } from "../svg/link-icon";

interface LinkTextProps {
  link: string;
  text: string;
  className?: string;
}

const LinkText = ({ link, text, className }: LinkTextProps) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-start space-x-[0.5px]",
        className
      )}
    >
      <Link href={link}>
        <p className="cursor-pointer text-google-paper underline hover:text-mineral-blue">
          {text}
        </p>
      </Link>
      <div className="h-3 w-3 fill-mineral-blue stroke-mineral-blue">
        <LinkIcon />
      </div>
    </div>
  );
};

export { LinkText };
