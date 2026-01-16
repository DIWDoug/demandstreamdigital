# Cloudflare Worker for URL Routing

This Cloudflare Worker integrates with the Supabase `url-router` edge function to provide proper HTTP status codes:

- **301 Permanent Redirects** for legacy URLs
- **404 Not Found** responses for unknown paths
- **Passthrough** for valid routes

## How It Works

1. Request comes to your domain (e.g., `dialedinweb.com/nashville-seo`)
2. Worker intercepts and queries the `url-router` edge function
3. Edge function returns routing instructions (redirect, 404, or passthrough)
4. Worker serves the appropriate HTTP response with correct status code

## Prerequisites

1. Cloudflare account with your domain configured
2. [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed

```bash
npm install -g wrangler
```

## Deployment Steps

### 1. Authenticate with Cloudflare

```bash
wrangler login
```

### 2. Update Configuration

Edit `wrangler.toml`:
- Uncomment the `routes` section
- Update with your domain name

```toml
routes = [
  { pattern = "dialedinweb.com/*", zone_name = "dialedinweb.com" },
  { pattern = "www.dialedinweb.com/*", zone_name = "dialedinweb.com" }
]
```

### 3. Deploy

```bash
cd cloudflare-worker
wrangler deploy
```

### 4. Verify

Test the deployment:

```bash
# Should return 301 redirect
curl -I https://dialedinweb.com/nashville-seo

# Should return 404
curl -I https://dialedinweb.com/fake-page-that-doesnt-exist

# Should return 200
curl -I https://dialedinweb.com/white-label-local-seo
```

## Configuration Options

### Environment Variables

You can set these in the Cloudflare dashboard or `wrangler.toml`:

| Variable | Description | Default |
|----------|-------------|---------|
| `ORIGIN_URL` | Your Lovable published URL | `https://heart-crafted-shine.lovable.app` |

### Caching

- Redirects are cached for 24 hours
- 404 responses are cached for 1 hour
- Static assets bypass the router entirely

## Troubleshooting

### View Logs

```bash
wrangler tail
```

### Test Locally

```bash
wrangler dev
```

### Check Edge Function

```bash
curl -X POST https://bomcaceohbkavyjsdpls.supabase.co/functions/v1/url-router \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -d '{"pathname": "/nashville-seo"}'
```

## WWW to Non-WWW Redirect

To fix the 302 → 301 issue for www redirects, add a Page Rule in Cloudflare:

1. Go to **Rules** → **Page Rules**
2. Add rule: `www.dialedinweb.com/*`
3. Setting: **Forwarding URL** (301 - Permanent Redirect)
4. Destination: `https://dialedinweb.com/$1`

Or add to the worker:

```javascript
// Add at the top of the fetch handler
if (url.hostname.startsWith('www.')) {
  const newUrl = new URL(url);
  newUrl.hostname = newUrl.hostname.replace('www.', '');
  return Response.redirect(newUrl.toString(), 301);
}
```

## Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  User Request   │────▶│ Cloudflare Worker│────▶│ url-router Edge │
│ dialedinweb.com │     │   (this file)    │     │    Function     │
└─────────────────┘     └────────┬─────────┘     └────────┬────────┘
                                 │                        │
                                 │◀───────────────────────┘
                                 │   {action, status, location}
                                 ▼
                    ┌────────────────────────────┐
                    │ Response with correct HTTP │
                    │ status code (301/404/200)  │
                    └────────────────────────────┘
```
