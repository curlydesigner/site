const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const dataPath = path.join(rootDir, 'assets/data/portfolio-projects.json');
const publishedDir = path.join(rootDir, 'portfolio/published');

const START_MARKER = '<!-- portfolio-page-ending:start -->';
const END_MARKER = '<!-- portfolio-page-ending:end -->';

const projects = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderProjectCard(project) {
  return `                <a class="portfolio-project-card" href="${escapeHtml(project.url)}">
                    <span class="portfolio-project-card__image">
                        <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" loading="lazy">
                    </span>
                    <span class="portfolio-project-card__content">
                        <span class="portfolio-project-card__category">${escapeHtml(project.category)}</span>
                        <span class="portfolio-project-card__title">${escapeHtml(project.title)}</span>
                        <span class="portfolio-project-card__description">${escapeHtml(project.description)}</span>
                    </span>
                </a>`;
}

function renderOtherProjects(currentProject) {
  const cards = projects
    .filter((project) => project.slug !== currentProject.slug)
    .map(renderProjectCard)
    .join('\n');

  return `        <section class="portfolio-ending-section portfolio-ending-section--projects" aria-labelledby="other-projects-${escapeHtml(currentProject.slug)}">
            <div class="portfolio-ending-section__header">
                <p class="portfolio-ending-eyebrow">OTHER PROJECTS</p>
                <h2 class="portfolio-ending-heading" id="other-projects-${escapeHtml(currentProject.slug)}">Browse more portfolio work</h2>
            </div>
            <div class="portfolio-project-grid">
${cards}
            </div>
        </section>`;
}

function renderOtherPagesNavigation(currentProject) {
  return `        <section class="portfolio-ending-section portfolio-ending-section--pages" aria-labelledby="other-pages-${escapeHtml(currentProject.slug)}">
            <h2 class="portfolio-ending-heading portfolio-ending-heading--small" id="other-pages-${escapeHtml(currentProject.slug)}">Other Pages</h2>
            <nav class="portfolio-page-nav" aria-label="Other pages">
                <a class="portfolio-page-pill" href="/about.html">About</a>
                <a class="portfolio-page-pill" href="/category/portfolio.html">Portfolio</a>
                <a class="portfolio-page-pill" href="/#testimonials">Testimonials</a>
                <a class="portfolio-page-pill" href="/teaching.html">Workshops</a>
            </nav>
        </section>`;
}

function renderContactSection() {
  return `    <section class="section position-relative highlighted-section portfolio-ending-contact" id="get-in-touch" aria-label="Contact">
        <div class="container main-container clearfix get-in-touch portfolio-ending-contact__inner">
            <div class="portfolio-ending-contact__illustration">
                <img src="/assets/img/get_intouch/p_home_connect_typo.svg" class="img-responsive" alt="Want to know more? Let's get in touch!">
            </div>
            <div class="portfolio-ending-contact__links">
                <ul class="social-ul" aria-label="Contact links">
                    <li class="box-social"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/curlydesigner/" aria-label="Visit LinkedIn profile">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a></li>
                    <li class="box-social"><a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/curlydesigner" aria-label="Visit Behance profile">
                            <ion-icon name="logo-behance"></ion-icon>
                        </a></li>
                    <li class="box-social"><a href="mailto:victoria@curlydesigner.com" aria-label="Email Victoria">
                            <ion-icon name="mail-outline"></ion-icon>
                        </a></li>
                </ul>
            </div>
        </div>
    </section>`;
}

function renderPortfolioPageEnding(currentProject) {
  return `${START_MARKER}
<div class="portfolio-page-ending">
    <div class="portfolio-page-ending__inner">
${renderOtherProjects(currentProject)}
${renderOtherPagesNavigation(currentProject)}
    </div>
${renderContactSection()}
</div>
${END_MARKER}`;
}

function removeLegacyEnding(html) {
  let next = html;

  next = next.replace(
    /\n\s*<section class="case-section" id="other-projects">[\s\S]*?<\/section>\s*(?=\n\s*<\/div>\s*<\/div>\s*<!-- end main-container -->)/g,
    '\n'
  );

  next = next.replace(
    /\n\s*<section class="case-section" id="other-pages">[\s\S]*?<\/section>\s*(?=\n\s*<\/div>\s*<\/div>\s*<!-- end main-container -->)/g,
    '\n'
  );

  next = next.replace(
    /\s*(?:<p><br \/><\/p>\s*)?(?:<hr \/>\s*)?(?:<h4 id="(?:other-projects|other-projects-i-was-leading-for-blackberry-products|other-blackberry-projects)">[\s\S]*?<\/h4>\s*<ul>[\s\S]*?<\/ul>\s*(?:<hr \/>\s*)?)?<h4 id="other-pages">Other Pages<\/h4>\s*<nav class="case-study-page-links" aria-label="Other pages">[\s\S]*?<\/nav>\s*(?=\n\s*<\/div>\s*\n\s*<div class="col-md-3">)/g,
    '\n'
  );

  return next;
}

function replaceManagedEnding(html, renderedEnding) {
  const managedBlock = new RegExp(
    `${START_MARKER.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${END_MARKER.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`
  );

  if (managedBlock.test(html)) {
    return html.replace(managedBlock, renderedEnding);
  }

  return html.replace(/\n\s*<!-- footer -->/, `\n\n${renderedEnding}\n\n    <!-- footer -->`);
}

for (const project of projects) {
  const filePath = path.join(publishedDir, project.file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing published case-study file for ${project.slug}: ${filePath}`);
  }

  const original = fs.readFileSync(filePath, 'utf8');
  const withoutLegacyEnding = removeLegacyEnding(original);
  const renderedEnding = renderPortfolioPageEnding(project);
  const updated = replaceManagedEnding(withoutLegacyEnding, renderedEnding);

  if (updated === original) {
    console.log(`No changes needed: ${project.file}`);
    continue;
  }

  fs.writeFileSync(filePath, updated);
  console.log(`Updated: ${project.file}`);
}
