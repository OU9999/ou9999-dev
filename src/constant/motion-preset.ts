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

export {
  editorialEase,
  fadeUpPreset,
  heroImagePreset,
  heroTitlePreset,
  motionDuration,
  motionStagger,
  overlayPreset,
  staggerContainerPreset,
  viewportImagePreset,
};
