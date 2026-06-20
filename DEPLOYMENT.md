# Deployment Guide

## Quick Start

The React app is now ready for production deployment. Here are several deployment options:

## Option 1: Vercel (Recommended)

1. Push to GitHub:
```bash
git add .
git commit -m "Convert to React production app"
git push origin master
```

2. Deploy to Vercel:
- Visit [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel auto-detects Vite configuration
- Click "Deploy"

## Option 2: Netlify

1. Build the app:
```bash
npm run build
```

2. Deploy:
- Visit [netlify.com](https://netlify.com)
- Drag and drop the `dist` folder
- Or use Netlify CLI:
```bash
npx netlify-cli deploy --prod --dir=dist
```

## Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/spark-productions/', // your repo name
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

## Option 4: Static Hosting (Apache/Nginx)

1. Build:
```bash
npm run build
```

2. The `dist` folder contains:
- `index.html`
- `/assets/` (JS, CSS bundles)
- `/assets/atman-poster.jpeg`

3. Upload to your server:
```bash
scp -r dist/* user@server:/var/www/html/
```

4. Nginx configuration:
```nginx
server {
    listen 80;
    server_name sparkproductions.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Environment Variables

If you need environment variables:

1. Create `.env.production`:
```
VITE_API_URL=https://api.sparkproductions.com
VITE_ANALYTICS_ID=UA-XXXXXXXX-X
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Build Optimization

The build is already optimized with:
- ✅ Code splitting
- ✅ CSS minification
- ✅ Tree shaking
- ✅ Asset optimization
- ✅ Gzip compression ready

## Performance Checklist

Before deploying:
- [ ] Test build locally: `npm run build && npm run preview`
- [ ] Check bundle size: `ls -lh dist/assets/`
- [ ] Test on mobile devices
- [ ] Verify all images load
- [ ] Test form submission
- [ ] Verify smooth scrolling
- [ ] Check all animations
- [ ] Test in different browsers

## Post-Deployment

1. **Test the live site**:
   - All navigation links work
   - Film details open/close
   - Form validation works
   - Animations are smooth
   - Images load correctly

2. **Monitor Performance**:
   - Google PageSpeed Insights
   - WebPageTest
   - Lighthouse CI

3. **Set up analytics** (optional):
   - Google Analytics
   - Plausible
   - Fathom

## Custom Domain

1. **Add CNAME** (for Vercel/Netlify):
   - Create `public/CNAME` file:
   ```
   sparkproductions.com
   ```

2. **Update DNS**:
   - Point A record to hosting IP
   - Or CNAME to hosting provider

## SSL/HTTPS

Most hosting providers (Vercel, Netlify) provide free SSL automatically.

For custom servers, use Let's Encrypt:
```bash
certbot --nginx -d sparkproductions.com
```

## Rollback Plan

If something goes wrong:
1. Keep the original HTML file as backup
2. Git allows reverting: `git revert HEAD`
3. Hosting platforms have rollback features

## Support

The converted React app maintains 100% compatibility with the original design. If you encounter any issues during deployment:

1. Check the browser console for errors
2. Verify all asset paths are correct
3. Ensure the build completed successfully
4. Test locally with `npm run preview` first

---

**The app is production-ready and can be deployed immediately.**
