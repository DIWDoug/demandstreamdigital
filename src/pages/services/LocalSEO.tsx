import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import TrustReel from "@/components/sections/TrustReel";
import Testimonials from "@/components/sections/Testimonials";
import ServiceHubHero from "@/components/services/ServiceHubHero";
import LocalSEOPainPoints from "@/components/services/local-seo/LocalSEOPainPoints";
import SEOValueExplainer from "@/components/services/local-seo/SEOValueExplainer";
import LocalRankingFactors from "@/components/services/local-seo/LocalRankingFactors";
import LocalSEOFitQualifier from "@/components/services/local-seo/LocalSEOFitQualifier";
import LocalSEORoadmap from "@/components/services/local-seo/LocalSEORoadmap";
import LocalSEOSystemContext from "@/components/services/local-seo/LocalSEOSystemContext";
import LocalSEOSpokes from "@/components/services/local-seo/LocalSEOSpokes";
import HubBenefits from "@/components/services/HubBenefits";
import LocalSEOGroupedFAQ from "@/components/services/local-seo/LocalSEOGroupedFAQ";
import { getHubBySlug } from "@/data/services";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const LocalSEO = () => {
  const hub = getHubBySlug("local-seo");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/white-label-inbound-marketing-services" },
    { label: hub.title }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White-Label Local SEO Services for Agencies | Dialed-In Web</title>
        <meta name="description" content="White-label local SEO fulfillment for agencies. On-page optimization, technical SEO, content strategy, link building, GBP management, and review generation that drives organic visibility for your clients." />
        <link rel="canonical" href="https://dialedinweb.com/white-label-inbound-marketing-services/local-seo" />
        <meta name="keywords" content="white label local SEO, white label SEO services, local SEO fulfillment, agency SEO partner, local search optimization" />
      </Helmet>
      
      <Header />
      
      {/* Hero - Split layout with form */}
      <div className="pt-16">
        <ServiceHubHero 
          title={hub.title}
          description={hub.heroDescription}
          breadcrumbs={breadcrumbItems}
          integrationNote={hub.integrationNote}
        />
      </div>
      
      {/* Trust Reel - credibility whisper (single instance) */}
      <TrustReel />
      
      <SectionDivider />
      
      {/* 1. THE PROBLEM - why one-size-fits-all fails */}
      <LocalSEOPainPoints />
      
      <SectionDivider />
      
      {/* 2. THE VALUE CONVERSATION - how to communicate ROI */}
      <SEOValueExplainer />
      
      <SectionDivider />
      
      {/* 3. OUTCOMES - what actually changes */}
      <HubBenefits hubSlug={hub.slug} />
      
      <SectionDivider />
      
      {/* 4. THE FRAMEWORK - phased approach */}
      <LocalSEORoadmap />
      
      <SectionDivider />
      
      {/* 5. THE SPOKES - what's included in Local SEO */}
      <LocalSEOSpokes />
      
      <SectionDivider />
      <LocalRankingFactors />
      
      <SectionDivider />
      
      {/* 6. QUALIFICATION - is this right for you */}
      <LocalSEOFitQualifier />
      
      {/* 7. SOCIAL PROOF */}
      <Testimonials />
      
      {/* 8. OBJECTIONS - FAQ (grouped by category) */}
      <LocalSEOGroupedFAQ />
      
      <SectionDivider />
      
      {/* 9. THE BIGGER PICTURE - 360° ecosystem cross-sell */}
      <LocalSEOSystemContext />
      
      {/* 10. FINAL CTA */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default LocalSEO;
