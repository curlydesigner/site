# AGENT.md

## Project Type

This is a fully static portfolio website.

Active stack:

- HTML
- CSS
- JavaScript
- Static assets under `assets/`

There is no Jekyll source tree remaining in the repo. The live-facing source of truth is the static HTML checked into this repository.

## Active Pages

Primary pages:

- `index.html`
- `about.html`
- `resume.html`
- `contact.html`
- `services.html`

Portfolio and article pages:

- root-level `.html` files such as `wbd-hud.html`, `wizits.html`, `smart-tv.html`, `secusuite.html`

Supporting navigational pages:

- `category/*.html`
- `tag/*.html`

## Styling And Behavior

- Main CSS: `assets/css/style.css`
- Vendor CSS: `assets/css/bootstrap.min.css`
- Main scripts:
  - `assets/js/custom.js`
  - `assets/js/menu.js`
  - `assets/js/animated-headline.js`
- Vendor libraries:
  - jQuery
  - Bootstrap JS
  - Slick slider
  - Ionicons loaded from CDN

## How To Edit Safely

1. Edit the target static HTML file directly.
2. Make shared visual changes in `assets/css/style.css` where possible.
3. Preserve existing URLs and filenames unless a redirect plan exists.
4. Verify menu links, anchors, images, and portfolio navigation after changes.
5. Be especially careful with `resume.html`, which contains page-specific inline styling and print rules.

## Validation Workflow

Use a static server for review:

```bash
python3 -m http.server 8000
```

Minimum manual QA:

1. Homepage
2. About page
3. Resume page
4. Portfolio index
5. At least one portfolio detail page

## Refactor Review Status

During the static refactor review, the public HTML pages were compared directly against the live site and matched with no visual drift detected.

The only non-visual discrepancy was `feed.xml`, because the current live URL serves a GitHub Pages 404 instead of a working feed.
