# Spark Productions

A production-grade React application for Spark Productions - an independent film collective.

## Overview

This application has been converted from a custom HTML framework to a modern React application while maintaining **100% of the original UI design**. Every pixel, animation, and interaction has been preserved exactly as it was in the original HTML file.

## Features

- **Hero Section** with animated posters and call-to-action buttons
- **Film Showcase** with 4 films (ATMAN, SANGILI, SOUNDU SIMBU, WRITER'S TIMES)
- **Services Section** highlighting production capabilities
- **About Section** with collective information
- **Directors Submission Form** for pitching film ideas
- **Film Detail Overlay** for expanded film information
- **Smooth Scroll Navigation** with sticky header
- **Grain Texture Overlay** for authentic film aesthetic
- **Marquee Animation** with film titles
- **Responsive Hover Effects** on all interactive elements

## Tech Stack

- **React 18.3** - Modern React with hooks
- **Vite 5.3** - Lightning-fast build tool
- **Inline Styles** - Maintains exact pixel-perfect design from original HTML
- **Google Fonts** - Anton, Archivo, and Oswald typefaces

## Project Structure

```
src/
├── components/
│   ├── About.jsx           # About section
│   ├── Directors.jsx       # Film submission form
│   ├── FilmDetail.jsx      # Film detail overlay
│   ├── Footer.jsx          # Footer with contact info
│   ├── GrainOverlay.jsx    # Texture overlay effect
│   ├── Hero.jsx            # Landing hero section
│   ├── Nav.jsx             # Navigation bar
│   ├── Services.jsx        # Services listing
│   ├── TitleMarquee.jsx    # Animated marquee
│   └── Works.jsx           # Films showcase
├── styles/
│   └── global.css          # Global styles and animations
├── App.jsx                 # Main application component
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

## License

All stories reserved © 2026 Spark Productions

---

**Converted from HTML to React while maintaining pixel-perfect design fidelity.**
