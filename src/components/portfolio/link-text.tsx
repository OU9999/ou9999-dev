import { cn } from "@/utils/tailwindUtil";
import Link from "next/link";
import LinkIcon from "../svg/link-icon";

interface LinkTextProps {
  link: string;
  text: string;
  className?: string;
}

const LinkText = ({ link, text, className }: LinkTextProps) => {
  return (
    <div
      className={cn(
        "w-full flex justify-start items-center space-x-[0.5px]",
        className
      )}
    >
      <Link href={link}>
        <p className="cursor-pointer hover:underline">{text}</p>
      </Link>
      <div className="w-3 h-3 fill-slate-500 dark:fill-slate-400 stroke-slate-500 dark:stroke-slate-400">
        <LinkIcon />
      </div>
    </div>
  );
};

export default LinkText;
