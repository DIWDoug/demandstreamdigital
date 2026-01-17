# DNS Migration & Cloudflare Worker Deployment Guide

This guide walks you through migrating dialedinweb.com to Cloudflare and deploying the URL routing worker for proper SEO status codes (301 redirects, 404s).

---

## Prerequisites

- [ ] Domain registrar access (where you purchased dialedinweb.com)
- [ ] Cloudflare account (free tier works)
- [ ] Node.js installed locally
- [ ] Wrangler CLI installed (`npm install -g wrangler`)

---

## Step 1: Add Domain to Cloudflare

1. **Log in to Cloudflare** → [dash.cloudflare.com](https://dash.cloudflare.com)

2. **Click "Add a Site"** → Enter `dialedinweb.com`

3. **Select Free Plan** (sufficient for this use case)

4. **Cloudflare will scan existing DNS records** → Review and continue

---

## Step 2: Configure DNS Records

In Cloudflare DNS settings, ensure these records exist with **Proxy Status: Proxied (orange cloud)**:

| Type | Name | Content | Proxy Status |
|------|------|---------|--------------|
| A | @ | 185.158.133.1 | ☁️ Proxied |
| A | www | 185.158.133.1 | ☁️ Proxied |
| TXT | _lovable | lovable_verify=YOUR_CODE | DNS only |

> ⚠️ **Critical**: Both A records MUST be proxied (orange cloud) for the Worker to intercept traffic.

### Optional Records to Add
If you have email (MX records), SPF, DKIM, or DMARC records, add those too.

---

## Step 3: Install Wrangler CLI

```bash
npm install -g wrangler
```

---

## Step 4: Authenticate with Cloudflare

```bash
wrangler login
```

This opens a browser window to authorize Wrangler.

---

## Step 5: Create wrangler.toml

Create `cloudflare-worker/wrangler.toml`:

```toml
name = "dialedinweb-router"
main = "worker.js"
compatibility_date = "2024-01-01"

routes = [
  { pattern = "dialedinweb.com/*", zone_name = "dialedinweb.com" },
  { pattern = "www.dialedinweb.com/*", zone_name = "dialedinweb.com" }
]

[vars]
ENVIRONMENT = "production"
```

---

## Step 6: Deploy the Worker

```bash
cd cloudflare-worker
wrangler deploy
```

Expected output:
```
Uploading dialedinweb-router...
Published dialedinweb-router (1.23 sec)
  dialedinweb.com/*
  www.dialedinweb.com/*
```

---

## Step 7: Update Nameservers (THE BIG SWITCH)

⚠️ **This is when your domain switches to Cloudflare. Do this during low-traffic hours.**

1. **In Cloudflare**, go to your domain → **DNS** → Note the assigned nameservers:
   - Example: `ada.ns.cloudflare.com`
   - Example: `bob.ns.cloudflare.com`

2. **Log in to your domain registrar** (GoDaddy, Namecheap, Google Domains, etc.)

3. **Find Nameserver settings** → Usually under "DNS" or "Nameservers"

4. **Replace existing nameservers** with Cloudflare's nameservers

5. **Save changes**

---

## Step 8: Wait for Propagation

DNS propagation takes **15 minutes to 48 hours** depending on TTL settings.

### Check Propagation Status

Use these tools to verify:
- [dnschecker.org](https://dnschecker.org) → Check A record for dialedinweb.com
- [whatsmydns.net](https://whatsmydns.net) → Global DNS propagation

---

## Step 9: Verify Worker is Active

Once propagated, test the worker:

```bash
# Should return 301 redirect
curl -I https://dialedinweb.com/tag/seo

# Should return 301 redirect (www to non-www)
curl -I https://www.dialedinweb.com/

# Should return 404
curl -I https://dialedinweb.com/nonexistent-page-xyz

# Should return 200 (valid route)
curl -I https://dialedinweb.com/white-label-local-seo
```

---

## Step 10: Verify Lovable Domain Settings

After DNS propagation:

1. Go to **Lovable Project Settings → Domains**
2. Ensure `dialedinweb.com` shows as **Active**
3. If status shows **Offline**, wait for full propagation or re-verify

---

## Troubleshooting

### Worker Not Intercepting Requests

1. Verify DNS records are **Proxied** (orange cloud), not DNS-only
2. Check Worker routes in Cloudflare dashboard → Workers & Pages → Your Worker → Triggers
3. Ensure routes match: `dialedinweb.com/*` and `www.dialedinweb.com/*`

### 522/523 Errors

Origin (Lovable) is unreachable. Check:
- Lovable service status
- Correct A record IP (185.158.133.1)

### SSL Certificate Errors

Cloudflare handles SSL automatically. In Cloudflare SSL/TLS settings:
- Set mode to **Full** (not Full Strict, since Lovable manages its own cert)

### Redirects Not Working

1. Check Worker logs: Cloudflare Dashboard → Workers → Your Worker → Logs
2. Verify edge function is deployed: Test at `https://bomcaceohbkavyjsdpls.supabase.co/functions/v1/url-router`

---

## Rollback Plan

If something goes wrong, revert nameservers to your registrar's defaults:
1. Log into domain registrar
2. Change nameservers back to registrar defaults
3. Wait for propagation (up to 48 hours)

---

## Post-Migration Checklist

- [ ] WWW redirects to non-WWW with 301
- [ ] Legacy URLs return 301 (not 200 soft 404)
- [ ] Unknown URLs return 404 (not 200)
- [ ] Valid routes return 200
- [ ] SSL working on both www and non-www
- [ ] Lovable domain status shows Active
- [ ] Run Screaming Frog crawl to verify status codes
