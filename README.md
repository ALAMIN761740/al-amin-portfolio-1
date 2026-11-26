# Al Amin — Portfolio

Single-page portfolio built with **React and JavaScript**. Dark and light themes,
glass, liquid glass and neumorphic surfaces, and lightweight CSS 3D.

## Run it

Needs Node.js 20.19 or newer.

```bash
npm install
npm run dev       # local development
npm run build     # production build in dist/
npm run preview   # check the production build
```

### দ্রুত শুরু (বাংলা)

1. Zip ফাইলটা আনজিপ করে ফোল্ডারটা VS Code-এ খুলুন।
2. টার্মিনালে `npm install`, তারপর `npm run dev` চালান।
3. আপনার ছবি রাখুন `public/images/profile/al-amin.jpg` নামে।
4. ইমেইল, GitHub, LinkedIn বসান `src/data/profile.js` ফাইলে।

## Add your details

| What | Where |
| --- | --- |
| Photo (portrait, about 800×1000, under 300 KB) | `public/images/profile/al-amin.jpg` |
| Email, GitHub, LinkedIn, availability | `src/data/profile.js` |
| Résumé | add `public/resume.pdf`, then set `resume: '/resume.pdf'` |
| Project links, screenshots, your contribution | `src/data/projects.js` |
| Skills | `src/data/skills.js` |
| Timeline | `src/data/journey.js` |
| Colours and side margins (`--gutter`) | `src/styles/tokens.css` |

For screenshots, put WebP files in `public/images/projects/` and set for example
`image: '/images/projects/restro.webp'`.

## Please confirm before publishing

- Every project feature listed is actually finished (especially FixItNow auth, roles and API).
- Lumiva's technologies match its repository.
- FixItNow: write your own contribution; don't imply you built parts you didn't.
- MongoDB, Postman, npm and pnpm are tools you have really used.
- The journey steps and "8th semester" status are current.

## Contact form

1. Create a service and template at [EmailJS](https://www.emailjs.com).
2. Template variables: `from_name`, `reply_to`, `subject`, `message`.
3. Copy `.env.example` to `.env` and fill in the three values.

Without EmailJS, the form opens the visitor's email app (needs `email` in
`profile.js`). It never shows a success message unless EmailJS accepted the request.

## Structure

```
src/
  components/
    layout/    Navbar, Footer, Background, ScrollProgress
    three/     HeroScene (tilt, orbit, cube), SkillSphere
    projects/  ProjectCard, ProjectModal, ProjectPreview, ProjectLinks
    ui/        Button, TiltCard, Reveal, SectionHeading, ThemeToggle, ...
  sections/    Hero, About, Skills, Projects, Journey, Contact
  data/        All editable content
  hooks/       useTheme, useActiveSection, useScrollVar
  lib/         email, validation, scroll
  styles/      tokens, base, materials, layout, hero, sections, projects
```

## Design notes

- **Neumorphism** is for things you press or type into.
- **Glass** holds content you read.
- **Liquid glass** floats and moves.
- 3D and motion are plain CSS and small React hooks, so there is no animation
  library. Users who prefer reduced motion get a still page.

## Deploy to Vercel

Push to GitHub, import the repository in Vercel (preset: **Vite**), add the three
`VITE_EMAILJS_*` variables, and deploy. After deploying, change `og:image` in
`index.html` to the full URL so link previews work.
