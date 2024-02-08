import { Metadata } from "next";
import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
  popover: ReactNode;
}

export const metadata: Metadata = {
  title: "ABOUT | ou9999.dev",
};

const AboutLayout = ({ children, popover }: AboutLayoutProps) => {
  return (
    <>
      <div className="w-dvw h-auto min-h-dvh relative">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="mt-5 sm:mt-7 md:mt-10 w-full max-w-276 h-full relative p-3">
            {children}
          </div>
        </div>
      </div>
      {popover}
    </>
  );
};

export default AboutLayout;
