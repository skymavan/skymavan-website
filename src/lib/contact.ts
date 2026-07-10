import { z } from "zod";

import { siteConfig } from "@/content/site";

export const interestValues = [
  "ai-agents",
  "automation",
  "ai-saas",
  "not-sure",
] as const;

export const budgetValues = [
  "3.5-5k",
  "5-10k",
  "10-25k",
  "25k-plus",
  "not-sure",
] as const;

export const interestLabels: Record<(typeof interestValues)[number], string> = {
  "ai-agents": "AI Agents",
  automation: "Automation",
  "ai-saas": "AI SaaS",
  "not-sure": "Not sure yet",
};

export const budgetLabels: Record<(typeof budgetValues)[number], string> = {
  "3.5-5k": "$3.5k–$5k",
  "5-10k": "$5k–$10k",
  "10-25k": "$10k–$25k",
  "25k-plus": "$25k+",
  "not-sure": "Not sure yet",
};

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters.")
    .max(80, "Please keep your name under 80 characters."),
  email: z.email("Enter a valid email address."),
  company: z
    .string()
    .trim()
    .max(100, "Please keep the company name under 100 characters."),
  interest: z.enum(interestValues, {
    error: "Choose the kind of project you are considering.",
  }),
  budget: z.enum(budgetValues, {
    error: "Choose an estimated budget range.",
  }),
  details: z
    .string()
    .trim()
    .min(20, "Share at least 20 characters so we understand the opportunity.")
    .max(1500, "Please keep project details under 1,500 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaults: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  interest: "not-sure",
  budget: "not-sure",
  details: "",
};

export function buildMailtoLink(values: ContactFormValues): string {
  const subject = `SkyMavan project enquiry — ${interestLabels[values.interest]}`;
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company: ${values.company || "Not provided"}`,
    `Project type: ${interestLabels[values.interest]}`,
    `Estimated budget: ${budgetLabels[values.budget]}`,
    "",
    "Project details:",
    values.details,
  ].join("\n");

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
