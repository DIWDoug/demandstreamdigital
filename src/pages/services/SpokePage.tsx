import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import TrustReel from "@/components/sections/TrustReel";
import { hubs } from "@/data/services";
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

const SpokePage = () => {
  const { hubSlug, spokeSlug } = useParams();
  
  // Find the hub and spoke
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
    { label: "Services", href: "/white-label-inbound-marketing-services" },
    { label: hub.title, href: `/white-label-inbound-marketing-services/${hub.slug}` },
    { label: spoke.title }
  ];

  // Find sibling spokes for ecosystem
  const siblingSpokes = hub.spokes.filter((s) => s.slug !== spokeSlug);
  const HubIcon = hub.icon;

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{spoke.title} | {hub.title} | Dialed-In Web</title>
        <meta name="description" content={spoke.fullDescription.slice(0, 160)} />
        <link rel="canonical" href={`https://dialedinweb.com/white-label-inbound-marketing-services/${hubSlug}/${spokeSlug}`} />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 gradient-hero noise-overlay overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] bg-gradient-to-br from-cta/50 to-accent-blue/30" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-6">
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

          {/* Back link */}
          <Link 
            to={`/white-label-inbound-marketing-services/${hub.slug}`}
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {hub.title}
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cta mb-4">
              {hub.title}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6" style={{ lineHeight: "1.15" }}>
              {spoke.title}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
              {spoke.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Trust Reel */}
      <TrustReel />

      <SectionDivider />

      {/* Benefits & Deliverables Section */}
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

      <SectionDivider />

      {/* Process Section */}
      <section className="py-16 lg:py-20 bg-surface-dark">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
                How We Execute
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Our Process
              </h2>
            </div>
            <div className="space-y-6">
              {spoke.process.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-cta/20 border border-cta/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-cta">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-text-secondary">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Hub Ecosystem - Sibling Spokes */}
      {siblingSpokes.length > 0 && (
        <section className="py-16 lg:py-20 section-light">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
                  Part of {hub.title}
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
                  Related Services
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  {spoke.title} works alongside these other {hub.title} components for maximum impact.
                </p>
              </div>

              {/* Hub-Spoke Visual */}
              <div className="relative">
                {/* Center Hub */}
                <div className="flex justify-center mb-8">
                  <Link
                    to={`/white-label-inbound-marketing-services/${hub.slug}`}
                    className="group relative flex flex-col items-center justify-center w-32 h-32 rounded-full bg-white border-2 border-cta shadow-lg hover:shadow-xl transition-all"
                  >
                    <HubIcon className="w-8 h-8 text-cta mb-2" />
                    <span className="text-xs font-semibold text-slate-900 text-center px-2">{hub.title}</span>
                    <span className="absolute -bottom-6 text-xs text-cta font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Hub →
                    </span>
                  </Link>
                </div>

                {/* Spokes Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {siblingSpokes.map((sibling) => (
                    <Link
                      key={sibling.slug}
                      to={`/white-label-inbound-marketing-services/${hub.slug}/${sibling.slug}`}
                      className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-cta/40 hover:shadow-md transition-all"
                    >
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-cta transition-colors mb-2">
                        {sibling.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                        {sibling.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs text-cta font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Back to Hub CTA */}
              <div className="text-center mt-10">
                <Link
                  to={`/white-label-inbound-marketing-services/${hub.slug}`}
                  className="inline-flex items-center gap-2 text-cta font-medium hover:text-cta/80 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to {hub.title} Overview
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {hub.faqs && hub.faqs.length > 0 && (
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
                    Frequently Asked Questions
                  </h2>
                </div>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible className="space-y-3">
                  {hub.faqs.slice(0, 5).map((faq, index) => (
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
                    to={`/white-label-inbound-marketing-services/${hub.slug}#faq`}
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
