# Spark Productions

A production-grade **multi-page React application** for Spark Productions - an independent film collective.

## Overview

This application has evolved from a custom HTML framework to a fully-scaled **multi-page React application** with React Router, while maintaining **100% of the original UI design**. Every pixel, animation, and interaction has been preserved exactly.

## Features

### Pages & Routing
- **Multi-Page Architecture** with React Router (v7)
- **8 Dedicated Pages**: Home, Works, Services, About, Directors, Contact, Film Details, 404
- **Clean URLs** for each section (/works, /services, /about, etc.)
- **Dynamic Film Routes** (/works/atman, /works/sangili, etc.)
- **SEO-Friendly** with unique URLs for sharing

### UI & Interactions
- **Hero Section** with animated posters and call-to-action buttons
- **Film Showcase Page** with 4 films in grid layout
- **Film Detail Pages** with full information, dates, and credits
- **Services Page** highlighting production capabilities
- **About Page** with collective information and stats
- **Directors Page** with film submission form
- **Contact Page** with social links and information
- **404 Page** for invalid routes
- **Sticky Navigation** with route highlighting
- **Page Transitions** with smooth animations
- **Grain Texture Overlay** for authentic film aesthetic
- **Marquee Animation** with film titles
- **Responsive Hover Effects** on all interactive elements

## Tech Stack

- **React 18.3** - Modern React with hooks
- **React Router 7** - Client-side routing
- **Vite 5.3** - Lightning-fast build tool
- **Inline Styles** - Maintains exact pixel-perfect design from original HTML
- **Google Fonts** - Anton, Archivo, and Oswald typefaces

## Project Structure

```
src/
├── pages/                  # Page components
│   ├── HomePage.jsx        # Landing page
│   ├── WorksPage.jsx       # Films showcase
│   ├── FilmDetailPage.jsx  # Individual film details
│   ├── ServicesPage.jsx    # Services page
│   ├── AboutPage.jsx       # About page
│   ├── DirectorsPage.jsx   # Film submission page
│   ├── ContactPage.jsx     # Contact page
│   └── NotFoundPage.jsx    # 404 page
├── components/
│   ├── Layout.jsx          # Main layout wrapper
│   ├── Nav.jsx             # Navigation bar
│   ├── Hero.jsx            # Landing hero section
│   ├── Footer.jsx          # Footer component
│   ├── TitleMarquee.jsx    # Animated marquee
│   └── GrainOverlay.jsx    # Texture overlay effect
├── data/
│   └── filmsData.js        # Centralized film & service data
├── styles/
│   ├── global.css          # Global styles and animations
│   └── transitions.css     # Page transition styles
├── App.jsx                 # Router configuration
└── main.jsx                # React entry point
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Routes

- `/` - Home page
- `/works` - All films
- `/works/atman` - ATMAN film details
- `/works/sangili` - SANGILI film details
- `/works/soundu-simbu` - SOUNDU SIMBU film details
- `/works/writers-times` - WRITER'S TIMES film details
- `/services` - Services page
- `/about` - About page
- `/directors` - Submit film form
- `/contact` - Contact page

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Key Features Preserved

### Animations
- **Grain animation** - Subtle texture movement
- **Marquee scroll** - Infinite scrolling film titles
- **Scroll hint** - Animated down arrow
- **Reveal animations** - Fade-in on scroll with Intersection Observer
- **Hover effects** - Scale transforms on film cards and services

### Color Palette
- **Primary Red**: `#E01313`
- **Background**: `#F1ECE3` (warm cream)
- **Text Dark**: `#100D0B` (near black)
- **Accent Red**: `#9E0A0A` (dark red)

### Typography
- **Anton** - Headers and display text
- **Archivo** - Body text and UI elements
- **Oswald** - Labels and metadata

### Interactions
- Smooth scroll navigation
- Film card hover effects with image scale
- Service row hover with background tint
- Form validation with error messages
- ESC key to close film detail overlay
- Sticky navigation with scroll state

## Design Principles

This conversion maintains:
- **Exact spacing** - All margins, paddings, and gaps preserved
- **Exact typography** - Font sizes, weights, and letter-spacing unchanged
- **Exact colors** - All color values maintained precisely
- **Exact animations** - Timing, easing, and keyframes identical
- **Exact layout** - Grid systems and flexbox structures preserved

## Browser Support

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge (latest versions)

## Documentation

- **README.md** - This file
- **MULTI_PAGE_ARCHITECTURE.md** - Detailed multi-page routing guide
- **CONVERSION_NOTES.md** - HTML to React conversion details
- **DEPLOYMENT.md** - Deployment instructions
- **PROJECT_STRUCTURE.md** - Architecture overview
- **QUICK_START.md** - Quick start guide

## License

All stories reserved © 2026 Spark Productions

---

**Evolved from HTML to a fully-scaled multi-page React application with 100% design fidelity.**
