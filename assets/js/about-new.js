(function () {
    'use strict';

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var revealItems = document.querySelectorAll('.reveal-on-scroll, .draw-line');

    if (reduceMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach(function (item) {
            item.classList.add('is-visible');
        });
    } else {
        var observer = new IntersectionObserver(function (entries, currentObserver) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    currentObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

        revealItems.forEach(function (item) {
            observer.observe(item);
        });
    }

    var methodExplorer = document.querySelector('[data-method-explorer]');

    if (methodExplorer) {
        var methodTabs = methodExplorer.querySelectorAll('.method-tab');
        var methodDetail = methodExplorer.querySelector('.method-detail');
        var title = methodDetail.querySelector('.method-detail-title strong');
        var icon = methodDetail.querySelector('.method-detail-title ion-icon');
        var paragraphs = methodDetail.querySelectorAll('p');

        methodTabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                methodTabs.forEach(function (item) {
                    item.classList.remove('is-active');
                    item.setAttribute('aria-selected', 'false');
                });

                tab.classList.add('is-active');
                tab.setAttribute('aria-selected', 'true');
                title.textContent = tab.dataset.title;
                icon.setAttribute('name', tab.dataset.icon);
                paragraphs[0].textContent = tab.dataset.designer;
                paragraphs[1].textContent = tab.dataset.educator;
            });
        });
    }

    var practicePrinciples = {
        empathy: {
            title: 'Empathy',
            icon: 'heart-outline',
            summary: 'Start with people—their context, needs, strengths, and lived experience.',
            designerItems: ['research'],
            educatorItems: ['teaching'],
            designerLabel: 'Research & Strategy',
            designerCopy: 'uncovers what people need and why it matters.',
            educatorLabel: 'Teaching & Facilitation',
            educatorCopy: 'creates space for different voices and ways of learning.'
        },
        clarity: {
            title: 'Clarity',
            icon: 'locate-outline',
            summary: 'Make complex ideas understandable, navigable, and ready for action.',
            designerItems: ['ux', 'story'],
            educatorItems: ['curriculum', 'workshops'],
            designerLabel: 'UX / UI Design and Storytelling',
            designerCopy: 'turn complexity into clear flows and shared understanding.',
            educatorLabel: 'Curriculum Design and Workshops',
            educatorCopy: 'give learning a purposeful structure and direction.'
        },
        accessibility: {
            title: 'Accessibility',
            icon: 'accessibility-outline',
            summary: 'Design participation into the experience so more people can use it, understand it, and belong.',
            designerItems: ['ux', 'systems'],
            educatorItems: ['teaching', 'curriculum'],
            designerLabel: 'UX / UI and Systems Design',
            designerCopy: 'create inclusive products, patterns, and decisions.',
            educatorLabel: 'Teaching and Curriculum Design',
            educatorCopy: 'support different learners with multiple ways to engage.'
        },
        systems: {
            title: 'Systems thinking',
            icon: 'git-network-outline',
            summary: 'See relationships, constraints, and ripple effects—not isolated moments.',
            designerItems: ['research', 'systems'],
            educatorItems: ['curriculum', 'workshops'],
            designerLabel: 'Research and Systems Design',
            designerCopy: 'connect user needs, product decisions, and scalable patterns.',
            educatorLabel: 'Curriculum Design and Workshops',
            educatorCopy: 'connect goals, activities, feedback, and meaningful outcomes.'
        },
        learning: {
            title: 'Continuous learning',
            icon: 'trending-up-outline',
            summary: 'Treat every idea as something to test, reflect on, and improve.',
            designerItems: ['prototype', 'story'],
            educatorItems: ['mentorship', 'innovation'],
            designerLabel: 'Prototyping and Storytelling',
            designerCopy: 'make learning visible early so teams can adapt with confidence.',
            educatorLabel: 'Mentorship and Innovation',
            educatorCopy: 'build reflection, experimentation, and growth into the practice.'
        }
    };

    function setSideApplication(panel, side, principle, label, copy) {
        var sideLabel = panel.querySelector('div span');
        var icon = panel.querySelector('div ion-icon');
        var title = panel.querySelector('h4');
        var paragraph = panel.querySelector('p');
        var itemLabel = document.createElement('strong');

        sideLabel.textContent = side;
        icon.setAttribute('name', principle.icon);
        title.textContent = principle.title;
        itemLabel.textContent = label;
        paragraph.replaceChildren(itemLabel, document.createTextNode(' ' + copy));
        panel.classList.remove('is-updating');
        void panel.offsetWidth;
        panel.classList.add('is-updating');
    }

    document.querySelectorAll('[data-practice-ecosystem]').forEach(function (ecosystem) {
        var explorer = ecosystem.querySelector('.identity-explorer');
        var stage = ecosystem.querySelector('.ecosystem-stage');
        var sharedEcosystem = ecosystem.querySelector('.shared-ecosystem');
        var principleButtons = ecosystem.querySelectorAll('[data-principle]');
        var practiceItems = ecosystem.querySelectorAll('[data-practice-item]');
        var itemDetails = ecosystem.querySelectorAll('.identity-item-detail');
        var designerPanel = ecosystem.querySelector('.principle-side-design');
        var educatorPanel = ecosystem.querySelector('.principle-side-education');
        var connections = ecosystem.querySelector('.principle-connections');
        var designerConnector = ecosystem.querySelector('[data-principle-connector="design"]');
        var educatorConnector = ecosystem.querySelector('[data-principle-connector="education"]');
        var junction = ecosystem.querySelector('.junction-network');
        var pulseTimer;
        var activeKey = null;
        var hoverKey = null;
        var focusKey = null;
        var pinnedKey = null;

        function setConnectorGeometry(connector, start, end) {
            var deltaX = end.x - start.x;
            var deltaY = end.y - start.y;
            var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            var angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

            connector.style.left = start.x + 'px';
            connector.style.top = start.y + 'px';
            connector.style.width = distance + 'px';
            connector.style.transform = 'rotate(' + angle + 'deg)';
        }

        function positionPrincipleConnections(key) {
            var activeButton = ecosystem.querySelector('[data-principle="' + key + '"]');
            if (!activeButton || designerPanel.hidden || educatorPanel.hidden) return;

            var explorerRect = explorer.getBoundingClientRect();
            var circleRect = activeButton.querySelector('span').getBoundingClientRect();
            var designerRect = designerPanel.getBoundingClientRect();
            var educatorRect = educatorPanel.getBoundingClientRect();
            var verticalAnchor = key === 'empathy' ? 'top' : (key === 'systems' || key === 'learning' ? 'bottom' : 'middle');
            var circleCenter = {
                x: circleRect.left + circleRect.width / 2 - explorerRect.left,
                y: circleRect.top + circleRect.height / 2 - explorerRect.top
            };

            function panelPoint(rect, side) {
                var pointY = rect.top + rect.height / 2;
                if (verticalAnchor === 'top') pointY = rect.top;
                if (verticalAnchor === 'bottom') pointY = rect.bottom;
                return {
                    x: (side === 'design' ? rect.right - 14 : rect.left + 14) - explorerRect.left,
                    y: pointY - explorerRect.top
                };
            }

            function circleEdgeToward(point) {
                var deltaX = point.x - circleCenter.x;
                var deltaY = point.y - circleCenter.y;
                var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY) || 1;
                var radius = circleRect.width / 2;
                return {
                    x: circleCenter.x + deltaX / distance * radius,
                    y: circleCenter.y + deltaY / distance * radius
                };
            }

            var designerPoint = panelPoint(designerRect, 'design');
            var educatorPoint = panelPoint(educatorRect, 'education');
            setConnectorGeometry(designerConnector, circleEdgeToward(designerPoint), designerPoint);
            setConnectorGeometry(educatorConnector, circleEdgeToward(educatorPoint), educatorPoint);
        }

        function activatePrinciple(key, shouldPulse) {
            var principle = practicePrinciples[key];
            if (!principle) return;

            activeKey = key;

            principleButtons.forEach(function (button) {
                var isActive = button.dataset.principle === key;
                button.classList.toggle('is-active', isActive);
                button.setAttribute('aria-pressed', String(isActive));
            });

            stage.classList.add('has-selection');
            explorer.classList.add('has-principle');
            designerPanel.hidden = false;
            educatorPanel.hidden = false;
            setSideApplication(designerPanel, 'In design', principle, principle.designerLabel, principle.designerCopy);
            setSideApplication(educatorPanel, 'In education', principle, principle.educatorLabel, principle.educatorCopy);
            connections.classList.remove('is-visible');
            window.requestAnimationFrame(function () {
                positionPrincipleConnections(key);
                connections.classList.add('is-visible');
            });

            if (shouldPulse && !reduceMotion) {
                window.clearTimeout(pulseTimer);
                junction.classList.remove('is-pulsing');
                void junction.offsetWidth;
                junction.classList.add('is-pulsing');
                pulseTimer = window.setTimeout(function () {
                    junction.classList.remove('is-pulsing');
                }, 900);
            }
        }

        function clearPrinciple() {
            activeKey = null;
            principleButtons.forEach(function (button) {
                button.classList.remove('is-active');
                button.setAttribute('aria-pressed', 'false');
            });
            stage.classList.remove('has-selection');
            explorer.classList.remove('has-principle');
            connections.classList.remove('is-visible');
            designerPanel.hidden = true;
            educatorPanel.hidden = true;
        }

        function restorePrincipleState() {
            if (pinnedKey) {
                activatePrinciple(pinnedKey, false);
            } else if (hoverKey) {
                activatePrinciple(hoverKey, false);
            } else if (focusKey) {
                activatePrinciple(focusKey, false);
            } else {
                clearPrinciple();
            }
        }

        principleButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var key = button.dataset.principle;
                if (pinnedKey === key) {
                    pinnedKey = null;
                    clearPrinciple();
                } else {
                    pinnedKey = key;
                    activatePrinciple(key, true);
                }
            });
            button.addEventListener('pointerenter', function () {
                hoverKey = button.dataset.principle;
                sharedEcosystem.classList.add('is-interacting');
                activatePrinciple(button.dataset.principle, true);
            });
            button.addEventListener('pointerleave', function () {
                hoverKey = null;
                sharedEcosystem.classList.remove('is-interacting');
                restorePrincipleState();
            });
            button.addEventListener('focus', function () {
                focusKey = button.dataset.principle;
                activatePrinciple(focusKey, true);
            });
            button.addEventListener('blur', function () {
                focusKey = null;
                restorePrincipleState();
            });
        });

        practiceItems.forEach(function (item) {
            item.addEventListener('click', function () {
                var willOpen = item.getAttribute('aria-expanded') !== 'true';

                practiceItems.forEach(function (otherItem) {
                    otherItem.setAttribute('aria-expanded', 'false');
                });
                itemDetails.forEach(function (itemDetail) {
                    itemDetail.hidden = true;
                });

                if (willOpen) {
                    item.setAttribute('aria-expanded', 'true');
                    document.getElementById(item.getAttribute('aria-controls')).hidden = false;
                }
            });
        });

        window.addEventListener('resize', function () {
            if (activeKey) positionPrincipleConnections(activeKey);
        });

        clearPrinciple();
    });
}());
