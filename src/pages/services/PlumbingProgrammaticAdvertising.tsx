import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import PlumbingProgrammaticHero from "@/components/services/plumbing-programmatic-advertising/PlumbingProgrammaticHero";
import PlumbingProgrammaticMainContent from "@/components/services/plumbing-programmatic-advertising/PlumbingProgrammaticMainContent";
import PlumbingProgrammaticFitExclusivity from "@/components/services/plumbing-programmatic-advertising/PlumbingProgrammaticFitExclusivity";
import PlumbingProgrammaticContactForm from "@/components/services/plumbing-programmatic-advertising/PlumbingProgrammaticContactForm";

const anchorItems = [
  { label: "What Is Programmatic", href: "#what-is-programmatic" },
  { label: "When It Works", href: "#when-it-works" },
  { label: "Connected TV", href: "#connected-tv" },
  { label: "Tracking", href: "#tracking" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "Plumbing Programmatic Advertising for Replacement Demand and Brand Visibility | DemandStream";
const metaDescription = "Plumbing programmatic advertising via AdRoll and Mountain CTV. Drive water heater replacement demand and build brand visibility across every screen. See how.";
const canonicalUrl = `${SITE_URL}/plumbing-programmatic-advertising/`;

const PlumbingProgrammaticAdvertising = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plumbing Programmatic Advertising",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "Plumbing Programmatic Advertising Service",
    "provider": { "@type": "Organization", "name": "DemandStream Digital", "url": SITE_URL }
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en-US" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en-CA" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
      </Helmet>
      <Header />
      <div className="pt-16"><PlumbingProgrammaticHero /></div>
      <ServiceHubAnchorNav items={anchorItems} />
      <PlumbingProgrammaticMainContent />
      <PlumbingProgrammaticFitExclusivity />
      <PlumbingProgrammaticContactForm />
      <Footer />
    </div>
  );
};

export default PlumbingProgrammaticAdvertising;
