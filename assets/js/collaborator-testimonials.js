(function () {
    var carousels = Array.prototype.slice.call(document.querySelectorAll('.collaborator-carousel'));

    carousels.forEach(function (carousel) {
        var slides = Array.prototype.slice.call(carousel.querySelectorAll('.collaborator-slide'));
        var previousButton = carousel.querySelector('.collaborator-arrow--previous');
        var nextButton = carousel.querySelector('.collaborator-arrow--next');
        var progress = carousel.querySelector('.collaborator-progress');
        var pauseButton = carousel.querySelector('.collaborator-pause');
        var pauseIcon = pauseButton ? pauseButton.querySelector('ion-icon') : null;
        var pauseLabel = pauseButton ? pauseButton.querySelector('span') : null;
        var status = carousel.querySelector('.collaborator-carousel-status');
        var section = carousel.closest('.collaborator-testimonials');
        var reviewCount = section ? section.querySelector('[data-testimonial-count]') : null;
        var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        var activeIndex = 0;
        var autoplayTimer = null;
        var manuallyPaused = reducedMotion.matches;
        var hoverPaused = false;
        var touchStartX = 0;
        var touchStartY = 0;
        var autoplayDelay = 6500;

        if (!progress || !previousButton || !nextButton || !pauseButton || slides.length < 2) return;
        if (reviewCount) reviewCount.textContent = slides.length;

        var progressButtons = slides.map(function (slide, index) {
            var button = document.createElement('button');
            button.type = 'button';
            button.setAttribute('aria-label', 'Show testimonial ' + (index + 1) + ' of ' + slides.length);
            button.setAttribute('aria-controls', slide.id);
            button.addEventListener('click', function () {
                showSlide(index, true);
                restartAutoplay();
            });
            progress.appendChild(button);
            return button;
        });

        function reviewerName(slide) {
            var name = slide.querySelector('.collaborator-name');
            return name ? name.textContent.trim() : '';
        }

        function showSlide(index, announce) {
            activeIndex = (index + slides.length) % slides.length;

            slides.forEach(function (slide, slideIndex) {
                var isActive = slideIndex === activeIndex;
                slide.classList.toggle('is-active', isActive);
                slide.hidden = !isActive;
                slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
            });

            progressButtons.forEach(function (button, buttonIndex) {
                var isActive = buttonIndex === activeIndex;
                button.classList.toggle('is-active', isActive);
                if (isActive) {
                    button.setAttribute('aria-current', 'true');
                } else {
                    button.removeAttribute('aria-current');
                }
            });

            if (announce && status) {
                status.textContent = 'Testimonial ' + (activeIndex + 1) + ' of ' + slides.length + ', from ' + reviewerName(slides[activeIndex]) + '.';
            }
        }

        function stopAutoplay() {
            if (autoplayTimer) {
                window.clearInterval(autoplayTimer);
                autoplayTimer = null;
            }
        }

        function startAutoplay() {
            stopAutoplay();
            if (
                manuallyPaused
                || reducedMotion.matches
                || document.hidden
                || carousel.matches(':hover')
                || carousel.contains(document.activeElement)
            ) return;

            autoplayTimer = window.setInterval(function () {
                showSlide(activeIndex + 1, false);
            }, autoplayDelay);
        }

        function restartAutoplay() {
            if (!manuallyPaused) startAutoplay();
        }

        function updatePauseControl() {
            pauseButton.setAttribute('aria-pressed', manuallyPaused ? 'true' : 'false');
            pauseButton.setAttribute('aria-label', manuallyPaused ? 'Resume automatic testimonial rotation' : 'Pause automatic testimonial rotation');
            if (pauseIcon) pauseIcon.setAttribute('name', manuallyPaused ? 'play-outline' : 'pause-outline');
            if (pauseLabel) pauseLabel.textContent = manuallyPaused ? 'Play' : (hoverPaused ? 'Hover paused' : 'Pause');
        }

        function showPrevious() {
            showSlide(activeIndex - 1, true);
            restartAutoplay();
        }

        function showNext() {
            showSlide(activeIndex + 1, true);
            restartAutoplay();
        }

        previousButton.addEventListener('click', showPrevious);
        nextButton.addEventListener('click', showNext);

        pauseButton.addEventListener('click', function () {
            manuallyPaused = !manuallyPaused;
            updatePauseControl();
            if (manuallyPaused) {
                stopAutoplay();
            } else {
                startAutoplay();
            }
        });

        carousel.addEventListener('mouseenter', function () {
            hoverPaused = true;
            stopAutoplay();
            updatePauseControl();
        });

        carousel.addEventListener('mouseleave', function () {
            hoverPaused = false;
            updatePauseControl();
            restartAutoplay();
        });

        carousel.addEventListener('focusin', stopAutoplay);
        carousel.addEventListener('focusout', function () {
            window.setTimeout(function () {
                if (!carousel.contains(document.activeElement)) restartAutoplay();
            }, 0);
        });

        carousel.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                showPrevious();
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                showNext();
            } else if (event.key === ' ' && event.target === carousel) {
                event.preventDefault();
                pauseButton.click();
            }
        });

        carousel.addEventListener('touchstart', function (event) {
            var touch = event.changedTouches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
            stopAutoplay();
        }, { passive: true });

        carousel.addEventListener('touchend', function (event) {
            var touch = event.changedTouches[0];
            var deltaX = touch.clientX - touchStartX;
            var deltaY = touch.clientY - touchStartY;

            if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                    showPrevious();
                } else {
                    showNext();
                }
            } else {
                restartAutoplay();
            }
        }, { passive: true });

        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                stopAutoplay();
            } else {
                restartAutoplay();
            }
        });

        reducedMotion.addEventListener('change', function () {
            if (reducedMotion.matches) {
                manuallyPaused = true;
                stopAutoplay();
            }
            updatePauseControl();
        });

        showSlide(0, false);
        updatePauseControl();
        startAutoplay();
    });
}());
