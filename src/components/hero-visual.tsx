"use client";

import type { PointerEvent } from "react";

import { withBasePath } from "@/lib/base-path";

const heroArtwork = {
  desktop: {
    avif: "/media/skymavan-hero-instrument-desktop.avif",
    webp: "/media/skymavan-hero-instrument-desktop.webp",
  },
  mobile: {
    avif: "/media/skymavan-hero-instrument-mobile.avif",
    webp: "/media/skymavan-hero-instrument-mobile.webp",
  },
} as const;

const MAX_SHIFT_X = 8;
const MAX_SHIFT_Y = 5;

function setDepth(element: HTMLElement, x: number, y: number) {
  element.style.setProperty("--hero-shift-x", `${x}px`);
  element.style.setProperty("--hero-shift-y", `${y}px`);
}

export function HeroVisual() {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const element = event.currentTarget;
    const bounds = element.getBoundingClientRect();

    if (bounds.width <= 0 || bounds.height <= 0) {
      setDepth(element, 0, 0);
      return;
    }

    const normalizedX = Math.max(
      -1,
      Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2),
    );
    const normalizedY = Math.max(
      -1,
      Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2),
    );

    setDepth(
      element,
      Number((normalizedX * MAX_SHIFT_X).toFixed(2)),
      Number((normalizedY * MAX_SHIFT_Y).toFixed(2)),
    );
  }

  function resetDepth(event: PointerEvent<HTMLDivElement>) {
    setDepth(event.currentTarget, 0, 0);
  }

  return (
    <div
      className="hero-visual"
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetDepth}
    >
      <picture>
        <source
          media="(max-width: 767px)"
          type="image/avif"
          srcSet={withBasePath(heroArtwork.mobile.avif)}
        />
        <source
          media="(max-width: 767px)"
          type="image/webp"
          srcSet={withBasePath(heroArtwork.mobile.webp)}
        />
        <source
          type="image/avif"
          srcSet={withBasePath(heroArtwork.desktop.avif)}
        />
        <source
          type="image/webp"
          srcSet={withBasePath(heroArtwork.desktop.webp)}
        />
        <img
          className="hero-image"
          src={withBasePath(heroArtwork.desktop.webp)}
          alt=""
          width={1600}
          height={900}
          decoding="async"
          fetchPriority="high"
        />
      </picture>
    </div>
  );
}
