(function () {
    var triggers = Array.prototype.slice.call(document.querySelectorAll('.case-study-search-trigger'));
    if (!triggers.length) return;

    var projects = [];
    var overlay;
    var input;
    var results;
    var emptyState;
    var activeTrigger;

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function createOverlay() {
        overlay = document.createElement('div');
        overlay.className = 'portfolio-search-overlay';
        overlay.hidden = true;
        overlay.innerHTML = [
            '<div class="portfolio-search-panel" role="dialog" aria-modal="true" aria-labelledby="portfolio-search-title">',
            '    <div class="portfolio-search-panel__header">',
            '        <h2 class="portfolio-search-panel__title" id="portfolio-search-title">Search portfolio</h2>',
            '        <button class="portfolio-search-close" type="button" aria-label="Close search"><span aria-hidden="true">&times;</span><span class="portfolio-search-close-text">Close search</span></button>',
            '    </div>',
            '    <input class="portfolio-search-input" type="search" autocomplete="off" placeholder="Search case studies" aria-label="Search portfolio case studies">',
            '    <div class="portfolio-search-results" role="list"></div>',
            '    <p class="portfolio-search-empty" hidden>No matching case studies.</p>',
            '</div>'
        ].join('');

        document.body.appendChild(overlay);
        input = overlay.querySelector('.portfolio-search-input');
        results = overlay.querySelector('.portfolio-search-results');
        emptyState = overlay.querySelector('.portfolio-search-empty');

        overlay.querySelector('.portfolio-search-close').addEventListener('click', closeSearch);
        overlay.addEventListener('click', function (event) {
            if (event.target === overlay) {
                closeSearch();
            }
        });
        input.addEventListener('input', function () {
            renderResults(input.value);
        });
    }

    function projectMatches(project, query) {
        if (!query) return true;
        var haystack = [
            project.title,
            project.category,
            project.description
        ].join(' ').toLowerCase();
        return haystack.indexOf(query.toLowerCase()) !== -1;
    }

    function renderResults(query) {
        var matches = projects.filter(function (project) {
            return projectMatches(project, query.trim());
        });

        results.innerHTML = matches.map(function (project) {
            return [
                '<a class="portfolio-search-result" role="listitem" href="', escapeHtml(project.url), '">',
                '    <span class="portfolio-search-result__category">', escapeHtml(project.category), '</span>',
                '    <span class="portfolio-search-result__title">', escapeHtml(project.title), '</span>',
                '</a>'
            ].join('');
        }).join('');

        emptyState.hidden = matches.length !== 0;
    }

    function openSearch(trigger) {
        activeTrigger = trigger;
        if (!overlay) {
            createOverlay();
        }

        overlay.hidden = false;
        document.body.classList.add('portfolio-search-open');
        renderResults(input.value);
        window.setTimeout(function () {
            input.focus();
            input.select();
        }, 0);
    }

    function closeSearch() {
        if (!overlay || overlay.hidden) return;
        overlay.hidden = true;
        document.body.classList.remove('portfolio-search-open');
        if (activeTrigger) {
            activeTrigger.focus();
        }
    }

    function loadProjects() {
        return fetch('/assets/data/portfolio-projects.json')
            .then(function (response) {
                if (!response.ok) throw new Error('Portfolio search data unavailable');
                return response.json();
            })
            .then(function (data) {
                projects = data;
            })
            .catch(function () {
                projects = [];
            });
    }

    triggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            openSearch(trigger);
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeSearch();
        }
    });

    loadProjects();
})();
