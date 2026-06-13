import { ImageWithPlaceholder } from "@/components/main-section/image-with-placeholder";
import { MdxBlockquote } from "@/components/main-section/mdx-blockquote";
import { VideoWithAlt } from "@/components/main-section/video-with-alt";
import type { MDXComponents } from "mdx/types";

const mdxComponents: MDXComponents = {
  Image: ImageWithPlaceholder,
  Video: VideoWithAlt,
  blockquote: MdxBlockquote,
};

const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    ...mdxComponents,
    ...components,
  };
};

export { mdxComponents, useMDXComponents };
