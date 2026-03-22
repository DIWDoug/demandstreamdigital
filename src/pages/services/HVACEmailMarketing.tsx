import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import Testimonials from "@/components/sections/Testimonials";
import ServiceHubHero from "@/components/services/ServiceHubHero";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import MidPageCTA from "@/components/sections/MidPageCTA";
import {
  ServiceProblemSection,
  ServiceOutcomesSection,
  ServiceRoadmapSection,
  ServiceBuildingBlocksSection,
  ServiceFitQualifierSection,
  ServiceGroupedFAQ,
  ServiceEcosystemSection,
} from "@/components/services/generic";
import { hvacEmailMarketingConfig } from "@/data/service-pages/hvac-email-marketing";
import { getServiceHubSchema } from "@/lib/schema";

const HVAC_EMAIL_BIGGER_PICTURE_SERVICES = [
  { label: "HVAC Local SEO", href: "/hvac-seo" },
  { label: "HVAC Google Maps / GBP", href: "/hvac-google-maps" },
  { label: "HVAC Paid Advertising", href: "/hvac-paid-advertising" },
  { label: "HVAC Content Marketing", href: "/hvac-content-marketing" },
  { label: "Web Design", href: "/plumbing-and-hvac-web-design" },
  { label: "HVAC Reporting", href: "/hvac-reporting" },
];
const HVAC_EMAIL_ORBIT_NODES = [
  { label: "HVAC SEO", angle: 0 },
  { label: "HVAC GBP", angle: 60 },
  { label: "Paid Advertising", angle: 120 },
  { label: "Content Marketing", angle: 180 },
  { label: "HVAC Reporting", angle: 240 },
  { label: "Web Design", angle: 300 },
];

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const HVACEmailMarketing = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: hvacEmailMarketingConfig.title }
  ];

  const pageSchema = getServiceHubSchema({
    name: "Email Marketing for HVAC Companies",
    description: hvacEmailMarketingConfig.metaDescription,
    url: hvacEmailMarketingConfig.canonicalUrl,
    serviceType: "HVAC Email Marketing Service",
    faqGroups: hvacEmailMarketingConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={hvacEmailMarketingConfig.metaTitle}
        description={hvacEmailMarketingConfig.metaDescription}
        canonical={hvacEmailMarketingConfig.canonicalUrl}
        schemaJson={pageSchema}
      />

      <Header />

      {/* 1. HERO */}
      <div className="pt-16">
        <ServiceHubHero
          title={hvacEmailMarketingConfig.title}
          description={hvacEmailMarketingConfig.hero.subheadline}
          breadcrumbs={breadcrumbItems}
          heroHeadline={hvacEmailMarketingConfig.hero.headline}
          heroSubtitle={hvacEmailMarketingConfig.hero.highlightedText}
        />
      </div>

      <ServiceHubAnchorNav />

      {/* 3. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <ServiceProblemSection config={hvacEmailMarketingConfig.problem} />
      </div>

      <SectionDivider />

      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={hvacEmailMarketingConfig.outcomes} />
      </div>

      <SectionDivider />

      {/* 5. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={hvacEmailMarketingConfig.roadmap} />
      </div>

      <MidPageCTA />

      <SectionDivider />

      {/* 6. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={hvacEmailMarketingConfig.buildingBlocks} hubSlug="email-marketing" />
      </div>

      <SectionDivider />

      {/* 7. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={hvacEmailMarketingConfig.qualification} />
      </div>

      {/* 8. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>

      <SectionDivider />

      {/* 9. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={hvacEmailMarketingConfig.faq} />
      </div>

      <SectionDivider />

      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={hvacEmailMarketingConfig.ecosystem} />

      <MarketExclusivity />

      {/* Related Tools */}
      <section className="py-10 bg-surface-dark border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-accent-blue uppercase tracking-widest font-medium mb-4 text-center">Free Planning Tools</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "Email Marketing Calculator", href: "/partner-tools/email-calculator", desc: "Forecast ROI from list size & engagement" },
                { label: "Investment Calculator", href: "/partner-tools/investment-calculator", desc: "Scope full-service monthly costs" },
                { label: "Inbound Marketing ROI Calculator", href: "/partner-tools/roi-calculator", desc: "Model revenue impact of full inbound strategy" },
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

      {/* 12. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default HVACEmailMarketing;
