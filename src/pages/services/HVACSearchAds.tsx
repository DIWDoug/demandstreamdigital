import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import HVACSearchAdsHero from "@/components/services/hvac-search-ads/HVACSearchAdsHero";
import HVACSearchAdsPPCFails from "@/components/services/hvac-search-ads/HVACSearchAdsPPCFails";
import HVACSearchAdsCampaignArchitecture from "@/components/services/hvac-search-ads/HVACSearchAdsCampaignArchitecture";
import HVACSearchAdsSeasonalStrategy from "@/components/services/hvac-search-ads/HVACSearchAdsSeasonalStrategy";
import HVACSearchAdsMobileAndCalls from "@/components/services/hvac-search-ads/HVACSearchAdsMobileAndCalls";
import HVACSearchAdsMetrics from "@/components/services/hvac-search-ads/HVACSearchAdsMetrics";
import HVACSearchAdsServiceTitan from "@/components/services/hvac-search-ads/HVACSearchAdsServiceTitan";
import HVACSearchAdsPMax from "@/components/services/hvac-search-ads/HVACSearchAdsPMax";
import HVACSearchAdsSEOIntegration from "@/components/services/hvac-search-ads/HVACSearchAdsSEOIntegration";
import HVACSearchAdsFitExclusivity from "@/components/services/hvac-search-ads/HVACSearchAdsFitExclusivity";
import HVACSearchAdsContactForm from "@/components/services/hvac-search-ads/HVACSearchAdsContactForm";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const anchorItems = [
  { label: "Why PPC Fails", href: "#why-ppc-fails" },
  { label: "Campaign Architecture", href: "#campaign-architecture" },
  { label: "Seasonal Strategy", href: "#seasonal-strategy" },
  { label: "Mobile & Calls", href: "#mobile-calls" },
  { label: "Metrics", href: "#metrics" },
  { label: "Performance Max", href: "#performance-max" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "HVAC Search Advertising Built for No-Cool Calls and Install Season Demand | DemandStream Digital";
const metaDescription = "Generic HVAC PPC ignores seasonality and emergency intent. We build campaigns around no-cool calls, installs, and cost per booked call. See how.";
const canonicalUrl = `${SITE_URL}/hvac-search-ads/`;

const HVACSearchAds = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HVAC Search Advertising",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "HVAC Search Advertising Service",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "HVACBusiness",
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
        <HVACSearchAdsHero />
      </div>

      <ServiceHubAnchorNav items={anchorItems} />

      <HVACSearchAdsPPCFails />
      <SectionDivider />
      <HVACSearchAdsCampaignArchitecture />
      <SectionDivider />
      <HVACSearchAdsSeasonalStrategy />
      <SectionDivider />
      <HVACSearchAdsMobileAndCalls />
      <SectionDivider />
      <HVACSearchAdsMetrics />
      <SectionDivider />
      <HVACSearchAdsServiceTitan />
      <SectionDivider />
      <HVACSearchAdsPMax />
      <SectionDivider />
      <HVACSearchAdsSEOIntegration />
      <SectionDivider />
      <HVACSearchAdsFitExclusivity />
      <HVACSearchAdsContactForm />

      <Footer />
    </div>
  );
};

export default HVACSearchAds;
