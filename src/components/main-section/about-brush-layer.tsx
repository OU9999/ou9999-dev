"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState, type ReactEventHandler } from "react";

const brushStrokeEase = [0.68, 0, 0.18, 1] as const;

const aboutBrushStrokePreset = {
  hidden: {
    clipPath: "inset(0% 0% 100% 0%)",
    opacity: 0.84,
    y: -18,
  },
  visible: {
    clipPath: [
      "inset(0% 0% 100% 0%)",
      "inset(0% 0% 56% 0%)",
      "inset(0% 0% 9% 0%)",
      "inset(0% 0% 0% 0%)",
    ],
    opacity: [0.84, 0.96, 1, 1],
    y: [-18, -7, 1, 0],
    transition: {
      duration: 1.28,
      ease: brushStrokeEase,
      times: [0, 0.24, 0.78, 1],
    },
  },
};

const AboutBrushLayer = () => {
  const [isBrushLoaded, setIsBrushLoaded] = useState(false);

  const handleBrushLoad: ReactEventHandler<HTMLImageElement> = () => {
    setIsBrushLoaded(true);
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        className="absolute -left-[205px] top-36 h-[900px] w-[613px] max-w-none motion-reduce:!transform-none motion-reduce:![clip-path:inset(0%)] motion-reduce:!opacity-100 md:-left-[320px] md:top-[178px] md:h-[1120px] md:w-[762px]"
        data-loaded={isBrushLoaded}
        data-testid="about-brush-reveal-layer"
        initial="hidden"
        animate={isBrushLoaded ? "visible" : "hidden"}
        variants={aboutBrushStrokePreset}
      >
        <Image
          alt=""
          src="/imgs/about/about-brush-left.png"
          fill
          className="object-contain opacity-[0.34] grayscale md:opacity-[0.72]"
          sizes="(min-width: 768px) 764px, 613px"
          preload
          onLoad={handleBrushLoad}
        />
      </motion.div>
    </div>
  );
};

export { AboutBrushLayer };
