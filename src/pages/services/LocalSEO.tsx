import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import TrustReel from "@/components/sections/TrustReel";
import Testimonials from "@/components/sections/Testimonials";
import WaveDivider from "@/components/WaveDivider";
import LocalSEOHero from "@/components/services/local-seo/LocalSEOHero";
import LocalSEOPainPoints from "@/components/services/local-seo/LocalSEOPainPoints";
import SEOValueExplainer from "@/components/services/local-seo/SEOValueExplainer";
import LocalRankingFactors from "@/components/services/local-seo/LocalRankingFactors";
import LocalSEOFitQualifier from "@/components/services/local-seo/LocalSEOFitQualifier";
import LocalSEORoadmap from "@/components/services/local-seo/LocalSEORoadmap";
import LocalSEOSystemContext from "@/components/services/local-seo/LocalSEOSystemContext";
import LocalSEOSpokes from "@/components/services/local-seo/LocalSEOSpokes";
import HubBenefits from "@/components/services/HubBenefits";
import HubFAQ from "@/components/services/HubFAQ";
import { getHubBySlug } from "@/data/services";

// Wave section wrapper for transitions between light/dark sections
const WaveSection = ({ children, fromLight = false, toLight = false }: { 
  children: React.ReactNode; 
  fromLight?: boolean;
  toLight?: boolean;
}) => (
  <div className="relative">
    {fromLight && (
      <WaveDivider 
        position="top" 
        fromColor="hsl(var(--background))" 
        toColor="#f8fafc"
        variant="curve"
      />
    )}
    {children}
    {toLight && (
      <WaveDivider 
        position="bottom" 
        fromColor="#f8fafc"
        toColor="hsl(var(--background))"
        variant="curve"
      />
    )}
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
      
      {/* Hero - center-aligned with simple form */}
      <div className="pt-16">
        <LocalSEOHero breadcrumbs={breadcrumbItems} />
      </div>
      
      {/* Trust Reel - credibility whisper */}
      <TrustReel />
      
      {/* Wave transition to light section */}
      <div className="relative">
        <WaveDivider 
          position="bottom" 
          fromColor="hsl(var(--background))" 
          toColor="#f8fafc"
          variant="curve"
        />
      </div>
      
      {/* 1. THE PROBLEM - why one-size-fits-all fails (light) */}
      <LocalSEOPainPoints />
      
      {/* 2. THE SOLUTION - our phased approach (light continues) */}
      <LocalSEORoadmap />
      
      {/* Wave transition back to dark */}
      <div className="relative">
        <WaveDivider 
          position="bottom" 
          fromColor="#f8fafc"
          toColor="hsl(var(--background))"
          variant="curve"
          flip
        />
      </div>
      
      {/* 3. THE SPOKES - what's included in Local SEO (dark) */}
      <LocalSEOSpokes />
      
      {/* Wave transition to light */}
      <div className="relative">
        <WaveDivider 
          position="bottom" 
          fromColor="hsl(var(--background))" 
          toColor="#f8fafc"
          variant="curve"
        />
      </div>
      
      {/* 4. RANKING FACTORS (light) */}
      <LocalRankingFactors />
      
      {/* 5. THE VALUE CONVERSATION - how to communicate ROI (light continues) */}
      <SEOValueExplainer />
      
      {/* Wave transition back to dark */}
      <div className="relative">
        <WaveDivider 
          position="bottom" 
          fromColor="#f8fafc"
          toColor="hsl(var(--background))"
          variant="curve"
          flip
        />
      </div>
      
      {/* 6. OUTCOMES - what actually changes (dark) */}
      <HubBenefits hubSlug={hub.slug} />
      
      {/* Wave transition to light */}
      <div className="relative">
        <WaveDivider 
          position="bottom" 
          fromColor="hsl(var(--background))" 
          toColor="#f8fafc"
          variant="curve"
        />
      </div>
      
      {/* 7. QUALIFICATION - is this right for you (light) */}
      <LocalSEOFitQualifier />
      
      {/* Wave transition back to dark */}
      <div className="relative">
        <WaveDivider 
          position="bottom" 
          fromColor="#f8fafc"
          toColor="hsl(var(--background))"
          variant="curve"
          flip
        />
      </div>
      
      {/* 8. SOCIAL PROOF (dark) */}
      <Testimonials />
      
      {/* 9. OBJECTIONS - FAQ (dark continues) */}
      <HubFAQ title={hub.title} faqs={hub.faqs} />
      
      {/* Wave transition to light */}
      <div className="relative">
        <WaveDivider 
          position="bottom" 
          fromColor="hsl(var(--background))" 
          toColor="#f8fafc"
          variant="curve"
        />
      </div>
      
      {/* 10. THE BIGGER PICTURE - 360° ecosystem cross-sell (light) */}
      <LocalSEOSystemContext />
      
      {/* Wave transition back to dark for CTA */}
      <div className="relative">
        <WaveDivider 
          position="bottom" 
          fromColor="#f8fafc"
          toColor="hsl(var(--background))"
          variant="curve"
          flip
        />
      </div>
      
      {/* 11. FINAL CTA (dark) */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default LocalSEO;