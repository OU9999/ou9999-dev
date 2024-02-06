import { getBase64Data } from "@/utils/base64Util";
import Image, { ImageProps } from "next/image";

const ImageWithPlaceholder: React.FC<ImageProps> = async (props) => {
  const blurData = await getBase64Data(props.src as string);

  return (
    <div className="relative flex flex-col justify-center items-center">
      <Image
        {...props}
        alt={props.alt}
        className="rounded-lg"
        placeholder="blur"
        blurDataURL={blurData}
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
