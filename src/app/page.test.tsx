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
  it("presents the approved celestial instrument narrative and anchors", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "AI systems that move real work forward.",
      }),
    ).toBeVisible();
    expect(
      screen.getByText(
        "SkyMavan builds dependable agents, connected automations, and AI products—with observable decisions and people in control.",
      ),
    ).toBeVisible();
    expect(screen.getAllByRole("link", { name: "Start a project" })[0]).toHaveAttribute(
      "href",
      "#contact",
    );
    expect(screen.getByRole("link", { name: "See what we build" })).toHaveAttribute(
      "href",
      "#services",
    );
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("shows the four-stage hero route with human approval called out", () => {
    render(<Home />);

    const route = screen.getByRole("list", { name: "Hero system route" });
    expect(within(route).getAllByRole("listitem")).toHaveLength(4);
    for (const label of ["Input", "Reason", "Human approval", "Act"]) {
      expect(within(route).getByText(label)).toBeVisible();
    }
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
