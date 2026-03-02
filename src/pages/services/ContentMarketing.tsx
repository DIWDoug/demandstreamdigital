import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
  ServiceEcosystemSection,
  ServiceTestimonialsSection,
} from "@/components/services/generic";
import { contentMarketingConfig } from "@/data/service-pages/content-marketing";
import { getServiceHubSchema } from "@/lib/schema";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const ContentMarketing = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: contentMarketingConfig.title }
  ];

  const pageSchema = getServiceHubSchema({
    name: "Plumbing & HVAC Content Marketing",
    description: contentMarketingConfig.metaDescription,
    url: contentMarketingConfig.canonicalUrl,
    serviceType: "Content Marketing Service",
    faqGroups: contentMarketingConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{contentMarketingConfig.metaTitle}</title>
        <meta name="description" content={contentMarketingConfig.metaDescription} />
        <link rel="canonical" href={contentMarketingConfig.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <meta property="og:title" content={contentMarketingConfig.metaTitle} />
        <meta property="og:description" content={contentMarketingConfig.metaDescription} />
        <meta property="og:url" content={contentMarketingConfig.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={contentMarketingConfig.metaTitle} />
        <meta name="twitter:description" content={contentMarketingConfig.metaDescription} />
        <meta name="twitter:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
      </Helmet>

      <Header />

      {/* 1. HERO */}
      <div className="pt-16">
        <ServiceHubHero
          title={contentMarketingConfig.title}
          description="Most contractor content is written to fill a blog page. It ranks for searches outside your service area. It pulls in homeowners who aren't buying. It has no path to a booked call. We build content systems that do the opposite."
          breadcrumbs={breadcrumbItems}
        />
      </div>

      {/* STICKY ANCHOR NAV */}
      <ServiceHubAnchorNav />

      {/* 2. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <ServiceProblemSection config={contentMarketingConfig.problem} />
      </div>

      <SectionDivider />

      {/* 3. WHAT CHANGES (OUTCOMES) */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={contentMarketingConfig.outcomes} />
      </div>

      <SectionDivider />

      {/* 4. THE STRUCTURE (ROADMAP) */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={contentMarketingConfig.roadmap} />
      </div>

      <SectionDivider />

      {/* 5. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={contentMarketingConfig.buildingBlocks} hubSlug="content-marketing" />
      </div>

      <SectionDivider />

      {/* 6. BUILT FOR BOTH */}
      <section id="built-for-both" className="py-24 lg:py-32 bg-background scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1.5 rounded-md bg-[#0D1B2A] border border-white/10 text-white text-xs font-semibold uppercase tracking-widest mb-4">
              Built for Both
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              Plumbing &amp; HVAC — Built for Both
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Every content strategy is built around how customers search for your specific trade, in your specific market, at the moment they need service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Plumbing */}
            <div className="bg-[#1A2E44] rounded-xl border border-white/10 p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Plumbing Content Marketing</h3>
              <p className="text-text-secondary text-base leading-relaxed mb-4">
                Content built around how plumbing demand actually works — emergency intent, service specificity, and local trust. Each service gets its own authority cluster.
              </p>
              <p className="text-text-muted text-sm mb-6 italic">Also available for multi-location operators.</p>
              <Link
                to="/plumbing-content-marketing"
                className="inline-flex items-center gap-2 text-accent-blue text-sm font-semibold hover:text-white transition-colors"
              >
                See what's included <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* HVAC */}
            <div className="bg-[#1A2E44] rounded-xl border border-white/10 p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">HVAC Content Marketing</h3>
              <p className="text-text-secondary text-base leading-relaxed mb-4">
                Content built around HVAC's dual demand structure — emergency repair and planned replacement. Seasonal authority, maintenance agreement support, and AI-ready content for the most competitive HVAC searches in your market.
              </p>
              <p className="text-text-muted text-sm mb-6 italic">Also available for multi-location operators.</p>
              <Link
                to="/hvac-content-marketing"
                className="inline-flex items-center gap-2 text-accent-blue text-sm font-semibold hover:text-white transition-colors"
              >
                See what's included <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 7. SELECTIVE FIT */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={contentMarketingConfig.qualification} />
      </div>

      {/* 8. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <ServiceTestimonialsSection
          featured={{
            eyebrow: "What Plumbing & HVAC Operators Say",
            quote: `Working with our SEO partner has been one of the best marketing decisions we've made. In just a few months, he has completely transformed our SEO performance with a roadmap that is not only strategic, but clearly tailored to our business. For the first time, we don't feel like we're guessing. We have a plan, data to back it up, and a partner who keeps us accountable.\n\nWhat truly sets him apart is transparency. After past experiences with agencies where SEO felt like a "black box," it's refreshing to work with a team that provides real, clear data and explains what's working and why. His insights are thoughtful, his ideas are strong, and his use of AI is smart and intentional, not gimmicky.\n\nBeyond the strategy, the results speak for themselves. We saw a 40% year-over-year revenue increase this past December, and while SEO isn't the only factor, it has absolutely contributed to that growth.\n\nHe is passionate about what he does, and it shows in both his work and his team. This is not a vendor relationship. This is a true partnership.\n\nIf you're looking for an SEO company that is strategic, transparent, and genuinely invested in your success, I can't recommend him enough.`,
            author: "Pure Plumbing & Air",
            source: "Google Review",
            metricBadge: "40% year-over-year revenue increase",
          }}
          placeholders={[
            { hint: "Add second plumbing or HVAC operator review with revenue or booking metric badge" },
            { hint: "Add third plumbing or HVAC operator review with revenue or booking metric badge" },
          ]}
        />
      </div>

      {/* 9. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={contentMarketingConfig.faq} />
      </div>

      {/* 10. ECOSYSTEM / BIGGER PICTURE */}
      <ServiceEcosystemSection config={contentMarketingConfig.ecosystem} />

      <MarketExclusivity />

      {/* 11. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default ContentMarketing;
