import { useMDXComponent } from "next-contentlayer/hooks";
import ImageWithPlaceholder from "./image-with-placeholder";

const components = {
  Image: ImageWithPlaceholder,
};

interface MdxProps {
  code: string;
}

export const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
