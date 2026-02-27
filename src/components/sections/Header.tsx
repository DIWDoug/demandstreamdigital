import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import logo from "@/assets/demandstream-digital-logo.svg";


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
      title: "PLUMBING",
      href: "/hvac-and-plumbing-seo",
      items: [
        { label: "Plumbing SEO", href: "/hvac-and-plumbing-seo" },
        { label: "Plumbing Google Maps / GBP", href: "/plumbing-google-maps" },
        { label: "Plumbing Paid Advertising", href: "/plumbing-paid-advertising" },
        { label: "Plumbing Content Marketing", href: "/plumbing-content-marketing" },
        { label: "Plumbing Email Marketing", href: "/plumbing-email-marketing" },
        { label: "Plumbing Reporting", href: "/plumbing-reporting" }
      ]
    },
    {
      title: "HVAC",
      href: "/hvac-and-plumbing-seo",
      items: [
        { label: "HVAC SEO", href: "/hvac-and-plumbing-seo" },
        { label: "HVAC Google Maps / GBP", href: "/hvac-google-maps" },
        { label: "HVAC Paid Advertising", href: "/hvac-paid-advertising" },
        { label: "HVAC Content Marketing", href: "/hvac-content-marketing" },
        { label: "HVAC Email Marketing", href: "/hvac-email-marketing" },
        { label: "HVAC Reporting", href: "/hvac-reporting" }
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
    >
      {/* Top Utility Bar */}
      <div className={`bg-cta text-cta-foreground transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`}>
        <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between py-1.5 text-xs font-medium">
          <Link to="/contact" className="hover:underline tracking-wide">
            📞 Free Marketing Audit: See Where You're Losing Leads
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
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Demand Stream Digital - Growth Marketing for Plumbing & HVAC Companies" 
                title="Demand Stream Digital | SEO, PPC & Content Marketing for Plumbing & HVAC"
                className={`w-auto opacity-90 transition-all duration-300 ${
                  isScrolled ? "h-12 md:h-14" : "h-14 md:h-16"
                }`}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0 ml-2">
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

              {/* Services Dropdown */}
              <div className="relative z-50" ref={megaMenuRef}>
                <button
                  type="button"
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide whitespace-nowrap"
                  aria-haspopup="true"
                  aria-expanded={isMegaMenuOpen}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>

                {isMegaMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[480px] bg-surface-dark border border-border rounded-xl shadow-xl overflow-hidden animate-fade-in">
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                        {serviceCategories.map((category, index) => (
                          <div key={index} className="mb-3">
                            <p className="text-[10px] font-bold text-accent-blue uppercase tracking-widest mb-2 px-2">
                              {category.title}
                            </p>
                            <ul className="space-y-0.5">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    to={item.href}
                                    onClick={() => setIsMegaMenuOpen(false)}
                                    className="block px-2 py-1.5 rounded-lg hover:bg-surface-elevated transition-colors text-sm text-text-secondary hover:text-foreground"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-border/30 mt-2 pt-2">
                        <Link
                          to="/services"
                          onClick={() => setIsMegaMenuOpen(false)}
                          className="block px-4 py-3 rounded-lg hover:bg-surface-elevated transition-colors text-center"
                        >
                          <p className="text-sm font-medium text-accent-blue">View All Services →</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
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
                <button
                  type="button"
                  onClick={() => setIsToolsMenuOpen(!isToolsMenuOpen)}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide whitespace-nowrap"
                  aria-haspopup="true"
                  aria-expanded={isToolsMenuOpen}
                >
                  Partner Tools
                  <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform ${isToolsMenuOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                
                {isToolsMenuOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-72 bg-surface-dark border border-border rounded-xl shadow-xl overflow-hidden animate-fade-in"
                    
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
          <div className="hidden lg:flex items-center gap-6 ml-auto pl-6">
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
