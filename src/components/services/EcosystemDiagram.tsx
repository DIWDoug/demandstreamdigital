import { Link } from "react-router-dom";
import { Search, MapPin, Sparkles, Star, Mail, Globe, BarChart3, RotateCcw } from "lucide-react";
import { useState } from "react";

const services = [
  { 
    id: "local-seo",
    label: "Local SEO", 
    icon: Search, 
    description: "Organic visibility in local search results and Google Maps. The foundation that makes every other channel more effective.",
    slug: "local-seo"
  },
  { 
    id: "google-maps",
    label: "Google Maps", 
    icon: MapPin,
    description: "Google Business Profile optimization and local pack visibility for high-intent traffic.",
    slug: "google-maps"
  },
  { 
    id: "paid-media",
    label: "Paid Media", 
    icon: Sparkles,
    description: "Search and social advertising that captures demand with intentional spend.",
    slug: "paid-media"
  },
  { 
    id: "reputation",
    label: "Reputation", 
    icon: Star,
    description: "Review management and trust signals that build credibility and drive conversions.",
    slug: "authority"
  },
  { 
    id: "email",
    label: "Email Marketing", 
    icon: Mail,
    description: "Retention and re-engagement to maximize client lifetime value.",
    slug: "email-marketing"
  },
  { 
    id: "authority",
    label: "Authority Building", 
    icon: Globe,
    description: "Trust signals that support rankings, Maps visibility, and conversion confidence.",
    slug: "authority"
  },
  { 
    id: "reporting",
    label: "Reporting", 
    icon: BarChart3,
    description: "Measurement infrastructure that keeps everyone aligned on what matters.",
    slug: "reporting"
  },
  { 
    id: "retargeting",
    label: "Retargeting", 
    icon: RotateCcw,
    description: "Re-engage past visitors and nurture leads that aren't ready to convert.",
    slug: "email-marketing"
  },
];

// Positions for 8 nodes around the circle
const nodePositions = [
  { top: "5%", left: "50%", transform: "translateX(-50%)" },      // top
  { top: "15%", right: "12%" },                                    // top-right
  { top: "45%", right: "0%" },                                     // right
  { bottom: "15%", right: "12%" },                                 // bottom-right
  { bottom: "5%", left: "50%", transform: "translateX(-50%)" },   // bottom
  { bottom: "15%", left: "12%" },                                  // bottom-left
  { top: "45%", left: "0%" },                                      // left
  { top: "15%", left: "12%" },                                     // top-left
];

const EcosystemDiagram = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-20 lg:py-28 bg-[#f8f7f4]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 max-w-2xl">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              The Bigger Picture
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              One Piece of the{" "}
              <span className="text-cta">360° Ecosystem</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The most effective local marketing strategies aren't siloed. They're interconnected. 
              When organic visibility, paid media, reputation, and email work together, results compound. 
              We help agencies deliver the complete picture.
            </p>
          </div>

          {/* Diagram + List Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Circular Diagram */}
            <div className="relative aspect-square max-w-lg mx-auto w-full">
              {/* Outer circle */}
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-gray-300" />
              
              {/* Center content */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-48">
                <div className="w-12 h-12 rounded-full bg-cta/10 border border-cta/30 flex items-center justify-center mx-auto mb-3">
                  <activeService.icon className="h-5 w-5 text-cta" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {activeService.label}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Surrounding nodes */}
              {services.map((service, index) => {
                const position = nodePositions[index];
                const isActive = service.id === activeService.id;
                
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    className={`absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-cta text-white scale-110 shadow-lg" 
                        : "bg-white border border-gray-200 text-gray-500 hover:border-cta/50 hover:text-cta"
                    }`}
                    style={position}
                  >
                    <service.icon className="h-5 w-5" />
                  </button>
                );
              })}

              {/* Dashed connection lines (decorative) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                {/* Horizontal line through center */}
                <line x1="80" y1="200" x2="320" y2="200" stroke="#d1d5db" strokeWidth="1" strokeDasharray="6,6" />
                {/* Vertical line through center */}
                <line x1="200" y1="80" x2="200" y2="320" stroke="#d1d5db" strokeWidth="1" strokeDasharray="6,6" />
              </svg>
            </div>

            {/* Service List */}
            <div className="space-y-3">
              {services.map((service) => {
                const isActive = service.id === activeService.id;
                
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left ${
                      isActive 
                        ? "bg-white border-cta/30 shadow-sm" 
                        : "bg-white/50 border-gray-200 hover:bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-cta/10" : "bg-gray-100"
                    }`}>
                      <service.icon className={`h-5 w-5 ${isActive ? "text-cta" : "text-gray-500"}`} />
                    </div>
                    <span className={`font-medium ${isActive ? "text-gray-900" : "text-gray-700"}`}>
                      {service.label}
                    </span>
                    {isActive && (
                      <span className="ml-auto text-xs font-medium uppercase tracking-wider text-cta bg-cta/10 px-2 py-1 rounded">
                        Selected
                      </span>
                    )}
                  </button>
                );
              })}
              
              {/* View all link */}
              <Link 
                to={`/services/${activeService.slug}`}
                className="block text-center text-sm text-cta font-medium hover:underline mt-6"
              >
                View {activeService.label} details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemDiagram;
