import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import {
  HeroContent,
  ProjectsContent,
  BlogpostsContent
} from "./APIsHelpers/HelperContent";

test("renders the hub intro and all four sections", () => {
  const { getByText, container } = render(<App />);
  // intro
  expect(getByText(HeroContent.name)).toBeInTheDocument();
  // section anchors present
  expect(container.querySelector("#projects")).toBeInTheDocument();
  expect(container.querySelector("#writing")).toBeInTheDocument();
  expect(container.querySelector("#contact")).toBeInTheDocument();
});

test("renders one project card per project and the writing list", () => {
  const { getByText } = render(<App />);
  ProjectsContent.forEach(p => {
    expect(getByText(p.name.trim())).toBeInTheDocument();
  });
  expect(getByText(BlogpostsContent[0].heading)).toBeInTheDocument();
});
