(function ($) {
    'use strict';

    var PORTFOLIO_URL = '/portfolio';
    var LINKEDIN_URL = 'https://www.linkedin.com/in/curlydesigner/';
    var EMAIL_URL = 'mailto:victoria@curlydesigner.com';
    var PAGE_TRANSITION_KEY = 'curlydesigner-page-transition';
    var isPageNavigating = false;

    function ensureContactBanner() {
        if ($('#get-in-touch').length) return;

        var bannerHtml = [
            '<section class="section position-relative highlighted-section universal-contact-wrap" id="get-in-touch">',
            '    <div class="container main-container clearfix get-in-touch">',
            '        <div class="col-xs-5 col-xs-offset-1">',
            '            <img src="/assets/img/get_intouch/p_home_connect_typo.svg" class="img-responsive" alt="Let&apos;s get in touch" />',
            '        </div>',
            '        <div class="col-xs-5">',
            '            <ul class="social-ul">',
            '                <li class="box-social"><a target="_blank" rel="noopener noreferrer" href="' + LINKEDIN_URL + '" aria-label="Visit Victoria on LinkedIn"><ion-icon name="logo-linkedin"></ion-icon></a></li>',
            '                <li class="box-social"><a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/curlydesigner" aria-label="Visit Victoria on Behance"><ion-icon name="logo-behance"></ion-icon></a></li>',
            '                <li class="box-social"><a href="' + EMAIL_URL + '" aria-label="Email Victoria"><ion-icon name="mail-outline"></ion-icon></a></li>',
            '            </ul>',
            '        </div>',
            '    </div>',
            '</section>'
        ].join('\n');

        var $footer = $('footer').first();
        if ($footer.length) {
            $footer.before(bannerHtml);
        } else {
            $('body').append(bannerHtml);
        }
    }

    function currentSection() {
        var path = window.location.pathname.toLowerCase();
        if (path === '/' || path === '/index.html') return 'home';
        if (path.indexOf('/teaching') === 0) return 'teaching';
        if (path.indexOf('/about') === 0) return 'about';
        if (
            path.indexOf('/portfolio') === 0 ||
            document.body.classList.contains('portfolio-page') ||
            document.body.classList.contains('portfolio-case-study-page')
        ) return 'portfolio';
        return '';
    }

    function markEmbeddedCaseStudy() {
        var isEmbedded = false;
        try {
            isEmbedded = window.self !== window.top &&
                window.frameElement &&
                window.frameElement.classList.contains('case-study-overlay__frame') &&
                document.body.classList.contains('portfolio-case-study-page');
        } catch (error) {
            isEmbedded = false;
        }

        if (isEmbedded) {
            document.documentElement.classList.add('case-study-card-document');
            document.body.classList.add('case-study-card-embed');
        }
        return isEmbedded;
    }

    function navLink(href, label, section, activeSection) {
        var active = section === activeSection;
        return '<a class="global-nav-link' + (active ? ' is-active' : '') + '" href="' + href + '"' +
            (active ? ' aria-current="page"' : '') + '>' + label + '</a>';
    }

    function prefersReducedMotion() {
        return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function rememberPageTransition() {
        try {
            window.sessionStorage.setItem(PAGE_TRANSITION_KEY, '1');
        } catch (error) {
            // Navigation still works when session storage is unavailable.
        }
    }

    function restoreIncomingTransition() {
        var isIncoming = false;
        try {
            isIncoming = window.sessionStorage.getItem(PAGE_TRANSITION_KEY) === '1';
            window.sessionStorage.removeItem(PAGE_TRANSITION_KEY);
        } catch (error) {
            isIncoming = false;
        }

        if (!isIncoming) return;

        var preloader = document.getElementById('preloader');
        if (preloader) preloader.style.display = 'none';
        document.body.style.overflow = 'visible';
        document.body.classList.add('site-page-is-entering');
        window.requestAnimationFrame(function () {
            window.requestAnimationFrame(function () {
                document.body.classList.remove('site-page-is-entering');
            });
        });
    }

    function navigateToPage(url, replaceCurrent) {
        var destination = new URL(url, window.location.href);
        if (destination.origin !== window.location.origin) {
            window.location.href = destination.href;
            return;
        }

        if (
            destination.pathname === window.location.pathname &&
            destination.search === window.location.search
        ) {
            if (destination.hash) {
                window.location.href = destination.href;
            } else {
                window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
            }
            return;
        }

        if (isPageNavigating) return;
        isPageNavigating = true;
        closeMobileMenu(false);
        rememberPageTransition();
        document.body.classList.add('site-page-is-leaving');

        var completeNavigation = function () {
            if (replaceCurrent) {
                window.location.replace(destination.href);
            } else {
                window.location.assign(destination.href);
            }
        };

        window.setTimeout(completeNavigation, prefersReducedMotion() ? 0 : 145);
    }

    window.curlyNavigate = navigateToPage;

    function prefetchPrimaryPages() {
        ['/', PORTFOLIO_URL, '/teaching.html', '/about.html'].forEach(function (href) {
            var link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = href;
            document.head.appendChild(link);
        });
    }

    function positionNavigationIndicator(header) {
        var nav = header.querySelector('.global-desktop-nav');
        var indicator = header.querySelector('.global-nav-indicator');
        var activeLink = header.querySelector('.global-desktop-nav .global-nav-link.is-active');
        if (!nav || !indicator || !activeLink) return;

        window.requestAnimationFrame(function () {
            indicator.style.width = activeLink.offsetWidth + 'px';
            indicator.style.transform = 'translate3d(' + activeLink.offsetLeft + 'px, 0, 0)';
            indicator.classList.add('is-ready');
        });
    }

    function closeMobileMenu(returnFocus) {
        var header = document.querySelector('.global-site-header');
        var menu = document.getElementById('global-mobile-menu');
        var trigger = document.querySelector('.global-menu-toggle');
        if (!header || !menu || !trigger) return;

        header.classList.remove('menu-is-open');
        menu.classList.remove('is-visible');
        menu.setAttribute('aria-hidden', 'true');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.setAttribute('aria-label', 'Open navigation menu');
        document.body.classList.remove('global-nav-open');
        if (returnFocus) trigger.focus();
    }

    function openMobileMenu() {
        var header = document.querySelector('.global-site-header');
        var menu = document.getElementById('global-mobile-menu');
        var trigger = document.querySelector('.global-menu-toggle');
        if (!header || !menu || !trigger) return;

        header.classList.add('menu-is-open');
        menu.classList.add('is-visible');
        menu.setAttribute('aria-hidden', 'false');
        trigger.setAttribute('aria-expanded', 'true');
        trigger.setAttribute('aria-label', 'Close navigation menu');
        document.body.classList.add('global-nav-open');
        window.setTimeout(function () {
            var firstLink = menu.querySelector('a');
            if (firstLink) firstLink.focus();
        }, 50);
    }

    function buildGlobalNavigation() {
        var header = document.querySelector('.box-header');
        if (!header) return;

        var activeSection = currentSection();
        var isNonSticky = document.body.classList.contains('portfolio-case-study-page');
        var isCaseStudy = document.body.classList.contains('portfolio-case-study-page');
        var startsDark = document.body.classList.contains('teaching-page') ||
            document.body.classList.contains('portfolio-page') ||
            document.body.classList.contains('tag-page');

        header.className = 'box-header global-site-header' +
            (isNonSticky ? ' global-site-header--nonsticky' : ' global-site-header--sticky') +
            (isCaseStudy ? ' global-site-header--case-study' : '') +
            (startsDark ? ' global-site-header--dark-start' : '');
        header.setAttribute('data-global-navigation', '');
        header.innerHTML = [
            '<a class="global-brand" href="/" aria-label="Curly Designer — Home">',
            '  <img class="global-brand-logo global-brand-logo--light" src="/assets/img/logo-light.svg" alt="">',
            '  <img class="global-brand-logo global-brand-logo--dark" src="/assets/img/logo-dark.svg" alt="">',
            '</a>',
            '<nav class="global-desktop-nav" aria-label="Primary navigation">',
            '<span class="global-nav-indicator" aria-hidden="true"></span>',
            navLink('/', 'Home', 'home', activeSection),
            navLink(PORTFOLIO_URL, 'Portfolio', 'portfolio', activeSection),
            navLink('/teaching.html', 'Design Educator', 'teaching', activeSection),
            navLink('/about.html', 'About', 'about', activeSection),
            '</nav>',
            '<div class="global-nav-actions">',
            '  <a class="global-social-link global-social-link--linkedin" href="' + LINKEDIN_URL + '" target="_blank" rel="noopener noreferrer" aria-label="Visit Victoria on LinkedIn"><ion-icon name="logo-linkedin" aria-hidden="true"></ion-icon></a>',
            '  <a class="global-social-link global-social-link--email" href="' + EMAIL_URL + '" aria-label="Email Victoria"><ion-icon name="mail-outline" aria-hidden="true"></ion-icon></a>',
            '  <button class="global-menu-toggle" type="button" aria-label="Open navigation menu" aria-controls="global-mobile-menu" aria-expanded="false"><span></span><span></span><span></span></button>',
            '</div>'
        ].join('');

        $('.box-primary-nav').closest('nav').remove();
        $('#global-mobile-menu').remove();

        var mobileMenu = document.createElement('div');
        mobileMenu.id = 'global-mobile-menu';
        mobileMenu.className = 'global-mobile-menu';
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileMenu.innerHTML = [
            '<div class="global-mobile-menu__inner">',
            '<p class="global-mobile-menu__label">Navigate</p>',
            '<nav class="global-mobile-links" aria-label="Mobile navigation">',
            navLink('/', 'Home', 'home', activeSection),
            navLink(PORTFOLIO_URL, 'Portfolio', 'portfolio', activeSection),
            navLink('/teaching.html', 'Design Educator', 'teaching', activeSection),
            navLink('/about.html', 'About', 'about', activeSection),
            '</nav>',
            '<div class="global-mobile-socials">',
            '<a href="' + LINKEDIN_URL + '" target="_blank" rel="noopener noreferrer">LinkedIn</a>',
            '<a href="' + EMAIL_URL + '">Email</a>',
            '</div>',
            '</div>'
        ].join('');
        document.body.appendChild(mobileMenu);

        var toggle = header.querySelector('.global-menu-toggle');
        toggle.addEventListener('click', function () {
            if (toggle.getAttribute('aria-expanded') === 'true') {
                closeMobileMenu(false);
            } else {
                openMobileMenu();
            }
        });

        mobileMenu.addEventListener('click', function (event) {
            if (event.target.closest('a')) closeMobileMenu(false);
        });

        document.addEventListener('click', function (event) {
            var link = event.target.closest(
                '.global-brand, .global-desktop-nav .global-nav-link, .global-mobile-links .global-nav-link'
            );
            if (
                !link ||
                event.defaultPrevented ||
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
            ) return;

            event.preventDefault();
            navigateToPage(link.href, false);
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && document.body.classList.contains('global-nav-open')) {
                closeMobileMenu(true);
            }
        });

        function updateHeaderState() {
            if (isNonSticky) return;
            header.classList.toggle('is-scrolled', window.pageYOffset > 24);
        }

        updateHeaderState();
        positionNavigationIndicator(header);
        window.addEventListener('scroll', updateHeaderState, { passive: true });
        window.addEventListener('resize', function () {
            positionNavigationIndicator(header);
        });
    }

    $(function () {
        if (markEmbeddedCaseStudy()) return;
        restoreIncomingTransition();
        buildGlobalNavigation();
        ensureContactBanner();
        prefetchPrimaryPages();
    });

    window.addEventListener('pageshow', function () {
        isPageNavigating = false;
        document.body.classList.remove('site-page-is-leaving');
    });
})(jQuery);
