/**
 * SEOHead — centralised meta tag component for all pages.
 *
 * Props
 * ─────────────────────────────────────────────────────────────────────
 * title       – Page <title>. Required.
 * description – Meta description. Required.
 * canonical   – Canonical URL (full https://…). Required.
 * ogImage     – og:image URL. Falls back to a topic image chosen from the URL path.
 * ogType      – og:type. Defaults to "website".
 * noIndex     – Set true to emit <meta name="robots" content="noindex, nofollow">.
 * schemaJson  – Serialisable JSON-LD object or array of objects.
 * keywords    – Deprecated, kept for API compatibility but not rendered.
 * hrefLangs   – Deprecated, kept for API compatibility but not rendered.
 */

import { Helmet } from "react-helmet-async";
import { SITE_URL } from "@/lib/constants";
import { normalizeSchema, getDefaultPageSchema } from "@/lib/schemaNormalize";

const SITE_NAME = "DemandStream Digital";

// Real pixel sizes of the files in /public/og-images (measured Oct 2026).
// og:image:width/height are only emitted for images listed here.
const OG_DIMENSIONS: Record<string, [number, number]> = {
  "about.jpg": [696, 1024], "ai-search-optimization.jpg": [1536, 1024], "author.jpg": [1200, 630],
  "authority-building.jpg": [1280, 720], "blog.jpg": [1200, 630], "case-studies.jpg": [1200, 630],
  "contact.png": [1732, 1505], "content-marketing.jpg": [1280, 720], "email-marketing.jpg": [1280, 720],
  "gbp-seo.jpg": [1280, 720], "google-ads.jpg": [1280, 720], "homepage.jpg": [1536, 1024],
  "hvac-ai-search-optimization.jpg": [1536, 1024], "local-seo.jpg": [1280, 720],
  "local-service-ads.jpg": [1280, 720], "meta-ads.jpg": [1280, 720], "paid-media.jpg": [1280, 720],
  "plumbing-ai-search-optimization.jpg": [1536, 1024], "privacy.jpg": [1200, 630], "reporting.jpg": [1280, 720],
  "services.jpg": [1200, 630], "terms.jpg": [1200, 630], "testimonials.jpg": [1200, 630], "thank-you.jpg": [1200, 630],
  "auction-house-hero.jpg": [1920, 1080], "dallas-plumbing-hero.jpg": [1920, 1080], "las-vegas-plumbing-hero.jpg": [1920, 1080],
  "florida-photography-hero.jpg": [1920, 1080], "custom-home-builder-hero.jpg": [1920, 1088],
  "tourist-vehicle-rentals-hero.jpg": [1920, 1088], "barn-restoration-hero.jpg": [1024, 576],
  "recreational-boating-hero.jpg": [1024, 576], "partner-tools.png": [1920, 1080],
};
const DEFAULT_OG_FILE = "services.jpg";

// Topic image per URL path when a page does not pass its own (first match wins).
const OG_BY_PATH: [RegExp, string][] = [
  [/^\/$/, "homepage.jpg"],
  [/^\/case-studies\/dallas-plumbing/, "dallas-plumbing-hero.jpg"],
  [/^\/case-studies\/las-vegas-plumbing/, "las-vegas-plumbing-hero.jpg"],
  [/^\/case-studies\/auction-house/, "auction-house-hero.jpg"],
  [/^\/case-studies\/florida-photography/, "florida-photography-hero.jpg"],
  [/^\/case-studies\/custom-home-builder/, "custom-home-builder-hero.jpg"],
  [/^\/case-studies\/tourist-vehicle/, "tourist-vehicle-rentals-hero.jpg"],
  [/^\/case-studies/, "case-studies.jpg"],
  [/local-service-ads/, "local-service-ads.jpg"],
  [/(facebook|instagram)-advertising/, "meta-ads.jpg"],
  [/search-ads|paid-advertising|ppc|google-ads/, "google-ads.jpg"],
  [/paid-marketing|paid-ads|linkedin-advertising|programmatic/, "paid-media.jpg"],
  [/^\/hvac-ai-search/, "hvac-ai-search-optimization.jpg"],
  [/^\/plumbing-ai-search/, "plumbing-ai-search-optimization.jpg"],
  [/ai-search|ai-automation/, "ai-search-optimization.jpg"],
  [/google-maps/, "gbp-seo.jpg"],
  [/email-marketing/, "email-marketing.jpg"],
  [/content-marketing/, "content-marketing.jpg"],
  [/authority-building/, "authority-building.jpg"],
  [/reporting/, "reporting.jpg"],
  [/seo/, "local-seo.jpg"],
  [/^\/(our-)?blog/, "blog.jpg"],
  [/^\/authors/, "author.jpg"],
  [/^\/testimonials/, "testimonials.jpg"],
  [/^\/privacy/, "privacy.jpg"],
  [/^\/terms/, "terms.jpg"],
  [/^\/(contact|free-audit)/, "contact.png"],
];

const resolveOgImage = (ogImage: string | undefined, canonical: string): { url: string; dims?: [number, number] } => {
  let url = ogImage;
  if (url && url.startsWith("/")) url = `${SITE_URL}${url}`;
  const ogFile = url && url.startsWith(`${SITE_URL}/og-images/`) ? url.slice(`${SITE_URL}/og-images/`.length) : null;
  // A local og-images file that does not exist (e.g. default.png, blog.png) falls back to the path map
  if (!url || (ogFile !== null && !OG_DIMENSIONS[ogFile])) {
    const path = canonical.replace(SITE_URL, "") || "/";
    const hit = OG_BY_PATH.find(([re]) => re.test(path));
    const file = hit ? hit[1] : DEFAULT_OG_FILE;
    return { url: `${SITE_URL}/og-images/${file}`, dims: OG_DIMENSIONS[file] };
  }
  return { url, dims: ogFile ? OG_DIMENSIONS[ogFile] : undefined };
};

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  schemaJson?: object | object[];
  keywords?: string;
  hrefLangs?: unknown;
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  noIndex = false,
  schemaJson,
}: SEOHeadProps) => {
  // One normalized @graph per page; pages without their own schema get a WebPage graph.
  const graph = schemaJson
    ? normalizeSchema(schemaJson)
    : noIndex
    ? null
    : getDefaultPageSchema({ url: canonical, title, description });
  const schemaBlocks: object[] = graph ? [graph] : [];
  const og = resolveOgImage(ogImage, canonical);

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* ── Robots ── */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* ── Open Graph ── */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={og.url} />
      {og.dims && <meta property="og:image:width" content={String(og.dims[0])} />}
      {og.dims && <meta property="og:image:height" content={String(og.dims[1])} />}
      <meta property="og:image:alt" content={title} />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={og.url} />

      {/* ── JSON-LD Schema ── */}
      {schemaBlocks.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
