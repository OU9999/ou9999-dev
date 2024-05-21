"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="inline-flex whitespace-nowrap w-auto h-5 max-h-5 items-center rounded-md border border-slate-300 dark:border-slate-600 px-2.5 py-0.5 text-xs text-slate-900 dark:text-slate-50 bg-[#E4E7EB] dark:bg-[#111827]">
      {text}
    </div>
  );
};

interface CarouselProps {
  stack: string[];
}

const CarouselStack = ({ stack }: CarouselProps) => {
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaThumbsApi) return;
  }, [emblaThumbsApi]);

  return (
    <div ref={emblaThumbsRef} className="w-auto overflow-x-scroll mt-2">
      <div className="w-auto flex flex-row space-x-2 h-auto">
        {stack.map((skill, idx) => (
          <Badge key={skill + idx} text={skill} />
        ))}
      </div>
    </div>
  );
};

export default CarouselStack;
