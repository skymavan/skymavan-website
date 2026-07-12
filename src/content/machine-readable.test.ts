import { readFileSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

const publicDir = path.resolve(process.cwd(), "public");

describe("machine-readable content", () => {
  it("publishes an AI-readable company summary", () => {
    const llms = readFileSync(path.join(publicDir, "llms.txt"), "utf8");

    expect(llms).toContain("# Skymavan");
    expect(llms).toContain("https://skymavan.com/#services");
    expect(llms).toContain("hello@skymavan.com");
  });


});
