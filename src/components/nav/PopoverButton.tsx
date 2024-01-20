"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

const LinkButton = () => {
  return (
    <>
      <Link href={"/"}>
        <p className="text-xl font-semibold">Home</p>
      </Link>
    </>
  );
};

interface IMobilePopoverProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobilePopover = ({ setIsOpen }: IMobilePopoverProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 w-dvw h-dvh bg-white-bg dark:bg-dark-bg">
      <div className="w-full h-full flex flex-col justify-start items-center">
        <p className="my-10 font-bold text-3xl">Menu</p>
        <LinkButton />
        <LinkButton />
        <LinkButton />
        {/* <button onClick={() => setIsOpen(false)}>close</button> */}
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
          <span className="sr-only">Navigation</span>
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
