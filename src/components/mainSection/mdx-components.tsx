/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  Image: (props: ImageProps) => (
    <div className="relative flex flex-col justify-center items-center">
      <Image {...props} className="rounded-lg" />
      {props.alt && (
        <p className="text-gray-400 dark:text-gray-600">{props.alt}</p>
      )}
    </div>
  ),
  p: (props: any) => (
    <p {...props} className="my-1 text-slate-700 dark:text-slate-300" />
  ),
  h1: (props: any) => <h1 {...props} className="text-3xl font-semibold my-5" />,
  h2: (props: any) => <h2 {...props} className="text-2xl font-semibold my-5" />,
  h3: (props: any) => <h3 {...props} className="text-xl font-semibold my-5" />,
  h4: (props: any) => <h4 {...props} className="text-lg font-semibold my-5" />,
  ol: (props: any) => (
    <ol
      {...props}
      className="my-5 pl-5 list-decimal text-slate-700 dark:text-slate-300"
    />
  ),
  ul: (props: any) => (
    <ul
      {...props}
      className="my-5 pl-5 list-disc text-slate-700 dark:text-slate-300"
    />
  ),
};

interface MdxProps {
  code: string;
}

export const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
