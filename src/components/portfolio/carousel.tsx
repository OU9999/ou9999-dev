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
    <div ref={emblaThumbsRef} className="w-auto overflow-x-scroll my-3">
      <div className="w-auto flex flex-row space-x-2 h-32 py-1">
        {imgs.map((img) => (
          <div
            key={"carousel" + img}
            className="relative w-52 min-w-52 h-full bg-blue-500 rounded-md overflow-hidden"
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
