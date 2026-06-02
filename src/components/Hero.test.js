import React from "react";
import { render } from "@testing-library/react";
import Hero from "./Hero";
import { HeroContent } from "../APIsHelpers/HelperContent";

test("renders name and intro", () => {
  const { getByText } = render(<Hero />);
  expect(getByText(HeroContent.name)).toBeInTheDocument();
  expect(getByText(HeroContent.intro)).toBeInTheDocument();
});

test("renders one tile per config entry with correct hrefs", () => {
  const { getByText } = render(<Hero />);
  HeroContent.tiles.forEach(tile => {
    const link = getByText(tile.label).closest("a");
    expect(link).toHaveAttribute("href", tile.target);
    if (tile.external) {
      expect(link).toHaveAttribute("target", "_blank");
    } else {
      expect(link).not.toHaveAttribute("target", "_blank");
    }
  });
});

test("does not render the old 'My stack' block", () => {
  const { queryByText } = render(<Hero />);
  expect(queryByText(/my stack/i)).toBeNull();
});
