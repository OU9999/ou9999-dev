import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className="w-dvw h-auto relative overflow-x-hidden">
      <main className="w-full">{children}</main>
    </div>
  );
};

export default BlogLayout;
