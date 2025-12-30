import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import TrustReel from "@/components/sections/TrustReel";
import Testimonials from "@/components/sections/Testimonials";
import LocalSEOHero from "@/components/services/local-seo/LocalSEOHero";
import LocalSEOExplainer from "@/components/services/local-seo/LocalSEOExplainer";
import LocalSEOPainPoints from "@/components/services/local-seo/LocalSEOPainPoints";
import SEOValueExplainer from "@/components/services/local-seo/SEOValueExplainer";
import LocalRankingFactors from "@/components/services/local-seo/LocalRankingFactors";
import LocalSEOFitQualifier from "@/components/services/local-seo/LocalSEOFitQualifier";
import LocalSEORoadmap from "@/components/services/local-seo/LocalSEORoadmap";
import LocalSEOSystemContext from "@/components/services/local-seo/LocalSEOSystemContext";
import HubBenefits from "@/components/services/HubBenefits";
import HubFAQ from "@/components/services/HubFAQ";
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
    { label: "Services", href: "/inbound-marketing-services" },
    { label: hub.title }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White-Label Local SEO Services for Agencies | Dialed-In Web</title>
        <meta name="description" content="White-label local SEO fulfillment for agencies. On-page optimization, technical SEO, content strategy, link building, GBP management, and review generation that drives organic visibility for your clients." />
        <link rel="canonical" href="https://dialedinweb.com/inbound-marketing-services/local-seo" />
        <meta name="keywords" content="white label local SEO, white label SEO services, local SEO fulfillment, agency SEO partner, local search optimization" />
      </Helmet>
      
      <Header />
      
      {/* Hero - center-aligned with simple form */}
      <div className="pt-16">
        <LocalSEOHero breadcrumbs={breadcrumbItems} />
      </div>
      
      {/* Trust Reel - credibility whisper */}
      <TrustReel />
      
      {/* What is Local SEO? - Explainer with pillar grid */}
      <LocalSEOExplainer />
      
      <SectionDivider />
      
      {/* Pain Points - why one-size-fits-all fails */}
      <LocalSEOPainPoints />
      
      {/* SEO Value Explainer - showing clients the real value */}
      <SEOValueExplainer />
      
      {/* Local Ranking Factors - interactive hover */}
      <LocalRankingFactors />
      
      <SectionDivider />
      
      {/* Fit Qualifier - who this is for */}
      <LocalSEOFitQualifier />
      
      {/* Our Approach - 6-month roadmap */}
      <LocalSEORoadmap />
      
      <SectionDivider />
      
      {/* What Actually Changes - rich benefit cards */}
      <HubBenefits hubSlug={hub.slug} />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* FAQ */}
      <HubFAQ title={hub.title} faqs={hub.faqs} />
      
      {/* Local SEO as part of the system - 360° ecosystem */}
      <LocalSEOSystemContext />
      
      {/* Contact */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default LocalSEO;
