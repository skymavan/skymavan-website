"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { Button } from "@/components/ui/button";
import { EASE_OUT } from "@/lib/motion";

const HEADLINE_LEAD = ["AI", "systems", "that"];
const HEADLINE_EMPHASIS = ["solve", "operational", "problems."];

const heroStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.08 } },
};

const heroChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE_OUT } },
};

const headlineParent: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_OUT, staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const headlineWord: Variants = {
  hidden: { opacity: 0, y: "0.4em" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT } },
};

function StaticHeadline() {
  return (
    <h1 id="hero-title" className="hero-title">
      AI systems that <em>solve operational problems.</em>
    </h1>
  );
}

function AnimatedHeadline() {
  return (
    <motion.h1
      id="hero-title"
      className="hero-title"
      variants={headlineParent}
    >
      <span className="sr-only">AI systems that solve operational problems.</span>
      <span aria-hidden="true" style={{ display: "block" }}>
        {HEADLINE_LEAD.map((word) => (
          <span key={word} className="hero-word-wrap">
            <motion.span className="hero-word" variants={headlineWord}>
              {word}
            </motion.span>
          </span>
        ))}
        <em className="hero-emphasis">
          {HEADLINE_EMPHASIS.map((word) => (
            <span key={word} className="hero-word-wrap">
              <motion.span className="hero-word" variants={headlineWord}>
                {word}
              </motion.span>
            </span>
          ))}
        </em>
      </span>
    </motion.h1>
  );
}

export function HeroCopy({ bookingUrl }: { bookingUrl?: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="hero-copy">
        <p className="eyebrow">AI Agents · Workflow Automation · AI Software</p>
        <StaticHeadline />
        <p className="hero-description">
          Skymavan builds custom AI agents, connected automations, and production AI
          software for teams that need reliable systems, not experimental chatbots.
          Every solution includes human oversight, secure integrations, and a clear
          path to measurable results.
        </p>
        <div className="hero-actions">
          <Button
            asChild
            size="lg"
            className="liquid-glass hero-primary-action rounded-full text-foreground"
          >
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Book a meeting <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <a href="#services" className="hero-secondary-action">
            See what we build <ArrowDownRight aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="hero-copy"
      variants={heroStagger}
      initial="hidden"
      animate="visible"
    >
      <motion.p className="eyebrow" variants={heroChild}>
        AI Agents · Workflow Automation · AI Software
      </motion.p>
      <AnimatedHeadline />
      <motion.p className="hero-description" variants={heroChild}>
        Skymavan builds custom AI agents, connected automations, and production AI
        software for teams that need reliable systems, not experimental chatbots.
        Every solution includes human oversight, secure integrations, and a clear
        path to measurable results.
      </motion.p>
      <motion.div className="hero-actions" variants={heroChild}>
        <Button
          asChild
          size="lg"
          className="liquid-glass hero-primary-action rounded-full text-foreground"
        >
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
            Book a meeting <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
        <a href="#services" className="hero-secondary-action">
          See what we build <ArrowDownRight aria-hidden="true" />
        </a>
      </motion.div>
    </motion.div>
  );
}
