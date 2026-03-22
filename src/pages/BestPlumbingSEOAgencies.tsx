import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
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
import { plumbingSEOAgenciesConfig } from "@/data/listicles/plumbing-seo-agencies";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BestPlumbingSEOAgencies = () => {
  const config = plumbingSEOAgenciesConfig;

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
    { label: config.title },
  ];

  const agenciesWithDeepDives = config.agencies.filter((a) => a.deepDive);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={config.metaTitle}
        description={config.metaDescription}
        canonical={config.canonicalUrl}
        keywords={config.keywords}
        ogType="article"
        schemaJson={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": `${config.canonicalUrl}#article`,
              "headline": config.title,
              "description": config.metaDescription,
              "url": config.canonicalUrl,
              "datePublished": "2026-03-22",
              "dateModified": "2026-03-22",
              "author": { "@type": "Person", "@id": "https://demandstreamdigital.com/authors/doug-bryson#person", "name": "Doug Bryson", "url": "https://demandstreamdigital.com/authors/doug-bryson" },
              "publisher": { "@id": "https://demandstreamdigital.com/#organization" },
              "mainEntityOfPage": { "@type": "WebPage", "@id": `${config.canonicalUrl}#webpage` },
              "inLanguage": "en-US",
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://demandstreamdigital.com" },
                { "@type": "ListItem", "position": 2, "name": config.title, "item": config.canonicalUrl },
              ],
            },
          ],
        }}
      />

      <Header />

      <main className="pt-16">
        <ListicleHero title={config.title} author={config.author} lastUpdated={config.lastUpdated} breadcrumbs={breadcrumbs} />

        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 xl:gap-12">
            <aside className="lg:sticky lg:top-24 lg:self-start hidden lg:block">
              <ListicleTableOfContents items={tocItems} />
              <div className="mt-6"><ListicleCTA /></div>
            </aside>

            <article className="max-w-none prose-headings:scroll-mt-24">
              {/* Introduction */}
              <div className="space-y-4 mb-12">
                {config.introduction.paragraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>

              {/* At a Glance */}
              <section id="at-a-glance" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{config.atAGlance.title}</h2>
                <p className="text-muted-foreground mb-4">{config.atAGlance.intro}</p>
                <p className="text-muted-foreground mb-6 font-medium">{config.atAGlance.topPickNote}</p>
                <ol className="space-y-2 list-none pl-0">
                  {config.atAGlance.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="font-bold text-primary min-w-[2rem]">
                        {item.rank === 0 ? "⭐" : `${item.rank.toString().padStart(2, "0")}.`}
                      </span>
                      <span>
                        <a href={`#${item.anchor}`} className="font-semibold text-foreground hover:text-primary transition-colors">{item.name}</a>
                        <span className="text-muted-foreground"> — {item.description}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </section>

              {/* What Is */}
              <section id="what-is" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{config.whatIs.title}</h2>
                <div className="space-y-4">
                  {config.whatIs.paragraphs.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                  ))}
                </div>
              </section>

              {/* How It Works */}
              <section id="how-it-works" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{config.howItWorks.title}</h2>
                <p className="text-muted-foreground mb-6">{config.howItWorks.intro}</p>
                <ol className="space-y-4 list-none pl-0">
                  {config.howItWorks.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">{index + 1}</span>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="text-muted-foreground mt-6 italic border-l-4 border-primary/30 pl-4">{config.howItWorks.closing}</p>
              </section>

              {/* Who Is Best For */}
              <section id="who-is-best-for" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{config.whoIsBestFor.title}</h2>
                <p className="text-muted-foreground mb-6">{config.whoIsBestFor.intro}</p>
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
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Top {config.agencies.length} Plumbing SEO Agencies in 2025</h2>
                <ListicleAgencyTable agencies={config.agencies} />
              </section>

              {/* Deep Dives */}
              <section id="deep-dives" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Deep Dive: The Best Plumbing SEO Agencies in 2025</h2>
                {agenciesWithDeepDives.filter((a) => a.isTopPick).map((agency) => (
                  <ListicleAgencyCard key={agency.name} agency={agency} isTopPick />
                ))}
                {agenciesWithDeepDives.filter((a) => !a.isTopPick).map((agency) => (
                  <ListicleAgencyCard key={agency.name} agency={agency} />
                ))}
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {config.faq.map((item, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              <div className="lg:hidden"><ListicleCTA /></div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
      <ListicleScrollCTA />
    </div>
  );
};

export default BestPlumbingSEOAgencies;
