const editorialEase = [0.8, 0, 0.2, 1] as const;

const motionDuration = {
  fast: 0.2,
  base: 0.4,
  entrance: 0.7,
  textReveal: 0.32,
};

const motionStagger = {
  tight: 0.08,
  base: 0.12,
};

const fadeUpPreset = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.entrance,
      ease: editorialEase,
    },
  },
};

const staggerContainerPreset = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionStagger.tight,
      delayChildren: motionStagger.tight,
    },
  },
};

const viewportImagePreset = {
  hidden: {
    clipPath: "inset(0% 0% 100%)",
  },
  visible: {
    clipPath: "inset(0%)",
    transition: {
      duration: motionDuration.entrance,
      ease: editorialEase,
    },
  },
};

const overlayPreset = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: motionDuration.base,
      ease: editorialEase,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: motionDuration.fast,
      ease: editorialEase,
    },
  },
};

const heroImagePreset = {
  hidden: {
    clipPath: "inset(0% 0% 100%)",
  },
  visible: {
    clipPath: "inset(0%)",
    transition: {
      delay: motionStagger.base,
      duration: motionDuration.entrance,
      ease: editorialEase,
    },
  },
};

const brandBrushMarkPreset = {
  hidden: {
    opacity: 0,
    scale: 0.992,
    y: 12,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.14,
      duration: motionDuration.entrance,
      ease: editorialEase,
    },
  },
};

const brandBrushStrokeMaskPresets = [
  {
    hidden: {
      width: 0,
    },
    visible: {
      width: 1200,
      transition: {
        delay: 0.24,
        duration: 0.92,
        ease: editorialEase,
      },
    },
  },
  {
    hidden: {
      width: 0,
    },
    visible: {
      width: 1200,
      transition: {
        delay: 0.32,
        duration: 0.96,
        ease: editorialEase,
      },
    },
  },
  {
    hidden: {
      width: 0,
    },
    visible: {
      width: 1200,
      transition: {
        delay: 0.4,
        duration: 0.92,
        ease: editorialEase,
      },
    },
  },
  {
    hidden: {
      width: 0,
    },
    visible: {
      width: 1200,
      transition: {
        delay: 0.48,
        duration: 0.86,
        ease: editorialEase,
      },
    },
  },
] as const;

const heroTitlePreset = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.entrance,
      ease: editorialEase,
    },
  },
};

const textRevealContainerPreset = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

const textRevealWordPreset = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: motionDuration.textReveal,
      ease: editorialEase,
    },
  },
};

export {
  brandBrushMarkPreset,
  brandBrushStrokeMaskPresets,
  editorialEase,
  fadeUpPreset,
  heroImagePreset,
  heroTitlePreset,
  motionDuration,
  motionStagger,
  overlayPreset,
  staggerContainerPreset,
  textRevealContainerPreset,
  textRevealWordPreset,
  viewportImagePreset,
};
