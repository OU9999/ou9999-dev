import { useMDXComponent } from "next-contentlayer/hooks";
import ImageWithPlaceholder from "./image-with-placeholder";
import VideoWithAlt from "./video-with-alt";

const components = {
  Image: ImageWithPlaceholder,
  Video: VideoWithAlt,
};

interface MdxProps {
  code: string;
}

export const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
