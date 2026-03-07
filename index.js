(function () {
  'use strict';

  // Smooth scroll for in-page links (nav and any # links)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Section reveal: add .section-visible when section enters viewport (smooth transition)
  var sections = document.querySelectorAll('section');
  var observerOptions = { root: null, rootMargin: '0px', threshold: 0.12 };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
      }
    });
  }, observerOptions);

  sections.forEach(function (section) {
    observer.observe(section);
  });

  // Make first section (home) visible immediately so page doesn't load blank
  var home = document.getElementById('home');
  if (home) home.classList.add('section-visible');

  // Contact form: prevent submit for now (Gmail connection to be added later)
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
    });
  }
})();
