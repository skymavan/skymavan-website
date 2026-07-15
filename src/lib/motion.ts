import type { Transition, Variants } from "motion/react";

export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const VIEWPORT_ONCE = { once: true, margin: "0px 0px -12% 0px" } as const;

export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE_OUT } },
};

export const fadeRiseSm: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: EASE_OUT } },
};

export const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } },
};

export const staggerParentSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.08 } },
};

export const revealTransition: Transition = { duration: 0.85, ease: EASE_OUT };
