(function () {
  function initHeroSplit() {
    var hero = document.querySelector('.js-hero-split');
    var imageStage = hero ? hero.querySelector('.hero-image-stage') : null;
    if (!hero) return;
    if (!imageStage) return;

    var mq = window.matchMedia('(max-width: 991px), (pointer: coarse)');
    var current = 50;
    var target = 50;
    var rafId = null;
    var rect = null;

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    function applyVars(value) {
      var split = clamp(value, 6, 94);
      hero.style.setProperty('--hero-split', split.toFixed(2) + '%');
      hero.style.setProperty('--reveal-x', split.toFixed(2) + '%');
    }

    function updateVars() {
      current += (target - current) * 0.12;
      hero.style.setProperty('--hero-split', current.toFixed(2) + '%');
      hero.style.setProperty('--reveal-x', current.toFixed(2) + '%');

      if (Math.abs(target - current) > 0.02) {
        rafId = window.requestAnimationFrame(updateVars);
      } else {
        rafId = null;
      }
    }

    function requestUpdate() {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateVars);
      }
    }

    function syncToPointer(clientX) {
      if (!rect) {
        rect = imageStage.getBoundingClientRect();
      }

      var ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
      current = clamp(ratio * 100, 6, 94);
      target = current;
      applyVars(current);
    }

    function setFromPointer(clientX) {
      if (!rect) {
        rect = imageStage.getBoundingClientRect();
      }

      var ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
      target = clamp(ratio * 100, 6, 94);
      requestUpdate();
    }

    function resetHero() {
      target = 50;
      requestUpdate();
    }

    function handleMove(event) {
      if (mq.matches) return;
      syncToPointer(event.clientX);
    }

    function handleEnter(event) {
      if (mq.matches) return;
      rect = imageStage.getBoundingClientRect();
      syncToPointer(event.clientX);
    }

    function handleLeave() {
      rect = null;
      resetHero();
    }

    function handleResize() {
      rect = null;
      if (mq.matches) {
        resetHero();
      }
    }

    hero.addEventListener('pointerenter', handleEnter);
    hero.addEventListener('pointermove', handleMove);
    hero.addEventListener('pointerleave', handleLeave);
    window.addEventListener('resize', handleResize);
    if (mq.addEventListener) {
      mq.addEventListener('change', handleResize);
    } else if (mq.addListener) {
      mq.addListener(handleResize);
    }

    resetHero();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroSplit);
  } else {
    initHeroSplit();
  }
})();
