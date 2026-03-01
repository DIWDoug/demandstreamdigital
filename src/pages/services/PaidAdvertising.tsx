import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";

// Paid Advertising specific components
import PaidAdsHero from "@/components/services/paid-advertising/PaidAdsHero";
import PaidAdsDemandControl from "@/components/services/paid-advertising/PaidAdsDemandControl";
import PaidAdsPPCFails from "@/components/services/paid-advertising/PaidAdsPPCFails";
import PaidAdsChannels from "@/components/services/paid-advertising/PaidAdsChannels";
import PaidAdsFramework from "@/components/services/paid-advertising/PaidAdsFramework";
import PaidAdsMetrics from "@/components/services/paid-advertising/PaidAdsMetrics";
import PaidAdsFit from "@/components/services/paid-advertising/PaidAdsFit";
import PaidAdsBiggerPicture from "@/components/services/paid-advertising/PaidAdsBiggerPicture";
import PaidAdsBuiltForBoth from "@/components/services/paid-advertising/PaidAdsBuiltForBoth";
import PaidAdsSEOIntegration from "@/components/services/paid-advertising/PaidAdsSEOIntegration";
import PaidAdsContactForm from "@/components/services/paid-advertising/PaidAdsContactForm";
import PaidAdsExclusivity from "@/components/services/paid-advertising/PaidAdsExclusivity";
import PaidAdsFAQ from "@/components/services/paid-advertising/PaidAdsFAQ";
import MarketExclusivity from "@/components/sections/MarketExclusivity";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const anchorItems = [
  { label: "Demand Control", href: "#demand-control" },
  { label: "Why PPC Fails", href: "#why-ppc-fails" },
  { label: "Channels", href: "#channels" },
  { label: "Industries", href: "#industries" },
  { label: "Our Process", href: "#our-process" },
  { label: "Metrics", href: "#metrics" },
  { label: "Fit", href: "#fit" },
  { label: "Exclusivity", href: "#exclusivity" },
  { label: "FAQ", href: "#faq" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "Plumbing & HVAC Paid Ads for Booked Calls | DSD";
const metaDescription = "Google Ads, LSAs, and social ads built for plumbing and HVAC operators. Every campaign tied to booked calls and revenue, not clicks and impressions.";
const canonicalUrl = `${SITE_URL}/hvac-and-plumbing-paid-ads`;

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much should I budget for paid advertising as a plumbing or HVAC company?", "acceptedAnswer": { "@type": "Answer", "text": "Budget depends on your market size, service mix, and how many trucks you are running. Most plumbing markets start between $2,000 and $5,000 per month. HVAC markets typically start between $2,500 and $6,000 due to seasonal demand swings. We size budgets around your capacity and cost-per-booked-call targets, not arbitrary minimums." } },
      { "@type": "Question", "name": "Which paid channels work best for plumbing and HVAC companies?", "acceptedAnswer": { "@type": "Answer", "text": "For emergency repair calls — burst pipes, no-cool, no-heat — Google Search Ads and Local Services Ads are the highest-intent channels. For replacement and install demand with longer decision cycles, Facebook retargeting and display keep you in front of homeowners while they research." } },
      { "@type": "Question", "name": "Do you require long-term contracts?", "acceptedAnswer": { "@type": "Answer", "text": "We require a minimum 6-month engagement to start. After the initial 6 months, the engagement converts to a rolling agreement with a 30-day notice period." } },
      { "@type": "Question", "name": "How do you handle budget adjustments for HVAC seasonality?", "acceptedAnswer": { "@type": "Answer", "text": "We build a seasonal bid calendar before any spend begins. Cooling season budgets increase before and during peak summer demand. Heating season budgets ramp heading into winter. Shoulder months shift toward maintenance agreements and install promotions." } },
      { "@type": "Question", "name": "What metrics do you actually report on?", "acceptedAnswer": { "@type": "Answer", "text": "Cost per booked call, booking rate, close rate, revenue per job, and dispatch load by campaign type. Not impressions. Not click-through rate. Every report connects directly to what shows up on your dispatch board." } },
      { "@type": "Question", "name": "We have run paid ads before and they did not work. Why would this be different?", "acceptedAnswer": { "@type": "Answer", "text": "Most failed contractor campaigns share the same problems — broad match keywords, no service segmentation, flat budgets that ignore seasonality, and reporting that stops at the lead instead of the booked call. We build campaign architecture from scratch around how your market and service mix actually work." } },
      { "@type": "Question", "name": "Can you manage campaigns we already have running with another agency?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We conduct a full campaign audit before launch. Most inherited accounts have significant structural issues. We show you exactly what changes before we touch the budget." } },
      { "@type": "Question", "name": "What size plumbing or HVAC company do you typically work with?", "acceptedAnswer": { "@type": "Answer", "text": "Companies running 2 or more trucks with an active dispatch board, call tracking in place or willingness to install it, and a verified Google Business Profile with active reviews." } },
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

      {/* 06. BUILT FOR BOTH */}
      <PaidAdsBuiltForBoth />

      <SectionDivider />

      {/* 07. FRAMEWORK / PROCESS */}
      <PaidAdsFramework />

      <SectionDivider />

      {/* 08. METRICS */}
      <PaidAdsMetrics />

      <SectionDivider />

      {/* 09. FIT */}
      <PaidAdsFit />

      {/* 10. EXCLUSIVITY */}
      <PaidAdsExclusivity />

      {/* 11. FAQ */}
      <PaidAdsFAQ />

      <SectionDivider />

      {/* 12. SEO INTEGRATION */}
      <PaidAdsSEOIntegration />

      <SectionDivider />

      {/* 13. BIGGER PICTURE */}
      <PaidAdsBiggerPicture />

      {/* 12. LEAD FORM */}
      <PaidAdsContactForm />

      {/* Related Tools */}
      <section className="py-10 bg-surface-dark border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-accent-blue uppercase tracking-widest font-medium mb-4 text-center">Free Planning Tools</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "Ad Budget Calculator", href: "/partner-tools/ad-budget-calculator", desc: "Project outcomes from your ad spend" },
                { label: "Social Media ROI Calculator", href: "/partner-tools/social-media-roi-calculator", desc: "Measure social campaign return" },
                { label: "Investment Calculator", href: "/partner-tools/investment-calculator", desc: "Scope full-service monthly investment" },
              ].map((t) => (
                <a key={t.href} href={t.href} className="group flex flex-col gap-1 p-4 rounded-xl border border-border/40 bg-background hover:border-accent-blue/50 hover:bg-surface-elevated transition-all duration-200">
                  <span className="text-sm font-semibold text-foreground group-hover:text-accent-blue transition-colors">{t.label}</span>
                  <span className="text-xs text-text-secondary">{t.desc}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default PaidAdvertising;
