import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown, Search } from "lucide-react";
import logo from "@/assets/dialedinweb-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

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
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Results", href: "#testimonials" },
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
            <a href="/" className="flex items-center overflow-hidden">
              <img 
                src={logo} 
                alt="Dialed-In Web" 
                className={`w-auto brightness-0 invert opacity-90 transition-all duration-300 ${
                  isScrolled 
                    ? "h-5 md:h-6 max-w-[24px] md:max-w-[28px] object-cover object-left" 
                    : "h-5 md:h-6"
                }`}
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0">
              {/* Services Mega Menu Trigger */}
              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right side - Phone, Search & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:2143072995"
              className="flex items-center gap-2 text-foreground font-medium hover:text-cta transition-colors"
            >
              <Phone className="h-4 w-4 text-cta" />
              (214) 307-2995
            </a>
            <a href="#contact" className="btn-cta text-sm py-2.5 px-6">
              Get Started
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
          <div className="hidden md:block absolute left-0 right-0 top-full bg-[#0a0f14] border-b border-border shadow-2xl shadow-black/50">
            {/* Top gradient glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cta/50 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-cta/5 to-transparent pointer-events-none" />
            <div className="container mx-auto px-6 lg:px-8 py-8 relative">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
                {serviceCategories.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
                      {category.title}
                    </h4>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a 
                            href="#services"
                            className="text-xs text-text-secondary hover:text-foreground transition-colors"
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            {item}
                          </a>
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
                      <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-2">
                        {category.title}
                      </h4>
                      <ul className="space-y-1">
                        {category.items.slice(0, 3).map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <a 
                              href="#services"
                              className="text-xs text-text-secondary hover:text-foreground transition-colors"
                              onClick={() => {
                                setIsMegaMenuOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block py-3 text-base font-medium text-foreground/80 uppercase tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
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
                  href="#contact" 
                  className="btn-cta text-center mt-3 w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
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
