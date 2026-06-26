import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppLauncher from "./AppLauncher";
import { AppsContent } from "../APIsHelpers/HelperContent";

const renderWithRouter = (ui) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

test("renders all app names", () => {
  renderWithRouter(<AppLauncher />);
  AppsContent.forEach(app => {
    expect(screen.getByText(app.name)).toBeInTheDocument();
  });
});

test("each app link has correct href and opens in new tab", () => {
  renderWithRouter(<AppLauncher />);
  AppsContent.forEach(app => {
    const link = screen.getByText(app.name).closest("a");
    expect(link).toHaveAttribute("href", app.url);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});

test("back link points to /", () => {
  renderWithRouter(<AppLauncher />);
  const back = screen.getByText("← Back");
  expect(back.closest("a")).toHaveAttribute("href", "/");
});
