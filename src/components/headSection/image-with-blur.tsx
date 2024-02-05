import getBlurData from "@/hooks/blur-data-generator";
import Image, { ImageProps } from "next/image";

const ImageWithBlur: React.FC<ImageProps> = async (props) => {
  const { base64 } = await getBlurData(props.src as string);

  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} placeholder="blur" blurDataURL={base64} />;
};

export default ImageWithBlur;
