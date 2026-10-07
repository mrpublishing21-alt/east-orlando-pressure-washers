# EOPW Cloudflare Deployment Plan
**eastorlandopressurewashers.com** — Migration from HostGator to Cloudflare Pages

---

## Prerequisites Checklist

Before starting, make sure you have:
- [ ] **Cloudflare account** (free at cloudflare.com)
- [ ] **Domain registered** with HostGator (expires Oct 21, 2026 — transfer recommended)
- [ ] **eopw-cloudflare.zip** ready in `~/Downloads/` (11.4 MB, 91 files)

---

## Step 1: Create Cloudflare Pages Project

1. Log into your Cloudflare dashboard
2. Go to **Pages** → **Create a project**
3. Select **"Direct Upload"** (since we're not using GitHub)
4. Name your project: `east-orlando-pressure-washers`
5. Click **Continue**

---

## Step 2: Upload Site Files

1. Drag the entire `eopw-cloudflare.zip` file into the upload box
   - OR click **"Select from computer"** and choose the zip
2. Cloudflare will automatically unzip and deploy
3. Wait for deployment to complete (~30 seconds)
4. You'll get a temporary URL like: `east-orlando-pressure-washers.pages.dev`

**Verify the site works:** Open that temporary URL in your browser. Check:
- Homepage loads with hero video/images
- Navigation links work (services, gallery, about, contact)
- Service subpages load (driveway-cleaning.html, etc.)
- Location pages load (avalon-park.html, etc.)
- Gallery page shows images correctly

---

## Step 3: Connect Your Domain

### Option A: Keep domain on HostGator (faster, no transfer needed)

1. In your Pages project, click **"Add Custom Domain"**
2. Enter `eastorlandopressurewashers.com` and `www.eastorlandopressurewashers.com`
3. Cloudflare will show you the nameservers to use:
   - `cody.ns.cloudflare.com`
   - `dorthy.ns.cloudflare.com`

4. **Switch HostGator nameservers:**
   - Log into HostGator → **Domains** → **Manage DNS** (or cPanel → Nameserver Settings)
   - Replace existing nameservers with Cloudflare's two addresses above
   - Save changes
   
5. Wait for DNS propagation (up to 48 hours, usually faster)

### Option B: Transfer domain to Cloudflare (recommended long-term)

1. In HostGator, unlock the domain and get the EPP transfer code
2. In Cloudflare, go to **Register** → **Transfer Domain**
3. Enter `eastorlandopressurewashers.com` + transfer code
4. Pay $9.15/year (Cloudflare charges zero markup)
5. Domain transfers in 5-7 days while staying live

---

## Step 4: Configure DNS Records

After connecting the domain, verify these records exist in Cloudflare:

| Type | Name | Content | Proxy Status |
|------|------|---------|--------------|
| A | @ | Your server IP (auto-filled) | Proxied (orange cloud ON) |
| CNAME | www | east-orlando-pressure-washers.pages.dev | Proxied (orange cloud ON) |

**Email records to preserve:**
- SPF record: `v=spf1 a mx include:websitewelcome.com ~all`
- MX records for email routing
- DKIM/DMARC TXT records

---

## Step 5: Set Up Contact Form (Formspree)

The current form tries to POST to `send-quote.php` which won't work on Cloudflare Pages. Switch to **Formspree** (free tier):

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → get your endpoint URL like: `https://formspree.io/f/xnqkvpzy`
3. Open `~/Downloads/contact.html` in a text editor
4. Find the `<form>` tag and change:
   ```html
   <!-- FROM -->
   <form id="quoteForm" action="send-quote.php" method="POST">
   
   <!-- TO -->
   <form id="quoteForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Save the file and re-upload to Cloudflare

**Result:** Form submissions go directly to `eastorlandopressurewashers@gmail.com`

---

## Step 6: Post-Deployment Verification

After everything is live, check:

### Site Functionality
- [ ] Homepage loads correctly (hero video/images)
- [ ] All navigation links work
- [ ] Service pages load (6 total)
- [ ] Location pages load (5 total)
- [ ] Gallery page shows images
- [ ] Contact form submits successfully
- [ ] Mobile menu works on phones

### SEO & Search Console
- [ ] Google Search Console updated with new deployment date
- [ ] Resubmit sitemap.xml to GSC
- [ ] Check for any crawl errors in 48 hours
- [ ] Verify breadcrumbs schema is valid (no stale errors)

### Performance
- [ ] PageSpeed Insights score checked
- [ ] Images load correctly on mobile
- [ ] SSL certificate active (HTTPS works)

---

## Timeline & Order of Operations

| Step | Time Required | Notes |
|------|---------------|-------|
| Create Pages project + upload zip | 5 minutes | Quick win, get site live immediately |
| Connect custom domain | 10 minutes setup, up to 48h propagation | DNS changes take time |
| Set up Formspree form | 10 minutes | Do before launch so contact works |
| Verify everything | 15 minutes | Test all pages on desktop + mobile |
| Update GSC sitemap | 5 minutes | After domain is live |

**Recommended order:**
1. Upload zip → get site live on temporary URL (immediate)
2. Set up Formspree form → test contact works
3. Connect custom domain → wait for DNS propagation
4. Final verification + update GSC

---

## Troubleshooting

### Images not loading after upload
- Check that `images/` and `images-seo/` folders are in the zip root (not nested)
- Verify HTML references use relative paths like `../images/photo.webp`

### 404 errors on subpages
- Cloudflare Pages requires exact file structure matching URLs
- `/services/driveway-cleaning.html` must be at that exact path in the zip

### Form not submitting
- Make sure you replaced `send-quote.php` with your Formspree URL
- Check browser console for any JavaScript errors

### DNS not propagating
- Use [whatsmydns.net](https://www.whatsmydns.net) to check propagation status
- Clear browser cache or try incognito mode
- Try accessing site via temporary URL first to confirm deployment worked

---

## Files Included in eopw-cloudflare.zip (91 total)

**Root level (9 files):**
- `index.html` — Homepage (57KB optimized build)
- `services.html` — Services overview page
- `faq.html` — FAQ page
- `gallery.html` — Before/after gallery
- `about.html` — About page
- `contact.html` — Contact form
- `main.js` — JavaScript functionality
- `sitemap.xml` — Google sitemap (17 pages)
- `style.css` — Stylesheet

**services/ folder (6 files):**
- `driveway-cleaning.html`
- `walkway-cleaning.html`
- `pool-deck-cleaning.html`
- `patio-lanai-cleaning.html`
- `fence-cleaning.html`
- `house-soft-wash.html`

**locations/ folder (5 files):**
- `avalon-park.html`
- `waterford-lakes.html`
- `cypress-springs.html`
- `oviedo.html`
- `winter-park.html`

**images/ folder (56 files):**
- All .webp primary images + .jpg/.png fallbacks
- Hero video, logo, social share image

**js/ folder (1 file):**
- `main.js` — Form handling + mobile menu

**images-seo/ folder (14 files):**
- SEO-named gallery images for services/gallery pages

---

## Post-Migration Notes

### What to do after HostGator cancels:
- Keep HostGator account active until DNS fully propagates AND site is verified working on Cloudflare
- Once confirmed, cancel HostGator hosting (domain stays registered there unless you transfer)
- Consider transferring domain to Cloudflare Registrar ($9.15/year, no markup) for everything in one place

### Ongoing maintenance:
- Updates: Re-upload zip whenever you change files
- Backups: Keep local copies of all HTML files
- Monitoring: Check GSC monthly for crawl errors or performance drops
