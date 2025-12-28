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
            {/* Circular Diagram */}
            <div className="relative aspect-square max-w-md lg:max-w-lg mx-auto w-full">
              {/* Outer circle */}
              <div className="absolute inset-6 rounded-full border-2 border-dashed border-gray-300" />
              
              {/* Center icon only - no text overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-cta/10 border-2 border-cta/30 flex items-center justify-center">
                  <activeArea.icon className="h-7 w-7 lg:h-8 lg:w-8 text-cta" />
                </div>
              </div>

              {/* Surrounding nodes - larger and better positioned */}
              {systemAreas.map((area, index) => {
                const position = nodePositions[index];
                const isActive = area.id === activeArea.id;
                
                return (
                  <button
                    key={area.id}
                    onClick={() => setActiveArea(area)}
                    className={`absolute w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-cta text-white scale-110 shadow-lg" 
                        : "bg-white border border-gray-200 text-gray-500 hover:border-cta/50 hover:text-cta shadow-sm"
                    }`}
                    style={position}
                    title={area.label}
                  >
                    <area.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                  </button>
                );
              })}

              {/* Dashed connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                {/* Horizontal line */}
                <line x1="50" y1="200" x2="350" y2="200" stroke="#d1d5db" strokeWidth="1" strokeDasharray="6,6" />
                {/* Vertical line */}
                <line x1="200" y1="50" x2="200" y2="350" stroke="#d1d5db" strokeWidth="1" strokeDasharray="6,6" />
                {/* Diagonal lines */}
                <line x1="80" y1="80" x2="320" y2="320" stroke="#d1d5db" strokeWidth="1" strokeDasharray="6,6" />
                <line x1="320" y1="80" x2="80" y2="320" stroke="#d1d5db" strokeWidth="1" strokeDasharray="6,6" />
              </svg>
            </div>

            {/* Area List */}
            <div className="space-y-3">
              {systemAreas.map((area) => {
                const isActive = area.id === activeArea.id;
                
                return (
                  <button
                    key={area.id}
                    onClick={() => setActiveArea(area)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left ${
                      isActive 
                        ? "bg-white border-cta/30 shadow-sm" 
                        : "bg-white/50 border-gray-200 hover:bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-cta/10" : "bg-gray-100"
                    }`}>
                      <area.icon className={`h-5 w-5 ${isActive ? "text-cta" : "text-gray-500"}`} />
                    </div>
                    <span className={`font-medium ${isActive ? "text-gray-900" : "text-gray-700"}`}>
                      {area.label}
                    </span>
                    {isActive && (
                      <span className="ml-auto text-xs font-medium uppercase tracking-wider text-cta bg-cta/10 px-2 py-1 rounded">
                        Active
                      </span>
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
