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
import { whiteLabelSEOAgenciesConfig } from "@/data/listicles/white-label-seo-agencies";
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
              {/* Introduction — with internal links woven in */}
              <div className="space-y-4 mb-12">
                <p className="text-muted-foreground leading-relaxed">
                  If you run a digital marketing agency, you've probably faced this dilemma: a client asks for SEO services, but you don't have the in-house expertise or bandwidth to deliver. You're not alone. According to a 2024 BrightLocal survey, 68% of marketing agencies outsource at least some portion of their SEO work to white label providers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  White label SEO lets you offer comprehensive search engine optimization under your own brand while a specialized partner does the heavy lifting. This includes everything from <IL to="/white-label-local-seo">local SEO</IL> and <IL to="/white-label-technical-seo">technical SEO</IL> to <IL to="/white-label-content-marketing">content marketing</IL> and <IL to="/white-label-link-building">link building</IL>. But with hundreds of providers claiming to be the best, finding a reliable partner that won't embarrass you in front of clients is genuinely difficult.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We spent over 200 hours researching this space—analyzing Clutch profiles, combing through G2 reviews, cross-referencing Trustpilot ratings, checking LinkedIn headcounts, and interviewing agency owners who use these services. The result is this comprehensive guide ranking the 30 best white label SEO agencies for 2026.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a boutique agency looking to add SEO to your service menu or an established firm needing overflow capacity, this guide will help you find the right partner for your specific needs and budget.
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

              {/* What Is — with internal links */}
              <section id="what-is" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {config.whatIs.title}
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    White label SEO is a business arrangement where a specialized SEO provider performs search engine optimization services on behalf of another agency, which then presents those services to their clients under their own brand. The end client never knows a third party is involved—all reports, communications, and deliverables appear to come directly from the agency they hired.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Think of it like a restaurant that sources bread from a local bakery. The bread is excellent, it's served under the restaurant's name, and diners never need to know it wasn't baked in-house. The restaurant gets to offer a quality product without investing in ovens, bakers, and flour—and the bakery gets a reliable wholesale customer.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    In the SEO context, this typically includes services like <IL to="/white-label-local-keyword-strategy">keyword research</IL>, <IL to="/white-label-onpage-optimization">on-page optimization</IL>, <IL to="/white-label-technical-seo">technical SEO audits</IL>, <IL to="/white-label-content-development">content creation</IL>, <IL to="/white-label-link-building">link building</IL>, and <IL to="/white-label-reporting">monthly reporting</IL>. The white label provider does the actual work, but your agency maintains the client relationship and takes credit for the results.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This model has become increasingly popular because SEO requires specialized skills, expensive tools (like Ahrefs, Semrush, and Surfer SEO), and significant time investment. For agencies that primarily offer other services—web design, <IL to="/white-label-paid-media">paid advertising</IL>, <IL to="/white-label-email-marketing">email marketing</IL>—adding SEO through a white label partner makes more business sense than building an in-house team.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The key differentiator from simply "outsourcing" is the branding component. True white label partners provide unbranded deliverables, use your agency's email domain for client communications (if requested), and never reveal their involvement. Some even offer <IL to="/white-label-branded-dashboards">white-labeled dashboards</IL> where clients can log in to see their progress—all under your brand.
                  </p>
                </div>
              </section>

              {/* How It Works — with internal links */}
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

              {/* Who Is Best For — with internal links */}
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

              {/* FAQ — with internal links in select answers */}
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
                      White label SEO pricing varies widely based on the provider and service scope. Entry-level packages for small business clients typically range from $300-$500/month. Mid-market campaigns run $1,000-$3,000/month, while enterprise-level SEO can exceed $5,000/month. Most agencies mark up these rates 50-100% when reselling to their clients. Some providers like Dialed-In Web offer transparent hourly billing (e.g., $66/hour) which can be more cost-effective for specific needs. <IL to="/contact">Get in touch</IL> to learn more about custom pricing.
                    </AccordionContent>
                  </AccordionItem>

                  {/* Q3 */}
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[2].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {config.faq[2].answer}
                    </AccordionContent>
                  </AccordionItem>

                  {/* Q4 */}
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[3].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {config.faq[3].answer}
                    </AccordionContent>
                  </AccordionItem>

                  {/* Q5 */}
                  <AccordionItem value="faq-4">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[4].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {config.faq[4].answer}
                    </AccordionContent>
                  </AccordionItem>

                  {/* Q6 */}
                  <AccordionItem value="faq-5">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[5].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {config.faq[5].answer}
                    </AccordionContent>
                  </AccordionItem>

                  {/* Q7 */}
                  <AccordionItem value="faq-6">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[6].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {config.faq[6].answer}
                    </AccordionContent>
                  </AccordionItem>

                  {/* Q8 */}
                  <AccordionItem value="faq-7">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[7].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {config.faq[7].answer}
                    </AccordionContent>
                  </AccordionItem>

                  {/* Q9 */}
                  <AccordionItem value="faq-8">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[8].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {config.faq[8].answer}
                    </AccordionContent>
                  </AccordionItem>

                  {/* Q10 */}
                  <AccordionItem value="faq-9">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[9].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {config.faq[9].answer}
                    </AccordionContent>
                  </AccordionItem>

                  {/* Q11 */}
                  <AccordionItem value="faq-10">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[10].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {config.faq[10].answer}
                    </AccordionContent>
                  </AccordionItem>

                  {/* Q12 — services included, link to service pages */}
                  <AccordionItem value="faq-11">
                    <AccordionTrigger className="text-left font-semibold">
                      {config.faq[11].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Standard white label SEO services include: <IL to="/white-label-local-keyword-strategy">keyword research and strategy</IL>, <IL to="/white-label-onpage-optimization">on-page optimization</IL>, <IL to="/white-label-technical-seo">technical SEO audits and fixes</IL>, <IL to="/white-label-content-development">content creation</IL>, <IL to="/white-label-link-building">link building/outreach</IL>, <IL to="/white-label-local-seo">local SEO</IL>, and <IL to="/white-label-reporting">monthly reporting</IL>. Premium services may include digital PR, conversion rate optimization, and advanced analytics.
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
                      Dialed-In Web operates on a transparent hourly billing model ($66/hour) rather than opaque packages, which means you know exactly what you're paying for. Unlike high-volume providers where accounts may be handled by junior staff, Dialed-In Web maintains direct communication with senior strategists. <IL to="/contact">Start the conversation</IL> to see if we're the right fit for your agency.
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