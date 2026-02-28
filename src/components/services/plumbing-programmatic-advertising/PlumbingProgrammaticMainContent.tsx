import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PlumbingProgrammaticMainContent = () => {
  return (
    <>
      {/* SECTION 03 — WHAT PROGRAMMATIC IS */}
      <section id="what-is-programmatic" className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Programmatic Advertising Reaches Homeowners Search Cannot.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
              Most plumbing advertising lives in one channel: Google search. When a homeowner searches "water heater replacement near me," the companies running search ads compete for that click. That is a critical channel, and it should run. But search only reaches homeowners who are already looking. The homeowner who has been meaning to replace their 15-year-old water heater for two years — but hasn't searched yet — is invisible to search advertising. Programmatic reaches that homeowner where they actually spend their time.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              Programmatic advertising uses automated bidding to place your ads across thousands of websites, apps, news platforms, and streaming services — in real time, based on the audience profile you define. We use <a href="https://www.adroll.com" target="_blank" rel="noopener noreferrer" className="text-accent-blue underline underline-offset-2">AdRoll</a> for display and retargeting across the web and Mountain for Connected TV placements on streaming platforms. Together, they create a brand presence that follows your target audience through their daily digital life, reinforcing your company name until the moment they are ready to call.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Where Programmatic Ads Appear</h3>
                <ul className="space-y-3">
                  {[
                    "Local news and weather websites",
                    "Home improvement content sites",
                    "Real estate and home valuation platforms",
                    "Sports and entertainment streaming apps",
                    "Connected TV via Mountain on major streaming services",
                    "Mobile apps on iOS and Android",
                    "AdRoll display network across high-traffic content sites"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">What Programmatic Does for Plumbing</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Programmatic advertising works as a reinforcement layer — it does not replace search or social, it amplifies them. A homeowner who searched for water heater replacement last week and didn't call gets followed by your display ads across the web. A homeowner in an older neighborhood who matches the profile of your best replacement customers sees your brand on the streaming service they watch every night. The cumulative effect is a market presence that feels larger than any single channel can produce — and a booked call rate that improves across every channel as brand recognition compounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — WHEN IT WORKS */}
      <section id="when-it-works" className="py-20 lg:py-28 bg-[#f9f9f9] scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              When Plumbing Programmatic Advertising Works Best
            </h2>
            <p className="text-lg text-gray-600 mb-10">Programmatic performs best as a reinforcement layer — not as a standalone demand channel.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Replacement and High-Ticket Campaigns",
                  body: "Water heater replacements, repipes, and sewer line work are high-ticket decisions that take time to make. Homeowners research, compare, delay, and revisit the decision across days or weeks. Programmatic advertising keeps your company in front of them throughout that window — on every site they visit, every app they open, and every stream they watch — so when they finally call, your name is the one they remember seeing everywhere.",
                  bullets: [
                    "Water heater replacement campaigns in older neighborhoods",
                    "Repipe and repiping promotions targeting homes built before 1985",
                    "Tankless upgrade campaigns for high-income service areas",
                    "Sewer line rehabilitation in tree-dense or aging sewer markets",
                    "Pre-season campaigns before freeze season in cold-climate markets"
                  ]
                },
                {
                  title: "Retargeting Non-Booked Visitors Across the Web",
                  body: "A homeowner who visited your water heater page and left without booking did not decide against you — they just were not ready. Retargeting through AdRoll follows that homeowner across the web after they leave your site, showing them your brand on news sites, home improvement content, and streaming platforms until they come back and complete the call. It is the most cost-effective use of programmatic spend because it targets people who have already demonstrated purchase intent.",
                  bullets: [
                    "Water heater and replacement page visitors",
                    "Repipe and repiping page visitors",
                    "Financing and membership page visitors",
                    "Blog and educational content readers",
                    "Abandoned form users"
                  ]
                },
                {
                  title: "Connected TV Campaigns via Mountain",
                  body: "Cord-cutting has permanently changed how homeowners consume video content. A significant share of your target audience does not watch traditional broadcast television — they stream. Mountain provides Connected TV placement on the major streaming platforms, putting your plumbing brand in front of homeowners during the lean-back viewing moments that linear TV used to own.",
                  bullets: [
                    "Brand awareness in competitive metros where search CPCs are high",
                    "Pre-season replacement campaigns before freeze season or peak summer",
                    "Reinforcing search and social campaigns with a high-visibility video presence",
                    "Markets where name recognition is the primary conversion barrier",
                    "Companies building toward market leadership in their service area"
                  ]
                }
              ].map((card, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-7 flex flex-col">
                  <h3 className="font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.body}</p>
                  <ul className="space-y-2">
                    {card.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
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
              Plumbing Programmatic Campaigns Follow the Demand Calendar
            </h2>
            <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
              Programmatic spend is most efficient when it is timed to pre-season demand windows — reaching homeowners before they are in crisis, when the cost per impression is lower and the decision window is open. National coverage means strategy varies by climate zone.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                { label: "Before Freeze Season (Freeze-Risk Markets — Fall)", body: "Run water heater and pipe vulnerability campaigns across programmatic and CTV in September through November in freeze-risk markets. Homeowners in Texas, the Mountain West, and the Midwest are thinking about their systems during this window — and a brand they have been seeing on display and streaming is far more likely to get the call than one they discover in a post-freeze search." },
                { label: "Spring Shoulder Season (Sunbelt and National)", body: "Deploy water heater replacement and membership campaigns in spring when urgency is low and homeowners have time to research and consider. Programmatic display in this window builds the brand recognition that converts into replacement calls when summer heat pushes aging water heaters past their limit." },
                { label: "Peak Competition Windows", body: "Run CTV and display retargeting during peak summer and winter demand when search CPCs spike and competition for clicks is highest. A consistent programmatic presence during these windows keeps your brand visible to homeowners who searched a competitor first but haven't booked yet." },
                { label: "Year-Round Retargeting", body: "Run AdRoll retargeting continuously regardless of season. Website visitors who expressed purchase intent do not follow a seasonal calendar. A continuous retargeting presence at a low daily budget captures that intent at a fraction of the cost of cold audience campaigns." }
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

      {/* SECTION 06 — PLATFORM STRATEGY: ADROLL + MOUNTAIN */}
      <section id="connected-tv" className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AdRoll and Mountain: How We Deploy Programmatic for Plumbing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              Programmatic advertising is only as good as the platforms running it. We use two — AdRoll for display and web retargeting, Mountain for Connected TV — because they cover different parts of the homeowner's digital life. Together, they create a presence that no single platform can replicate.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-xl p-8">
                <h3 className="font-bold text-gray-900 mb-3">AdRoll</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  AdRoll is the primary programmatic display and retargeting platform. It runs your ads across thousands of websites and apps through real-time bidding, and it integrates directly with your website visitor data to power retargeting campaigns across the web.
                </p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What AdRoll covers:</p>
                <ul className="space-y-2">
                  {[
                    "Display advertising across the web",
                    "Retargeting non-booked website visitors across thousands of sites",
                    "Audience segmentation by page visited, behavior, and purchase stage",
                    "Dynamic creative that adapts to the audience segment seeing the ad",
                    "Attribution tracking that connects display exposure to booked calls"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-8">
                <h3 className="font-bold text-gray-900 mb-3">Mountain (Connected TV)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Mountain is the Connected TV platform that places your plumbing ads on the streaming services homeowners watch daily — Hulu, Peacock, Tubi, and others. CTV advertising through Mountain reaches the audience that no digital channel reaches as effectively: the homeowner sitting in their living room, watching a show, and passively building brand familiarity.
                </p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What Mountain CTV covers:</p>
                <ul className="space-y-2">
                  {[
                    "Pre-roll and mid-roll video placements on major streaming platforms",
                    "Geographic targeting by service area down to the ZIP code level",
                    "Household-level targeting using demographic and home data",
                    "Frequency capping to manage how often the same household sees your ad",
                    "Attribution reporting tied to post-exposure website visits and conversions"
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
              Programmatic + ServiceTitan: Connecting Brand Exposure to Booked Revenue
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              The standard critique of programmatic advertising is that it produces impressions without accountability. That was true when reporting stopped at click-through rates. We connect programmatic performance — across both AdRoll display and Mountain CTV — to call tracking and CRM revenue data, so the reporting shows what the exposure actually produced in booked calls and closed jobs. Not reach. Not impressions. Revenue.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "View-Through Tracking", desc: "Post-exposure website visits and conversions" },
                { label: "Call Tracking", desc: "Phone calls following ad exposure traced" },
                { label: "Booking Rate", desc: "Booked vs non-booked tracked by source" },
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
              Programmatic Reinforces the Full Plumbing Growth System
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              Programmatic advertising is not a standalone channel — it is a reinforcement layer that makes every other channel in your growth system more effective. Search captures the homeowner who is already looking. SEO builds the authority that earns the organic click. Facebook and Instagram build demand in the research phase. Programmatic fills the gaps between all of them — keeping your brand visible on every screen, across every platform, throughout the full decision window.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { channel: "Search + LSA", desc: "Captures urgent intent. When a homeowner is ready to call, search ads are where the booking happens. Programmatic increases the likelihood they recognize your brand when they arrive at that search result." },
                { channel: "SEO + Social", desc: "Builds long-term authority and demand. SEO earns organic visibility. Facebook and Instagram build replacement demand before homeowners search. Programmatic extends that presence to every other screen they use." },
                { channel: "Programmatic", desc: "Closes the awareness gap between every other channel. AdRoll display and Mountain CTV keep your company visible across websites, apps, and streaming services — so no part of the homeowner's digital day goes uncovered." }
              ].map((col, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{col.channel}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{col.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 text-sm max-w-3xl mx-auto">
              When every channel runs together, the blended cost per booked call decreases and the booking rate improves — because homeowners arrive at your search result or form already knowing who you are.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlumbingProgrammaticMainContent;
