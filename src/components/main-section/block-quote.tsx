import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/tailwind-util";

type BlockQuoteProps = ComponentPropsWithoutRef<"blockquote">;

const BlockQuote = ({ children, className, ...props }: BlockQuoteProps) => {
  return (
    <blockquote
      {...props}
      className={cn(
        "not-prose my-10 rounded-r-sm border-l-[3px] border-mineral-blue/70 bg-mineral-frame px-5 py-5 text-[15px] font-normal leading-6 text-google-paper/90 md:my-12 md:px-6 md:py-6 md:text-[17px] md:leading-[27px] [&>p]:my-0 [&>p+p]:mt-4",
        className,
      )}
    >
      {children}
    </blockquote>
  );
};

export { BlockQuote };
