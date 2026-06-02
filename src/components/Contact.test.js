import React from "react";
import { render } from "@testing-library/react";
import Contact from "./Contact";
import { HeroContent } from "../APIsHelpers/HelperContent";

test("renders a contact anchor and one icon per social link", () => {
  const { container } = render(<Contact />);
  expect(container.querySelector("#contact")).toBeInTheDocument();
  const icons = container.querySelectorAll(".contact-links i");
  expect(icons).toHaveLength(HeroContent.stayintouchLogos.length);
});
