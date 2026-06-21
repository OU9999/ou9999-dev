"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
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

const mobileStaticClassName =
  "max-md:!transform-none max-md:!opacity-100 max-md:![clip-path:inset(0%)]";

const ContentHeaderMotionRoot = ({
  children,
  className,
}: ContentHeaderMotionProps) => {
  return (
    <motion.section
      className={className}
      initial="hidden"
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
  return (
    <motion.div
      className={cn(className, mobileStaticClassName)}
      variants={heroImagePreset}
      initial="hidden"
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
  return (
    <motion.div
      className={className}
      variants={staggerContainerPreset}
      initial="hidden"
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
    <motion.h1
      className={cn(className, mobileStaticClassName)}
      variants={heroTitlePreset}
    >
      {children}
    </motion.h1>
  );
};

const ContentHeaderMotionItem = ({
  children,
  className,
}: ContentHeaderMotionProps) => {
  return (
    <motion.div
      className={cn(className, mobileStaticClassName)}
      variants={fadeUpPreset}
    >
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
