import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from "./Hero";
import { HeroContent } from "../APIsHelpers/HelperContent";

const renderWithRouter = (ui) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

test("renders name and intro", () => {
  const { getByText } = renderWithRouter(<Hero />);
  expect(getByText(HeroContent.name)).toBeInTheDocument();
  expect(getByText(HeroContent.intro)).toBeInTheDocument();
});

test("name links to /apps", () => {
  const { getByText } = renderWithRouter(<Hero />);
  const link = getByText(HeroContent.name).closest("a");
  expect(link).toHaveAttribute("href", "/apps");
});

test("renders one tile per config entry with correct hrefs", () => {
  const { getByText } = renderWithRouter(<Hero />);
  HeroContent.tiles.forEach(tile => {
    const link = getByText(tile.label).closest("a");
    expect(link).toHaveAttribute("href", tile.target);
    if (tile.external) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    } else {
      expect(link).not.toHaveAttribute("target", "_blank");
    }
  });
});

test("does not render the old 'My stack' block", () => {
  const { queryByText } = renderWithRouter(<Hero />);
  expect(queryByText(/my stack/i)).toBeNull();
});
