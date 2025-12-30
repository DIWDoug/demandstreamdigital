import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import Testimonials from "@/components/sections/Testimonials";
import ServiceHubHero from "@/components/services/ServiceHubHero";
import WhyItMatters from "@/components/services/WhyItMatters";
import OurApproach from "@/components/services/OurApproach";
import HubSpokeDiagram from "@/components/services/HubSpokeDiagram";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import HubFAQ from "@/components/services/HubFAQ";
import OtherServices from "@/components/services/OtherServices";
import { getHubBySlug } from "@/data/services";

const Reporting = () => {
  const hub = getHubBySlug("reporting");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/white-label-inbound-marketing-services" },
    { label: hub.title }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White-Label Reporting & Analytics for Agencies | Dialed-In Web</title>
        <meta name="description" content="White-label reporting and analytics dashboards for agencies. Rank tracking, call attribution, ROI analysis, and client presentations that prove value and retain clients." />
        <link rel="canonical" href="https://dialedinweb.com/white-label-inbound-marketing-services/reporting" />
      </Helmet>
      
      <Header />
      <div className="pt-16">
        <ServiceHubHero 
          title={hub.title} 
          description={hub.heroDescription}
          breadcrumbs={breadcrumbItems}
        />
      </div>
      <WhyItMatters {...hub.whyItMatters} />
      <OurApproach {...hub.ourApproach} />
      <HubSpokeDiagram hubSlug={hub.slug} hubTitle={hub.title} spokes={hub.spokes} />
      <ServiceBenefits {...hub.benefits} />
      <Testimonials />
      <HubFAQ title={hub.title} faqs={hub.faqs} />
      <OtherServices currentHubSlug={hub.slug} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Reporting;
