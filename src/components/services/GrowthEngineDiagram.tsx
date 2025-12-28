import { useState } from "react";
import { Eye, Award, MousePointerClick, BarChart3, RefreshCcw, Link2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { 
    id: "local-seo",
    label: "Local SEO", 
    icon: Eye, 
    slug: "local-seo",
    description: "Organic presence in local search and Maps. The foundation that makes every other channel more effective.",
    position: { x: 50, y: 5 }
  },
  { 
    id: "authority",
    label: "Authority Building", 
    icon: Award,
    slug: "authority",
    description: "Build trust and credibility through strategic content, citations, and reputation management.",
    position: { x: 88, y: 28 }
  },
  { 
    id: "google-maps",
    label: "Conversion Infrastructure", 
    icon: Link2,
    slug: "google-maps",
    description: "Google Business Profile optimization, landing pages, and conversion tracking that turns traffic into leads.",
    position: { x: 88, y: 72 }
  },
  { 
    id: "email",
    label: "Email & Retention", 
    icon: RefreshCcw,
    slug: "email-marketing",
    description: "Nurture leads and retain customers through automated email sequences and targeted campaigns.",
    position: { x: 50, y: 95 }
  },
  { 
    id: "reporting",
    label: "Measurement & Reporting", 
    icon: BarChart3,
    slug: "reporting",
    description: "White-label dashboards and actionable insights that demonstrate ROI to your clients.",
    position: { x: 12, y: 72 }
  },
  { 
    id: "paid-media",
    label: "Paid Media", 
    icon: MousePointerClick,
    slug: "paid-media",
    description: "Strategic paid campaigns across Google Ads and Meta to accelerate growth and fill pipeline gaps.",
    position: { x: 12, y: 28 }
  },
];

const GrowthEngineDiagram = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-16 lg:py-24 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              The Complete System
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Digital Inbound Marketing{" "}
              <span className="text-cta">as a Growth Engine</span>
            </h2>
            <div className="w-12 h-1 bg-cta mb-6" />
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Effective local marketing isn't siloed. These six execution areas work 
              together as a coordinated system—activated and prioritized based on 
              scope, not bundled by default.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Each service can be engaged individually or as part of a complete 
              inbound marketing engagement. Click any area on the diagram to learn more.
            </p>

            {/* Service Checklist */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`flex items-center gap-2 text-left transition-colors ${
                    activeService.id === service.id 
                      ? "text-cta font-medium" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <svg 
                    className={`w-4 h-4 flex-shrink-0 ${
                      activeService.id === service.id ? "text-cta" : "text-muted-foreground"
                    }`} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm">{service.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right - Interactive Diagram */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              {/* Circular Ring */}
              <div className="absolute inset-12 rounded-full border-2 border-cta/40" />
              
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {/* Hexagonal connections */}
                <polygon 
                  points="50,5 88,28 88,72 50,95 12,72 12,28" 
                  fill="none" 
                  stroke="hsl(var(--cta) / 0.3)" 
                  strokeWidth="0.8"
                />
                {/* Inner cross connections */}
                <line x1="50" y1="5" x2="50" y2="95" stroke="hsl(var(--cta) / 0.15)" strokeWidth="0.5" />
                <line x1="12" y1="28" x2="88" y2="72" stroke="hsl(var(--cta) / 0.15)" strokeWidth="0.5" />
                <line x1="12" y1="72" x2="88" y2="28" stroke="hsl(var(--cta) / 0.15)" strokeWidth="0.5" />
              </svg>

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-16">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {activeService.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {activeService.description}
                  </p>
                </div>
              </div>

              {/* Service Icons */}
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  style={{
                    left: `${service.position.x}%`,
                    top: `${service.position.y}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-3.5 rounded-full transition-all duration-300 ${
                    activeService.id === service.id
                      ? "bg-cta text-white shadow-lg shadow-cta/30 scale-110"
                      : "bg-gray-900 text-white hover:bg-cta hover:scale-105"
                  }`}
                >
                  <service.icon className="h-5 w-5" />
                </button>
              ))}
            </div>

            {/* CTA Link */}
            <div className="text-center mt-6">
              <Link 
                to={`/inbound-marketing-services/${activeService.slug}`}
                className="inline-flex items-center gap-2 text-cta font-medium hover:underline transition-colors"
              >
                Learn more about {activeService.label} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthEngineDiagram;
