import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Target, 
  Mail, 
  Search,
  ArrowRight,
  BarChart3,
  Users,
  Zap,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";

const calculators = [
  {
    title: "SEO Cost Calculator",
    description: "Estimate monthly SEO investment based on market competition, service area, and campaign aggressiveness. Help clients understand what realistic SEO budgets look like.",
    href: "/partner-tools/seo-calculator",
    icon: Search,
    color: "from-emerald-500/20 to-emerald-600/10",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-500",
    features: [
      "Industry-specific pricing",
      "Competition analysis",
      "Location multipliers",
      "Timeline estimates"
    ]
  },
  {
    title: "Inbound Marketing ROI Calculator",
    description: "Demonstrate the revenue impact of inbound marketing. Show clients how improved traffic, conversion rates, and close rates translate to real business growth.",
    href: "/partner-tools/roi-calculator",
    icon: TrendingUp,
    color: "from-accent-blue/20 to-accent-blue/10",
    borderColor: "border-accent-blue/30",
    iconColor: "text-accent-blue",
    features: [
      "Industry benchmarks",
      "Revenue projections",
      "Customer lifetime value",
      "ROI visualization"
    ]
  },
  {
    title: "Social Media ROI Calculator",
    description: "Calculate social media campaign ROI based on visits, conversion rates, close rates, and lifetime value. Measure ad spend, content, and labor costs.",
    href: "/partner-tools/social-media-roi-calculator",
    icon: Users,
    color: "from-pink-500/20 to-pink-600/10",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-500",
    features: [
      "Campaign performance tracking",
      "Cost breakdown (ads, content, labor)",
      "Leads & sales projections",
      "Shareable calculation links"
    ]
  },
  {
    title: "Investment Calculator",
    description: "Scope comprehensive monthly service costs across Local SEO, GBP, Paid Media, and more. Build accurate proposals with market-adjusted pricing.",
    href: "/partner-tools/investment-calculator",
    icon: DollarSign,
    color: "from-accent-blue/20 to-accent-blue/10",
    borderColor: "border-accent-blue/30",
    iconColor: "text-accent-blue",
    features: [
      "Multi-service scoping",
      "Metro market data",
      "Complexity adjustments",
      "Tiered recommendations"
    ]
  },
  {
    title: "Ad Budget Calculator",
    description: "Project advertising campaign outcomes based on budget, impressions, CTR, and conversion rates. Help clients visualize the full marketing funnel.",
    href: "/partner-tools/ad-budget-calculator",
    icon: Target,
    color: "from-orange-500/20 to-orange-600/10",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-500",
    features: [
      "Funnel visualization",
      "ROI projections",
      "Profit margin calc",
      "Platform benchmarks"
    ]
  },
  {
    title: "Email Marketing Calculator",
    description: "Calculate email marketing ROI based on list size, engagement rates, and customer lifetime value. Demonstrate the long-term value of email programs.",
    href: "/partner-tools/email-calculator",
    icon: Mail,
    color: "from-purple-500/20 to-purple-600/10",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-500",
    features: [
      "List performance modeling",
      "Lifetime value multiplier",
      "Revenue per email",
      "Industry benchmarks"
    ]
  },
  {
    title: "Content Marketing Calculator",
    description: "Calculate content marketing ROI based on production costs, traffic projections, and conversion rates. Show the compounding value of content assets.",
    href: "/partner-tools/content-marketing-calculator",
    icon: FileText,
    color: "from-teal-500/20 to-teal-600/10",
    borderColor: "border-teal-500/30",
    iconColor: "text-teal-500",
    features: [
      "Content production costs",
      "Traffic compounding",
      "Lead generation funnel",
      "12-month projections"
    ]
  },
  {
    title: "AI Ready Check",
    description: "Scan any webpage to analyze its AI/LLM compatibility. Get high-signal metrics for content density, structure, and metadata quality.",
    href: "/partner-tools/ai-ready-check",
    icon: Search,
    color: "from-cyan-500/20 to-cyan-600/10",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-500",
    features: [
      "Single-page analysis",
      "LLM compatibility score",
      "Content structure check",
      "JSON output preview"
    ]
  }
];

const PartnerTools = () => {
  return (
    <>
      <Helmet>
        <title>Marketing Tools for Agencies | Forecast ROI, SEO Results, Budgets & More | Demand Stream Digital</title>
        <meta name="description" content="Use Demand Stream Digital's calculators and tools to support SEO, PPC, and content strategy planning for your agency." />
        <meta name="keywords" content="marketing agency tools, SEO calculators, PPC budget tools, agency proposal resources, white label marketing calculators" />
        <link rel="canonical" href="https://dialedinweb.com/partner-tools" />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href="https://dialedinweb.com/partner-tools" />
        <link rel="alternate" hrefLang="en-CA" href="https://dialedinweb.com/partner-tools" />
        <link rel="alternate" hrefLang="x-default" href="https://dialedinweb.com/partner-tools" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Marketing Tools for Agencies | Forecast ROI, SEO Results, Budgets & More | Demand Stream Digital" />
        <meta property="og:description" content="Use Demand Stream Digital's calculators and tools to support SEO, PPC, and content strategy planning for your agency." />
        <meta property="og:url" content="https://dialedinweb.com/partner-tools" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dialed-In Web" />
        <meta property="og:image" content="https://dialedinweb.com/og-images/partner-tools.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="White Label Marketing Tools for Agencies | Forecast ROI, SEO Results, Budgets & More | Dialed-in Web" />
        <meta name="twitter:description" content="Use Dialed-in Web's calculators and tools to support white label SEO, PPC, and content strategy planning for your agency." />
        <meta name="twitter:image" content="https://dialedinweb.com/og-images/partner-tools.png" />
      </Helmet>
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-surface-dark via-surface-elevated to-surface-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cta/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta/10 text-cta text-sm font-medium mb-6">
                <Calculator className="h-4 w-4" />
                Agency Partner Resources
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Partner Tools
              </h1>
              <p className="text-text-secondary text-lg md:text-xl font-body max-w-2xl mx-auto">
                Free calculators and resources to help you scope projects, build proposals, and demonstrate ROI to clients.
              </p>
            </div>
            
            {/* Quick Access Grid */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {calculators.map((calc) => (
                  <Link
                    key={calc.href}
                    to={calc.href}
                    className={cn(
                      "group flex flex-col items-center gap-2 p-4 md:p-5 rounded-xl border transition-all duration-200",
                      "bg-surface-elevated/50 hover:bg-surface-elevated",
                      "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20",
                      calc.borderColor
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center",
                      "bg-surface-dark/80 group-hover:scale-110 transition-transform"
                    )}>
                      <calc.icon className={cn("h-5 w-5 md:h-6 md:w-6", calc.iconColor)} />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground text-center leading-tight group-hover:text-accent-blue transition-colors">
                      {calc.title.replace(' Calculator', '').replace('Inbound Marketing ', '')}
                    </span>
                  </Link>
                ))}
              </div>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-10 pt-8 border-t border-border/20">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-foreground">8</p>
                  <p className="text-xs text-text-muted">Tools</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-foreground">100%</p>
                  <p className="text-xs text-text-muted">Free</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-foreground">No</p>
                  <p className="text-xs text-text-muted">Login</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soft Divider */}
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>

        {/* Calculator Cards Grid */}
        <section className="py-16 lg:py-24 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Choose Your Calculator
                </h2>
                <p className="text-text-muted max-w-xl mx-auto">
                  Each tool is designed to help you have better conversations with clients and build more accurate proposals.
                </p>
              </div>

              {/* Calculator Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {calculators.map((calc, index) => (
                  <Link 
                    key={calc.href}
                    to={calc.href}
                    className={cn(
                      "group relative bg-surface-elevated rounded-2xl p-6 border transition-all duration-300",
                      "hover:border-accent-blue/50 hover:shadow-xl hover:shadow-accent-blue/5 hover:-translate-y-1",
                      calc.borderColor
                    )}
                  >
                    {/* Gradient Background */}
                    <div className={cn(
                      "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50 transition-opacity group-hover:opacity-100",
                      calc.color
                    )} />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                        "bg-surface-dark/80"
                      )}>
                        <calc.icon className={cn("h-6 w-6", calc.iconColor)} />
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent-blue transition-colors">
                        {calc.title}
                      </h3>
                      <p className="text-sm text-text-muted mb-4 line-clamp-3">
                        {calc.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-1.5 mb-5">
                        {calc.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-text-muted">
                            <div className={cn("w-1 h-1 rounded-full", calc.iconColor.replace('text-', 'bg-'))} />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-sm font-medium text-accent-blue group-hover:gap-3 transition-all">
                        Open Calculator
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Soft Divider */}
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>

        {/* How to Use Section */}
        <section className="py-16 lg:py-24 bg-surface-elevated">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  How Agencies Use These Tools
                </h2>
                <p className="text-text-muted max-w-xl mx-auto">
                  These calculators are designed to support your sales process and client relationships.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
                  <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center mb-4">
                    <Users className="h-5 w-5 text-cta" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Discovery Calls</h3>
                  <p className="text-sm text-text-muted">
                    Use calculators during discovery to demonstrate potential ROI and set realistic expectations. Share your screen and walk through projections together.
                  </p>
                </div>

                <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-4">
                    <BarChart3 className="h-5 w-5 text-accent-blue" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Proposal Building</h3>
                  <p className="text-sm text-text-muted">
                    Generate investment estimates based on real market data. Include calculator screenshots in proposals to justify pricing recommendations.
                  </p>
                </div>

                <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                    <Zap className="h-5 w-5 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Client Education</h3>
                  <p className="text-sm text-text-muted">
                    Help clients understand the mechanics of marketing ROI. Adjust inputs to show how improvements in one area compound across the funnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soft Divider */}
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-br from-cta/10 to-accent-blue/10 rounded-2xl p-8 md:p-12 border border-cta/30">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Need More Than Calculators?
                </h2>
                <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                  These tools are just the start. If you're looking for reliable white-label fulfillment to back up your proposals, we should talk.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    to="/#services"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cta hover:bg-cta/90 text-cta-foreground rounded-lg font-semibold transition-colors"
                  >
                    Explore Our Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border/50 text-foreground hover:border-accent-blue/50 rounded-lg font-medium transition-colors"
                  >
                    Start the Conversation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusivity */}
        <MarketExclusivity />

        {/* Contact Form Section */}
        <ContactForm />
      </main>
      
      <Footer />
    </>
  );
};

export default PartnerTools;
