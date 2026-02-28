import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import PlumbingInstagramHero from "@/components/services/plumbing-instagram-advertising/PlumbingInstagramHero";
import PlumbingInstagramMainContent from "@/components/services/plumbing-instagram-advertising/PlumbingInstagramMainContent";
import PlumbingInstagramFitExclusivity from "@/components/services/plumbing-instagram-advertising/PlumbingInstagramFitExclusivity";
import PlumbingInstagramContactForm from "@/components/services/plumbing-instagram-advertising/PlumbingInstagramContactForm";

const anchorItems = [
  { label: "How Instagram Works", href: "#how-instagram-works" },
  { label: "Campaign Types", href: "#campaign-types" },
  { label: "Seasonal Strategy", href: "#seasonal-strategy" },
  { label: "Tracking", href: "#tracking" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "Plumbing Instagram Advertising for Replacement Demand and Brand Authority | DemandStream Digital";
const metaDescription = "Plumbing Instagram advertising built to drive water heater replacement demand and build brand authority. Track booked revenue through ServiceTitan. See how.";
const canonicalUrl = `${SITE_URL}/plumbing-instagram-advertising/`;

const PlumbingInstagramAdvertising = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plumbing Instagram Advertising",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "Plumbing Instagram Advertising Service",
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
      <div className="pt-16"><PlumbingInstagramHero /></div>
      <ServiceHubAnchorNav items={anchorItems} />
      <PlumbingInstagramMainContent />
      <PlumbingInstagramFitExclusivity />
      <PlumbingInstagramContactForm />
      <Footer />
    </div>
  );
};

export default PlumbingInstagramAdvertising;
