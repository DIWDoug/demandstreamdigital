import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PlumbingInstagramMainContent = () => {
  return (
    <>
      {/* SECTION 03 — WHAT INSTAGRAM IS FOR */}
      <section id="how-instagram-works" className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Instagram Is a Visual Trust Engine. Not an Emergency Channel.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
              Instagram is not where homeowners search for a plumbing emergency. It is where they spend time between those moments — scrolling through project photos, watching short videos, and building a mental list of companies they would consider when the time comes. That list forms over weeks and months, not in the fifteen seconds before they call someone. Instagram is how you get on it.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              The channel works differently than search. There is no intent signal, no keyword to capture. What Instagram does is build the visual credibility that makes a homeowner trust your company before they ever visit your website. A well-executed plumbing Instagram presence means that when the water heater finally fails, your name is already familiar — and familiar wins the call.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Homeowner Behavior on Instagram</h3>
                <ul className="space-y-3">
                  {[
                    "Evaluating company credibility through real job photos",
                    "Viewing before-and-after water heater and repipe work",
                    "Watching short videos on plumbing repairs and replacements",
                    "Comparing companies visually before making contact",
                    "Building familiarity before large purchase decisions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">What Instagram Builds</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Instagram builds the kind of brand recognition that search advertising cannot manufacture. A homeowner who has seen your completed repipe projects, your team on a job site, and your financing offers over the course of several months does not approach your company as a stranger when they finally call. That prior familiarity shortens the decision cycle, raises the close rate, and produces a better customer than a cold emergency search lead — because they chose you deliberately, not just because you answered first.
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
              How We Use Instagram for Plumbing Growth
            </h2>
            <p className="text-lg text-gray-600 mb-10">Three campaign structures built around how homeowners research and decide on plumbing replacement work.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Job Showcases and Replacement Campaigns",
                  body: "The foundation of a plumbing Instagram strategy is real job photography. Not stock images of tools on a white background — actual completed work. A water heater replacement in a tight utility closet. A repipe project showing the old corroded pipes alongside new copper or PEX. A trenchless sewer repair that left the yard intact. These images do what no ad copy can: they prove that your team does quality work, and they do it in under two seconds.",
                  bullets: [
                    "Water heater replacements and tankless upgrades",
                    "Whole-home repipe completions",
                    "Sewer line replacement and trenchless projects",
                    "Before-and-after pipe condition documentation",
                    "High-quality job site imagery from real completed work"
                  ],
                  closing: "Every photo is a proof point. The more proof points a homeowner accumulates before they need a plumber, the shorter the path from their problem to your booking form."
                },
                {
                  title: "Short-Form Educational Content",
                  body: "Education reduces hesitation on high-ticket plumbing decisions. A homeowner who is not sure whether they need a full repipe or just a spot repair is not ready to book. Short-form video and carousel content on Instagram answers those questions in a way that builds trust rather than pressure — and positions your company as the one with the expertise to handle the job correctly.",
                  bullets: [
                    "Repair vs replace breakdowns for water heaters and pipes",
                    "How to recognize signs that a home needs repiping",
                    "Financing option walkthroughs for larger jobs",
                    "What a camera inspection actually shows and why it matters",
                    "Seasonal maintenance reminders before freeze season"
                  ],
                  closing: "A homeowner who understands the problem and trusts your explanation is significantly more likely to book with you than one who is still confused about what they need. Educational content closes that gap before the sales conversation starts."
                },
                {
                  title: "Retargeting and Engagement Campaigns",
                  body: "Not every homeowner who visits your water heater page is ready to book that day. Retargeting keeps your company in front of them on Instagram while they finish deciding — showing them a financing offer, a project photo, or a seasonal promotion that makes the next step easier than starting over with a competitor.",
                  bullets: [
                    "Website visitors who viewed water heater or repipe pages",
                    "Homeowners who watched your educational videos",
                    "Previous ad engagers who clicked but didn't convert",
                    "People who visited your financing or membership pages"
                  ],
                  closing: "Instagram retargeting integrates with Facebook retargeting to create a multi-platform presence. When a homeowner sees your brand on Google, in their Facebook feed, and on Instagram — all reinforcing the same message — the decision threshold drops."
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
              Plumbing Instagram Campaigns Follow the Demand Calendar
            </h2>
            <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
              Instagram brand reinforcement is most effective when it is timed to when homeowners are already thinking about their plumbing systems. National coverage means strategy varies by climate zone — freeze-risk markets and sunbelt markets need different timing and different creative emphasis.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                { label: "Before Freeze Season (Fall — Freeze-Risk Markets)", body: "Run water heater and pipe vulnerability campaigns in September through November across freeze-risk markets in Texas, the Mountain West, and the Midwest. A homeowner who sees your repipe and replacement content in October is far more likely to act in November than one who encounters your brand for the first time after a freeze event." },
                { label: "After Freeze Events (Winter — Targeted Surge)", body: "Deploy repipe and repiping campaigns immediately following freeze events. Homeowners who experienced pipe failures are actively researching upgrades — and a company that has been showing up in their feed for weeks has a meaningful head start over one they discover through a post-crisis search." },
                { label: "Spring and Summer (Sunbelt and National Shoulder)", body: "Push water heater replacement and membership content in spring and summer when urgency is lower and homeowners have more time to engage with educational content. Sunbelt markets see strong water heater replacement conversion during this window. Brand reinforcement during lower-urgency periods compounds into calls when demand peaks." },
                { label: "Year-Round Retargeting", body: "Run retargeting campaigns continuously regardless of season or climate. The homeowner who visited your site in January and didn't book may be ready in April — and a consistent Instagram retargeting presence ensures your company is still the one they recognize when that moment arrives." }
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
              Creative and Audience Strategy for Plumbing Instagram Campaigns
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              Instagram is a visual platform and it rewards visual honesty. The plumbing companies that perform best on Instagram are not the ones with the biggest ad budgets — they are the ones with the most compelling evidence of their own work. Real photography, real projects, real customers. That is the creative standard we hold every campaign to.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Creative</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  The gap between a plumbing Instagram ad that scrolls past and one that stops a homeowner comes down to one thing: does it look real? Stock photography of wrenches and pipes has no stopping power. A photo of your team completing a full repipe in a 1960s ranch house — with the old galvanized pipes laid out next to the new PEX — makes a homeowner think: that could be my house.
                </p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What performs:</p>
                <ul className="space-y-2">
                  {[
                    "Real job photography from completed water heater replacements and repipes",
                    "Before-and-after pipe condition comparisons",
                    "Short-form Reels: what a slab leak looks like, how a repipe is done, when to replace vs repair",
                    "Financing-focused carousel ads with clear monthly payment framing",
                    "Location-specific captions that reference neighborhoods in your service area"
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
                  The most efficient Instagram audiences for plumbing replacement campaigns are not built from interest targeting — they are built from data. Past customers, website visitors, and look-alikes of both. These audiences have the highest intent-to-purchase rates and the lowest cost per booked call because they are already familiar with or predisposed toward your company.
                </p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">How we structure audiences:</p>
                <ul className="space-y-2">
                  {[
                    "Homeowners within your verified service radius",
                    "Older neighborhoods segmented by home age and construction era",
                    "Look-alike audiences built from past customer CRM exports",
                    "Retargeting pools from water heater, repipe, and financing page visits",
                    "Customer list uploads for membership renewal and lapsed customer reactivation",
                    "Seasonal adjustments for freeze-risk vs sunbelt timing by campaign"
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
              Instagram + ServiceTitan: Revenue Tracking That Goes Beyond Impressions
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              Impressions and reach tell you how many people saw your ad. They do not tell you how many picked up the phone, booked a water heater replacement, or enrolled in a membership plan. We connect <a href="https://www.facebook.com/business/ads" target="_blank" rel="noopener noreferrer" className="text-accent-blue underline underline-offset-2">Instagram Ads</a> campaign performance to call tracking and revenue data so that the reporting answers the only question that matters: what did this spend produce on the dispatch board?
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
              Instagram Reinforces the Full Plumbing Growth System
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              Instagram does not replace search or SEO — it covers the part of the customer journey those channels can't reach. Search captures the homeowner who is already in an emergency. SEO earns the organic position that shows up when they search. Instagram reaches the homeowner who is not searching yet — who is still deciding whether that slow water heater is a problem worth solving, and whether your company is the one to call when it is.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { channel: "Search Ads", desc: "Captures urgent demand from homeowners actively searching for emergency repair or same-day service. This is where emergency call volume originates. Instagram reinforces the brand those homeowners see in search results." },
                { channel: "SEO", desc: "Builds long-term organic authority in your market. Every page that ranks reduces the cost per booked call over time. Instagram increases the likelihood that a homeowner who finds you organically recognizes you before they click." },
                { channel: "Instagram", desc: "Builds visual brand authority before homeowners search. Retargets non-converters across the decision window. Supports water heater and repipe demand in the research phase where search has no presence." }
              ].map((col, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{col.channel}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{col.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 text-sm max-w-3xl mx-auto">
              The strongest plumbing growth systems use all three. Blended cost per booked call decreases when every channel reinforces the others — and Instagram is what keeps your brand visible during the long weeks between when a homeowner notices a problem and when they finally call.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlumbingInstagramMainContent;
