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

const metaTitle = "HVAC Paid Ads for Seasonal Demand Control | DemandStream";
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

      {/* 13. LEAD FORM */}
      <HVACPaidAdsContactForm />

      {/* 15. CHANNEL DEEP DIVES */}
      <section className="py-12 lg:py-16 bg-surface-dark border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-accent-blue uppercase tracking-widest font-medium mb-3 text-center">Explore by Channel</p>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-8">
              HVAC Paid Advertising — Channel Deep Dives
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HVAC Search Ads", href: "/hvac-search-ads", desc: "Google & LSA for emergency + install capture" },
                { label: "HVAC Facebook Ads", href: "/hvac-facebook-advertising", desc: "Seasonal demand & install retargeting" },
                { label: "HVAC Instagram Ads", href: "/hvac-instagram-advertising", desc: "Brand visibility during shoulder seasons" },
                { label: "HVAC LinkedIn Ads", href: "/hvac-linkedin-advertising", desc: "Commercial & property management targeting" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col gap-1 p-4 rounded-xl border border-border/40 bg-background hover:border-accent-blue/50 hover:bg-surface-elevated transition-all duration-200"
                >
                  <span className="text-sm font-semibold text-foreground group-hover:text-accent-blue transition-colors">{item.label}</span>
                  <span className="text-xs text-text-secondary">{item.desc}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HVACPaidAdvertising;
