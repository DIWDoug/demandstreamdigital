import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star, Zap, TrendingUp, FileText, Clock, AlertTriangle } from "lucide-react";

const rankingFactors = [
  { icon: MapPin, label: "Proximity to the searcher", body: "The closer you are, the more likely Google shows your profile." },
  { icon: Star, label: "Review volume and rating", body: "More recent, high-quality reviews push your listing higher." },
  { icon: Zap, label: "Response speed", body: "How quickly your team answers or returns calls affects ranking." },
  { icon: TrendingUp, label: "Booking rate", body: "Google tracks whether leads turn into booked jobs. Low booking rates reduce visibility." },
  { icon: FileText, label: "Profile completeness", body: "Missing service categories or outdated business hours hurt performance." },
  { icon: Clock, label: "Business hour alignment", body: "Ads perform best when your listed hours match when you actually answer." },
  { icon: AlertTriangle, label: "Dispute history", body: "Too many unresolved disputes signal problems to Google and reduce ranking." },
];

const processSteps = [
  {
    num: "01",
    title: "Verification & Alignment",
    body: "We audit your LSA profile, service categories, verification status, insurance documentation, and review strength. Everything gets aligned before a dollar is spent.",
  },
  {
    num: "02",
    title: "Category & Service Setup",
    body: "We align services with high-intent calls. Repair is separated from install. Emergency is separated from standard. Each category matches how homeowners actually search.",
  },
  {
    num: "03",
    title: "Lead Handling & Booking Strategy",
    body: "We help implement systems to increase booking rate and improve responsiveness metrics. Faster answers. Cleaner handoffs. Fewer missed opportunities.",
  },
  {
    num: "04",
    title: "Dispute & Lead Management",
    body: "We monitor and manage invalid leads to protect your budget and maintain ranking integrity. Disputes are handled with documentation, not guesswork.",
  },
  {
    num: "05",
    title: "Review Reinforcement",
    body: "We integrate review growth strategies to strengthen LSA ranking influence. Every completed job is an opportunity to build the 5-star proof that feeds future visibility.",
  },
  {
    num: "06",
    title: "Reporting & Revenue Tracking",
    body: "We measure cost per lead, booking rate, cost per booked job, and revenue attribution. LSA becomes predictable and measurable, tied into the same reporting as every other channel.",
  },
];

const lsaFeatures = [
  "Pay per lead",
  "Google Guaranteed",
  "Limited creative control",
  "Ranking influenced by reviews + booking rate",
  "Trust-first placement",
];

const searchFeatures = [
  "Pay per click",
  "Full campaign control",
  "Keyword-level targeting",
  "Funnel segmentation",
  "Creative flexibility",
];

const LSAHubMainContent = () => {
  return (
    <>
      {/* What Are LSAs */}
      <section id="what-is-lsa" className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Overview</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-balance">
                What Are Local Services Ads?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Local Services Ads (LSA) are Google's pay-per-lead advertising platform built for service-based businesses. Unlike traditional search ads, you pay per qualified lead, not per click. Google verifies your business, runs background checks, and displays the Google Guaranteed badge on your listing.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Placement is determined by performance factors, not just your bid. That means a well-managed profile with strong reviews and a high booking rate can outperform a competitor spending more.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                LSA is not just another ad channel. It is a trust-driven visibility layer that connects directly to how homeowners choose a plumber or HVAC company.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-surface-dark border border-border/50 rounded-xl p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Why Booking Rate Matters</p>
                <p className="text-text-secondary leading-relaxed mb-3">
                  If your business receives 50 leads but only books 20, your booking rate impacts visibility. Google favors businesses that convert leads into confirmed jobs because that means the platform is delivering real value to homeowners.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We focus on cost per booked job, not cost per lead. That distinction changes how you measure performance and how Google measures your profile.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Quick response time", desc: "Calls answered within the first ring cycle convert at a higher rate." },
                  { label: "Clear service alignment", desc: "When categories match actual work, fewer leads get wasted." },
                  { label: "Accurate dispute handling", desc: "Flagging invalid leads protects your budget and profile." },
                  { label: "Confirmed booked jobs", desc: "Marking leads as booked tells Google your profile is performing." },
                ].map((item, i) => (
                  <div key={i} className="bg-surface-elevated border border-border/50 rounded-lg p-4">
                    <p className="font-semibold text-foreground text-sm mb-1">{item.label}</p>
                    <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ranking Factors */}
      <section id="ranking" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Performance Factors</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight text-balance">
                How Google Ranks Local Services Ads
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                LSA ranking is not purely budget-driven. Higher budget alone does not guarantee top placement. Operational discipline matters.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {rankingFactors.map((factor, i) => {
                const Icon = factor.icon;
                return (
                  <div key={i} className="bg-surface-elevated border border-border/50 rounded-xl p-6">
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-accent-blue" />
                    </div>
                    <p className="font-semibold text-foreground mb-2">{factor.label}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{factor.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ServiceTitan Integration */}
      <section id="tracking" className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">CRM Connection</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-balance">
                LSA + ServiceTitan = Revenue Visibility
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                LSA should connect directly into your existing systems. Without that connection, leads are just a count on a dashboard. With it, every lead ties to a booked job, a revenue number, and a source you can measure.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This is part of how DemandStream connects every channel. Your LSA performance feeds into the same reporting as your <Link to="/hvac-and-plumbing-seo" className="text-accent-blue underline">SEO</Link>, paid search, and reputation growth, giving you one clear picture of what is working.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Call Tracking", body: "Every inbound call attributed to its LSA source for clean campaign measurement." },
                { label: "Lead Tagging", body: "Each lead is classified and tagged by service type so intent is never blurred." },
                { label: "Booking Confirmation Tracking", body: "Confirmed bookings are recorded against LSA lead sources for accurate booking rate reporting." },
                { label: "Revenue Attribution", body: "Closed job revenue tied back to LSA campaign source, not estimated from lead counts." },
                { label: "Dispute Documentation", body: "Invalid leads are documented and disputed with evidence to protect your budget and ranking." },
              ].map((row, i) => (
                <div key={i}>
                  <div className="py-5">
                    <p className="font-semibold text-gray-900 text-[15px] mb-1.5">{row.label}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{row.body}</p>
                  </div>
                  {i < 4 && <hr className="border-t border-gray-200" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LSA vs Search Ads */}
      <section id="lsa-vs-search" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Channel Comparison</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight text-balance">
                Local Services Ads vs Google Search Ads
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                LSA and Google Search Ads serve different purposes. Both are powerful, but they require separate strategies. Running both without a connected strategy means you are competing with yourself.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-surface-elevated border border-accent-blue/30 rounded-xl p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-4">LSA</p>
                <ul className="space-y-3">
                  {lsaFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="text-accent-blue shrink-0">&#10003;</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface-elevated border border-border/50 rounded-xl p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">Google Search Ads</p>
                <ul className="space-y-3">
                  {searchFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="text-cta shrink-0">&#10003;</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built For Plumbing & HVAC */}
      <section id="built-for-trade" className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Trade Specific</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
                Built for Plumbing & HVAC
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Local Services Ads behave differently by trade. The search patterns, seasonal demand, and lead classification challenges are specific to each industry.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="font-semibold text-gray-900 text-lg mb-4">Plumbing</p>
                <ul className="space-y-3">
                  {[
                    "Emergency-heavy call volume with high urgency",
                    "Drain vs sewer misclassification risks that waste budget",
                    "High dispute sensitivity on calls that do not match the service requested",
                    "Rapid-response expectations from homeowners who need help now",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/plumbing-local-service-ads" className="inline-flex items-center gap-2 text-accent-blue text-sm font-medium mt-5 hover:underline">
                  Plumbing LSA Management <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="font-semibold text-gray-900 text-lg mb-4">HVAC</p>
                <ul className="space-y-3">
                  {[
                    "Seasonal spikes that require capacity-aware management",
                    "Repair vs replacement intent separation to match leads with the right service category",
                    "Capacity throttling during peak months to prevent overbooking",
                    "Maintenance agreement opportunities for converting one-time calls into recurring revenue",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/hvac-local-service-ads" className="inline-flex items-center gap-2 text-accent-blue text-sm font-medium mt-5 hover:underline">
                  HVAC LSA Management <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Manage */}
      <section id="process" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Our Process</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                How We Manage Local Services Ads
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">Structured. Monitored. Built Around Booked Jobs.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {processSteps.map((step, i) => (
                <div key={i} className="bg-surface-elevated border border-border/50 rounded-xl p-6">
                  <p className="text-4xl font-bold text-accent-blue/20 mb-3 leading-none">{step.num}</p>
                  <p className="font-semibold text-foreground mb-2">{step.title}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LSAHubMainContent;
