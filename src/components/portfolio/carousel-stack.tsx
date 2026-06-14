"use client";
import useEmblaCarousel from "embla-carousel-react";

interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="inline-flex h-5 max-h-5 w-auto items-center whitespace-nowrap rounded-md border border-mineral-blue/24 bg-mineral-teal/18 px-2.5 py-0.5 text-xs text-google-paper">
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
    <div ref={emblaThumbsRef} className="mt-2 w-auto overflow-x-scroll">
      <div className="flex h-auto w-auto flex-row space-x-2">
        {stack.map((skill, idx) => (
          <Badge key={skill + idx} text={skill} />
        ))}
      </div>
    </div>
  );
};

export { CarouselStack };
