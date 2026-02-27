import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import PlumbingSearchAdsHero from "@/components/services/plumbing-search-ads/PlumbingSearchAdsHero";
import PlumbingSearchAdsPPCFails from "@/components/services/plumbing-search-ads/PlumbingSearchAdsPPCFails";
import PlumbingSearchAdsCampaignArchitecture from "@/components/services/plumbing-search-ads/PlumbingSearchAdsCampaignArchitecture";
import PlumbingSearchAdsCredibility from "@/components/services/plumbing-search-ads/PlumbingSearchAdsCredibility";
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
  <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, rgba(226,232,240,0.8) 20%, rgba(226,232,240,0.8) 80%, transparent)" }} />
);

const anchorItems = [
  { label: "Why PPC Fails", href: "#why-ppc-fails" },
  { label: "Campaign Architecture", href: "#campaign-architecture" },
  { label: "Geo & Territory", href: "#geo-territory" },
  { label: "Mobile & Calls", href: "#mobile-calls" },
  { label: "Metrics", href: "#metrics" },
  { label: "Performance Max", href: "#performance-max" },
  { label: "Fit", href: "#fit" },
  { label: "Check Your Market", href: "#contact" },
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much should I budget for plumbing search advertising?", "acceptedAnswer": { "@type": "Answer", "text": "Budget depends on your market size, service mix, and how many trucks you are running. We size budgets around your capacity and cost-per-booked-call targets, not arbitrary spend minimums. Most markets we work in start between $2,000 and $5,000 per month in ad spend, scaling based on what your dispatch board can handle." } },
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
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en-US" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en-CA" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
      <PlumbingSearchAdsCredibility />
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
