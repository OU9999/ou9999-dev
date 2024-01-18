import Image from "next/image";
import { ReactNode } from "react";
import Header from "./_component/Header";
import ContentHeader from "./_component/ContentHeader";

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className="w-dvw">
      <Header />
      <div className="w-full h-2vh flex flex-col justify-center items-center">
        <ContentHeader />
        <div className="pt-24 w-276 h-full">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gradient-start to-gradient-end inline-block text-transparent bg-clip-text">
            Hello world
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
