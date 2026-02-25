import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import MidPageCTA from "@/components/sections/MidPageCTA";
import { SITE_URL } from "@/lib/constants";

import PlumbingPaidAdsHero from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsHero";
import PlumbingPaidAdsPPCFails from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsPPCFails";
import PlumbingPaidAdsChannels from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsChannels";
import PlumbingPaidAdsCampaignStrategy from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsCampaignStrategy";
import PlumbingPaidAdsSEOIntegration from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsSEOIntegration";
import PlumbingPaidAdsServiceTitan from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsServiceTitan";
import PlumbingPaidAdsBuiltForBoth from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsBuiltForBoth";
import PlumbingPaidAdsFit from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsFit";
import PlumbingPaidAdsExclusivity from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsExclusivity";
import PlumbingPaidAdsContactForm from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsContactForm";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const anchorItems = [
  { label: "Why It's Different", href: "#why-its-different" },
  { label: "Channels", href: "#channels" },
  { label: "Campaign Strategy", href: "#campaign-strategy" },
  { label: "SEO + Paid", href: "#seo-paid" },
  { label: "Fit", href: "#fit" },
  { label: "Exclusivity", href: "#exclusivity" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "Plumbing Paid Advertising for More Booked Service Calls | DemandStream Digital";
const metaDescription = "Generic contractor PPC fails plumbing companies. Our plumbing paid advertising is built around emergency intent, service segmentation, and cost per booked call. See how.";
const canonicalUrl = `${SITE_URL}/plumbing-paid-advertising/`;

const PlumbingPaidAdvertising = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plumbing Paid Advertising",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "Plumbing PPC Advertising Service",
    "provider": {
      "@type": "Organization",
      "name": "Demand Stream Digital",
      "url": SITE_URL
    }
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="plumbing paid advertising, Google Ads for plumbers, plumbing PPC management, plumbing Local Services Ads, Facebook ads for plumbing companies, plumbing search advertising" />
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

      {/* 01. HERO */}
      <div className="pt-16">
        <PlumbingPaidAdsHero />
      </div>

      {/* 02. STICKY NAV */}
      <ServiceHubAnchorNav items={anchorItems} />

      {/* 03. WHY IT'S DIFFERENT */}
      <PlumbingPaidAdsPPCFails />

      <SectionDivider />

      {/* 04. CHANNELS */}
      <PlumbingPaidAdsChannels />

      <SectionDivider />

      {/* 05. MID-PAGE CTA */}
      <MidPageCTA />

      <SectionDivider />

      {/* 06. CAMPAIGN STRATEGY */}
      <PlumbingPaidAdsCampaignStrategy />

      <SectionDivider />

      {/* 07. SEO + PAID INTEGRATION */}
      <PlumbingPaidAdsSEOIntegration />

      <SectionDivider />

      {/* 08. SERVICETITAN */}
      <PlumbingPaidAdsServiceTitan />

      <SectionDivider />

      {/* 09. BUILT FOR BOTH */}
      <PlumbingPaidAdsBuiltForBoth />

      <SectionDivider />

      {/* 10. FIT */}
      <PlumbingPaidAdsFit />

      {/* 11. EXCLUSIVITY */}
      <PlumbingPaidAdsExclusivity />

      {/* 12. LEAD FORM */}
      <PlumbingPaidAdsContactForm />

      {/* 13. FOOTER */}
      <Footer />
    </div>
  );
};

export default PlumbingPaidAdvertising;
