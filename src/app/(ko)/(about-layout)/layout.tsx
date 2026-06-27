import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
}

const AboutLayout = ({ children }: AboutLayoutProps) => {
  return (
    <div className="relative h-auto min-h-dvh w-dvw overflow-hidden">
      {children}
    </div>
  );
};

export default AboutLayout;
