import { readFileSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

const publicDir = path.resolve(process.cwd(), "public");

describe("machine-readable content", () => {
  it("publishes an AI-readable company summary", () => {
    const llms = readFileSync(path.join(publicDir, "llms.txt"), "utf8");

    expect(llms).toContain("# SkyMavan");
    expect(llms).toContain("https://skymavan.com/#services");
    expect(llms).toContain("hello@skymavan.com");
  });

  it("keeps machine-readable pricing aligned with the page", () => {
    const pricing = readFileSync(path.join(publicDir, "pricing.md"), "utf8");

    expect(pricing).toContain("AI Agent Build — From $3,500");
    expect(pricing).toContain("Automation Sprint — From $5,000");
    expect(pricing).toContain("AI SaaS MVP — From $10,000");
  });
});
