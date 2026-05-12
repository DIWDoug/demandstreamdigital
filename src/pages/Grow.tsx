import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import logo from "@/assets/demandstream-digital-logo.svg";

const bullets = [
  {
    label: "OWNED ASSETS:",
    body: "Your website, your GBP, your ad accounts, your call data. The fulfillment engine stays with you, not us.",
  },
  {
    label: "ONE PER MARKET:",
    body: "We work with a single Plumbing or HVAC operator per service area. If your market is available, it stays yours.",
  },
  {
    label: "BOOKED CALLS, NOT CLICKS:",
    body: "Tracked through your CRM to cost-per-booked-call, so you see revenue, not vanity metrics.",
  },
  {
    label: "BUILT FOR THE TRADES:",
    body: "Plumbing and HVAC only, independents and franchises alike. Your budget never funds side experiments in other industries.",
  },
];

const stats = [
  { value: "40%", label: "YoY revenue growth", sub: "Pure Plumbing, year over year" },
  { value: "50+", label: "Booked homeowner calls / mo", sub: "Tracked end to end in your CRM" },
  { value: "3.2x", label: "Return on ad spend", sub: "Measured against booked revenue" },
];

const CTA = ({ children = "CHECK AVAILABILITY", size = "lg" as "lg" | "md" }) => (
  <Link
    to="/grow-qualifier"
    className={`inline-flex items-center gap-2 rounded-md bg-[#E63946] hover:bg-[#d32f3c] transition-colors text-white font-extrabold tracking-wide shadow-[0_12px_40px_-10px_rgba(230,57,70,0.7)] ${
      size === "lg" ? "px-10 md:px-14 py-4 md:py-5 text-lg md:text-xl" : "px-8 md:px-12 py-3.5 md:py-4 text-base md:text-lg"
    }`}
  >
    {children}
    <ArrowRight className="h-5 w-5" />
  </Link>
);

const Grow = () => {
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white relative overflow-hidden">
      <SEOHead
        title="50+ Exclusive Plumbing & HVAC Homeowner Calls / Month"
        description="The Unified Front Marketing System for Plumbing and HVAC. Owned assets, one operator per market, booked calls tracked end to end in your CRM."
        canonical="https://demandstreamdigital.com/grow"
      />

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(74, 144, 184, 0.22) 0%, rgba(13, 27, 42, 0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(80% 60% at 80% 100%, rgba(74, 144, 184, 0.1) 0%, rgba(13, 27, 42, 0) 70%)",
        }}
      />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 w-full max-w-[1400px]">
        {/* Logo */}
        <div className="flex justify-center mb-10 md:mb-14">
          <img src={logo} alt="DemandStream Digital" className="h-10 md:h-12" />
        </div>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-base md:text-lg font-semibold text-white/85 mb-4">
            The Unified Front Marketing System for Plumbing &amp; HVAC That Books
          </p>
          <h1 className="font-extrabold leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-[#E63946]">50+ EXCLUSIVE</span>
            <span className="block text-white mt-1">HOMEOWNER CALLS</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl tracking-[0.2em] font-bold text-white/90">
            EVERY SINGLE MONTH
          </p>
        </div>

        {/* Bullets */}
        <ul className="mt-10 md:mt-12 max-w-2xl mx-auto space-y-4">
          {bullets.map((b) => (
            <li key={b.label} className="flex items-start gap-3 text-base md:text-lg">
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center w-6 h-6 rounded bg-[#22C55E] text-black font-bold text-sm shrink-0 mt-0.5"
              >
                ✓
              </span>
              <p className="text-white/90">
                <span className="font-bold text-white">{b.label}</span> {b.body}
              </p>
            </li>
          ))}
        </ul>

        {/* Primary CTA */}
        <div className="mt-12 flex flex-col items-center text-center">
          <p className="text-lg md:text-xl font-bold text-white underline underline-offset-[6px] decoration-2 decoration-white/60 mb-6">
            Territories are filling.
          </p>
          <CTA />
        </div>

        {/* Trust line */}
        <div className="mt-14 md:mt-16 text-center">
          <p className="text-sm md:text-base font-bold tracking-wider text-white/80">
            GOOGLE CERTIFIED PARTNER · TRUSTED BY HUNDREDS OF PLUMBING &amp; HVAC OPERATORS
          </p>
        </div>

        {/* Media grid */}
        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <div className="flex flex-col gap-6">
            <div className="w-full aspect-[4/3] rounded-md overflow-hidden bg-black border border-white/10 flex items-center justify-center">
              <video
                className="h-full w-full object-contain"
                src="https://demandstreamdigital.com/media/doug-testimonial.mov"
                poster="https://demandstreamdigital.com/media/doug-testimonial-poster.png"
                controls
                playsInline
                preload="metadata"
              />
            </div>
            <div className="w-full aspect-[4/3] rounded-md overflow-hidden bg-black border border-white/10">
              <img
                src="https://demandstreamdigital.com/assets/las-vegas-plumbing-hero-BLWRUVVQ.jpg"
                alt="Pure Plumbing case study"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-center h-full">
            <div className="flex-1 w-full rounded-md overflow-hidden bg-white border border-white/10">
              <div className="flex flex-col h-full">
                <img
                  src="https://demandstreamdigital.com/assets/pure-plumbing-review-1-jNLNRLF3.png"
                  alt="Pure Plumbing 5-star Google review"
                  className="w-full flex-1 object-cover object-top block"
                  loading="lazy"
                />
                <img
                  src="https://demandstreamdigital.com/assets/pure-plumbing-review-2-CWW5rTqV.png"
                  alt="Pure Plumbing & Air 5-star Google review"
                  className="w-full flex-1 object-cover object-top block"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 md:mt-20 flex flex-col items-center text-center">
          <p className="text-base md:text-lg font-bold text-white/90 mb-4">
            Still reading? Markets close fast.
          </p>
          <CTA size="md" />
        </div>

        {/* Stat cards */}
        <div className="mt-10 md:mt-12 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-md border border-white/10 bg-white/[0.03] p-5 text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-[#E63946] leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-bold text-white">{s.label}</div>
                <div className="mt-1 text-xs text-white/65">{s.sub}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs md:text-sm text-white/65 text-center max-w-2xl mx-auto">
            How we measure: every call, form, and chat is tagged at the source, pushed into your CRM, and reconciled against booked jobs. You see cost per booked call and revenue per channel, not clicks or impressions.
          </p>
        </div>

        {/* Dashboard */}
        <div className="mt-10 md:mt-14 max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#E63946]">
              YOUR REPORTING, NOT OURS
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-white leading-tight">
              Leads, booked jobs, and cost per lead in one view.
            </h2>
            <p className="mt-2 text-sm md:text-base text-white/70 max-w-2xl mx-auto">
              Every campaign rolls up to revenue and ROI. You see what is working before the next invoice, not after.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden border border-white/10 bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <img
              src="https://demandstreamdigital.com/assets/marketing-overview-dashboard-5tChs5Bh.jpg"
              alt="DemandStream Digital marketing overview dashboard showing leads, booked jobs, cost per lead, and ROI"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 md:mt-16 flex flex-col items-center text-center">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#E63946] mb-3">
            ONE PROVIDER PER MARKET
          </p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight max-w-2xl">
            See if your market is still open.
          </h3>
          <p className="mt-3 text-sm md:text-base text-white/70 max-w-xl">
            Two minute qualifier. If your ZIP is available and the fit is right, you book a 30 minute strategy call. No pitch, no pressure.
          </p>
          <div className="mt-6">
            <CTA size="md" />
          </div>
          <p className="mt-3 text-xs text-white/50">Plumbing and HVAC operators only.</p>
        </div>
      </div>
    </div>
  );
};

export default Grow;
