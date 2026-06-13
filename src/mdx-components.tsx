import { ImageWithPlaceholder } from "@/components/main-section/image-with-placeholder";
import { VideoWithAlt } from "@/components/main-section/video-with-alt";
import type { MDXComponents } from "mdx/types";

const mdxComponents: MDXComponents = {
  Image: ImageWithPlaceholder,
  Video: VideoWithAlt,
};

const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    ...mdxComponents,
    ...components,
  };
};

export { mdxComponents, useMDXComponents };
