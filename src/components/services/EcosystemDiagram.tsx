import { Eye, Award, MousePointerClick, Wrench, BarChart3, RefreshCcw, Check } from "lucide-react";
import { useState } from "react";

const systemAreas = [
  { 
    id: "visibility",
    label: "Local SEO", 
    icon: Eye, 
    description: "Organic presence in local search and Maps. The foundation that makes every other channel more effective."
  },
  { 
    id: "authority",
    label: "Authority Building", 
    icon: Award,
    description: "Trust signals that support rankings, conversions, and long-term brand credibility."
  },
  { 
    id: "paid-media",
    label: "Paid Media", 
    icon: MousePointerClick,
    description: "Demand capture through intentional spend. Search, social, and retargeting with clear measurement."
  },
  { 
    id: "conversion",
    label: "Conversion Infrastructure", 
    icon: Wrench,
    description: "Landing pages, forms, and tracking that turn traffic into leads and leads into customers."
  },
  { 
    id: "measurement",
    label: "Measurement & Reporting", 
    icon: BarChart3,
    description: "Clarity without vanity metrics. Dashboards and reports that inform decisions."
  },
  { 
    id: "retention",
    label: "Email & Retention", 
    icon: RefreshCcw,
    description: "Email, retargeting, and nurture that stabilize performance and maximize lifetime value."
  },
];

// Positions for 6 nodes around the circle (adjusted to sit on the ring)
const nodePositions = [
  { top: "2%", left: "50%", transform: "translateX(-50%)" },      // top
  { top: "22%", right: "2%" },                                     // top-right
  { bottom: "22%", right: "2%" },                                  // bottom-right
  { bottom: "2%", left: "50%", transform: "translateX(-50%)" },   // bottom
  { bottom: "22%", left: "2%" },                                   // bottom-left
  { top: "22%", left: "2%" },                                      // top-left
];

const EcosystemDiagram = () => {
  const [activeArea, setActiveArea] = useState(systemAreas[0]);

  return (
    <section className="py-20 lg:py-28 section-light relative">
      {/* Gradient transition from dark section */}
      <div className="section-divider absolute top-0" />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Two-column layout: Content left, Diagram right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Header + Service Checklist */}
            <div>
              <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
                The Complete System
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Digital Inbound Marketing{" "}
                <span className="text-cta">as a Growth Engine</span>
              </h2>
              
              {/* Green underline */}
              <div className="w-16 h-1 bg-cta rounded-full mb-6" />
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Effective local marketing isn't siloed. These six execution areas work together 
                as a coordinated system—activated and prioritized based on scope, not bundled by default.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                Each service can be engaged individually or as part of a complete inbound marketing 
                engagement. Click any area on the diagram to learn more.
              </p>

              {/* Service Checklist - 2 columns */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {systemAreas.map((area) => {
                  const isActive = area.id === activeArea.id;
                  return (
                    <button
                      key={area.id}
                      onClick={() => setActiveArea(area)}
                      className={`flex items-center gap-3 text-left transition-colors ${
                        isActive ? "text-cta font-medium" : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      <Check className={`h-5 w-5 flex-shrink-0 ${isActive ? "text-cta" : "text-cta/70"}`} />
                      <span>{area.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Interactive Diagram */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative aspect-square w-full max-w-sm sm:max-w-md lg:max-w-lg">
                {/* Solid outer ring - green */}
                <div className="absolute inset-6 sm:inset-8 rounded-full border-[3px] border-cta/60" />
                
                {/* Inner connecting lines forming hexagon */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                  <polygon 
                    points="200,30 370,115 370,285 200,370 30,285 30,115" 
                    fill="none" 
                    stroke="hsl(76, 42%, 41%)" 
                    strokeWidth="2" 
                    strokeOpacity="0.25"
                  />
                </svg>

                {/* Center text content */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-36 sm:w-44 lg:w-52 px-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {activeArea.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {activeArea.description}
                  </p>
                </div>

                {/* Surrounding nodes - dark circles with white icons */}
                {systemAreas.map((area, index) => {
                  const position = nodePositions[index];
                  const isActive = area.id === activeArea.id;
                  
                  return (
                    <button
                      key={area.id}
                      onClick={() => setActiveArea(area)}
                      className={`absolute w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                        isActive 
                          ? "bg-cta text-white scale-110 ring-4 ring-cta/30" 
                          : "bg-gray-900 text-white hover:bg-gray-800"
                      }`}
                      style={position}
                      title={area.label}
                    >
                      <area.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemDiagram;
