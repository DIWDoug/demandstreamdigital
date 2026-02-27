import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const goodFit = [
  "You're launching a new plumbing or HVAC company and need a foundation",
  "Your current site is slow, template-based, or producing no organic calls",
  "You're running paid ads to a site that doesn't convert",
  "You operate in multiple cities and need proper location page architecture",
  "You want a site that integrates with your CRM and call tracking from day one",
];

const notFit = [
  "You want a site built in 48 hours",
  "You need the cheapest option available",
  "You're not willing to invest in proper photography or brand assets",
  "You plan to manage and edit the site yourself with a page builder",
];

const WebDesignFit = () => {
  return (
    <section id="fit" className="py-20 lg:py-28 bg-background scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Selective Fit</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
            Is a Custom Build Right for Your Business?
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Good fit */}
            <div className="bg-card border border-border/60 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-cta/20 flex items-center justify-center">
                  <span className="text-cta text-sm font-bold">✓</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">This Could Work Well</h3>
              </div>
              <ul className="space-y-3">
                {goodFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                    <span className="text-cta mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not fit */}
            <div className="bg-card border border-border/60 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                  <span className="text-destructive text-sm font-bold">✕</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">Probably Not a Fit</h3>
              </div>
              <ul className="space-y-3">
                {notFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                    <span className="text-destructive mt-0.5 shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact" className="btn-cta group inline-flex items-center gap-2">
              See If Your Market Is Open
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignFit;
