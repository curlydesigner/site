(function () {
    'use strict';

    var overlay;
    var frame;
    var closeButton;
    var opener;
    var originUrl;
    var overlayDepth = 0;
    var backgroundState = [];
    var isClosing = false;

    function setBackgroundInert(isInert) {
        if (isInert) {
            backgroundState = [];
            Array.prototype.forEach.call(document.body.children, function (child) {
                if (child === overlay || child.tagName === 'SCRIPT') return;
                backgroundState.push({
                    element: child,
                    ariaHidden: child.getAttribute('aria-hidden'),
                    hadInert: child.hasAttribute('inert')
                });
                child.setAttribute('inert', '');
                child.setAttribute('aria-hidden', 'true');
            });
            return;
        }

        backgroundState.forEach(function (state) {
            if (!state.hadInert) state.element.removeAttribute('inert');
            if (state.ariaHidden === null) {
                state.element.removeAttribute('aria-hidden');
            } else {
                state.element.setAttribute('aria-hidden', state.ariaHidden);
            }
        });
        backgroundState = [];
    }

    function createOverlay() {
        overlay = document.createElement('div');
        overlay.className = 'case-study-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-labelledby', 'case-study-overlay-title');
        overlay.setAttribute('aria-hidden', 'true');
        overlay.innerHTML = [
            '<button class="case-study-overlay__backdrop" type="button" aria-label="Close case study"></button>',
            '<section class="case-study-overlay__card">',
            '  <div class="case-study-overlay__toolbar">',
            '    <div class="case-study-overlay__heading">',
            '      <span class="case-study-overlay__eyebrow">Portfolio case study</span>',
            '      <h2 id="case-study-overlay-title">Project details</h2>',
            '    </div>',
            '    <button class="case-study-overlay__close" type="button" aria-label="Close case study">',
            '      <span aria-hidden="true"></span>',
            '    </button>',
            '  </div>',
            '  <iframe class="case-study-overlay__frame" title="Portfolio case study"></iframe>',
            '</section>'
        ].join('');
        document.body.appendChild(overlay);

        frame = overlay.querySelector('.case-study-overlay__frame');
        closeButton = overlay.querySelector('.case-study-overlay__close');
        overlay.querySelector('.case-study-overlay__backdrop').addEventListener('click', requestClose);
        closeButton.addEventListener('click', requestClose);
        frame.addEventListener('load', prepareCaseStudyFrame);
    }

    function projectTitle(link) {
        var title = link.querySelector(
            '.item_info span, .portfolio-project-card__title'
        );
        return title ? title.textContent.replace(/\s+/g, ' ').trim() : 'Project details';
    }

    function updateOverlayTitle(title) {
        var heading = overlay && overlay.querySelector('#case-study-overlay-title');
        if (heading && title) heading.textContent = title;
    }

    function pushProjectState(url) {
        overlayDepth += 1;
        window.history.pushState({
            caseStudyOverlay: true,
            overlayDepth: overlayDepth,
            projectUrl: url
        }, '', url);
    }

    function openOverlay(link, pushHistory) {
        if (!overlay) createOverlay();

        opener = link;
        isClosing = false;
        originUrl = window.location.pathname + window.location.search + window.location.hash;
        overlayDepth = 0;
        updateOverlayTitle(projectTitle(link));
        frame.src = link.href;
        overlay.classList.add('is-visible');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('case-study-overlay-open');
        setBackgroundInert(true);
        window.setTimeout(function () { closeButton.focus(); }, 40);

        if (pushHistory) pushProjectState(link.getAttribute('href'));
    }

    function closeOverlay(restoreFocus) {
        if (!overlay || !overlay.classList.contains('is-visible')) return;

        overlay.classList.remove('is-visible');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('case-study-overlay-open');
        setBackgroundInert(false);
        frame.src = 'about:blank';
        if (restoreFocus && opener) opener.focus();
    }

    function requestClose(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (isClosing) return;
        isClosing = true;

        closeOverlay(true);
        overlayDepth = 0;
        if (originUrl) {
            window.history.replaceState({}, '', originUrl);
        }

        window.setTimeout(function () {
            isClosing = false;
        }, 300);
    }

    function navigateOutsideViewer(url) {
        closeOverlay(false);
        isClosing = true;

        if (typeof window.curlyNavigate === 'function') {
            window.curlyNavigate(url, true);
        } else {
            window.location.replace(url);
        }
    }

    function navigateToProject(link, url) {
        updateOverlayTitle(projectTitle(link));
        overlayDepth = 1;
        window.history.replaceState({
            caseStudyOverlay: true,
            overlayDepth: 1,
            projectUrl: url.pathname + url.search + url.hash
        }, '', url.pathname + url.search + url.hash);
        frame.src = url.href;
    }

    function isProjectLink(link, url) {
        return link.classList.contains('portfolio-project-card') ||
            Boolean(link.closest('.portfolio-project-grid')) ||
            url.pathname.indexOf('/portfolio/published/') === 0 ||
            url.pathname.indexOf('/portfolio/drafts/') === 0;
    }

    function prepareCaseStudyFrame() {
        if (!frame || frame.src === 'about:blank') return;

        var frameDocument;
        try {
            frameDocument = frame.contentDocument;
        } catch (error) {
            return;
        }
        if (!frameDocument || !frameDocument.body) return;

        frameDocument.documentElement.classList.add('case-study-card-document');
        frameDocument.body.classList.add('case-study-card-embed');

        frameDocument.addEventListener('click', function (event) {
            var link = event.target.closest('a[href]');
            if (
                !link ||
                event.defaultPrevented ||
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
            ) return;

            var rawHref = link.getAttribute('href');
            if (!rawHref || rawHref.charAt(0) === '#') return;

            var url = new URL(link.href, frame.contentWindow.location.href);
            var currentUrl = new URL(frame.contentWindow.location.href);

            if (
                url.origin === currentUrl.origin &&
                url.pathname === currentUrl.pathname &&
                url.search === currentUrl.search &&
                url.hash
            ) return;

            if (isProjectLink(link, url)) {
                event.preventDefault();
                navigateToProject(link, url);
                return;
            }

            if (url.origin !== window.location.origin) {
                event.preventDefault();
                window.open(url.href, '_blank', 'noopener,noreferrer');
                return;
            }

            event.preventDefault();
            navigateOutsideViewer(url.href);
        }, true);

        frameDocument.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') requestClose(event);
        });
    }

    document.addEventListener('click', function (event) {
        var link = event.target.closest('.portfolio_item');
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
        openOverlay(link, true);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && overlay && overlay.classList.contains('is-visible')) {
            requestClose(event);
        }
    });

    window.addEventListener('popstate', function (event) {
        if (event.state && event.state.caseStudyOverlay) {
            overlayDepth = event.state.overlayDepth || 1;
            if (frame && event.state.projectUrl) {
                frame.src = new URL(event.state.projectUrl, window.location.origin).href;
            }
            return;
        }

        overlayDepth = 0;
        closeOverlay(true);
    });
})();
