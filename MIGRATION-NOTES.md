# EOPW Migration Notes (Cloudflare Pages)

## Form Handling Decision: Formspree Free Tier

**Recommendation:** Use Formspree's free tier for the "Get a Quote" form.

- **Cost:** $0/mo (50 submissions/month included — more than enough for a local pressure washing business)
- **Setup:** Change the form's `action` URL to the Formspree endpoint
- **Delivery:** Submissions sent directly to eastorlandopressurewashers@gmail.com
- **Downside:** Reply-to email shows as `notify@formspree.io` instead of your domain — but customers still see your phone number and can reply to your Gmail

### Alternative: Cloudflare Worker ($5/mo)

If sender branding matters (email comes from `quote@eastorlandopressurewashers.com`), a custom Cloudflare Worker function handles form submissions directly. More control, no third-party dependency, but costs $5/mo for Workers Paid plan.

## Domain Registration: Transfer to Cloudflare Registrar

**Current registrar:** HostGator (Launchpad.com Inc.) — expires October 21, 2026  
**Recommendation:** Transfer domain to Cloudflare Registrar ($9.15/year, no markup)

- **Cost:** $9.15/year for .com renewal with zero markup
- **Benefit:** Everything in one place (domain + DNS + hosting on Cloudflare)
- **Transfer process:** Takes 5-7 days; domain stays active during transfer
- **Current nameservers:** ns8493.hostgator.com / ns8494.hostgator.com — will be replaced by Cloudflare's

---

## Hosting: Cloudflare Pages

- **Cost:** Free tier (unlimited bandwidth, 500 builds/month)
- **Setup:** Connect GitHub repo or drag-and-drop upload
- **SSL:** Included free
- **DNS:** If domain already on Cloudflare DNS, seamless integration
