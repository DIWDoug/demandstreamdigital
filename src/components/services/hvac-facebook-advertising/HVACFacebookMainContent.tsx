import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HVACFacebookMainContent = () => {
  return (
    <>
      {/* SECTION 03 — WHAT FACEBOOK IS FOR */}
      <section id="how-facebook-works" className="py-20 lg:py-28 bg-surface-light scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Facebook Is Not Emergency Capture. It Is Replacement Demand.
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4 max-w-3xl">
            Facebook is not where homeowners search for a burst pipe repair at midnight. It is where they spend time between emergencies: researching whether to repair or replace, comparing companies, reading reviews, and delaying decisions on aging equipment.
          </p>
          <p className="text-text-secondary leading-relaxed mb-12 max-w-3xl">
            That delay is your window. Facebook advertising keeps your company in their feed while they make up their mind.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Where homeowners are:</h3>
              <ul className="space-y-2">
                {["Researching replacement options", "Considering financing terms", "Comparing HVAC brands", "Watching educational content", "Delaying decisions on aging systems"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">What Facebook builds:</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                HVAC Facebook advertising reaches homeowners in the research phase, before they search, before they call a competitor, and before they commit to doing nothing. It builds install demand rather than waiting for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — CAMPAIGN TYPES */}
      <section id="campaign-types" className="py-20 lg:py-28 bg-background scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            How We Use Facebook for HVAC Growth
          </h2>
          <p className="text-text-secondary mb-12 max-w-2xl">
            Three campaign structures built around how HVAC replacement decisions actually happen.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Install & Replacement Campaigns",
                body: "We structure campaigns around the specific replacement decisions your customers are weighing. AC replacement and upgrade promotions, furnace installation campaigns, heat pump transition messaging, and high-efficiency system offers with financing. Messaging focuses on financing options, energy savings, warranty coverage, and time-limited promotions.",
                bullets: ["AC replacement and upgrade promotions", "Furnace installation campaigns", "Heat pump transition messaging", "High-efficiency system offers with financing"]
              },
              {
                title: "Retargeting Non-Booked Visitors",
                body: "Most website visitors leave without booking. Retargeting brings them back. A homeowner who visited your heat pump page last week and then sees a financing offer in their feed is far closer to booking than a cold impression.",
                bullets: ["Install page visitors", "Financing page visitors", "Maintenance plan page visitors", "Abandoned form users"]
              },
              {
                title: "Maintenance Plan Growth",
                body: "Facebook supports recurring revenue by promoting your maintenance offering to past customers and look-alike audiences. Maintenance plan growth stabilizes revenue in shoulder seasons when emergency volume drops and install pipelines are still building.",
                bullets: ["Annual maintenance agreements", "Seasonal tune-up promotions", "Membership program offers"]
              }
            ].map((card, i) => (
              <div key={i} className="bg-surface-elevated border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">{card.title}</h3>
                <ul className="space-y-1 mb-4">
                  {card.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-text-secondary leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — SEASONAL STRATEGY */}
      <section id="seasonal-strategy" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
            HVAC Facebook Campaigns Follow the Climate Calendar
          </h2>
          <p className="text-text-secondary text-center mb-12">Demand shifts with the weather. Facebook campaigns should shift with it.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { season: "Before Summer", body: "Build cooling demand in April and May before the first no-cool calls spike. Replacement campaigns run during this window convert at higher rates because homeowners are thinking ahead rather than reacting in the heat." },
              { season: "Before Winter", body: "Push furnace installation and heat pump campaigns in September and October. Homeowners who have been putting off a furnace replacement act when they start thinking about the first cold snap." },
              { season: "Shoulder Season", body: "Promote financing offers and maintenance plans during spring and fall when urgency is lower and homeowners have more time to research. This is when brand reinforcement compounds." },
              { season: "Peak Competition", body: "Reinforce brand visibility during summer when every HVAC company is running ads. Consistent Facebook presence keeps your name in front of homeowners who may have searched a competitor first." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-border/40 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">{item.season}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
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
      </section>

      {/* SECTION 06 — CREATIVE & AUDIENCE */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Creative and Audience Strategy for HVAC Facebook Campaigns
          </h2>
          <p className="text-text-secondary mb-12 max-w-3xl">
            Facebook performance depends on two things working together: showing the right creative to the right audience. Generic contractor ads running to broad audiences produce impressions, not booked calls.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Creative</h3>
              <ul className="space-y-3">
                {["Real job photography, not stock images", "Before-and-after system installations", "Short educational videos: repair vs replace, financing breakdowns", "Financing-focused messaging with clear terms", "Geo-relevant language tied to your service area"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-text-secondary leading-relaxed mt-4">
                Visual content quality directly affects conversion rate on install campaigns. Homeowners comparing HVAC companies in their feed make judgments about brand authority within seconds. Real job photography builds that authority in a way that generic graphics cannot.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Audience</h3>
              <ul className="space-y-3">
                {["Homeowners within your service radius", "Lookalike audiences built from past customer lists", "Retargeting pools from website and page visits", "Customer list uploads for maintenance renewal campaigns", "Seasonal audience adjustments tied to demand patterns"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-text-secondary leading-relaxed mt-4">
                Lookalike audiences built from your existing customer data consistently outperform cold interest-based targeting for HVAC replacement and install campaigns. They reach people who match the profile of your best customers before those customers know they need you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — SERVICETITAN */}
      <section id="tracking" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <a href="https://www.facebook.com/business/ads" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Facebook Ads</a> + ServiceTitan: Revenue Tracking That Goes Beyond Clicks
          </h2>
          <p className="text-text-secondary mb-10 max-w-2xl mx-auto">
            Impressions and clicks do not show up on your dispatch board. We connect Facebook performance directly to your revenue reporting so you can see what the spend is actually producing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {[
              { label: "Conversion Tracking", sub: "Form and landing page" },
              { label: "Call Tracking", sub: "Phone calls from ads" },
              { label: "Booking Rate", sub: "Booked vs non-booked" },
              { label: "Revenue Attribution", sub: "Closed job revenue" }
            ].map((m, i) => (
              <div key={i} className="bg-white/5 border border-border/40 rounded-lg p-4">
                <p className="font-semibold text-foreground text-sm">{m.label}</p>
                <p className="text-xs text-text-muted mt-1">{m.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted mb-8">Other CRMs supported. ServiceTitan is the primary integration.</p>
          <Link to="/contact" className="btn-cta inline-flex items-center gap-2">
            Claim Your Territory Today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 08 — CHANNEL ECOSYSTEM */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Facebook Reinforces the Full Growth System
          </h2>
          <p className="text-text-secondary mb-10 max-w-3xl">
            Facebook does not replace search or SEO. It fills the gap those channels leave. Search captures homeowners who are already looking. SEO builds the credibility that makes them choose you. Facebook reaches the homeowners who are not searching yet but will be.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { channel: "Search Ads", body: "Captures urgent demand. Homeowners actively searching for emergency repair or same-day service.", link: "/hvac-search-ads" },
              { channel: "SEO", body: "Builds long-term organic authority. Compounds over time and reduces cost per booked call.", link: "/hvac-seo" },
              { channel: "Facebook", body: "Builds replacement demand before homeowners search. Retargets non-converters. Supports maintenance growth.", link: null }
            ].map((c, i) => (
              <div key={i} className="bg-surface-elevated border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">{c.channel}</h3>
                <p className="text-sm text-text-secondary">{c.body}</p>
                {c.link && <Link to={c.link} className="text-xs text-accent-blue hover:underline mt-2 inline-block">Learn more →</Link>}
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted">
            The strongest HVAC growth systems use all three. Blended cost per booked call decreases when every channel reinforces the others.
          </p>
        </div>
      </section>
    </>
  );
};

export default HVACFacebookMainContent;
