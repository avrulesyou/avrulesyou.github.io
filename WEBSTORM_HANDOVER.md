# WebStorm handover

## Project

This repository is the static portfolio for [abhishekvishwakarma.me](https://abhishekvishwakarma.me).
It is deployed from the `main` branch through GitHub Pages and uses the custom domain stored in
`CNAME`.

The current site is intentionally dependency-light:

| File | Responsibility |
| --- | --- |
| `index.html` | Semantic page structure, project content, navigation, theme control |
| `styles.css` | Visual system, responsive layout, artwork, light/dark theme tokens, motion |
| `script.js` | Theme persistence and progressive-enhancement reveal behavior |
| `CNAME` | `abhishekvishwakarma.me` |
| `.github/workflows/pages.yml` | GitHub Pages deployment on pushes to `main` |

## Open in WebStorm

1. Open the repository root, not an individual file.
2. Keep the project as a plain static project. No `npm install` is required for the current site.
3. Use WebStorm's built-in browser preview or open `index.html` directly.
4. For a predictable local server, use WebStorm's terminal:

   ```bash
   python3 -m http.server 4173
   ```

   Then open `http://localhost:4173`.

5. Before committing, run:

   ```bash
   git diff --check
   ```

6. Test both theme states, a narrow mobile viewport, keyboard navigation, the skip link, and
   `prefers-reduced-motion`.

The site should still render its content if JavaScript is unavailable. JavaScript enhances theme
state and reveal transitions; it is not the source of the portfolio content.

## Current design and behavior

- Art-directed dark-first visual system with lime, orange, violet, and cyan accents.
- Explicit light/dark theme button with `localStorage` persistence and system-theme fallback.
- Responsive navigation and project layout.
- Semantic sections for work, toolkit, about, and contact.
- Skip-to-content link and visible focus behavior.
- Reduced-motion handling that makes content visible immediately.
- Project stories based on public work:
  - SightLine
  - Fraud detection with an AutoEncoder
  - Location Heatmap Tracker
  - The Ember Forge
- GitHub Pages is configured for workflow deployment and HTTPS is enforced for the custom domain.

## What `brunosimon/folio-2025` is about

[Bruno Simon's source repository](https://github.com/brunosimon/folio-2025) powers
[bruno-simon.com](https://bruno-simon.com), a creative-developer portfolio presented as an
explorable game world.

Instead of asking visitors to scroll through a standard case-study grid, Bruno puts them inside a
small 3D environment. The visitor drives a vehicle around the world, discovers portfolio areas,
opens project information, and finds optional interactions. The site includes:

- A Three.js/WebGL world with a drivable vehicle.
- Physics, camera controls, weather, day/night cycles, terrain, water, foliage, and effects.
- A persistent menu with options, controls, achievements, circuit challenges, whispers, and
  behind-the-scenes information.
- Keyboard, touch, gamepad, and mouse interactions.
- Audio and mute controls.
- A server-backed “whisper” feature and score/circuit concepts, with a static experience that
  still works when the server is offline.
- A documented game loop and asset pipeline, including Blender exports and compressed GLB/textures.
- Public source code and creative production notes under the MIT license.

The key idea is not “use Three.js because it looks impressive.” The key idea is that the portfolio
has a memorable **interaction metaphor**: the visitor is exploring Bruno's world, not browsing a
template.

## How our portfolio is currently lacking

The current site is stronger as a fast, readable personal landing page, but it does not yet match
Bruno's level of experiential authorship.

| Area | Bruno Simon | Current site | Gap |
| --- | --- | --- | --- |
| Core metaphor | Drive through a living portfolio world | Read and scroll through an art-directed page | We need a stronger “why this site exists” interaction |
| First impression | Start screen, vehicle, world, sound, discovery | Hero, orbit graphic, and ticker | The hero is visually polished but still recognizably a landing page |
| Project discovery | Projects are found in context while exploring | Four project cards in a grid | Project stories need more reveal, context, and outcomes |
| Interaction depth | Physics, controls, map, achievements, secrets | Theme toggle, hover states, scroll reveals | There is no persistent playful layer or sense of progression |
| Personality | Worldbuilding, humor, whispers, devlogs, hidden details | Copy and visual accents communicate personality | Personality is stated more than experienced |
| Behind the scenes | Explains Three.js, course, devlogs, assets, music, and libraries | Short “about” and toolkit sections | We need a deeper build/process page or expandable “lab notes” |
| Sound and atmosphere | Custom music, mute state, ambient world | No sound layer | Atmosphere is currently visual only |
| Technical spectacle | WebGL, physics, compressed 3D assets, adaptive quality | HTML/CSS/JS with lightweight CSS artwork | Deliberately faster, but less technically surprising |
| Community layer | Whispers and circuit/score concepts | GitHub, LinkedIn, email links | No visitor participation or shared artifact |
| Content model | Project data, scenes, systems, and interaction states | Mostly hand-authored HTML | A data-driven project model would make richer case studies easier |

These are not all defects. Bruno's approach has real costs: a large asset budget, more complex testing,
mobile and accessibility tradeoffs, WebGL performance concerns, and a longer maintenance path. Our
static approach currently wins on speed, clarity, SEO, keyboard access, and ease of editing in WebStorm.

## Recommended upgrade path

### Phase 1: Make the current page feel more authored

- Add a project detail drawer or route with role, stack, challenge, approach, and result.
- Turn the hero orbit into an interactive “signal map” that highlights a project or skill.
- Add a small “field notes” or “behind the build” section with screenshots, devlogs, and decisions.
- Add a handful of harmless secrets: keyboard shortcuts, hover easter eggs, or a changing status line.
- Keep every interaction optional and preserve normal links and headings.

### Phase 2: Add a lightweight world layer

- Use CSS, SVG, or Canvas rather than loading a full 3D world immediately.
- Create a navigable workshop/map with zones for AI, data, Web3, mobile, and play.
- Let each zone reveal the same accessible project detail panels used by the document layer.
- Add a motion/quality toggle and keep reduced motion as a first-class mode.

### Phase 3: Consider WebGL only if the concept earns it

- Prototype one small scene, not an entire game.
- Lazy-load Three.js and scene assets after the accessible page is usable.
- Add a static poster and mobile fallback.
- Cap pixel ratio, compress GLB/textures, and measure performance before expanding.
- Do not add sound or server features until the core portfolio experience is stable.

## Handover checklist

- [ ] Edit content in `index.html`; keep project claims evidence-based.
- [ ] Edit colors and layout through CSS custom properties in `styles.css`.
- [ ] Keep theme state in `script.js`; do not duplicate theme logic in markup.
- [ ] Preserve `CNAME` exactly.
- [ ] Preserve the Pages workflow permissions and `main` trigger.
- [ ] Test keyboard access and reduced motion before pushing.
- [ ] Run `git diff --check`.
- [ ] Confirm the Pages workflow succeeds after merge.
- [ ] Confirm both `http://` and `https://` behavior, with HTTPS remaining enforced.

## Reference links

- [Bruno Simon portfolio](https://bruno-simon.com)
- [Bruno Simon Folio 2025 source](https://github.com/brunosimon/folio-2025)
- [Live portfolio](https://abhishekvishwakarma.me)
- [Portfolio repository](https://github.com/avrulesyou/avrulesyou.github.io)
