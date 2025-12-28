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

const EmailMarketing = () => {
  const hub = getHubBySlug("email-marketing");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: hub.title }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White-Label Email Marketing for Agencies | Dialed-In Web</title>
        <meta name="description" content="White-label email marketing fulfillment for agencies. Campaign strategy, automation sequences, list management, and performance analytics that drive conversions." />
        <link rel="canonical" href="https://dialedinweb.com/services/email-marketing" />
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

export default EmailMarketing;
