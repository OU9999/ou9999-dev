import { getBase64 } from "@/utils/base64Util";
import Image, { ImageProps } from "next/image";

const ImageWithPlaceholder: React.FC<ImageProps> = (props) => {
  const base64Data = getBase64(props.src as string);

  return (
    <div className="relative flex flex-col justify-center items-center">
      <Image
        {...props}
        alt={props.alt}
        className="rounded-lg"
        placeholder="blur"
        blurDataURL={base64Data.base64}
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
