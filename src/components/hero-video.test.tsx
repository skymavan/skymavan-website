import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { HeroVideo } from "@/components/hero-video";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

function installMatchMedia(reducedMotion: boolean, desktop = true) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => ({
      matches: query.includes("prefers-reduced-motion")
        ? reducedMotion
        : desktop,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  );
}

describe("HeroVideo", () => {
  it("renders the decorative cinematic video with the approved playback contract", () => {
    installMatchMedia(false);
    const { container } = render(<HeroVideo />);

    expect(container.firstChild).toHaveAttribute("data-mounted", "true");
    const video = container.querySelector("video");
    expect(video).not.toBeNull();
    expect(video).toHaveAttribute("src", VIDEO_URL);
    expect(video).toHaveAttribute("autoplay");
    expect(video).toHaveAttribute("loop");
    expect(video).toHaveProperty("muted", true);
    expect(video).toHaveAttribute("playsinline");
    expect(video).toHaveAttribute("preload", "metadata");
    expect(video).toHaveAttribute("aria-hidden", "true");
  });

  it("keeps the poster and omits video when reduced motion is requested", () => {
    installMatchMedia(true);
    const { container } = render(<HeroVideo />);

    const poster = container.querySelector(".hero-poster");
    expect(poster).toBeVisible();
    expect(poster).toHaveAttribute(
      "src",
      expect.stringContaining("cinematic-hero-poster.webp"),
    );
    expect(container.querySelector("video")).toBeNull();
  });
});
