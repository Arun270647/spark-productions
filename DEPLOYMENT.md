# Deployment Guide

This guide covers multiple deployment options for the Spark Productions website.

## Quick Deploy Options

### 1. Vercel (Recommended) ⚡

**Fastest and easiest deployment with automatic HTTPS and global CDN.**

#### One-Click Deploy
1. Visit [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your GitHub repository
4. Vercel auto-detects Vite configuration
5. Click "Deploy"

#### CLI Deploy
```bash
npm install -g vercel
vercel
```

**Features:**
- Automatic HTTPS
- Global CDN
- Preview deployments for PRs
- Zero configuration needed

---

### 2. Netlify 🌐

**Great alternative with similar features to Vercel.**

#### One-Click Deploy
1. Visit [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy"

#### CLI Deploy
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

---

### 3. GitHub Pages 📄

**Free hosting directly from your GitHub repository.**

#### Setup Steps

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions

2. **Use the provided workflow**
   - The `.github/workflows/deploy.yml` is already set up
   - Every push to `master` branch triggers deployment

3. **Update vite.config.js** (if using custom domain)
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/spark-productions/', // Change to your repo name
   })
   ```

4. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages"
   git push origin master
   ```

5. **Access your site**
   - URL: `https://yourusername.github.io/spark-productions/`

---

### 4. AWS S3 + CloudFront ☁️

**For enterprise-level deployment with full control.**

#### Prerequisites
- AWS Account
- AWS CLI installed and configured

#### Steps
```bash
# Build the project
npm run build

# Create S3 bucket
aws s3 mb s3://spark-productions

# Enable static website hosting
aws s3 website s3://spark-productions \
  --index-document index.html \
  --error-document index.html

# Upload files
aws s3 sync dist/ s3://spark-productions --acl public-read

# Create CloudFront distribution (optional, for CDN)
aws cloudfront create-distribution \
  --origin-domain-name spark-productions.s3.amazonaws.com
```

---

### 5. Docker + Self-Hosted 🐳

**Deploy on your own server using Docker.**

#### Create Dockerfile
```dockerfile
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Create nginx.conf
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;
    gzip_comp_level 9;
}
```

#### Build and run
```bash
docker build -t spark-productions .
docker run -d -p 80:80 spark-productions
```

---

## Environment Variables

If you need to add environment variables:

1. Create `.env` file:
```env
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## Custom Domain Setup

### Vercel/Netlify
1. Go to project settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### GitHub Pages
1. Add `CNAME` file to `public/` folder with your domain
2. Update DNS records:
   ```
   Type: CNAME
   Name: @
   Value: yourusername.github.io
   ```

---

## Performance Optimization

### Build Optimizations (Already Applied)
- ✅ Code splitting
- ✅ CSS minification
- ✅ Asset optimization
- ✅ Tree shaking

### Additional Optimizations
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
```

---

## CI/CD Pipeline

The project includes a GitHub Actions workflow that:
- ✅ Runs on every push to master
- ✅ Installs dependencies
- ✅ Builds the project
- ✅ Deploys to GitHub Pages

You can extend this for other platforms or add testing steps.

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Assets Not Loading
- Check base URL in `vite.config.js`
- Ensure assets are in `public/` or properly imported

### Routing Issues (404 on refresh)
- Add redirect rules for your hosting provider
- For Netlify: Create `_redirects` in `public/`:
  ```
  /* /index.html 200
  ```

---

## Production Checklist

Before deploying to production:

- [ ] Test the build locally: `npm run build && npm run preview`
- [ ] Check all images load correctly
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check console for errors
- [ ] Test contact forms
- [ ] Verify SEO meta tags
- [ ] Set up analytics
- [ ] Configure custom domain
- [ ] Enable HTTPS
- [ ] Set up monitoring

---

## Support

For deployment issues:
- Check the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
- Review hosting provider documentation
- Contact: hello@sparkproductions.com
