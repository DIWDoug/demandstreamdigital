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
  ServiceBiggerPicture
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

      {/* 11. BIGGER PICTURE */}
      <ServiceBiggerPicture
        heading="HVAC Email Marketing Is One Piece of the"
        headingHighlight="Connected Growth System"
        body1="HVAC email reactivates the revenue already in your customer list and retains your maintenance membership roster. But it performs best when connected to seasonal SEO, paid ads, and GBP — not as standalone blasts."
        body2="Seasonal email campaigns reinforce HVAC paid ad messaging and reduce cost per booked call. Review request sequences feed GBP velocity and organic rankings. Maintenance plan renewal campaigns keep customers from searching for a competitor before next season. When HVAC email works inside the broader system, every channel gets more efficient — and customer lifetime value compounds."
        centerLabel="HVAC Email Marketing"
        centerSublabel="Seasonal reactivation & maintenance retention."
        services={HVAC_EMAIL_BIGGER_PICTURE_SERVICES}
        orbitNodes={HVAC_EMAIL_ORBIT_NODES}
      />

      <MarketExclusivity />

      {/* 12. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default HVACEmailMarketing;
