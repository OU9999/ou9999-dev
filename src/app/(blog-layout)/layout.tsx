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
      <div className="w-full flex flex-col justify-center items-center">
        {headSection}
        <div className=" mt-5 sm:mt-7 md:mt-10 w-full max-w-276 h-full flex space-x-5 relative">
          <div className="w-full md:max-w-[75%] p-3">{children}</div>
          <div className="w-full max-w-[25%] p-3 hidden md:inline-block">
            {rightSection}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
