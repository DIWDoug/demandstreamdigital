import { Link } from "react-router-dom";
import { ArrowRight, Phone, X } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const problems = [
  {
    title: "Generic service pages that blend repair and install intent",
    subtitle: "Looks good. Doesn't rank.",
  },
  {
    title: "No alignment to Google's service taxonomy. The site doesn't reinforce your GBP, limiting Maps visibility.",
    subtitle: "Ranks a little. Doesn't convert.",
  },
  {
    title: "No internal structure to scale. Adding a city page or new service breaks everything.",
    subtitle: "Converts some. Can't scale.",
  },
  {
    title: "No clear conversion path. The visitor doesn't know whether to call, fill out a form, or book online.",
    subtitle: "A website built for plumbing and HVAC needs to solve all three.",
  },
];

const WebDesignProblem = () => {
  return (
    <section id="why-it-matters" className="py-24 lg:py-32 bg-background scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 max-w-6xl mx-auto items-start">

          {/* LEFT — sticky */}
          <div className="lg:sticky lg:top-32 self-start">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-4">
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Why Most 'Pretty' Contractor Websites Don't Perform
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              A new contractor website goes live. It looks clean. The owner is happy. Three months later, the phone hasn't moved.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              This happens constantly. The reason is always the same: the site was built to look good, not to rank or convert.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              Design is not the problem. Structure is the problem. Plumbing and HVAC websites need intent-specific pages, GBP alignment, and a conversion path built in from the start.
            </p>

            <blockquote className="border-l-4 border-cta pl-5 mb-8">
              <p className="text-text-secondary text-sm leading-relaxed italic">
                "A website built for plumbing and HVAC needs separate intent pages, GBP alignment, and a clear call path. Not a brochure designed to win a design award."
              </p>
            </blockquote>

            <p className="text-text-secondary text-sm leading-relaxed mb-8">
              The four patterns on the right are the same patterns we see on every underperforming contractor site. If your current website has any of them, the structure is costing you calls.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta hover:bg-cta/90 text-white font-medium rounded-lg transition-colors text-sm whitespace-nowrap"
              >
                Claim Your Territory Today
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4 text-accent-blue" />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>

          {/* RIGHT — problem rows */}
          <div className="space-y-0">
            {problems.map((item, i) => (
              <div key={i} className={i < problems.length - 1 ? "pb-6 mb-6 border-b border-border/40" : ""}>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-cta/10 border border-cta/20 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-cta" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-[15px] leading-snug mb-1.5">
                      {item.title}
                    </p>
                    <p className="text-accent-blue text-sm font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebDesignProblem;
