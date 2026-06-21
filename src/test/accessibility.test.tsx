import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";

import { Index } from "@/landing-page";

// Focus the audit on the actual legal standard (IS 5568 ≈ WCAG 2.0 AA) and
// skip best-practice rules that depend on rendered CSS/layout (unavailable in jsdom).
const WCAG = { runOnly: { type: "tag" as const, values: ["wcag2a", "wcag2aa"] } };

describe("accessibility", () => {
  it("provides a skip-to-content link targeting the main landmark", () => {
    const { container } = render(<Index />);
    const skip = container.querySelector(".a11y-skip-link");
    expect(skip).toBeInTheDocument();
    expect(skip).toHaveAttribute("href", "#main-content");
    expect(container.querySelector("#main-content")).toBeInTheDocument();
  });

  it("opens the accessibility menu and applies text-size and contrast settings", async () => {
    const user = userEvent.setup();
    render(<Index />);
    const html = document.documentElement;

    await user.click(screen.getByRole("button", { name: "תפריט נגישות" }));
    const menu = screen.getByRole("dialog", { name: "נגישות" });

    await user.click(within(menu).getByRole("button", { name: "הגדלת טקסט" }));
    expect(html.classList.contains("a11y-text-1")).toBe(true);

    const contrast = within(menu).getByRole("button", {
      name: "ניגודיות גבוהה (כהה)",
    });
    await user.click(contrast);
    expect(html.classList.contains("a11y-contrast-dark")).toBe(true);
    expect(contrast).toHaveAttribute("aria-pressed", "true");
  });

  it("persists preferences to storage and resets them", async () => {
    const user = userEvent.setup();
    render(<Index />);
    const html = document.documentElement;

    await user.click(screen.getByRole("button", { name: "תפריט נגישות" }));
    const menu = screen.getByRole("dialog", { name: "נגישות" });

    await user.click(within(menu).getByRole("button", { name: "גופן קריא" }));
    expect(html.classList.contains("a11y-readable-font")).toBe(true);
    expect(localStorage.getItem("amos-a11y")).toContain("readableFont");

    await user.click(within(menu).getByRole("button", { name: "איפוס נגישות" }));
    expect(html.classList.contains("a11y-readable-font")).toBe(false);
  });

  it("opens the accessibility statement dialog with its heading", async () => {
    const user = userEvent.setup();
    render(<Index />);

    await user.click(screen.getAllByRole("button", { name: "הצהרת נגישות" })[0]);
    const dialog = screen.getByRole("dialog", { name: "הצהרת נגישות" });
    expect(
      within(dialog).getByRole("heading", { name: "הצהרת נגישות" }),
    ).toBeInTheDocument();
  });

  it("has no detectable WCAG 2 A/AA violations (axe)", async () => {
    const { container } = render(<Index />);
    // axe can't message cross-origin <iframe>s (YouTube) under jsdom; drop them.
    container.querySelectorAll("iframe").forEach((f) => f.remove());
    const results = await axe(container, WCAG);
    expect(results).toHaveNoViolations();
  });
});
