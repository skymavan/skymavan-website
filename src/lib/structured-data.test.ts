import { describe, expect, it } from "vitest";

import { faqItems, priceTiers, services, siteConfig } from "@/content/site";
import { createStructuredData } from "@/lib/structured-data";

describe("structured data", () => {
  it("contains only visible, verifiable organization and service content", () => {
    const graph = createStructuredData();
    const serialized = JSON.stringify(graph);

    expect(graph["@graph"].map((entry) => entry["@type"])).toEqual([
      "Organization",
      "WebSite",
      "Service",
      "FAQPage",
    ]);
    expect(serialized).toContain(siteConfig.email);
    for (const service of services) expect(serialized).toContain(service.title);
    for (const tier of priceTiers) expect(serialized).toContain(tier.priceValue);
    for (const faq of faqItems) expect(serialized).toContain(faq.question);
    expect(serialized).not.toContain("aggregateRating");
    expect(serialized).not.toContain("foundingDate");
  });
});
