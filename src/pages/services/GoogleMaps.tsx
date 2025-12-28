import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import Breadcrumbs from "@/components/services/Breadcrumbs";
import ServiceHubHero from "@/components/services/ServiceHubHero";
import StatsBar from "@/components/services/StatsBar";
import WhyItMatters from "@/components/services/WhyItMatters";
import OurApproach from "@/components/services/OurApproach";
import ServiceSpokesGrid from "@/components/services/ServiceSpokesGrid";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import BookCTA from "@/components/services/BookCTA";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceHubCTA from "@/components/services/ServiceHubCTA";
import RelatedHubs from "@/components/services/RelatedHubs";
import { getHubBySlug } from "@/data/services";

const GoogleMaps = () => {
  const hub = getHubBySlug("google-maps");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
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
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <ServiceHubHero icon={hub.icon} title={hub.title} description={hub.heroDescription} />
      <StatsBar />
      <WhyItMatters {...hub.whyItMatters} />
      <OurApproach {...hub.ourApproach} />
      <ServiceSpokesGrid hubSlug={hub.slug} hubTitle={hub.title} spokes={hub.spokes} />
      <WhyChooseUs />
      <ServiceBenefits {...hub.benefits} />
      <BookCTA />
      <ServiceFAQ hubTitle={hub.title} faqs={hub.faqs} />
      <ServiceHubCTA hubTitle={hub.title} />
      <RelatedHubs currentSlug={hub.slug} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default GoogleMaps;
