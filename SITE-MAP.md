# Site Map

This file is the quick guide for editing the portfolio in VS Code.

## FIND: LOCAL PREVIEW

Use this any time you want to see your edits in the browser without asking for a link.

Start the local server:

```bash
cd /Users/victoriapanshin/Design/Curlydesigner/site
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000/
```

How to preview any page:

- homepage = `http://localhost:8000/`
- about = `http://localhost:8000/about.html`
- portfolio = `http://localhost:8000/category/portfolio`
- case study example = `http://localhost:8000/wbd-hud`

Rule:

- if the live page is `https://curlydesigner.com/some-page`
- the local preview is `http://localhost:8000/some-page`

After you save a file in VS Code:

- refresh the browser tab to see the change

Search tip in VS Code:

- search for `FIND: LOCAL PREVIEW`
- or search for `localhost:8000`

## Important Rule

Edit the root `.html` files.

Do not edit the same-named folders like `wizits/`, `smart-tv/`, or `wbd-hud/` for content changes. Those folders only exist so localhost can open clean URLs like `/wizits/`.

## Main Pages

- Home page: [index.html](/Users/victoriapanshin/Design/Curlydesigner/site/index.html)
- About Me page: [about.html](/Users/victoriapanshin/Design/Curlydesigner/site/about.html)
- Resume page: [resume.html](/Users/victoriapanshin/Design/Curlydesigner/site/resume.html)
- Services page: [services.html](/Users/victoriapanshin/Design/Curlydesigner/site/services.html)
- Contact page: [contact.html](/Users/victoriapanshin/Design/Curlydesigner/site/contact.html)

## Home Page Sections

Everything on the homepage is in [index.html](/Users/victoriapanshin/Design/Curlydesigner/site/index.html).

- Intro / hero section:
  `section.box-intro`
  This is the top section with `Hello,`, `I'm Victoria`, the rotating role headline, and the avatar background.
- Brands / logo strip:
  starts right after the hero section
  This is the "Some of the Brands I've Been Part Of" area.
- Portfolio section:
  `section#portfolio`
  This is the homepage case-study grid.
- What I do section:
  `section.what-i-do`
  This is the 3-column services section on the homepage.
- Testimonials section:
  `section#testimonials`
  This is the testimonial slider.
- Home "About Me" summary:
  `section.about-intro`
  This is the lower homepage section with your image, short bio, and links to About / LinkedIn / Resume.
- Get in touch:
  `section#get-in-touch`

## "About Me" vs "What I Do" On Home

These are two different sections inside [index.html](/Users/victoriapanshin/Design/Curlydesigner/site/index.html):

- "What I do" = the services/cards section in `section.what-i-do`
- "About Me" on home = the short bio section in `section.about-intro`

If you want to edit the full About page, use [about.html](/Users/victoriapanshin/Design/Curlydesigner/site/about.html).

## About Page Sections

The full About page lives in [about.html](/Users/victoriapanshin/Design/Curlydesigner/site/about.html).

Main editable sections:

- What I do
- My Journey
- Education
- Additional about/story sections lower on the page
- Get in touch

## Testimonials

- Homepage testimonials: [index.html](/Users/victoriapanshin/Design/Curlydesigner/site/index.html) in `section#testimonials`
- Case-study pages often link back to the homepage testimonials, but the testimonial content itself is controlled on the homepage.

## Portfolio Archive

- Main portfolio archive page:
  [category/portfolio.html](/Users/victoriapanshin/Design/Curlydesigner/site/category/portfolio.html)
- Blog-style archive page:
  [category/blog.html](/Users/victoriapanshin/Design/Curlydesigner/site/category/blog.html)

## Portfolio Case Studies

Open portfolio case studies from the [portfolio-posts](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts) folder in VS Code.

Those files are shortcuts to the real case-study pages, added only to make the Explorer easier to scan.

The root case-study files are hidden in the VS Code Explorer on purpose so this section stays clean.

Each case study is edited in its root `.html` file:

- [portfolio-posts/wbd-hud.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/wbd-hud.html)
- [portfolio-posts/smart-tv.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/smart-tv.html)
- [portfolio-posts/colour-accessibility.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/colour-accessibility.html)
- [portfolio-posts/secusuite.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/secusuite.html)
- [portfolio-posts/bb-brand.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/bb-brand.html)
- [portfolio-posts/design-guidelines.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/design-guidelines.html)
- [portfolio-posts/empty-data.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/empty-data.html)
- [portfolio-posts/labella-umbrella.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/labella-umbrella.html)
- [portfolio-posts/customer-satisfaction-kiosk.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/customer-satisfaction-kiosk.html)
- [portfolio-posts/wizits.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/wizits.html)
- [portfolio-posts/tjx-market.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/tjx-market.html)
- [portfolio-posts/sharplight.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/sharplight.html)
- [portfolio-posts/bwin.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/bwin.html)
- [portfolio-posts/power-center.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/power-center.html)
- [portfolio-posts/Interior-Illustrations.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/Interior-Illustrations.html)
- [portfolio-posts/3d-exhibition.html](/Users/victoriapanshin/Design/Curlydesigner/site/portfolio-posts/3d-exhibition.html)

## Portfolio Tags

All portfolio tag pages are in the [tag](/Users/victoriapanshin/Design/Curlydesigner/site/tag) folder.

Examples:

- [tag/ux-ui-product-design.html](/Users/victoriapanshin/Design/Curlydesigner/site/tag/ux-ui-product-design.html)
- [tag/design-system.html](/Users/victoriapanshin/Design/Curlydesigner/site/tag/design-system.html)
- [tag/illustrations.html](/Users/victoriapanshin/Design/Curlydesigner/site/tag/illustrations.html)
- [tag/ux-research.html](/Users/victoriapanshin/Design/Curlydesigner/site/tag/ux-research.html)
- [tag/brand-marketing.html](/Users/victoriapanshin/Design/Curlydesigner/site/tag/brand-marketing.html)
- [tag/3d-design.html](/Users/victoriapanshin/Design/Curlydesigner/site/tag/3d-design.html)

## Shared Styling And Assets

- Main stylesheet:
  [assets/css/style.css](/Users/victoriapanshin/Design/Curlydesigner/site/assets/css/style.css)
- Main scripts:
  [assets/js](/Users/victoriapanshin/Design/Curlydesigner/site/assets/js)
- Portfolio images:
  [assets/posts](/Users/victoriapanshin/Design/Curlydesigner/site/assets/posts)
- About page images:
  [assets/img/about](/Users/victoriapanshin/Design/Curlydesigner/site/assets/img/about)
- Testimonial images:
  [assets/img/testimonial](/Users/victoriapanshin/Design/Curlydesigner/site/assets/img/testimonial)

## Explorer Cleanup Added In VS Code

The workspace now hides the duplicate localhost route folders such as:

- `wizits/`
- `smart-tv/`
- `wbd-hud/`
- the other matching project folders

That means the Explorer should now show the real source files more clearly:

- root `.html` pages for editing
- `category/` for archive pages
- `tag/` for tag pages
- `assets/` for CSS, JS, and images

If you want, the next cleanup step can be a second pass where I also add clear HTML comment labels inside [index.html](/Users/victoriapanshin/Design/Curlydesigner/site/index.html) and [about.html](/Users/victoriapanshin/Design/Curlydesigner/site/about.html) so jumping through those long files is even easier.
