import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HVACInstagramMainContent = () => {
  return (
    <>
      {/* SECTION 03 — WHAT INSTAGRAM IS FOR */}
      <section id="how-instagram-works" className="py-20 lg:py-28 bg-surface-light scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Instagram Is a Visual Trust Engine. Not an Emergency Channel.
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4 max-w-3xl">
            Instagram is not where homeowners search for an HVAC emergency. It is where they spend time between those moments. Evaluating companies. Looking at real job photos. Watching short videos. Building familiarity with the brands they see consistently.
          </p>
          <p className="text-text-secondary leading-relaxed mb-12 max-w-3xl">
            That familiarity matters. When a homeowner finally decides to replace their system, they call the company they recognize. Instagram builds that recognition before the decision window opens.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Homeowner behavior on Instagram:</h3>
              <ul className="space-y-2">
                {["Evaluating company credibility through job photos", "Viewing before-and-after installations", "Watching short educational videos", "Comparing brands visually", "Building familiarity before large purchases"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">What Instagram builds:</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Instagram strengthens perceived authority before the install decision is made. A homeowner who has seen your work six times is not comparing you to competitors the same way they would a company they just discovered in a search result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — CAMPAIGN TYPES */}
      <section id="campaign-types" className="py-20 lg:py-28 bg-background scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            How We Use Instagram for HVAC Growth
          </h2>
          <p className="text-text-secondary mb-12 max-w-2xl">
            Three campaign structures built around how homeowners research and decide on HVAC replacements.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Installation Showcases",
                body: "Visual proof builds trust before homeowners make the call. We promote real job photography from your installs. Every photo is an opportunity to reinforce that your company does the kind of work homeowners want. Stock imagery does not do this. Real job photos do.",
                bullets: ["AC replacements and system upgrades", "Furnace installations", "Heat pump projects", "High-efficiency system completions"]
              },
              {
                title: "Short-Form Educational Content",
                body: "Education lowers hesitation. Short-form video and carousel content builds authority and moves homeowners through the decision process. A homeowner who understands why they need a replacement is more likely to book than one who is still uncertain.",
                bullets: ["Repair vs replace breakdowns", "Energy efficiency explainers", "Financing option walkthroughs", "Seasonal maintenance reminders"]
              },
              {
                title: "Retargeting & Engagement Campaigns",
                body: "Website visitors who did not convert are still in the decision process. Instagram retargeting increases conversion rates across Search and Facebook campaigns. When a homeowner sees your brand on multiple platforms, the decision threshold drops.",
                bullets: ["Website visitors who viewed install pages", "Homeowners who watched your videos", "Previous ad engagers", "People who visited your financing page"]
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
            HVAC Instagram Campaigns Follow the Climate Calendar
          </h2>
          <p className="text-text-secondary text-center mb-12">Instagram demand reinforcement works best when it is timed to when homeowners are thinking about their systems.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { season: "Before Summer", body: "Build cooling demand in April and May when homeowners start thinking about whether their system will hold up. Brand visibility during this window converts to replacement calls when the first heat wave hits." },
              { season: "Before Winter", body: "Promote furnace installations and heat pump campaigns in September and October. Homeowners who have been delaying a furnace decision act when winter prep enters their thinking." },
              { season: "Shoulder Season", body: "Push financing offers and maintenance content during spring and fall. Lower urgency periods are when brand reinforcement does its best work. Homeowners have time to research and decide." },
              { season: "Peak Competition", body: "Reinforce brand visibility when every HVAC company is running ads. Consistent Instagram presence keeps your brand familiar to homeowners who may have searched a competitor first." }
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
            Creative and Audience Strategy for HVAC Instagram Campaigns
          </h2>
          <p className="text-text-secondary mb-4 max-w-3xl">
            Instagram performance depends on creative that looks like it belongs on the platform and audiences that match your actual customer base. Generic contractor imagery and broad targeting produce low engagement and no bookings.
          </p>
          <p className="text-text-secondary mb-12 max-w-3xl">
            HVAC Instagram advertising works when the creative reflects real work and the audience reflects real customers. That combination is what separates campaigns that drive install inquiries from campaigns that produce likes.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Creative</h3>
              <ul className="space-y-3">
                {["Real installation photography from your technicians", "Before-and-after system replacements", "Short-form video: educational and project-based", "Financing-first messaging with clear visuals", "Consistent branding across every creative format"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-text-secondary leading-relaxed mt-4">
                Creative must reflect professionalism. A homeowner judging your company by their feed will compare your photos to every other professional brand they follow.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Audience</h3>
              <ul className="space-y-3">
                {["Geo-targeted homeowners within your service radius", "Lookalike audiences built from past customer data", "Retargeting pools from website and ad engagement", "Customer list uploads for maintenance renewal campaigns", "Seasonal audience adjustments tied to climate and demand patterns"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-text-secondary leading-relaxed mt-4">
                Lookalike audiences built from your existing install and maintenance customers produce stronger results for seasonal campaigns than broad interest targeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — SERVICETITAN */}
      <section id="tracking" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <a href="https://business.instagram.com/advertising" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Instagram advertising</a> + ServiceTitan: Campaigns Tied to Revenue
          </h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Instagram advertising should produce more than engagement metrics. We connect campaign performance to your revenue reporting so you can see what the spend is contributing to your dispatch board.
          </p>
          <p className="text-text-secondary mb-10 max-w-3xl mx-auto text-sm">
            HVAC Instagram advertising drives three types of outcomes: booked calls from homeowners who clicked through after seeing an install showcase, demand generation for replacement decisions with longer cycles, and maintenance membership renewals promoted to existing customers and lookalike audiences.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {[
              { label: "Conversion Tracking", sub: "Form and page actions" },
              { label: "Call Tracking", sub: "Where applicable to installs" },
              { label: "Booking Rate", sub: "Booked vs non-booked" },
              { label: "Revenue by Campaign", sub: "Closed job attribution" }
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
            Instagram Reinforces the Full HVAC Growth System
          </h2>
          <p className="text-text-secondary mb-10 max-w-3xl">
            Search and SEO handle urgency and authority. Instagram handles recognition. A homeowner who has seen your installations, watched your videos, and been retargeted across multiple sessions does not evaluate you the same way they evaluate a company they just found in a Google result.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { channel: "Search Ads", body: "Captures urgent demand. Homeowners actively searching for emergency repair or same-day service right now.", link: "/hvac-search-ads" },
              { channel: "SEO", body: "Builds long-term organic authority. Compounds over time and reduces cost per booked call.", link: "/hvac-seo" },
              { channel: "Instagram", body: "Builds brand familiarity. Reinforces trust visually. Retargets non-converters. Keeps your company recognized before the decision is made.", link: null }
            ].map((c, i) => (
              <div key={i} className="bg-surface-elevated border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">{c.channel}</h3>
                <p className="text-sm text-text-secondary">{c.body}</p>
                {c.link && <Link to={c.link} className="text-xs text-accent-blue hover:underline mt-2 inline-block">Learn more →</Link>}
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted">
            The strongest HVAC companies are recognized before they are needed. Instagram builds that recognition.
          </p>
        </div>
      </section>
    </>
  );
};

export default HVACInstagramMainContent;
