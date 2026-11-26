# Updated design prompt — Al Amin portfolio (3D edition)

Design and build a single-page portfolio for **Al Amin, Frontend Developer**,
using **React and JavaScript** with clean, human-readable, modular code.

## Visual system
- Two themes with a toggle that remembers the choice.
  - Dark: midnight navy #080D18, electric blue #2563EB, sky #60A5FA.
  - Light: pale blue #E6EFFF, white surfaces, electric blue accents, navy text.
- Three materials, each with one job:
  - Neumorphism for buttons, inputs and skill keys.
  - Glassmorphism for reading cards and panels.
  - Liquid glass for the navigation, floating badges and moving labels.
- Poppins headings, Inter body, JetBrains Mono for small technical labels.
- Generous left and right margins on every screen (about 9% of the width, at least 28px).

## 3D (selected elements only, never the whole page)
- Hero: portrait that tilts with the pointer, technology labels orbiting it, a spinning cube.
- Skills: a draggable sphere of technologies beside readable category lists.
- Projects: large cards that stand up from a tilted angle while scrolling, with
  pointer tilt and a layered preview that pops forward.
- About and Journey: cards that flip or swing into view; a timeline line that fills on scroll.

## Motion and hover
- Staggered hero entrance, scroll reveals, sliding liquid highlight in the navigation,
  button shine and lift, theme change that expands from the toggle, scroll progress bar.
- Animate transform and opacity. Respect prefers-reduced-motion. Keep touch scrolling free.

## Content rules
- Sections: Home, About, Skills, Projects (with detail dialog), Journey, Contact, Footer.
- Never invent experience, links, statistics, testimonials or project features.
- Missing information is a clearly labelled placeholder in one data folder.
- No skill percentage bars. Contact form shows success only after real delivery.

## Quality bar
- No horizontal overflow from 320px to 1920px; keyboard friendly; visible focus;
  semantic HTML; SEO and Open Graph tags; README with setup and deployment steps.
