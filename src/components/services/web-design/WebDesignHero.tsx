import { Link } from "react-router-dom";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Web Design", href: null },
];

const bullets = [
  "Custom builds only — no templates, no page builders",
  "Mobile-first, conversion-optimized for service calls",
  "Deep SEO architecture with location & service area pages",
  "Integrated call tracking and lead capture",
  "Built specifically for plumbing and HVAC operators",
];

const WebDesignHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cta/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs text-text-muted mb-6 flex-wrap" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-border">/</span>}
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-foreground transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-foreground">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Web Design for Plumbing & HVAC Companies{" "}
              <span className="text-cta">That Converts Visitors Into Calls</span>
            </h1>
            <p className="text-text-secondary leading-relaxed mb-8">
              Most contractor websites are built on templates that look the same as every competitor in your market. We build custom, high-performance sites designed around one outcome: turning local search traffic into booked service calls.
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <span className="text-cta mt-0.5 shrink-0 font-bold">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-cta/10 to-accent-blue/5 rounded-2xl blur-xl" />
            <div className="relative bg-surface-dark border border-border/60 rounded-2xl p-6 lg:p-8 shadow-2xl">
              <TwoStepContactForm
                formType="web_design_hero"
                submitButtonText="See If Your Market Is Open"
                step1ButtonText="See If Your Market Is Open"
              />
              <p className="text-center text-xs text-text-muted mt-4">One plumbing client and one HVAC client per market.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignHero;
