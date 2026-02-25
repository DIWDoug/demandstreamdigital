import { Link } from "react-router-dom";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";

const PlumbingPaidAdsHero = () => {
  const breadcrumbs = [
    { label: "Services", href: "/#services" },
    { label: "Paid Advertising", href: "/hvac-and-plumbing-paid-ads" },
    { label: "Plumbing Paid Advertising" }
  ];

  const bullets = [
    "Capture emergency plumbing searches before competitors do",
    "Separate drain, sewer, water heater, and repipe campaigns",
    "Retarget homeowners who searched but did not book",
    "Protect high-margin replacement services",
    "Track revenue directly to your dispatch board"
  ];

  return (
    <section className="relative min-h-[70vh] gradient-hero noise-overlay flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20 hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[100px] bg-gradient-to-br from-cta/50 to-accent-blue/30 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[80px] bg-gradient-to-tl from-accent-blue/40 to-cta/20 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--cta)/0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--cta)/0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8 animate-fade-in flex-wrap">
              <Link to="/" className="text-text-muted hover:text-foreground transition-colors">Home</Link>
              {breadcrumbs.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                  <span className="text-text-muted">/</span>
                  {item.href ? (
                    <Link to={item.href} className="text-text-muted hover:text-foreground transition-colors">{item.label}</Link>
                  ) : (
                    <span className="text-accent-blue">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-sans font-semibold mb-4 animate-fade-in-up text-foreground" style={{ lineHeight: "1.1", animationDelay: "0.1s" }}>
              Plumbing Paid Advertising That Drives Booked Service Calls
            </h1>
            <p className="text-xl md:text-2xl font-sans font-semibold text-cta mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Emergency Demand Control for Plumbing Companies
            </p>

            <p className="text-base text-text-secondary max-w-xl mb-6 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              When a homeowner searches for a burst pipe or sewer backup, they are not browsing. They are calling whoever shows up first. Plumbing paid advertising built by DemandStream captures that demand immediately — built around cost per booked call, not clicks.
            </p>

            <ul className="space-y-3 mb-8 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — form */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <div className="bg-surface-elevated/90 backdrop-blur-md border border-border rounded-2xl p-6 lg:p-8 shadow-xl">
              <h2 className="text-xl font-semibold text-foreground mb-2">See If Your Market Is Available</h2>
              <p className="text-sm text-text-muted mb-6">Tell us about your business. We'll take it from there.</p>
              <TwoStepContactForm
                formType="plumbing_paid_ads_hero"
                submitButtonText="Claim My Territory"
                step1ButtonText="Claim My Territory"
              />
              <p className="text-xs text-text-muted text-center mt-4">
                One plumbing client per market. Your competitors don't get in.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlumbingPaidAdsHero;
