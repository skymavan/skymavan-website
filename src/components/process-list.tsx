"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

import { EASE_OUT, VIEWPORT_ONCE, fadeRise } from "@/lib/motion";
import { processSteps } from "@/content/site";

const parent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.06 } },
};

const railVariant: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.6, ease: EASE_OUT, delay: 0.15 },
  },
};

export function ProcessList() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <ol className="process-list">
        {processSteps.map((step) => (
          <li key={step.title}>
            <span className="process-number">{step.index}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div className="process-list-wrap">
      <motion.div
        className="process-progress-rail"
        aria-hidden="true"
        variants={railVariant}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
      />
      <motion.ol
        className="process-list"
        variants={parent}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
      >
        {processSteps.map((step) => (
          <motion.li
            key={step.title}
            variants={fadeRise}
            transition={{ duration: 0.75, ease: EASE_OUT }}
          >
            <span className="process-number">{step.index}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
