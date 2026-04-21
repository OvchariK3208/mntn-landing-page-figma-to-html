# MNTN — Static Landing Page

A clean static implementation of the MNTN landing page concept, built with semantic HTML, modular CSS, and a small amount of vanilla JavaScript.

## Overview

This repository focuses on readable frontend code rather than framework usage or build tooling. The page is intentionally shipped as a plain static site:

- no dependencies
- no bundler
- no environment variables
- no framework-specific runtime

The codebase is organized so that a developer can read the page structure, layout rules, component styles, and motion behavior without digging through a monolithic stylesheet.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Architecture

```txt
mntn-landing-page-figma-to-html/
├── index.html
├── README.md
├── .gitignore
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── motion.css
├── js/
│   └── main.js
└── assets/
    ├── icons/
    └── images/
```

- `index.html`: semantic page structure and content.
- `css/base.css`: design tokens, reset, typography, and accessibility helpers.
- `css/layout.css`: page shell, container rules, and shared layout primitives.
- `css/components.css`: header, hero, feature sections, footer, and responsive component rules.
- `css/motion.css`: interaction and motion-specific styling.
- `js/main.js`: placeholder-link handling, active section tracking, and hero motion updates.

## Local Run

Open `index.html` directly in a browser or start a simple static server:

```bash
python3 -m http.server 8000
```

Then open `http://127.0.0.1:8000`.

## Deployment

The project is ready for static hosting as-is. It can be deployed to Vercel, Netlify, GitHub Pages, or any other static file host without additional configuration.

## Credits

- Design concept: [Kryston Schwarze](https://www.figma.com/@kryston)
- Figma Community file: [MNTN - Landing Page](https://www.figma.com/community/file/788675347108478517/mntn-landing-page)
