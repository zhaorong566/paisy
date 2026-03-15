/* global: script.js — Paisy Blog interactions */
(function () {
  'use strict';

  // ---- Loading bar ----
  const loadingBar = document.getElementById('loadingBar');
  if (loadingBar) {
    loadingBar.style.width = '70%';
    window.addEventListener('load', () => {
      loadingBar.style.width = '100%';
      setTimeout(() => { loadingBar.style.opacity = '0'; }, 300);
    });
  }

  // ---- Sticky nav ----
  const navHeader = document.getElementById('navHeader');
  if (navHeader) {
    const onScroll = () => {
      navHeader.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---- Mobile menu ----
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      navLinks.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Cursor glow (desktop only) ----
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    let raf = null;
    let tx = 0, ty = 0;
    let cx = 0, cy = 0;

    document.addEventListener('mousemove', e => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(moveCursor);
      }
    });

    document.addEventListener('mouseenter', () => { cursorGlow.style.opacity = '1'; });
    document.addEventListener('mouseleave', () => { cursorGlow.style.opacity = '0'; });

    function moveCursor() {
      cx += (tx - cx) * 0.1;
      cy += (ty - cy) * 0.1;
      cursorGlow.style.left = cx + 'px';
      cursorGlow.style.top  = cy + 'px';
      raf = requestAnimationFrame(moveCursor);
    }
  }

  // ---- Scroll reveal ----
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger siblings
          const siblings = entry.target.closest('.posts-grid, .topics-grid, .section-header, .hero-content');
          if (siblings) {
            const allReveal = Array.from(siblings.querySelectorAll('.reveal:not(.visible)'));
            const idx = allReveal.indexOf(entry.target);
            const delay = Math.max(0, idx * 80);
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          } else {
            entry.target.classList.add('visible');
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all immediately
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // ---- Typing effect ----
  const typedEl = document.getElementById('typedText');
  if (typedEl) {
    const phrases = [
      'worth sharing.',
      'worth thinking.',
      'worth your time.',
      'worth bookmarking.',
    ];
    let phraseIndex = 0;
    let charIndex   = 0;
    let deleting    = false;
    let pauseTimer  = null;

    function type() {
      const current = phrases[phraseIndex];

      if (!deleting) {
        typedEl.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          pauseTimer = setTimeout(type, 1800);
          return;
        }
      } else {
        typedEl.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }

      const speed = deleting ? 45 : 85;
      pauseTimer = setTimeout(type, speed);
    }

    // Start after a short delay
    pauseTimer = setTimeout(type, 1200);
  }

  // ---- Animated counters ----
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const start = performance.now();

    function update(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);

      if (suffix === 'K') {
        el.textContent = (value / 1000).toFixed(1) + 'K';
      } else {
        el.textContent = value;
      }

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  const counterEls = document.querySelectorAll('.stat-num[data-target]');
  if (counterEls.length && 'IntersectionObserver' in window) {
    const cObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          cObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counterEls.forEach(el => cObs.observe(el));
  }

  // ---- Newsletter form ----
  const form      = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('emailInput');
  const msgEl     = document.getElementById('newsletterMsg');

  if (form && emailInput && msgEl) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        emailInput.classList.add('error');
        msgEl.textContent = 'Please enter a valid email address.';
        msgEl.className = 'newsletter-message error';
        emailInput.focus();
        return;
      }

      emailInput.classList.remove('error');
      emailInput.disabled = true;
      form.querySelector('button').disabled = true;

      // Simulate async submission
      setTimeout(() => {
        msgEl.textContent = '🎉 You\'re subscribed! Check your inbox.';
        msgEl.className = 'newsletter-message success';
        emailInput.value = '';
        emailInput.disabled = false;
        form.querySelector('button').disabled = false;
      }, 800);
    });

    emailInput.addEventListener('input', () => {
      emailInput.classList.remove('error');
      if (msgEl.classList.contains('error')) {
        msgEl.textContent = '';
        msgEl.className = 'newsletter-message';
      }
    });
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
