import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "@/components/site-header";

describe("SiteHeader", () => {
  it("renders the exact wordmark and journey actions", () => {
    render(<SiteHeader />);

    const wordmark = screen.getByRole("link", { name: "SkyMavan home" });
    expect(wordmark.querySelector("img")).toBeInTheDocument();
    expect(wordmark).toHaveTextContent("SkyMavan");
    expect(wordmark).toHaveAttribute("href", "#top");
    expect(screen.getAllByRole("link", { name: "Book a meeting" })[0]).toHaveAttribute(
      "href",
      "https://zbooking.in/Drh23",
    );
    expect(screen.getAllByRole("link", { name: "Book a meeting" })[0]).toHaveAttribute(
      "target",
      "_blank",
    );
    expect(screen.getAllByRole("link", { name: "Book a meeting" })[0]).toHaveAttribute(
      "rel",
      expect.stringContaining("noopener"),
    );
    expect(screen.queryByRole("combobox", { name: "Choose theme" })).toBeNull();
  });

  it("renders anchor navigation and opens an accessible mobile menu", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    expect(screen.getAllByRole("link", { name: "Services" })[0]).toHaveAttribute(
      "href",
      "#services",
    );

    await user.click(screen.getByRole("button", { name: "Open navigation" }));
    expect(screen.getByRole("dialog", { name: "Site navigation" })).toBeVisible();
  });
});
