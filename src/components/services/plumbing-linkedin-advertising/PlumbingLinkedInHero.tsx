import { Link } from "react-router-dom";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";
import heroBgTrade from "@/assets/hero-bg-plumbing.jpg";

const PlumbingLinkedInHero = () => {
  const breadcrumbs = [
    { label: "Plumbing Paid Advertising", href: "/plumbing-paid-advertising" },
    { label: "Plumbing LinkedIn Advertising" }
  ];

  const bullets = [
    "Target property managers and facility directors by title and geography",
    "Reach decision-makers at multi-site commercial and residential properties",
    "Promote commercial plumbing maintenance contracts and service agreements",
    "Generate backflow testing, hydro-jet, and repipe opportunities",
    "Track booked calls and revenue through ServiceTitan integration"
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
      <div className="absolute inset-0 bg-background/85" />
      <div className="absolute inset-0 opacity-20 hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[100px] bg-gradient-to-br from-cta/50 to-accent-blue/30 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[80px] bg-gradient-to-tl from-accent-blue/40 to-cta/20 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `linear-gradient(hsl(var(--cta)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cta)/0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
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
              Plumbing LinkedIn Advertising That Wins Commercial Contracts
            </h1>
            <p className="text-xl md:text-2xl font-sans font-semibold text-cta mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Unlock Commercial Plumbing Growth in Your Market
            </p>
            <p className="text-base text-text-secondary max-w-xl mb-4 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Residential calls drive volume. Commercial contracts drive stability. Property managers, facility directors, and building operators don't search Google when they need a plumbing vendor — they work from relationships, referrals, and the vendors who have already been in front of them. LinkedIn is the only advertising platform that lets you reach those decision-makers directly, by job title and geography, before a competitor builds that relationship first.
            </p>
            <p className="text-base text-text-secondary max-w-xl mb-6 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.22s" }}>
              We build LinkedIn campaigns designed to open doors to commercial maintenance contracts, multi-building service agreements, and repiping opportunities that residential search advertising will never reach. If your business has the capacity for commercial work, this is how you build that pipeline.
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
          <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <div className="bg-surface-elevated/90 backdrop-blur-md border border-border rounded-2xl p-6 lg:p-8 shadow-xl">
              <h2 className="text-xl font-semibold text-foreground mb-2">See If Your Market Is Available</h2>
              <p className="text-sm text-text-muted mb-6">Tell us where you operate. We'll take it from there.</p>
              <TwoStepContactForm
                formType="plumbing_linkedin_hero"
                submitButtonText="Claim My Territory"
                step1ButtonText="Claim My Territory"
              />
              <p className="text-xs text-text-muted text-center mt-4">
                One plumbing company per market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumbingLinkedInHero;
