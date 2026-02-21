import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import logo from "@/assets/demandstream-digital-logo.png";

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
      href: "/white-label-local-seo",
      items: [
        { label: "On-Page Optimization", href: "/white-label-onpage-optimization" },
        { label: "Technical SEO", href: "/white-label-technical-seo" },
        { label: "Local Keyword Strategy", href: "/white-label-local-keyword-strategy" },
        { label: "Content Development", href: "/white-label-content-development" },
        { label: "Link Building", href: "/white-label-link-building" },
        { label: "Schema Markup", href: "/white-label-schema-markup" },
        { label: "NAP Citations", href: "/white-label-nap-citations" }
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
        { label: "Press Releases", href: "/white-label-press-releases" },
        { label: "FAQ Content", href: "/white-label-faq-content" },
        { label: "Case Studies", href: "/white-label-case-studies" }
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
        { label: "Anchor Text", href: "/white-label-anchor-text" },
        { label: "Sponsorships", href: "/white-label-sponsorships" },
        { label: "Press Releases", href: "/white-label-press-releases" }
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

  // Links that appear BEFORE Services mega menu
  const preServiceLinks = [
    { label: "About", href: "/about", isRoute: true }
  ];

  // Links that appear AFTER Services mega menu
  const postServiceLinks = [
    { label: "Case Studies", href: "/case-studies", isRoute: true },
    { label: "Testimonials", href: "/testimonials", isRoute: true },
    { label: "Blog", href: "/our-blog", isRoute: true }
  ];

  // Partner Tools dropdown items
  const partnerToolsLinks = [
    { label: "SEO Cost Calculator", href: "/partner-tools/seo-calculator", description: "Estimate monthly SEO investment" },
    { label: "Inbound Marketing ROI Calculator", href: "/partner-tools/roi-calculator", description: "Show clients their marketing ROI" },
    { label: "Social Media ROI Calculator", href: "/partner-tools/social-media-roi-calculator", description: "Calculate social media campaign ROI" },
    { label: "Investment Calculator", href: "/partner-tools/investment-calculator", description: "Scope monthly service costs" },
    { label: "Ad Budget Calculator", href: "/partner-tools/ad-budget-calculator", description: "Project ad campaign results" },
    { label: "Email Marketing Calculator", href: "/partner-tools/email-calculator", description: "Calculate email ROI potential" },
    { label: "Content Marketing Calculator", href: "/partner-tools/content-marketing-calculator", description: "Calculate content ROI" },
    { label: "AI Ready Check", href: "/partner-tools/ai-ready-check", description: "Scan website AI compatibility" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      ref={megaMenuRef}
    >
      {/* Top Utility Bar — inspired by Pure Plumbing */}
      <div className={`bg-cta text-cta-foreground transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`}>
        <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between py-1.5 text-xs font-medium">
          <Link to="/contact" className="hover:underline tracking-wide">
            📞 Free Marketing Audit — See Where You're Losing Leads
          </Link>
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5 uppercase tracking-widest text-[10px] font-bold">
              <span className="w-2 h-2 rounded-full bg-cta-foreground animate-pulse" />
              Plumbing & HVAC Specialists
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0F2742] border-b border-white/10 shadow-lg" 
          : "bg-[#0F2742]"
      }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Nav together */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center overflow-hidden">
              <div className={`overflow-hidden transition-all duration-300 ${
                  isScrolled ? "h-8 md:h-9" : "h-9 md:h-10"
                }`} style={{ width: '200px' }}>
                <img 
                  src={logo} 
                  alt="Demand Stream Digital - Growth Marketing for Plumbing & HVAC Companies" 
                  title="Demand Stream Digital | SEO, PPC & Content Marketing for Plumbing & HVAC"
                  className="h-full w-auto max-w-none opacity-90 brightness-0 invert"
                  style={{ objectFit: 'cover', objectPosition: 'left center', transform: 'scale(2.8)', transformOrigin: '8% 35%' }}
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0">
              {/* Pre-Service Links (About) */}
              {preServiceLinks.map((link, index) => (
                link.isRoute ? (
                  <Link
                    key={`pre-${index}`}
                    to={link.href}
                    className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={`pre-${index}`}
                    href={getAnchorHref(link.href)}
                    className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                )
              ))}

              {/* Services Mega Menu Trigger */}
              <Link
                to="/white-label-inbound-marketing-services"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    if (!isMegaMenuOpen) {
                      e.preventDefault();
                      setIsMegaMenuOpen(true);
                    }
                  }
                }}
                onClick={(e) => {
                  if (isMegaMenuOpen) {
                    // If menu is open, navigate
                  } else {
                    e.preventDefault();
                    setIsMegaMenuOpen(true);
                  }
                }}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide whitespace-nowrap"
                aria-haspopup="true"
                aria-expanded={isMegaMenuOpen}
              >
                Services
                <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </Link>
              
              {/* Post-Service Links */}
              {postServiceLinks.map((link, index) => (
                link.isRoute ? (
                  <Link
                    key={`post-${index}`}
                    to={link.href}
                    className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={`post-${index}`}
                    href={getAnchorHref(link.href)}
                    className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                )
              ))}

              {/* Partner Tools Backdrop */}
              {isToolsMenuOpen && (
                <div 
                  className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
                  onClick={() => setIsToolsMenuOpen(false)}
                  aria-hidden="true"
                />
              )}

              {/* Partner Tools Dropdown */}
              <div className="relative z-50" ref={toolsMenuRef}>
                <Link
                  to="/partner-tools"
                  onMouseEnter={() => setIsToolsMenuOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      if (!isToolsMenuOpen) {
                        e.preventDefault();
                        setIsToolsMenuOpen(true);
                      }
                    }
                  }}
                  onClick={(e) => {
                    if (isToolsMenuOpen) {
                      // If menu is open, navigate
                    } else {
                      e.preventDefault();
                      setIsToolsMenuOpen(true);
                    }
                  }}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide whitespace-nowrap"
                  aria-haspopup="true"
                  aria-expanded={isToolsMenuOpen}
                >
                  Partner Tools
                  <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform ${isToolsMenuOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
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

          {/* Right side - Phone & CTA (Pure Plumbing inspired bold layout) */}
          <div className="hidden lg:flex items-center gap-5">
            <a 
              href={PHONE_HREF}
              className="flex items-center gap-2 hover:text-cta transition-colors group whitespace-nowrap"
            >
              <Phone className="h-5 w-5 text-cta flex-shrink-0" />
              <div className="flex flex-col leading-none">
                <span className="text-[10px] uppercase tracking-widest text-text-muted font-semibold">Call Us Today</span>
                <span className="text-base font-bold text-foreground group-hover:text-cta transition-colors">
                  {PHONE_NUMBER}
                </span>
              </div>
            </a>
            <Link 
              to="/contact" 
              className="btn-cta text-sm py-2.5 px-5 whitespace-nowrap"
            >
              Schedule a Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mega Menu Backdrop */}
        {isMegaMenuOpen && (
          <div 
            className="hidden md:block fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setIsMegaMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mega Menu Dropdown */}
        {isMegaMenuOpen && (
          <div className="hidden md:block absolute left-0 right-0 top-full bg-[#0a0f14] border-b border-border shadow-2xl shadow-black/50 animate-fade-in origin-top z-50">
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
                            to={item.href}
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
                      Full-Service Growth Marketing
                      </p>
                      <p className="text-xs text-text-muted">
                        See how all services work together to grow your plumbing or HVAC business
                      </p>
                    </div>
                  </div>
                  <ChevronDown className="h-5 w-5 text-cta -rotate-90 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu - CSS-only animations for reduced bundle size */}
        {isMobileMenuOpen && (
          <nav 
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            className="md:hidden border-t border-border bg-surface-dark relative overflow-hidden animate-mobile-menu-open"
          >
            {/* Scrollable content wrapper */}
            <div className="py-6 max-h-[calc(100vh-64px)] overflow-y-auto relative before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:right-0 before:h-16 before:bg-gradient-to-t before:from-surface-dark before:to-transparent before:z-20 animate-mobile-menu-content">
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
                          {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <a 
                                  href={item.href}
                                  className="text-xs text-text-secondary hover:text-foreground active:text-cta transition-colors py-1 block"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    navigateMobile(item.href);
                                  }}
                                >
                                  {item.label}
                                </a>
                              </li>
                            ))}
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
                <Link
                  to="/partner-tools"
                  className="flex items-center gap-2 py-3 px-3 rounded-lg text-base font-medium text-foreground uppercase tracking-wide hover:bg-surface-elevated/50 active:bg-surface-elevated transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="w-1 h-4 bg-cta rounded-full" />
                  Partner Tools
                </Link>



                <div className="pt-4 mt-2 border-t border-border">
                  <a 
                    href={PHONE_HREF}
                    className="flex items-center gap-2 py-3 text-foreground font-medium"
                  >
                    <Phone className="h-4 w-4 text-cta" />
                    {PHONE_NUMBER}
                  </a>
                  <Link 
                    to="/contact" 
                    className="btn-cta text-center mt-3 w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get a Free Strategy Call
                  </Link>
                </div>
              </nav>
            </div>
          </nav>
        )}
      </div>
      </div>
    </header>
  );
};

export default Header;
