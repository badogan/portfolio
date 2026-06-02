# Portfolio → Personal Hub Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reframe the React portfolio site into a calm, dark, single-page personal hub: an intro, a 2×2 grid of hub tiles (Travel/Projects/Writing/Contact), restyled Projects and Writing sections, and a slim contact footer — all still backend-free and config-driven.

**Architecture:** Single-page CRA app. All content stays in `src/APIsHelpers/HelperContent.js`. `Hero` becomes intro + config-driven tile grid; tiles either link out (external) or smooth-scroll to an on-page section anchor (CSS `scroll-behavior`, no JS lib). Social links move from `Hero` into a new `Contact` footer. Dark theme via CSS custom properties in `App.css`.

**Tech Stack:** React 16.13, react-scripts 3.4 (CRA), react-player (existing, kept), Jest + @testing-library/react v9 for tests.

---

## File Structure

- `src/APIsHelpers/HelperContent.js` — MODIFY. Add `intro`, `travelUrl`, `tiles` to `HeroContent`; remove now-unused `title`, `button1Content`, `button2Content`. **Keep** `logos` (ProjectCard depends on it as a lookup map), `name`, `stayintouchLogos`. `ProjectsContent` and `BlogpostsContent` unchanged.
- `src/components/Hero.js` — MODIFY. Becomes intro + hub grid. Drops "My stack:" block, old buttons, and the social-links block (moves to Contact).
- `src/components/Contact.js` — CREATE. Slim footer with social links, `id="contact"`.
- `src/components/BlogPosts.js` — MODIFY. Rename anchor `id="blogposts"` → `id="writing"`, heading → "Writing".
- `src/App.js` — MODIFY. Render `Hero → Projects → BlogPosts → Contact`.
- `src/App.css` — MODIFY. Dark theme CSS variables, hub-grid styles, `scroll-behavior: smooth`, restyle of existing cards.
- `src/App.test.js` — REPLACE. Stale CRA default test → real smoke tests.
- `src/components/Hero.test.js` — CREATE. Tile-grid behavior tests.
- `src/components/Contact.test.js` — CREATE. Footer social-link tests.

**Note on `travelUrl`:** default to the known prod URL `https://prod.dvlnjbfqs5li.amplifyapp.com`. If the custom domain `travels.basridogan.com` is live, swap it in this one config value.

---

### Task 1: Update config (HelperContent.js)

**Files:**
- Modify: `src/APIsHelpers/HelperContent.js` (the `HeroContent` object, lines 1-38)
- Test: `src/APIsHelpers/HelperContent.test.js` (create)

- [ ] **Step 1: Write the failing test**

Create `src/APIsHelpers/HelperContent.test.js`:

```javascript
import { HeroContent, ProjectsContent, BlogpostsContent } from "./HelperContent";

test("HeroContent has hub fields", () => {
  expect(HeroContent.name).toBe("Basri Dogan");
  expect(typeof HeroContent.intro).toBe("string");
  expect(HeroContent.intro.length).toBeGreaterThan(0);
  expect(HeroContent.travelUrl).toMatch(/^https?:\/\//);
  expect(HeroContent.logos).toBeDefined(); // kept: ProjectCard lookup
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
  expect(byLabel["Projects"]).toMatchObject({ target: "#projects", external: false });
  expect(byLabel["Writing"]).toMatchObject({ target: "#writing", external: false });
  expect(byLabel["Contact"]).toMatchObject({ target: "#contact", external: false });
});

test("content arrays still populated", () => {
  expect(ProjectsContent.length).toBe(4);
  expect(BlogpostsContent.length).toBeGreaterThan(0);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `CI=true yarn test src/APIsHelpers/HelperContent.test.js`
Expected: FAIL — `HeroContent.intro` undefined, `tiles` undefined.

- [ ] **Step 3: Edit the config**

In `src/APIsHelpers/HelperContent.js`, replace the head of the `HeroContent` object (the current `name`/`title`/`button1Content`/`button2Content` lines) so the object begins:

```javascript
const HeroContent = {
  name: "Basri Dogan",
  intro:
    "Engineer, traveller, and occasional writer. This is my corner of the web — a few things I've built, places I've been, and thoughts I've put down.",
  travelUrl: "https://prod.dvlnjbfqs5li.amplifyapp.com",
  tiles: [
    { label: "Travel", target: "https://prod.dvlnjbfqs5li.amplifyapp.com", external: true },
    { label: "Projects", target: "#projects", external: false },
    { label: "Writing", target: "#writing", external: false },
    { label: "Contact", target: "#contact", external: false }
  ],
  logos: {
```

(Leave the existing `logos: { ... }` contents and `stayintouchLogos: [ ... ]` exactly as they are — you are only replacing the four scalar fields above `logos` with `name`/`intro`/`travelUrl`/`tiles`, and keeping `logos` open.)

Keep `travelUrl` and the Travel tile `target` identical. `ProjectsContent` and `BlogpostsContent` are untouched.

- [ ] **Step 4: Run test to verify it passes**

Run: `CI=true yarn test src/APIsHelpers/HelperContent.test.js`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/APIsHelpers/HelperContent.js src/APIsHelpers/HelperContent.test.js
git commit -m "feat: add hub config (intro, travelUrl, tiles); drop unused button/title fields"
```

---

### Task 2: Dark theme + hub-grid styles (App.css)

**Files:**
- Modify: `src/App.css` (prepend variables + add hub/footer styles)

No unit test — visual/CSS. Verified by `yarn build` succeeding and manual check in Task 7's verification.

- [ ] **Step 1: Add CSS variables and base dark theme**

At the very top of `src/App.css`, add:

```css
:root {
  --bg: #15171c;
  --surface: #1e212a;
  --surface-2: #222632;
  --text: #f2f2f2;
  --muted: #8a90a0;
  --accent: #3a7afe;
  --accent-soft: #9db4ff;
  --radius: 10px;
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
}
```

- [ ] **Step 2: Add hub-grid and footer styles**

Append to `src/App.css`:

```css
/* ---- Hub (Hero) ---- */
.hub {
  max-width: 760px;
  margin: 0 auto;
  padding: 12vh 20px 8vh;
  text-align: center;
}
.hub-name {
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 0 0 12px;
}
.hub-intro {
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 540px;
  margin: 0 auto 40px;
}
.hub-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.hub-tile {
  display: block;
  background: var(--surface);
  border: 1px solid transparent;
  border-radius: var(--radius);
  padding: 28px 16px;
  color: var(--text);
  text-decoration: none;
  font-size: 1.05rem;
  transition: border-color 0.15s ease, transform 0.15s ease;
}
.hub-tile:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}
.hub-tile--external { color: var(--accent-soft); }

/* ---- Contact footer ---- */
.contact-footer {
  border-top: 1px solid var(--surface-2);
  padding: 40px 20px;
  text-align: center;
  color: var(--muted);
}
.contact-footer .contact-links {
  display: flex;
  gap: 22px;
  justify-content: center;
  font-size: 1.4rem;
}
.contact-footer .contact-links i { cursor: pointer; }

@media (max-width: 560px) {
  .hub-grid { grid-template-columns: 1fr; }
  .hub-name { font-size: 2rem; }
}
```

- [ ] **Step 3: Verify build compiles**

Run: `CI=true yarn build`
Expected: "Compiled successfully" (warnings about unused legacy CSS are fine).

- [ ] **Step 4: Commit**

```bash
git add src/App.css
git commit -m "feat: dark theme variables, hub-grid and contact-footer styles"
```

---

### Task 3: Rework Hero into intro + hub grid

**Files:**
- Modify: `src/components/Hero.js` (full rewrite)
- Test: `src/components/Hero.test.js` (create)

- [ ] **Step 1: Write the failing test**

Create `src/components/Hero.test.js`:

```javascript
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `CI=true yarn test src/components/Hero.test.js`
Expected: FAIL — old Hero still renders "My stack" and has no tiles with these hrefs.

- [ ] **Step 3: Rewrite Hero.js**

Replace the entire contents of `src/components/Hero.js` with:

```javascript
import React from "react";
import { HeroContent } from "../APIsHelpers/HelperContent";

const Hero = () => {
  const { name, intro, tiles } = HeroContent;

  return (
    <header className="hub">
      <h1 className="hub-name">{name}</h1>
      <p className="hub-intro">{intro}</p>

      <nav className="hub-grid">
        {tiles.map((tile, index) =>
          tile.external ? (
            <a
              key={index}
              className="hub-tile hub-tile--external"
              href={tile.target}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tile.label}
            </a>
          ) : (
            <a key={index} className="hub-tile" href={tile.target}>
              {tile.label}
            </a>
          )
        )}
      </nav>
    </header>
  );
};

export default Hero;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `CI=true yarn test src/components/Hero.test.js`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.js src/components/Hero.test.js
git commit -m "feat: rework Hero into intro + config-driven hub grid"
```

---

### Task 4: New Contact footer

**Files:**
- Create: `src/components/Contact.js`
- Test: `src/components/Contact.test.js` (create)

- [ ] **Step 1: Write the failing test**

Create `src/components/Contact.test.js`:

```javascript
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `CI=true yarn test src/components/Contact.test.js`
Expected: FAIL — `Contact` module does not exist.

- [ ] **Step 3: Create Contact.js**

Create `src/components/Contact.js`:

```javascript
import React from "react";
import { HeroContent } from "../APIsHelpers/HelperContent";

const Contact = () => {
  const { stayintouchLogos } = HeroContent;

  return (
    <footer id="contact" className="contact-footer">
      <div className="contact-links">
        {stayintouchLogos.map((link, index) => (
          <i
            key={index}
            className={link.fontLink}
            onClick={() => window.open(link.externalLink)}
          ></i>
        ))}
      </div>
    </footer>
  );
};

export default Contact;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `CI=true yarn test src/components/Contact.test.js`
Expected: PASS (1 test).

- [ ] **Step 5: Commit**

```bash
git add src/components/Contact.js src/components/Contact.test.js
git commit -m "feat: add Contact footer with social links"
```

---

### Task 5: Rename Writing anchor and heading

**Files:**
- Modify: `src/components/BlogPosts.js` (lines 9 and 11)
- Test: covered by App-level smoke test in Task 6.

- [ ] **Step 1: Edit BlogPosts.js**

In `src/components/BlogPosts.js`, change line 9 from:

```javascript
    <div id="blogposts" className="blogposts-main-div wrapper">
```

to:

```javascript
    <div id="writing" className="blogposts-main-div wrapper">
```

And change the heading on line 11 from `<h2>BLOGPOSTS</h2>` to `<h2>Writing</h2>`.

- [ ] **Step 2: Verify build compiles**

Run: `CI=true yarn build`
Expected: "Compiled successfully".

- [ ] **Step 3: Commit**

```bash
git add src/components/BlogPosts.js
git commit -m "feat: rename blog section anchor to #writing, heading to Writing"
```

---

### Task 6: Wire App.js + real smoke test

**Files:**
- Modify: `src/App.js`
- Replace: `src/App.test.js`

- [ ] **Step 1: Replace the stale App test**

Replace the entire contents of `src/App.test.js` with:

```javascript
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `CI=true yarn test src/App.test.js`
Expected: FAIL — App does not yet render a `#contact` section (Contact not wired in).

- [ ] **Step 3: Update App.js**

Replace the entire contents of `src/App.js` with:

```javascript
import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import BlogPosts from "./components/BlogPosts";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Hero />
      <Projects />
      <BlogPosts />
      <Contact />
    </React.Fragment>
  );
}

export default App;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `CI=true yarn test src/App.test.js`
Expected: PASS (2 tests).

- [ ] **Step 5: Run the full suite**

Run: `CI=true yarn test`
Expected: ALL pass (HelperContent, Hero, Contact, App).

- [ ] **Step 6: Commit**

```bash
git add src/App.js src/App.test.js
git commit -m "feat: wire Contact into App; replace stale CRA smoke test"
```

---

### Task 7: Restyle Projects & Writing cards for dark theme

**Files:**
- Modify: `src/App.css` (override the legacy `.projectcard-main-div`, `.blogpostcard-main-div`, headings, buttons for dark surfaces)

No unit test — visual. Verified by build + manual run.

- [ ] **Step 1: Append dark-theme card overrides to App.css**

Append to `src/App.css`:

```css
/* ---- Section headings ---- */
.projects-heading h2,
.blogposts-heading h2 {
  text-align: center;
  color: var(--text);
  letter-spacing: 1px;
}

/* ---- Project cards ---- */
.projects-main-div,
.blogposts-main-div {
  max-width: 900px;
  margin: 0 auto;
  padding: 6vh 20px;
}
.projectcard-main-div,
.blogpostcard-main-div {
  background: var(--surface);
  border-radius: var(--radius);
  padding: 22px;
  margin: 16px 0;
}
.project-details-name,
.blogpost-details-name {
  color: var(--text);
}
.project-details-description,
.blogpost-details-description {
  color: var(--muted);
  line-height: 1.55;
}
.btnProject,
.btnProject-ghost {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 8px 16px;
  border: 1px solid var(--accent);
  border-radius: 6px;
  color: var(--accent-soft);
  text-decoration: none;
  font-size: 0.9rem;
}
.btnProject:hover { background: var(--accent); color: #fff; }
.project-details-logos {
  display: flex;
  gap: 12px;
  font-size: 1.3rem;
  color: var(--muted);
  margin: 10px 0;
}
```

- [ ] **Step 2: Verify build compiles**

Run: `CI=true yarn build`
Expected: "Compiled successfully".

- [ ] **Step 3: Manual visual check**

Run: `yarn start` (opens http://localhost:3000). Confirm:
- Dark background, centered name + intro, 2×2 tile grid.
- Clicking Projects/Writing/Contact tiles smooth-scrolls to the section.
- Travel tile opens the travel app in a new tab.
- No "My stack:" block anywhere.
- Project cards and writing cards render on dark surfaces.
Stop with Ctrl-C when done.

- [ ] **Step 4: Commit**

```bash
git add src/App.css
git commit -m "feat: restyle project and writing cards for dark theme"
```

---

## Self-Review Notes

- **Spec coverage:** intro (T1/T3), hub grid + tile behavior (T1/T3), Travel external link (T1/T3), Projects scroll section (T5 anchor pre-exists `#projects`, T7 styling), Writing scroll section (T5/T7), Contact slim footer (T4), dark tone (T2/T7), config-driven tiles (T1), stack-logo Hero block removed (T3) — all covered.
- **Divergence from design (intentional):** design said "remove the `logos` object"; kept as a private lookup because `ProjectCard.js:23` renders `HeroContent.logos[stack]`. Intent (no "My stack:" showcase) preserved by removing only the Hero block.
- **Type consistency:** `tiles` entries use `{ label, target, external }` everywhere (T1 config, T1 test, T3 component, T3 test). Anchor ids `#projects` (existing), `#writing` (T5), `#contact` (T4) match tile targets in T1.
- **Note:** `react-scroll-to` dependency stays unused; scrolling is pure CSS. No removal needed (YAGNI on dep cleanup).
