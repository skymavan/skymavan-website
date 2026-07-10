import { describe, expect, it } from "vitest";

import {
  buildMailtoLink,
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact";

const validEnquiry: ContactFormValues = {
  name: "Asha Rao",
  email: "asha@example.com",
  company: "Northstar Labs",
  interest: "ai-agents",
  budget: "10-25k",
  details: "We want an agent that prepares research briefs for our sales team.",
};

describe("contact form", () => {
  it("accepts an enquiry at every approved boundary", () => {
    expect(contactFormSchema.safeParse(validEnquiry).success).toBe(true);
    expect(
      contactFormSchema.safeParse({
        ...validEnquiry,
        name: "Al",
        company: "",
        details: "x".repeat(20),
      }).success,
    ).toBe(true);
  });

  it("rejects invalid identity, budget, and project details", () => {
    const invalid = contactFormSchema.safeParse({
      ...validEnquiry,
      name: "A",
      email: "not-an-email",
      budget: "unknown",
      details: "Too short",
    });

    expect(invalid.success).toBe(false);
    if (!invalid.success) {
      const fields = invalid.error.issues.map((issue) => issue.path[0]);
      expect(fields).toEqual(
        expect.arrayContaining(["name", "email", "budget", "details"]),
      );
    }
  });

  it("creates a transparent encoded email draft", () => {
    const href = buildMailtoLink(validEnquiry);
    const decoded = decodeURIComponent(href);

    expect(href).toMatch(/^mailto:hello@skymavan\.com\?/);
    expect(decoded).toContain("SkyMavan project enquiry — AI Agents");
    expect(decoded).toContain("Name: Asha Rao");
    expect(decoded).toContain("Company: Northstar Labs");
    expect(decoded).toContain(validEnquiry.details);
  });
});
