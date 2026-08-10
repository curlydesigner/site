(function () {
    'use strict';

    var hero = document.querySelector('.portfolio-hero');
    var map = document.querySelector('.portfolio-system-map');
    if (!hero || !map) return;

    var principles = Array.prototype.slice.call(map.querySelectorAll('[data-principle]'));
    var activePrinciple = '';

    function setActive(name) {
        activePrinciple = name || '';

        if (activePrinciple) {
            map.setAttribute('data-active-principle', activePrinciple);
        } else {
            map.removeAttribute('data-active-principle');
        }

        principles.forEach(function (principle) {
            var isActive = principle.getAttribute('data-principle') === activePrinciple;
            principle.classList.toggle('is-active', isActive);
            principle.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
    }

    function getInteractiveTarget(target) {
        if (!target || target.nodeType !== 1) return null;
        return target.closest('[data-principle], [data-layer]');
    }

    function getTargetName(target) {
        return target && (target.getAttribute('data-principle') || target.getAttribute('data-layer'));
    }

    map.addEventListener('pointerover', function (event) {
        var target = getInteractiveTarget(event.target);
        var name = getTargetName(target);
        if (name) setActive(name);
    });

    map.addEventListener('click', function (event) {
        var target = getInteractiveTarget(event.target);
        var name = getTargetName(target);
        if (name) setActive(name);
    });

    map.addEventListener('focusin', function (event) {
        var target = getInteractiveTarget(event.target);
        var name = getTargetName(target);
        if (name) setActive(name);
    });

    map.addEventListener('pointerleave', function () {
        setActive('');
    });

    map.addEventListener('focusout', function (event) {
        if (!map.contains(event.relatedTarget)) setActive('');
    });

    document.addEventListener('pointerdown', function (event) {
        if (map.contains(event.target)) return;
        setActive('');

        if (document.activeElement && map.contains(document.activeElement)) {
            document.activeElement.blur();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key !== 'Escape') return;
        setActive('');

        if (document.activeElement && map.contains(document.activeElement)) {
            document.activeElement.blur();
        }
    });

    hero.addEventListener('pointermove', function (event) {
        var target = getInteractiveTarget(event.target);
        var name = getTargetName(target);
        if (name) setActive(name);

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        var bounds = hero.getBoundingClientRect();
        var x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
        var y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
        map.style.setProperty('--pointer-x', x.toFixed(3));
        map.style.setProperty('--pointer-y', y.toFixed(3));
    });

    hero.addEventListener('pointerleave', function () {
        map.style.setProperty('--pointer-x', '0');
        map.style.setProperty('--pointer-y', '0');
        setActive('');
    });
})();
