import { Link } from "react-router-dom";
import { ArrowRight, Check, X, Phone } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";
import WaveDivider from "@/components/WaveDivider";
import heroBg from "@/assets/hero-bg-trade.jpg";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const bullets = [
  { label: "Owned assets", body: "Your website, your GBP, your ad accounts, your call data. The fulfillment engine stays with you, not us." },
  { label: "One per market", body: "We work with a single Plumbing or HVAC operator per service area. If your market is available, it stays yours." },
  { label: "Booked calls, not clicks", body: "Tracked through your CRM to cost per booked call, so you see revenue, not vanity metrics." },
  { label: "Built for the trades", body: "Plumbing and HVAC only. Your budget never funds side experiments in other industries." },
];

const goodFit = [
  "$5K+ per month available for ads",
  "Dedicated CSR or answering team during business hours",
  "ServiceTitan or comparable CRM with booking visibility",
  "Active Google Business Profile with reviews",
  "Service area with measurable search demand",
];

const notFit = [
  "1-truck startup with no CSR to answer calls",
  "Under $3K per month total ad budget",
  "No call tracking, and not willing to install it",
  "Looking for cheapest cost per lead",
  "Outside the United States",
];

const Grow = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Get Booked Plumbing & HVAC Calls in Your ZIP | DemandStream"
        description="We build the Google demand system (ads, tracking, reporting) for Plumbing & HVAC operators. See cost per booked call, not vanity metrics. One operator per market."
        canonical="https://demandstreamdigital.com/grow"
      />
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-background">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 opacity-20 hidden sm:block">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[100px] bg-gradient-to-br from-cta/40 to-accent-blue/20" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[80px] bg-gradient-to-tl from-accent-blue/30 to-cta/15" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: copy */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cta mb-5">
                For Plumbing &amp; HVAC Operators
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-5 text-foreground" style={{ lineHeight: 1.05 }}>
                Get consistent booked homeowner calls in your ZIP.
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-3 leading-relaxed">
                We build and manage your Google driven demand system. Ads, tracking, reporting. So you see cost per booked call, not vanity metrics.
              </p>
              <p className="text-sm text-text-muted mb-8 italic">
                Up to 50+ exclusive booked homeowner calls per month for qualified markets and budgets.
              </p>

              <ul className="space-y-4 mb-10">
                {bullets.map((b) => (
                  <li key={b.label} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent-blue/15 border border-accent-blue/40 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent-blue" />
                    </span>
                    <span className="text-base text-text-secondary leading-relaxed">
                      <span className="font-semibold text-foreground">{b.label}.</span> {b.body}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="#fit-check" className="btn-cta inline-flex items-center gap-2 px-6 py-4 text-base">
                  Start 2-Min Availability + Fit Check
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 font-semibold transition-colors">
                  <Phone className="h-4 w-4" />
                  {PHONE_NUMBER}
                </a>
              </div>
              <p className="text-xs text-text-muted mt-3">See market demand and estimated booked call volume in your service area.</p>
            </div>

            {/* Right: form card */}
            <div id="fit-check" className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-border bg-surface-elevated/95 backdrop-blur-md p-6 lg:p-8 shadow-2xl">
                <h2 className="text-xl font-semibold text-foreground mb-1">Availability + Fit Check</h2>
                <p className="text-sm text-text-muted mb-5">Two minutes. If your ZIP is open and the fit is right, we book a 30 minute strategy call.</p>
                <TwoStepContactForm
                  formType="grow_lander"
                  submitButtonText="Check My Market"
                  step1ButtonText="Check My Market"
                />
                <p className="text-xs text-text-muted text-center mt-4">
                  Plumbing &amp; HVAC operators only. No pitch, no pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(213, 64%, 8%)" toColor="#f9f9f9" variant="curve" animated />
        <section className="bg-[#f9f9f9] py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-3 text-center">
                Real Results, In Context
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3">
                Pure Plumbing, Las Vegas
              </h2>
              <p className="text-center text-gray-600 mb-10">A 60 day window of paid + local SEO, tracked end to end.</p>

              <div className="grid md:grid-cols-4 gap-4 lg:gap-6">
                {[
                  { metric: "60 days", label: "Build to first results" },
                  { metric: "5 figure", label: "Monthly Google Ads spend" },
                  { metric: "$78", label: "Cost per booked call" },
                  { metric: "40%", label: "YoY revenue growth" },
                ].map((s) => (
                  <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cta mb-2">{s.metric}</div>
                    <div className="text-sm text-gray-600 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-500 mt-6 text-center max-w-2xl mx-auto">
                Spend ranges blurred for client confidentiality. Cost per booked call reconciled inside ServiceTitan against booked jobs, not form fills.
              </p>

              <div className="mt-10 text-center">
                <Link to="/case-studies" className="text-accent-blue hover:underline font-semibold inline-flex items-center gap-2">
                  See more case studies <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FIT FILTER */}
      <div className="dark relative">
        <WaveDivider position="top" fromColor="#f9f9f9" toColor="hsl(213, 64%, 8%)" variant="curve" flip animated />
        <section className="bg-background py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-3 text-center">
                Honest Filter
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-3">
                Who this is, and is not, for.
              </h2>
              <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
                We are upfront. The wrong fit wastes your money and our calendar.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-accent-blue/30 bg-surface-elevated p-6 lg:p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
                    <Check className="h-5 w-5 text-accent-blue" /> Good fit
                  </h3>
                  <ul className="space-y-3">
                    {goodFit.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                        <Check className="h-4 w-4 text-accent-blue mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-cta/30 bg-surface-elevated p-6 lg:p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
                    <X className="h-5 w-5 text-cta" /> Not a fit
                  </h3>
                  <ul className="space-y-3">
                    {notFit.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                        <X className="h-4 w-4 text-cta mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* HOW WE MEASURE */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(213, 64%, 8%)" toColor="#f9f9f9" variant="curve" animated />
        <section className="bg-[#f9f9f9] py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-3">
                Your Reporting, Not Ours
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Leads, booked jobs, and cost per booked call. One view.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every call, form, and chat is tagged at the source, pushed into your CRM, and reconciled against booked jobs. You see cost per booked call and revenue per channel before the next invoice, not after.
              </p>
              <a href="#fit-check" className="btn-cta inline-flex items-center gap-2 px-6 py-4">
                Start 2-Min Availability + Fit Check
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="text-xs text-gray-500 mt-3">Plumbing and HVAC operators only.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="dark">
        <Footer />
      </div>
    </div>
  );
};

export default Grow;
