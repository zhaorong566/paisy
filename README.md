# Paisy — Modern Blog

A visually impressive, responsive blog webpage built with pure HTML, CSS, and vanilla JavaScript. No build tools or heavy dependencies required.

## Features

- **Striking hero section** with animated gradient text and typing effect
- **Featured post** showcase with glassmorphism-inspired card
- **Post cards grid** with smooth hover animations and reveal effects
- **Topics / categories** section for easy navigation
- **Newsletter signup** with client-side validation
- **Responsive design** — works on mobile, tablet, and desktop
- **Dark theme** with animated background orbs and cursor glow
- **Scroll-triggered reveal animations** powered by IntersectionObserver
- **Animated stat counters** in the hero section
- **Sticky nav** that becomes frosted-glass on scroll

## Getting Started

No installation needed. Simply open `index.html` in your browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Serve locally (recommended)
npx serve .
# or
python3 -m http.server 8080
```

Then visit `http://localhost:8080` (or `http://localhost:3000` with `npx serve`).

## Structure

```
paisy/
├── index.html   # Main blog page
├── styles.css   # All styles (responsive, animations, dark theme)
├── script.js    # Interactions (nav, scroll reveal, counters, typing)
└── README.md
```

## Tech Stack

- **HTML5** — semantic markup with ARIA labels for accessibility
- **CSS3** — custom properties, Grid, Flexbox, keyframe animations
- **Vanilla JS** — IntersectionObserver, smooth scroll, typing effect
- **Google Fonts** — Inter typeface for clean typography
