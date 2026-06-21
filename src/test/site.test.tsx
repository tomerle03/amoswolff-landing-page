import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Index } from "@/landing-page";

describe("landing page", () => {
  it("renders the logo and contact phone number", () => {
    render(<Index />);
    expect(screen.getAllByAltText("Amos Wolff Bike Master").length).toBeGreaterThan(0);
    expect(screen.getAllByText("050-846-3983").length).toBeGreaterThan(0);
  });

  it("renders all main page sections", () => {
    const { container } = render(<Index />);
    for (const id of ["main-content", "fitting", "about", "contact"]) {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument();
    }
  });

  it("defaults to Hebrew (RTL) and switches to English via the toggle", async () => {
    const user = userEvent.setup();
    const { container } = render(<Index />);
    const root = container.querySelector("[lang]") as HTMLElement;

    expect(root).toHaveAttribute("lang", "he");
    expect(root).toHaveAttribute("dir", "rtl");

    await user.click(screen.getByRole("button", { name: "EN" }));

    expect(root).toHaveAttribute("lang", "en");
    expect(root).toHaveAttribute("dir", "ltr");
    expect(screen.getAllByRole("link", { name: "About Amos" }).length).toBeGreaterThan(0);
  });

  it("gives every contact form field an accessible name", () => {
    render(<Index />);
    expect(screen.getByRole("textbox", { name: "שם" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "אימייל" })).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: "אני מתעניין ב..." }),
    ).toBeInTheDocument();
  });
});
