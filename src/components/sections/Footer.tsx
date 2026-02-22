import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Linkedin, Facebook, Instagram, Calculator, FileText } from "lucide-react";
import SubtleOrbs from "@/components/SubtleOrbs";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import logo from "@/assets/demandstream-digital-logo.svg";

const Footer = forwardRef<HTMLElement, object>((_, ref) => {
  const serviceCategories = [
    {
      title: "PLUMBING MARKETING",
      href: "/contact",
      items: [
        { label: "Plumbing SEO", href: "/contact" },
        { label: "Plumbing Google Maps / GBP", href: "/contact" },
        { label: "Plumbing PPC / Google Ads", href: "/contact" },
        { label: "Plumbing Web Design", href: "/contact" },
        { label: "Plumbing Reputation Management", href: "/contact" },
        { label: "Plumbing Email Marketing", href: "/contact" },
      ]
    },
    {
      title: "HVAC MARKETING",
      href: "/contact",
      items: [
        { label: "HVAC SEO", href: "/contact" },
        { label: "HVAC Google Maps / GBP", href: "/contact" },
        { label: "HVAC PPC / Google Ads", href: "/contact" },
        { label: "HVAC Web Design", href: "/contact" },
        { label: "HVAC Reputation Management", href: "/contact" },
        { label: "HVAC Email Marketing", href: "/contact" },
      ]
    },
    {
      title: "FRANCHISE MARKETING",
      href: "/contact",
      items: [
        { label: "Franchise Plumbing & HVAC Marketing", href: "/contact" },
      ]
    },
    {
      title: "SERVICES",
      href: "/#services",
      items: [
        { label: "Local SEO", href: "/plumbing-seo" },
        { label: "Google Maps / GBP", href: "/plumbing-google-maps" },
        { label: "Paid Advertising", href: "/plumbing-paid-advertising" },
        { label: "Content Marketing", href: "/plumbing-content-marketing" },
        { label: "Email Marketing", href: "/plumbing-email-marketing" },
        { label: "Reporting & Dashboards", href: "/plumbing-reporting" },
      ]
    },
    {
      title: "RESOURCES",
      href: "/contact",
      items: [
        { label: "Case Studies", href: "/case-studies" },
        { label: "Partner Tools", href: "/partner-tools" },
        { label: "Blog", href: "/blog" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]
    },
  ];

  return (
    <footer ref={ref} className="bg-background relative pt-28 lg:pt-32" role="contentinfo">
      <SubtleOrbs variant="bottom-left" />

      {/* Service Categories Grid */}
      <nav aria-label="Service categories" className="py-12 border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-5">
            {serviceCategories.map((category, index) => (
              <div key={index}>
                <Link 
                  to={category.href}
                  className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4 block hover:text-accent-blue transition-colors"
                >
                  {category.title}
                </Link>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link 
                        to={item.href}
                        className="text-xs text-text-secondary hover:text-accent-blue transition-colors"
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
                  className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>

            {/* Right - Social Icons */}
            <div className="flex items-center justify-center md:justify-end gap-5">
              <a 
                href="https://share.google/IXw0qAzlgpjR1SIKP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-blue transition-colors"
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
                className="text-text-secondary hover:text-accent-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/demandstreamdigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/demand-stream-digital/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-blue transition-colors"
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
                   className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-blue transition-colors"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Case Studies
                </Link>
                <Link 
                  to="/partner-tools"
                  className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-blue transition-colors"
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
