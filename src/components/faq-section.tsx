"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/content/site";

export function FaqSection() {
  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {faqItems.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="border-border">
          <AccordionTrigger className="rounded-none py-6 font-heading text-lg font-semibold tracking-[-0.02em] no-underline hover:no-underline sm:text-xl">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="max-w-3xl pb-7 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            <p>{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
