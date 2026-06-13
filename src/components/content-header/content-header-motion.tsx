"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  fadeUpPreset,
  heroImagePreset,
  heroTitlePreset,
  staggerContainerPreset,
} from "@/constant/motion-preset";
import { cn } from "@/utils/tailwind-util";

interface ContentHeaderMotionProps {
  children: ReactNode;
  className: string;
}

const ContentHeaderMotionRoot = ({
  children,
  className,
}: ContentHeaderMotionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const initialState = shouldReduceMotion ? false : "hidden";

  return (
    <motion.section
      className={className}
      initial={initialState}
      animate="visible"
    >
      {children}
    </motion.section>
  );
};

const ContentHeaderMotionImage = ({
  children,
  className,
}: ContentHeaderMotionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const initialState = shouldReduceMotion ? false : "hidden";

  return (
    <motion.div
      className={cn(className, "motion-reduce:![clip-path:inset(0%)]")}
      variants={heroImagePreset}
      initial={initialState}
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

const ContentHeaderMotionText = ({
  children,
  className,
}: ContentHeaderMotionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const initialState = shouldReduceMotion ? false : "hidden";

  return (
    <motion.div
      className={className}
      variants={staggerContainerPreset}
      initial={initialState}
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

const ContentHeaderMotionTitle = ({
  children,
  className,
}: ContentHeaderMotionProps) => {
  return (
    <motion.h1 className={className} variants={heroTitlePreset}>
      {children}
    </motion.h1>
  );
};

const ContentHeaderMotionItem = ({
  children,
  className,
}: ContentHeaderMotionProps) => {
  return (
    <motion.div className={className} variants={fadeUpPreset}>
      {children}
    </motion.div>
  );
};

export {
  ContentHeaderMotionImage,
  ContentHeaderMotionItem,
  ContentHeaderMotionRoot,
  ContentHeaderMotionText,
  ContentHeaderMotionTitle,
};
