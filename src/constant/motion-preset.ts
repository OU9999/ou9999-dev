const editorialEase = [0.8, 0, 0.2, 1] as const;

const motionDuration = {
  fast: 0.2,
  base: 0.4,
  entrance: 0.7,
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
    opacity: 0,
    y: 72,
    scale: 0.98,
    clipPath: "inset(12% 0 0 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    clipPath: "inset(0% 0 0 0)",
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

const heroBackgroundPreset = {
  hidden: {
    backgroundColor: "#0f0f0f",
  },
  visible: {
    backgroundColor: "#1b1a1e",
    transition: {
      duration: motionDuration.entrance,
      ease: editorialEase,
    },
  },
};

const heroImagePreset = {
  hidden: {
    opacity: 0,
    y: 56,
    scale: 0.98,
    clipPath: "inset(50% 0 49% 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: motionDuration.entrance,
      ease: editorialEase,
    },
  },
};

const heroTitlePreset = {
  hidden: {
    opacity: 0,
    y: 34,
    color: "#52525b",
  },
  visible: {
    opacity: 1,
    y: 0,
    color: "#f8fafc",
    transition: {
      duration: motionDuration.entrance,
      ease: editorialEase,
    },
  },
};

export {
  editorialEase,
  fadeUpPreset,
  heroBackgroundPreset,
  heroImagePreset,
  heroTitlePreset,
  motionDuration,
  motionStagger,
  overlayPreset,
  staggerContainerPreset,
  viewportImagePreset,
};
