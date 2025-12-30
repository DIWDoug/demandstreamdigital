import { Link } from "react-router-dom";
import { MapPin, Phone, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import SubtleOrbs from "@/components/SubtleOrbs";
import logo from "@/assets/dialedinweb-logo.png";

const Footer = () => {
  const serviceCategories = [
    {
      title: "LOCAL SEO",
      hubSlug: "local-seo",
      items: [
        { label: "On-Page Optimization", slug: "on-page-local-optimization" },
        { label: "Technical SEO", slug: "technical-seo-multi-location" },
        { label: "Local Keyword Strategy", slug: "keyword-research-mapping" },
        { label: "Content Development", slug: "local-content-strategy" },
        { label: "Link Building", slug: "local-link-acquisition" },
        { label: "Competitor Analysis", slug: "competitor-market-analysis" }
      ]
    },
    {
      title: "GBP SEO",
      hubSlug: "google-maps",
      items: [
        { label: "GBP Optimization", slug: "gbp-management" },
        { label: "Review Management", slug: "review-generation" },
        { label: "Citation Building", slug: "citation-building" },
        { label: "Local Pack Strategy", slug: "local-pack-ranking" },
        { label: "Photo Optimization", slug: "photo-media-optimization" },
        { label: "Multi-Location GBP", slug: "multi-location-gbp" }
      ]
    },
    {
      title: "PAID MEDIA",
      hubSlug: "paid-media",
      items: [
        { label: "Google Ads", slug: "google-ads-management" },
        { label: "Meta Ads", slug: "meta-ads-management" },
        { label: "Local Service Ads", slug: "local-service-ads" },
        { label: "Retargeting", slug: "retargeting-campaigns" },
        { label: "Landing Pages", slug: "landing-page-optimization" },
        { label: "Conversion Tracking", slug: "conversion-tracking" }
      ]
    },
    {
      title: "EMAIL MARKETING",
      hubSlug: "email-marketing",
      items: [
        { label: "Campaign Strategy", slug: "campaign-strategy" },
        { label: "List Management", slug: "list-management" },
        { label: "Automation Flows", slug: "automation-flows" },
        { label: "Newsletter Design", slug: "newsletter-design" },
        { label: "A/B Testing", slug: "ab-testing" },
        { label: "Performance Analytics", slug: "performance-analytics" }
      ]
    },
    {
      title: "AUTHORITY",
      hubSlug: "authority",
      items: [
        { label: "PR Placements", slug: "pr-placements" },
        { label: "Digital PR", slug: "digital-pr" },
        { label: "Industry Directories", slug: "industry-directories" },
        { label: "Brand Mentions", slug: "brand-mentions" },
        { label: "Reputation Signals", slug: "reputation-signals" },
        { label: "Trust Building", slug: "trust-building" }
      ]
    },
    {
      title: "REPORTING",
      hubSlug: "reporting",
      items: [
        { label: "White-Label Dashboards", slug: "white-label-dashboards" },
        { label: "Monthly Reports", slug: "monthly-reports" },
        { label: "Rank Tracking", slug: "rank-tracking" },
        { label: "Call Tracking", slug: "call-tracking" },
        { label: "ROI Analysis", slug: "roi-analysis" },
        { label: "Client Presentations", slug: "client-presentations" }
      ]
    }
  ];

  return (
    <footer className="bg-background relative pt-28 lg:pt-32" role="contentinfo">
      <SubtleOrbs variant="bottom-left" />

      {/* Service Categories Grid */}
      <div className="py-12 border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {serviceCategories.map((category, index) => (
              <div key={index}>
                <Link 
                  to={`/white-label-inbound-marketing-services/${category.hubSlug}`}
                  className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4 block hover:text-cta transition-colors"
                >
                  {category.title}
                </Link>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link 
                        to={`/white-label-inbound-marketing-services/${category.hubSlug}/${item.slug}`}
                        className="text-xs text-text-secondary hover:text-cta transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content - 3 Column Layout */}
      <div className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left - Contact Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-text-secondary mb-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>2703 Elm St, Dallas, TX 75226</span>
              </div>
              <a 
                href="tel:2143072995"
                className="flex items-center justify-center md:justify-start gap-3 text-sm text-text-secondary hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                (214) 307-2995
              </a>
            </div>

            {/* Center - Logo */}
            <div className="flex justify-center order-first md:order-none mb-4 md:mb-0">
              <Link to="/">
                <img 
                  src={logo} 
                  alt="Dialed-In Web" 
                  className="h-8 brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>

            {/* Right - Social Icons */}
            <div className="flex items-center justify-center md:justify-end gap-5">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-foreground transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-text-muted">
                © {new Date().getFullYear()} Dialed-In Web. All Rights Reserved.
              </p>
              <Link 
                to="/privacy"
                className="text-xs text-text-muted hover:text-text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;