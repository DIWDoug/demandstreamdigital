/**
 * SEOHead — centralised meta tag component for all pages.
 *
 * Renders into <head> via react-helmet-async. All pages should use this
 * component instead of writing <Helmet> blocks inline.
 *
 * Props
 * ─────────────────────────────────────────────────────────────────────
 * title       – Page <title>. Required.
 * description – Meta description. Required.
 * canonical   – Canonical URL (full https://…). Required.
 * ogImage     – og:image URL. Falls back to the brand OG image.
 * ogType      – og:type. Defaults to "website".
 * noIndex     – Set true to emit <meta name="robots" content="noindex, nofollow">.
 * schemaJson  – Serialisable JSON-LD object or array of objects.
 *               Accepts a single schema object OR an @graph wrapper object.
 * keywords    – Optional meta keywords string.
 * hrefLangs   – Optional array of { hrefLang, href } for alternate links.
 *               Defaults to en-US + x-default pointing at `canonical`.
 */

import { Helmet } from "react-helmet-async";
import { SITE_URL } from "@/lib/constants";

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-images/default.png`;
const SITE_NAME = "Demand Stream Digital";

interface HrefLang {
  hrefLang: string;
  href: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  schemaJson?: object | object[];
  keywords?: string;
  hrefLangs?: HrefLang[];
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
  schemaJson,
  keywords,
  hrefLangs,
}: SEOHeadProps) => {
  // Default hrefLang to en-US + x-default pointing at canonical
  const resolvedHrefLangs: HrefLang[] = hrefLangs ?? [
    { hrefLang: "en-US", href: canonical },
    { hrefLang: "x-default", href: canonical },
  ];

  // Normalise schemaJson: always serialise as an array for clean output.
  // If it has an @graph property we serialise as-is (already a graph wrapper).
  const schemaBlocks: object[] = !schemaJson
    ? []
    : Array.isArray(schemaJson)
    ? schemaJson
    : [schemaJson];

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* ── Robots ── */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* ── Hreflang ── */}
      {resolvedHrefLangs.map(({ hrefLang, href }) => (
        <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
      ))}

      {/* ── Open Graph ── */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

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
