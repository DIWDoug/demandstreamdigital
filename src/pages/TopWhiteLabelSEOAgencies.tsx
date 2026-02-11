import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import {
  ListicleHero,
  ListicleTableOfContents,
  ListicleAgencyTable,
  ListicleAgencyCard,
  ListicleCTA,
  ListicleScrollCTA,
} from "@/components/listicle";
import { whiteLabelSEOAgenciesConfig } from "@/data/listicles/white-label-seo-agencies";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const TopWhiteLabelSEOAgencies = () => {
  const config = whiteLabelSEOAgenciesConfig;

  const tocItems = [
    { id: "at-a-glance", label: "At a Glance" },
    { id: "what-is", label: config.whatIs.title },
    { id: "how-it-works", label: config.howItWorks.title },
    { id: "who-is-best-for", label: config.whoIsBestFor.title },
    { id: "agency-table", label: "Agency Rankings Table" },
    { id: "deep-dives", label: "Deep Dive Reviews" },
    { id: "faq", label: "FAQ" },
  ];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Top Agencies", href: "/top-agencies/white-label-seo" },
    { label: config.title },
  ];

  // Get agencies with deep dives for the detailed sections
  const agenciesWithDeepDives = config.agencies.filter((a) => a.deepDive);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{config.metaTitle}</title>
        <meta name="description" content={config.metaDescription} />
        <link rel="canonical" href={config.canonicalUrl} />
        <meta name="keywords" content={config.keywords} />

        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href={config.canonicalUrl} />
        <link rel="alternate" hrefLang="en-CA" href={config.canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={config.canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={config.metaTitle} />
        <meta property="og:description" content={config.metaDescription} />
        <meta property="og:url" content={config.canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Dialed-In Web" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.metaTitle} />
        <meta name="twitter:description" content={config.metaDescription} />
      </Helmet>

      <Header />

      <main className="pt-16">
        {/* Hero */}
        <ListicleHero
          title={config.title}
          author={config.author}
          lastUpdated={config.lastUpdated}
          breadcrumbs={breadcrumbs}
        />

        {/* Main Content Grid */}
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 xl:gap-12">
            {/* Sidebar - TOC */}
            <aside className="lg:sticky lg:top-24 lg:self-start hidden lg:block">
              <ListicleTableOfContents items={tocItems} />
              <div className="mt-6">
                <ListicleCTA />
              </div>
            </aside>

            {/* Main Content */}
            <article className="max-w-none prose-headings:scroll-mt-24">
              {/* Introduction */}
              <div className="space-y-4 mb-12">
                {config.introduction.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* At a Glance */}
              <section id="at-a-glance" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {config.atAGlance.title}
                </h2>
                <p className="text-muted-foreground mb-4">{config.atAGlance.intro}</p>
                <p className="text-muted-foreground mb-6 font-medium">
                  {config.atAGlance.topPickNote}
                </p>
                <ol className="space-y-2 list-none pl-0">
                  {config.atAGlance.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="font-bold text-primary min-w-[2rem]">
                        {item.rank === 0 ? "⭐" : `${item.rank.toString().padStart(2, "0")}.`}
                      </span>
                      <span>
                        <a
                          href={`#${item.anchor}`}
                          className="font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                        </a>
                        <span className="text-muted-foreground"> — {item.description}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </section>

              {/* What Is */}
              <section id="what-is" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {config.whatIs.title}
                </h2>
                <div className="space-y-4">
                  {config.whatIs.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* How It Works */}
              <section id="how-it-works" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {config.howItWorks.title}
                </h2>
                <p className="text-muted-foreground mb-6">{config.howItWorks.intro}</p>
                <ol className="space-y-4 list-none pl-0">
                  {config.howItWorks.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="text-muted-foreground mt-6 italic border-l-4 border-primary/30 pl-4">
                  {config.howItWorks.closing}
                </p>
              </section>

              {/* Who Is Best For */}
              <section id="who-is-best-for" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {config.whoIsBestFor.title}
                </h2>
                <p className="text-muted-foreground mb-6">{config.whoIsBestFor.intro}</p>
                <p className="font-semibold text-foreground mb-4">
                  Here's who will benefit most:
                </p>
                <ul className="space-y-3 list-none pl-0 mb-6">
                  {config.whoIsBestFor.audiences.map((audience, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <span className="font-semibold text-foreground">{audience.title}</span>
                        <span className="text-muted-foreground"> – {audience.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">{config.whoIsBestFor.closing}</p>
              </section>

              {/* Agency Table */}
              <section id="agency-table" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  List of Top {config.agencies.length} White Label SEO Agencies in 2026
                </h2>
                <ListicleAgencyTable agencies={config.agencies} />
              </section>

              {/* Deep Dives */}
              <section id="deep-dives" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Deep Dive: The Top White Label SEO Agencies in 2026
                </h2>

                {/* Top Pick First */}
                {agenciesWithDeepDives
                  .filter((a) => a.isTopPick)
                  .map((agency) => (
                    <ListicleAgencyCard key={agency.name} agency={agency} isTopPick />
                  ))}

                {/* Rest of agencies */}
                {agenciesWithDeepDives
                  .filter((a) => !a.isTopPick)
                  .map((agency) => (
                    <ListicleAgencyCard key={agency.name} agency={agency} />
                  ))}
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {config.faq.map((item, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Mobile CTA */}
              <div className="lg:hidden">
                <ListicleCTA />
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
      <ListicleScrollCTA />
    </div>
  );
};

export default TopWhiteLabelSEOAgencies;
