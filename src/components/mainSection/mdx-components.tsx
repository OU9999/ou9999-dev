/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  Image: (props: ImageProps) => (
    <div className="relative flex flex-col justify-center items-center">
      <Image {...props} className="rounded-lg" />
      {props.alt && (
        <p className="my-1 text-gray-400 dark:text-gray-600 text-sm ">
          {props.alt}
        </p>
      )}
    </div>
  ),
};

interface MdxProps {
  code: string;
}

export const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
