const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const dataPath = path.join(rootDir, 'assets/data/portfolio-projects.json');
const publishedDir = path.join(rootDir, 'portfolio/published');

const START_MARKER = '<!-- case-study-top:start -->';
const END_MARKER = '<!-- case-study-top:end -->';
const ASSET_VERSION = 'case-study-header-20260720c';

const projects = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const detailsBySlug = {
  'wbd-hud': {
    label: 'Warner Bros. Discovery',
    title: 'WBD - Dense Game HUD Navigation System',
    keywords: 'Product Strategy · UX Architecture · HUD System Design · Cross-Functional Leadership',
    hero: '/assets/posts/2025-12-09-p_wbd-4xhud/P_WB-hGOT.png',
    alt: 'Game of Thrones inspired strategy HUD hero image',
    presentationClass: 'wbd-presentation',
  },
  'smart-tv': {
    label: 'Smart TV',
    title: 'Smart TV - Re-Engaging the Multitasker',
    keywords: 'Interaction Systems · Visual-First UX · Cross-Device Experiences',
    hero: '/assets/posts/FeaturedPortfolio- photos/fp_ph_tv-samsung.png',
    alt: 'Smart TV interaction design case study preview',
    removePatterns: [
      /\n\s*<hr \/>\s*\n\s*<h1 id="smart-tv--re-engaging-the-multitasker">[\s\S]*?<\/h1>\s*<h4 id="interactive-tv-system--visual-first-ux--cross-device-experiences">[\s\S]*?<\/h4>\s*/i,
    ],
  },
  'colour-accessibility': {
    label: 'BlackBerry',
    title: 'Color and Accessibility',
    keywords: 'Dark & Light Themes · Accessibility · Design System · HUB+ Products',
    hero: '/assets/posts/2020-01-01-bp_Colour_Accessabilty_DarkLight/Light-mode-vs-dark-mode.png',
    alt: 'Dark and light theme accessibility comparison for BlackBerry HUB+',
    removeHeroFromBody: true,
    removeIds: [
      ['h1', 'color-and-accessibility'],
      ['h3', 'dark--light-themes-for-blackberry-hub'],
      ['h5', 'overview--learnings--challenges--accessibility--design-system'],
    ],
  },
  secusuite: {
    label: 'BlackBerry SecuSuite',
    title: 'Secure Communication Ecosystem',
    keywords: 'UX Architecture · Mobile UX · Desktop UX · Secure Communication',
    hero: '/assets/posts/2021-06-31-p_bb-SecuSuite/P_BB-secusuit_Illust.png',
    alt: 'BlackBerry SecuSuite secure communication illustration',
    removeHeroFromBody: true,
    removeIds: [
      ['h5', 'overview--researchd--moodboard--testing-androidios--ux-goals--ux-requirements--info-architecture---wireframes--mobile--desktop'],
    ],
  },
  'bb-brand': {
    label: 'BlackBerry',
    title: 'Brand Packaging Guidelines',
    keywords: 'Brand Marketing · Packaging Systems · Identity Standards · Print Design',
    hero: '/assets/posts/2021-06-01-p_BlackBerry_BrandMarketing/Box_Packaging_Mockup.png',
    alt: 'BlackBerry packaging guideline mockup',
    removeHeroFromBody: true,
    removeIds: [
      ['h3', 'brand-packaging-guidlines'],
      ['h5', 'packaging-identity--industry-standards'],
    ],
  },
  'design-guidelines': {
    label: 'BlackBerry Enterprise UX',
    title: 'Enterprise UX Design System',
    keywords: 'Workflow Clarity · Cross-Platform Systems · Secure Enterprise Products · Accessibility',
    hero: '/assets/posts/2021-06-29-p_bsims_web_guideline/fp_ph_bberry_bsimsportala.png',
    alt: 'Enterprise web UI design system guidelines preview',
    presentationClass: 'bsims-presentation',
  },
  'empty-data': {
    label: 'BlackBerry',
    title: 'Onboarding and Empty Data Illustrations',
    keywords: 'Illustration System · Onboarding UX · Empty States · Accessibility',
    hero: '/assets/posts/2021-01-01-b_EmptyData_Illustrations/intro.jpg',
    alt: 'BlackBerry onboarding and empty data illustrations',
    removeHeroFromBody: true,
    removeIds: [
      ['h3', 'onboarding-screens-and-empty-data-illustrations'],
      ['h5', 'overview--design-goals--challenges--accessibility--design-system'],
    ],
  },
  'labella-umbrella': {
    label: 'Labella Umbrella',
    title: 'Responsive Online Store',
    keywords: 'E-Commerce UX · Brand Storytelling · Responsive Web Design',
    hero: '/assets/posts/2016-09-27-labella-umbrella/LBU_Mockup-768x1586.jpg',
    alt: 'Labella Umbrella online store responsive mockup',
    removeHeroFromBody: true,
    removeIds: [
      ['h3', 'labella-umbrella-online-store'],
    ],
  },
  'customer-satisfaction-kiosk': {
    label: 'Compass Digital Labs',
    title: 'Customer Satisfaction Kiosk',
    keywords: 'UX Research · Service Design · Customer Feedback · Journey Mapping',
    hero: '/assets/posts/2018-05-02-customer-satisfaction-kiosk/FullSizeRender (1).jpg',
    alt: 'Customer satisfaction kiosk prototype in context',
    removeHeroFromBody: true,
  },
  wizits: {
    label: 'Wizits',
    title: 'Mobile Game Interface Design',
    keywords: 'Game UI · Character Illustration · Mobile UX · Animation',
    hero: '/assets/posts/2015-07-26-wizits/wizits_iPad_mock2.jpg',
    alt: 'Wizits mobile game interface on tablet',
    removeHeroFromBody: true,
  },
  'tjx-market': {
    label: 'TJX Companies',
    title: 'TJX Market App',
    keywords: 'Mobile App UX · Brand System · Retail Experience · Visual Design',
    hero: '/assets/posts/FeaturedPortfolio- photos/fp_ph_tjx.png',
    alt: 'TJX Market mobile app concept preview',
  },
  sharplight: {
    label: 'SharpLight',
    title: 'Beauty Spa Campaign',
    keywords: 'Brand Campaign · Print Design · Promotional Materials · Art Direction',
    hero: '/assets/posts/2015-08-15-beauty-spa-campaign-print/008-Canada_ShaprlightPostcards1024x680.jpg',
    alt: 'SharpLight beauty spa campaign postcard designs',
    removeHeroFromBody: true,
    removeIds: [
      ['h3', 'beauty-spa-campaign'],
      ['h4', 'designed-for-sharplight'],
    ],
  },
  bwin: {
    label: 'Bwin',
    title: 'Festive Game Promotion',
    keywords: 'Game Promotion · Campaign Design · Localization · Art Direction',
    hero: '/assets/posts/FeaturedPortfolio- photos/fp_ph_bwin.png',
    alt: 'Bwin festive game promotion preview',
  },
  'power-center': {
    label: 'BlackBerry',
    title: 'Power Center App',
    keywords: 'Interaction Design · Information Architecture · Mobile UX · Battery Insights',
    hero: '/assets/posts/2021-06-31-p_bb-power_centre/bb-pc_mobile_mock.gif',
    alt: 'BlackBerry Power Center mobile app interaction mockup',
    removeHeroFromBody: true,
    removeIds: [
      ['h3', 'blackberry-power-center-app'],
      ['h5', 'overview--goals--ixd--landing--vid'],
    ],
  },
  'Interior-Illustrations': {
    label: 'Marks Media Studio',
    title: 'Interior Illustrations',
    keywords: '3D Illustration · Interior Design · Spatial Rendering',
    hero: '/assets/posts/2021-06-28-p_Interior-Illustrations/Image3-kitchen.webp',
    alt: 'Interior kitchen illustration and rendering',
    removeHeroFromBody: true,
    removeIds: [
      ['h3', 'interior-illustrations'],
    ],
    removePatterns: [
      /\n\s*<hr \/>\s*\n\s*(?=<div class="flex-container">)/i,
    ],
  },
  '3d-exhibition': {
    label: 'Barzilai Design',
    title: '3D Exhibition Design',
    keywords: 'Exhibition Design · 3D Modeling · Environmental Graphics',
    hero: '/assets/posts/2012-03-18-outsmart-3gsm-exhibition/Outsmart@3GSM_005.jpg',
    alt: '3D exhibition booth design for Outsmart at 3GSM',
    removeHeroFromBody: true,
  },
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function addBodyClass(html) {
  return html.replace(/<body([^>]*)>/i, (match, attrs) => {
    const classMatch = attrs.match(/\sclass="([^"]*)"/i);

    if (!classMatch) {
      return `<body${attrs} class="portfolio-case-study-page">`;
    }

    const classes = classMatch[1].split(/\s+/).filter(Boolean);
    if (!classes.includes('portfolio-case-study-page')) {
      classes.push('portfolio-case-study-page');
    }

    return match.replace(classMatch[0], ` class="${classes.join(' ')}"`);
  });
}

function renderSiteHeader() {
  return `        <!-- box header -->
        <header class="box-header case-study-site-header">
            <div class="box-logo">
                <a href="/" class="page-logo"><img src="/assets/img/logo-light.svg" width="230" alt="Logo"></a>
                <a href="/" class="menu-logo"><img src="/assets/img/logo-dark.svg" width="150" alt="Logo"></a>
            </div>
            <nav class="case-study-header-breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span class="case-study-header-breadcrumb__separator" aria-hidden="true">/</span>
                <a href="/portfolio">Portfolio</a>
            </nav>
            <button class="case-study-search-trigger" type="button" aria-label="Search portfolio">
                <span class="case-study-search-icon" aria-hidden="true"></span>
                <span class="case-study-search-text">Search portfolio</span>
            </button>
            <!-- box-nav -->
            <a class="box-primary-nav-trigger" href="#0">
                <span class="box-menu-text">Menu</span><span class="box-menu-icon"></span>
            </a>
            <!-- box-primary-nav-trigger -->
        </header>
        <!-- end box header -->`;
}

function replaceSiteHeader(html) {
  const headerPattern = /        <!-- box header -->[\s\S]*?        <!-- end box header -->/;
  if (!headerPattern.test(html)) {
    throw new Error('Could not find site header block');
  }
  return html.replace(headerPattern, renderSiteHeader());
}

function removeTopBar(html) {
  return html.replace(/\n\s*<!-- top-bar -->[\s\S]*?<!-- end top-bar -->\s*/g, '\n\n');
}

function removeExistingCaseStudyTop(html) {
  const managedBlock = new RegExp(
    `\\n\\s*${escapeRegExp(START_MARKER)}[\\s\\S]*?${escapeRegExp(END_MARKER)}\\s*`,
    'g'
  );
  return html.replace(managedBlock, '\n\n');
}

function renderCaseStudyTop(detail) {
  return `${START_MARKER}
<section class="case-study-top" aria-label="Case study introduction">
    <div class="case-study-top__inner">
        <div class="case-study-top__separator" aria-hidden="true"></div>
        <header class="case-study-intro">
            <p class="case-study-intro__label">${escapeHtml(detail.label)}</p>
            <h1 class="case-study-intro__title">${escapeHtml(detail.title)}</h1>
            <p class="case-study-intro__keywords">${escapeHtml(detail.keywords)}</p>
            <figure class="case-study-intro__hero">
                <img src="${escapeHtml(detail.hero)}" alt="${escapeHtml(detail.alt)}" loading="eager" fetchpriority="high" decoding="async">
            </figure>
        </header>
    </div>
</section>
${END_MARKER}`;
}

function insertCaseStudyTop(html, renderedTop) {
  if (!html.includes('<!-- main-container -->')) {
    throw new Error('Could not find main-container marker');
  }
  return html.replace(/\n\s*<!-- main-container -->/, `\n\n${renderedTop}\n\n<!-- main-container -->`);
}

function addPortfolioSearchScript(html) {
  const scriptTag = `<script src="/assets/js/portfolio-search.js?v=${ASSET_VERSION}"></script>`;
  if (html.includes(scriptTag)) {
    return html;
  }

  if (!html.includes('<script src="/assets/js/custom.js"></script>')) {
    throw new Error('Could not find custom.js script tag');
  }

  html = html.replace(/\n<script src="\/assets\/js\/portfolio-search\.js(?:\?[^"]*)?"><\/script>/g, '');

  return html.replace(
    '<script src="/assets/js/custom.js"></script>',
    `<script src="/assets/js/custom.js"></script>\n${scriptTag}`
  );
}

function addCaseStudyCacheMeta(html) {
  const marker = '<meta name="viewport" content="width=device-width, initial-scale=1">';
  const metaBlock = [
    marker,
    '    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">',
    '    <meta http-equiv="Pragma" content="no-cache">',
    '    <meta http-equiv="Expires" content="0">',
  ].join('\n');

  html = html.replace(/\n\s*<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">/g, '');
  html = html.replace(/\n\s*<meta http-equiv="Pragma" content="no-cache">/g, '');
  html = html.replace(/\n\s*<meta http-equiv="Expires" content="0">/g, '');

  if (!html.includes(marker)) {
    throw new Error('Could not find viewport meta tag');
  }

  return html.replace(marker, metaBlock);
}

function versionSharedAssets(html) {
  return html.replace(
    /<link href="\/assets\/css\/style\.css(?:\?[^"]*)?" rel="stylesheet">/g,
    `<link href="/assets/css/style.css?v=${ASSET_VERSION}" rel="stylesheet">`
  );
}

function stripTrailingWhitespace(html) {
  return html.replace(/[ \t]+$/gm, '');
}

function removeElementById(html, tagName, id) {
  const pattern = new RegExp(
    `\\n?\\s*<${tagName}\\b[^>]*\\bid="${escapeRegExp(id)}"[^>]*>[\\s\\S]*?<\\/${tagName}>\\s*`,
    'i'
  );
  return html.replace(pattern, '\n');
}

function removeFirstImageWithSrc(html, src) {
  const imagePattern = new RegExp(
    `\\n?\\s*<p>\\s*(?:<a href="#">\\s*)?<img\\b[^>]*\\bsrc="${escapeRegExp(src)}"[^>]*\\/?>\\s*(?:<\\/a>\\s*)?(?:<br\\s*\\/?>\\s*)*<\\/p>\\s*`,
    'i'
  );
  const contentStart = html.indexOf('<div class="col-md-9">');
  if (contentStart === -1) {
    return html.replace(imagePattern, '\n');
  }

  const openingWindowEnd = Math.min(html.length, contentStart + 3500);
  const before = html.slice(0, contentStart);
  const openingWindow = html.slice(contentStart, openingWindowEnd);
  const after = html.slice(openingWindowEnd);
  const updatedOpeningWindow = openingWindow.replace(imagePattern, '\n');

  return `${before}${updatedOpeningWindow}${after}`;
}

function removeCaseHeroIntroBeforePresentation(html, presentationClass) {
  const pattern = new RegExp(
    `(<section class="case-hero case-layout-full">)([\\s\\S]*?)(?=\\n\\s*<section class="${escapeRegExp(presentationClass)}\\b)`,
    'i'
  );

  const match = html.match(pattern);
  if (!match) {
    throw new Error(`Could not remove intro before ${presentationClass}`);
  }

  if (!match[2].trim()) {
    return html;
  }

  return html.replace(pattern, '$1\n');
}

function removeCategorySidebar(html) {
  return html.replace(
    /\n\s*<div class="col-md-3">\s*<ul class="cat-ul">[\s\S]*?<\/ul>\s*<\/div>\s*(?=\n<\/div>\s*<!-- end main-container -->)/g,
    '\n'
  );
}

function cleanOpeningWhitespace(html) {
  let next = html;
  for (let index = 0; index < 4; index += 1) {
    next = next.replace(
      /(<div class="col-md-9">\s*)((?:<p>\s*<br\s*\/?>\s*<\/p>\s*|<hr\s*\/>\s*)+)/i,
      '$1'
    );
  }
  return next;
}

function stripMovedOpeningContent(html, detail) {
  let next = html;

  if (detail.presentationClass) {
    next = removeCaseHeroIntroBeforePresentation(next, detail.presentationClass);
  }

  if (detail.removeIds) {
    for (const [tagName, id] of detail.removeIds) {
      next = removeElementById(next, tagName, id);
    }
  }

  if (detail.removeHeroFromBody) {
    next = removeFirstImageWithSrc(next, detail.hero);
  }

  if (detail.removePatterns) {
    for (const pattern of detail.removePatterns) {
      next = next.replace(pattern, '\n');
    }
  }

  next = removeCategorySidebar(next);
  next = cleanOpeningWhitespace(next);

  return next;
}

projects.forEach((project) => {
  const detail = detailsBySlug[project.slug];
  if (!detail) {
    throw new Error(`Missing case-study top details for ${project.slug}`);
  }

  const filePath = path.join(publishedDir, project.file);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing published case-study file for ${project.slug}: ${filePath}`);
  }

  const original = fs.readFileSync(filePath, 'utf8');
  const renderedTop = renderCaseStudyTop(detail);

  let updated = original;
  updated = addBodyClass(updated);
  updated = addCaseStudyCacheMeta(updated);
  updated = replaceSiteHeader(updated);
  updated = removeTopBar(updated);
  updated = removeExistingCaseStudyTop(updated);
  updated = insertCaseStudyTop(updated, renderedTop);
  updated = stripMovedOpeningContent(updated, detail);
  updated = versionSharedAssets(updated);
  updated = addPortfolioSearchScript(updated);
  updated = stripTrailingWhitespace(updated);

  if (updated === original) {
    console.log(`No changes needed: ${project.file}`);
    return;
  }

  fs.writeFileSync(filePath, updated);
  console.log(`Updated: ${project.file}`);
});
