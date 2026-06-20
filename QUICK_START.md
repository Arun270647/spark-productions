# Quick Start Guide

## 🚀 Get Running in 30 Seconds

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` - **Done!**

---

## 📋 Common Commands

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `npm install` | Install dependencies | First time setup, after pulling code |
| `npm run dev` | Start dev server | Development work |
| `npm run build` | Build for production | Before deployment |
| `npm run preview` | Preview production build | Test before deploying |

---

## 🎯 Quick Verification

After starting the dev server, check:

1. ✅ **Homepage loads** with hero section
2. ✅ **Films section** shows 4 film cards
3. ✅ **Click a film card** - detail overlay opens
4. ✅ **ESC key** - overlay closes
5. ✅ **Scroll down** - navbar becomes solid
6. ✅ **Submit form** - validation works
7. ✅ **Marquee** - text scrolls infinitely

**If all 7 work → Perfect! Everything is working correctly.**

---

## 🔧 Troubleshooting

### Port 3000 already in use?
```bash
# Kill the process
npx kill-port 3000

# Or change port in vite.config.js
```

### Module not found?
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build fails?
```bash
# Clear cache and rebuild
rm -rf dist node_modules .vite
npm install
npm run build
```

### Assets not loading?
Check that `/public/assets/atman-poster.jpeg` exists

---

## 📁 Project Files

### Source Code
- `src/App.jsx` - Main application
- `src/components/` - All UI components (10 files)
- `src/styles/global.css` - Animations and base styles

### Assets
- `public/assets/` - Images and media

### Configuration
- `package.json` - Dependencies
- `vite.config.js` - Build settings
- `index.html` - Entry point

### Documentation
- `README.md` - Full documentation
- `SUMMARY.md` - Conversion overview
- `DEPLOYMENT.md` - How to deploy
- `CONVERSION_NOTES.md` - Technical details
- `PROJECT_STRUCTURE.md` - Architecture
- `QUICK_START.md` - This file

---

## 🌐 Deploy to Production

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Import to Vercel
3. Deploy (automatic)

### Option 2: Netlify
1. `npm run build`
2. Drag `dist/` to Netlify

### Option 3: Any Host
1. `npm run build`
2. Upload `dist/` folder contents
3. Configure server for SPA

**See DEPLOYMENT.md for detailed guides**

---

## 📊 Build Output

### Development
- Fast refresh (HMR)
- Source maps for debugging
- Unminified code

### Production
```
dist/
├── index.html (0.83 KB)
├── assets/
│   ├── atman-poster.jpeg (53 KB)
│   ├── index-[hash].js (177 KB → 53.8 KB gzipped)
│   └── index-[hash].css (0.84 KB → 0.39 KB gzipped)
```

**Total production size: ~54 KB gzipped**

---

## ✅ What's Included

- ✅ **Production-ready React app**
- ✅ **100% UI identical to original**
- ✅ **All animations working**
- ✅ **All interactions preserved**
- ✅ **Optimized builds**
- ✅ **Full documentation**
- ✅ **Deployment ready**

---

## 🎨 UI Comparison

### Original HTML
Open `Spark Productions.dc.html` in any browser

### React Version
```bash
npm run dev
```
Open `http://localhost:3000`

**They should look absolutely identical!**

---

## 📱 Test Checklist

Before deploying, verify:

- [ ] Homepage hero displays correctly
- [ ] All 4 films show in grid
- [ ] Film cards hover effect works
- [ ] Film detail opens on click
- [ ] ESC closes film detail
- [ ] Navigation scrolls smoothly
- [ ] Navbar changes on scroll
- [ ] Services hover effects work
- [ ] Form validates input
- [ ] Form shows success message
- [ ] Marquee animates continuously
- [ ] All images load
- [ ] Grain overlay visible (subtle)

---

## 💡 Development Tips

### Hot Reload
Changes to `.jsx` files update instantly without page refresh

### React DevTools
Install browser extension to inspect component tree

### Console Errors
Check browser console for any issues

### File Structure
Components are in `src/components/` - edit freely

### Adding New Films
Edit the `films` array in `src/App.jsx`

### Changing Colors
Global colors in `src/styles/global.css`

### Modifying Animations
Keyframes in `src/styles/global.css`

---

## 🎯 Next Steps

1. **Start the dev server**: `npm run dev`
2. **Make changes**: Edit files in `src/`
3. **See changes instantly**: Auto-reload
4. **Build for production**: `npm run build`
5. **Deploy**: Follow DEPLOYMENT.md

---

## 📞 Need Help?

1. Check documentation in project root
2. Review CONVERSION_NOTES.md for technical details
3. Verify Node.js version is 18+
4. Ensure all dependencies installed

---

**Ready to go! Start developing with `npm run dev`**
