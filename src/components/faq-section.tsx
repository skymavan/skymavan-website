"use client";

import { motion, useReducedMotion } from "motion/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/content/site";
import { EASE_OUT } from "@/lib/motion";

export function FaqSection() {
  const reduce = useReducedMotion();

  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {faqItems.map((item, i) => {
        const revealProps = reduce
          ? {}
          : {
              initial: { opacity: 0, y: 18 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "0px 0px -10% 0px" },
              transition: { duration: 0.7, ease: EASE_OUT, delay: i * 0.1 },
            };

        return (
          <motion.div key={item.id} {...revealProps}>
            <AccordionItem value={item.id} className="border-border">
              <AccordionTrigger className="rounded-none py-6 font-heading text-lg font-semibold tracking-[-0.02em] no-underline hover:no-underline sm:text-xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-3xl pb-7 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        );
      })}
    </Accordion>
  );
}
