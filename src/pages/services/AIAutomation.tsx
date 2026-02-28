import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>{aiAutomationConfig.metaTitle}</title>
        <meta name="description" content={aiAutomationConfig.metaDescription} />
        <meta name="keywords" content={aiAutomationConfig.keywords} />
        <link rel="canonical" href={aiAutomationConfig.canonicalUrl} />

        <link rel="alternate" hrefLang="en-US" href={aiAutomationConfig.canonicalUrl} />
        <link rel="alternate" hrefLang="en-CA" href={aiAutomationConfig.canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={aiAutomationConfig.canonicalUrl} />

        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>

        <meta property="og:title" content={aiAutomationConfig.metaTitle} />
        <meta property="og:description" content={aiAutomationConfig.metaDescription} />
        <meta property="og:url" content={aiAutomationConfig.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={aiAutomationConfig.metaTitle} />
        <meta name="twitter:description" content={aiAutomationConfig.metaDescription} />
        <meta name="twitter:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
      </Helmet>

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
