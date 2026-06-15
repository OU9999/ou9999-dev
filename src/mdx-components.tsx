import { ImageWithPlaceholder } from "@/components/main-section/image-with-placeholder";
import { BlockQuote } from "@/components/main-section/block-quote";
import { HighlightQuote } from "@/components/main-section/highlight-quote";
import { VideoWithAlt } from "@/components/main-section/video-with-alt";
import type { MDXComponents } from "mdx/types";

const mdxComponents: MDXComponents = {
  HighlightQuote,
  Image: ImageWithPlaceholder,
  Video: VideoWithAlt,
  blockquote: BlockQuote,
};

const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    ...mdxComponents,
    ...components,
  };
};

export { mdxComponents, useMDXComponents };
