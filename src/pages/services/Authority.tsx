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
import OurApproach from "@/components/services/OurApproach";
import ServiceSpokesGrid from "@/components/services/ServiceSpokesGrid";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceHubCTA from "@/components/services/ServiceHubCTA";
import RelatedHubs from "@/components/services/RelatedHubs";
import { getHubBySlug } from "@/data/services";

const Authority = () => {
  const hub = getHubBySlug("authority");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: hub.title }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White-Label Authority Building for Agencies | Dialed-In Web</title>
        <meta name="description" content="White-label authority building and digital PR for agencies. Media placements, directory listings, reputation management, and thought leadership that builds trust." />
        <link rel="canonical" href="https://dialedinweb.com/services/authority" />
      </Helmet>
      
      <Header />
      <div className="pt-16">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <ServiceHubHero title={hub.title} description={hub.heroDescription} />
      <WhyItMatters {...hub.whyItMatters} />
      <ServiceSpokesGrid hubSlug={hub.slug} hubTitle={hub.title} spokes={hub.spokes} />
      <OurApproach {...hub.ourApproach} />
      <WhyPartnerWithUs />
      <ServiceBenefits {...hub.benefits} />
      <LocalGrowthEngine />
      <Testimonials />
      <FAQ />
      <ServiceHubCTA hubTitle={hub.title} />
      <RelatedHubs currentSlug={hub.slug} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Authority;
