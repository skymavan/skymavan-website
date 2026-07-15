"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { EASE_OUT, VIEWPORT_ONCE } from "@/lib/motion";

const STATEMENT = "One well-built system can change the trajectory of an entire operation.".split(
  " ",
);

const parent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.35em" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE_OUT } },
};

export function ClosingCta({ bookingUrl }: { bookingUrl?: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section className="closing-section" aria-label="Closing call to action">
        <div className="site-shell closing-inner">
          <p>One well-built system can change the trajectory of an entire operation.</p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="closing-link"
          >
            Book a meeting <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="closing-section" aria-label="Closing call to action">
      <div className="site-shell closing-inner">
        <motion.p
          variants={parent}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <span className="sr-only">{STATEMENT.join(" ")}</span>
          <span aria-hidden="true">
            {STATEMENT.map((w) => (
              <span key={w} className="closing-word-wrap">
                <motion.span className="closing-word" variants={word}>
                  {w}
                </motion.span>
              </span>
            ))}
          </span>
        </motion.p>
        <motion.a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="closing-link"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.85, ease: EASE_OUT, delay: 0.6 }}
        >
          Book a meeting <ArrowUpRight aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}
