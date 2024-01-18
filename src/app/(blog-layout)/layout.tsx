import { ReactNode } from "react";

type BlogLayoutLayoutProps = {
  children: ReactNode;
};

const BlogLayout = ({ children }: BlogLayoutLayoutProps) => {
  return <div className="w-dvw h-dvh bg-black">{children}</div>;
};

export default BlogLayout;
