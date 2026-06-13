import ImageWithPlaceholder from "@/components/mainSection/image-with-placeholder";
import VideoWithAlt from "@/components/mainSection/video-with-alt";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  Image: ImageWithPlaceholder,
  Video: VideoWithAlt,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
