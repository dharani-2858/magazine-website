# Meridian — Magazine Website

A responsive online magazine front-end built with plain HTML, CSS, and JavaScript. No frameworks, no build step.

## Features

- Editorial hero section with an SVG cover illustration
- Filterable article grid (Culture / Science / Ideas / Dispatches)
- Live headline search that scrolls to and highlights the match
- Sticky masthead that condenses on scroll
- Pull-quote long-read section and a "Most Read" ranking list
- Newsletter form with email validation and inline feedback
- Mobile hamburger navigation
- Accessible: keyboard focus states, ARIA attributes, reduced-motion support

## Tech Stack

| Layer | Used |
|---|---|
| Structure | HTML5, semantic tags |
| Styling | CSS3 — custom properties, Grid, Flexbox, media queries |
| Behaviour | Vanilla JavaScript (ES6) |
| Type | Fraunces + IBM Plex Sans (Google Fonts) |

## File Structure

```
magazine-website/
├── index.html    # Page structure and content
├── style.css     # Design tokens, layout, responsive rules
├── script.js     # Nav, search, filtering, form validation
└── README.md
```

## Run Locally

```bash
git clone https://github.com/<your-username>/magazine-website.git
cd magazine-website
```

Then open `index.html` in any browser. Or serve it:

```bash
python -m http.server 8000
# visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Push all files to the repository root
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch** → `main` → `/ (root)`
4. Save — the site goes live at `https://<your-username>.github.io/magazine-website/`

## Notes

Meridian is a fictional publication. All article headlines, bylines, and copy are written for demonstration purposes.
