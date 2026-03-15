# Paisy — Modern Blog

A visually impressive, modern blog landing page built with pure HTML, CSS, and JavaScript — no build tools required.

## Features

- 🌑 Dark theme with glassmorphism cards and animated background orbs
- 🎨 Vibrant gradient accents (purple, pink, green)
- ✨ Smooth scroll-reveal animations, hover effects, and a cursor glow
- 📱 Fully responsive — mobile, tablet, and desktop
- ⌨️ Typing effect in the hero section
- 📊 Animated stat counters
- ♿ Accessible: ARIA labels, semantic HTML, focus styles, reduced-motion support
- 📰 Sample blog content (6 post cards, featured post, 4 topic categories)

## File Structure

```
paisy/
├── index.html   — Main blog page
├── styles.css   — All styles (dark theme, layout, animations)
├── script.js    — Interactions (scroll reveal, typing, counters, menu)
└── README.md
```

## Running the Project

No build step needed. Open `index.html` directly in a browser, or use a local server for best results:

```bash
# Python
python3 -m http.server 8080
# Then open http://localhost:8080

# Node.js (npx)
npx serve .
# Then open http://localhost:3000
```

## Blog Page Sections

| Section | Description |
|---|---|
| **Hero** | Animated headline with typing effect and stat counters |
| **Featured Post** | Highlighted article with glassmorphism card |
| **Latest Posts** | 6-card grid with gradient images and hover effects |
| **Topics** | 4 category cards (Technology, Design, Life, AI) |
| **Newsletter** | Email signup with validation |
| **Footer** | Links, social buttons, copyright |