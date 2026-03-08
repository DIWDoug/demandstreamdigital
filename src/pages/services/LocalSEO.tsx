import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";

import Testimonials from "@/components/sections/Testimonials";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import MidPageCTA from "@/components/sections/MidPageCTA";
import { 
  ServiceOutcomesSection,
  ServiceRoadmapSection,
  ServiceBuildingBlocksSection,
  ServiceFitQualifierSection,
  ServiceGroupedFAQ,
} from "@/components/services/generic";
import LocalSEOTwoColumnHero from "@/components/services/local-seo/LocalSEOTwoColumnHero";
import { localSEOConfig } from "@/data/service-pages/local-seo";
import { getFAQPageSchema, getServiceSchema, getOrganizationSchema } from "@/lib/schema";

// Local SEO specific components
import LocalRankingFactors from "@/components/services/local-seo/LocalRankingFactors";
import PhoneNotRankings from "@/components/services/local-seo/PhoneNotRankings";
import BuiltForBoth from "@/components/services/local-seo/BuiltForBoth";
import LocalSEOProblemSection from "@/components/services/local-seo/LocalSEOProblemSection";

const LOCAL_SEO_BIGGER_PICTURE_SERVICES = [
  { label: "Google Maps / GBP", href: "/plumbing-google-maps" },
  { label: "Reputation Management", href: "/hvac-and-plumbing-reputation-management" },
  { label: "Paid Advertising", href: "/hvac-and-plumbing-paid-ads" },
  { label: "Email Marketing", href: "/plumbing-email-marketing" },
  { label: "Reporting & Dashboards", href: "/plumbing-reporting" },
  { label: "Web Design", href: "/website-design" },
];
const LOCAL_SEO_ORBIT_NODES = [
  { label: "Google Maps / GBP", angle: 0 },
  { label: "Reputation Mgmt", angle: 60 },
  { label: "Paid Advertising", angle: 120 },
  { label: "Email Marketing", angle: 180 },
  { label: "Reporting & Dashboards", angle: 240 },
  { label: "Web Design", angle: 300 },
];

// Flatten FAQ groups for schema
const getFlatFAQs = () => {
  if (!localSEOConfig.faq?.groups) return [];
  return localSEOConfig.faq.groups.flatMap(group => 
    group.items.map(item => ({ question: item.question, answer: item.answer }))
  );
};

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const anchorItems = [
  { label: 'Pattern', href: '#problem' },
  { label: 'What Changes', href: '#outcomes' },
  { label: 'Our Process', href: '#roadmap' },
  { label: 'Levers', href: '#building-blocks' },
  { label: 'Fit', href: '#qualification' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Next Steps', href: '#contact' },
];

const LocalSEO = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: "Local SEO" }
  ];

  // Build combined schema
  const faqSchema = getFAQPageSchema(getFlatFAQs());
  const serviceSchema = getServiceSchema({
    name: "Local SEO for Plumbing & HVAC",
    description: localSEOConfig.metaDescription,
    url: localSEOConfig.canonicalUrl,
    serviceType: "Local SEO Service"
  });
  
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      serviceSchema,
      faqSchema
    ]
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={localSEOConfig.metaTitle}
        description={localSEOConfig.metaDescription}
        canonical={localSEOConfig.canonicalUrl}
        keywords="plumbing SEO, HVAC SEO, local SEO for plumbers, local SEO for HVAC, plumbing marketing, HVAC marketing"
        schemaJson={combinedSchema}
      />
      
      <Header />
      
      {/* 1. HERO */}
      <div className="pt-16">
        <LocalSEOTwoColumnHero 
          config={localSEOConfig.hero}
          breadcrumbs={breadcrumbItems}
        />
      </div>

      {/* STICKY ANCHOR NAV */}
      <ServiceHubAnchorNav items={anchorItems} />

      {/* 02B. PHONE NOT RANKINGS */}
      <PhoneNotRankings />
      
      <SectionDivider />
      
      {/* 3. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <LocalSEOProblemSection />
      </div>
      
      <SectionDivider />
      
      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={localSEOConfig.outcomes} />
      </div>

      {/* Outcomes closing paragraph */}
      <div className="bg-surface-dark pb-10">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-text-secondary text-base text-center max-w-4xl mx-auto leading-relaxed">
            Local SEO must also account for operational realities specific to plumbing and HVAC. Certifications, equipment transitions, permit timelines, and seasonal demand shifts all influence how marketing converts into revenue. A local SEO strategy built without this context will generate calls the business is not positioned to convert.
          </p>
        </div>
      </div>

      {/* EXCLUSIVITY — scarcity right after desire */}
      <MarketExclusivity />
      
      {/* 5. Ranking Factors */}
      <LocalRankingFactors />
      
      <SectionDivider />
      
      {/* 6. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={localSEOConfig.roadmap} />
      </div>
      
      {/* Mid-Page CTA */}
      <MidPageCTA />
      
      <SectionDivider />
      
      {/* 7. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={localSEOConfig.buildingBlocks} />
      </div>
      
      <SectionDivider />

      {/* 8. BUILT FOR BOTH */}
      <BuiltForBoth />
      
      <SectionDivider />
      
      {/* 9. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={localSEOConfig.qualification} />
      </div>
      
      {/* 10. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>
      
      <SectionDivider />
      
      {/* 11. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={localSEOConfig.faq} />
      </div>
      

      {/* 14. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      {/* Related Tools */}
      <section className="py-10 bg-surface-dark border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-accent-blue uppercase tracking-widest font-medium mb-4 text-center">Free Planning Tools</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "SEO Cost Calculator", href: "/partner-tools/seo-calculator", desc: "Estimate monthly SEO investment by market size" },
                { label: "Investment Calculator", href: "/partner-tools/investment-calculator", desc: "Scope multi-service monthly costs" },
                { label: "Inbound Marketing ROI Calculator", href: "/partner-tools/roi-calculator", desc: "Project revenue from full inbound strategy" },
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
      
      <Footer />
    </div>
  );
};

export default LocalSEO;
