"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface CarouselProps {
  imgs: string[];
}

const CarouselImg = ({ imgs }: CarouselProps) => {
  const [emblaThumbsRef] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  return (
    <div ref={emblaThumbsRef} className="mb-5 mt-3 w-auto overflow-x-scroll">
      <div className="flex h-32 w-auto flex-row space-x-2 py-1">
        {imgs.map((img) => (
          <div
            key={"carousel" + img}
            className="relative h-full w-52 min-w-52 overflow-hidden rounded-md border border-mineral-blue/18 bg-mineral-frame"
          >
            <Image
              alt={`Portfolio screenshot: ${img}`}
              src={`/imgs/portfolio/${img}.png`}
              quality={75}
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { CarouselImg };
