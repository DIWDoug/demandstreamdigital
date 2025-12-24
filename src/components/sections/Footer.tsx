import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="py-16 bg-[hsl(220,25%,5%)] border-t border-border/20" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand - increased contrast */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Dialed-In Web
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              White-label local marketing fulfillment for agencies that value execution and long-term partnerships.
            </p>
            <p className="text-xs text-text-muted/60">
              Serving agencies across the US & Canada since 2019.
            </p>
          </div>

          {/* Quick Links - minimal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - minimal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <MapPin className="h-4 w-4 shrink-0 text-text-muted/60" />
                Dallas, TX 75226
              </li>
              <li>
                <a 
                  href="tel:2143072995"
                  className="flex items-center gap-3 text-sm text-text-muted hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-text-muted/60" />
                  (214) 307-2995
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar - quiet */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-text-muted/50">
              © {new Date().getFullYear()} Dialed-In Web. All Rights Reserved.
            </p>
            <a 
              href="#"
              className="text-xs text-text-muted/50 hover:text-text-muted transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;