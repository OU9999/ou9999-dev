"use client";

import aboutBase64Data from "@/scripts/output/about/base64.json";
import Image from "next/image";
import { motion } from "motion/react";

const brushStrokeEase = [0.68, 0, 0.18, 1] as const;
const aboutBrushBase64Data = aboutBase64Data["about-brush-left.png"];

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
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        className="absolute -left-[205px] top-36 h-[900px] w-[613px] max-w-none motion-reduce:!translate-y-0 motion-reduce:![clip-path:inset(0%)] motion-reduce:!opacity-100 md:-left-[320px] md:top-[178px] md:h-[1120px] md:w-[762px]"
        data-testid="about-brush-reveal-layer"
        initial="hidden"
        animate="visible"
        variants={aboutBrushStrokePreset}
      >
        <Image
          alt=""
          src="/imgs/about/about-brush-left.png"
          fill
          className="object-contain opacity-[0.34] md:opacity-[0.72]"
          sizes="(min-width: 768px) 764px, 613px"
          preload
          placeholder="blur"
          blurDataURL={aboutBrushBase64Data.base64}
        />
      </motion.div>
    </div>
  );
};

export { AboutBrushLayer };
