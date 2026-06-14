import { getBase64 } from "@/utils/base64-util";
import { cn } from "@/utils/tailwind-util";
import Image, { ImageProps } from "next/image";
import { MediaReveal } from "./media-reveal";

const ImageWithPlaceholder: React.FC<ImageProps> = (props) => {
  const base64Data = getBase64(props.src as string);

  return (
    <div className="relative flex flex-col justify-center items-center">
      <MediaReveal className="inline-flex max-w-full overflow-hidden rounded-lg border-1 border-white/15 bg-white/5 shadow-[0_18px_60px_rgb(0_0_0/0.22)]">
        <Image
          {...props}
          alt={props.alt}
          className={cn("h-auto max-w-full rounded-lg", props.className)}
          sizes={props.sizes ?? "(max-width: 768px) 100vw, 804px"}
          placeholder="blur"
          blurDataURL={base64Data.base64}
        />
      </MediaReveal>
      {props.alt && (
        <p className="my-1 text-gray-600 text-sm ">
          {props.alt}
        </p>
      )}
    </div>
  );
};

export { ImageWithPlaceholder };
