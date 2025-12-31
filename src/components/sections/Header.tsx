import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Search } from "lucide-react";
import logo from "@/assets/dialedinweb-logo.png";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
      if (pricingRef.current && !pricingRef.current.contains(event.target as Node)) {
        setIsPricingOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper to handle anchor links - either scroll on home page or navigate to home + anchor
  const getAnchorHref = (anchor: string) => {
    return isHomePage ? anchor : `/${anchor}`;
  };

  const serviceCategories = [
    {
      title: "LOCAL SEO",
      href: "/white-label-inbound-marketing-services/local-seo",
      items: [
        { label: "On-Page Optimization", slug: "on-page-optimization" },
        { label: "Technical SEO", slug: "technical-seo" },
        { label: "Local Keyword Strategy", slug: "local-keyword-strategy" },
        { label: "Content Development", slug: "content-development" },
        { label: "Link Building", slug: "link-building" },
        { label: "Schema Markup", slug: "schema-markup" },
        { label: "NAP Citations", slug: "nap-citations" }
      ]
    },
    {
      title: "GBP SEO",
      href: "/white-label-inbound-marketing-services/google-maps",
      items: [
        { label: "GBP Optimization", slug: "gbp-optimization" },
        { label: "Review Management", slug: "review-management" },
        { label: "Citation Building", slug: "citation-building" },
        { label: "Photo Optimization", slug: "photo-optimization" },
        { label: "Q&A Management", slug: "qa-management" },
        { label: "Post Scheduling", slug: "post-scheduling" }
      ]
    },
    {
      title: "PAID MEDIA",
      href: "/white-label-inbound-marketing-services/paid-media",
      items: [
        { label: "Google Ads", slug: "google-ads" },
        { label: "Meta Ads", slug: "meta-ads" },
        { label: "Local Service Ads", slug: "local-service-ads" },
        { label: "Retargeting Campaigns", slug: "retargeting-campaigns" },
        { label: "Landing Page Design", slug: "landing-page-design" },
        { label: "Conversion Tracking", slug: "conversion-tracking" }
      ]
    },
    {
      title: "EMAIL MARKETING",
      href: "/white-label-inbound-marketing-services/email-marketing",
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
      href: "/white-label-inbound-marketing-services/local-authority-building",
      items: [
        { label: "Local Links", slug: "local-links" },
        { label: "Unstructured Citations", slug: "unstructured-citations" },
        { label: "Brand Mentions", slug: "brand-mentions" },
        { label: "Anchor Text", slug: "anchor-text" },
        { label: "Sponsorships", slug: "sponsorships" },
        { label: "Reputation Signals", slug: "reputation-signals" }
      ]
    },
    {
      title: "REPORTING",
      href: "/white-label-inbound-marketing-services/reporting",
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

  const navLinks = [
    { label: "About", href: "/about", isRoute: true },
    { label: "Results", href: "#testimonials" },
    { label: "Calculator", href: "/agency-calculator", isRoute: true },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-surface-dark/95 backdrop-blur-md border-b border-border shadow-lg" 
          : "bg-transparent"
      }`}
      ref={megaMenuRef}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Nav together */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center overflow-hidden">
              <img 
                src={logo} 
                alt="Dialed-In Web" 
                className={`w-auto brightness-0 invert opacity-90 transition-all duration-300 ${
                  isScrolled 
                    ? "h-5 md:h-6 max-w-[24px] md:max-w-[28px] object-cover object-left" 
                    : "h-5 md:h-6"
                }`}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0">
              {/* Services Mega Menu Trigger */}
              <Link
                to="/white-label-inbound-marketing-services"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onClick={(e) => {
                  if (isMegaMenuOpen) {
                    // If menu is open, navigate
                  } else {
                    e.preventDefault();
                    setIsMegaMenuOpen(true);
                  }
                }}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {navLinks.map((link, index) => (
                link.isRoute ? (
                  <Link
                    key={index}
                    to={link.href}
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={getAnchorHref(link.href)}
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                )
              ))}
              
              {/* Pricing Dropdown */}
              <div className="relative" ref={pricingRef}>
                <button
                  onClick={() => setIsPricingOpen(!isPricingOpen)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide"
                >
                  Pricing
                  <ChevronDown className={`h-4 w-4 transition-transform ${isPricingOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isPricingOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-[#0a0f14] border border-border rounded-xl shadow-2xl shadow-black/50 p-6 z-50 animate-fade-in">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cta/50 to-transparent" />
                    <p className="text-sm text-foreground font-medium mb-2">
                      No cookie-cutter packages here! 🎯
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Every local market is different. We build custom scopes based on city size, competition, industry vertical, and your client's actual goals. Let's chat about what you need.
                    </p>
                    <a 
                      href={getAnchorHref("#contact")} 
                      className="inline-block mt-4 text-xs font-medium text-cta hover:text-cta-glow transition-colors"
                      onClick={() => setIsPricingOpen(false)}
                    >
                      Get a Custom Quote →
                    </a>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right side - Phone, Search & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:2143072995"
              className="flex items-center gap-2 text-foreground font-medium hover:text-cta transition-colors group"
            >
              <Phone className="h-4 w-4 text-cta" />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-cta after:transition-all after:duration-300 group-hover:after:w-full">
                (214) 307-2995
              </span>
            </a>
            <a href={getAnchorHref("#contact")} className="btn-cta text-sm py-2.5 px-6">
              Schedule a Discovery Call
            </a>
            <button 
              className="p-2.5 rounded-full bg-cta hover:bg-cta-glow transition-colors"
              aria-label="Search"
            >
              <Search className="h-4 w-4 text-cta-foreground" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mega Menu Dropdown */}
        {isMegaMenuOpen && (
          <div className="hidden md:block absolute left-0 right-0 top-full bg-[#0a0f14] border-b border-border shadow-2xl shadow-black/50 animate-fade-in origin-top">
            {/* Top gradient glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cta/50 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-cta/5 to-transparent pointer-events-none" />
            <div className="container mx-auto px-6 lg:px-8 py-8 relative font-sans">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
                {serviceCategories.map((category, index) => (
                  <div 
                    key={index}
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 75}ms`, animationFillMode: 'forwards' }}
                  >
                    <Link 
                      to={category.href}
                      className="text-[11px] font-semibold text-foreground uppercase tracking-widest mb-4 block hover:text-cta transition-colors"
                      onClick={() => setIsMegaMenuOpen(false)}
                    >
                      {category.title}
                    </Link>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link 
                            to={`${category.href}/${item.slug}`}
                            className="text-[13px] text-text-secondary hover:text-foreground transition-colors"
                            onClick={() => setIsMegaMenuOpen(false)}
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
        )}

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-surface-dark">
            <nav className="flex flex-col gap-2">
              {/* Services Accordion */}
              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground/80 uppercase tracking-wide"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMegaMenuOpen && (
                <div className="pl-4 pb-4 grid grid-cols-2 gap-4">
                  {serviceCategories.map((category, index) => (
                    <div key={index}>
                      <Link 
                        to={category.href}
                        className="text-xs font-semibold text-foreground uppercase tracking-widest mb-2 block hover:text-cta transition-colors"
                        onClick={() => {
                          setIsMegaMenuOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {category.title}
                      </Link>
                      <ul className="space-y-1">
                        {category.items.slice(0, 3).map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link 
                              to={`${category.href}/${item.slug}`}
                              className="text-xs text-text-secondary hover:text-foreground transition-colors"
                              onClick={() => {
                                setIsMegaMenuOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              
              {navLinks.map((link, index) => (
                link.isRoute ? (
                  <Link
                    key={index}
                    to={link.href}
                    className="block py-3 text-base font-medium text-foreground/80 uppercase tracking-wide"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={getAnchorHref(link.href)}
                    className="block py-3 text-base font-medium text-foreground/80 uppercase tracking-wide"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <a 
                  href="tel:2143072995"
                  className="flex items-center gap-2 py-3 text-foreground font-medium"
                >
                  <Phone className="h-4 w-4 text-cta" />
                  (214) 307-2995
                </a>
                <a 
                  href={getAnchorHref("#contact")} 
                  className="btn-cta text-center mt-3 w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Schedule a Discovery Call
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
