import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("core narrative, anchors, FAQ, and layout remain usable", async ({ page }) => {
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "AI systems that move work forward.",
    }),
  ).toBeVisible();
  await expect(page.getByText("from $3,500")).toBeVisible();
  await expect(page.getByText("from $5,000")).toBeVisible();
  await expect(page.getByText("from $10,000")).toBeVisible();

  await page.getByRole("link", { name: "See how we build" }).click();
  await expect(page).toHaveURL(/#approach$/);

  await page
    .getByRole("button", { name: "How much does custom AI development cost?" })
    .click();
  await expect(
    page.getByText("SkyMavan engagements start at $3,500"),
  ).toBeVisible();

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);
});

test("theme choice persists", async ({ page }) => {
  await page.getByRole("combobox", { name: "Choose theme" }).click();
  await page.getByRole("option", { name: "Dark" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("mobile navigation exposes every section", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "desktop", "Desktop uses inline navigation");
  await page.getByRole("button", { name: "Open navigation" }).click();
  const dialog = page.getByRole("dialog", { name: "Site navigation" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("link", { name: "Pricing" })).toBeVisible();
  await dialog.getByRole("link", { name: "Pricing" }).click();
  await expect(page).toHaveURL(/#pricing$/);
});

test("form explains and opens an email draft flow", async ({ page }) => {
  await page.getByLabel("Name").fill("Asha Rao");
  await page.getByLabel("Work email").fill("asha@example.com");
  await page.getByLabel("Company (optional)").fill("Northstar Labs");
  await page.getByLabel("Project type").selectOption("ai-agents");
  await page.getByLabel("Estimated budget").selectOption("10-25k");
  await page
    .getByLabel("What should the system help you do?")
    .fill("Build an observable research agent with a required human approval step.");
  await expect(
    page.getByText("This opens your email application with the project details filled in."),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Open email draft" })).toBeEnabled();
});

test("reduced motion keeps the static hero and removes continuous animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(
    page.getByRole("img", { name: "Connected AI workflow nodes" }),
  ).toBeVisible();
  await expect(page.locator("canvas")).toHaveCount(0);
  await expect(page.locator(".page-progress")).toHaveCount(0);
});

test("desktop interaction activates the living agent network", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "WebGL enhancement is desktop-only");
  await page.locator(".hero-visual").hover();
  await expect(page.locator(".hero-visual canvas")).toBeVisible();
});

test("has no automatically detectable accessibility violations", async ({ page }) => {
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("matches the approved light and dark compositions", async ({ page }) => {
  test.skip(Boolean(process.env.CI), "Local visual baselines are platform-specific");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.getByRole("combobox", { name: "Choose theme" })).toBeVisible();
  await expect(page).toHaveScreenshot("homepage-light.png", {
    fullPage: true,
    animations: "disabled",
  });

  await page.getByRole("combobox", { name: "Choose theme" }).click();
  await page.getByRole("option", { name: "Dark" }).click();
  await expect(page).toHaveScreenshot("homepage-dark.png", {
    fullPage: true,
    animations: "disabled",
  });
});
