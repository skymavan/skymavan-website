import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => cleanup());

Object.defineProperties(HTMLElement.prototype, {
  hasPointerCapture: { value: () => false },
  setPointerCapture: { value: () => undefined },
  releasePointerCapture: { value: () => undefined },
  scrollIntoView: { value: () => undefined },
});

Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
  value: () => null,
});

// jsdom lacks matchMedia. Resolve as prefers-reduced-motion so motion-driven
// components render their plain (fully visible) branches in tests.
window.matchMedia = vi.fn().mockImplementation((query: string) => ({
  matches: query.includes("prefers-reduced-motion"),
  media: query,
  onchange: null,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  addListener: vi.fn(),
  removeListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

// jsdom lacks layout observers. Report every element as in view so any
// whileInView motion resolves to its visible state.
class IntersectionObserverStub {
  cb: (entries: IntersectionObserverEntry[]) => void;
  constructor(cb: (entries: IntersectionObserverEntry[]) => void) {
    this.cb = cb;
  }
  observe(target: Element) {
    this.cb([
      {
        isIntersecting: true,
        target,
        intersectionRatio: 1,
        boundingClientRect: target.getBoundingClientRect(),
        intersectionRect: target.getBoundingClientRect(),
        rootBounds: null,
        time: 0,
      } as unknown as IntersectionObserverEntry,
    ]);
  }
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

window.IntersectionObserver = IntersectionObserverStub as unknown as typeof IntersectionObserver;

class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserverStub as unknown as typeof ResizeObserver;
