"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

import { EASE_OUT, VIEWPORT_ONCE, fadeRise } from "@/lib/motion";

const parent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.06 } },
};

type Item = { title: string; description: string };

export function PrincipleList({
  items,
  ariaLabel,
}: {
  items: ReadonlyArray<Item>;
  ariaLabel?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="principle-list" {...(ariaLabel ? { "aria-label": ariaLabel } : {})}>
        {items.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="principle-list"
      variants={parent}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
    >
      {items.map((item) => (
        <motion.article
          key={item.title}
          variants={fadeRise}
          transition={{ duration: 0.75, ease: EASE_OUT }}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
