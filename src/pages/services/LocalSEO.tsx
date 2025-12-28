import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ServiceHubHero from "@/components/services/ServiceHubHero";
import ServiceSpokesGrid from "@/components/services/ServiceSpokesGrid";
import LocalSEOStats from "@/components/services/LocalSEOStats";
import LocalSEORoadmap from "@/components/services/LocalSEORoadmap";
import RankingFactorsInfographic from "@/components/services/RankingFactorsInfographic";
import LocalMarketingEcosystem from "@/components/services/LocalMarketingEcosystem";
import { getHubBySlug } from "@/data/services";

const LocalSEO = () => {
  const hub = getHubBySlug("local-seo");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: hub.title }
  ];

  // More persuasive hero description emphasizing 360° connected approach
  const heroDescription = "Local SEO is one piece of a 360° local marketing ecosystem—and every piece is connected. When organic rankings, Google Maps visibility, review reputation, and paid media work together, the results compound. We help agencies deliver the organic foundation that makes everything else more effective. This is white-label SEO fulfillment built for agencies who understand that sustainable growth requires integration, not isolation.";

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White-Label Local SEO Services for Agencies | Dialed-In Web</title>
        <meta name="description" content="White-label local SEO fulfillment for agencies. On-page optimization, technical SEO, content strategy, and link building that drives organic visibility for your clients." />
        <link rel="canonical" href="https://dialedinweb.com/services/local-seo" />
      </Helmet>
      
      <Header />
      <div className="pt-16">
        <ServiceHubHero 
          title={hub.title} 
          description={heroDescription}
          breadcrumbs={breadcrumbItems}
        />
      </div>
      <LocalSEOStats />
      <LocalMarketingEcosystem />
      <RankingFactorsInfographic />
      <ServiceSpokesGrid hubSlug={hub.slug} hubTitle={hub.title} spokes={hub.spokes} />
      <LocalSEORoadmap />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LocalSEO;