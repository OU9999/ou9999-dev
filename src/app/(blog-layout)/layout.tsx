import { ReactNode } from "react";
import Header from "./_component/Header";
import TagsBox from "./_component/TagsBox";

interface BlogLayoutProps {
  children: ReactNode;
  headSection: ReactNode;
}

const BlogLayout = ({ children, headSection }: BlogLayoutProps) => {
  return (
    <div className="w-dvw relative">
      <Header />
      <div className="w-full flex flex-col justify-center items-center">
        {headSection}
        <div className=" mt-5 sm:mt-7 md:mt-10 w-full max-w-276 h-full flex space-x-5 relative">
          <div className="w-full md:max-w-[75%] p-3 md:p-0">{children}</div>
          <div className="w-full max-w-[25%] hidden md:inline-block">
            <TagsBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
