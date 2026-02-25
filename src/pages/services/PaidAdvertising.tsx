import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import MidPageCTA from "@/components/sections/MidPageCTA";
import { SITE_URL } from "@/lib/constants";

// Paid Advertising specific components
import PaidAdsHero from "@/components/services/paid-advertising/PaidAdsHero";
import PaidAdsDemandControl from "@/components/services/paid-advertising/PaidAdsDemandControl";
import PaidAdsPPCFails from "@/components/services/paid-advertising/PaidAdsPPCFails";
import PaidAdsChannels from "@/components/services/paid-advertising/PaidAdsChannels";
import PaidAdsSEOIntegration from "@/components/services/paid-advertising/PaidAdsSEOIntegration";
import PaidAdsFramework from "@/components/services/paid-advertising/PaidAdsFramework";
import PaidAdsMetrics from "@/components/services/paid-advertising/PaidAdsMetrics";
import PaidAdsFit from "@/components/services/paid-advertising/PaidAdsFit";
import PaidAdsBiggerPicture from "@/components/services/paid-advertising/PaidAdsBiggerPicture";
import PaidAdsContactForm from "@/components/services/paid-advertising/PaidAdsContactForm";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const anchorItems = [
  { label: "Demand Control", href: "#demand-control" },
  { label: "Why PPC Fails", href: "#why-ppc-fails" },
  { label: "Channels", href: "#channels" },
  { label: "Our Process", href: "#our-process" },
  { label: "Metrics", href: "#metrics" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "Paid Advertising for Plumbing & HVAC Companies | DemandStream Digital";
const metaDescription = "Most contractor PPC campaigns optimize for clicks. We optimize for booked calls. Paid advertising built around dispatch, capacity, and cost per booked call.";
const canonicalUrl = `${SITE_URL}/paid-advertising/`;

const PaidAdvertising = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Paid Advertising for Plumbing & HVAC",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "PPC Advertising Service",
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
        <meta name="keywords" content="paid advertising plumbing HVAC, Google Ads for plumbers, HVAC PPC management, Local Services Ads management, Facebook ads for plumbing companies, LinkedIn ads for HVAC contractors" />
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
        <PaidAdsHero />
      </div>

      {/* 02. STICKY NAV */}
      <ServiceHubAnchorNav items={anchorItems} />

      {/* 03. DEMAND CONTROL */}
      <PaidAdsDemandControl />

      <SectionDivider />

      {/* 04. WHY PPC FAILS */}
      <PaidAdsPPCFails />

      <SectionDivider />

      {/* 05. CHANNELS */}
      <PaidAdsChannels />

      <SectionDivider />

      {/* 06. SEO + PAID INTEGRATION */}
      <PaidAdsSEOIntegration />

      <SectionDivider />

      {/* 07. FRAMEWORK / PROCESS */}
      <PaidAdsFramework />

      <MidPageCTA />

      <SectionDivider />

      {/* 08. METRICS */}
      <PaidAdsMetrics />

      <SectionDivider />

      {/* 09. FIT */}
      <PaidAdsFit />

      <SectionDivider />

      {/* 10. BIGGER PICTURE */}
      <PaidAdsBiggerPicture />

      {/* 11. LEAD FORM */}
      <PaidAdsContactForm />

      {/* 12. FOOTER */}
      <Footer />
    </div>
  );
};

export default PaidAdvertising;
