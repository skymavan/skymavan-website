import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";

import {
  canRenderHeroScene,
  HeroSceneBoundary,
  HeroVisual,
} from "@/components/hero-visual";

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

describe("HeroVisual", () => {
  it("defers WebGL until a capable desktop visitor engages the visual", () => {
    const capableEnvironment = {
      mounted: true,
      desktop: true,
      reducedMotion: false,
      webgl: true,
      visible: true,
    };

    expect(canRenderHeroScene({ ...capableEnvironment, activated: false })).toBe(
      false,
    );
    expect(canRenderHeroScene({ ...capableEnvironment, activated: true })).toBe(
      true,
    );
  });

  it("uses the generated poster when reduced motion is requested", () => {
    installMatchMedia(true);
    render(<HeroVisual />);

    expect(
      screen.getByRole("img", { name: "Connected AI workflow nodes" }),
    ).toBeVisible();
    expect(screen.queryByLabelText("Interactive agent network")).toBeNull();
  });

  it("returns to the poster if the WebGL scene fails", () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined);
    function BrokenScene(): ReactNode {
      throw new Error("WebGL context unavailable");
    }

    render(
      <HeroSceneBoundary fallback={<p>Static agent network</p>}>
        <BrokenScene />
      </HeroSceneBoundary>,
    );

    expect(screen.getByText("Static agent network")).toBeVisible();
    consoleError.mockRestore();
  });
});
