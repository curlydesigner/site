# Curly Designer Static Site

This repository is now a plain static website that mirrors the current live experience at [curlydesigner.com](https://www.curlydesigner.com).

## FIND: LOCAL PREVIEW

To see your changes from VS Code on the website locally:

1. Open Terminal
2. Go to the project folder:

```bash
cd /Users/victoriapanshin/Design/Curlydesigner/site
```

3. Start the local preview server:

```bash
python3 -m http.server 8000
```

4. Open this link in your browser:

```text
http://localhost:8000/
```

How to use it:

- Save any file in VS Code
- Refresh the browser page
- To preview any live page locally, replace `https://curlydesigner.com/...` with `http://localhost:8000/...`
- Example:
  live = `https://curlydesigner.com/wbd-hud`
  local = `http://localhost:8000/wbd-hud`

Search tip:

- In VS Code, search for `FIND: LOCAL PREVIEW`
- Or search for `localhost:8000`

Stack:

- HTML
- CSS
- JavaScript
- Static assets in `assets/`

## Active Site Structure

- `index.html`
- `about.html`
- `portfolio.html` (source for the public `/portfolio` route)
- `resume.html`
- `contact.html`
- `services.html`
- portfolio and article pages in the repo root such as `wbd-hud.html`, `wizits.html`, and `smart-tv.html`
- `category/`
- `tag/`
- `assets/`

## Development

Preview locally with any simple static server, for example:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Notes

- This is a static HTML site. There is no local Jekyll or package build step.
- `.nojekyll` is present so GitHub Pages, if used, serves the files as static HTML.
- Published case studies live in `portfolio/published/`.
- `portfolio/index.html` is generated from `portfolio.html` by `tools/sync-portfolio-route.js` so static hosting serves the clean `/portfolio` route.
- Draft case studies live in `portfolio/drafts/`, which is ignored by Git and only previewed locally.
- Root case-study files are compatibility wrappers for older URLs.
- Public HTML pages were verified against the live website during the refactor review
- `feed.xml` is kept as a static file, but the current live site does not appear to serve it successfully
