import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { SiteHeader } from "@/components/site-header";

vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: "system", setTheme: vi.fn() }),
}));

describe("SiteHeader", () => {
  it("renders anchor navigation and opens an accessible mobile menu", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "SkyMavan home" })).toHaveAttribute(
      "href",
      "#top",
    );
    expect(screen.getAllByRole("link", { name: "Services" })[0]).toHaveAttribute(
      "href",
      "#services",
    );

    await user.click(screen.getByRole("button", { name: "Open navigation" }));
    expect(screen.getByRole("dialog", { name: "Site navigation" })).toBeVisible();
  });
});
