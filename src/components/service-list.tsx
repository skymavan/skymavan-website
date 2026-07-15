"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { EASE_OUT, VIEWPORT_ONCE, fadeRise, fadeRiseSm } from "@/lib/motion";
import { services } from "@/content/site";

const parent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.08 } },
};

const useCaseParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.14 } },
};

export function ServiceList({ bookingUrl }: { bookingUrl?: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="service-list">
        {services.map((service) => (
          <article key={service.id} id={service.id} className="service-row">
            <div className="service-index">{service.index}</div>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Book a meeting about {service.shortTitle.toLowerCase()}
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <ul aria-label={`${service.title} use cases`}>
              {service.useCases.map((useCase) => (
                <li key={useCase}>
                  <span aria-hidden="true" /> {useCase}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="service-list"
      variants={parent}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      {services.map((service) => (
        <motion.article
          key={service.id}
          id={service.id}
          className="service-row"
          variants={fadeRise}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <div className="service-index">{service.index}</div>
          <div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Book a meeting about {service.shortTitle.toLowerCase()}
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <motion.ul
            aria-label={`${service.title} use cases`}
            variants={useCaseParent}
          >
            {service.useCases.map((useCase) => (
              <motion.li key={useCase} variants={fadeRiseSm}>
                <span aria-hidden="true" /> {useCase}
              </motion.li>
            ))}
          </motion.ul>
        </motion.article>
      ))}
    </motion.div>
  );
}
