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
                <a class="portfolio-page-pill" href="/portfolio">Portfolio</a>
                <a class="portfolio-page-pill" href="/#testimonials">Testimonials</a>
                <a class="portfolio-page-pill" href="/teaching.html">Workshops</a>
            </nav>
        </section>`;
}

function renderContactSection(currentProject) {
  return `    <section class="connect-footer-section connect-footer-section--portfolio" id="get-in-touch" aria-labelledby="connect-footer-title-${escapeHtml(currentProject.slug)}">
        <div class="connect-footer-shell">
            <div class="connect-footer-visual">
                <img src="/assets/img/get_intouch/img_contact-portfolio.png" alt="Project overview, case study, and wireframe design boards with a color palette and pencils" loading="lazy" decoding="async">
            </div>
            <div class="connect-footer-content">
                <p class="section-eyebrow section-eyebrow--center">Let’s shape what comes next.</p>
                <h2 id="connect-footer-title-${escapeHtml(currentProject.slug)}">Challenges create opportunities to <span class="connect-footer-accent">explore, innovate &amp; make an impact.</span></h2>
                <p class="connect-footer-subtitle">Let’s shape what comes next.</p>
                <div class="connect-footer-actions">
                    <a href="mailto:victoria@curlydesigner.com" aria-label="Email Victoria"><ion-icon name="mail-outline" aria-hidden="true"></ion-icon></a>
                    <a href="https://www.linkedin.com/in/curlydesigner/" target="_blank" rel="noopener noreferrer" aria-label="Visit Victoria’s LinkedIn profile"><ion-icon name="logo-linkedin" aria-hidden="true"></ion-icon></a>
                </div>
            </div>
            <div class="connect-footer-landscape" aria-hidden="true">
                <img src="/assets/img/get_intouch/img_contactme-landscape-3d.png" alt="" loading="lazy" decoding="async">
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
${renderContactSection(currentProject)}
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
