import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Linkedin, Facebook, Instagram, Calculator, FileText } from "lucide-react";
import SubtleOrbs from "@/components/SubtleOrbs";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import logo from "@/assets/serviceforge-digital-logo-white.png";

const Footer = forwardRef<HTMLElement, object>((_, ref) => {
  const serviceCategories = [
    {
      title: "LOCAL SEO",
      href: "/white-label-local-seo",
      items: [
        { label: "On-Page Optimization", href: "/white-label-onpage-optimization" },
        { label: "Technical SEO", href: "/white-label-technical-seo" },
        { label: "Local Keyword Strategy", href: "/white-label-local-keyword-strategy" },
        { label: "Content Development", href: "/white-label-content-development" },
        { label: "Link Building", href: "/white-label-link-building" },
        { label: "Schema Markup", href: "/white-label-schema-markup" }
      ]
    },
    {
      title: "GBP SEO",
      href: "/white-label-gbp-seo",
      items: [
        { label: "GBP Profile Optimization", href: "/white-label-gbp-optimization" },
        { label: "Review Generation & Response", href: "/white-label-review-management" },
        { label: "Citation Building & Cleanup", href: "/white-label-citation-building" },
        { label: "Photo & Media Management", href: "/white-label-photo-optimization" },
        { label: "Local Pack Strategy", href: "/white-label-qa-management" },
        { label: "GBP Posting & Content", href: "/white-label-post-scheduling" }
      ]
    },
    {
      title: "CONTENT MARKETING",
      href: "/white-label-content-marketing",
      items: [
        { label: "Geographical Content", href: "/white-label-geographical-content" },
        { label: "Topical Authority", href: "/white-label-topical-authority" },
        { label: "Power Posts", href: "/white-label-power-posts" },
        { label: "E-books & Guides", href: "/white-label-ebooks-guides" },
        { label: "Lead Magnets", href: "/white-label-lead-magnets" },
        { label: "FAQ Content", href: "/white-label-faq-content" }
      ]
    },
    {
      title: "PAID MEDIA",
      href: "/white-label-paid-media",
      items: [
        { label: "Google Ads", href: "/white-label-google-ads" },
        { label: "Meta Ads", href: "/white-label-meta-ads" },
        { label: "Local Service Ads", href: "/white-label-local-service-ads" },
        { label: "Retargeting Campaigns", href: "/white-label-retargeting-campaigns" },
        { label: "Landing Page Design", href: "/white-label-landing-page-design" },
        { label: "Conversion Tracking", href: "/white-label-conversion-tracking" }
      ]
    },
    {
      title: "EMAIL MARKETING",
      href: "/white-label-email-marketing",
      items: [
        { label: "Campaign Strategy", href: "/white-label-campaign-strategy" },
        { label: "List Management", href: "/white-label-list-management" },
        { label: "Automation Flows", href: "/white-label-automation-flows" },
        { label: "Newsletter Design", href: "/white-label-newsletter-design" },
        { label: "A/B Testing", href: "/white-label-ab-testing" },
        { label: "Performance Analytics", href: "/white-label-performance-analytics" }
      ]
    },
    {
      title: "AUTHORITY",
      href: "/white-label-local-authority-building",
      items: [
        { label: "Structured Citations", href: "/white-label-structured-citations" },
        { label: "Unstructured Citations", href: "/white-label-unstructured-citations" },
        { label: "Brand Mentions", href: "/white-label-brand-mentions" },
        { label: "Press Releases", href: "/white-label-press-releases" },
        { label: "Sponsorships", href: "/white-label-sponsorships" },
        { label: "Anchor Text", href: "/white-label-anchor-text" }
      ]
    },
    {
      title: "REPORTING",
      href: "/white-label-reporting",
      items: [
        { label: "White-Label Dashboards", href: "/white-label-branded-dashboards" },
        { label: "Monthly Performance Reports", href: "/white-label-monthly-performance-reports" },
        { label: "Rank Tracking & Visibility", href: "/white-label-rank-tracking-visibility" },
        { label: "Call Tracking & Attribution", href: "/white-label-call-tracking-lead-attribution" },
        { label: "ROI & Revenue Analysis", href: "/white-label-roi-revenue-analysis" },
        { label: "Client Presentation Decks", href: "/white-label-client-presentation-decks" }
      ]
    }
  ];

  return (
    <footer ref={ref} className="bg-background relative pt-28 lg:pt-32" role="contentinfo">
      <SubtleOrbs variant="bottom-left" />

      {/* Service Categories Grid */}
      <nav aria-label="Service categories" className="py-12 border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 lg:gap-5">
            {serviceCategories.map((category, index) => (
              <div key={index}>
                <Link 
                  to={category.href}
                  className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4 block hover:text-cta transition-colors"
                >
                  {category.title}
                </Link>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link 
                        to={item.href}
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
      </nav>

      {/* Main Footer Content - 3 Column Layout */}
      <div className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left - Contact Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-text-secondary mb-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>4849 Greenville Ave, Suite 100 #176, Dallas, TX 75206</span>
              </div>
              <a 
                href={PHONE_HREF}
                className="flex items-center justify-center md:justify-start gap-3 text-sm text-text-secondary hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {PHONE_NUMBER}
              </a>
            </div>

            {/* Center - Logo */}
            <div className="flex justify-center order-first md:order-none mb-4 md:mb-0">
              <Link to="/">
                <img 
                  src={logo} 
                  alt="Demand Stream Digital - Growth Marketing for Plumbing & HVAC Companies" 
                  title="Demand Stream Digital | SEO, PPC & Content Marketing for Plumbing & HVAC"
                  width={240}
                  height={40}
                  className="h-10 opacity-80 hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>

            {/* Right - Social Icons */}
            <div className="flex items-center justify-center md:justify-end gap-5">
              <a 
                href="https://share.google/IXw0qAzlgpjR1SIKP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-foreground transition-colors"
                aria-label="Google Business Profile"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/demandstreamdigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/demandstreamdigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/demand-stream-digital/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-text-muted">
                © {new Date().getFullYear()} Demand Stream Digital. All Rights Reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link 
                  to="/case-studies"
                  className="flex items-center gap-1.5 text-xs text-text-muted hover:text-cta transition-colors"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Case Studies
                </Link>
                <Link 
                  to="/partner-tools"
                  className="flex items-center gap-1.5 text-xs text-text-muted hover:text-cta transition-colors"
                >
                  <Calculator className="h-3.5 w-3.5" />
                  Partner Tools
                </Link>
                <Link 
                  to="/privacy"
                  className="text-xs text-text-muted hover:text-text-secondary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms"
                  className="text-xs text-text-muted hover:text-text-secondary transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
