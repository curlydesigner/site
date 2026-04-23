# Site Map

This file is the quick guide for editing the portfolio in VS Code.

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

Each case study is edited in its root `.html` file:

- [wbd-hud.html](/Users/victoriapanshin/Design/Curlydesigner/site/wbd-hud.html)
- [smart-tv.html](/Users/victoriapanshin/Design/Curlydesigner/site/smart-tv.html)
- [colour-accessibility.html](/Users/victoriapanshin/Design/Curlydesigner/site/colour-accessibility.html)
- [secusuite.html](/Users/victoriapanshin/Design/Curlydesigner/site/secusuite.html)
- [bb-brand.html](/Users/victoriapanshin/Design/Curlydesigner/site/bb-brand.html)
- [design-guidelines.html](/Users/victoriapanshin/Design/Curlydesigner/site/design-guidelines.html)
- [empty-data.html](/Users/victoriapanshin/Design/Curlydesigner/site/empty-data.html)
- [labella-umbrella.html](/Users/victoriapanshin/Design/Curlydesigner/site/labella-umbrella.html)
- [customer-satisfaction-kiosk.html](/Users/victoriapanshin/Design/Curlydesigner/site/customer-satisfaction-kiosk.html)
- [wizits.html](/Users/victoriapanshin/Design/Curlydesigner/site/wizits.html)
- [tjx-market.html](/Users/victoriapanshin/Design/Curlydesigner/site/tjx-market.html)
- [sharplight.html](/Users/victoriapanshin/Design/Curlydesigner/site/sharplight.html)
- [bwin.html](/Users/victoriapanshin/Design/Curlydesigner/site/bwin.html)
- [power-center.html](/Users/victoriapanshin/Design/Curlydesigner/site/power-center.html)
- [Interior-Illustrations.html](/Users/victoriapanshin/Design/Curlydesigner/site/Interior-Illustrations.html)
- [3d-exhibition.html](/Users/victoriapanshin/Design/Curlydesigner/site/3d-exhibition.html)

## Portfolio Tags

All portfolio tag pages are in the [tag](/Users/victoriapanshin/Design/Curlydesigner/site/tag) folder.

Examples:

- [tag/ux-ui-product-design.html](/Users/victoriapanshin/Design/Curlydesigner/site/tag/ux-ui-product-design.html)
- [tag/design-system.html](/Users/victoriapanshin/Design/Curlydesigner/site/tag/design-system.html)
- [tag/illustrations.html](/Users/victoriapanshin/Design/Curlydesigner/site/tag/illustrations.html)
- [tag/ux-research.html](/Users/victoriapanshin/Design/Curlydesigner/site/tag/ux-research.html)
- [tag/video-sound-editing.html](/Users/victoriapanshin/Design/Curlydesigner/site/tag/video-sound-editing.html)
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
