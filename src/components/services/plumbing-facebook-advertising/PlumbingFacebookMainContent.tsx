import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PlumbingFacebookMainContent = () => {
  return (
    <>
      {/* SECTION 03 — WHAT FACEBOOK IS FOR */}
      <section id="how-facebook-works" className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Facebook Is Not Emergency Capture. It Is Replacement Demand.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
              Facebook is not where homeowners search for a burst pipe at midnight. It is where they spend time between those moments — researching whether to replace an aging water heater, comparing plumbing companies after a slow drain, and sitting on repipe quotes they have been putting off for months. The decision is forming. They just haven't called yet.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              That window is where Facebook advertising earns its place in a plumbing growth system. Not by capturing urgency — search does that — but by staying in front of the homeowner while the decision takes shape. When they finally pick up the phone, your company is the one they recognize.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Where Homeowners Are</h3>
                <ul className="space-y-3">
                  {[
                    "Researching water heater replacement options",
                    "Considering financing terms on a repipe",
                    "Comparing plumbing companies before calling",
                    "Watching before-and-after project content",
                    "Delaying decisions on aging pipe systems"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">What Facebook Supports</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Plumbing Facebook advertising reaches homeowners in the research phase — before they search, before they call a competitor, and before they decide to do nothing for another season. It builds replacement demand rather than waiting for the emergency to force their hand. The practical result is a steadier pipeline of higher-ticket work: water heater replacements, repipes, and membership enrollments that don't depend on a pipe failing at 2am.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — CAMPAIGN TYPES */}
      <section id="campaign-types" className="py-20 lg:py-28 bg-[#f9f9f9] scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              How We Use Facebook for Plumbing Growth
            </h2>
            <p className="text-lg text-gray-600 mb-10">Three campaign structures built around how plumbing replacement decisions actually happen.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Water Heater and Replacement Campaigns",
                  body: "The majority of plumbing Facebook spend goes toward replacement campaigns — the jobs with the highest ticket values and the most predictable demand patterns. Water heaters fail on a timeline. Pipes corrode by decade. Neighborhoods built in the same era share the same vulnerabilities. Facebook lets you reach those homeowners before they're in crisis mode.",
                  bullets: [
                    "Water heater replacement by home age and neighborhood",
                    "Repipe campaigns targeting older construction areas",
                    "Tankless upgrade promotions with financing messaging",
                    "Sewer line replacement in high-root-intrusion markets",
                    "Whole-home repiping packages for aging inventory"
                  ],
                  closing: "Messaging focuses on financing options, long-term reliability, warranty protection, and time-limited offers. Replacement decisions take time. Facebook creates the touchpoints that move homeowners from research to booked call."
                },
                {
                  title: "Retargeting Non-Booked Visitors",
                  body: "A homeowner who visited your water heater replacement page and left without calling is not gone. They are still deciding. Retargeting campaigns follow them across Facebook and Instagram after they leave your site, showing them the offer they didn't act on — with a financing message, a seasonal promotion, or a membership offer that makes the next step easier.",
                  bullets: [
                    "Water heater page visitors",
                    "Repipe and repiping page visitors",
                    "Financing page visitors",
                    "Membership and maintenance plan page visitors",
                    "Abandoned form users"
                  ],
                  closing: "The math is straightforward: a homeowner who has already visited your site converts at a significantly higher rate than a cold audience. Retargeting captures that value instead of letting it walk out the door."
                },
                {
                  title: "Membership and Maintenance Plan Growth",
                  body: "Membership campaigns on Facebook reach two audiences simultaneously: past customers who haven't enrolled yet and homeowners who match their profile. Both groups respond to the same message — predictable pricing, priority scheduling, and the peace of mind that comes with an annual plumbing inspection before something fails.",
                  bullets: [
                    "Annual plumbing inspection agreements",
                    "Priority scheduling and discounted diagnostic promotions",
                    "Membership benefit campaigns to past job lists",
                    "Seasonal offers tied to freeze prep and spring maintenance windows",
                    "Look-alike audiences built from existing member data"
                  ],
                  closing: "Membership revenue stabilizes a business that would otherwise swing with emergency call volume. Facebook is the most cost-effective channel for growing that base before homeowners have a reason to need you."
                }
              ].map((card, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-7 flex flex-col">
                  <h3 className="font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.body}</p>
                  <ul className="space-y-2 mb-4">
                    {card.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 italic mt-auto">{card.closing}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — SEASONAL STRATEGY */}
      <section id="seasonal-strategy" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Plumbing Facebook Campaigns Follow the Demand Calendar
            </h2>
            <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
              Plumbing demand shifts with the season and the climate. Facebook campaigns should shift with it — building the right audience at the right time rather than running the same message year-round.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                { label: "Before Freeze Season (Fall — National)", body: "Run water heater replacement and pipe vulnerability campaigns in September through November, ahead of the first cold snap. Homeowners in freeze-risk markets across Texas, the Midwest, and the Mountain West are thinking about their systems during this window. The ones who replace before winter are far better customers than the ones who call after a pipe bursts." },
                { label: "After Freeze Events (Winter — Freeze Markets)", body: "Deploy repipe and repiping campaigns immediately following freeze events in your market. Homeowners who experienced pipe damage are actively researching upgrades and are far more likely to act on a financing offer they've already seen in their feed than to start a cold search from scratch." },
                { label: "Spring and Summer (Shoulder Season — Sunbelt + National)", body: "Push water heater replacement and membership campaigns during spring and summer when competition for search clicks is lower and homeowners have time to research without urgency. Financing campaigns in this window convert well because the decision isn't emotionally charged — it's a planned upgrade." },
                { label: "Year-Round Retargeting", body: "Run retargeting continuously regardless of season. Homeowners who visited your site and didn't book are in an active decision window that doesn't follow a calendar. A consistent retargeting presence ensures your company is the last brand they see before they pick up the phone — not a competitor's." }
              ].map((tile, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-7">
                  <h3 className="font-bold text-foreground mb-2">{tile.label}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{tile.body}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/contact" className="btn-cta inline-flex items-center gap-2">
                Claim Your Territory Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — CREATIVE AND AUDIENCE */}
      <section className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Creative and Audience Strategy for Plumbing Facebook Campaigns
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              Facebook performance depends on two things working together: showing the right creative to the right audience. Generic contractor graphics running to broad zip codes produce impressions. The right job photo running to a look-alike audience built from your best customers produces booked calls.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Creative</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  The single biggest creative mistake in plumbing Facebook advertising is stock photography. Homeowners comparing plumbing companies in their feed make judgments about brand quality in under two seconds. A photo of your actual team completing a real water heater replacement or a repipe job communicates competence in a way a generic wrench graphic never will.
                </p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What performs:</p>
                <ul className="space-y-2">
                  {[
                    "Real job photography from completed replacements and repipe projects",
                    "Before-and-after water heater and piping condition photos",
                    "Short-form video: repair vs replace breakdowns, financing walkthroughs, what a slab leak looks like",
                    "Financing-focused ads with clear monthly payment framing",
                    "Geo-specific captions that reference your service area neighborhoods"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Audience</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Audience precision determines whether your budget produces calls or just reach. The strongest-performing audiences for plumbing Facebook campaigns are built from data you already have — past customers, website visitors, and look-alike profiles built from those lists.
                </p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">How we structure audiences:</p>
                <ul className="space-y-2">
                  {[
                    "Homeowners within your verified service radius",
                    "Homeowners in older neighborhoods segmented by home age and construction era",
                    "Look-alike audiences built from past customer CRM data",
                    "Retargeting pools from water heater, repipe, and financing page visits",
                    "Customer list uploads for membership renewal and lapsed customer reactivation",
                    "Seasonal audience adjustments tied to climate zones and freeze-risk timing"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — TRACKING */}
      <section id="tracking" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Facebook + ServiceTitan: Revenue Tracking That Goes Beyond Clicks
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              Impressions and clicks do not show up on your dispatch board. A Facebook campaign that produces 40,000 impressions and 12 form fills means nothing if you can't trace those form fills to booked calls and closed revenue. We connect <a href="https://www.facebook.com/business/ads" target="_blank" rel="noopener noreferrer" className="text-accent-blue underline underline-offset-2">Facebook Ads</a> campaign performance directly to call tracking and CRM data so the reporting shows what the spend is actually producing — not what it's reaching.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Conversion Tracking", desc: "Form fills and landing page completions" },
                { label: "Call Tracking", desc: "Phone calls from ads traced to campaign" },
                { label: "Booking Rate", desc: "Booked vs non-booked tracked by call type" },
                { label: "Revenue Attribution", desc: "Closed job revenue by campaign source" }
              ].map((m, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="font-bold text-foreground text-sm mb-1">{m.label}</p>
                  <p className="text-text-muted text-xs">{m.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm mb-8">Other CRMs supported. ServiceTitan is the primary integration.</p>
            <Link to="/contact" className="btn-cta inline-flex items-center gap-2">
              Claim Your Territory Today
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 08 — SYSTEM INTEGRATION */}
      <section className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Facebook Reinforces the Full Plumbing Growth System
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              Facebook does not replace search or SEO. It fills the gap those channels leave. Search captures the homeowner who is already in crisis — they have a burst pipe, they need someone now, and they're calling whoever ranks first. SEO builds the organic authority that earns that ranking over time. Facebook reaches the homeowner who is neither urgent nor searching — the one who has been meaning to replace that water heater for two years and just needs enough touchpoints to finally make the call.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { channel: "Search Ads", desc: "Captures urgent demand. Homeowners actively searching for emergency repair or same-day plumbing service convert here. This is where the dispatch board fills during peak demand." },
                { channel: "SEO", desc: "Builds long-term organic authority. Every page that ranks for a high-intent plumbing search reduces the cost per booked call over time and compounds across the life of the campaign." },
                { channel: "Facebook", desc: "Builds replacement demand before homeowners search. Retargets non-converters across the decision window. Grows membership base and recurring revenue without waiting for the next emergency." }
              ].map((col, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{col.channel}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{col.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 text-sm max-w-3xl mx-auto">
              The strongest plumbing growth systems use all three. Blended cost per booked call decreases when every channel reinforces the others — and Facebook is what keeps the pipeline moving between emergency spikes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlumbingFacebookMainContent;
