import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import HVACSearchAdsHero from "@/components/services/hvac-search-ads/HVACSearchAdsHero";
import HVACSearchAdsPPCFails from "@/components/services/hvac-search-ads/HVACSearchAdsPPCFails";
import HVACSearchAdsCampaignArchitecture from "@/components/services/hvac-search-ads/HVACSearchAdsCampaignArchitecture";
import HVACSearchAdsCredibility from "@/components/services/hvac-search-ads/HVACSearchAdsCredibility";
import HVACSearchAdsSeasonalStrategy from "@/components/services/hvac-search-ads/HVACSearchAdsSeasonalStrategy";
import HVACSearchAdsMobileAndCalls from "@/components/services/hvac-search-ads/HVACSearchAdsMobileAndCalls";
import HVACSearchAdsMetrics from "@/components/services/hvac-search-ads/HVACSearchAdsMetrics";
import HVACSearchAdsServiceTitan from "@/components/services/hvac-search-ads/HVACSearchAdsServiceTitan";
import HVACSearchAdsPMax from "@/components/services/hvac-search-ads/HVACSearchAdsPMax";
import HVACSearchAdsSEOIntegration from "@/components/services/hvac-search-ads/HVACSearchAdsSEOIntegration";
import HVACSearchAdsFAQ from "@/components/services/hvac-search-ads/HVACSearchAdsFAQ";
import HVACSearchAdsFitExclusivity from "@/components/services/hvac-search-ads/HVACSearchAdsFitExclusivity";
import HVACSearchAdsContactForm from "@/components/services/hvac-search-ads/HVACSearchAdsContactForm";

const SectionDivider = () => (
  <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, hsl(var(--border) / 0.5) 20%, hsl(var(--border) / 0.5) 80%, transparent)" }} />
);

const anchorItems = [
  { label: "Why PPC Fails", href: "#why-ppc-fails" },
  { label: "Campaign Architecture", href: "#campaign-architecture" },
  { label: "Seasonal Strategy", href: "#seasonal-strategy" },
  { label: "Mobile & Calls", href: "#mobile-calls" },
  { label: "Metrics", href: "#metrics" },
  { label: "Performance Max", href: "#performance-max" },
  { label: "Fit", href: "#fit" },
  { label: "Check Your Market", href: "#contact" },
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much should I budget for HVAC search advertising?", "acceptedAnswer": { "@type": "Answer", "text": "Budget depends on your market size, service mix, and how many trucks you are running. We size budgets around your capacity and cost-per-booked-call targets, not arbitrary spend minimums. Most markets we work in start between $2,000 and $5,000 per month in ad spend, scaling based on what your dispatch board can handle." } },
      { "@type": "Question", "name": "How long before we see booked calls from search ads?", "acceptedAnswer": { "@type": "Answer", "text": "Emergency campaigns typically produce calls within the first two weeks of launch. Replacement and install campaigns take longer to optimize — expect 60 to 90 days before cost-per-booked-call stabilizes on higher-ticket service types." } },
      { "@type": "Question", "name": "Do you require long-term contracts?", "acceptedAnswer": { "@type": "Answer", "text": "We require a minimum 6-month engagement. Search advertising compounds over time as campaign data builds. Agencies that let you go month-to-month have no incentive to build campaigns that improve — they just need to hold you for another 30 days." } },
      { "@type": "Question", "name": "How do you handle peak season budget adjustments?", "acceptedAnswer": { "@type": "Answer", "text": "We build a seasonal bid calendar before campaigns launch. Budgets increase before and during peak demand windows. They throttle back during shoulder season and shift emphasis toward maintenance and install promotions. You are not running the same budget in February as you are in July." } },
      { "@type": "Question", "name": "What metrics do you actually report on?", "acceptedAnswer": { "@type": "Answer", "text": "Cost per booked call, booking rate, close rate, revenue per job, and dispatch load. Not impressions. Not click-through rate. Every report connects to what shows up on your dispatch board." } },
      { "@type": "Question", "name": "We have tried Google Ads before and it did not work. Why would this be different?", "acceptedAnswer": { "@type": "Answer", "text": "Most failed campaigns share the same problems — broad match keywords, no service segmentation, budgets that do not adjust for season, and reporting that stops at the lead instead of the booked call. We build the campaign structure from scratch around how your market actually works." } },
      { "@type": "Question", "name": "Do you work with companies already running ads with another agency?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We conduct a full campaign audit before launch. Most inherited campaigns have significant structural issues that explain poor performance. We document what we find and show you exactly what changes before we touch the budget." } },
      { "@type": "Question", "name": "What size company do you typically work with?", "acceptedAnswer": { "@type": "Answer", "text": "Companies running 2 or more trucks with an active dispatch board and at least basic call tracking in place. If the phone is not being answered consistently, more ad spend makes the problem worse, not better. We need the operational foundation to be there before we scale volume." } },
    ]
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        hrefLangs={[
          { hrefLang: "en-US", href: canonicalUrl },
          { hrefLang: "en-CA", href: canonicalUrl },
          { hrefLang: "x-default", href: canonicalUrl },
        ]}
        schemaJson={[pageSchema, faqSchema]}
      />

      <Header />

      <div className="pt-16">
        <HVACSearchAdsHero />
      </div>

      <ServiceHubAnchorNav items={anchorItems} />

      <HVACSearchAdsPPCFails />
      <SectionDivider />
      <HVACSearchAdsCampaignArchitecture />
      <HVACSearchAdsCredibility />
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
      <HVACSearchAdsFAQ />
      <HVACSearchAdsFitExclusivity />
      <HVACSearchAdsContactForm />

      <Footer />
    </div>
  );
};

export default HVACSearchAds;
