import { AppsContent } from "./HelperContent";

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
