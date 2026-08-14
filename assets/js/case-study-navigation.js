(function () {
    'use strict';

    var DATA_URL = '/assets/data/portfolio-projects.json';
    var HEADER_HEIGHT = 82;

    var sectionMap = {
        'wbd-hud': [
            ['overview', 'Overview'], ['research', 'Research'], ['player-journey', 'Player Journey'],
            ['ux-challenges', 'UX Challenges'], ['product-decisions', 'Product Decisions'],
            ['hud-ia', 'HUD & IA'], ['tile-map', 'Tile Map'], ['design-system', 'Design System'],
            ['accessibility', 'Accessibility'], ['impact', 'Impact'], ['contribution', 'Contribution'],
            ['reflection', 'Reflection']
        ],
        'design-guidelines': [
            ['my-role', 'My Role'], ['ecosystem', 'Ecosystem'], ['users', 'Users'],
            ['ux-audit', 'UX Audit'], ['enterprise-problem', 'Enterprise Problem'], ['findings', 'Audit Findings'],
            ['research', 'Research'], ['principles', 'Principles'], ['flow', 'Interaction Flow'],
            ['before-after', 'Before & After'], ['empty-states', 'Empty States'], ['system-model', 'System Model'],
            ['secure-workflow', 'Secure Workflow'], ['design-system', 'Design System'], ['outcomes', 'Impact']
        ],
        '3d-exhibition': [
            ['overview', 'Overview'], ['outsmart', 'Outsmart: Brand & Space'], ['visitor-journey', 'Visitor Journey'],
            ['outcome', 'Outsmart Outcome'], ['kramer', 'Kramer Overview'], ['kramer-challenge', 'Kramer Challenge'],
            ['kramer-process', 'Spatial Process'], ['kramer-visuals', 'Final Visuals']
        ],
        'colour-accessibility': [
            ['case-content-start', 'Overview'],
            ['colour-research', 'Research & Analysis', { selector: '.info-card h3', text: 'Research & Analysis', closest: '.info-card' }],
            ['colour-system-overview', 'System Overview', { selector: '.info-card h3', text: 'System Design / Project Overview', closest: '.info-card' }],
            ['colour-accessibility-challenges', 'Accessibility Challenges', { selector: '.info-card h3', text: 'Accessibility & Visual Challenges', closest: '.info-card' }],
            ['colour-impact', 'Impact & Insights', { selector: '.info-card h3', text: 'Design Impact & Insights', closest: '.info-card' }],
            ['accessibility-and-colour-exploration', 'Colour Exploration'], ['design-system-breakdown', 'Design System'],
            ['illustrations', 'Illustrations'], ['summary', 'Summary']
        ],
        'empty-data': [
            ['case-content-start', 'Overview'], ['my-role', 'My Role'], ['design-goals', 'Design Goals'],
            ['sketches', 'Sketches'], ['exploration', 'Exploration'], ['chosen-style', 'Chosen Style'],
            ['onboarding-screens-layout', 'Onboarding Screens'], ['consistentcy-recommendations', 'Recommendations'],
            ['blackberry-productivity-tab', 'Productivity Tab'], ['blackberry-keyboard', 'Keyboard']
        ],
        'customer-satisfaction-kiosk': [
            ['overview', 'Overview'], ['persona-and-customer-feedback-gathering', 'Research & Persona'],
            ['challenges', 'Challenges'], ['journey-map', 'Journey Map'],
            ['low--mid-fidelity-wireframes--design-proposal', 'Design Proposal']
        ],
        'power-center': [
            ['overview', 'Overview'], ['before', 'Before'], ['ux-goals', 'UX Goals'],
            ['information-architecture', 'Information Architecture'],
            ['ixd---user-flow-proposal-for-blackberry-power-center', 'User Flow'],
            ['ux---wireframes-proposal-for-blackberry-power-center', 'Wireframes'],
            ['landing-page-requirments-description', 'Landing Page'], ['vid-spec---diolog-messages', 'Dialog Messages'],
            ['after', 'After']
        ],
        'labella-umbrella': [
            ['case-content-start', 'Overview'], ['simple-but-not-simplest', 'Design Direction'],
            ['typography-and-backgrounds', 'Typography & Backgrounds'], ['challenges', 'Challenges'],
            ['labella-interface-screens', 'Interface Screens', { selector: 'img[src*="Screen-Shot-2016"]', closest: 'p' }]
        ],
        'Interior-Illustrations': [
            ['case-content-start', 'Overview'], ['my-role', 'My Role'], ['industry', 'Industry'],
            ['interior-renderings', 'Interior Renderings', { selector: 'img[src*="image5-room"]', closest: 'p' }],
            ['design-overview', 'Design Overview'], ['design-challenges', 'Design Challenges']
        ],
        'bb-brand': [
            ['case-content-start', 'Overview'],
            ['brand-identity-standards', 'Identity Standards', { selector: 'p', text: 'BlackBerry logo Format' }],
            ['packaging-layout', 'Packaging Layout'],
            ['brand-packaging-examples', 'Packaging Examples', { selector: 'img[src*="BlackBerry_BrandPackaging1"]', closest: 'p' }],
            ['brand-marketing-work', 'Marketing Materials', { selector: 'p', text: 'Other examples include Posters' }]
        ],
        'smart-tv': [
            ['case-content-start', 'Overview'], ['smart-tv-presentation-title', 'Presentation'],
            ['smart-tv-role', 'Role & Scope', { selector: '.info-card h3', text: 'Role & Scope', closest: '.info-card' }],
            ['smart-tv-context', 'Industry Context', { selector: '.info-card h3', text: 'Industry Context', closest: '.info-card' }],
            ['smart-tv-project-overview', 'Project Overview', { selector: '.info-card h3', text: 'Project Overview', closest: '.info-card' }],
            ['smart-tv-focus-areas', 'Design Focus Areas', { selector: '.info-card h3', text: 'What I Explored', closest: '.info-card' }],
            ['smart-tv-screens', 'Concept Screens', { selector: '.smart-tv-source-images' }]
        ],
        'wizits': [
            ['case-content-start', 'Overview'],
            ['wizits-animation', 'Social Animation', { selector: 'p', text: 'Animated Ad for Social Media' }],
            ['loader-screen-while-users-launch-the-game-app-on-their-mobile-device', 'Loader Screen'],
            ['typography-and-icons', 'Typography & Icons'],
            ['different-symbols-were-designed-individually-for-each-game-slot-ilustrations-and-typography-were-considered-based-on-the-game-style-theme', 'Game Symbols'],
            ['each-symbol-designed-for-a-different-game-environment-that-users-can-play', 'Game Environments'],
            ['wizits-mobile-ui', 'Mobile UI', { selector: 'img[src*="Settings_iPhone5"]', closest: 'p' }]
        ],
        'tjx-market': [
            ['case-content-start', 'Overview'], ['how-to-combine-the-different-brands-of-tjx-into-one-app-', 'Multi-brand Challenge'],
            ['tjx-brand-system', 'Brand System', { selector: 'img[src*="TJX_Brand"]' }],
            ['tjx-market-work', 'App Concept', { selector: 'img[src*="mtMRKT_AppMockup"]' }]
        ],
        'sharplight': [
            ['case-content-start', 'Overview'],
            ['sharplight-role', 'Role & Collaboration', { selector: 'p', text: 'I was producing and designing' }],
            ['sharplight-postcards', 'Postcards', { selector: 'img[src*="SharplightPostcards"]', closest: 'p' }],
            ['sharplight-posters', 'Posters', { selector: 'img[src*="SharpLightPoster"]', closest: 'p' }],
            ['sharplight-brochures', 'Brochures & Leaflets', { selector: 'img[src*="Sharplight_allLeaflets"]', closest: 'p' }],
            ['sharplight-exhibitions', 'Exhibition Graphics', { selector: 'img[src*="ROLLUPS"]', closest: 'p' }]
        ],
        'bwin': [
            ['case-content-start', 'Overview'],
            ['bwin-creative-brief', 'Creative Brief', { selector: 'p', text: 'I was executing briefs' }],
            ['bwin-inclusive-concept', 'Inclusive Winter Concept', { selector: 'p', text: 'One of the challenges I faced' }],
            ['bwin-concept-sketch', 'Concept Sketch', { selector: 'img[src*="sketch2"]', closest: 'p' }],
            ['bwin-campaign-work', 'Festive Giveaway', { selector: 'img[src*="tablet_mockup_1"]', closest: 'p' }],
            ['bwin-christmas-promotion', 'Christmas Promotion', { selector: 'p', text: 'Another request was to design' }],
            ['bwin-testimonial', 'Testimonial', { selector: 'h5', text: 'Read the creative team lead' }]
        ]
    };

    function currentSlug() {
        var path = decodeURIComponent(window.location.pathname).replace(/\/$/, '');
        var name = path.split('/').pop() || '';
        return name.replace(/\.html$/i, '');
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function markPortfolioActive() {
        var links = document.querySelectorAll('.box-primary-nav a[href]');
        Array.prototype.forEach.call(links, function (link) {
            var href = (link.getAttribute('href') || '').replace(/\/$/, '');
            if (href === '/portfolio' || href === '/portfolio.html') {
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    function renderProjectNavigation(projects, currentIndex) {
        var current = projects[currentIndex];
        var previous = projects[(currentIndex - 1 + projects.length) % projects.length];
        var next = projects[(currentIndex + 1) % projects.length];
        var introLabel = document.querySelector('.case-study-intro__label');
        var introTitle = document.querySelector('.case-study-intro__title');
        var projectLabel = introLabel && introTitle
            ? introLabel.textContent.trim() + ' · ' + introTitle.textContent.trim()
            : current.title;

        var cards = projects.map(function (project, index) {
            var isCurrent = index === currentIndex;
            return [
                '<a class="case-project-card' + (isCurrent ? ' is-current' : '') + '" href="' + escapeHtml(project.url) + '"',
                ' data-project-index="' + index + '"' + (isCurrent ? ' aria-current="page"' : '') + '>',
                '<span class="case-project-card__image"><img src="' + escapeHtml(project.image) + '" alt="" loading="lazy"></span>',
                '<span class="case-project-card__copy">',
                '<span class="case-project-card__category">' + escapeHtml(project.category) + '</span>',
                '<span class="case-project-card__title">' + escapeHtml(project.title) + '</span>',
                '</span></a>'
            ].join('');
        }).join('');

        var nav = document.createElement('div');
        nav.className = 'case-project-nav';
        nav.innerHTML = [
            '<nav class="case-project-nav__bar" aria-label="Project navigation">',
            '<a class="case-project-arrow case-project-arrow--previous" href="' + escapeHtml(previous.url) + '" aria-label="Previous project: ' + escapeHtml(previous.title) + '"><span aria-hidden="true">&larr;</span></a>',
            '<button class="case-project-switcher-toggle" type="button" aria-expanded="false" aria-controls="case-project-switcher" aria-label="Open all portfolio projects">',
            '<span class="case-project-grid-icon" aria-hidden="true"><i></i><i></i><i></i><i></i></span>',
            '<span class="case-project-nav__current">' + escapeHtml(projectLabel) + '</span>',
            '<span class="case-project-toggle-chevron" aria-hidden="true"></span>',
            '</button>',
            '<a class="case-project-arrow case-project-arrow--next" href="' + escapeHtml(next.url) + '" aria-label="Next project: ' + escapeHtml(next.title) + '"><span aria-hidden="true">&rarr;</span></a>',
            '</nav>',
            '<div class="case-project-switcher" id="case-project-switcher" hidden>',
            '<div class="case-project-switcher__viewport">',
            '<div class="case-project-switcher__inner" role="list" aria-label="All portfolio projects">' + cards + '</div>',
            '</div>',
            '</div>'
        ].join('');

        var caseTop = document.querySelector('.case-study-top');
        if (!caseTop) return;
        caseTop.parentNode.insertBefore(nav, caseTop);

        var toggle = nav.querySelector('.case-project-switcher-toggle');
        var switcher = nav.querySelector('.case-project-switcher');
        var rail = nav.querySelector('.case-project-switcher__inner');
        var currentCard = nav.querySelector('.case-project-card.is-current');
        var previousArrow = nav.querySelector('.case-project-arrow--previous');
        var nextArrow = nav.querySelector('.case-project-arrow--next');

        function closeSwitcher(returnFocus) {
            switcher.hidden = true;
            nav.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Open all portfolio projects');
            previousArrow.setAttribute('aria-label', 'Previous project: ' + previous.title);
            nextArrow.setAttribute('aria-label', 'Next project: ' + next.title);
            if (returnFocus) toggle.focus();
        }

        toggle.addEventListener('click', function () {
            var willOpen = switcher.hidden;
            switcher.hidden = !willOpen;
            nav.classList.toggle('is-open', willOpen);
            toggle.setAttribute('aria-expanded', String(willOpen));
            toggle.setAttribute('aria-label', willOpen ? 'Close all portfolio projects' : 'Open all portfolio projects');
            previousArrow.setAttribute('aria-label', willOpen ? 'Scroll projects left' : 'Previous project: ' + previous.title);
            nextArrow.setAttribute('aria-label', willOpen ? 'Scroll projects right' : 'Next project: ' + next.title);
            if (willOpen && currentCard) {
                window.setTimeout(function () {
                    rail.scrollLeft = currentCard.offsetLeft - (rail.clientWidth - currentCard.offsetWidth) / 2;
                }, 20);
            }
        });

        function handleProjectArrow(event, direction) {
            if (!nav.classList.contains('is-open')) return;
            event.preventDefault();
            var card = rail.querySelector('.case-project-card');
            var step = card ? (card.getBoundingClientRect().width + 14) * 2 : rail.clientWidth * 0.72;
            rail.scrollBy({
                left: direction * step,
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
            });
        }

        previousArrow.addEventListener('click', function (event) { handleProjectArrow(event, -1); });
        nextArrow.addEventListener('click', function (event) { handleProjectArrow(event, 1); });

        rail.addEventListener('click', function (event) {
            if (event.target.closest('.case-project-card')) closeSwitcher(false);
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && !switcher.hidden) closeSwitcher(true);
        });
    }

    function assignSyntheticTargets(slug, content, configured) {
        if (!document.getElementById('case-content-start')) {
            var contentStart = content.querySelector(':scope > section, :scope > p, :scope > h2, :scope > h3, :scope > h4, :scope > h5, :scope > div') || content;
            contentStart.id = 'case-content-start';
        }

        configured.forEach(function (item) {
            var id = item[0];
            var rule = item[2];
            if (!rule || document.getElementById(id)) return;

            var candidates = Array.prototype.slice.call(content.querySelectorAll(rule.selector));
            var target = rule.text
                ? candidates.find(function (element) {
                    return element.textContent.replace(/\s+/g, ' ').trim().indexOf(rule.text) !== -1;
                })
                : candidates[0];

            if (target && rule.closest) target = target.closest(rule.closest);
            if (target) target.id = id;
        });
    }

    function renderSectionNavigation(slug) {
        var container = document.querySelector('.portfolio-post');
        var content = container && container.querySelector(':scope > .col-md-9, :scope > .case-study-shell');
        if (!container || !content) return;

        Array.prototype.forEach.call(container.querySelectorAll('.case-sticky-nav-wrap'), function (oldNav) {
            oldNav.remove();
        });

        var configured = sectionMap[slug] || [];
        assignSyntheticTargets(slug, content, configured);
        var sections = configured.filter(function (item) { return document.getElementById(item[0]); });
        if (!sections.length) sections = [['case-content-start', 'Overview']];

        var aside = document.createElement('aside');
        aside.className = 'case-section-nav';
        aside.setAttribute('aria-label', 'Case study sections');
        aside.innerHTML = [
            '<button class="case-section-nav__toggle" type="button" aria-expanded="false" aria-controls="case-section-nav-list">',
            '<span>On this page</span><span class="case-section-nav__toggle-current">' + escapeHtml(sections[0][1]) + '</span>',
            '</button>',
            '<div class="case-section-nav__heading" aria-hidden="true">On this page</div>',
            '<nav class="case-section-nav__list" id="case-section-nav-list">',
            sections.map(function (item, index) {
                return '<a href="#' + escapeHtml(item[0]) + '"' + (index === 0 ? ' class="is-active" aria-current="location"' : '') + '><span class="case-section-nav__dot" aria-hidden="true"></span><span>' + escapeHtml(item[1]) + '</span></a>';
            }).join(''),
            '</nav>'
        ].join('');
        container.insertBefore(aside, content);
        content.classList.add('case-study-content-column');

        var toggle = aside.querySelector('.case-section-nav__toggle');
        var currentText = aside.querySelector('.case-section-nav__toggle-current');
        var links = Array.prototype.slice.call(aside.querySelectorAll('.case-section-nav__list a'));

        toggle.addEventListener('click', function () {
            var open = aside.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(open));
        });

        links.forEach(function (link) {
            link.addEventListener('click', function (event) {
                var target = document.getElementById(link.getAttribute('href').slice(1));
                if (target) {
                    event.preventDefault();
                    window.history.replaceState(null, '', link.getAttribute('href'));
                    setActive(target.id);
                }
                aside.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                if (target) {
                    window.requestAnimationFrame(function () {
                        target.scrollIntoView({
                            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                            block: 'start'
                        });
                    });
                }
            });
        });

        function setActive(id) {
            links.forEach(function (link) {
                var active = link.getAttribute('href') === '#' + id;
                link.classList.toggle('is-active', active);
                if (active) {
                    link.setAttribute('aria-current', 'location');
                    currentText.textContent = link.textContent.trim();
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        }

        var trackedSections = sections.map(function (item) { return document.getElementById(item[0]); });
        var scrollTicking = false;

        function updateActiveSection() {
            var offset = window.matchMedia('(max-width: 767px)').matches
                ? aside.getBoundingClientRect().top + aside.offsetHeight + 16
                : HEADER_HEIGHT + 92;
            var active = trackedSections[0];
            aside.classList.toggle('is-past-content', content.getBoundingClientRect().bottom <= offset + 24);
            trackedSections.forEach(function (section) {
                if (section.getBoundingClientRect().top <= offset) active = section;
            });
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
                active = trackedSections[trackedSections.length - 1];
            }
            if (active) setActive(active.id);
            scrollTicking = false;
        }

        window.addEventListener('scroll', function () {
            if (scrollTicking) return;
            scrollTicking = true;
            window.requestAnimationFrame(updateActiveSection);
        }, { passive: true });
        window.addEventListener('resize', updateActiveSection);
        updateActiveSection();
    }

    function init() {
        var slug = currentSlug();
        markPortfolioActive();
        renderSectionNavigation(slug);

        fetch(DATA_URL)
            .then(function (response) {
                if (!response.ok) throw new Error('Could not load portfolio projects');
                return response.json();
            })
            .then(function (projects) {
                var index = projects.findIndex(function (project) { return project.slug === slug; });
                if (index !== -1) renderProjectNavigation(projects, index);
            })
            .catch(function () {
                /* The page remains fully usable if project data is unavailable. */
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}());
