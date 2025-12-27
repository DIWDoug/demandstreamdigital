import { MapPin, Phone } from "lucide-react";
import SubtleOrbs from "@/components/SubtleOrbs";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="py-16 bg-background border-t border-border relative overflow-hidden" role="contentinfo">
      <SubtleOrbs variant="bottom-left" />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Dialed-In Web
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              White-label local marketing fulfillment for agencies that value execution and long-term partnerships.
            </p>
            <p className="text-xs text-text-muted">
              Serving agencies across the US & Canada since 2019.
            </p>
          </div>

          {/* Quick Links - Local focused only */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <MapPin className="h-4 w-4 shrink-0" />
                Dallas, TX 75226
              </li>
              <li>
                <a 
                  href="tel:2143072995"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  (214) 307-2995
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} Dialed-In Web. All Rights Reserved.
            </p>
            <a 
              href="#"
              className="text-xs text-text-muted hover:text-text-secondary transition-colors"
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
