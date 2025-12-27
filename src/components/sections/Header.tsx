import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown, Search } from "lucide-react";
import logo from "@/assets/dialedinweb-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const servicesDropdown = [
    { label: "Local SEO", href: "#services" },
    { label: "Google Maps", href: "#services" },
    { label: "Google Ads", href: "#services" },
    { label: "Meta Ads", href: "#services" },
    { label: "Organic Social", href: "#services" },
    { label: "Authority Building", href: "#services" },
  ];

  const navLinks = [
    { 
      label: "Services", 
      href: "#services",
      hasDropdown: true,
      dropdownItems: servicesDropdown
    },
    { label: "About", href: "#about" },
    { label: "Results", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-surface-dark/95 backdrop-blur-md border-b border-border shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Dialed-In Web" 
              className="h-8 md:h-10 w-auto brightness-0 invert opacity-90"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" ref={dropdownRef}>
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(link.label)}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide"
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-surface-elevated border border-border rounded-lg shadow-xl shadow-black/20 py-2 z-50">
                        {link.dropdownItems?.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-text-secondary hover:text-foreground hover:bg-surface-dark transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

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

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-surface-dark">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(link.label)}
                        className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground/80 uppercase tracking-wide"
                      >
                        {link.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === link.label && (
                        <div className="pl-4 pb-2 space-y-1">
                          {link.dropdownItems?.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.href}
                              className="block py-2 text-sm text-text-secondary hover:text-foreground transition-colors"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="block py-3 text-base font-medium text-foreground/80 uppercase tracking-wide"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
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
