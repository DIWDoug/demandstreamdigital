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
import LocalSEOStats from "@/components/services/LocalSEOStats";
import AlternatingContent from "@/components/services/AlternatingContent";
import OurApproach from "@/components/services/OurApproach";
import RankingFactorsInfographic from "@/components/services/RankingFactorsInfographic";
import { getHubBySlug } from "@/data/services";

// Images for alternating content
import localSearchImage from "@/assets/local-search-landscape.jpg";
import rankingFactorsImage from "@/assets/ranking-factors-analysis.jpg";
import aiVisibilityImage from "@/assets/ai-search-visibility.jpg";

const LocalSEO = () => {
  const hub = getHubBySlug("local-seo");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: hub.title }
  ];

  // Expanded content for alternating sections
  const localSeoContent = [
    {
      eyebrow: "The Local Search Landscape",
      headline: "Your Clients Are Missing 46% of Google Searches",
      description: "Nearly half of all Google searches have local intent. When someone types 'plumber near me' or 'best dentist in [city],' they're not browsing—they're ready to call. The 2026 Whitespark Local Search Ranking Factors report confirms what we've seen across hundreds of campaigns: businesses that invest in local SEO capture high-intent traffic their competitors never see.",
      bullets: [
        "Local pack results appear in 93% of location-based searches",
        "42% of local searchers click on Google Maps 3-pack listings",
        "80% of US consumers search for local businesses weekly",
        "Mobile local searches lead to store visits within 24 hours at a rate of 76%"
      ],
      imageSrc: localSearchImage,
      imageAlt: "Person searching for local businesses on smartphone with map pins visible"
    },
    {
      eyebrow: "Ranking Factors That Matter",
      headline: "What Actually Drives Local Rankings in 2026",
      description: "According to the latest research from Whitespark and 47 leading local SEO experts, the top ranking factors have shifted. Primary GBP category selection remains crucial, but behavioral signals and AI search visibility are now critical components of any comprehensive local strategy. We track 187 ranking factors across every campaign to ensure your clients stay ahead of algorithm changes.",
      bullets: [
        "Google Business Profile optimization remains the foundation of local visibility",
        "Review velocity and sentiment directly impact local pack positions",
        "On-page signals including NAP consistency and local schema markup",
        "Link signals from locally-relevant, authoritative sources"
      ],
      imageSrc: rankingFactorsImage,
      imageAlt: "Marketing team analyzing SEO analytics dashboard with charts and data visualizations"
    },
    {
      eyebrow: "Beyond Traditional SEO",
      headline: "AI Search Visibility Is the New Frontier",
      description: "Large language models like ChatGPT and Google's AI Overviews are changing how consumers discover local businesses. The 2026 ranking factors study introduced AI visibility as a new measurement category. Presence on expert-curated 'best of' lists, dedicated service pages, and prominence on industry-relevant domains now influence how AI systems recommend businesses. We're building these signals into every local SEO campaign.",
      bullets: [
        "Citations are becoming 'the new link' for AI search visibility",
        "Dedicated pages for each service improve AI comprehension",
        "Expert curated lists carry significant weight in AI recommendations",
        "Structured data helps AI systems understand business offerings"
      ],
      imageSrc: aiVisibilityImage,
      imageAlt: "Abstract AI neural network visualization representing artificial intelligence in search"
    }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White-Label Local SEO Services for Agencies | Dialed-In Web</title>
        <meta name="description" content="White-label local SEO fulfillment for agencies. On-page optimization, technical SEO, content strategy, and link building that drives organic visibility for your clients." />
        <link rel="canonical" href="https://dialedinweb.com/services/local-seo" />
      </Helmet>
      
      <Header />
      <div className="pt-16">
        <ServiceHubHero title={hub.title} description={hub.heroDescription} />
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <LocalSEOStats />
      <WhyItMatters 
        eyebrow="Why Local SEO Matters"
        {...hub.whyItMatters} 
      />
      <AlternatingContent blocks={localSeoContent} />
      <RankingFactorsInfographic />
      <OurApproach 
        eyebrow="How We Deliver Results"
        headline={hub.ourApproach.headline}
        description={hub.ourApproach.description}
        steps={hub.ourApproach.steps}
      />
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

export default LocalSEO;