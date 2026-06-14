import { BackButton } from "@/components/nav/header/back-button";
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
    <Link href={link} className="text-2xl font-semibold hover:text-mineral-blue">
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
      <div className="flex w-full items-center rounded-md px-3 py-1">
        <p className="cursor-pointer text-mineral-blue hover:underline">
          {title.toUpperCase()}
        </p>
        <p className="text-xs text-google-muted">&nbsp;({count})</p>
      </div>
    </Link>
  );
};

const MobilePopover = async () => {
  const tagsCount = await getTagsFromPosts();

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 h-dvh w-dvw overflow-y-auto bg-dark-bg">
      <div className="relative flex min-h-dvh w-full flex-col items-center justify-start">
        <BackButton />
        <p className="mb-7 mt-20 text-4xl font-bold">Menu</p>
        <div className="flex flex-col items-center justify-center space-y-3">
          <LinkButton text="Home" link="/" />
          <LinkButton text="About" link="/about" />
          <LinkButton text="Portfolio" link="/portfolio" />
        </div>
        <p className="mb-7 mt-20 text-4xl font-bold">Tag</p>
        <div className="flex flex-col items-center justify-center space-y-3">
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
