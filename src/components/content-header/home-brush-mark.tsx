import { cn } from "@/utils/tailwind-util";
import Image from "next/image";

interface HomeBrushMarkProps {
  className?: string;
}

const HomeBrushMark = ({ className }: HomeBrushMarkProps) => {
  return (
    <div
      aria-hidden="true"
      className={cn("relative aspect-[4/1] w-full overflow-visible", className)}
      data-testid="home-brush-mark"
    >
      <Image
        alt=""
        src="/imgs/header/home-brush-hard-chalk-steel-v1.png"
        fill
        className="object-contain"
        sizes="(min-width: 1024px) 820px, (min-width: 768px) 720px, 320px"
        preload
      />
    </div>
  );
};

export { HomeBrushMark };
