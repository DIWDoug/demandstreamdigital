import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";

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
import { contentMarketingConfig } from "@/data/service-pages/content-marketing";
import { getHubBySlug } from "@/data/services";
import { getServiceHubSchema } from "@/lib/schema";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const ContentMarketing = () => {
  const hub = getHubBySlug("content-marketing");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Inbound Marketing Services", href: "/white-label-inbound-marketing-services" },
    { label: hub.title }
  ];

  const pageSchema = getServiceHubSchema({
    name: "White-Label Content Marketing Services",
    description: contentMarketingConfig.metaDescription,
    url: contentMarketingConfig.canonicalUrl,
    serviceType: "Content Marketing Service",
    faqGroups: contentMarketingConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{contentMarketingConfig.metaTitle}</title>
        <meta name="description" content={contentMarketingConfig.metaDescription} />
        <meta name="keywords" content="white label content marketing, blog writing services, content strategy, SEO content creation, agency content partner" />
        <link rel="canonical" href={contentMarketingConfig.canonicalUrl} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href={contentMarketingConfig.canonicalUrl} />
        <link rel="alternate" hrefLang="en-CA" href={contentMarketingConfig.canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={contentMarketingConfig.canonicalUrl} />
        
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        
        {/* Open Graph */}
        <meta property="og:title" content={contentMarketingConfig.metaTitle} />
        <meta property="og:description" content={contentMarketingConfig.metaDescription} />
        <meta property="og:url" content={contentMarketingConfig.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dialed-In Web" />
        <meta property="og:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={contentMarketingConfig.metaTitle} />
        <meta name="twitter:description" content={contentMarketingConfig.metaDescription} />
        <meta name="twitter:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
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
        <ServiceProblemSection config={contentMarketingConfig.problem} />
      </div>
      
      <SectionDivider />
      
      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={contentMarketingConfig.outcomes} />
      </div>
      
      <SectionDivider />
      
      {/* 5. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={contentMarketingConfig.roadmap} />
      </div>
      
      {/* Mid-Page CTA */}
      <MidPageCTA />
      
      <SectionDivider />
      
      {/* 6. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={contentMarketingConfig.buildingBlocks} hubSlug="content-marketing" />
      </div>
      
      <SectionDivider />
      
      {/* 7. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={contentMarketingConfig.qualification} />
      </div>
      
      {/* 8. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>
      
      <SectionDivider />
      
      {/* 9. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={contentMarketingConfig.faq} />
      </div>
      
      <SectionDivider />
      
      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={contentMarketingConfig.ecosystem} />
      
      {/* 11. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default ContentMarketing;
