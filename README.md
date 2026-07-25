# José Obando — Portfolio

Personal portfolio website for José Obando, Senior WordPress Developer.

Built with **React 19 + Vite + Framer Motion**, sharing the glassmorphism design system (fluid animated background, floating cards, scroll-driven timeline, glass panels) of the Plásticos del Pacífico website.

## Pages

- `/` — Home: hero with floating cards + stats, featured projects, skills carousel, "How I Work" timeline, CTA
- `/about` — About: bio, stats, why hire me, how I think, what to expect
- `/projects` — All projects grid
- `/projects/:id` — Case studies (quirch, pilar, pharma, pukllay) with live site previews, challenge/solution/tech, role, outcome
- `/contact` — Contact cards + working contact form (formsubmit.co → jsobando96@gmail.com)

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Deploy — GitHub Pages (jsobando96.github.io)

```bash
npm run deploy
```

This builds the site and pushes `dist/` to the `main` branch of `jsobando96/jsobando96.github.io`, replacing the old portfolio. The build also creates `dist/404.html` (copy of `index.html`) so React Router deep links like `/projects/pukllay` work on GitHub Pages.

Project content lives in `src/data/projects.js`. The resume PDF is at `public/docs/`, screenshots at `public/projects/screens/`, and the profile photo at `public/jose-obando.jpg`.
