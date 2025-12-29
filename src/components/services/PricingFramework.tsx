import { MapPin, MousePointerClick, Mail, Award, Layers, ArrowRight, Phone } from "lucide-react";

const PricingFramework = () => {
  const services = [
    {
      icon: MapPin,
      title: "Local SEO",
      range: "$1,200 – $2,500",
      unit: "/month",
      includes: ["On-page optimization", "Technical SEO", "Local content", "Link acquisition"],
      note: "Per location. Multi-location discounts available."
    },
    {
      icon: MapPin,
      title: "Google Maps / GBP",
      range: "$400 – $800",
      unit: "/month",
      includes: ["Profile optimization", "Review management", "Citations", "Posting schedule"],
      note: "Per location. Often bundled with Local SEO."
    },
    {
      icon: MousePointerClick,
      title: "Google Ads",
      range: "$800 – $1,500",
      unit: "/month",
      includes: ["Campaign management", "Landing pages", "Call tracking", "Monthly reporting"],
      note: "Plus ad spend. Management fee scales with spend."
    },
    {
      icon: MousePointerClick,
      title: "Meta Ads",
      range: "$800 – $1,500",
      unit: "/month",
      includes: ["Audience targeting", "Creative strategy", "Retargeting", "Lead forms"],
      note: "Plus ad spend. Creative production additional."
    },
    {
      icon: Mail,
      title: "Email Marketing",
      range: "$600 – $1,200",
      unit: "/month",
      includes: ["Campaign design", "Automation flows", "List management", "Analytics"],
      note: "Platform fees separate. Klaviyo, Mailchimp, etc."
    },
    {
      icon: Award,
      title: "Authority Building",
      range: "$800 – $2,000",
      unit: "/month",
      includes: ["Digital PR", "Directory listings", "Thought leadership", "Reputation mgmt"],
      note: "Scope varies by industry and competition."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
              Investment Framework
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transparent Pricing Ranges
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Exact pricing depends on scope, competition, and location count. These ranges give you a realistic framework for planning margins with your clients.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-surface-elevated border border-border/50 rounded-xl p-6 hover:border-accent-blue/30 transition-colors"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                    <service.icon className="h-5 w-5 text-accent-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-foreground">{service.range}</span>
                  <span className="text-text-muted text-sm">{service.unit}</span>
                </div>

                {/* Includes */}
                <ul className="space-y-2 mb-4">
                  {service.includes.map((item, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent-blue shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <p className="text-text-muted text-xs italic border-t border-border/30 pt-4">
                  {service.note}
                </p>
              </div>
            ))}
          </div>

          {/* Full System Callout */}
          <div className="mt-10 bg-gradient-to-r from-accent-blue/10 to-cta/10 rounded-2xl p-8 border border-border/30">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-cta/20 flex items-center justify-center shrink-0">
                  <Layers className="h-7 w-7 text-cta" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">Full Inbound System</h3>
                  <p className="text-text-secondary">
                    Multi-channel execution as a coordinated system. <span className="text-foreground font-medium">$2,500 – $5,000/month</span> typical.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="#contact" 
                  className="btn-cta group flex items-center gap-2"
                >
                  Get a Custom Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="tel:2143072995"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text-secondary hover:text-foreground hover:border-border-subtle transition-colors font-medium text-sm"
                >
                  <Phone className="h-4 w-4" />
                  (214) 307-2995
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFramework;
