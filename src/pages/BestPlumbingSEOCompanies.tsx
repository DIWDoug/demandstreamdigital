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
import { plumbingSEOCompaniesConfig } from "@/data/listicles/seo-companies-for-plumbers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BestPlumbingSEOCompanies = () => {
  const config = plumbingSEOCompaniesConfig;

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
            { "@type": "Article", "@id": `${config.canonicalUrl}#article`, "headline": config.title, "description": config.metaDescription, "url": config.canonicalUrl, "datePublished": "2026-02-05", "dateModified": "2026-02-28", "author": { "@type": "Person", "@id": "https://demandstreamdigital.com/authors/doug-bryson#person", "name": "Doug Bryson", "url": "https://demandstreamdigital.com/authors/doug-bryson", "sameAs": ["https://www.linkedin.com/in/douglasebryson"] }, "publisher": { "@id": "https://demandstreamdigital.com/#organization" }, "isPartOf": { "@id": "https://demandstreamdigital.com/#website" }, "mainEntityOfPage": { "@type": "WebPage", "@id": `${config.canonicalUrl}#webpage` }, "inLanguage": "en-US" },
            { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://demandstreamdigital.com" }, { "@type": "ListItem", "position": 2, "name": "Best SEO Companies for Plumbing & HVAC", "item": config.canonicalUrl }] }
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
              <div className="mt-6"><ListicleCTA /></div>
            </aside>

            <article className="max-w-none prose-headings:scroll-mt-24">
              {/* Introduction */}
              <div className="space-y-4 mb-12">
                <p className="text-muted-foreground leading-relaxed">
                  If you run a plumbing or HVAC company, you know that word-of-mouth only goes so far. More homeowners are searching online for "plumber near me" and "AC repair" than ever before. According to BrightLocal's 2025 Local Consumer Review Survey, 98% of consumers used the internet to find information about local businesses in the past year.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  SEO (search engine optimization) is how you show up when those homeowners search. It includes everything from <IL to="/hvac-and-plumbing-seo">local SEO</IL> and <IL to="/plumbing-google-maps">Google Maps optimization</IL> to <IL to="/plumbing-content-marketing">content marketing</IL> and <IL to="/hvac-and-plumbing-seo">building online authority</IL>. But not every marketing company understands the trades. Finding one that actually gets plumbing and HVAC is the hard part.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We spent over 200 hours researching this space, analyzing Clutch profiles, combing through G2 reviews, cross-referencing Trustpilot ratings, checking LinkedIn headcounts, and talking to trade business owners who use these services. The result is this guide ranking the 30 best SEO companies for plumbing and HVAC businesses in 2026.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a one-truck operation looking to fill your schedule or a multi-location company looking to own your market, this guide will help you find the right SEO partner for your business.
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
                    SEO for plumbing and HVAC companies is the process of making your business show up higher in Google search results when homeowners look for services you offer. When someone types "emergency plumber near me" or "HVAC repair in [city]," SEO is what determines whether your business appears on the first page or gets buried.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Think of it like your truck's signage, but for the internet. A well-wrapped truck catches attention on the road. Good SEO catches attention online. And since most people never scroll past the first few results on Google, ranking higher means more phone calls, more booked jobs, and more revenue.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    For trade businesses, SEO typically includes <IL to="/hvac-and-plumbing-seo">local search optimization</IL>, <IL to="/plumbing-google-maps">Google Business Profile management</IL>, <IL to="/plumbing-content-marketing">creating helpful content</IL> that answers homeowner questions, and <IL to="/hvac-and-plumbing-seo">building your online reputation</IL>. An SEO company handles this work so you can focus on running jobs and growing your team.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This matters because homeowners have changed how they find service providers. Yellow Pages are gone. Referrals still help, but most people verify online before they call. If your website doesn't show up, you're losing jobs to competitors who invested in their online presence.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The key is working with a company that understands the trades. Generic marketing firms often don't grasp seasonality, service area dynamics, or how plumbing and HVAC customers make buying decisions. The best SEO partners for your business know your industry inside and out.
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
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Top {config.agencies.length} SEO Companies for Plumbing & HVAC in 2026</h2>
                <ListicleAgencyTable agencies={config.agencies} />
              </section>

              {/* Deep Dives */}
              <section id="deep-dives" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Deep Dive: The Best SEO Companies for Plumbers in 2026</h2>
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
                      SEO pricing for plumbing and HVAC companies varies widely. Basic local SEO packages typically run $500-$1,500/month. Mid-range campaigns covering multiple service areas cost $1,500-$3,500/month. Enterprise-level SEO for multi-location operations can exceed $5,000/month. Demand Stream Digital offers transparent hourly billing ($100/hour) so you only pay for the work that actually gets done. <IL to="/contact">Get in touch</IL> to learn more.
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
                      SEO services for plumbing and HVAC companies typically include: <IL to="/hvac-and-plumbing-seo">local SEO optimization</IL>, <IL to="/plumbing-google-maps">Google Business Profile management</IL>, <IL to="/plumbing-content-marketing">content creation</IL>, <IL to="/hvac-and-plumbing-seo">link building and authority development</IL>, <IL to="/hvac-and-plumbing-paid-ads">paid search campaigns</IL>, and <IL to="/plumbing-reporting">monthly reporting</IL>. Premium services may include reputation management, conversion rate optimization, and advanced analytics.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-12">
                    <AccordionTrigger className="text-left font-semibold">{config.faq[12].question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{config.faq[12].answer}</AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-13">
                    <AccordionTrigger className="text-left font-semibold">{config.faq[13].question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Demand Stream Digital was built specifically for plumbing and HVAC companies. We use transparent hourly billing ($100/hour) instead of bloated packages, so you know exactly what you're paying for. You get direct communication with the person working on your account, not a ticket queue. <IL to="/contact">Start the conversation</IL> to see if we're the right fit for your business.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-14">
                    <AccordionTrigger className="text-left font-semibold">{config.faq[14].question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{config.faq[14].answer}</AccordionContent>
                  </AccordionItem>
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

export default BestPlumbingSEOCompanies;
