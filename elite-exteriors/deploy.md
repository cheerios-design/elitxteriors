# Deployment Guide: Elite Exteriors VA

## Phase 1: Netlify Setup

### 1. Create Netlify Account & Connect Repository

```bash
# If using Netlify CLI (optional)
npm install -g netlify-cli
netlify login
```

### 2. Manual Deployment via Netlify Dashboard

1. Go to [netlify.com](https://netlify.com) and sign up/log in
2. Click "Add new site" → "Import an existing project"
3. Connect your Git provider (GitHub/GitLab)
4. Select the `elitxteriors` repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** `18`

### 3. Environment Variables (Netlify Dashboard)

Add these in Site Settings → Environment Variables:

```
NODE_VERSION=18
NPM_VERSION=9
NEXT_TELEMETRY_DISABLED=1
```

## Phase 2: Domain Configuration

### 1. Netlify Domain Setup

1. In Netlify Dashboard → Site Settings → Domain Management
2. Click "Add custom domain"
3. Enter: `elitexteriorsva.com`
4. Netlify will provide DNS records

### 2. GoDaddy DNS Configuration

Log into GoDaddy and update DNS records:

**A Records:**

```
Type: A
Name: @
Value: 75.2.60.5
TTL: 600
```

**CNAME Records:**

```
Type: CNAME
Name: www
Value: elitexteriorsva.netlify.app
TTL: 600
```

**Netlify DNS Records (copy from Netlify dashboard):**

- Usually includes NS records or CNAME for apex domain

### 3. SSL Certificate

- Netlify automatically provisions SSL certificates
- This may take 24-48 hours to propagate

## Phase 3: Deployment Verification

### 1. Build Test

```bash
cd "d:\elitxteriors\elite-exteriors"
npm run build
```

### 2. Performance Check

- Test site speed: [PageSpeed Insights](https://pagespeed.web.dev/)
- Expected Lighthouse score: 90+
- Expected load time: <2 seconds

### 3. SEO Verification

- Check meta tags
- Verify sitemap.xml accessibility
- Test social media previews

## Phase 4: Post-Deployment Tasks

### 1. Analytics Setup

- Update Google Analytics ID in `.env.production`
- Add Google Search Console

### 2. Monitoring

- Set up Netlify notifications
- Monitor Core Web Vitals

### 3. Backup Strategy

- Repository is already backed up via Git
- Netlify maintains deployment history

## Expected Timeline

- **Netlify Setup:** 15-30 minutes
- **DNS Propagation:** 24-48 hours
- **SSL Certificate:** Automatic (up to 24 hours)
- **Full Go-Live:** 1-2 days

## Troubleshooting

### Common Issues:

1. **Build Failures:** Check Node version compatibility
2. **DNS Issues:** Allow 24-48 hours for propagation
3. **SSL Problems:** Contact Netlify support if not auto-provisioned
4. **404 Errors:** Verify `.next` publish directory

### Support Contacts:

- Netlify Support: [support.netlify.com](https://support.netlify.com)
- GoDaddy DNS Help: [godaddy.com/help](https://godaddy.com/help)

## Performance Optimizations Already Applied:

✅ Image optimization configured
✅ Compression enabled
✅ Static asset caching
✅ Security headers
✅ Bundle optimization
✅ Loading states for better UX

Your site is production-ready! 🚀
