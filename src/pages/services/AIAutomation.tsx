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
  ServiceEcosystemSection
} from "@/components/services/generic";
import { aiAutomationConfig } from "@/data/service-pages/ai-automation";
import ServiceBiggerPicture from "@/components/services/generic/ServiceBiggerPicture";
import { getServiceHubSchema } from "@/lib/schema";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const anchorItems = [
  { label: 'The Problem', href: '#problem' },
  { label: 'What Changes', href: '#outcomes' },
  { label: 'Our Process', href: '#roadmap' },
  { label: 'What We Deploy', href: '#building-blocks' },
  { label: 'Fit', href: '#qualification' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Get Started', href: '#contact' },
];

const AIAutomation = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: "AI Automation" }
  ];

  const pageSchema = getServiceHubSchema({
    name: "AI Automation for Plumbing & HVAC",
    description: aiAutomationConfig.metaDescription,
    url: aiAutomationConfig.canonicalUrl,
    serviceType: "AI Automation Service",
    faqGroups: aiAutomationConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={aiAutomationConfig.metaTitle}
        description={aiAutomationConfig.metaDescription}
        canonical={aiAutomationConfig.canonicalUrl}
        keywords={aiAutomationConfig.keywords}
        hrefLangs={[
          { hrefLang: "en-US", href: aiAutomationConfig.canonicalUrl },
          { hrefLang: "en-CA", href: aiAutomationConfig.canonicalUrl },
          { hrefLang: "x-default", href: aiAutomationConfig.canonicalUrl },
        ]}
        schemaJson={pageSchema}
      />

      <Header />

      {/* 1. HERO */}
      <div className="pt-16">
        <ServiceHubHero
          title={aiAutomationConfig.title}
          description={{
            intro: "Missed calls, cold estimates, and forgotten leads are the most expensive problems in the trades.",
            bullets: [
              "Recover missed calls with AI text response in under 60 seconds",
              "Follow up on open estimates automatically — no manual memory",
              "Book appointments 24/7 without adding staff",
              "Reactivate cold leads from your existing CRM",
            ],
            closing: "You run the jobs. The automation closes the gaps."
          }}
          breadcrumbs={breadcrumbItems}
          heroHeadline="AI Automation for Plumbing & HVAC Companies"
          heroSubtitle="Stop Losing Revenue to Missed Follow-Up"
        />
      </div>

      {/* STICKY ANCHOR NAV */}
      <ServiceHubAnchorNav items={anchorItems} />

      {/* 2. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <ServiceProblemSection config={aiAutomationConfig.problem} />
      </div>

      <SectionDivider />

      {/* 3. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={aiAutomationConfig.outcomes} />
      </div>

      <SectionDivider />

      {/* 4. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={aiAutomationConfig.roadmap} />
      </div>

      {/* Mid-Page CTA */}
      <MidPageCTA />

      <SectionDivider />

      {/* 5. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={aiAutomationConfig.buildingBlocks} />
      </div>

      <SectionDivider />

      {/* 6. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={aiAutomationConfig.qualification} />
      </div>

      {/* 7. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>

      <SectionDivider />

      {/* 8. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={aiAutomationConfig.faq} />
      </div>

      <SectionDivider />

      {/* 9. ECOSYSTEM */}
      <ServiceEcosystemSection config={aiAutomationConfig.ecosystem} />

      {/* 10. BIGGER PICTURE */}
      <ServiceBiggerPicture
        heading="AI Automation Is One Piece of the"
        headingHighlight="Connected Growth System"
        body1="AI automation compounds when it's connected to the channels driving calls — not deployed as a standalone tool."
        body2="Automated review requests accelerate GBP velocity and organic rankings. Lead qualification sequences improve booking rates from paid campaigns. Follow-up automations reactivate estimates from your CRM before customers call a competitor. When AI automation runs inside the growth system, every lead works harder and every channel closes more of what it generates."
        centerLabel="AI Automation"
        centerSublabel="Intelligent workflow across channels."
        services={[
          { label: "Local SEO", href: "/hvac-and-plumbing-seo" },
          { label: "Google Maps / GBP", href: "/plumbing-google-maps" },
          { label: "Paid Advertising", href: "/hvac-and-plumbing-paid-ads" },
          { label: "Content Marketing", href: "/plumbing-content-marketing" },
          { label: "Email Marketing", href: "/plumbing-email-marketing" },
          { label: "Reporting & Dashboards", href: "/plumbing-reporting" },
        ]}
        orbitNodes={[
          { label: "Local SEO", angle: 0 },
          { label: "Google Maps / GBP", angle: 60 },
          { label: "Paid Advertising", angle: 120 },
          { label: "Email Marketing", angle: 180 },
          { label: "Reporting & Dashboards", angle: 240 },
          { label: "Content Marketing", angle: 300 },
        ]}
      />

      <MarketExclusivity />

      {/* 10. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default AIAutomation;
