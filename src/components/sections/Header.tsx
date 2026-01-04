import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Search } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import logo from "@/assets/dialedinweb-logo.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const toolsMenuRef = useRef<HTMLDivElement>(null);

  const navigateMobile = (to: string) => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    setIsToolsMenuOpen(false);
    requestAnimationFrame(() => navigate(to));
  };

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
      if (toolsMenuRef.current && !toolsMenuRef.current.contains(event.target as Node)) {
        setIsToolsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape key to close menus
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMegaMenuOpen(false);
        setIsMobileMenuOpen(false);
        setIsToolsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

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
        { label: "GBP Profile Optimization", slug: "gbp-optimization" },
        { label: "Review Generation & Response", slug: "review-management" },
        { label: "Citation Building & Cleanup", slug: "citation-building" },
        { label: "Photo & Media Management", slug: "photo-optimization" },
        { label: "Local Pack Strategy", slug: "qa-management" },
        { label: "GBP Posting & Content", slug: "post-scheduling" }
      ]
    },
    {
      title: "CONTENT MARKETING",
      href: "/white-label-inbound-marketing-services/content-marketing",
      items: [
        { label: "Geographical Content", slug: "geographical-content" },
        { label: "Topical Content", slug: "topical-content" },
        { label: "Power Posts", slug: "power-posts" },
        { label: "E-books & Guides", slug: "ebooks-guides" },
        { label: "Lead Magnets", slug: "lead-magnets" },
        { label: "Press Releases", slug: "press-releases" },
        { label: "AIO Content", slug: "aio-content" },
        { label: "Case Studies", slug: "case-studies" }
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
        { label: "Press Releases", href: "/white-label-inbound-marketing-services/content-marketing/press-releases" }
      ]
    },
    {
      title: "REPORTING",
      href: "/white-label-inbound-marketing-services/reporting",
      items: [
        { label: "White-Label Dashboards", slug: "white-label-dashboards" },
        { label: "Monthly Performance Reports", slug: "monthly-performance-reports" },
        { label: "Rank Tracking & Visibility", slug: "rank-tracking-visibility" },
        { label: "Call Tracking & Attribution", slug: "call-tracking-lead-attribution" },
        { label: "ROI & Revenue Analysis", slug: "roi-revenue-analysis" },
        { label: "Client Presentation Decks", slug: "client-presentation-decks" }
      ]
    }
  ];

  // Links that appear BEFORE Services mega menu
  const preServiceLinks = [
    { label: "About", href: "/about", isRoute: true }
  ];

  // Links that appear AFTER Services mega menu
  const postServiceLinks = [
    { label: "Testimonials", href: "/testimonials", isRoute: true },
    { label: "Blog", href: "/blog", isRoute: true }
  ];

  // Partner Tools dropdown items
  const partnerToolsLinks = [
    { label: "SEO Cost Calculator", href: "/partner-tools/seo-calculator", description: "Estimate monthly SEO investment" },
    { label: "Inbound Marketing ROI Calculator", href: "/partner-tools/roi-calculator", description: "Show clients their marketing ROI" },
    { label: "Investment Calculator", href: "/partner-tools/investment-calculator", description: "Scope monthly service costs" },
    { label: "Ad Budget Calculator", href: "/partner-tools/ad-budget-calculator", description: "Project ad campaign results" },
    { label: "Email Marketing Calculator", href: "/partner-tools/email-calculator", description: "Calculate email ROI potential" },
    { label: "Content Marketing Calculator", href: "/partner-tools/content-marketing-calculator", description: "Calculate content ROI" },
    { label: "AI Ready Check", href: "/partner-tools/ai-ready-check", description: "Scan website AI compatibility" }
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
              {/* Pre-Service Links (About) */}
              {preServiceLinks.map((link, index) => (
                link.isRoute ? (
                  <Link
                    key={`pre-${index}`}
                    to={link.href}
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={`pre-${index}`}
                    href={getAnchorHref(link.href)}
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                )
              ))}

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
              
              {/* Post-Service Links */}
              {postServiceLinks.map((link, index) => (
                link.isRoute ? (
                  <Link
                    key={`post-${index}`}
                    to={link.href}
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={`post-${index}`}
                    href={getAnchorHref(link.href)}
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                )
              ))}

              {/* Partner Tools Dropdown */}
              <div className="relative" ref={toolsMenuRef}>
                <Link
                  to="/partner-tools"
                  onMouseEnter={() => setIsToolsMenuOpen(true)}
                  onClick={(e) => {
                    if (isToolsMenuOpen) {
                      // If menu is open, navigate
                    } else {
                      e.preventDefault();
                      setIsToolsMenuOpen(true);
                    }
                  }}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide"
                >
                  Partner Tools
                  <ChevronDown className={`h-4 w-4 transition-transform ${isToolsMenuOpen ? 'rotate-180' : ''}`} />
                </Link>
                
                {isToolsMenuOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-72 bg-surface-dark border border-border rounded-xl shadow-xl overflow-hidden animate-fade-in"
                    onMouseLeave={() => setIsToolsMenuOpen(false)}
                  >
                    <div className="p-2">
                      {partnerToolsLinks.map((tool, index) => (
                        <Link
                          key={index}
                          to={tool.href}
                          onClick={() => setIsToolsMenuOpen(false)}
                          className="block px-4 py-3 rounded-lg hover:bg-surface-elevated transition-colors"
                        >
                          <p className="text-sm font-medium text-foreground uppercase tracking-wide">{tool.label}</p>
                          <p className="text-xs text-text-muted mt-0.5 normal-case tracking-normal">{tool.description}</p>
                        </Link>
                      ))}
                      {/* View All Link */}
                      <div className="border-t border-border/30 mt-2 pt-2">
                        <Link
                          to="/partner-tools"
                          onClick={() => setIsToolsMenuOpen(false)}
                          className="block px-4 py-3 rounded-lg hover:bg-surface-elevated transition-colors text-center"
                        >
                          <p className="text-sm font-medium text-accent-blue">View All Partner Tools →</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              
            </nav>
          </div>

          {/* Right side - Phone, Search & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href={PHONE_HREF}
              className="flex items-center gap-2 text-foreground font-medium hover:text-cta transition-colors group"
            >
              <Phone className="h-4 w-4 text-cta" />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-cta after:transition-all after:duration-300 group-hover:after:w-full">
                {PHONE_NUMBER}
              </span>
            </a>
            <a 
              href="/contact" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-sm py-2.5 px-6"
            >
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
            {/* Close Button */}
            <button
              onClick={() => setIsMegaMenuOpen(false)}
              className="absolute top-4 right-6 lg:right-8 p-2 rounded-lg bg-surface-elevated/50 hover:bg-surface-elevated border border-border/50 hover:border-border transition-colors z-10"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-foreground/70 hover:text-foreground" />
            </button>
            {/* Top gradient glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cta/50 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-cta/5 to-transparent pointer-events-none" />
            <div className="container mx-auto px-6 lg:px-8 py-8 relative font-sans">
              {/* Service Categories Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 lg:gap-5">
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
                            to={'href' in item && item.href ? item.href : `${category.href}/${item.slug}`}
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
              
              {/* Featured Inbound Marketing Hub Callout */}
              <div className="mt-8 pt-6 border-t border-border/30">
                <Link
                  to="/white-label-inbound-marketing-services"
                  onClick={() => setIsMegaMenuOpen(false)}
                  className="group flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-cta/10 via-cta/5 to-transparent border border-cta/20 hover:border-cta/40 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cta/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-cta transition-colors">
                        White-Label Inbound Marketing
                      </p>
                      <p className="text-xs text-text-muted">
                        See how all services work together as one integrated system
                      </p>
                    </div>
                  </div>
                  <ChevronDown className="h-5 w-5 text-cta -rotate-90 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-surface-dark relative">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-surface-elevated/50 hover:bg-surface-elevated border border-border/50 hover:border-border transition-colors z-10"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-foreground/70 hover:text-foreground" />
            </button>
            <nav className="flex flex-col gap-1 pt-8">
              {/* Services Accordion */}
              <div className="flex items-center justify-between w-full py-3 px-3 rounded-lg hover:bg-surface-elevated/50 active:bg-surface-elevated transition-colors">
                <a
                  href="/white-label-inbound-marketing-services"
                  className="flex-1 flex items-center gap-2 text-base font-medium text-foreground uppercase tracking-wide"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateMobile("/white-label-inbound-marketing-services");
                  }}
                >
                  <span className="w-1 h-4 bg-cta rounded-full" />
                  Services
                </a>
                <button
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  className="p-2 rounded-lg hover:bg-surface-elevated active:bg-cta/20 transition-colors"
                  aria-label="Toggle services menu"
                >
                  <ChevronDown className={`h-5 w-5 text-foreground/60 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {isMegaMenuOpen && (
                <div className="ml-4 pl-3 border-l-2 border-cta/30 pb-4 grid grid-cols-2 gap-4">
                  {serviceCategories.map((category, index) => (
                    <div key={index}>
                      <a 
                        href={category.href}
                        className="text-xs font-semibold text-cta uppercase tracking-widest mb-2 block active:text-cta-glow transition-colors underline underline-offset-2 decoration-cta/30"
                        onClick={(e) => {
                          e.preventDefault();
                          navigateMobile(category.href);
                        }}
                      >
                        {category.title}
                      </a>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => {
                          const itemHref = 'href' in item && item.href ? item.href : `${category.href}/${item.slug}`;
                          return (
                            <li key={itemIndex}>
                              <a 
                                href={itemHref}
                                className="text-xs text-text-secondary hover:text-foreground active:text-cta transition-colors py-1 block"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigateMobile(itemHref);
                                }}
                              >
                                {item.label}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              
              {[...preServiceLinks, ...postServiceLinks].map((link, index) => (
                link.isRoute ? (
                  <Link
                    key={index}
                    to={link.href}
                    className="flex items-center gap-2 py-3 px-3 rounded-lg text-base font-medium text-foreground uppercase tracking-wide hover:bg-surface-elevated/50 active:bg-surface-elevated transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="w-1 h-4 bg-cta rounded-full" />
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={getAnchorHref(link.href)}
                    className="flex items-center gap-2 py-3 px-3 rounded-lg text-base font-medium text-foreground uppercase tracking-wide hover:bg-surface-elevated/50 active:bg-surface-elevated transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="w-1 h-4 bg-cta rounded-full" />
                    {link.label}
                  </a>
                )
              ))}

              {/* Mobile Partner Tools (no dropdown) */}
              <a
                href="/partner-tools"
                className="flex items-center gap-2 py-3 px-3 rounded-lg text-base font-medium text-foreground uppercase tracking-wide hover:bg-surface-elevated/50 active:bg-surface-elevated transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  navigateMobile("/partner-tools");
                }}
              >
                <span className="w-1 h-4 bg-cta rounded-full" />
                Partner Tools
              </a>



              <div className="pt-4 mt-2 border-t border-border">
                <a 
                  href={PHONE_HREF}
                  className="flex items-center gap-2 py-3 text-foreground font-medium"
                >
                  <Phone className="h-4 w-4 text-cta" />
                  {PHONE_NUMBER}
                </a>
                <a 
                  href="/contact" 
                  target="_blank"
                  rel="noopener noreferrer"
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
