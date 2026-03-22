import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import IL from "@/components/IL";
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
import { plumbingPPCCompaniesConfig } from "@/data/listicles/ppc-companies-for-plumbers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BestPlumbingPPCCompanies = () => {
  const config = plumbingPPCCompaniesConfig;

  const tocItems = [
    { id: "at-a-glance", label: "At a Glance" },
    { id: "what-is", label: config.whatIs.title },
    { id: "how-it-works", label: config.howItWorks.title },
    { id: "who-is-best-for", label: config.whoIsBestFor.title },
    { id: "agency-table", label: "Company Rankings Table" },
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
            { "@type": "Article", "@id": `${config.canonicalUrl}#article`, "headline": config.title, "description": config.metaDescription, "url": config.canonicalUrl, "datePublished": "2026-02-11", "dateModified": "2026-02-28", "author": { "@type": "Person", "@id": "https://demandstreamdigital.com/authors/doug-bryson#person", "name": "Doug Bryson", "url": "https://demandstreamdigital.com/authors/doug-bryson", "sameAs": ["https://www.linkedin.com/in/douglasebryson"] }, "publisher": { "@id": "https://demandstreamdigital.com/#organization" }, "isPartOf": { "@id": "https://demandstreamdigital.com/#website" }, "mainEntityOfPage": { "@type": "WebPage", "@id": `${config.canonicalUrl}#webpage` }, "inLanguage": "en-US" },
            { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://demandstreamdigital.com" }, { "@type": "ListItem", "position": 2, "name": "Best PPC Companies for Plumbing & HVAC", "item": config.canonicalUrl }] }
          ]
        }}
      />

      <Header />

      <main className="pt-16">
        <ListicleHero title={config.title} author={config.author} lastUpdated={config.lastUpdated} breadcrumbs={breadcrumbs} />

        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 xl:gap-12">
            <aside className="lg:sticky lg:top-24 lg:self-start hidden lg:block">
              <ListicleTableOfContents items={tocItems} />
              <div className="mt-6">
                <ListicleCTA
                  title="Need More Calls from Paid Ads?"
                  description="We run Google Ads and paid campaigns built specifically for plumbing and HVAC companies. No wasted spend."
                />
              </div>
            </aside>

            <article className="max-w-none prose-headings:scroll-mt-24">
              {/* Introduction */}
              <div className="space-y-4 mb-12">
                <p className="text-muted-foreground leading-relaxed">
                  Pay-per-click advertising is one of the fastest ways to get your phone ringing. When a homeowner searches "emergency plumber near me" or "AC repair today," a well-placed Google Ad puts your business right at the top. But running ads that actually make money (instead of burning through your budget) takes real expertise.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  PPC for plumbing and HVAC companies includes <IL to="/plumbing-paid-advertising">Google Ads</IL>, Local Service Ads, and social media advertising. Done right, it fills your schedule with high-value jobs. Done wrong, it drains your bank account with clicks that never turn into customers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We spent over 180 hours evaluating PPC providers, reviewing Clutch profiles, analyzing G2 and Trustpilot ratings, verifying Google Partner certifications, checking LinkedIn headcounts, and talking to trade business owners. The result is this ranking of the 30 best PPC companies for plumbing and HVAC businesses in 2026.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need someone to manage your Google Ads, run <IL to="/plumbing-paid-advertising">paid media</IL> campaigns, or build a full-funnel advertising strategy, this guide will help you find the right partner.
                </p>
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
                  <p className="text-muted-foreground leading-relaxed">
                    PPC (pay-per-click) advertising for plumbing and HVAC companies means paying to show your business at the top of Google when homeowners search for services you offer. You only pay when someone actually clicks on your ad, which means every dollar goes toward getting a potential customer to your website or phone number.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Think of it like putting a billboard on the exact street where people are looking for a plumber right now. Except instead of paying for everyone who drives by, you only pay when someone actually stops and calls.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    For trade businesses, PPC typically includes Google Search Ads, Google Local Service Ads (the "Google Guaranteed" listings), Display Ads, and sometimes social media ads on Facebook and Instagram. A good PPC company handles the keyword research, writes the ads, manages your budget, and tracks which ads are actually generating calls and booked jobs.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This matters because Google Ads is complicated. The platform changes constantly, bidding strategies require daily attention, and a single misconfigured campaign can waste thousands of dollars in a week. For plumbing and HVAC companies focused on running jobs, hiring a specialist to manage ads is almost always more cost-effective than doing it yourself.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The key is finding a PPC company that understands the trades. Seasonality, emergency vs. scheduled service, service area targeting, and the types of jobs that actually make you money are all critical factors that generic marketing firms often miss.
                  </p>
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
                <p className="font-semibold text-foreground mb-4">Here's who will get the most value:</p>
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

              {/* Company Table */}
              <section id="agency-table" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Top {config.agencies.length} PPC Companies for Plumbing & HVAC in 2026</h2>
                <ListicleAgencyTable agencies={config.agencies} />
              </section>

              {/* Deep Dives */}
              <section id="deep-dives" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Deep Dive: The Best PPC Companies for Plumbers in 2026</h2>
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
                  <AccordionItem value="faq-0">
                    <AccordionTrigger className="text-left font-semibold">{config.faq[0].question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{config.faq[0].answer}</AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-1">
                    <AccordionTrigger className="text-left font-semibold">{config.faq[1].question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      PPC management pricing for plumbing and HVAC varies based on your ad budget and goals. Flat-fee management typically ranges from $500-$2,500/month. Percentage-of-spend models charge 10-20% of your ad budget. Demand Stream Digital uses transparent hourly billing at $100/hour, so your management costs don't spike as your ad spend grows. <IL to="/contact">Get in touch</IL> to learn more.
                    </AccordionContent>
                  </AccordionItem>

                  {config.faq.slice(2, 11).map((faqItem, index) => (
                    <AccordionItem key={index + 2} value={`faq-${index + 2}`}>
                      <AccordionTrigger className="text-left font-semibold">{faqItem.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faqItem.answer}</AccordionContent>
                    </AccordionItem>
                  ))}

                  <AccordionItem value="faq-11">
                    <AccordionTrigger className="text-left font-semibold">{config.faq[11].question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      PPC services for plumbing and HVAC companies typically include: <IL to="/plumbing-paid-advertising">Google Ads management</IL>, Local Service Ads, social media advertising, landing page optimization, conversion tracking, and <IL to="/plumbing-reporting">monthly reporting</IL>. Premium services may include creative production, A/B testing, and advanced attribution modeling.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-12">
                    <AccordionTrigger className="text-left font-semibold">{config.faq[12].question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{config.faq[12].answer}</AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-13">
                    <AccordionTrigger className="text-left font-semibold">{config.faq[13].question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Demand Stream Digital was built specifically for plumbing and HVAC companies. We use transparent hourly billing ($66/hour) instead of percentage-of-spend pricing, so your costs don't increase as your ad budget grows. You get direct access to the person managing your campaigns, not a ticket queue. <IL to="/contact">Start the conversation</IL> to see if we're the right fit.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-14">
                    <AccordionTrigger className="text-left font-semibold">{config.faq[14].question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{config.faq[14].answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              <div className="lg:hidden">
                <ListicleCTA
                  title="Need More Calls from Paid Ads?"
                  description="We run Google Ads and paid campaigns built specifically for plumbing and HVAC companies. No wasted spend."
                />
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

export default BestPlumbingPPCCompanies;
