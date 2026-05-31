import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Linkedin, Facebook, Instagram, FileText } from "lucide-react";
import SubtleOrbs from "@/components/SubtleOrbs";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import logo from "@/assets/demandstream-digital-logo.svg";

const Footer = forwardRef<HTMLElement, object>((_, ref) => {
  const serviceCategories = [
    {
      title: "PLUMBING MARKETING",
      href: "/plumbing-seo",
      items: [
        { label: "Plumbing SEO", href: "/plumbing-seo" },
        { label: "Plumbing Google Maps / GBP", href: "/plumbing-google-maps" },
        { label: "Plumbing PPC / Google Ads", href: "/paid-marketing" },
        { label: "Plumbing Web Design", href: "/plumbing-website-design" },
        { label: "Plumbing AIO & GEO", href: "/plumbing-ai-search-optimization" },
        { label: "Plumbing Email Marketing", href: "/plumbing-email-marketing" },
        { label: "Plumbing Content Marketing", href: "/plumbing-content-marketing" },
      ]
    },
    {
      title: "HVAC MARKETING",
      href: "/hvac-seo",
      items: [
        { label: "HVAC SEO", href: "/hvac-seo" },
        { label: "HVAC Google Maps / GBP", href: "/hvac-google-maps" },
        { label: "HVAC PPC / Google Ads", href: "/paid-marketing" },
        { label: "HVAC Web Design", href: "/hvac-website-design" },
        { label: "HVAC AIO & GEO", href: "/hvac-ai-search-optimization" },
        { label: "HVAC Email Marketing", href: "/hvac-email-marketing" },
        { label: "HVAC Local Service Ads", href: "/hvac-local-service-ads" },
      ]
    },
    {
      title: "SERVICES",
      href: "/#services",
      items: [
        { label: "Local SEO", href: "/hvac-and-plumbing-seo" },
        { label: "Google Maps / GBP", href: "/plumbing-and-hvac-google-maps" },
        { label: "Paid Advertising", href: "/paid-marketing" },
        { label: "Content Marketing", href: "/plumbing-and-hvac-content-marketing" },
        { label: "Email Marketing", href: "/plumbing-and-hvac-email-marketing" },
        { label: "Website Design", href: "/website-design" },
        { label: "AIO & GEO (AI Search)", href: "/plumbing-and-hvac-ai-search-optimization" },
        { label: "Reporting & Dashboards", href: "/plumbing-and-hvac-reporting" },
      ]
    },
    {
      title: "RESOURCES",
      href: "/case-studies",
      items: [
        { label: "Case Studies", href: "/case-studies" },
        { label: "Blog", href: "/blog" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/grow-qualifier" },
      ]
    },
  ];

  return (
    <footer ref={ref} className="bg-background relative pt-28 lg:pt-32" role="contentinfo">
      <SubtleOrbs variant="bottom-left" />

      {/* Service Categories Grid */}
      <nav aria-label="Service categories" className="py-12 border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5">
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
                &copy; {new Date().getFullYear()} Demand Stream Digital. All Rights Reserved.
              </p>

              {/* Payment Methods */}
              <div className="flex items-center gap-3" aria-label="Accepted payment methods">
                {/* Visa */}
                <svg className="h-6 w-auto opacity-70" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.68 1.04l-4.32 10.92h-2.8L9.48 3.24c-.12-.52-.24-.72-.64-.94C8.2 1.98 7.16 1.68 6.16 1.52l.06-.48h4.56c.58 0 1.1.38 1.22 1.04l1.18 6.24 2.92-7.28h2.58zm14.36 7.36c.02-2.88-3.98-3.04-3.96-4.34 0-.38.38-.78 1.2-.88.4-.06 1.52-.1 2.78.52l.5-2.32c-.68-.24-1.56-.48-2.64-.48-2.78 0-4.74 1.48-4.76 3.6-.02 1.58 1.4 2.46 2.46 2.98 1.1.54 1.46.88 1.46 1.36-.02.74-.88 1.06-1.7 1.08-1.42.02-2.26-.38-2.92-.7l-.5 2.38c.64.3 1.82.54 3.04.56 2.96 0 4.9-1.46 4.92-3.76h-.02zm7.44 3.56h2.22l-1.94-10.92h-2.06c-.46 0-.86.28-1.04.7l-3.66 10.22h2.52l.52-1.44h3.14l.3 1.44zm-2.72-3.42l1.28-3.56.74 3.56h-2.02zm-10.5-7.5l-2.14 10.92h2.4l2.14-10.92h-2.4zm-6.26 0l-3.3 10.92h2.44l.48-1.64h2.96l.28 1.64h2.7l-3.2-10.92h-2.36zm.5 6.38l.68-2.3.4 2.3h-1.08z" fill="currentColor"/>
                </svg>
                {/* Mastercard */}
                <svg className="h-6 w-auto opacity-70" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7" cy="8" r="7" fill="#EB001B"/>
                  <circle cx="17" cy="8" r="7" fill="#F79E1B"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 13.93A8.96 8.96 0 0 1 9.5 8a8.96 8.96 0 0 1 5-5.93 8.96 8.96 0 0 1 2.5 5.93 8.96 8.96 0 0 1-5 5.93z" fill="#FF5F00"/>
                </svg>
                {/* American Express */}
                <svg className="h-6 w-auto opacity-70" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="16" rx="2" fill="#006FCF"/>
                  <path d="M4 8.5h2.5l1-2.5 1 2.5H11V6h1.5l1 2.5L14.5 6H16v5h-1.5v-2.5L13 11h-1l-1-2.5V11H9l-.5-1H6.5l-.5 1H4V8.5zm2.1.5h1.3l-.65-1.65-.65 1.65zM17 6h3v1h-2v1h2v1h-2v1h2v1h-3V6z" fill="#fff"/>
                </svg>
                {/* Discover */}
                <svg className="h-6 w-auto opacity-70" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="16" rx="2" fill="#FF6000"/>
                  <path d="M6 4.5h2c1.1 0 2 .9 2 2s-.9 2-2 2H6v-4zm1.5 3h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-.5v1zM11 4.5h1.5v4H11v-4zM13 4.5h1.5v4H13v-4zM15.5 4.5h1.5c1.1 0 2 .9 2 2s-.9 2-2 2h-1.5v-4zm1.5 3h.25c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-.25v1z" fill="#fff"/>
                  <circle cx="20" cy="6.5" r="1.5" fill="#fff"/>
                </svg>
                {/* PayPal */}
                <svg className="h-6 w-auto opacity-70" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="16" rx="2" fill="#003087"/>
                  <path d="M6 5h2.5c.8 0 1.4.5 1.3 1.2-.1.8-.9 1.3-1.7 1.3H7l-.4 2H5l1-4.5z" fill="#fff"/>
                  <path d="M10 5h2.5c.8 0 1.4.5 1.3 1.2-.1.8-.9 1.3-1.7 1.3H11l-.4 2H9l1-4.5z" fill="#009CDE"/>
                  <path d="M8.5 7.5H7l.4-2H9l-.4 2z" fill="#fff" opacity=".8"/>
                </svg>
              </div>

              <div className="flex items-center gap-6">
                <Link 
                  to="/case-studies"
                   className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-blue transition-colors"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Case Studies
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
