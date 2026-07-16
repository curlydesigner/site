(function () {
    'use strict';

    var localHosts = ['localhost', '127.0.0.1', '::1', '0.0.0.0'];
    if (localHosts.indexOf(window.location.hostname) === -1) return;

    var draftCaseStudies = window.localDraftPortfolioItems || [];
    if (!draftCaseStudies.length) return;

    function normalizeSlug(href) {
        return (href || '')
            .replace(/^https?:\/\/[^/]+/, '')
            .replace(/^\//, '')
            .replace(/\/$/, '')
            .replace(/\.html$/, '')
            .split('/')
            .pop();
    }

    function findCardBySlug(container, slug) {
        var links = Array.prototype.slice.call(container.querySelectorAll('.portfolio_item'));

        for (var i = 0; i < links.length; i += 1) {
            if (normalizeSlug(links[i].getAttribute('href')) === slug) {
                return links[i].closest('[class*="col-"]');
            }
        }

        return null;
    }

    function createCard(study) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = [
            '<div class="col-md-3 col-sm-6" data-local-draft="true" data-local-tags="' + study.tags.join(' ') + '">',
            '    <a href="' + study.href + '" class="portfolio_item">',
            '        <img src="' + study.image + '" alt="' + study.imageAlt + '" class="img-responsive" />',
            '        <div class="portfolio_item_hover">',
            '            <div class="portfolio-border clearfix">',
            '                <div class="item_info">',
            '                    <span>' + study.title + '</span>',
            '                    <em>' + study.meta.join(' / ') + '</em>',
            '                </div>',
            '            </div>',
            '        </div>',
            '    </a>',
            '</div>'
        ].join('\n');

        return wrapper.firstElementChild;
    }

    function insertStudy(container, study) {
        if (findCardBySlug(container, study.slug)) return;

        var node = createCard(study);
        var wbdCard = findCardBySlug(container, 'wbd-hud');

        if (wbdCard && study.insert === 'before-wbd') {
            container.insertBefore(node, wbdCard);
            return;
        }

        if (wbdCard && study.insert === 'after-wbd') {
            container.insertBefore(node, wbdCard.nextSibling);
            return;
        }

        container.insertBefore(node, container.firstElementChild);
    }

    Array.prototype.slice.call(document.querySelectorAll('.portfolio_container')).forEach(function (container) {
        draftCaseStudies.forEach(function (study) {
            insertStudy(container, study);
        });
    });
})();
