import { describe, expect, it } from "vitest";

import {
  faqItems,
  navigation,
  priceTiers,
  serviceIds,
  services,
  siteConfig,
} from "@/content/site";

describe("site content", () => {
  it("uses the approved SkyMavan identity", () => {
    expect(siteConfig).toMatchObject({
      name: "SkyMavan",
      canonicalUrl: "https://skymavan.com/",
      email: "hello@skymavan.com",
      bookingUrl: undefined,
    });
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

  it("publishes the approved starting prices", () => {
    expect(priceTiers.map(({ price }) => price)).toEqual([
      "$3,500",
      "$5,000",
      "$10,000",
    ]);
    expect(priceTiers.every((tier) => tier.qualifier === "from")).toBe(true);
  });

  it("provides extractable FAQ answers", () => {
    expect(faqItems).toHaveLength(5);
    expect(faqItems.every((item) => item.answer.length >= 90)).toBe(true);
  });
});
