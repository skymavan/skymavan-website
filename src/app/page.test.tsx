import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import Home from "@/app/page";

beforeEach(() => {
  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => ({
      matches: query.includes("prefers-reduced-motion"),
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  );
});

describe("Home", () => {
  it("presents the approved cinematic hero narrative and anchors", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Intelligence, built to move real work forward.",
      }),
    ).toBeVisible();
    expect(
      screen.getByText(
        "SkyMavan designs custom AI agents, connected automations, and AI products for teams that need dependable progress—with clear controls, observable decisions, and people in command.",
      ),
    ).toBeVisible();
    expect(screen.getAllByRole("link", { name: "Begin the journey" })[0]).toHaveAttribute(
      "href",
      "#contact",
    );
    expect(screen.getByRole("link", { name: "Explore what we build" })).toHaveAttribute(
      "href",
      "#services",
    );
  });

  it("explains the operating loop as a semantic four-stage route", () => {
    render(<Home />);

    const route = screen.getByRole("list", { name: "AI system route" });
    expect(within(route).getAllByRole("listitem")).toHaveLength(4);
    for (const label of ["Input", "Reason", "Human approval", "Act"]) {
      expect(within(route).getByText(label)).toBeVisible();
    }
  });
});
