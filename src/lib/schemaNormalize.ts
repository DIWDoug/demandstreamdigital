// Sitewide JSON-LD normalizer (schema audit fix, Oct 2026).
// Every page's schema passes through here so the business entity is defined one way:
// one Organization (@id /#organization) with one name, no self-asserted ratings,
// and no dangling /#organization or /#website references.
import { SITE_URL } from "./constants";
import { getOrganizationSchema, getWebSiteSchema } from "./schema";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOCALBUSINESS_ID = `${SITE_URL}/#localbusiness`;
const OUR_NAME = /^demand\s?stream\s+digital(\s+llc)?$/i;
const BUSINESS_TYPES = ["Organization", "LocalBusiness", "HVACBusiness", "Plumber", "ProfessionalService", "HomeAndConstructionBusiness"];
// Keys we always take from the canonical Organization, never from a page copy
const ORG_LOCKED_KEYS = new Set(["@type", "@id", "name", "legalName", "alternateName", "url", "logo", "image", "email", "telephone", "address", "sameAs", "aggregateRating"]);

type Json = any;

const typesOf = (n: Json): string[] => {
  const t = n && typeof n === "object" ? n["@type"] : undefined;
  return Array.isArray(t) ? t : t ? [t] : [];
};

const isOurBusiness = (n: Json): boolean => {
  if (!n || typeof n !== "object" || Array.isArray(n)) return false;
  if (n["@id"] === ORG_ID || n["@id"] === LOCALBUSINESS_ID) return true;
  const isBizType = typesOf(n).some((t) => BUSINESS_TYPES.includes(t));
  return isBizType && typeof n.name === "string" && OUR_NAME.test(n.name.trim());
};

const isRefOnly = (n: Json) => n && typeof n === "object" && !Array.isArray(n) && Object.keys(n).length === 1 && "@id" in n;

/** Deep-clean nested values: business mentions become a reference, ratings are dropped, names unified. */
const cleanNested = (v: Json): Json => {
  if (Array.isArray(v)) return v.map(cleanNested);
  if (!v || typeof v !== "object") return v;
  if (isOurBusiness(v)) return { "@id": ORG_ID };
  const out: Json = {};
  for (const [k, val] of Object.entries(v)) {
    if (k === "@context") continue;
    if (k === "@id" && val === LOCALBUSINESS_ID) { out[k] = ORG_ID; continue; }
    out[k] = cleanNested(val);
  }
  return out;
};

/** Top-level graph node: our business nodes merge into the one canonical Organization. */
const cleanTop = (n: Json): Json => {
  if (isOurBusiness(n)) {
    const base: Json = getOrganizationSchema();
    for (const [k, val] of Object.entries(n)) {
      if (k === "@context" || ORG_LOCKED_KEYS.has(k) || k === "geo" || k === "priceRange" || k === "openingHoursSpecification") continue;
      if (!(k in base)) base[k] = cleanNested(val);
    }
    return base;
  }
  return cleanNested(n);
};

const collectNodes = (blocks: Json[]): Json[] => {
  const nodes: Json[] = [];
  for (const b of blocks) {
    if (!b || typeof b !== "object") continue;
    if (Array.isArray(b)) { nodes.push(...collectNodes(b)); continue; }
    if (Array.isArray(b["@graph"])) nodes.push(...b["@graph"]);
    else nodes.push(b);
  }
  return nodes;
};

const hasRef = (v: Json, id: string): boolean => {
  if (Array.isArray(v)) return v.some((x) => hasRef(x, id));
  if (!v || typeof v !== "object") return false;
  return Object.entries(v).some(([k, val]) => (k === "@id" && val === id) || hasRef(val, id));
};

/**
 * Normalize one or more JSON-LD blocks into a single @graph block.
 * Returns null when there is nothing to output.
 */
export const normalizeSchema = (schema: Json | Json[] | undefined | null): Json | null => {
  if (!schema) return null;
  const raw = collectNodes(Array.isArray(schema) ? schema : [schema]);
  const graph: Json[] = [];
  const seen = new Set<string>();
  for (const r of raw) {
    const n = cleanTop(r);
    if (isRefOnly(n)) continue;
    const id = n["@id"];
    if (id && seen.has(id)) continue; // first definition wins (Organization is identical everywhere)
    if (id) seen.add(id);
    graph.push(n);
  }
  if (!graph.length) return null;
  const definesOrg = graph.some((n) => n["@id"] === ORG_ID);
  const definesSite = graph.some((n) => n["@id"] === WEBSITE_ID);
  if (!definesSite && hasRef(graph, WEBSITE_ID)) graph.unshift(getWebSiteSchema());
  if (!definesOrg && hasRef(graph, ORG_ID)) graph.unshift(getOrganizationSchema());
  return { "@context": "https://schema.org", "@graph": graph };
};

export const serializeSchema = (schema: Json | Json[]): string => JSON.stringify(normalizeSchema(schema) || {});

/** Fallback graph for pages that ship no schema of their own. */
export const getDefaultPageSchema = (opts: { url: string; title: string; description: string; type?: string }) => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    getWebSiteSchema(),
    {
      "@type": opts.type || "WebPage",
      "@id": `${opts.url}#webpage`,
      "url": opts.url,
      "name": opts.title,
      "description": opts.description,
      "isPartOf": { "@id": WEBSITE_ID },
      "about": { "@id": ORG_ID },
      "publisher": { "@id": ORG_ID },
      "inLanguage": "en-US",
    },
  ],
});

