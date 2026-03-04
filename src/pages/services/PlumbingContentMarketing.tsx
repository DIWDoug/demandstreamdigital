import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import ServiceHubHero from "@/components/services/ServiceHubHero";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import {
  ServiceProblemSection,
  ServiceOutcomesSection,
  ServiceRoadmapSection,
  ServiceBuildingBlocksSection,
  ServiceFitQualifierSection,
  ServiceGroupedFAQ,
  ServiceTestimonialsSection,
} from "@/components/services/generic";
import { plumbingContentMarketingConfig } from "@/data/service-pages/plumbing-content-marketing";
import { getServiceHubSchema } from "@/lib/schema";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const PlumbingContentMarketing = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: "Content Marketing", href: "/plumbing-hvac-content-marketing" },
    { label: plumbingContentMarketingConfig.title }
  ];

  const pageSchema = getServiceHubSchema({
    name: "Plumbing Content Marketing",
    description: plumbingContentMarketingConfig.metaDescription,
    url: plumbingContentMarketingConfig.canonicalUrl,
    serviceType: "Plumbing Content Marketing Service",
    faqGroups: plumbingContentMarketingConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{plumbingContentMarketingConfig.metaTitle}</title>
        <meta name="description" content={plumbingContentMarketingConfig.metaDescription} />
        <link rel="canonical" href={plumbingContentMarketingConfig.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <meta property="og:title" content={plumbingContentMarketingConfig.metaTitle} />
        <meta property="og:description" content={plumbingContentMarketingConfig.metaDescription} />
        <meta property="og:url" content={plumbingContentMarketingConfig.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={plumbingContentMarketingConfig.metaTitle} />
        <meta name="twitter:description" content={plumbingContentMarketingConfig.metaDescription} />
        <meta name="twitter:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
      </Helmet>

      <Header />

      {/* 1. HERO */}
      <div className="pt-16">
        <ServiceHubHero
          title={plumbingContentMarketingConfig.title}
          heroHeadline="Plumbing Content Marketing"
          heroSubtitle="Built to Rank and Convert"
          description={{
            intro: "When a homeowner searches \"emergency plumber near me\" or \"water heater replacement cost,\" they are not browsing options. They are calling whoever shows up with a credible, relevant, local answer.",
            bullets: [
              "Built around how plumbing demand actually works — emergency intent and service specificity",
              "Geographic content aligned to your actual dispatch radius, not just major city names",
              "Structured to move readers toward a booked call — not just a page view",
            ],
            closing: "No generic listicles. No filler blogs. No content that exists just to exist."
          }}
          breadcrumbs={breadcrumbItems}
        />
      </div>

      <ServiceHubAnchorNav />

      {/* 2. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <ServiceProblemSection config={plumbingContentMarketingConfig.problem} />
      </div>

      <SectionDivider />

      {/* 3. WHAT CHANGES (OUTCOMES) */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={plumbingContentMarketingConfig.outcomes} />
      </div>

      <MarketExclusivity />

      <SectionDivider />

      {/* 4. WHERE WE START (ROADMAP) */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={plumbingContentMarketingConfig.roadmap} />
      </div>

      <SectionDivider />

      {/* 5. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={plumbingContentMarketingConfig.buildingBlocks} hubSlug="content-marketing" />
      </div>

      <SectionDivider />

      {/* 6. SELECTIVE FIT */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={plumbingContentMarketingConfig.qualification} />
      </div>

      {/* 7. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <ServiceTestimonialsSection
          featured={{
            eyebrow: "What Plumbing Operators Say",
            quote: `Working with our SEO partner has been one of the best marketing decisions we've made. In just a few months, he has completely transformed our SEO performance with a roadmap that is not only strategic, but clearly tailored to our business. For the first time, we don't feel like we're guessing. We have a plan, data to back it up, and a partner who keeps us accountable.\n\nWhat truly sets him apart is transparency. After past experiences with agencies where SEO felt like a "black box," it's refreshing to work with a team that provides real, clear data and explains what's working and why. His insights are thoughtful, his ideas are strong, and his use of AI is smart and intentional, not gimmicky.\n\nBeyond the strategy, the results speak for themselves. We saw a 40% year-over-year revenue increase this past December, and while SEO isn't the only factor, it has absolutely contributed to that growth.\n\nHe is passionate about what he does, and it shows in both his work and his team. This is not a vendor relationship. This is a true partnership.\n\nIf you're looking for an SEO company that is strategic, transparent, and genuinely invested in your success, I can't recommend him enough.`,
            author: "Pure Plumbing & Air",
            source: "Google Review",
            metricBadge: "40% year-over-year revenue increase",
          }}
          placeholders={[
            { hint: "Add second plumbing operator review with revenue or booking metric badge" },
            { hint: "Add third plumbing operator review with revenue or booking metric badge" },
          ]}
        />
      </div>

      {/* 8. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={plumbingContentMarketingConfig.faq} />
      </div>

      {/* NOTE: No Bigger Picture / Ecosystem section on this child page — lives on parent hub only */}

      {/* 9. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default PlumbingContentMarketing;
