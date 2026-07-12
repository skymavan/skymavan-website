import { describe, expect, it } from "vitest";

import {
  faqItems,
  navigation,
  serviceIds,
  services,
  siteConfig,
} from "@/content/site";

describe("site content", () => {
  it("uses the approved Skymavan identity", () => {
    expect(siteConfig).toMatchObject({
      name: "Skymavan",
      canonicalUrl: "https://skymavan.com/",
      email: "hello@skymavan.com",
      bookingUrl: "https://zbooking.in/Drh23",
    });
    expect(siteConfig.socialLinks).toEqual([
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/sky-mavan-0699ab421/",
        icon: "linkedin",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/skymavanai",
        icon: "instagram",
      },
      {
        label: "X",
        href: "https://x.com/Skymavanai",
        icon: "x",
      },
    ]);
  });

  it("keeps navigation and service anchors unique", () => {
    expect(new Set(navigation.map((item) => item.href)).size).toBe(
      navigation.length,
    );
    expect(new Set(services.map((service) => service.id)).size).toBe(
      services.length,
    );
    expect(services.map((service) => service.id)).toEqual(serviceIds);
  });

  it("provides extractable FAQ answers", () => {
    expect(faqItems).toHaveLength(7);
    expect(faqItems.every((item) => item.answer.length >= 90)).toBe(true);
  });
});
