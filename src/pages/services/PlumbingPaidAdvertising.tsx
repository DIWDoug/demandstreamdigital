import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import { SITE_URL } from "@/lib/constants";

import PlumbingPaidAdsHero from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsHero";
import PlumbingPaidAdsPPCFails from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsPPCFails";
import PlumbingPaidAdsChannels from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsChannels";
import PlumbingPaidAdsCampaignStrategy from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsCampaignStrategy";
import PlumbingPaidAdsSEOIntegration from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsSEOIntegration";
import PlumbingPaidAdsServiceTitan from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsServiceTitan";
import PlumbingPaidAdsBuiltForBoth from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsBuiltForBoth";
import PlumbingPaidAdsCredibility from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsCredibility";
import PlumbingPaidAdsFit from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsFit";
import PlumbingPaidAdsFAQ from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsFAQ";
import PlumbingPaidAdsExclusivity from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsExclusivity";
import PlumbingPaidAdsContactForm from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsContactForm";

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

const metaTitle = "Plumbing Paid Advertising for More Booked Service Calls | DemandStream Digital";
const metaDescription = "Generic contractor PPC fails plumbing companies. Our plumbing paid advertising is built around emergency intent, service segmentation, and cost per booked call. See how.";
const canonicalUrl = `${SITE_URL}/plumbing-paid-advertising`;

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much should I budget for plumbing paid advertising?", "acceptedAnswer": { "@type": "Answer", "text": "Budget depends on your market size, service mix, and call volume targets. Most plumbing markets start between $2,000 and $5,000 per month in total ad spend across channels, scaling based on what your dispatch board can absorb." } },
      { "@type": "Question", "name": "Which paid channels work best for plumbing companies?", "acceptedAnswer": { "@type": "Answer", "text": "For emergency drain, sewer, and leak calls, Google Search Ads and Local Services Ads are the highest-intent channels. For water heater replacement and repipe, Facebook retargeting and display keep you in front of homeowners in the longer decision window." } },
      { "@type": "Question", "name": "Do you require long-term contracts?", "acceptedAnswer": { "@type": "Answer", "text": "We require a minimum 6-month engagement. Paid advertising campaigns compound over time as data builds. Agencies that run month-to-month have no incentive to build infrastructure that improves." } },
      { "@type": "Question", "name": "How do you manage budget across different service types?", "acceptedAnswer": { "@type": "Answer", "text": "Emergency services get priority budget allocation because intent is immediate. Water heater and repipe campaigns run with longer optimization windows and different bidding strategies. Budgets are reviewed monthly and adjusted based on booking rates by service type." } },
      { "@type": "Question", "name": "What metrics do you actually report on?", "acceptedAnswer": { "@type": "Answer", "text": "Cost per booked call, booking rate, close rate, revenue per job, and dispatch load by campaign type. Not impressions. Not click-through rate. Every report ties directly back to your dispatch board." } },
      { "@type": "Question", "name": "We have run paid ads before and they did not produce results. Why would this be different?", "acceptedAnswer": { "@type": "Answer", "text": "Most failed plumbing campaigns share the same structural problems — no service segmentation, broad match keywords, flat budgets that do not prioritize emergency demand, and reporting that stops at the lead instead of the booked call." } },
      { "@type": "Question", "name": "Can you manage campaigns we already have running?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We conduct a full campaign audit before launch. Most inherited accounts have significant issues — keyword waste, missing negative lists, no call tracking tied to dispatch. We document everything and show you exactly what changes before we touch the budget." } },
      { "@type": "Question", "name": "What size plumbing company do you typically work with?", "acceptedAnswer": { "@type": "Answer", "text": "Plumbing companies running 2 or more trucks with an active dispatch board, call tracking in place or willingness to install it, and a verified Google Business Profile." } },
    ]
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        keywords="plumbing paid advertising, Google Ads for plumbers, plumbing PPC management, plumbing Local Services Ads, Facebook ads for plumbing companies"
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
        <PlumbingPaidAdsHero />
      </div>

      {/* 02. STICKY NAV */}
      <ServiceHubAnchorNav items={anchorItems} />

      {/* 03. WHY IT'S DIFFERENT */}
      <PlumbingPaidAdsPPCFails />
      <PlumbingPaidAdsCredibility />

      <SectionDivider />

      {/* 04. CHANNELS */}
      <PlumbingPaidAdsChannels />

      <SectionDivider />

      {/* 05. MID-PAGE CTA */}
      <section className="py-16 lg:py-20 bg-background text-center relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Not Clear Which Channel Fits Your Market?</h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">Emergency capture, water heater replacement, sewer campaigns — each requires a different paid mix. We scope it to your market.</p>
          <a href="/contact" className="btn-cta inline-flex items-center gap-2">
            Claim Your Territory Today
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>

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

      {/* 12. FAQ */}
      <PlumbingPaidAdsFAQ />

      {/* 12. LEAD FORM */}
      <PlumbingPaidAdsContactForm />

      {/* 13. FOOTER */}
      <Footer />
    </div>
  );
};

export default PlumbingPaidAdvertising;
