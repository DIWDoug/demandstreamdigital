import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import TopicalExpertise from "@/components/sections/TopicalExpertise";

import ServiceHubHero from "@/components/services/ServiceHubHero";
import WhiteLabelExplainer from "@/components/services/WhiteLabelExplainer";
import InboundPainPoints from "@/components/services/InboundPainPoints";
import FitQualifier from "@/components/services/FitQualifier";
import OnboardingRoadmap from "@/components/services/OnboardingRoadmap";
import ServicesFramework from "@/components/services/ServicesFramework";
import ServicesTestimonials from "@/components/services/ServicesTestimonials";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesResultsInAction from "@/components/services/ServicesResultsInAction";
import { getServicesPageSchema } from "@/lib/schema";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const Services = () => {
  const servicesSchema = getServicesPageSchema();

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White Label Inbound Marketing for Agencies | Wholesale SEO, PPC & Email Campaigns by Dialed-in Web</title>
        <meta name="description" content="Dialed-in Web delivers end-to-end inbound marketing services to grow your clients. Offer this under your brand. Book a discovery call now." />
        <meta name="keywords" content="white label inbound marketing, wholesale SEO services, agency fulfillment, white label PPC, content marketing fulfillment" />
        <link rel="canonical" href="https://dialedinweb.com/white-label-inbound-marketing-services" />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href="https://dialedinweb.com/white-label-inbound-marketing-services" />
        <link rel="alternate" hrefLang="en-CA" href="https://dialedinweb.com/white-label-inbound-marketing-services" />
        <link rel="alternate" hrefLang="x-default" href="https://dialedinweb.com/white-label-inbound-marketing-services" />
        
        <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>
        
        {/* Open Graph */}
        <meta property="og:title" content="White Label Inbound Marketing for Agencies | Wholesale SEO, PPC & Email Campaigns by Dialed-in Web" />
        <meta property="og:description" content="Dialed-in Web delivers end-to-end inbound marketing services to grow your clients. Offer this under your brand. Book a discovery call now." />
        <meta property="og:url" content="https://dialedinweb.com/white-label-inbound-marketing-services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dialed-In Web" />
        <meta property="og:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="White Label Inbound Marketing for Agencies | Wholesale SEO, PPC & Email Campaigns by Dialed-in Web" />
        <meta name="twitter:description" content="Dialed-in Web delivers end-to-end inbound marketing services to grow your clients. Offer this under your brand. Book a discovery call now." />
        <meta name="twitter:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
      </Helmet>
      
      <Header />
      
      {/* Hero with Form */}
      <ServiceHubHero 
        title="Inbound Marketing"
        heroHeadline="White Label Inbound Marketing"
        heroSubtitle="Executed as a System"
        description={{
          intro: "Most agencies don't struggle with strategy. They struggle with consistent execution as clients, channels, and expectations grow.",
          bullets: [
            "You retain the client relationship",
            "We execute behind the scenes",
            "Consistent, scalable results"
          ],
          closing: "No added overhead. No crossed fingers. Just reliable fulfillment that makes your agency look great."
        }}
        breadcrumbs={[
          { label: "Inbound Marketing Services" }
        ]}
      />

      {/* Anchor Navigation */}
      <nav className="sticky top-16 z-40 bg-cta border-y border-cta/80 shadow-lg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 md:gap-6 lg:gap-10 py-3 overflow-x-auto">
            {[
              { label: 'What is Inbound?', href: '#white-label-explainer' },
              { label: 'The Reality', href: '#pain-points' },
              { label: 'Is This the Right Fit?', href: '#fit-qualifier' },
              { label: 'Our Framework', href: '#framework' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'Our Process', href: '#onboarding' },
              { label: 'Expertise', href: '#expertise' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Next Steps', href: '#contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm md:text-base font-medium text-white/90 hover:text-white whitespace-nowrap transition-colors duration-200 px-2 py-1"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      
      {/* What is Inbound Marketing? */}
      <WhiteLabelExplainer />
      
      <SectionDivider />
      
      {/* Pain Points - why in-house breaks down */}
      <InboundPainPoints />
      
      {/* Fit Qualifier - who this is for (light section, no divider needed) */}
      <FitQualifier />
      
      {/* Our Framework - How We Approach Fulfillment (also light) */}
      <ServicesFramework />
      
      <SectionDivider />
      
      {/* Testimonials - Social proof after framework */}
      <div id="testimonials" className="scroll-mt-32">
        <ServicesTestimonials />
      </div>
      
      {/* Results in Action - Case Studies */}
      <ServicesResultsInAction />
      
      <SectionDivider />
      
      {/* Onboarding Roadmap - how it works */}
      <OnboardingRoadmap />
      
      {/* Deep Expertise - hub/spoke with internal links */}
      <TopicalExpertise />
      
      <SectionDivider />
      
      {/* FAQ - Answer objections before conversion (light section) */}
      <ServicesFAQ />
      
      <SectionDivider />
      
      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Services;
