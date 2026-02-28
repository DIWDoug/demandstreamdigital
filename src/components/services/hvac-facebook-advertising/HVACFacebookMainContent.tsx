import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HVACFacebookMainContent = () => {
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
              Facebook is not where homeowners search for a no-cool call at midnight. It is where they spend the weeks and months before that moment: researching whether to repair or replace, comparing HVAC companies, watching educational content, and delaying decisions on aging equipment while the system still technically runs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              That delay is your window. A homeowner who has seen your replacement campaigns, watched your financing explainer, and been retargeted after visiting your install page is not comparing you to a competitor the same way they would a company they found cold in a search result. Facebook builds that familiarity before the emergency creates urgency.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Where Homeowners Are</h3>
                <ul className="space-y-3">
                  {[
                    "Researching repair vs replace options",
                    "Comparing HVAC brands and contractors",
                    "Considering financing terms for system upgrades",
                    "Watching educational content on efficiency and comfort",
                    "Delaying decisions on aging or underperforming systems",
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
                  HVAC Facebook advertising reaches homeowners during the research phase: before they search, before they call a competitor, and before they commit to doing nothing for another season. It builds install and replacement demand rather than waiting for an equipment failure to force the decision. When your campaigns are running consistently in the months before peak season, you show up at the beginning of the decision process rather than competing for attention when every other HVAC company is also running ads.
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
              How We Use Facebook for HVAC Growth
            </h2>
            <p className="text-lg text-gray-600 mb-10">Three campaign structures built around how HVAC replacement decisions actually happen.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Install and Replacement Campaigns",
                  body: "We structure campaigns around the specific replacement decisions your customers are weighing, not generic HVAC awareness ads that reach everyone and convert no one.",
                  bullets: [
                    "AC replacement and system upgrade promotions",
                    "Furnace installation campaigns",
                    "Heat pump transition messaging",
                    "High-efficiency system offers with financing",
                    "Seasonal upgrade promotions timed to demand windows",
                  ],
                  closing: "Messaging focuses on financing options, energy savings, warranty coverage, and time-limited promotions. Replacement decisions require multiple touchpoints before homeowners act. Facebook creates the consistent presence that moves them from research to a booked call rather than letting them delay until a competitor catches them first.",
                },
                {
                  title: "Retargeting Non-Booked Visitors",
                  body: "Most website visitors leave without booking. Retargeting brings them back before they book elsewhere.",
                  bullets: [
                    "Install and replacement page visitors",
                    "Financing page visitors",
                    "Maintenance plan and membership page visitors",
                    "Abandoned form users",
                    "Video viewers who watched more than 50% of educational content",
                  ],
                  closing: "A homeowner who visited your heat pump replacement page last week and then sees a financing offer in their feed is significantly closer to booking than a cold audience. Retargeting captures the conversion value from traffic your search campaigns already generated rather than letting it walk out the door.",
                },
                {
                  title: "Maintenance Plan Growth",
                  body: "Facebook supports recurring revenue by promoting your maintenance offering to past customers, look-alike audiences, and homeowners who have engaged with your content but not yet booked.",
                  bullets: [
                    "Annual maintenance agreements and HVAC tune-up promotions",
                    "Seasonal inspection campaigns before peak demand",
                    "Membership program offers with clear recurring value",
                    "Lapsed customer reactivation sequences",
                  ],
                  closing: "Maintenance plan revenue stabilizes a business that would otherwise swing entirely with emergency call volume and seasonal demand. Facebook is the most cost-effective channel for growing that base because you can target past customers and homeowners who already know your name.",
                },
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
              HVAC Facebook Campaigns Follow the Climate Calendar
            </h2>
            <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
              Demand shifts with the weather. Facebook campaigns should shift with it.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  label: "Before Summer",
                  body: "Build cooling demand in April and May before the first no-cool calls spike. Replacement campaigns run during this window convert at higher rates because homeowners are thinking ahead rather than reacting under heat and pressure. This is when financing offers perform best for AC replacement and system upgrades.",
                },
                {
                  label: "Before Winter",
                  body: "Push furnace installation and heat pump campaigns in September and October. Homeowners who have been putting off a furnace replacement act when they start thinking about the first cold snap. Get in front of them before the urgency kicks in and every competitor is running the same campaign at the same time.",
                },
                {
                  label: "Shoulder Season",
                  body: "Promote financing offers and maintenance plans during spring and fall when urgency is lower and homeowners have time to research. Shoulder season is when brand reinforcement compounds. A homeowner who has seen your campaigns for 60 days converts faster when peak demand arrives than one who encounters your brand for the first time in July.",
                },
                {
                  label: "Year-Round Retargeting",
                  body: "Run retargeting continuously regardless of season. Homeowners who visited your install or replacement pages did not disappear when they left. A consistent retargeting presence ensures your company is visible at every stage of the decision process, not just when they first searched.",
                },
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
              Creative and Audience Strategy for HVAC Facebook Campaigns
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              Facebook performance depends on two things working together: showing the right creative to the right audience. Generic contractor ads running to broad zip code audiences produce impressions. Targeted creative matched to custom and look-alike audiences produces booked calls. The difference between the two is not budget. It is how the campaign is built.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Creative</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Homeowners comparing HVAC companies in their Facebook feed make judgments about brand authority within seconds. A real job photo from a completed AC replacement reads immediately as credibility. A generic stock photo of a technician reads as any other contractor ad they scroll past.
                </p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What performs:</p>
                <ul className="space-y-2">
                  {[
                    "Real job photography from completed installations and replacements",
                    "Before-and-after system photos with brief descriptions",
                    "Short educational videos: repair vs replace, financing breakdowns, efficiency explainers",
                    "Financing-focused messaging with clear monthly payment framing",
                    "Geo-relevant language tied to your actual service area",
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
                  Audience quality determines how far your budget goes. A well-built custom audience and a properly seeded look-alike will outperform broad interest targeting at half the cost per booked call, because you are reaching people who already match the profile of your best customers.
                </p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">How we build audiences:</p>
                <ul className="space-y-2">
                  {[
                    "Homeowners within your verified service radius",
                    "Look-alike audiences built from past customer and booked call lists",
                    "Retargeting pools from website visits, video views, and form starts",
                    "Customer list uploads for maintenance plan renewal campaigns",
                    "Seasonal audience adjustments tied to demand and equipment replacement patterns",
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
              Impressions and clicks do not show up on your dispatch board. A Facebook campaign that generates 500 clicks and 3 booked calls is producing a very different result than one generating 500 clicks and 40 booked calls. We connect{" "}
              <a href="https://www.facebook.com/business/ads" target="_blank" rel="noopener noreferrer" className="text-accent-blue underline underline-offset-2">Facebook Ads</a>{" "}
              campaign performance directly to your revenue reporting so you can see what the spend is actually producing in booked jobs, average ticket, and closed revenue by campaign.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Conversion Tracking", desc: "Form fills and landing page completions" },
                { label: "Call Tracking", desc: "Phone calls from ads traced to campaign" },
                { label: "Booking Rate", desc: "Booked vs non-booked by lead source" },
                { label: "Revenue Attribution", desc: "Closed job revenue by campaign source" },
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
              Facebook Reinforces the Full HVAC Growth System
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              Facebook does not replace search or SEO. It fills the gap those channels leave. Search captures homeowners who are already looking. SEO builds the organic authority that makes them choose you when they search. Facebook reaches the homeowners who are not searching yet, builds brand familiarity during the research window, and retargets the ones who visited but did not book. All three have to work together to cover the full demand cycle.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  channel: "Search Ads",
                  desc: "Captures urgent demand. Homeowners actively searching for same-day service or emergency repair. This is the volume channel that fills the board during peak season.",
                },
                {
                  channel: "SEO",
                  desc: "Builds long-term organic authority. Every page that ranks reduces cost per booked call over time and compounds across the life of the campaign.",
                },
                {
                  channel: "Facebook",
                  desc: "Builds replacement demand before homeowners search. Retargets non-converters. Grows maintenance plan revenue. Works in the weeks and months before the emergency forces the decision.",
                },
              ].map((col, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{col.channel}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{col.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm text-center max-w-2xl mx-auto">
              The strongest HVAC growth systems use all three. Blended cost per booked call decreases when every channel reinforces the others rather than operating in isolation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HVACFacebookMainContent;
