import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
}

const AboutLayout = ({ children }: AboutLayoutProps) => {
  return (
    <div className="w-dvw h-auto relative">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="mt-5 sm:mt-7 md:mt-10 w-full max-w-276 h-full relative p-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
