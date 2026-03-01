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
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node))
        setIsMegaMenuOpen(false);
      if (toolsMenuRef.current && !toolsMenuRef.current.contains(event.target as Node))
        setIsToolsMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMegaMenuOpen(false);
        setIsMobileMenuOpen(false);
        setIsToolsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const getAnchorHref = (anchor: string) => (isHomePage ? anchor : `/${anchor}`);

  const serviceHubs = [
    {
      label: "Local SEO",
      href: "/hvac-and-plumbing-seo",
      spokes: [
        { label: "Plumbing SEO", href: "/plumbing-seo" },
        { label: "HVAC SEO", href: "/hvac-seo" },
      ],
    },
    {
      label: "Paid Advertising",
      href: "/hvac-and-plumbing-paid-ads",
      spokes: [
        { label: "Plumbing Paid Advertising", href: "/plumbing-paid-advertising" },
        { label: "HVAC Paid Advertising", href: "/hvac-paid-advertising" },
        { label: "Plumbing Search Ads", href: "/plumbing-search-ads" },
        { label: "HVAC Search Ads", href: "/hvac-search-ads" },
        { label: "Plumbing Local Service Ads", href: "/plumbing-local-service-ads" },
        { label: "HVAC Local Service Ads", href: "/hvac-local-service-ads" },
        { label: "Plumbing Facebook Ads", href: "/plumbing-facebook-advertising" },
        { label: "HVAC Facebook Ads", href: "/hvac-facebook-advertising" },
        { label: "Plumbing Instagram Ads", href: "/plumbing-instagram-advertising" },
        { label: "HVAC Instagram Ads", href: "/hvac-instagram-advertising" },
        { label: "Plumbing LinkedIn Ads", href: "/plumbing-linkedin-advertising" },
        { label: "HVAC LinkedIn Ads", href: "/hvac-linkedin-advertising" },
        { label: "Plumbing Programmatic Ads", href: "/plumbing-programmatic-advertising" },
        { label: "HVAC Programmatic Ads", href: "/hvac-programmatic-advertising" },
      ],
    },
    {
      label: "Google Maps / GBP",
      href: "/plumbing-google-maps",
      spokes: [
        { label: "Plumbing Google Maps", href: "/plumbing-google-maps" },
        { label: "HVAC Google Maps", href: "/hvac-google-maps" },
      ],
    },
    {
      label: "Web Design",
      href: "/website-design",
      spokes: [
        { label: "Plumbing Website Design", href: "/plumbing-website-design" },
        { label: "HVAC Website Design", href: "/hvac-website-design" },
      ],
    },
    {
      label: "Content Marketing",
      href: "/plumbing-content-marketing",
      spokes: [
        { label: "Plumbing Content", href: "/plumbing-content-marketing" },
        { label: "HVAC Content", href: "/hvac-content-marketing" },
      ],
    },
    {
      label: "Email Marketing",
      href: "/plumbing-email-marketing",
      spokes: [
        { label: "Plumbing Email Marketing", href: "/plumbing-email-marketing" },
        { label: "HVAC Email Marketing", href: "/hvac-email-marketing" },
      ],
    },
    {
      label: "Reporting & Dashboards",
      href: "/plumbing-reporting",
      spokes: [
        { label: "Plumbing Reporting", href: "/plumbing-reporting" },
        { label: "HVAC Reporting", href: "/hvac-reporting" },
      ],
    },
  ];

  const preServiceLinks = [{ label: "About", href: "/about", isRoute: true }];
  const postServiceLinks = [
    { label: "Case Studies", href: "/case-studies", isRoute: true },
    { label: "Testimonials", href: "/testimonials", isRoute: true },
    { label: "Blog", href: "/our-blog", isRoute: true },
  ];
  const partnerToolsLinks = [
    { label: "SEO Cost Calculator", href: "/partner-tools/seo-calculator", description: "Estimate monthly SEO investment" },
    { label: "Inbound Marketing ROI Calculator", href: "/partner-tools/roi-calculator", description: "Show clients their marketing ROI" },
    { label: "Social Media ROI Calculator", href: "/partner-tools/social-media-roi-calculator", description: "Calculate social media campaign ROI" },
    { label: "Investment Calculator", href: "/partner-tools/investment-calculator", description: "Scope monthly service costs" },
    { label: "Ad Budget Calculator", href: "/partner-tools/ad-budget-calculator", description: "Project ad campaign results" },
    { label: "Email Marketing Calculator", href: "/partner-tools/email-calculator", description: "Calculate email ROI potential" },
    { label: "Content Marketing Calculator", href: "/partner-tools/content-marketing-calculator", description: "Calculate content ROI" },
    { label: "AI Ready Check", href: "/partner-tools/ai-ready-check", description: "Scan website AI compatibility" },
  ];

  const navLinkClass =
    "px-3 py-2 text-[15px] font-medium text-white/85 hover:text-white transition-colors whitespace-nowrap";

  return (
    <>
      {/* ─── ANNOUNCEMENT BAR ─── */}
      {/* Fixed, full-width, 40px, red #C0392B, always on top */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "h-0 overflow-hidden opacity-0 pointer-events-none" : "h-10 opacity-100"
        }`}
        style={{ backgroundColor: "#C0392B" }}
        aria-hidden={isScrolled}
      >
        <div className="h-full max-w-screen-xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Left */}
          <Link
            to="/free-audit"
            className="text-[13px] text-white hover:underline underline-offset-2 leading-none"
          >
            Free Marketing Audit: See Where You're Losing Leads
          </Link>
          {/* Right */}
          <span className="hidden sm:flex items-center gap-2 text-[13px] font-bold text-white uppercase tracking-widest leading-none">
            <span className="w-2 h-2 rounded-full bg-green-400" aria-hidden="true" />
            Plumbing &amp; HVAC Specialists
          </span>
        </div>
      </div>

      {/* ─── MAIN HEADER ─── */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "top-0 shadow-lg" : "top-10"
        }`}
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src={logo}
                alt="DemandStream Digital — Plumbing & HVAC Growth Marketing"
                className="h-12 w-auto"
              />
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-0 mx-4">
              {/* Pre-service links */}
              {preServiceLinks.map((link) =>
                link.isRoute ? (
                  <Link key={link.href} to={link.href} className={navLinkClass}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.href} href={getAnchorHref(link.href)} className={navLinkClass}>
                    {link.label}
                  </a>
                )
              )}

              {/* Services dropdown */}
              <div className="relative" ref={megaMenuRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsMegaMenuOpen(!isMegaMenuOpen);
                    setIsToolsMenuOpen(false);
                  }}
                  className={`${navLinkClass} flex items-center gap-1`}
                  aria-haspopup="true"
                  aria-expanded={isMegaMenuOpen}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isMegaMenuOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                {isMegaMenuOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-[700px] rounded-lg shadow-2xl overflow-hidden animate-fade-in"
                    style={{ backgroundColor: "#0D1B2A", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <div className="p-5">
                      <div className="grid grid-cols-3 gap-x-5 gap-y-4">
                        {serviceHubs.map((hub, i) => (
                          <div key={i}>
                            <Link
                              to={hub.href}
                              onClick={() => setIsMegaMenuOpen(false)}
                              className="block text-[11px] font-bold text-white uppercase tracking-widest mb-2 px-2 hover:text-[#4A90B8] transition-colors"
                            >
                              {hub.label}
                            </Link>
                            {hub.spokes.length > 0 && (
                              <ul className="space-y-0.5">
                                {hub.spokes.map((spoke, j) => (
                                  <li key={j}>
                                    <Link
                                      to={spoke.href}
                                      onClick={() => setIsMegaMenuOpen(false)}
                                      className="block px-2 py-1 rounded text-[12px] text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                                    >
                                      {spoke.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                        <Link
                          to="/services"
                          onClick={() => setIsMegaMenuOpen(false)}
                          className="block text-center text-[13px] font-medium text-[#4A90B8] hover:text-white transition-colors py-1"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Post-service links */}
              {postServiceLinks.map((link) =>
                link.isRoute ? (
                  <Link key={link.href} to={link.href} className={navLinkClass}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.href} href={getAnchorHref(link.href)} className={navLinkClass}>
                    {link.label}
                  </a>
                )
              )}

              {/* Partner Tools dropdown */}
              <div className="relative" ref={toolsMenuRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsToolsMenuOpen(!isToolsMenuOpen);
                    setIsMegaMenuOpen(false);
                  }}
                  className={`${navLinkClass} flex items-center gap-1`}
                  aria-haspopup="true"
                  aria-expanded={isToolsMenuOpen}
                >
                  Partner Tools
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isToolsMenuOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                {isToolsMenuOpen && (
                  <div
                    className="absolute top-full right-0 mt-1 w-72 rounded-lg shadow-2xl overflow-hidden animate-fade-in"
                    style={{ backgroundColor: "#0D1B2A", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <div className="p-2">
                      {partnerToolsLinks.map((tool, i) => (
                        <Link
                          key={i}
                          to={tool.href}
                          onClick={() => setIsToolsMenuOpen(false)}
                          className="block px-4 py-2.5 rounded-md hover:bg-white/5 transition-colors"
                        >
                          <p className="text-[13px] font-medium text-white">{tool.label}</p>
                          <p className="text-[12px] text-white/50 mt-0.5">{tool.description}</p>
                        </Link>
                      ))}
                      <div className="mt-2 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                        <Link
                          to="/partner-tools"
                          onClick={() => setIsToolsMenuOpen(false)}
                          className="block text-center text-[13px] font-medium text-[#4A90B8] hover:text-white transition-colors py-1.5"
                        >
                          View All Partner Tools →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* ── Right: Phone + CTA ── */}
            <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2.5 group"
              >
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: "#C0392B" }} />
                <div className="flex flex-col leading-none gap-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                    Call Us Today
                  </span>
                  <span className="text-[15px] font-bold text-white group-hover:text-[#C0392B] transition-colors whitespace-nowrap">
                    {PHONE_NUMBER}
                  </span>
                </div>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center font-bold text-white text-[15px] tracking-[0.04em] whitespace-nowrap transition-colors"
                style={{
                  backgroundColor: "#C0392B",
                  borderRadius: "4px",
                  padding: "10px 22px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#A93226")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C0392B")}
              >
                Schedule a Call →
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu — full-screen dark overlay ── */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-50 flex flex-col"
            style={{ backgroundColor: "#0D1B2A", top: isScrolled ? "64px" : "104px" }}
          >
            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-5 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>

            <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
              {/* About */}
              {preServiceLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-3 text-[15px] font-medium text-white border-b border-white/8"
                  style={{ borderBottomColor: "rgba(255,255,255,0.08)" }}
                >
                  <span
                    className="w-1 h-5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#C0392B" }}
                  />
                  {link.label}
                </Link>
              ))}

              {/* Services accordion */}
              <div>
                <div
                  className="flex items-center justify-between py-3 border-b"
                  style={{ borderBottomColor: "rgba(255,255,255,0.08)" }}
                >
                  <a
                    href="/hvac-and-plumbing-seo"
                    className="flex items-center gap-3 text-[15px] font-medium text-white flex-1"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateMobile("/services");
                    }}
                  >
                    <span
                      className="w-1 h-5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#C0392B" }}
                    />
                    Services
                  </a>
                  <button
                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                    className="p-1 text-white/60 hover:text-white transition-colors"
                    aria-label="Toggle services"
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${isMegaMenuOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {isMegaMenuOpen && (
                  <div
                    className="ml-4 pl-3 py-3 mb-1"
                    style={{ borderLeft: "2px solid rgba(192,57,43,0.4)" }}
                  >
                    {serviceHubs.map((hub, i) => (
                      <div key={i} className="mb-4">
                        <a
                          href={hub.href}
                          className="text-[11px] font-bold uppercase tracking-widest mb-2 block"
                          style={{ color: "#C0392B" }}
                          onClick={(e) => {
                            e.preventDefault();
                            navigateMobile(hub.href);
                          }}
                        >
                          {hub.label}
                        </a>
                        {hub.spokes.length > 0 && (
                          <ul className="space-y-1.5 ml-1">
                            {hub.spokes.map((spoke, j) => (
                              <li key={j}>
                                <a
                                  href={spoke.href}
                                  className="text-[13px] text-white/60 hover:text-white transition-colors"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    navigateMobile(spoke.href);
                                  }}
                                >
                                  {spoke.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Post-service links */}
              {postServiceLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-3 text-[15px] font-medium text-white border-b"
                  style={{ borderBottomColor: "rgba(255,255,255,0.08)" }}
                >
                  <span
                    className="w-1 h-5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#C0392B" }}
                  />
                  {link.label}
                </Link>
              ))}

              {/* Partner Tools */}
              <Link
                to="/partner-tools"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 py-3 text-[15px] font-medium text-white border-b"
                style={{ borderBottomColor: "rgba(255,255,255,0.08)" }}
              >
                <span
                  className="w-1 h-5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#C0392B" }}
                />
                Partner Tools
              </Link>

              {/* Phone + CTA */}
              <div className="pt-6 space-y-4">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 text-white"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" style={{ color: "#C0392B" }} />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                      Call Us Today
                    </div>
                    <div className="text-[16px] font-bold">{PHONE_NUMBER}</div>
                  </div>
                </a>

                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full font-bold text-white text-[15px] tracking-[0.04em] transition-colors"
                  style={{
                    backgroundColor: "#C0392B",
                    borderRadius: "4px",
                    padding: "14px 28px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#A93226")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C0392B")}
                >
                  Schedule a Call →
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer so page content clears the fixed header */}
      <div style={{ height: isScrolled ? "64px" : "104px" }} className="transition-all duration-300" />
    </>
  );
};

export default Header;
