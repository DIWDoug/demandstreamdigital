import { Target, GitFork, BarChart2, Map, Gauge, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const failureRows = [
  {
    icon: Target,
    title: "Emergency and Replacement Keywords Mixed Together",
    body: "A homeowner searching 'burst pipe repair' converts differently than one searching 'whole-home repipe cost.' One campaign cannot serve both without losing margin on both.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: GitFork,
    title: "No Service-Specific Segmentation",
    body: "Drain cleaning, water heater replacement, and sewer repair each have distinct intent, margin, and conversion behavior. Generic campaigns flatten all three into the same budget.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: BarChart2,
    title: "Optimized for Leads, Not Booked Calls",
    body: "A form fill or inbound call that never converts to a scheduled job is a cost. Most campaigns stop measuring at the lead. We measure to the booked call.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: Map,
    title: "No Geographic Priority Mapping",
    body: "Not every ZIP in your service area produces equal-margin work. High-value corridors need heavier bid weight. Generic radius targeting ignores that reality.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Gauge,
    title: "No Capacity-Based Throttle",
    body: "Scaling spend when the board is full generates calls the operation cannot run. Every overbooked week costs both money and reputation with customers who cannot be served.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: Calendar,
    title: "No Integration With Booking Rate Data",
    body: "A campaign that cannot see your booking rate is measuring clicks, not revenue. Booking rate is the only signal that tells you whether spend is producing work.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
];

const PlumbingSearchAdsPPCFails = () => {
  return (
    <section id="why-ppc-fails" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Problem</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                Why Most Plumbing Search Campaigns Waste Budget
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-4">
                Generic PPC agencies run the same campaign structure for plumbers, roofers, and landscapers. They call it a contractor template. The keyword lists are broad. The ad copy is generic. The budgets do not adjust for whether your board is full or empty.
              </p>
              <p className="text-base text-text-secondary leading-relaxed mb-6">
                Plumbing search is not generic. A homeowner searching for an emergency burst pipe repair has different intent, different urgency, and different margin than one researching a whole-home repipe. Running both through the same campaign means neither converts the way it should.
              </p>
              <div className="bg-surface-elevated border border-border/50 rounded-xl px-5 py-4 mb-6">
                <p className="text-text-secondary text-sm leading-relaxed">
                  Plumbing search ads require structured architecture built around how plumbing demand actually works. Not a contractor template applied without modification.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta hover:bg-cta/90 text-white font-medium rounded-lg transition-colors text-sm"
                >
                  Claim Your Territory Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text-secondary hover:bg-cta hover:border-cta hover:text-white font-medium transition-all text-sm"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            <div>
              {failureRows.map((row, i) => {
                const Icon = row.icon;
                return (
                  <div key={i}>
                    <div className="flex items-start gap-4 py-6">
                      <div className={`w-9 h-9 rounded-lg ${row.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Icon className={`h-4 w-4 ${row.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-[15px] mb-1.5">{row.title}</p>
                        <p className="text-text-secondary text-sm leading-relaxed">{row.body}</p>
                      </div>
                    </div>
                    {i < failureRows.length - 1 && <hr className="border-t border-border/40" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumbingSearchAdsPPCFails;
