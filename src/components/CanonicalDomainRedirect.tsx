import { useEffect } from "react";

/**
 * Redirects visitors on the lovable.app preview/published host to the
 * canonical production domain (demandstreamdigital.com), preserving path,
 * query, and hash. Also injects a `noindex` meta tag while on lovable.app so
 * Google de-indexes the duplicate host.
 *
 * Note: this is a client-side (JS) redirect, not a true HTTP 301. Lovable
 * hosting does not support server-side redirects. Search engines treat a
 * persistent JS redirect plus noindex as a soft 301 over time.
 */
const CANONICAL_HOST = "demandstreamdigital.com";
const LOVABLE_HOST_SUFFIX = ".lovable.app";

const CanonicalDomainRedirect = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const host = window.location.hostname;
    // Only act on the published lovable.app host. Skip id-preview and live
    // sandbox previews so the in-app preview keeps working for editors.
    const isPublishedLovableHost =
      host.endsWith(LOVABLE_HOST_SUFFIX) && !host.startsWith("id-preview--");

    if (!isPublishedLovableHost) return;

    // Inject noindex so the duplicate host drops out of the index.
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    const target = `https://${CANONICAL_HOST}${window.location.pathname}${window.location.search}${window.location.hash}`;
    window.location.replace(target);
  }, []);

  return null;
};

export default CanonicalDomainRedirect;
