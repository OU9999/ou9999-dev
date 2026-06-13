import { BackButton } from "@/components/nav/header/back-button";
import { ModeToggle } from "@/components/nav/header/mode-toggle";
import { getTagsFromPosts } from "@/utils/post-util";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MENU | ou9999.dev",
};

interface ILinkButtonProps {
  text: string;
  link: string;
}

const LinkButton = ({ text, link }: ILinkButtonProps) => {
  return (
    <Link href={link} className="text-2xl font-semibold">
      {text}
    </Link>
  );
};

interface ITagItemProps {
  title: string;
  count: number;
}

const TagItem = ({ title, count }: ITagItemProps) => {
  return (
    <Link href={`/tags/${title}`}>
      <div className="w-full flex rounded-md py-1 px-3 items-center">
        <p className="cursor-pointer text-gradient-end dark:text-gradient-start hover:underline">
          {title.toUpperCase()}
        </p>
        <p className="text-slate-500 dark:text-slate-400 text-xs">
          &nbsp;({count})
        </p>
      </div>
    </Link>
  );
};

const MobilePopover = async () => {
  const tagsCount = await getTagsFromPosts();

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 w-dvw h-dvh overflow-y-auto bg-white-bg dark:bg-dark-bg">
      <div className="w-full min-h-dvh flex flex-col justify-start items-center relative">
        <BackButton />
        <p className="mt-20 mb-7 font-bold text-4xl">Menu</p>
        <div className="flex flex-col justify-center items-center space-y-3">
          <LinkButton text="Home" link="/" />
          <LinkButton text="About" link="/about" />
          <LinkButton text="Portfolio" link="/portfolio" />
          <div className="pt-3">
            <ModeToggle />
          </div>
        </div>
        <p className="mt-20 mb-7 font-bold text-4xl">Tag</p>
        <div className="flex flex-col justify-center items-center space-y-3 ">
          {tagsCount?.map((tag) => (
            <TagItem
              key={"POPOVERTAGITEM" + tag.tag}
              title={tag.tag}
              count={tag.count}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobilePopover;
