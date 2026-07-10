import { describe, expect, it } from "vitest";

import { withBasePath } from "@/lib/base-path";

describe("withBasePath", () => {
  it("keeps root-hosted assets unchanged", () => {
    expect(withBasePath("/media/hero.webp", "")).toBe("/media/hero.webp");
  });

  it("prefixes project-site assets exactly once", () => {
    expect(withBasePath("/media/hero.webp", "/skymavan")).toBe(
      "/skymavan/media/hero.webp",
    );
    expect(withBasePath("/skymavan/media/hero.webp", "/skymavan")).toBe(
      "/skymavan/media/hero.webp",
    );
  });
});
