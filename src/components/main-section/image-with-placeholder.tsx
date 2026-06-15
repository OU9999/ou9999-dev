import { getBase64 } from "@/utils/base64-util";
import { cn } from "@/utils/tailwind-util";
import Image, { ImageProps } from "next/image";
import { MediaReveal } from "./media-reveal";

const ImageWithPlaceholder: React.FC<ImageProps> = (props) => {
  const base64Data = getBase64(props.src as string);

  return (
    <div className="not-prose relative my-12 flex w-full flex-col items-start justify-center md:my-14">
      <MediaReveal className="flex w-full overflow-hidden rounded-lg bg-mineral-frame shadow-[0_18px_60px_rgb(4_8_8/0.3)] ring-1 ring-mineral-blue/18">
        <Image
          {...props}
          alt={props.alt}
          className={cn("h-auto w-full rounded-lg", props.className)}
          sizes={props.sizes ?? "(max-width: 768px) calc(100vw - 48px), 624px"}
          placeholder="blur"
          blurDataURL={base64Data.base64}
        />
      </MediaReveal>
      {props.alt && (
        <p className="my-1 text-sm text-google-muted">
          {props.alt}
        </p>
      )}
    </div>
  );
};

export { ImageWithPlaceholder };
