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
import { authorityConfig } from "@/data/service-pages/authority";
import { getHubBySlug } from "@/data/services";
import { getServiceHubSchema } from "@/lib/schema";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const Authority = () => {
  const hub = getHubBySlug("local-authority-building");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: hub.title }
  ];

  const pageSchema = getServiceHubSchema({
    name: "Local Authority & Link Building for Plumbing & HVAC",
    description: authorityConfig.metaDescription,
    url: authorityConfig.canonicalUrl,
    serviceType: "Link Building Service",
    faqGroups: authorityConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{authorityConfig.metaTitle}</title>
        <meta name="description" content={authorityConfig.metaDescription} />
        <meta name="keywords" content="plumbing HVAC link building, local authority building, digital PR, backlink services, local SEO authority" />
        <link rel="canonical" href={authorityConfig.canonicalUrl} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href={authorityConfig.canonicalUrl} />
        <link rel="alternate" hrefLang="en-CA" href={authorityConfig.canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={authorityConfig.canonicalUrl} />
        
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        
        {/* Open Graph */}
        <meta property="og:title" content={authorityConfig.metaTitle} />
        <meta property="og:description" content={authorityConfig.metaDescription} />
        <meta property="og:url" content={authorityConfig.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={authorityConfig.metaTitle} />
        <meta name="twitter:description" content={authorityConfig.metaDescription} />
        <meta name="twitter:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
      </Helmet>
      
      <Header />
      
      {/* 1. HERO */}
      <div className="pt-16">
        <ServiceHubHero 
          title={hub.title} 
          description={hub.heroDescription}
          breadcrumbs={breadcrumbItems}
          integrationNote={hub.integrationNote}
        />
      </div>
      
      {/* STICKY ANCHOR NAV */}
      <ServiceHubAnchorNav />
      
      {/* 3. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <ServiceProblemSection config={authorityConfig.problem} />
      </div>
      
      <SectionDivider />
      
      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={authorityConfig.outcomes} />
      </div>
      
      <SectionDivider />
      
      {/* 5. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={authorityConfig.roadmap} />
      </div>
      
      {/* Mid-Page CTA */}
      <MidPageCTA />
      
      <SectionDivider />
      
      {/* 6. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={authorityConfig.buildingBlocks} hubSlug="local-authority-building" />
      </div>
      
      <SectionDivider />
      
      {/* 7. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={authorityConfig.qualification} />
      </div>
      
      {/* 8. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>
      
      <SectionDivider />
      
      {/* 9. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={authorityConfig.faq} />
      </div>
      
      <SectionDivider />
      
      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={authorityConfig.ecosystem} />
      
      <MarketExclusivity />
      
      {/* 11. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default Authority;
