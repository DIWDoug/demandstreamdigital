import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Check } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { hubs } from "@/data/services";

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
          <Link to="/inbound-marketing-services" className="text-cta hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Services", href: "/inbound-marketing-services" },
    { label: hub.title, href: `/inbound-marketing-services/${hub.slug}` },
    { label: spoke.title }
  ];

  // Find sibling spokes for navigation
  const siblingSpokes = hub.spokes.filter((s) => s.slug !== spokeSlug);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{spoke.title} | {hub.title} | Dialed-In Web</title>
        <meta name="description" content={spoke.fullDescription.slice(0, 160)} />
        <link rel="canonical" href={`https://dialedinweb.com/services/${hubSlug}/${spokeSlug}`} />
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
            to={`/inbound-marketing-services/${hub.slug}`}
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
            <p className="text-lg text-text-secondary leading-relaxed">
              {spoke.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 section-light">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Key Benefits
                </h2>
                <ul className="space-y-4">
                  {spoke.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-cta" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  What We Deliver
                </h2>
                <ul className="space-y-4">
                  {spoke.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent-blue" />
                      </div>
                      <span className="text-gray-700">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-20 bg-surface-dark">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-10 text-center">
              Our Process
            </h2>
            <div className="space-y-6">
              {spoke.process.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cta/20 border border-cta/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-cta">{index + 1}</span>
                  </div>
                  <div className="pt-1">
                    <p className="text-text-secondary">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {siblingSpokes.length > 0 && (
        <section className="py-16 lg:py-20 section-light">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-semibold text-gray-900">
                Related {hub.title} Services
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {siblingSpokes.slice(0, 6).map((sibling) => (
                <Link
                  key={sibling.slug}
                  to={`/inbound-marketing-services/${hub.slug}/${sibling.slug}`}
                  className="group p-4 rounded-xl bg-white border border-gray-200 hover:border-cta/30 hover:shadow-md transition-all"
                >
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-cta transition-colors mb-1">
                    {sibling.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {sibling.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactForm />
      <Footer />
    </div>
  );
};

export default SpokePage;
