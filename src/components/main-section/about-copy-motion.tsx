"use client";

import { useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { editorialEase } from "@/constant/motion-preset";

interface AboutCopySegment {
  prefix: string;
  highlight: string;
  suffix: string;
}

interface AboutCopyMotionProps {
  statementLines: AboutCopySegment[];
  meaningLine1: string;
  meaningLine2: AboutCopySegment;
}

interface AboutCopyLineProps {
  children: ReactNode;
  testId: string;
}

interface AboutHighlightedTextProps {
  children: ReactNode;
  timing: AboutMotionTiming;
  testId: string;
}

interface AboutMotionTiming {
  delay: number;
  duration: number;
}

interface AboutResponsiveTimings {
  statementUnderlines: AboutMotionTiming[];
  meaningUnderline: AboutMotionTiming;
}

const desktopTimings: AboutResponsiveTimings = {
  statementUnderlines: [
    { delay: 0.28, duration: 0.42 },
    { delay: 0.37, duration: 0.42 },
    { delay: 0.46, duration: 0.42 },
  ],
  meaningUnderline: { delay: 1, duration: 0.4 },
};

const mobileTimings: AboutResponsiveTimings = {
  statementUnderlines: [
    { delay: 0.18, duration: 0.32 },
    { delay: 0.24, duration: 0.32 },
    { delay: 0.3, duration: 0.32 },
  ],
  meaningUnderline: { delay: 0.63, duration: 0.32 },
};

const getInitialIsDesktop = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(min-width: 768px)").matches;
};

const aboutUnderlinePreset = {
  hidden: {
    clipPath: "inset(0% 100% 0% 0%)",
  },
  visible: ({ delay, duration }: AboutMotionTiming) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      delay,
      duration,
      ease: editorialEase,
    },
  }),
};

const AboutCopyLine = ({ children, testId }: AboutCopyLineProps) => {
  return (
    <p className="whitespace-nowrap" data-testid={testId}>
      {children}
    </p>
  );
};

const AboutHighlightedText = ({
  children,
  timing,
  testId,
}: AboutHighlightedTextProps) => {
  return (
    <span className="relative inline-block">
      {children}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-0.5 left-0 h-[3px] w-full bg-google-paper opacity-72 [mask-image:url('/imgs/header/home-brush-hard-chalk-steel-v1.png')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:100%_100%] motion-reduce:![clip-path:inset(0%)] [-webkit-mask-image:url('/imgs/header/home-brush-hard-chalk-steel-v1.png')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]"
        custom={timing}
        data-testid={testId}
        initial="hidden"
        animate="visible"
        variants={aboutUnderlinePreset}
      />
    </span>
  );
};

const AboutCopyMotion = ({
  statementLines,
  meaningLine1,
  meaningLine2,
}: AboutCopyMotionProps) => {
  const [isDesktop] = useState(getInitialIsDesktop);
  const timings = isDesktop ? desktopTimings : mobileTimings;

  return (
    <div
      className="font-sans text-lg font-normal leading-[34px] text-google-paper/92 md:text-2xl md:leading-10"
      data-testid="about-copy-motion"
    >
      <div>
        {statementLines.map((line, index) => (
          <AboutCopyLine
            key={line.highlight}
            testId={`about-copy-statement-${index + 1}`}
          >
            {line.prefix}
            <AboutHighlightedText
              timing={timings.statementUnderlines[index]}
              testId={`about-underline-statement-${index + 1}`}
            >
              {line.highlight}
            </AboutHighlightedText>
            {line.suffix}
          </AboutCopyLine>
        ))}
      </div>

      <div className="mt-10">
        <AboutCopyLine testId="about-copy-meaning-1">
          {meaningLine1}
        </AboutCopyLine>
        <AboutCopyLine testId="about-copy-meaning-2">
          {meaningLine2.prefix}
          <AboutHighlightedText
            timing={timings.meaningUnderline}
            testId="about-underline-meaning-2"
          >
            {meaningLine2.highlight}
          </AboutHighlightedText>
          {meaningLine2.suffix}
        </AboutCopyLine>
      </div>
    </div>
  );
};

export { AboutCopyMotion };
export type { AboutCopySegment };
