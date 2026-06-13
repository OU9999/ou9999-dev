"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { viewportImagePreset } from "@/constant/motion-preset";
import { cn } from "@/utils/tailwind-util";

interface MediaRevealProps {
  children: ReactNode;
  className: string;
}

const MediaReveal = ({ children, className }: MediaRevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div
        key="reduced-media-reveal"
        className={cn(className, "![clip-path:inset(0%)]")}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      key="motion-media-reveal"
      className={cn(className, "motion-reduce:![clip-path:inset(0%)]")}
      variants={viewportImagePreset}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </motion.div>
  );
};

export { MediaReveal };
