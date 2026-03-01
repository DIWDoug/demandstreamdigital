import { Link } from "react-router-dom";
import { MapPin, Star, Zap, TrendingUp, Tag, Clock } from "lucide-react";

const rankingFactors = [
  { icon: MapPin, label: "Proximity to the searcher", body: "Closer shops appear more often in your service area." },
  { icon: Star, label: "Review volume and star rating", body: "Recent 5-star reviews push your listing higher." },
  { icon: Zap, label: "Response speed", body: "How fast you answer or return the call impacts ranking directly." },
  { icon: TrendingUp, label: "Booking rate", body: "Google tracks whether leads become booked jobs." },
  { icon: Tag, label: "Service category accuracy", body: "Clean separation between drain, sewer, water heater, and emergency." },
  { icon: Clock, label: "Business hour consistency", body: "Your listed hours must match when you actually answer." },
];

const bookingRows = [
  { label: "Fast response protocols", body: "The goal is answer or return within minutes, not hours." },
  { label: "Clear service segmentation", body: "Drain work, sewer work, and water heater calls each get their own category so leads match the work you actually perform." },
  { label: "Proper lead tagging", body: "Every lead is classified, tracked, and tied to a booking outcome." },
  { label: "Dispute protection", body: "Invalid leads are flagged with documentation to protect your budget." },
  { label: "Cost per booked job reduction", body: "This is the number that matters. Not cost per lead." },
];

const integrationRows = [
  { label: "Cost Per Lead", body: "Track what you pay per inbound lead from LSA." },
  { label: "Booking Rate", body: "Measure what percentage of plumbing leads convert to booked jobs." },
  { label: "Cost Per Booked Job", body: "The true acquisition cost tied to dispatched work, not estimated from lead counts." },
  { label: "Revenue Attribution", body: "Closed job revenue traced back to the LSA source in ServiceTitan." },
  { label: "Lead Dispute Status", body: "Track and document invalid leads to protect budget and ranking." },
];

const mistakes = [
  { label: "Selecting too many service categories", body: "When everything is checked, Google cannot match your profile to the right searches." },
  { label: "Blending drain and sewer incorrectly", body: "These are different services with different costs. Misclassification leads to disputed leads and wasted budget." },
  { label: "Ignoring dispute management", body: "Unmanaged disputes pile up and drag down your ranking over time." },
  { label: "Not monitoring booking rate", body: "If you do not track how many leads become booked jobs, you cannot improve." },
  { label: "Leaving LSA on autopilot", body: "Set-and-forget management leads to inflated costs and reduced visibility." },
];

const processSteps = [
  {
    num: "01",
    title: "Profile & Category Audit",
    body: "We align plumbing services with how customers search. Drain, sewer, water heater, and emergency each get clean separation so Google matches you to the right calls.",
  },
  {
    num: "02",
    title: "Emergency Response Setup",
    body: "We implement response systems that improve booking rate and ranking visibility. In plumbing, speed wins. The shop that answers first books the job.",
  },
  {
    num: "03",
    title: "Lead Qualification & Dispute Protection",
    body: "We monitor invalid leads and manage disputes with documentation. Your budget stays protected and your ranking stays clean.",
  },
  {
    num: "04",
    title: "Review Reinforcement Strategy",
    body: "Plumbing LSA visibility depends heavily on review strength. We integrate review growth into your LSA management so every completed job becomes visible 5-star proof.",
  },
  {
    num: "05",
    title: "Revenue Tracking & Reporting",
    body: "We measure cost per booked job and revenue impact, not just lead count. Your LSA performance reports tie into the same system as your SEO, paid search, and reputation metrics.",
  },
];

const PlumbingLSAMainContent = () => {
  return (
    <>
      {/* What Are Plumbing LSAs */}
      <section id="what-is-lsa" className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Overview</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-balance">
                What Are Plumbing Local Services Ads?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Plumbing LSA allows your company to appear at the very top of Google for high-intent searches. You pay per qualified lead, not per click. Google verifies your business and displays the Google Guaranteed badge, building trust before the homeowner ever dials.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                For plumbing companies, this is especially valuable because emergency calls carry urgency. The homeowner is not browsing. They need help now. Being the first listing they see, backed by a Google Guaranteed badge, means your phone rings first.
              </p>
              <p className="text-sm text-gray-500 font-medium mb-5">High-intent plumbing searches this captures:</p>
              <ul className="grid grid-cols-2 gap-2">
                {["Emergency plumber near me", "Drain cleaning service", "Water heater repair", "Sewer line repair", "Main line backup", "Burst pipe repair"].map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="text-accent-blue shrink-0">&#10003;</span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-dark border border-border/50 rounded-xl p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-4">Plumbing LSA vs Standard Search Ads</p>
              <div className="space-y-4">
                {[
                  { metric: "Position", lsa: "Above all paid search ads", search: "Below LSA listings" },
                  { metric: "Cost Model", lsa: "Pay per lead", search: "Pay per click" },
                  { metric: "Trust Signal", lsa: "Google Guaranteed badge", search: "No verification badge" },
                  { metric: "Ranking Factor", lsa: "Booking rate + reviews", search: "Bid + Quality Score" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-3 text-sm">
                    <p className="text-text-muted font-medium">{row.metric}</p>
                    <p className="text-accent-blue">{row.lsa}</p>
                    <p className="text-text-secondary">{row.search}</p>
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
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Ranking Factors</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight text-balance">
                How Plumbing LSA Ranking Works
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Emergency responsiveness plays a major role. Google rewards shops that convert leads into booked work. A well-managed profile will outperform a competitor spending more money with poor execution.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* Booking Rate */}
      <section id="booking-rate" className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Performance Focus</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-balance">
                Booking Rate Is Everything in Plumbing LSA
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Plumbing is emergency-heavy. If your team does not answer quickly, or does not convert calls into booked jobs, your LSA visibility drops.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                LSA success in plumbing is operational discipline combined with strategic management. You need both.
              </p>
            </div>
            <div>
              {bookingRows.map((row, i) => (
                <div key={i}>
                  <div className="py-5">
                    <p className="font-semibold text-gray-900 text-[15px] mb-1.5">{row.label}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{row.body}</p>
                  </div>
                  {i < bookingRows.length - 1 && <hr className="border-t border-gray-200" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ServiceTitan Integration */}
      <section id="tracking" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">CRM Connection</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
                Plumbing LSA + ServiceTitan Integration
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-4">
                We connect LSA performance directly into your CRM so every lead is measurable. No guesswork. No vanity metrics. Just clear numbers tied to your dispatch board.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                LSA data flows into the same reporting as your <Link to="/plumbing-seo" className="text-accent-blue underline">SEO rankings</Link>, paid search campaigns, and review velocity, so you can see how each channel contributes to revenue.
              </p>
            </div>
            <div>
              {integrationRows.map((row, i) => (
                <div key={i} className="bg-surface-elevated border border-border/50 rounded-xl p-5 mb-3">
                  <p className="font-semibold text-foreground text-[15px] mb-1.5">{row.label}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{row.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section id="mistakes" className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">What Goes Wrong</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
                Common Plumbing LSA Mistakes
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Most plumbing companies make the same errors with LSA. We manage plumbing LSA as part of your larger growth system so these mistakes never compound.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {mistakes.map((m, i) => (
                <div key={i} className="border border-red-100 bg-red-50/50 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 text-sm mb-2">{m.label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Our Process</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                How We Manage Plumbing LSA
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">Structured. Monitored. Built Around Booked Plumbing Jobs.</p>
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

export default PlumbingLSAMainContent;
