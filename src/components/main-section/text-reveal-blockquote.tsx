"use client";

import type { ComponentPropsWithoutRef } from "react";
import { motion } from "motion/react";
import {
  textRevealContainerPreset,
  textRevealWordPreset,
} from "@/constant/motion-preset";

interface TextRevealBlockquoteProps
  extends ComponentPropsWithoutRef<"blockquote"> {
  text: string;
}

const TextRevealBlockquote = ({
  text,
  ...props
}: TextRevealBlockquoteProps) => {
  const tokens = text.match(/\S+\s*/g) ?? [];

  return (
    <blockquote {...props}>
      <span className="sr-only">{text}</span>
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
              className="motion-reduce:!opacity-100"
              variants={textRevealWordPreset}
            >
              {token}
            </motion.span>
          );
        })}
      </motion.span>
    </blockquote>
  );
};

export { TextRevealBlockquote };
