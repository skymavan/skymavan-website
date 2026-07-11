import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HeroVisual } from "@/components/hero-visual";

describe("HeroVisual", () => {
  it("renders responsive local artwork without remote video", () => {
    const { container } = render(<HeroVisual />);

    const picture = container.querySelector(".hero-visual picture");
    expect(picture).not.toBeNull();
    expect(
      picture?.querySelector('source[media="(max-width: 767px)"][type="image/avif"]'),
    ).toHaveAttribute(
      "srcset",
      expect.stringContaining("skymavan-hero-instrument-mobile.avif"),
    );
    expect(picture?.querySelector('source[type="image/avif"]:not([media])')).toHaveAttribute(
      "srcset",
      expect.stringContaining("skymavan-hero-instrument-desktop.avif"),
    );
    expect(picture?.querySelector("img")).toHaveAttribute("alt", "");
    expect(container.querySelector("video")).toBeNull();
  });

  it("caps pointer depth and resets it when the pointer leaves", () => {
    const { container } = render(<HeroVisual />);
    const visual = container.querySelector<HTMLElement>(".hero-visual");
    expect(visual).not.toBeNull();
    if (!visual) return;

    visual.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 1000, height: 500 }) as DOMRect;

    fireEvent.pointerMove(visual, { clientX: 1000, clientY: 0 });
    expect(visual.style.getPropertyValue("--hero-shift-x")).toBe("8px");
    expect(visual.style.getPropertyValue("--hero-shift-y")).toBe("-5px");

    fireEvent.pointerLeave(visual);
    expect(visual.style.getPropertyValue("--hero-shift-x")).toBe("0px");
    expect(visual.style.getPropertyValue("--hero-shift-y")).toBe("0px");
  });
});
