import { MapPin, Phone, Linkedin, Facebook } from "lucide-react";
import SubtleOrbs from "@/components/SubtleOrbs";

const Footer = () => {
  const serviceCategories = [
    {
      title: "LOCAL SEO",
      items: ["On-Page Optimization", "Technical SEO Audits", "Local Keyword Strategy", "Content Development", "Link Building", "Schema Markup"]
    },
    {
      title: "GOOGLE MAPS",
      items: ["GBP Optimization", "Review Management", "Citation Building", "Photo Optimization", "Q&A Management", "Post Scheduling"]
    },
    {
      title: "PAID MEDIA",
      items: ["Google Ads", "Meta Ads", "Local Service Ads", "Retargeting Campaigns", "Landing Page Design", "Conversion Tracking"]
    },
    {
      title: "EMAIL MARKETING",
      items: ["Campaign Strategy", "List Management", "Automation Flows", "Newsletter Design", "A/B Testing", "Performance Analytics"]
    },
    {
      title: "AUTHORITY",
      items: ["PR Placements", "Local Citations", "Industry Directories", "Brand Mentions", "Reputation Signals", "Trust Building"]
    },
    {
      title: "REPORTING",
      items: ["White-Label Dashboards", "Monthly Reports", "Rank Tracking", "Call Tracking", "ROI Analysis", "Client Presentations"]
    }
  ];

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden" role="contentinfo">
      <SubtleOrbs variant="bottom-left" />
      
      {/* Quick Links Bar - Above Service Categories */}
      <div className="py-6 border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <a href="#about" className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors uppercase tracking-wide">
              About Us
            </a>
            <a href="#services" className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors uppercase tracking-wide">
              Services
            </a>
            <a href="#testimonials" className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors uppercase tracking-wide">
              Results
            </a>
            <a href="#contact" className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors uppercase tracking-wide">
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Service Categories Grid */}
      <div className="py-12 border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {serviceCategories.map((category, index) => (
              <div key={index}>
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <span className="text-xs text-text-secondary hover:text-foreground transition-colors cursor-default">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Dialed-In Web
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                White-label local marketing fulfillment for agencies that value execution and long-term partnerships.
              </p>
              <p className="text-xs text-text-muted">
                Serving agencies across the US & Canada since 2019.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <MapPin className="h-4 w-4 shrink-0" />
                  Dallas, TX 75226
                </li>
                <li>
                  <a 
                    href="tel:2143072995"
                    className="flex items-center gap-3 text-sm text-text-secondary hover:text-foreground transition-colors"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    (214) 307-2995
                  </a>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-6">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-surface-elevated hover:bg-cta/20 text-text-secondary hover:text-cta transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-surface-elevated hover:bg-cta/20 text-text-secondary hover:text-cta transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-surface-elevated hover:bg-cta/20 text-text-secondary hover:text-cta transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-text-muted">
                © {new Date().getFullYear()} Dialed-In Web. All Rights Reserved.
              </p>
              <a 
                href="#"
                className="text-xs text-text-muted hover:text-text-secondary transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
