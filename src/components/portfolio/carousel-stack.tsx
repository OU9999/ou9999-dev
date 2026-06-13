"use client";
import useEmblaCarousel from "embla-carousel-react";

interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="inline-flex whitespace-nowrap w-auto h-5 max-h-5 items-center rounded-md border border-slate-600 px-2.5 py-0.5 text-xs text-slate-50 bg-[#111827]">
      {text}
    </div>
  );
};

interface CarouselProps {
  stack: string[];
}

const CarouselStack = ({ stack }: CarouselProps) => {
  const [emblaThumbsRef] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

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

export { CarouselStack };
