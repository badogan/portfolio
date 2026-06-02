# Design: Portfolio → Personal Hub

**Date:** 2026-06-02
**Slug:** portfolio-hub
**Status:** Draft — awaiting user review

## Context

The existing site (`badogan/portfolio`, deployed at basridogan.com) is a React CRA
single-page app framed for job-hunting: a hero with a "My stack:" devicon grid,
a projects list, and a long blog-post list, all driven by one config file
(`src/APIsHelpers/HelperContent.js`). No backend.

The owner is in a different place now and wants the landing page to be **simple,
clear, and act as a personal hub** — a calm "this is me" front door that provides
hooks/links outward. The backend-free, single-config-file architecture stays.

## Goals

- Reframe the site as a personal hub/identity page, not a résumé.
- Keep it backend-free; all content driven by `HelperContent.js`.
- Provide clear hooks to: a featured Travel app, Projects, Writing, and Contact.
- Dark, modern, minimal visual tone.

## Non-Goals

- No backend, database, CMS, or routing library.
- No infra changes — the existing CRA + GitHub Actions → basridogan.com pipeline is untouched.
- No rewrite to another framework.

## Layout (single page, top to bottom)

1. **Header / intro** — name + a short intro line (the hook).
2. **Hub grid** — a 2×2 grid of tiles, collapsing to a single column on mobile:
   - **Travel** → external link to the travel app (opens new tab).
   - **Projects** → smooth-scroll to `#projects`.
   - **Writing** → smooth-scroll to `#writing`.
   - **Contact** → smooth-scroll to `#contact` (the footer).
3. **Projects section** (`id="projects"`) — the four existing project cards, restyled for dark theme; each retains its demo / source / live links.
4. **Writing section** (`id="writing"`) — list of the existing 11 blog posts; each card opens the post on Medium (new tab).
5. **Contact footer** (`id="contact"`) — a slim footer with social links (LinkedIn, GitHub, email).

## Visual tone

- **Dark modern**: dark background, light text, one cool accent color.
- Implemented with CSS custom properties in `App.css`
  (`--bg`, `--surface`, `--text`, `--muted`, `--accent`).
- Smooth scrolling via CSS `scroll-behavior: smooth` + anchor links — no JS library.
- Responsive grid: 2×2 on desktop → single column on mobile.

## Configuration (`src/APIsHelpers/HelperContent.js`)

Single source of truth. Changes:

- `HeroContent`:
  - **Add** `intro` (the hook line, string).
  - **Add** `travelUrl` (the travel app URL).
  - **Remove** the `logos` stack object (the "My stack:" devicon grid is retired — old framing).
  - **Keep** `name` and `stayintouchLogos` (social links).
- **Add** a `tiles` array describing the four hub tiles so the grid is config-driven:
  each entry `{ label, target, external }` where `target` is a URL (external) or an
  anchor id like `#projects` (internal scroll).
- `ProjectsContent` — unchanged (4 projects).
- `BlogpostsContent` — unchanged (11 posts).

## Components

- `Hero.js` — reworked into **intro + hub grid**; drops the stack-logos render and
  the old project/blog buttons.
- `Projects.js` / `ProjectCard.js` — kept; restyled for dark theme; `Projects` wrapper gets `id="projects"`.
- `BlogPosts.js` / `BlogpostCard.js` — kept; restyled; wrapper gets `id="writing"`.
- New `Contact.js` — slim footer with social links; `id="contact"`. (Social-link
  rendering currently lives in `Hero.js`; it moves here.)
- `App.js` — renders `Hero → Projects → BlogPosts → Contact`.

## Data flow

`HelperContent.js` exports `HeroContent`, `ProjectsContent`, `BlogpostsContent`
(and new `tiles`). Components import the relevant export and render. No fetching,
no state beyond local UI. Tiles read from config: external tiles render `<a target="_blank">`,
internal tiles render anchor links to section ids.

## Error handling

Minimal — static content. Guard against an empty/missing config array by rendering
nothing for that section rather than crashing (defensive `?.map`).

## Testing

- Lightweight render smoke tests (React Testing Library, already set up):
  - Hero renders the name, intro, and four tiles.
  - Each tile links to the correct target (external href vs. `#anchor`).
  - Projects section renders one card per `ProjectsContent` entry.
  - Writing section renders one card per `BlogpostsContent` entry, each linking to Medium.
  - Contact footer renders the social links.

## Open questions

None — direction, layout, tile behavior, visual tone, stack-logo removal, and
contact-as-footer are all resolved.
