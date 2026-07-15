"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

import { EASE_OUT, VIEWPORT_ONCE, fadeRiseSm } from "@/lib/motion";

type SystemStage = {
  index: string;
  label: string;
  description: string;
  human?: boolean;
};

const stages: ReadonlyArray<SystemStage> = [
  {
    index: "01",
    label: "Input",
    description: "Trusted context enters from the tools and data your team already uses.",
  },
  {
    index: "02",
    label: "Reason",
    description: "The system interprets the task, applies constraints, and prepares an action.",
  },
  {
    index: "03",
    label: "Human approval",
    description: "A person reviews consequential decisions before the workflow continues.",
    human: true,
  },
  {
    index: "04",
    label: "Act",
    description: "Approved work reaches the right system with a visible operating trail.",
  },
];

const parent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3, delayChildren: 0.08 } },
};

const stageVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_OUT, staggerChildren: 0.18, delayChildren: 0.08 },
  },
};

const railVariant: Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.85, ease: EASE_OUT } },
};

const nodeVariant: Variants = {
  hidden: { scale: 0.3, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 220, damping: 20 },
  },
};

export function SystemRoute() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <ol className="system-route" aria-label="AI system route">
        {stages.map((stage) => (
          <li
            key={stage.label}
            className={stage.human ? "system-stage system-stage-human" : "system-stage"}
          >
            <div className="system-stage-head">
              <span className="system-stage-index">{stage.index}</span>
              <span className="system-node" aria-hidden="true" />
            </div>
            <h3>{stage.label}</h3>
            <p>{stage.description}</p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <motion.ol
      className="system-route"
      aria-label="AI system route"
      variants={parent}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      {stages.map((stage, i) => (
        <motion.li
          key={stage.label}
          className={stage.human ? "system-stage system-stage-human" : "system-stage"}
          variants={stageVariant}
        >
          {i < stages.length - 1 && (
            <motion.span
              className="system-rail"
              aria-hidden="true"
              variants={railVariant}
            />
          )}
          <div className="system-stage-head">
            <span className="system-stage-index">{stage.index}</span>
            <motion.span className="system-node" aria-hidden="true" variants={nodeVariant} />
          </div>
          <motion.h3 variants={fadeRiseSm}>{stage.label}</motion.h3>
          <motion.p variants={fadeRiseSm}>{stage.description}</motion.p>
        </motion.li>
      ))}
    </motion.ol>
  );
}
