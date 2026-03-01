import { Link } from "react-router-dom";
import { MapPin, Star, Zap, TrendingUp, Tag, Clock } from "lucide-react";

const rankingFactors = [
  { icon: MapPin, label: "Proximity to the searcher", body: "Closer shops appear more often for nearby searches." },
  { icon: Star, label: "Review volume and star rating", body: "Recent, high-quality reviews push your listing higher." },
  { icon: Zap, label: "Response speed", body: "How fast you answer or return the call impacts ranking." },
  { icon: TrendingUp, label: "Booking rate", body: "Google tracks whether leads become booked jobs." },
  { icon: Tag, label: "Service category selection", body: "Heating, cooling, repair, and replacement need clean separation." },
  { icon: Clock, label: "Business hour alignment", body: "Your listed hours must match when you actually answer." },
];

const capacityRows = [
  { label: "Repair vs replacement segmentation", body: "A homeowner searching for AC repair has different intent than someone researching a full system changeout. We separate these categories so leads match the work your team is set up to perform." },
  { label: "Capacity throttling", body: "During peak weeks, we adjust LSA strategy so you are not paying for leads your schedule cannot handle. During shoulder seasons, we push harder to fill empty blocks." },
  { label: "Fast response times", body: "HVAC emergencies are urgent. The company that answers first books the call. We track response metrics and flag gaps before they impact your ranking." },
  { label: "Clean dispute management", body: "Invalid leads are disputed with documentation. Your budget and your ranking stay protected." },
  { label: "Cost per booked job reduction", body: "We track the number that actually matters. Not impressions. Not leads. Booked jobs that show up on your dispatch board." },
];

const integrationRows = [
  { label: "CRM Tracking", body: "Every HVAC lead connected to a measurable outcome in ServiceTitan." },
  { label: "Booking Confirmation", body: "Confirmed bookings recorded against LSA source for accurate booking rate." },
  { label: "Revenue Attribution", body: "Closed job revenue tied back to the campaign source, not estimated." },
  { label: "Cost Per Booked Job", body: "The true acquisition metric tied to dispatched work on your board." },
  { label: "Seasonal ROI Comparison", body: "Summer vs winter performance tracked separately to show demand cycle results." },
];

const mistakes = [
  { label: "Combining heating and cooling categories poorly", body: "These are different services with different seasonal patterns. Clean separation matters." },
  { label: "Ignoring replacement-focused opportunities", body: "LSA can capture high-value changeout leads when categories are set up correctly." },
  { label: "Failing to manage seasonality", body: "Running the same LSA strategy in July and January means you overspend in one and underperform in the other." },
  { label: "Leaving LSA unmanaged", body: "Set-it-and-forget-it leads to wasted budget and declining visibility." },
  { label: "Not tracking booking rate", body: "Without this metric, you cannot measure what matters." },
  { label: "Missing the maintenance agreement opportunity", body: "LSA leads are often one-time callers. A maintenance agreement converts them into recurring revenue." },
];

const processSteps = [
  {
    num: "01",
    title: "Category & Seasonal Audit",
    body: "We align heating, cooling, repair, replacement, and maintenance categories properly. Each category is set up to match how homeowners search during each season.",
  },
  {
    num: "02",
    title: "Booking Rate Strategy",
    body: "We improve responsiveness and segmentation so more leads convert to booked calls. Faster answers. Cleaner classification. Fewer wasted opportunities.",
  },
  {
    num: "03",
    title: "Capacity Management",
    body: "We adjust strategy during peak and shoulder seasons. When your board is full, we throttle. When you have openings, we push. Your LSA spend matches your ability to perform.",
  },
  {
    num: "04",
    title: "Review Reinforcement",
    body: "Review strength impacts HVAC LSA ranking significantly. We integrate review growth into your management so every completed repair, tune-up, and changeout becomes visible 5-star proof.",
  },
  {
    num: "05",
    title: "Revenue Tracking & Reporting",
    body: "We measure cost per booked job and seasonal ROI impact. Your HVAC LSA reporting ties into the same connected dashboard as every other channel.",
  },
];

const HVACLSAMainContent = () => {
  return (
    <>
      {/* What Are HVAC LSAs */}
      <section id="what-is-lsa" className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Overview</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-balance">
                What Are HVAC Local Services Ads?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                HVAC LSA places your company above traditional ads for high-intent searches. You pay per qualified lead, not per click. Google verifies your business and displays the Google Guaranteed badge, which increases trust and click-through rate with homeowners comparing their options.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                For HVAC companies, LSA is especially valuable during seasonal peaks. When every AC company in your market is competing for the same no-cool calls, the Google Guaranteed badge and a strong booking rate put your profile above the rest.
              </p>
              <p className="text-sm text-gray-500 font-medium mb-5">High-intent HVAC searches this captures:</p>
              <ul className="grid grid-cols-2 gap-2">
                {["AC repair near me", "Furnace repair near me", "HVAC service company", "Heating and cooling repair", "No-cool emergency", "Heat pump installation"].map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="text-accent-blue shrink-0">&#10003;</span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-dark border border-border/50 rounded-xl p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-4">HVAC Seasonal Demand Reality</p>
              <div className="space-y-4">
                {[
                  { season: "Peak Summer", demand: "No-cool emergencies", pressure: "Maximum competition" },
                  { season: "Peak Winter", demand: "No-heat emergencies", pressure: "Maximum competition" },
                  { season: "Spring/Fall", demand: "Tune-ups & maintenance", pressure: "Lower competition" },
                  { season: "Year-Round", demand: "Replacement research", pressure: "Steady opportunity" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-3 text-sm border-b border-border/30 pb-3 last:border-0 last:pb-0">
                    <p className="text-accent-blue font-medium">{row.season}</p>
                    <p className="text-text-secondary">{row.demand}</p>
                    <p className="text-text-muted">{row.pressure}</p>
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
                How HVAC LSA Ranking Works
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Seasonal spikes increase competition. Ranking discipline matters more during peak months because that is when the cost of poor management is highest.
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

      {/* Booking Rate & Capacity */}
      <section id="booking-rate" className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Capacity Control</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-balance">
                Booking Rate and Capacity Control
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                HVAC businesses face seasonal surges that test both your dispatch and your marketing. LSA management must account for both.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                LSA must align with your operational bandwidth. If your board is full, we throttle. If your board has openings, we push. That is capacity-based marketing applied to LSA.
              </p>
            </div>
            <div>
              {capacityRows.map((row, i) => (
                <div key={i}>
                  <div className="py-5">
                    <p className="font-semibold text-gray-900 text-[15px] mb-1.5">{row.label}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{row.body}</p>
                  </div>
                  {i < capacityRows.length - 1 && <hr className="border-t border-gray-200" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Strategy */}
      <section id="seasonal-strategy" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Seasonal Approach</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight text-balance">
                HVAC LSA Seasonal Strategy
              </h2>
              <p className="text-text-secondary max-w-2xl">
                HVAC is not a flat-demand business. Your LSA strategy should reflect that.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Peak Season",
                  subtitle: "Summer Cooling / Winter Heating",
                  body: "Competition intensifies. We focus on booking rate, response speed, and review strength to maintain ranking without overspending. Capacity throttling prevents your schedule from breaking.",
                },
                {
                  title: "Shoulder Season",
                  subtitle: "Spring / Fall",
                  body: "Call volume drops. Maintenance tune-ups and system inspections become the primary lead types. We shift LSA categories to match and push maintenance agreement opportunities.",
                },
                {
                  title: "Year-Round",
                  subtitle: "Continuous Review Reinforcement",
                  body: "Every completed HVAC job is an opportunity to build 5-star proof that strengthens your LSA ranking, your Maps visibility, and your call preference year-round.",
                },
              ].map((card, i) => (
                <div key={i} className="bg-surface-elevated border border-border/50 rounded-xl p-6">
                  <p className="font-bold text-foreground text-lg mb-1">{card.title}</p>
                  <p className="text-xs text-accent-blue font-semibold uppercase tracking-wider mb-4">{card.subtitle}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
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
                HVAC LSA + ServiceTitan Integration
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We integrate LSA with your CRM so every lead connects to a measurable outcome. Your HVAC LSA performance is not theoretical. It is tied to real numbers on your dispatch board.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                It flows into the same dashboard as your <Link to="/hvac-seo" className="text-accent-blue underline">SEO rankings</Link>, paid search results, and review growth, giving you one connected view of what is driving booked calls.
              </p>
            </div>
            <div>
              {integrationRows.map((row, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-3">
                  <p className="font-semibold text-gray-900 text-[15px] mb-1.5">{row.label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{row.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section id="mistakes" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">What Goes Wrong</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight text-balance">
                Common HVAC LSA Mistakes
              </h2>
              <p className="text-text-secondary max-w-2xl">
                Most HVAC companies make similar errors with LSA. We manage HVAC LSA as part of your connected growth system so these mistakes never compound.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {mistakes.map((m, i) => (
                <div key={i} className="border border-border/50 bg-surface-elevated rounded-xl p-5">
                  <p className="font-semibold text-foreground text-sm mb-2">{m.label}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Our Process</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                How We Manage HVAC LSA
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">Structured. Seasonal. Built Around Booked HVAC Jobs.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {processSteps.map((step, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <p className="text-4xl font-bold text-accent-blue/20 mb-3 leading-none">{step.num}</p>
                  <p className="font-semibold text-gray-900 mb-2">{step.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HVACLSAMainContent;
