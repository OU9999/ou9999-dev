"use client";

import XIcon from "@/components/svg/XIcon";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ModeToggle from "./ModeToggle";
import { TagCount, getTagsCount } from "@/utils/postUtil";

interface ILinkButtonProps {
  text: string;
  link: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const LinkButton = ({ text, link, setIsOpen }: ILinkButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
    setIsOpen(false);
  };

  return (
    <>
      <button className="text-2xl font-semibold" onClick={handleClick}>
        {text}
      </button>
    </>
  );
};

interface ITagItemProps {
  title: string;
  count: number;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const TagItem = ({ title, count, setIsOpen }: ITagItemProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/tags/${title}`);
    setIsOpen(false);
  };

  return (
    <div
      className="w-full flex rounded-md py-1 px-3 items-center"
      onClick={handleClick}
    >
      <p className="cursor-pointer text-gradient-end dark:text-gradient-start hover:underline">
        {title}
      </p>
      <p className="text-slate-500 dark:text-slate-400 text-xs">
        &nbsp;({count})
      </p>
    </div>
  );
};

interface IMobilePopoverProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobilePopover = ({ setIsOpen }: IMobilePopoverProps) => {
  const [tagsCount, setTagsCount] = useState<TagCount[] | null>(null);

  const init = async () => {
    const data = await getTagsCount();
    setTagsCount(data);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 w-dvw h-dvh overflow-y-auto bg-white-bg dark:bg-dark-bg">
      <div className="w-full h-2vh flex flex-col justify-start items-center relative">
        <div
          className="fixed top-10 right-10 w-10 h-10 fill-black dark:fill-white"
          onClick={() => setIsOpen(false)}
        >
          <XIcon />
        </div>
        <p className="mt-20 mb-7 font-bold text-4xl">Menu</p>
        <div className="flex flex-col justify-center items-center space-y-3">
          <LinkButton text="Home" link="/" setIsOpen={setIsOpen} />
          <LinkButton text="About" link="/about" setIsOpen={setIsOpen} />
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
              setIsOpen={setIsOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PopoverButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex md:hidden">
        <button
          type="button"
          className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          onClick={() => setIsOpen(true)}
        >
          <svg width="24" height="24">
            <path
              d="M5 6h14M5 12h14M5 18h14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {isOpen && <MobilePopover setIsOpen={setIsOpen} />}
    </>
  );
};

export default PopoverButton;
