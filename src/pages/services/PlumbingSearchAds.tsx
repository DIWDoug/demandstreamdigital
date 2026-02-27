import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import PlumbingSearchAdsHero from "@/components/services/plumbing-search-ads/PlumbingSearchAdsHero";
import PlumbingSearchAdsPPCFails from "@/components/services/plumbing-search-ads/PlumbingSearchAdsPPCFails";
import PlumbingSearchAdsCampaignArchitecture from "@/components/services/plumbing-search-ads/PlumbingSearchAdsCampaignArchitecture";
import PlumbingSearchAdsGeoTerritory from "@/components/services/plumbing-search-ads/PlumbingSearchAdsGeoTerritory";
import PlumbingSearchAdsMobileAndCalls from "@/components/services/plumbing-search-ads/PlumbingSearchAdsMobileAndCalls";
import PlumbingSearchAdsMetrics from "@/components/services/plumbing-search-ads/PlumbingSearchAdsMetrics";
import PlumbingSearchAdsServiceTitan from "@/components/services/plumbing-search-ads/PlumbingSearchAdsServiceTitan";
import PlumbingSearchAdsPMax from "@/components/services/plumbing-search-ads/PlumbingSearchAdsPMax";
import PlumbingSearchAdsSEOIntegration from "@/components/services/plumbing-search-ads/PlumbingSearchAdsSEOIntegration";
import PlumbingSearchAdsFAQ from "@/components/services/plumbing-search-ads/PlumbingSearchAdsFAQ";
import PlumbingSearchAdsFitExclusivity from "@/components/services/plumbing-search-ads/PlumbingSearchAdsFitExclusivity";
import PlumbingSearchAdsContactForm from "@/components/services/plumbing-search-ads/PlumbingSearchAdsContactForm";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const anchorItems = [
  { label: "Why PPC Fails", href: "#why-ppc-fails" },
  { label: "Campaign Architecture", href: "#campaign-architecture" },
  { label: "Geo & Territory", href: "#geo-territory" },
  { label: "Mobile & Calls", href: "#mobile-calls" },
  { label: "Metrics", href: "#metrics" },
  { label: "Performance Max", href: "#performance-max" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "Plumbing Search Advertising Built to Drive More Booked Service Calls | DemandStream Digital";
const metaDescription = "Generic plumbing PPC wastes budget on clicks. We build campaigns around booked calls, service area control, and cost per booked call. See how.";
const canonicalUrl = `${SITE_URL}/plumbing-search-ads/`;

const PlumbingSearchAds = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plumbing Search Advertising",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "Plumbing Search Advertising Service",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "Plumber",
      "name": "Demand Stream Digital",
      "url": SITE_URL
    }
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en-US" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en-CA" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
      </Helmet>

      <Header />

      <div className="pt-16">
        <PlumbingSearchAdsHero />
      </div>

      <ServiceHubAnchorNav items={anchorItems} />

      <PlumbingSearchAdsPPCFails />
      <SectionDivider />
      <PlumbingSearchAdsCampaignArchitecture />
      <SectionDivider />
      <PlumbingSearchAdsGeoTerritory />
      <SectionDivider />
      <PlumbingSearchAdsMobileAndCalls />
      <SectionDivider />
      <PlumbingSearchAdsMetrics />
      <SectionDivider />
      <PlumbingSearchAdsServiceTitan />
      <SectionDivider />
      <PlumbingSearchAdsPMax />
      <SectionDivider />
      <PlumbingSearchAdsSEOIntegration />
      <SectionDivider />
      <PlumbingSearchAdsFAQ />
      <PlumbingSearchAdsFitExclusivity />
      <PlumbingSearchAdsContactForm />

      <Footer />
    </div>
  );
};

export default PlumbingSearchAds;
