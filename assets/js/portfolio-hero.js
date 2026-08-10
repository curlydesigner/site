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

    principles.forEach(function (principle) {
        var name = principle.getAttribute('data-principle');

        principle.addEventListener('mouseenter', function () { setActive(name); });
        principle.addEventListener('focus', function () { setActive(name); });
        principle.addEventListener('click', function () {
            setActive(name);
        });
    });

    map.addEventListener('mouseleave', function () {
        if (!map.contains(document.activeElement)) setActive('');
    });

    map.addEventListener('focusout', function (event) {
        if (!map.contains(event.relatedTarget)) setActive('');
    });

    hero.addEventListener('pointermove', function (event) {
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
    });
})();
