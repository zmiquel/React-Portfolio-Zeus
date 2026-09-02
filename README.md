# My Portfolio (React + Vite / TailwindCSS) — minimalist design

🚧 Welcome to my evolving portfolio! I'm actively working on adding more projects and details. Explore what's available, and stay tuned for updates.

**[Visit Portfolio](https://zmiquel.github.io/React-Portfolio-Zeus/)**

## Features

- React with Vite for a fast development environment.
- Hot Module Replacement (HMR) for instant feedback during development.
- TailwindCSS for styling, with a dark theme throughout.
- Responsive down to 390px, with a working mobile nav.
- Scroll-spy navigation that highlights the current section.
- Contact form via EmailJS, with client-side validation and toast feedback.
- Respects `prefers-reduced-motion`.
- ESLint for code linting (clean, zero errors).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **18 or newer** (Vite 5 requires it).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zmiquel/React-Portfolio-Zeus.git
   cd React-Portfolio-Zeus
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

   The site is served at `http://localhost:5173/React-Portfolio-Zeus/`
   (the sub-path comes from `base` in `vite.config.js`, which matches the
   GitHub Pages deployment).

### Other scripts

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # eslint
npm run deploy    # build + publish dist/ to GitHub Pages
```

## Project structure

```
src/
  App.jsx                 section order lives here
  components/             Navbar, Home, About, Skills, Project, Contact, Footer, …
  collections/
    projects.jsx          project cards — add new work here
    skills.jsx            skill icons
    tech.jsx              rotating "What I Like" columns
    social.jsx            all social / contact links in one place
  hooks/AmazingCursor.jsx vendored custom-cursor implementation
```

### Adding a project

Append an entry to `src/collections/projects.jsx`. `github` and `live` are
optional — a card only renders a button when the URL is non-empty, so a
work-in-progress entry won't produce a dead link:

```js
{
  id: 4,
  name: "My New Project",
  path: SCREENSHOT_IMPORT,
  description: "One or two lines on what it does.",
  tech: ["React", "Node"],
  github: "https://github.com/…",
  live: "",
}
```

### Updating contact / social links

Everything lives in `src/collections/social.jsx` and is consumed by the navbar,
hero, About section, Contact section and footer.
