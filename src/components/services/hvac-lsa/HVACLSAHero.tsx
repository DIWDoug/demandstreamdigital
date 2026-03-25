import { Link } from "react-router-dom";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";
import heroBgTrade from "@/assets/hero-bg-hvac.jpg";

const HVACLSAHero = () => {
  const breadcrumbs = [
    { label: "Services", href: "/#services" },
    { label: "Local Services Ads", href: "/plumbing-hvac-local-service-ads" },
    { label: "HVAC LSA" },
  ];

  const bullets = [
    "Google Guaranteed placement that builds trust at the top of the page",
    "Pay-per-lead model. You pay for HVAC leads, not clicks.",
    "Seasonal demand alignment so your ad spend matches your capacity",
    "Repair vs replacement segmentation for cleaner lead classification",
    "ServiceTitan integration for revenue tracking tied to real booked jobs",
  ];

  return (
    <section className="relative min-h-[70vh] gradient-hero noise-overlay flex items-center overflow-hidden">
      {/* Background photo */}
      <img
        src={heroBgTrade}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
        loading="eager"
        width={1920}
        height={1080}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/95" />
      <div className="absolute inset-0 opacity-20 hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[100px] bg-gradient-to-br from-cta/50 to-accent-blue/30 animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[80px] bg-gradient-to-tl from-accent-blue/40 to-cta/20 animate-pulse" style={{ animationDuration: "6s", animationDelay: "2s" }} />
      </div>
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `linear-gradient(hsl(var(--cta)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cta)/0.3) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      <div className="container mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              HVAC Local Services Ads That Drive
            </h1>
            <p className="text-xl md:text-2xl font-sans font-semibold text-cta mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Repair and Replacement Calls. Every Season.
            </p>
            <p className="text-base text-text-secondary max-w-xl mb-4 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              When homeowners search "AC repair near me" or "furnace repair near me," Local Services Ads appear at the top of Google. That placement puts you in front of someone who needs help today.
            </p>
            <p className="text-base text-text-secondary max-w-xl mb-6 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.22s" }}>
              But HVAC demand fluctuates by season. A no-cool spike in July looks nothing like a no-heat surge in January. LSA performance must adapt to those shifts, or you spend too much in slow months and miss opportunities during peak weeks.
            </p>
            <ul className="space-y-3 mb-6 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-text-secondary max-w-xl animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.28s" }}>
              We manage HVAC LSA to increase booking rate, control capacity, and improve cost per booked job, tied to your seasonal reality and your dispatch board. HVAC companies only.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <div className="bg-surface-elevated/90 backdrop-blur-md border border-border rounded-2xl p-6 lg:p-8 shadow-xl">
              <h2 className="text-xl font-semibold text-foreground mb-2">See If Your Market Is Available</h2>
              <p className="text-sm text-text-muted mb-6">Tell us about your business. We'll take it from there.</p>
              <TwoStepContactForm
                formType="hvac_lsa_hero"
                submitButtonText="Claim My Territory"
                step1ButtonText="Claim My Territory"
              />
              <p className="text-xs text-text-muted text-center mt-4">
                HVAC companies only. No plumbing. No general contractors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HVACLSAHero;
