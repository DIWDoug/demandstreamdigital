import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
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
import { getPageOgImage } from "@/lib/ogImages";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const anchorLinks = [
  { label: 'What is Inbound?', href: '#inbound-explainer', id: 'inbound-explainer' },
  { label: 'The Reality', href: '#pain-points', id: 'pain-points' },
  { label: 'Is This the Right Fit?', href: '#fit-qualifier', id: 'fit-qualifier' },
  { label: 'Our Framework', href: '#framework', id: 'framework' },
  { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { label: 'Results', href: '#results', id: 'results' },
  { label: 'Our Process', href: '#onboarding', id: 'onboarding' },
  { label: 'Expertise', href: '#expertise', id: 'expertise' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
  { label: 'Next Steps', href: '#contact', id: 'contact' },
];

const Services = () => {
  const servicesSchema = getServicesPageSchema();
  const [activeSection, setActiveSection] = useState<string>('inbound-explainer');
  const ogImage = getPageOgImage('services');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for sticky nav
      
      // Find the current section
      for (let i = anchorLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(anchorLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(anchorLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Plumbing & HVAC Inbound Marketing Services | Demand Stream Digital</title>
        <meta name="description" content="Demand Stream Digital delivers end-to-end inbound marketing for plumbing and HVAC companies. Local SEO, paid advertising, reputation management, and more." />
        <meta name="keywords" content="plumbing marketing services, HVAC marketing services, local SEO plumbing, HVAC lead generation, plumbing inbound marketing" />
        <link rel="canonical" href="https://demandstreamdigital.com/services" />
        
        
        <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>
        
        {/* Open Graph */}
        <meta property="og:title" content="Plumbing & HVAC Inbound Marketing Services | Demand Stream Digital" />
        <meta property="og:description" content="Demand Stream Digital delivers end-to-end inbound marketing for plumbing and HVAC companies. Local SEO, paid advertising, reputation management, and more." />
        <meta property="og:url" content="https://demandstreamdigital.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plumbing & HVAC Inbound Marketing Services | Demand Stream Digital" />
        <meta name="twitter:description" content="Demand Stream Digital delivers end-to-end inbound marketing for plumbing and HVAC companies. Local SEO, paid advertising, reputation management, and more." />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      
      <Header />
      
      {/* Hero with Form */}
      <ServiceHubHero 
        title="Inbound Marketing"
        heroHeadline="White Label Inbound Marketing"
        heroSubtitle="Executed as a System"
        description={{
          intro: "Most home service companies don't lack ambition. They lack a reliable digital marketing system — one that drives qualified leads from local search, paid ads, and content marketing without the guesswork.",
          bullets: [
            "Local SEO & Google Business Profile management",
            "Targeted PPC campaigns and lead funnels",
            "Reputation management and review generation"
          ],
          closing: "No wasted ad spend. No inconsistent results. Just a proven growth engine for plumbing and HVAC businesses that turns online visibility into booked jobs."
        }}
        breadcrumbs={[
          { label: "Inbound Marketing Services" }
        ]}
      />

      {/* Anchor Navigation */}
      <nav className="sticky top-16 z-40 bg-cta border-y border-cta/80 shadow-lg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 md:gap-6 lg:gap-10 py-3 overflow-x-auto">
            {anchorLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm md:text-base font-medium whitespace-nowrap transition-all duration-200 px-2 py-1 rounded-md ${
                  activeSection === item.id
                    ? 'text-white bg-white/20'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
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
      
      <MarketExclusivity />
      
      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Services;
