import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { ContactForm } from "@/components/contact-form";

describe("ContactForm", () => {
  it("announces validation errors instead of opening an empty draft", async () => {
    const user = userEvent.setup();
    const onOpenDraft = vi.fn();
    render(<ContactForm onOpenDraft={onOpenDraft} />);

    await user.click(screen.getByRole("button", { name: "Open email draft" }));

    expect(onOpenDraft).not.toHaveBeenCalled();
    expect(await screen.findAllByRole("alert")).toHaveLength(3);
  });

  it("opens a structured draft after a valid enquiry", async () => {
    const user = userEvent.setup();
    const onOpenDraft = vi.fn();
    render(<ContactForm onOpenDraft={onOpenDraft} />);

    await user.type(screen.getByLabelText("Name"), "Asha Rao");
    await user.type(screen.getByLabelText("Work email"), "asha@example.com");
    await user.type(screen.getByLabelText("Company (optional)"), "Northstar");
    await user.selectOptions(screen.getByLabelText("Project type"), "ai-agents");
    await user.selectOptions(screen.getByLabelText("Estimated budget"), "10-25k");
    await user.type(
      screen.getByLabelText("What should the system help you do?"),
      "We want an agent that prepares research briefs for our sales team.",
    );

    await user.click(screen.getByRole("button", { name: "Open email draft" }));

    expect(onOpenDraft).toHaveBeenCalledOnce();
    expect(onOpenDraft.mock.calls[0][0]).toMatch(
      /^mailto:hello@skymavan\.com\?/,
    );
  });
});
