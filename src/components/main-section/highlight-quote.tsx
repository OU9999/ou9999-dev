"use client";

import type { ComponentPropsWithoutRef } from "react";
import { motion } from "motion/react";
import {
  textRevealContainerPreset,
  textRevealWordPreset,
} from "@/constant/motion-preset";
import { cn } from "@/utils/tailwind-util";

interface HighlightQuoteProps extends ComponentPropsWithoutRef<"blockquote"> {
  attribution?: string;
  text: string;
}

const HighlightQuote = ({
  attribution,
  className,
  text,
  ...props
}: HighlightQuoteProps) => {
  const tokens = ["“", ...(text.match(/\S+\s*/g) ?? []), "”"];

  return (
    <figure className="not-prose relative left-1/2 my-28 w-[min(1032px,calc(100vw-48px))] -translate-x-1/2 text-center md:my-36">
      <blockquote
        {...props}
        className={cn(
          "m-0 border-0 p-0 text-center font-sans text-[3.625rem] font-normal leading-[1.05] tracking-normal text-google-paper lg:text-[5.625rem] lg:leading-[0.95]",
          className,
        )}
      >
        <span className="sr-only">{`“${text}”`}</span>
        <motion.span
          aria-hidden="true"
          className="motion-reduce:!opacity-100"
          variants={textRevealContainerPreset}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {tokens.map((token, index) => {
            return (
              <motion.span
                key={`${token}-${index}`}
                className={cn(
                  "motion-reduce:!opacity-100",
                  index === 0 && "-ml-[0.46em]",
                )}
                variants={textRevealWordPreset}
              >
                {token}
              </motion.span>
            );
          })}
        </motion.span>
      </blockquote>
      {attribution && (
        <figcaption className="mt-8 text-center text-lg font-normal leading-[1.4] text-google-paper lg:mt-10 lg:text-xl">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
};

export { HighlightQuote };
