import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import ServiceHubHero from "@/components/services/ServiceHubHero";
import ServiceSpokesGrid from "@/components/services/ServiceSpokesGrid";
import ServiceHubCTA from "@/components/services/ServiceHubCTA";
import RelatedHubs from "@/components/services/RelatedHubs";
import { getHubBySlug } from "@/data/services";

const Reporting = () => {
  const hub = getHubBySlug("reporting");
  
  if (!hub) return null;

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White-Label Reporting & Analytics | Dialed-In Web</title>
        <meta name="description" content="White-label reporting and analytics dashboards for agencies. Rank tracking, call attribution, ROI analysis, and client presentations that prove value and retain clients." />
        <link rel="canonical" href="https://dialedinweb.com/services/reporting" />
      </Helmet>
      
      <Header />
      <ServiceHubHero 
        icon={hub.icon} 
        title={hub.title} 
        description={hub.heroDescription} 
      />
      <ServiceSpokesGrid 
        hubSlug={hub.slug} 
        hubTitle={hub.title} 
        spokes={hub.spokes} 
      />
      <ServiceHubCTA hubTitle={hub.title} />
      <RelatedHubs currentSlug={hub.slug} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Reporting;
