import { getBase64Header } from "@/utils/base64-util";
import Image from "next/image";

interface ImageWithPlaceholderHeaderProps {
  alt?: string;
  img: string;
}

const ImageWithPlaceholderHeader = ({
  alt,
  img,
}: ImageWithPlaceholderHeaderProps) => {
  const imgSrc = `/imgs/header/${img}.webp`;
  const base64Data = getBase64Header(`${img}.webp`);

  return (
    <Image
      alt={alt ?? "image" + img}
      src={imgSrc}
      fill
      sizes="(max-width: 768px) 100vw, 96vw"
      placeholder="blur"
      blurDataURL={base64Data.base64}
    />
  );
};

export { ImageWithPlaceholderHeader };
