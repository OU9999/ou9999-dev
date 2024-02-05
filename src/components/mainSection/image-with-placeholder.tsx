/* eslint-disable jsx-a11y/alt-text */
import getBlurData from "@/hooks/blur-data-generator";
import Image, { ImageProps } from "next/image";

const ImageWithPlaceholder: React.FC<ImageProps> = async (props) => {
  const { base64 } = await getBlurData(props.src as string);

  return (
    <div className="relative flex flex-col justify-center items-center">
      <Image
        {...props}
        className="rounded-lg"
        placeholder="blur"
        blurDataURL={base64}
      />
      {props.alt && (
        <p className="my-1 text-gray-400 dark:text-gray-600 text-sm ">
          {props.alt}
        </p>
      )}
    </div>
  );
};

export default ImageWithPlaceholder;
