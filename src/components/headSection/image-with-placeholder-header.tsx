import { getBase64Header } from "@/utils/base64Util";
import Image from "next/image";

interface ImageWithPlaceholderHeaderProps {
  img: string;
}

const ImageWithPlaceholderHeader = ({
  img,
}: ImageWithPlaceholderHeaderProps) => {
  const imgSrc = `/imgs/header/${img}.webp`;
  const base64Data = getBase64Header(`${img}.webp`);

  return (
    <Image
      alt={"image" + img}
      src={imgSrc}
      fill
      placeholder="blur"
      blurDataURL={base64Data.base64}
    />
  );
};

export default ImageWithPlaceholderHeader;
