import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
  "head-section": ReactNode;
  "right-section": ReactNode;
}

const BlogLayout = ({
  children,
  "head-section": headSection,
}: BlogLayoutProps) => {
  return (
    <div className="w-dvw h-auto relative overflow-x-hidden">
      {headSection}
      <main className="w-full">{children}</main>
    </div>
  );
};

export default BlogLayout;
