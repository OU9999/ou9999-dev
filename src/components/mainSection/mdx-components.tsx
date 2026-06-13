import { mdxComponents } from "@/mdx-components";
import type { MDXContent } from "mdx/types";

interface MdxProps {
  Component: MDXContent;
}

export const Mdx = ({ Component }: MdxProps) => {
  return <Component components={mdxComponents} />;
};
