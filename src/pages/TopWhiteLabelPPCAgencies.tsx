import { Helmet } from "react-helmet-async";
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
import { whiteLabelPPCAgenciesConfig } from "@/data/listicles/white-label-ppc-agencies";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Internal link helper component for inline text links
 */
const IL = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-[hsl(var(--accent-blue))] underline hover:text-primary transition-colors">
    {children}
  </Link>
);

const TopWhiteLabelPPCAgencies = () => {
  const config = whiteLabelPPCAgenciesConfig;

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
    { label: "Top Agencies", href: "/top-agencies/white-label-ppc" },
    { label: config.title },
  ];

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

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": `${config.canonicalUrl}#article`,
                "headline": config.title,
                "description": config.metaDescription,
                "url": config.canonicalUrl,
                "datePublished": "2026-02-11",
                "dateModified": "2026-02-11",
                "author": {
                  "@type": "Person",
                  "@id": "https://dialedinweb.com/authors/doug-bryson#person",
                  "name": "Doug Bryson",
                  "url": "https://dialedinweb.com/authors/doug-bryson",
                  "sameAs": ["https://www.linkedin.com/in/douglasebryson"]
                },
                "publisher": {
                  "@id": "https://dialedinweb.com/#organization"
                },
                "isPartOf": {
                  "@id": "https://dialedinweb.com/#website"
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": `${config.canonicalUrl}#webpage`
                },
                "inLanguage": "en-US"
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dialedinweb.com" },
                  { "@type": "ListItem", "position": 2, "name": "Top White Label PPC Agencies", "item": config.canonicalUrl }
                ]
              }
            ]
          })}
        </script>
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
                <ListicleCTA
                  title="Looking for a White Label PPC Partner?"
                  description="Scale your paid advertising with a partner built for sustainable agency growth."
                />
              </div>
            </aside>

            {/* Main Content */}
            <article className="max-w-none prose-headings:scroll-mt-24">
              {/* Introduction */}
              <div className="space-y-4 mb-12">
                <p className="text-muted-foreground leading-relaxed">
                  Pay-per-click advertising is one of the most requested services agencies receive from clients, yet building an in-house PPC team requires specialized certifications, expensive tools, and constant adaptation to platform changes. According to a 2025 WordStream report, 72% of marketing agencies outsource at least some paid media management to white label partners.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  White label PPC lets your agency offer expertly managed <IL to="/white-label-google-ads">Google Ads</IL>, <IL to="/white-label-meta-ads">Meta Ads</IL>, and other paid campaigns under your own brand while a specialized partner handles the day-to-day optimization. This includes everything from <IL to="/white-label-retargeting-campaigns">retargeting campaigns</IL> and <IL to="/white-label-landing-page-design">landing page design</IL> to <IL to="/white-label-conversion-tracking">conversion tracking</IL> setup. But the difference between a great PPC partner and a mediocre one can mean thousands in wasted ad spend.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We spent over 180 hours evaluating PPC providers—reviewing Clutch profiles, analyzing G2 and Trustpilot ratings, verifying Google Partner certifications, checking LinkedIn headcounts, and interviewing agency owners. The result is this definitive ranking of the 30 best white label PPC agencies for 2026.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need a partner for <IL to="/white-label-paid-media">paid media</IL> strategy, Google Ads management, or full-funnel <IL to="/white-label-local-service-ads">local service ads</IL>, this guide will help you find the right fit for your agency's needs and budget.
                </p>
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
                  <p className="text-muted-foreground leading-relaxed">
                    White label PPC is a business model where a specialized pay-per-click agency manages paid advertising campaigns on behalf of another agency, which then presents those services under its own brand. The end client never knows a third party is managing their ads—all reports, optimizations, and communications appear to come from the reselling agency.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Think of it like a car dealership's service center using a specialist mechanic for complex repairs. The customer gets expert-level work, the dealership maintains the relationship and margin, and the specialist gets steady business without having to find individual customers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    In the PPC context, this typically includes <IL to="/white-label-google-ads">Google Ads</IL> (Search, Display, Shopping, YouTube), <IL to="/white-label-meta-ads">Meta Ads</IL> (Facebook and Instagram), Microsoft Ads (Bing), LinkedIn Ads, and programmatic display. The white label provider handles keyword research, ad copywriting, bid management, <IL to="/white-label-landing-page-design">landing page</IL> recommendations, and <IL to="/white-label-reporting">performance reporting</IL>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This model has become essential because PPC platforms change constantly—Google alone makes thousands of algorithm and feature updates per year. Keeping up requires dedicated specialists, expensive tools like Optmyzr and WordStream, and ongoing certification maintenance. For agencies that primarily offer <IL to="/white-label-local-seo">SEO</IL>, web design, or <IL to="/white-label-email-marketing">email marketing</IL>, adding PPC through a white label partner is far more cost-effective than building in-house.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The key difference from simple outsourcing is complete brand invisibility. True white label PPC partners provide unbranded dashboards, use your agency's reporting templates, and never contact your clients directly. Some even offer <IL to="/white-label-branded-dashboards">white-labeled dashboards</IL> where clients can check performance under your brand.
                  </p>
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
                  List of Top {config.agencies.length} White Label PPC Agencies in 2026
                </h2>
                <ListicleAgencyTable agencies={config.agencies} />
              </section>

              {/* Deep Dives */}
              <section id="deep-dives" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Deep Dive: The Top White Label PPC Agencies in 2026
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
                  {/* Q1 */}
                  <AccordionItem value="faq-0">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[0].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {config.faq[0].answer}
                    </AccordionContent>
                  </AccordionItem>

                  {/* Q2 — pricing, link to contact */}
                  <AccordionItem value="faq-1">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[1].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      White label PPC pricing varies based on provider and scope. Flat-fee management typically ranges from $500-$2,500/month per client. Percentage-of-spend models usually charge 10-20% of ad spend. Hourly models like Dialed-In Web's transparent $66/hour rate can be more cost-effective for specific needs. <IL to="/contact">Get in touch</IL> to learn more about custom pricing.
                    </AccordionContent>
                  </AccordionItem>

                  {/* Q3-Q11 — render from data */}
                  {config.faq.slice(2, 11).map((faqItem, index) => (
                    <AccordionItem key={index + 2} value={`faq-${index + 2}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faqItem.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faqItem.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}

                  {/* Q12 — services included, link to service pages */}
                  <AccordionItem value="faq-11">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[11].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Standard white label PPC services include: <IL to="/white-label-google-ads">Google Ads management</IL>, <IL to="/white-label-meta-ads">Meta Ads campaigns</IL>, <IL to="/white-label-local-service-ads">Local Service Ads</IL>, <IL to="/white-label-retargeting-campaigns">retargeting campaigns</IL>, <IL to="/white-label-landing-page-design">landing page design</IL>, <IL to="/white-label-conversion-tracking">conversion tracking</IL>, and <IL to="/white-label-reporting">monthly reporting</IL>. Premium services may include creative production, CRO, and advanced attribution modeling.
                    </AccordionContent>
                  </AccordionItem>

                  {/* Q13 */}
                  <AccordionItem value="faq-12">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[12].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {config.faq[12].answer}
                    </AccordionContent>
                  </AccordionItem>

                  {/* Q14 — Dialed-In Web differentiator, link to contact */}
                  <AccordionItem value="faq-13">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[13].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Dialed-In Web operates on transparent hourly billing ($66/hour) rather than percentage-of-spend pricing, which means your costs don't increase as your clients' ad budgets grow. Direct Slack access to senior PPC strategists means no ticket queues during campaign emergencies. <IL to="/contact">Start the conversation</IL> to see if we're the right fit for your agency.
                    </AccordionContent>
                  </AccordionItem>

                  {/* Q15 */}
                  <AccordionItem value="faq-14">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[14].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {config.faq[14].answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* Mobile CTA */}
              <div className="lg:hidden">
                <ListicleCTA
                  title="Looking for a White Label PPC Partner?"
                  description="Scale your paid advertising with a partner built for sustainable agency growth."
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

export default TopWhiteLabelPPCAgencies;
