import { describe, expect, it } from "vitest";

import robots, { dynamic as robotsDynamic } from "@/app/robots";
import sitemap, { dynamic as sitemapDynamic } from "@/app/sitemap";

describe("metadata routes", () => {
  it("declares metadata handlers static for export builds", () => {
    expect(robotsDynamic).toBe("force-static");
    expect(sitemapDynamic).toBe("force-static");
  });

  it("publishes the canonical homepage in the sitemap", () => {
    expect(sitemap()).toEqual([
      expect.objectContaining({
        url: "https://skymavan.com/",
        lastModified: expect.any(Date),
        changeFrequency: "monthly",
        priority: 1,
      }),
    ]);
  });

  it("allows search and AI citation crawlers", () => {
    const result = robots();
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    const agents = rules.flatMap((rule) => rule.userAgent);

    expect(agents).toEqual(
      expect.arrayContaining([
        "*",
        "GPTBot",
        "ChatGPT-User",
        "PerplexityBot",
        "ClaudeBot",
        "anthropic-ai",
        "Google-Extended",
        "Bingbot",
      ]),
    );
    expect(result.sitemap).toBe("https://skymavan.com/sitemap.xml");
  });
});
