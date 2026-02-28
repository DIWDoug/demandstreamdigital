import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";

import HVACPaidAdsHero from "@/components/services/hvac-paid-advertising/HVACPaidAdsHero";
import HVACPaidAdsPPCFails from "@/components/services/hvac-paid-advertising/HVACPaidAdsPPCFails";
import HVACPaidAdsChannels from "@/components/services/hvac-paid-advertising/HVACPaidAdsChannels";
import HVACPaidAdsCampaignStrategy from "@/components/services/hvac-paid-advertising/HVACPaidAdsCampaignStrategy";
import HVACPaidAdsSEOIntegration from "@/components/services/hvac-paid-advertising/HVACPaidAdsSEOIntegration";
import HVACPaidAdsServiceTitan from "@/components/services/hvac-paid-advertising/HVACPaidAdsServiceTitan";
import HVACPaidAdsBuiltForBoth from "@/components/services/hvac-paid-advertising/HVACPaidAdsBuiltForBoth";
import HVACPaidAdsCredibility from "@/components/services/hvac-paid-advertising/HVACPaidAdsCredibility";
import HVACPaidAdsFit from "@/components/services/hvac-paid-advertising/HVACPaidAdsFit";
import HVACPaidAdsFAQ from "@/components/services/hvac-paid-advertising/HVACPaidAdsFAQ";
import HVACPaidAdsExclusivity from "@/components/services/hvac-paid-advertising/HVACPaidAdsExclusivity";
import HVACPaidAdsContactForm from "@/components/services/hvac-paid-advertising/HVACPaidAdsContactForm";
import ServiceBiggerPicture from "@/components/services/generic/ServiceBiggerPicture";

const HVAC_PAID_BIGGER_PICTURE_SERVICES = [
  { label: "Local SEO", href: "/hvac-and-plumbing-seo" },
  { label: "Google Maps / GBP", href: "/plumbing-google-maps" },
  { label: "Reputation Management", href: "/hvac-and-plumbing-seo" },
  { label: "Email Marketing", href: "/plumbing-email-marketing" },
  { label: "Web Design", href: "/plumbing-and-hvac-web-design" },
  { label: "Reporting & Dashboards", href: "/plumbing-reporting" },
];
const HVAC_PAID_ORBIT_NODES = [
  { label: "Local SEO", angle: 0 },
  { label: "Google Maps / GBP", angle: 60 },
  { label: "Reputation Mgmt", angle: 120 },
  { label: "Email Marketing", angle: 180 },
  { label: "Reporting & Dashboards", angle: 240 },
  { label: "Web Design", angle: 300 },
];

const SectionDivider = () => (
  <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, hsl(var(--border) / 0.5) 20%, hsl(var(--border) / 0.5) 80%, transparent)" }} />
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

const metaTitle = "HVAC Paid Advertising for Seasonal Demand Control | DemandStream Digital";
const metaDescription = "HVAC paid advertising built around seasonal demand, repair vs. install segmentation, and emergency capture. Track every dollar to cost per booked call.";
const canonicalUrl = `${SITE_URL}/hvac-paid-advertising`;

const HVACPaidAdvertising = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HVAC Paid Advertising",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "HVAC PPC Advertising Service",
    "provider": {
      "@type": "Organization",
      "name": "Demand Stream Digital",
      "url": SITE_URL
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much should I budget for HVAC paid advertising?", "acceptedAnswer": { "@type": "Answer", "text": "Budget depends on your market size, service mix, and seasonal demand windows. Most HVAC markets start between $2,500 and $6,000 per month in total ad spend across channels, scaling based on what your dispatch board can absorb." } },
      { "@type": "Question", "name": "Which paid channels work best for HVAC companies?", "acceptedAnswer": { "@type": "Answer", "text": "For emergency repair and no-cool/no-heat calls, Google Search Ads and Local Services Ads are the highest-intent channels. For replacement and install demand, Facebook retargeting and display work well. The right mix depends on your market and service focus." } },
      { "@type": "Question", "name": "Do you require long-term contracts?", "acceptedAnswer": { "@type": "Answer", "text": "We require a minimum 6-month engagement. Paid advertising campaigns compound over time as data builds. Agencies that run month-to-month have no incentive to build infrastructure that improves." } },
      { "@type": "Question", "name": "How do you handle budget shifts between heating and cooling seasons?", "acceptedAnswer": { "@type": "Answer", "text": "We build a seasonal bid calendar before any spend begins. Cooling season budgets increase before and during peak summer demand. Heating season budgets ramp heading into winter. Shoulder months shift toward maintenance agreements and install promotions." } },
      { "@type": "Question", "name": "What metrics do you actually report on?", "acceptedAnswer": { "@type": "Answer", "text": "Cost per booked call, booking rate, close rate, revenue per job, and dispatch load by campaign type. Not impressions. Not click-through rate. Every report ties directly back to your dispatch board." } },
      { "@type": "Question", "name": "We have run paid ads before and they did not produce results. Why would this be different?", "acceptedAnswer": { "@type": "Answer", "text": "Most failed HVAC campaigns share the same structural problems — no service segmentation, flat budgets that ignore seasonality, broad match keywords, and reporting that stops at the lead instead of the booked call." } },
      { "@type": "Question", "name": "Can you manage campaigns we already have running?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We conduct a full campaign audit before launch. Most inherited accounts have significant issues — keyword waste, missing negative lists, no call tracking tied to dispatch. We document everything and show you exactly what changes before we touch the budget." } },
      { "@type": "Question", "name": "What size HVAC company do you typically work with?", "acceptedAnswer": { "@type": "Answer", "text": "HVAC companies running 2 or more trucks with an active dispatch board, call tracking in place or willingness to install it, and a verified Google Business Profile." } },
    ]
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        keywords="HVAC paid advertising, Google Ads for HVAC companies, HVAC PPC management, HVAC Local Services Ads, Facebook ads for HVAC contractors"
        hrefLangs={[
          { hrefLang: "en-US", href: canonicalUrl },
          { hrefLang: "en-CA", href: canonicalUrl },
          { hrefLang: "x-default", href: canonicalUrl },
        ]}
        schemaJson={[pageSchema, faqSchema]}
      />

      <Header />

      {/* 01. HERO */}
      <div className="pt-16">
        <HVACPaidAdsHero />
      </div>

      {/* 02. STICKY NAV */}
      <ServiceHubAnchorNav items={anchorItems} />

      {/* 03. WHY IT'S DIFFERENT */}
      <HVACPaidAdsPPCFails />
      <HVACPaidAdsCredibility />

      <SectionDivider />

      {/* 04. CHANNELS */}
      <HVACPaidAdsChannels />

      <SectionDivider />

      {/* 05. MID-PAGE CTA */}
      <section className="py-16 lg:py-20 bg-background text-center relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Not Clear Which Channel Fits Your Market?</h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">Repair, replacement, and commercial growth each require a different paid mix. We scope it to your market and your season.</p>
          <a href="/contact" className="btn-cta inline-flex items-center gap-2">
            Claim Your Territory Today
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>

      {/* 06. CAMPAIGN STRATEGY */}
      <HVACPaidAdsCampaignStrategy />

      <SectionDivider />

      {/* 07. SEO + PAID INTEGRATION */}
      <HVACPaidAdsSEOIntegration />

      <SectionDivider />

      {/* 08. SERVICETITAN */}
      <HVACPaidAdsServiceTitan />

      <SectionDivider />

      {/* 09. BUILT FOR BOTH */}
      <HVACPaidAdsBuiltForBoth />

      <SectionDivider />

      {/* 10. FIT */}
      <HVACPaidAdsFit />

      {/* 11. EXCLUSIVITY */}
      <HVACPaidAdsExclusivity />

      {/* 12. FAQ */}
      <HVACPaidAdsFAQ />

      {/* 13. BIGGER PICTURE */}
      <ServiceBiggerPicture
        heading="HVAC Paid Advertising Is Part of a"
        headingHighlight="Bigger Growth System"
        body1="Paid advertising captures seasonal demand at the moment of intent. But it compounds when it runs connected to SEO, GBP, and email — not managed in isolation."
        body2="Your GBP reviews improve paid ad quality scores and reduce cost per click. Your SEO lowers the blended cost per booked call over time. Your email marketing reactivates past customers before they click a competitor's ad. When every channel pulls toward the same outcome — more booked service calls at a lower cost — the system compounds."
        centerLabel="HVAC Paid Ads"
        centerSublabel="Seasonal demand control."
        services={HVAC_PAID_BIGGER_PICTURE_SERVICES}
        orbitNodes={HVAC_PAID_ORBIT_NODES}
      />

      {/* 14. LEAD FORM */}
      <HVACPaidAdsContactForm />

      {/* 13. FOOTER */}
      <Footer />
    </div>
  );
};

export default HVACPaidAdvertising;
