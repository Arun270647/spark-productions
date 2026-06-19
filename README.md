# Spark Productions

A modern, production-ready film production company portfolio website built with React and Vite.

## 🎬 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Sleek, cinematic design with smooth animations
- **Film Portfolio**: Showcase films with detailed modal views
- **Component-Based**: Modular React architecture for easy maintenance
- **Performance Optimized**: Built with Vite for lightning-fast load times
- **SEO Ready**: Semantic HTML structure for better search engine visibility

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
spark-productions/
├── public/
│   ├── assets/
│   │   └── atman-poster.jpeg
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Directors.jsx
│   │   ├── FilmDetail.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── Nav.jsx
│   │   ├── Services.jsx
│   │   └── Works.jsx
│   ├── data/
│   │   └── filmsData.js
│   ├── styles/
│   │   ├── About.css
│   │   ├── Directors.css
│   │   ├── FilmDetail.css
│   │   ├── Footer.css
│   │   ├── Hero.css
│   │   ├── Marquee.css
│   │   ├── Nav.css
│   │   ├── Services.css
│   │   └── Works.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

### Adding New Films

Edit `src/data/filmsData.js` to add or modify film entries:

```javascript
{
  id: 1,
  title: "Your Film Title",
  year: "2026",
  duration: "18 min",
  category: "short", // or "feature", "commercial"
  genres: ["Drama", "Thriller"],
  poster: "/assets/your-poster.jpeg",
  description: "Film description...",
  // ... more fields
}
```

### Styling

- Global styles: `src/index.css`
- Component styles: `src/styles/[ComponentName].css`
- Main app styles: `src/App.css`

### Colors

Main brand colors used:
- Primary Red: `#ff4444`
- Background Dark: `#0a0a0a`
- Text White: `#ffffff`

## 📦 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages

```bash
npm run build
# Push the 'dist' folder to gh-pages branch
```

## 🛠️ Technologies

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **CSS3** - Styling with animations

## 📄 License

All rights reserved © 2026 Spark Productions

## 👥 Team

- **Spark Productions Team** - Creative Direction
- **Sivam** - Cinematography
- **Santa** - Production
- **Arun** - Editing & Development
- **Gokul** - Additional Cinematography

## 🤝 Contributing

This is a private project for Spark Productions. For inquiries, contact hello@sparkproductions.com

## 📞 Contact

- Email: hello@sparkproductions.com
- Phone: +1 (234) 567-890
- Address: 123 Film Street, Los Angeles, CA 90001
