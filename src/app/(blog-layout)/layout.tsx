import Footer from "@/components/nav/Footer";
import Header from "@/components/nav/Header";
import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
  headSection: ReactNode;
  rightSection: ReactNode;
}

const BlogLayout = ({
  children,
  headSection,
  rightSection,
}: BlogLayoutProps) => {
  return (
    <div className="w-dvw h-auto relative">
      <Header />
      <div className="w-full flex flex-col justify-center items-center">
        {headSection}
        <div className=" mt-5 sm:mt-7 md:mt-10 w-full max-w-276 h-full flex space-x-5 relative">
          <div className="w-full md:max-w-[75%] p-3 md:p-0">{children}</div>
          <div className="w-full max-w-[25%] p-3 hidden md:inline-block">
            {rightSection}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogLayout;
