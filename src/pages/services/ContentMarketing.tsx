import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Thermometer } from "lucide-react";
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
          heroHeadline="Plumbing & HVAC Content Marketing"
          heroSubtitle="Built for Authority, Rankings, and Booked Calls"
          description={{
            intro: "Most contractor content is written to fill a blog page. It ranks for searches outside your service area. It pulls in homeowners who aren't buying. It has no path to a booked call.",
            bullets: [
              "Built around how customers search for plumbing and HVAC in your market",
              "Connected strategy across Google Maps, organic, and local search",
              "Compressed to essentials: structure, intent, conversion — and only what actually works",
            ],
            closing: "No generic home services approach. Built for plumbing and HVAC operators only."
          }}
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

      <MarketExclusivity />

      <SectionDivider />

      {/* 4. THE STRUCTURE (ROADMAP) */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={contentMarketingConfig.roadmap} />
      </div>

      <SectionDivider />

      {/* 5. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={contentMarketingConfig.buildingBlocks} />
      </div>

      <SectionDivider />

      {/* 6. BUILT FOR BOTH */}
      <section id="built-for-both" className="py-24 lg:py-32 section-light scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-4">
              Trade-Specific Execution
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              Built for Both. Engineered for Each.
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Plumbing and HVAC are different trades with different demand patterns, different seasonality, and different keyword structures. Every content strategy we build treats them separately, even when we serve both for the same operator.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Plumbing */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                  <Droplets className="h-7 w-7 text-accent-blue" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Plumbing Content Marketing</h3>
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Plumbing demand is largely emergency-driven. A burst pipe, a failed water heater, a backed-up main line — these are not planned purchases. The homeowner searches, scans the top results, and calls. Plumbing content marketing has to win that moment.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Emergency and high-intent keyword prioritization: 'burst pipe repair [city],' 'water heater replacement [city]'",
                  "Geographic content pages aligned to your actual dispatch coverage — not just major city names",
                  "Review velocity support: content that reinforces trust signals for emergency callers comparing options",
                  "GBP category alignment for drain cleaning, water heater, slab leak, and repiping revenue",
                  "Multi-truck radius scaling: as your coverage expands, the content structure scales with it",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-cta shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/plumbing-content-marketing"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-cta hover:bg-cta/90 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Plumbing Content Marketing Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* HVAC */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Thermometer className="h-7 w-7 text-amber-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">HVAC Content Marketing</h3>
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                HVAC demand is seasonal and dual-natured — emergency repair in peak season and planned replacement year-round. HVAC content marketing has to capture both: no-cool calls in summer and equipment changeout intent before a system fails.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Heating vs. cooling keyword splits by season and market climate zone",
                  "Install vs. repair content structure: each service type gets its own page, its own intent targeting",
                  "Maintenance agreement visibility: content positioning for tune-up and annual service plan searches",
                  "Seasonal demand alignment: no-cool spikes, freeze prep, and shoulder season strategies",
                  "Equipment transition and changeout keyword capture for high-margin replacement revenue",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-cta shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/hvac-content-marketing"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-cta hover:bg-cta/90 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                HVAC Content Marketing Details <ArrowRight className="h-4 w-4" />
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

      {/* 11. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default ContentMarketing;
