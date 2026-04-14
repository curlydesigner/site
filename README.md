# Curly Designer Static Site

This repository is now a plain static website that mirrors the current live experience at [curlydesigner.com](https://www.curlydesigner.com).

Stack:

- HTML
- CSS
- JavaScript
- Static assets in `assets/`

## Active Site Structure

- `index.html`
- `about.html`
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

- The legacy Jekyll source folders and config files have been removed
- Public HTML pages were verified against the live website during the refactor review
- `feed.xml` is kept as a static file, but the current live site does not appear to serve it successfully
