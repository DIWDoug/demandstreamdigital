import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import WhyPartnerWithUs from "@/components/sections/WhyPartnerWithUs";
import LocalGrowthEngine from "@/components/sections/LocalGrowthEngine";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Breadcrumbs from "@/components/services/Breadcrumbs";
import ServiceHubHero from "@/components/services/ServiceHubHero";
import WhyItMatters from "@/components/services/WhyItMatters";
import ServiceSpokesGrid from "@/components/services/ServiceSpokesGrid";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import { getHubBySlug } from "@/data/services";

const GoogleMaps = () => {
  const hub = getHubBySlug("google-maps");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/inbound-marketing-services" },
    { label: hub.title }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White-Label Google Maps Optimization for Agencies | Dialed-In Web</title>
        <meta name="description" content="White-label Google Maps and GBP optimization for agencies. Review management, citation building, and local pack ranking strategies that dominate map results." />
        <link rel="canonical" href="https://dialedinweb.com/services/google-maps" />
      </Helmet>
      
      <Header />
      <div className="pt-16">
        <ServiceHubHero title={hub.title} description={hub.heroDescription} />
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <WhyItMatters {...hub.whyItMatters} />
      <ServiceSpokesGrid hubSlug={hub.slug} hubTitle={hub.title} spokes={hub.spokes} />
      <WhyPartnerWithUs />
      <ServiceBenefits {...hub.benefits} />
      <LocalGrowthEngine />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default GoogleMaps;
