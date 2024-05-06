"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect } from "react";

const Carousel = () => {
  const arr = new Array(4).fill(1);

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
        {arr.map((_, idx) => (
          <div
            key={"fuck" + idx}
            className="relative w-52 min-w-52 h-full bg-blue-500 rounded-md overflow-hidden"
          >
            <Image
              alt="test"
              src={"/imgs/portfolio/default.png"}
              quality={50}
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
