import { useLocation, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import TrustReel from "@/components/sections/TrustReel";
import MidPageCTA from "@/components/sections/MidPageCTA";
import { hubs } from "@/data/services";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SpokeAlternatingBlocks from "@/components/services/SpokeAlternatingBlocks";
import SpokeEcosystemOrbit from "@/components/services/SpokeEcosystemOrbit";
import SpokeProcessTimeline from "@/components/services/SpokeProcessTimeline";
import { spokeContentBlocks, spokeFAQs } from "@/data/spoke-content-blocks";
import { parseServiceUrl, getHubUrl, getSpokeUrl } from "@/lib/urlMappings";
import { getSpokeOgImage } from "@/lib/ogImages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

// Keywords mapping for new flat URL structure
const spokeKeywordsMap: Record<string, string> = {
  // Local SEO spokes
  'on-page-optimization': 'white label on-page SEO, local on-page optimization, meta tag optimization, content optimization services',
  'technical-seo': 'white label technical SEO, site speed optimization, crawl optimization, structured data implementation',
  'local-keyword-strategy': 'local keyword research, local search intent, geo-targeted keywords, local keyword mapping',
  'content-development': 'local SEO content, location page content, service area content, local blog writing',
  'link-building': 'white label link building, local link acquisition, authority building, local backlinks',
  'schema-markup': 'local business schema, structured data markup, rich snippets, schema implementation',
  'nap-citations': 'NAP citation building, citation cleanup, local directory listings, citation management',
  // Google Maps spokes
  'gbp-optimization': 'GBP optimization services, Google Business Profile setup, GMB management, local listing optimization',
  'review-management': 'white label review management, Google review generation, review response services, reputation management',
  'citation-building': 'citation building services, local citation management, directory submissions, NAP consistency',
  'photo-optimization': 'GBP photo optimization, business photo management, Google Maps images, visual optimization',
  'qa-management': 'Google Q&A management, GBP questions answers, local business FAQs, customer Q&A optimization',
  'post-scheduling': 'GBP post scheduling, Google Business posts, local social posting, GMB content calendar',
  // Paid Media spokes
  'google-ads': 'white label Google Ads, Google Ads management, search advertising, PPC campaign management',
  'meta-ads': 'white label Meta Ads, Facebook Ads management, Instagram advertising, social media ads',
  'local-service-ads': 'Local Service Ads management, LSA setup, Google Guaranteed, home service ads',
  'retargeting-campaigns': 'white label retargeting, display remarketing, audience retargeting, conversion optimization',
  'landing-page-design': 'PPC landing pages, conversion landing page design, campaign landing pages, high-converting pages',
  'conversion-tracking': 'conversion tracking setup, PPC analytics, Google Ads tracking, conversion attribution',
  // Email Marketing spokes
  'campaign-strategy': 'email campaign strategy, email marketing planning, campaign calendar, email content strategy',
  'list-management': 'email list management, list hygiene, subscriber management, email segmentation',
  'automation-flows': 'email automation flows, drip campaigns, automated sequences, marketing automation',
  'newsletter-design': 'newsletter design services, email template design, HTML email design, branded newsletters',
  'ab-testing': 'email A/B testing, subject line testing, email optimization, conversion testing',
  'performance-analytics': 'email analytics, campaign reporting, email performance metrics, delivery analytics',
  // Content Marketing spokes
  'geographical-content': 'geographical content, city pages, service area content, location-specific SEO',
  'topical-authority': 'topical content, industry blog posts, thought leadership content, expertise articles',
  'power-posts': 'power posts, pillar content, comprehensive guides, long-form SEO content',
  'ebooks-guides': 'ebooks, lead magnets, downloadable guides, gated content, content marketing assets',
  'lead-magnets': 'lead magnets, checklists, templates, conversion content, email list building',
  'press-releases': 'press releases, PR distribution, news announcements, media coverage',
  'case-studies': 'case studies, client success stories, testimonial content, proof assets',
  'aio-content': 'AI optimized content, AIO content, LLM visibility, answer engine optimization',
  'faq-content': 'FAQ content, question answer pages, featured snippets, voice search optimization',
  'hub-spoke-buildouts': 'hub and spoke content, topic clusters, content architecture, topical authority',
  // Authority Building spokes
  'local-links': 'local link building, community backlinks, local news links, regional authority',
  'unstructured-citations': 'unstructured citations, press mentions, podcast features, media citations',
  'brand-mentions': 'brand mention building, online mentions, brand awareness, entity building',
  'anchor-text': 'anchor text optimization, link anchor strategy, branded anchors, natural anchor distribution',
  'sponsorships': 'local sponsorship links, community sponsorships, event sponsorship SEO, nonprofit links',
  'reputation-signals': 'reputation signals, trust signals, E-E-A-T building, authority signals',
  'guest-posts-niche-edits': 'guest posting services, niche edits, blogger outreach, editorial links',
  // Reporting spokes
  'branded-dashboards': 'white label dashboards, branded analytics, client dashboards, custom reporting',
  'monthly-performance-reports': 'monthly SEO reports, performance reporting, client reports, marketing reports',
  'rank-tracking-visibility': 'rank tracking services, keyword monitoring, SERP tracking, visibility reporting',
  'call-tracking-lead-attribution': 'call tracking services, lead attribution, phone tracking, conversion attribution',
  'roi-revenue-analysis': 'ROI analysis, revenue reporting, marketing ROI tracking, performance analytics',
  'client-presentation-decks': 'client presentation decks, marketing presentations, QBR slides, client reporting decks',
};

const SpokePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const parsed = parseServiceUrl(location.pathname);
  
  const [formData, setFormData] = useState({
    fullName: "",
    website: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to contact page with pre-filled data
    const params = new URLSearchParams({
      name: formData.fullName,
      website: formData.website,
      email: formData.email,
    });
    navigate(`/contact?${params.toString()}`);
  };
  
  // Find the hub and spoke from the parsed URL
  const hubSlug = parsed?.hubSlug;
  const spokeSlug = parsed?.spokeSlug;
  
  const hub = hubs.find((h) => h.slug === hubSlug);
  const spoke = hub?.spokes.find((s) => s.slug === spokeSlug);

  if (!hub || !spoke) {
    return (
      <div className="dark min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link to="/white-label-inbound-marketing-services" className="text-cta hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Inbound Marketing Services", href: "/white-label-inbound-marketing-services" },
    { label: hub.title, href: getHubUrl(hub.slug) },
    { label: spoke.title }
  ];

  // Find sibling spokes for ecosystem
  const siblingSpokes = hub.spokes.filter((s) => s.slug !== spokeSlug);

  const canonicalUrl = `https://dialedinweb.com${getSpokeUrl(hubSlug || '', spokeSlug || '')}`;
  const spokeKeywords = spokeKeywordsMap[spokeSlug || ''];
  const ogImageUrl = getSpokeOgImage(spokeSlug || '');

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{spoke.metaTitle || `${spoke.title} | ${hub.title} | Dialed-In Web`}</title>
        <meta name="description" content={spoke.metaDescription || spoke.fullDescription.slice(0, 160)} />
        {spokeKeywords && <meta name="keywords" content={spokeKeywords} />}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en-CA" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={spoke.metaTitle || `${spoke.title} | ${hub.title} | Dialed-In Web`} />
        <meta property="og:description" content={spoke.metaDescription || spoke.fullDescription.slice(0, 160)} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dialed-In Web" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={spoke.metaTitle || `${spoke.title} | ${hub.title} | Dialed-In Web`} />
        <meta name="twitter:description" content={spoke.metaDescription || spoke.fullDescription.slice(0, 160)} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Helmet>
      
      <Header />
      
      {/* Hero Section - Split layout with form */}
      <section className="relative min-h-[50vh] gradient-hero noise-overlay flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] bg-gradient-to-br from-cta/50 to-accent-blue/30 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[80px] bg-gradient-to-tl from-accent-blue/40 to-cta/20 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--cta)/0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--cta)/0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div className="relative">
              <div className="absolute -inset-4 bg-background/30 backdrop-blur-sm rounded-2xl -z-10 hidden lg:block" />
              
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
                <Link to="/" className="text-text-muted hover:text-foreground transition-colors">
                  Home
                </Link>
                {breadcrumbItems.map((item, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <span className="text-text-muted">/</span>
                    {item.href ? (
                      <Link to={item.href} className="text-text-muted hover:text-foreground transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-accent-blue">{item.label}</span>
                    )}
                  </span>
                ))}
              </nav>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold mb-6 animate-fade-in text-foreground" style={{ lineHeight: "1.15" }}>
                <span className="text-accent-blue drop-shadow-[0_0_30px_hsl(var(--accent-blue)/0.5)]">{spoke.title}</span>
              </h1>
              
              {/* Description */}
              <p className="text-lg text-text-secondary max-w-xl leading-relaxed animate-fade-in mb-6">
                {spoke.fullDescription}
              </p>
              
              {/* Hub context */}
              <p className="text-sm text-text-muted/60 italic max-w-xl animate-fade-in">
                Included as part of our {hub.title} service.
              </p>
            </div>

            {/* Right Column - Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 shadow-xl">
                <h2 className="text-xl font-semibold text-foreground mb-2">Start a Conversation</h2>
                <p className="text-sm text-text-muted mb-6">Tell us about your agency. We'll take it from there.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="bg-background/50 border-border/50 focus:border-accent-blue"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Website URL"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="bg-background/50 border-border/50 focus:border-accent-blue"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background/50 border-border/50 focus:border-accent-blue"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full btn-cta group">
                    Start the Conversation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
                
                <p className="text-xs text-text-muted text-center mt-4">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Reel */}
      <TrustReel />

      <SectionDivider />

      {/* Alternating Content Blocks - use spoke-specific content if available */}
      {spokeContentBlocks[spokeSlug || ""] ? (
        <SpokeAlternatingBlocks blocks={spokeContentBlocks[spokeSlug || ""]} spokeSlug={spokeSlug} />
      ) : (
        /* Fallback to original Benefits & Deliverables for spokes without custom blocks */
        <section className="py-16 lg:py-20 section-light">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Benefits */}
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                    Key Benefits
                  </h2>
                  <ul className="space-y-4">
                    {spoke.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-cta" />
                        </div>
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                    What We Deliver
                  </h2>
                  <ul className="space-y-4">
                    {spoke.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-accent-blue" />
                        </div>
                        <span className="text-slate-700">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <SectionDivider />

      {/* Process Timeline Section */}
      <SpokeProcessTimeline steps={spoke.process} spokeTitle={spoke.title} />

      {/* Mid-page CTA */}
      <MidPageCTA />

      <SectionDivider />

      {/* Spoke Ecosystem Orbit - shows current spoke with siblings */}
      {siblingSpokes.length > 0 && (
        <SpokeEcosystemOrbit
          hubTitle={hub.title}
          hubSlug={hub.slug}
          currentSpoke={{
            title: spoke.title,
            slug: spoke.slug,
            description: spoke.description
          }}
          siblingSpokes={siblingSpokes.map(s => ({
            title: s.title,
            slug: s.slug,
            description: s.description
          }))}
        />
      )}

      {/* FAQ Section - Use spoke-specific FAQs if available, fallback to hub FAQs */}
      {(spokeFAQs[spokeSlug || ""] || hub.faqs) && (
        <>
          <SectionDivider />
          <section className="py-16 lg:py-20 bg-surface-dark">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                  <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
                    Common Questions
                  </p>
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                    {spoke.title} FAQ
                  </h2>
                </div>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible className="space-y-3">
                  {(spokeFAQs[spokeSlug || ""] || hub.faqs.slice(0, 5)).map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`faq-${index}`}
                      className="bg-surface-elevated border border-border/50 rounded-xl px-6 data-[state=open]:border-cta/30"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:text-cta py-5 text-base font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-text-secondary pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Link to Hub FAQ */}
                <div className="text-center mt-8">
                  <Link
                    to={`${getHubUrl(hub.slug)}#faq`}
                    className="inline-flex items-center gap-2 text-sm text-cta font-medium hover:text-cta/80 transition-colors"
                  >
                    View all {hub.title} FAQs
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      )}


      {/* Contact Form */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default SpokePage;
