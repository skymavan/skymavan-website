import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { ThemeSwitcher } from "@/components/theme-switcher";

const setTheme = vi.fn();

vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: "system", setTheme }),
}));

describe("ThemeSwitcher", () => {
  beforeEach(() => setTheme.mockClear());

  it("offers light, dark, and system modes", async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);

    await user.click(screen.getByRole("combobox", { name: "Choose theme" }));
    expect(screen.getByRole("option", { name: "Light" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Dark" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "System" })).toBeInTheDocument();

    await user.click(screen.getByRole("option", { name: "Dark" }));
    expect(setTheme).toHaveBeenCalledWith("dark");
  });
});
