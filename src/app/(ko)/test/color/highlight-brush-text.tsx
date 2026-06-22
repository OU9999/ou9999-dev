"use client";

import { editorialEase } from "@/constant/motion-preset";
import { cn } from "@/utils/tailwind-util";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import styles from "./color.module.css";

interface HighlightBrushTextProps {
  as: "h1" | "h3";
  children: ReactNode;
  className?: string;
  textClassName?: string;
}

const brushLayerPreset = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: [0, 1, 0.82],
    transition: {
      duration: 0.92,
      ease: editorialEase,
      times: [0, 0.18, 1],
    },
  },
};

const brushBodyPreset = {
  rest: {
    pathLength: 0,
    opacity: 0,
  },
  hover: {
    pathLength: [0, 1, 1],
    opacity: [0, 0.74, 0.46],
    transition: {
      duration: 0.86,
      ease: editorialEase,
      times: [0, 0.68, 1],
    },
  },
};

const brushDryPreset = {
  rest: {
    pathLength: 0,
    opacity: 0,
  },
  hover: {
    pathLength: [0, 1, 1],
    opacity: [0, 0.64, 0.28],
    transition: {
      delay: 0.08,
      duration: 0.74,
      ease: editorialEase,
      times: [0, 0.74, 1],
    },
  },
};

const brushFleckPreset = {
  rest: {
    opacity: 0,
    scale: 0.4,
  },
  hover: {
    opacity: [0, 0.58, 0.18],
    scale: [0.4, 1, 0.74],
    transition: {
      delay: 0.34,
      duration: 0.46,
      ease: editorialEase,
      times: [0, 0.48, 1],
    },
  },
};

const HighlightBrushPaint = () => {
  return (
    <motion.span
      aria-hidden="true"
      className={cn(styles.highlightPaintLayer, "motion-reduce:hidden")}
      variants={brushLayerPreset}
    >
      <svg
        className={styles.highlightPaintSvg}
        focusable="false"
        preserveAspectRatio="none"
        viewBox="0 0 100 24"
      >
        <motion.path
          className={styles.highlightPaintBody}
          d="M2 15 C13 8 24 18 34 13 C47 6 58 17 70 12 C82 7 91 13 98 8"
          variants={brushBodyPreset}
        />
        <motion.path
          className={styles.highlightPaintBodyLight}
          d="M3 13 C18 9 25 16 39 11 C52 7 62 14 75 10 C86 7 94 11 99 9"
          variants={brushBodyPreset}
        />
        <motion.path
          className={styles.highlightPaintDry}
          d="M1 18 C18 18 26 14 42 17 C55 19 66 12 82 15 C90 16 95 13 99 14"
          variants={brushDryPreset}
        />
        <motion.path
          className={styles.highlightPaintDry}
          d="M4 9 C17 12 29 7 43 10 C57 13 68 8 84 10 C91 11 96 9 99 10"
          variants={brushDryPreset}
        />
        <motion.circle
          className={styles.highlightPaintFleck}
          cx="18"
          cy="7"
          r="0.9"
          variants={brushFleckPreset}
        />
        <motion.circle
          className={styles.highlightPaintFleck}
          cx="46"
          cy="18"
          r="0.75"
          variants={brushFleckPreset}
        />
        <motion.circle
          className={styles.highlightPaintFleck}
          cx="82"
          cy="6"
          r="0.7"
          variants={brushFleckPreset}
        />
      </svg>
    </motion.span>
  );
};

const HighlightBrushContent = ({
  children,
  textClassName,
}: Pick<HighlightBrushTextProps, "children" | "textClassName">) => {
  return (
    <>
      <HighlightBrushPaint />
      <span className={cn(styles.gradientText, textClassName)}>{children}</span>
    </>
  );
};

const HighlightBrushText = ({
  as,
  children,
  className,
  textClassName,
}: HighlightBrushTextProps) => {
  if (as === "h1") {
    return (
      <motion.h1
        animate="rest"
        className={cn(styles.highlightBrushText, className)}
        initial="rest"
        whileHover="hover"
      >
        <HighlightBrushContent textClassName={textClassName}>
          {children}
        </HighlightBrushContent>
      </motion.h1>
    );
  }

  return (
    <motion.h3
      animate="rest"
      className={cn(styles.highlightBrushText, className)}
      initial="rest"
      whileHover="hover"
    >
      <HighlightBrushContent textClassName={textClassName}>
        {children}
      </HighlightBrushContent>
    </motion.h3>
  );
};

export { HighlightBrushText };
