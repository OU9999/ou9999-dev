"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect } from "react";

interface CarouselProps {
  imgs: string[];
}

const Carousel = ({ imgs }: CarouselProps) => {
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaThumbsApi) return;
  }, [emblaThumbsApi]);

  return (
    <div ref={emblaThumbsRef} className="w-auto overflow-x-scroll mt-3 mb-5">
      <div className="w-auto flex flex-row space-x-2 h-32 py-1">
        {imgs.map((img) => (
          <div
            key={"carousel" + img}
            className="relative w-52 min-w-52 border border-slate-200 dark:border-slate-800 h-full rounded-md overflow-hidden"
          >
            <Image
              alt="test"
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

export default Carousel;
