import { Eye, Award, MousePointerClick, Wrench, BarChart3, RefreshCcw } from "lucide-react";
import { useState } from "react";

const systemAreas = [
  { 
    id: "visibility",
    label: "Visibility", 
    icon: Eye, 
    description: "Organic presence in local search and Maps. The foundation that makes every other channel more effective."
  },
  { 
    id: "authority",
    label: "Authority & Trust", 
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
    label: "Retention & Re-engagement", 
    icon: RefreshCcw,
    description: "Email, retargeting, and nurture that stabilize performance and maximize lifetime value."
  },
];

// Positions for 6 nodes around the circle
const nodePositions = [
  { top: "5%", left: "50%", transform: "translateX(-50%)" },      // top
  { top: "25%", right: "5%" },                                     // top-right
  { bottom: "25%", right: "5%" },                                  // bottom-right
  { bottom: "5%", left: "50%", transform: "translateX(-50%)" },   // bottom
  { bottom: "25%", left: "5%" },                                   // bottom-left
  { top: "25%", left: "5%" },                                      // top-left
];

const EcosystemDiagram = () => {
  const [activeArea, setActiveArea] = useState(systemAreas[0]);

  return (
    <section className="py-20 lg:py-28 section-light relative">
      {/* Gradient transition from dark section */}
      <div className="section-divider absolute top-0" />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 max-w-3xl">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              The Complete System
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital Inbound Marketing{" "}
              <span className="text-cta">as a Growth Engine</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Effective local marketing isn't siloed. These six execution areas work together 
              as a coordinated system—activated and prioritized based on scope, not bundled by default.
            </p>
          </div>

          {/* Diagram + List Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Circular Diagram with center text */}
            <div className="flex flex-col items-center">
              <div className="relative aspect-square max-w-sm sm:max-w-md lg:max-w-lg w-full">
                {/* Solid outer ring - green */}
                <div className="absolute inset-8 sm:inset-10 rounded-full border-[3px] border-cta/60" />
                
                {/* Inner connecting lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                  {/* Connection web between nodes */}
                  <line x1="200" y1="40" x2="360" y2="120" stroke="hsl(76, 42%, 41%)" strokeWidth="2" strokeOpacity="0.3" />
                  <line x1="360" y1="120" x2="360" y2="280" stroke="hsl(76, 42%, 41%)" strokeWidth="2" strokeOpacity="0.3" />
                  <line x1="360" y1="280" x2="200" y2="360" stroke="hsl(76, 42%, 41%)" strokeWidth="2" strokeOpacity="0.3" />
                  <line x1="200" y1="360" x2="40" y2="280" stroke="hsl(76, 42%, 41%)" strokeWidth="2" strokeOpacity="0.3" />
                  <line x1="40" y1="280" x2="40" y2="120" stroke="hsl(76, 42%, 41%)" strokeWidth="2" strokeOpacity="0.3" />
                  <line x1="40" y1="120" x2="200" y2="40" stroke="hsl(76, 42%, 41%)" strokeWidth="2" strokeOpacity="0.3" />
                </svg>

                {/* Center text content */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-40 sm:w-48 lg:w-56 px-2">
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

            {/* Area List */}
            <div className="space-y-3">
              {systemAreas.map((area) => {
                const isActive = area.id === activeArea.id;
                
                return (
                  <button
                    key={area.id}
                    onClick={() => setActiveArea(area)}
                    className={`w-full p-4 rounded-xl border transition-all duration-200 text-left ${
                      isActive 
                        ? "bg-white border-cta/30 shadow-sm" 
                        : "bg-white/50 border-gray-200 hover:bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isActive ? "bg-cta/10" : "bg-gray-100"
                      }`}>
                        <area.icon className={`h-5 w-5 ${isActive ? "text-cta" : "text-gray-500"}`} />
                      </div>
                      <span className={`font-medium ${isActive ? "text-gray-900" : "text-gray-700"}`}>
                        {area.label}
                      </span>
                      {isActive && (
                        <span className="ml-auto text-xs font-medium uppercase tracking-wider text-cta bg-cta/10 px-2 py-1 rounded flex-shrink-0">
                          Active
                        </span>
                      )}
                    </div>
                    {/* Expanded description */}
                    {isActive && (
                      <p className="mt-3 pl-14 text-sm text-gray-600 leading-relaxed animate-fade-in">
                        {area.description}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-gray-500 text-sm mt-12 max-w-2xl mx-auto">
            Each area can be engaged individually or as part of a coordinated system. 
            Scope determines which areas are activated and how they're prioritized.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemDiagram;
