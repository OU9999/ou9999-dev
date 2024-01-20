import { ReactNode } from "react";
import Header from "./_component/Header";
import TagsBox from "./_component/TagsBox";

interface BlogLayoutProps {
  children: ReactNode;
  headSection: ReactNode;
}

const BlogLayout = ({ children, headSection }: BlogLayoutProps) => {
  return (
    <div className="w-dvw">
      <Header />
      <div className="w-full h-2vh flex flex-col justify-center items-center">
        {headSection}
        <div className="mt-10 w-276 h-full flex space-x-5 relative">
          <div className="w-9/12">{children}</div>
          <div className="w-3/12">
            <TagsBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
