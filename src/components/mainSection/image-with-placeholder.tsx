import Image, { ImageProps } from "next/image";

const ImageWithPlaceholder: React.FC<ImageProps> = async (props) => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <Image
        {...props}
        alt={props.alt}
        className="rounded-lg"
        placeholder="blur"
        blurDataURL={
          "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPce/h4PQAHVALI8GDtfQAAAABJRU5ErkJggg=="
        }
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
