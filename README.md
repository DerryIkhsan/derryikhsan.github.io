# Personal Branding One-Page — Derry Ikhsan Sholahuddin

Starter one-page personal site placed at the repo root. Files added:

- `index.html` — hero, 6 project cards, about, contact, footer
- `styles.css` — modern responsive styles and color palette
- `script.js` — small interactions (year, scroll reveal)

How to preview locally (PowerShell):

```powershell
# from repository root (D:\Work\My Project\github.io)
dir .\index.html
# start a local server (if Python is installed)
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Deploy to GitHub Pages (quick):

1. Commit and push these files to the repository root on the branch used for Pages (usually `master` or `main`).
2. In the repository Settings -> Pages, set Source to the branch and folder (root). Save.
3. The site will be available at `https://<username>.github.io/<repo>` (or custom domain if configured).

Notes & next steps:

- Replace placeholder email and CV link in `index.html` with real files.
- Add real project images or links to detailed case studies.
- Optionally convert to a static site generator (Astro/Eleventy) if you'll add a blog.
