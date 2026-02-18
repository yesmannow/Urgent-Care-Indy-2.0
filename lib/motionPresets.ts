export const motionTokens = {
  easeOut: [0.16, 1, 0.3, 1] as const,
  durationFast: 0.2,
  duration: 0.32,
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration, ease: motionTokens.easeOut },
  },
};

export function staggerChildren(stagger = 0.06, delayChildren = 0.05) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export const itemFadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.durationFast, ease: motionTokens.easeOut },
  },
};

