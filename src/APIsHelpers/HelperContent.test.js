import { HeroContent, ProjectsContent, BlogpostsContent, AppsContent } from "./HelperContent";

test("HeroContent has hub fields", () => {
  expect(HeroContent.name).toBe("Basri Dogan");
  expect(typeof HeroContent.intro).toBe("string");
  expect(HeroContent.intro.length).toBeGreaterThan(0);
  expect(HeroContent.logos).toBeDefined();
  expect(Array.isArray(HeroContent.stayintouchLogos)).toBe(true);
});

test("HeroContent.tiles describe the four hub tiles", () => {
  expect(Array.isArray(HeroContent.tiles)).toBe(true);
  expect(HeroContent.tiles).toHaveLength(4);
  HeroContent.tiles.forEach(t => {
    expect(typeof t.label).toBe("string");
    expect(typeof t.target).toBe("string");
    expect(typeof t.external).toBe("boolean");
  });
  const byLabel = Object.fromEntries(HeroContent.tiles.map(t => [t.label, t]));
  expect(byLabel["Travel"].external).toBe(true);
  expect(byLabel["Travel"].target).toMatch(/^https?:\/\//);
  expect(byLabel["Projects"]).toMatchObject({ target: "#projects", external: false });
  expect(byLabel["Writing"]).toMatchObject({ target: "#writing", external: false });
  expect(byLabel["Contact"]).toMatchObject({ target: "#contact", external: false });
});

test("content arrays still populated", () => {
  expect(ProjectsContent.length).toBe(4);
  expect(BlogpostsContent.length).toBeGreaterThan(0);
});

test("AppsContent is a non-empty array", () => {
  expect(Array.isArray(AppsContent)).toBe(true);
  expect(AppsContent.length).toBeGreaterThan(0);
});

test("every AppsContent entry has name and url strings", () => {
  AppsContent.forEach(app => {
    expect(typeof app.name).toBe("string");
    expect(app.name.length).toBeGreaterThan(0);
    expect(typeof app.url).toBe("string");
    expect(app.url).toMatch(/^https?:\/\//);
  });
});
