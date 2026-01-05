import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import SEOEducationalContent from "@/components/calculators/SEOEducationalContent";
import AgencyPartnerVideos from "@/components/calculators/AgencyPartnerVideos";
import PricingComparisonTable from "@/components/calculators/PricingComparisonTable";
import { useState, useMemo } from "react";
import { Calculator, MapPin, Globe, Zap, FileText, Swords, Calendar, TrendingUp, DollarSign, Info, Building, ChevronDown, X, Search, Phone } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { metros, Metro, tierMultipliers, searchMetros, formatPopulation } from "@/data/metros";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

// Industry presets with default competition levels - focused on local small businesses
const industryPresets = [
  // High Competition
  { id: "legal", name: "Legal / Law Firms", competition: "high", audience: "local" },
  { id: "medical", name: "Medical / Healthcare", competition: "high", audience: "local" },
  { id: "dental", name: "Dental Practices", competition: "high", audience: "local" },
  { id: "medspa", name: "Med Spa / Aesthetics", competition: "high", audience: "local" },
  { id: "plastic-surgery", name: "Plastic Surgery", competition: "high", audience: "local" },
  { id: "chiropractic", name: "Chiropractic", competition: "high", audience: "local" },
  { id: "realestate", name: "Real Estate Agents", competition: "high", audience: "local" },
  { id: "mortgage", name: "Mortgage Brokers", competition: "high", audience: "local" },
  // Medium Competition
  { id: "hvac", name: "HVAC / Heating & Cooling", competition: "medium", audience: "local" },
  { id: "plumbing", name: "Plumbing", competition: "medium", audience: "local" },
  { id: "electrical", name: "Electricians", competition: "medium", audience: "local" },
  { id: "roofing", name: "Roofing", competition: "medium", audience: "local" },
  { id: "garage-door", name: "Garage Door Services", competition: "medium", audience: "local" },
  { id: "automotive", name: "Auto Repair / Mechanics", competition: "medium", audience: "local" },
  { id: "towing", name: "Towing Services", competition: "medium", audience: "local" },
  { id: "pest", name: "Pest Control", competition: "medium", audience: "local" },
  { id: "restaurant", name: "Restaurants / Cafes", competition: "medium", audience: "local" },
  { id: "fitness", name: "Fitness / Gym", competition: "medium", audience: "local" },
  { id: "veterinary", name: "Veterinary / Pet Services", competition: "medium", audience: "local" },
  { id: "optometry", name: "Optometry / Eye Care", competition: "medium", audience: "local" },
  { id: "accounting", name: "Accounting / Bookkeeping", competition: "medium", audience: "local" },
  { id: "insurance", name: "Insurance Agents", competition: "medium", audience: "local" },
  { id: "construction", name: "General Contractors", competition: "medium", audience: "local" },
  { id: "home-remodel", name: "Home Remodeling", competition: "medium", audience: "local" },
  // Lower Competition
  { id: "spa", name: "Spa / Massage / Beauty", competition: "low", audience: "local" },
  { id: "landscaping", name: "Landscaping / Lawn Care", competition: "low", audience: "local" },
  { id: "cleaning", name: "Cleaning Services", competition: "low", audience: "local" },
  { id: "moving", name: "Moving / Storage", competition: "low", audience: "local" },
  { id: "photography", name: "Photography / Videography", competition: "low", audience: "local" },
  { id: "florist", name: "Florist / Event Florals", competition: "low", audience: "local" },
  { id: "tutoring", name: "Tutoring / Education", competition: "low", audience: "local" },
  { id: "daycare", name: "Daycare / Childcare", competition: "low", audience: "local" },
  { id: "senior-care", name: "Senior Care / Home Health", competition: "low", audience: "local" },
  { id: "locksmith", name: "Locksmith", competition: "low", audience: "local" },
  { id: "appliance-repair", name: "Appliance Repair", competition: "low", audience: "local" },
  { id: "pool-service", name: "Pool Service / Cleaning", competition: "low", audience: "local" },
  { id: "junk-removal", name: "Junk Removal", competition: "low", audience: "local" },
  { id: "pressure-washing", name: "Pressure Washing", competition: "low", audience: "local" },
  { id: "window-cleaning", name: "Window Cleaning", competition: "low", audience: "local" },
  { id: "tree-service", name: "Tree Service / Arborist", competition: "low", audience: "local" },
  { id: "other", name: "Other Local Business", competition: "", audience: "local" }
];

// Move these outside the component to prevent recreation on every render
const SelectButton = ({ 
  selected, 
  onClick, 
  children,
  className 
}: { 
  selected: boolean; 
  onClick: () => void; 
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "px-4 py-3 rounded-lg border text-sm font-medium transition-all text-center",
      selected 
        ? "bg-cta/10 border-cta text-cta" 
        : "bg-surface-dark border-border/50 text-text-secondary hover:border-accent-blue/50 hover:text-foreground",
      className
    )}
  >
    {children}
  </button>
);

const QuestionSection = ({
  icon: Icon,
  title,
  tooltip,
  children
}: {
  icon: React.ElementType;
  title: string;
  tooltip?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-accent-blue" />
      <span className="text-foreground font-medium">{title}</span>
      {tooltip && (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button type="button" className="text-text-muted hover:text-accent-blue transition-colors">
                <Info className="h-3.5 w-3.5" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-xs bg-surface-elevated border-border/50 text-foreground z-50">
              <p className="text-sm font-body">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
    {children}
  </div>
);

// Popular metros for quick selection
const popularMetros = metros.filter(m => 
  ["Dallas-Fort Worth", "Houston", "Phoenix", "Atlanta", "Miami", "Denver", "Austin", "Nashville", "Tampa Bay", "Charlotte"].includes(m.name)
);

const SEOCalculator = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [selectedMetro, setSelectedMetro] = useState<Metro | null>(null);
  const [metroSearch, setMetroSearch] = useState("");
  const [showMetroDropdown, setShowMetroDropdown] = useState(false);
  const [locations, setLocations] = useState<string>("");
  const [audience, setAudience] = useState<string>("");
  const [aggressiveness, setAggressiveness] = useState<string>("");
  const [pages, setPages] = useState<string>("");
  const [competition, setCompetition] = useState<string>("");
  const [websiteAge, setWebsiteAge] = useState<string>("");
  const [currentRankings, setCurrentRankings] = useState<string>("");
  const [clientHourlyRate, setClientHourlyRate] = useState<number>(120);

  const metroSearchResults = useMemo(() => searchMetros(metroSearch), [metroSearch]);

  const applyIndustryPreset = (industryId: string) => {
    const preset = industryPresets.find(i => i.id === industryId);
    if (preset) {
      setSelectedIndustry(industryId);
      if (preset.competition) setCompetition(preset.competition);
      if (preset.audience) setAudience(preset.audience);
    }
    setShowIndustryDropdown(false);
  };

  const selectMetro = (metro: Metro) => {
    setSelectedMetro(metro);
    setMetroSearch("");
    setShowMetroDropdown(false);
  };

  const clearMetro = () => {
    setSelectedMetro(null);
    setMetroSearch("");
  };

  const selectedIndustryName = industryPresets.find(i => i.id === selectedIndustry)?.name || "";

  const isComplete = locations && audience && aggressiveness && pages && competition && websiteAge && currentRankings;

  const estimate = useMemo(() => {
    if (!isComplete) return null;

    // Base cost by competition level - high competition starts much higher
    const baseByCompetition: Record<string, { low: number; high: number }> = {
      "low": { low: 500, high: 750 },
      "medium": { low: 750, high: 1100 },
      "high": { low: 1200, high: 1800 }
    };

    // Minimum floors by competition and metro tier
    // High competition in larger markets needs realistic minimums
    const getMinimumFloor = (comp: string, metroTier: string | null): number => {
      if (comp === "high") {
        if (metroTier === "mega") return 2500;
        if (metroTier === "major") return 2000;
        if (metroTier === "large") return 1800;
        if (metroTier === "medium") return 1500;
        return 1200; // small or no metro selected
      }
      if (comp === "medium") {
        if (metroTier === "mega") return 1500;
        if (metroTier === "major") return 1200;
        if (metroTier === "large") return 1000;
        return 800;
      }
      // Low competition
      if (metroTier === "mega") return 900;
      if (metroTier === "major") return 750;
      return 500;
    };

    const base = baseByCompetition[competition] || { low: 500, high: 750 };
    let baseLow = base.low;
    let baseHigh = base.high;

    // Location multiplier
    const locationMultipliers: Record<string, { low: number; high: number }> = {
      "none": { low: 0.85, high: 0.85 },
      "1-5": { low: 1, high: 1.1 },
      "6-20": { low: 1.5, high: 1.7 },
      "21-50": { low: 2.2, high: 2.6 },
      "50+": { low: 3.5, high: 4.5 }
    };

    // Audience multiplier
    const audienceMultipliers: Record<string, { low: number; high: number }> = {
      "local": { low: 1, high: 1 },
      "regional": { low: 1.25, high: 1.4 },
      "national": { low: 1.7, high: 2 },
      "global": { low: 2.2, high: 2.6 }
    };

    // Aggressiveness multiplier
    const aggressivenessMultipliers: Record<string, { low: number; high: number }> = {
      "steady": { low: 1, high: 1 },
      "moderate": { low: 1.25, high: 1.35 },
      "aggressive": { low: 1.5, high: 1.7 }
    };

    // Pages multiplier
    const pagesMultipliers: Record<string, { low: number; high: number }> = {
      "1-10": { low: 1, high: 1 },
      "11-25": { low: 1.15, high: 1.25 },
      "26-50": { low: 1.3, high: 1.45 },
      "50+": { low: 1.5, high: 1.75 }
    };

    // Website age multiplier (newer = more work needed)
    const ageMultipliers: Record<string, { low: number; high: number }> = {
      "new": { low: 1.25, high: 1.35 },
      "1-3": { low: 1.1, high: 1.15 },
      "3+": { low: 1, high: 1 }
    };

    // Rankings multiplier (worse rankings = more work)
    const rankingsMultipliers: Record<string, { low: number; high: number }> = {
      "top10": { low: 1, high: 1 },
      "11-30": { low: 1.1, high: 1.15 },
      "31-100": { low: 1.2, high: 1.3 },
      "100+": { low: 1.35, high: 1.5 }
    };

    // Metro tier multiplier - more aggressive for high competition
    const getMetroMultiplier = (comp: string, tier: string | null): number => {
      if (!tier) return 1;
      
      // High competition industries are more affected by metro size
      if (comp === "high") {
        const highCompTiers: Record<string, number> = {
          small: 0.9,
          medium: 1.05,
          large: 1.2,
          major: 1.4,
          mega: 1.65
        };
        return highCompTiers[tier] || 1;
      }
      
      // Medium/low competition use standard tier multipliers
      return tierMultipliers[tier as keyof typeof tierMultipliers] || 1;
    };

    const metroTier = selectedMetro?.tier || null;
    const metroMult = getMetroMultiplier(competition, metroTier);
    const minimumFloor = getMinimumFloor(competition, metroTier);

    const locMult = locationMultipliers[locations] || { low: 1, high: 1 };
    const audMult = audienceMultipliers[audience] || { low: 1, high: 1 };
    const aggMult = aggressivenessMultipliers[aggressiveness] || { low: 1, high: 1 };
    const pageMult = pagesMultipliers[pages] || { low: 1, high: 1 };
    const ageMult = ageMultipliers[websiteAge] || { low: 1, high: 1 };
    const rankMult = rankingsMultipliers[currentRankings] || { low: 1, high: 1 };

    const totalMultLow = locMult.low * audMult.low * aggMult.low * pageMult.low * ageMult.low * rankMult.low * metroMult;
    const totalMultHigh = locMult.high * audMult.high * aggMult.high * pageMult.high * ageMult.high * rankMult.high * metroMult;

    // Calculate and apply minimum floor
    let monthlyLow = Math.round(baseLow * totalMultLow / 50) * 50;
    let monthlyHigh = Math.round(baseHigh * totalMultHigh / 50) * 50;

    // Enforce minimum floors based on competition and metro
    monthlyLow = Math.max(monthlyLow, minimumFloor);
    monthlyHigh = Math.max(monthlyHigh, Math.round(minimumFloor * 1.4 / 50) * 50);

    // Estimate timeline based on competition and rankings
    let timelineMonths = 6;
    if (competition === "high") timelineMonths += 4;
    if (competition === "medium") timelineMonths += 2;
    if (currentRankings === "100+") timelineMonths += 3;
    if (currentRankings === "31-100") timelineMonths += 2;
    if (aggressiveness === "steady") timelineMonths += 2;
    if (metroTier === "mega" || metroTier === "major") timelineMonths += 2;

    return {
      monthlyLow,
      monthlyHigh,
      annualLow: monthlyLow * 12,
      annualHigh: monthlyHigh * 12,
      timelineMonths
    };
  }, [locations, audience, aggressiveness, pages, competition, websiteAge, currentRankings, selectedMetro, isComplete]);

  return (
    <>
      <Helmet>
        <title>SEO Growth Forecast Calculator for Agencies | Project Organic Traffic & Rankings | Dialed-in Web</title>
        <meta name="description" content="Forecast SEO outcomes and keyword growth. Dialed-in Web's calculator helps agencies pitch and plan scalable campaigns." />
        <link rel="canonical" href="https://dialedinweb.com/partner-tools/seo-calculator" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SEO Growth Forecast Calculator for Agencies | Project Organic Traffic & Rankings | Dialed-in Web" />
        <meta property="og:description" content="Forecast SEO outcomes and keyword growth. Dialed-in Web's calculator helps agencies pitch and plan scalable campaigns." />
        <meta property="og:url" content="https://dialedinweb.com/partner-tools/seo-calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dialed-In Web" />
        <meta property="og:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Growth Forecast Calculator for Agencies | Project Organic Traffic & Rankings | Dialed-in Web" />
        <meta name="twitter:description" content="Forecast SEO outcomes and keyword growth. Dialed-in Web's calculator helps agencies pitch and plan scalable campaigns." />
        <meta name="twitter:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
      </Helmet>
      
      <Header />
      
      <main className="pt-16">
        {/* Breadcrumbs */}
        <div className="bg-surface-dark pt-20 pb-4">
          <div className="container mx-auto px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/partner-tools" className="hover:text-foreground transition-colors">Partner Tools</Link>
              <span>/</span>
              <span className="text-foreground">Local SEO Cost Calculator</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-surface-dark via-surface-elevated to-surface-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cta/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta/10 text-cta text-sm font-medium mb-6">
                <Calculator className="h-4 w-4" />
                Agency Partner Tools
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Local SEO Cost Calculator
              </h1>
              <p className="text-text-secondary text-lg font-body">
                Estimate your client's monthly local SEO investment. Answer a few questions to get transparent white-label pricing for small business clients.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 lg:py-24 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-8">
                {/* Left Column - Inputs */}
                <div className="lg:col-span-3 space-y-6">
                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30 space-y-8">
                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-2">Tell us about the project</h2>
                      <p className="text-sm text-text-muted">Answer each question to calculate an estimated monthly investment.</p>
                    </div>

                    {/* Industry Preset Selector */}
                    <QuestionSection 
                      icon={Building} 
                      title="Select industry (optional)"
                      tooltip="Selecting an industry will auto-fill typical competition levels and audience reach."
                    >
                      <div className="relative">
                        <button 
                          type="button" 
                          onClick={() => setShowIndustryDropdown(!showIndustryDropdown)}
                          className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border/50 text-left flex items-center justify-between"
                        >
                          <span className={selectedIndustryName ? "text-foreground" : "text-text-muted"}>
                            {selectedIndustryName || "Choose an industry to auto-fill..."}
                          </span>
                          <ChevronDown className={cn("h-4 w-4 text-text-muted transition-transform", showIndustryDropdown && "rotate-180")} />
                        </button>
                        {showIndustryDropdown && (
                          <div className="absolute z-50 w-full mt-1 bg-surface-dark border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {industryPresets.map((industry) => (
                              <button
                                key={industry.id}
                                type="button"
                                onClick={() => applyIndustryPreset(industry.id)}
                                className={cn(
                                  "w-full px-4 py-2.5 text-left hover:bg-surface-elevated transition-colors flex items-center justify-between",
                                  selectedIndustry === industry.id && "bg-cta/10 text-cta"
                                )}
                              >
                                <span className="text-sm">{industry.name}</span>
                                {industry.competition && (
                                  <span className={cn(
                                    "text-xs px-2 py-0.5 rounded",
                                    industry.competition === "high" ? "bg-destructive/10 text-destructive" :
                                    industry.competition === "medium" ? "bg-yellow-500/10 text-yellow-500" :
                                    "bg-green-500/10 text-green-500"
                                  )}>
                                    {industry.competition} competition
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </QuestionSection>

                    {/* Metro/City Selector */}
                    <QuestionSection 
                      icon={MapPin} 
                      title="Target metro area (optional)"
                      tooltip="Larger metros have more competition, affecting the scope of work needed to rank."
                    >
                      <div className="space-y-3">
                        {/* Selected Metro Display */}
                        {selectedMetro ? (
                          <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-cta/10 border border-cta/30">
                            <div>
                              <span className="text-foreground font-medium">{selectedMetro.name}, {selectedMetro.state}</span>
                              <span className="ml-2 text-sm text-text-muted">({formatPopulation(selectedMetro.population)} pop)</span>
                              <span className={cn(
                                "ml-2 text-xs px-2 py-0.5 rounded capitalize",
                                selectedMetro.tier === "mega" ? "bg-destructive/10 text-destructive" :
                                selectedMetro.tier === "major" ? "bg-orange-500/10 text-orange-500" :
                                selectedMetro.tier === "large" ? "bg-yellow-500/10 text-yellow-500" :
                                selectedMetro.tier === "medium" ? "bg-blue-500/10 text-blue-500" :
                                "bg-green-500/10 text-green-500"
                              )}>
                                {selectedMetro.tier} market
                              </span>
                            </div>
                            <button 
                              type="button" 
                              onClick={clearMetro}
                              className="p-1 hover:bg-surface-dark rounded transition-colors"
                            >
                              <X className="h-4 w-4 text-text-muted" />
                            </button>
                          </div>
                        ) : (
                          <>
                            {/* Search Input */}
                            <div className="relative">
                              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
                              <input
                                type="text"
                                value={metroSearch}
                                onChange={(e) => {
                                  setMetroSearch(e.target.value);
                                  setShowMetroDropdown(true);
                                }}
                                onFocus={() => setShowMetroDropdown(true)}
                                placeholder="Search city or metro area..."
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-surface-dark border border-border/50 text-foreground placeholder:text-text-muted focus:outline-none focus:border-cta/50"
                              />
                              {showMetroDropdown && metroSearchResults.length > 0 && (
                                <div className="absolute z-50 w-full mt-1 bg-surface-dark border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                  {metroSearchResults.map((metro) => (
                                    <button
                                      key={`${metro.name}-${metro.state}`}
                                      type="button"
                                      onClick={() => selectMetro(metro)}
                                      className="w-full px-4 py-2.5 text-left hover:bg-surface-elevated transition-colors flex items-center justify-between"
                                    >
                                      <span className="text-sm">{metro.name}, {metro.state}</span>
                                      <span className="text-xs text-text-muted">{formatPopulation(metro.population)}</span>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Popular Markets Quick Select */}
                            <div>
                              <p className="text-xs text-text-muted mb-2">Popular Markets</p>
                              <div className="flex flex-wrap gap-2">
                                {popularMetros.slice(0, 6).map((metro) => (
                                  <button
                                    key={`${metro.name}-${metro.state}`}
                                    type="button"
                                    onClick={() => selectMetro(metro)}
                                    className="px-3 py-1.5 text-xs rounded-full bg-surface-dark border border-border/50 text-text-secondary hover:border-cta/50 hover:text-foreground transition-colors"
                                  >
                                    {metro.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </QuestionSection>

                    <QuestionSection 
                      icon={Building}
                      title="How many physical locations?"
                      tooltip="Multi-location businesses require local SEO for each location, significantly increasing scope."
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        <SelectButton selected={locations === "none"} onClick={() => setLocations("none")}>None</SelectButton>
                        <SelectButton selected={locations === "1-5"} onClick={() => setLocations("1-5")}>1-5</SelectButton>
                        <SelectButton selected={locations === "6-20"} onClick={() => setLocations("6-20")}>6-20</SelectButton>
                        <SelectButton selected={locations === "21-50"} onClick={() => setLocations("21-50")}>21-50</SelectButton>
                        <SelectButton selected={locations === "50+"} onClick={() => setLocations("50+")}>50+</SelectButton>
                      </div>
                    </QuestionSection>

                    <QuestionSection 
                      icon={Globe} 
                      title="Target audience reach?"
                      tooltip="Local targets a single metro area. Regional spans multiple cities. National and global require significantly more authority building."
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <SelectButton selected={audience === "local"} onClick={() => setAudience("local")}>Local</SelectButton>
                        <SelectButton selected={audience === "regional"} onClick={() => setAudience("regional")}>Regional</SelectButton>
                        <SelectButton selected={audience === "national"} onClick={() => setAudience("national")}>National</SelectButton>
                        <SelectButton selected={audience === "global"} onClick={() => setAudience("global")}>Global</SelectButton>
                      </div>
                    </QuestionSection>

                    <QuestionSection 
                      icon={Zap} 
                      title="How aggressive should we be?"
                      tooltip="Aggressive campaigns require more content, links, and resources monthly to accelerate results."
                    >
                      <div className="grid grid-cols-3 gap-2">
                        <SelectButton selected={aggressiveness === "steady"} onClick={() => setAggressiveness("steady")}>Steady Growth</SelectButton>
                        <SelectButton selected={aggressiveness === "moderate"} onClick={() => setAggressiveness("moderate")}>Moderate</SelectButton>
                        <SelectButton selected={aggressiveness === "aggressive"} onClick={() => setAggressiveness("aggressive")}>Aggressive</SelectButton>
                      </div>
                    </QuestionSection>

                    <QuestionSection 
                      icon={FileText} 
                      title="Pages needing optimization?"
                      tooltip="Includes service pages, location pages, and key landing pages. More pages = more on-page work."
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <SelectButton selected={pages === "1-10"} onClick={() => setPages("1-10")}>1-10</SelectButton>
                        <SelectButton selected={pages === "11-25"} onClick={() => setPages("11-25")}>11-25</SelectButton>
                        <SelectButton selected={pages === "26-50"} onClick={() => setPages("26-50")}>26-50</SelectButton>
                        <SelectButton selected={pages === "50+"} onClick={() => setPages("50+")}>50+</SelectButton>
                      </div>
                    </QuestionSection>

                    <QuestionSection 
                      icon={Swords} 
                      title="Industry competition level?"
                      tooltip="High-competition industries (legal, medical, finance) require more aggressive link building and content strategies."
                    >
                      <div className="grid grid-cols-3 gap-2">
                        <SelectButton selected={competition === "low"} onClick={() => setCompetition("low")}>Low</SelectButton>
                        <SelectButton selected={competition === "medium"} onClick={() => setCompetition("medium")}>Medium</SelectButton>
                        <SelectButton selected={competition === "high"} onClick={() => setCompetition("high")}>High</SelectButton>
                      </div>
                    </QuestionSection>

                    <QuestionSection 
                      icon={Calendar} 
                      title="Website age?"
                      tooltip="Newer domains need more time to build authority and trust signals with search engines."
                    >
                      <div className="grid grid-cols-3 gap-2">
                        <SelectButton selected={websiteAge === "new"} onClick={() => setWebsiteAge("new")}>&lt; 1 Year</SelectButton>
                        <SelectButton selected={websiteAge === "1-3"} onClick={() => setWebsiteAge("1-3")}>1-3 Years</SelectButton>
                        <SelectButton selected={websiteAge === "3+"} onClick={() => setWebsiteAge("3+")}>3+ Years</SelectButton>
                      </div>
                    </QuestionSection>

                    <QuestionSection 
                      icon={TrendingUp} 
                      title="Current target keyword rankings?"
                      tooltip="Where do target keywords currently rank? Further from page 1 = more work to climb."
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <SelectButton selected={currentRankings === "top10"} onClick={() => setCurrentRankings("top10")}>Top 10</SelectButton>
                        <SelectButton selected={currentRankings === "11-30"} onClick={() => setCurrentRankings("11-30")}>11-30</SelectButton>
                        <SelectButton selected={currentRankings === "31-100"} onClick={() => setCurrentRankings("31-100")}>31-100</SelectButton>
                        <SelectButton selected={currentRankings === "100+"} onClick={() => setCurrentRankings("100+")}>Not Ranking</SelectButton>
                      </div>
                    </QuestionSection>
                  </div>
                </div>

                {/* Right Column - Results */}
                <div className="lg:col-span-2">
                  <div className="lg:sticky lg:top-24 space-y-6">
                    <div className={cn(
                      "rounded-2xl p-6 md:p-8 border transition-all",
                      estimate 
                        ? "bg-gradient-to-br from-cta/10 to-accent-blue/10 border-cta/30" 
                        : "bg-surface-elevated border-border/30"
                    )}>
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign className={cn("h-5 w-5", estimate ? "text-cta" : "text-text-muted")} />
                          <span className="text-sm font-semibold uppercase tracking-wider text-text-muted">Pricing Structure</span>
                        </div>
                        <p className="text-xs text-text-muted">Your cost vs. suggested client pricing</p>
                      </div>

                      {estimate ? (
                        <>
                          {/* Header Row */}
                          <div className="grid grid-cols-3 gap-2 mb-2 px-3">
                            <div className="text-xs text-text-muted font-medium">Tier</div>
                            <div className="text-xs text-text-muted font-medium text-right">Your Cost</div>
                            <div className="text-xs text-text-muted font-medium text-right">Client MSRP</div>
                          </div>

                          {/* Tiered Pricing */}
                          <div className="space-y-2 mb-4">
                            {[
                              { name: "Starter", costLow: 650, costHigh: 975 },
                              { name: "Professional", costLow: 975, costHigh: 1300, highlight: true },
                              { name: "Premium", costLow: 1300, costHigh: 1950 },
                              { name: "Elite", costLow: 1950, costHigh: 2600 }
                            ].map((tier, i) => {
                              // MSRP margin: slider goes from 40% (1.4x) to 150% (2.5x)
                              const marginMultiplier = 1.4 + ((clientHourlyRate - 90) / (180 - 90)) * (2.5 - 1.4);
                              const clientMsrpLow = Math.round(tier.costLow * marginMultiplier / 50) * 50;
                              const clientMsrpHigh = Math.round(tier.costHigh * marginMultiplier / 50) * 50;
                              return (
                                <div 
                                  key={i}
                                  className={cn(
                                    "grid grid-cols-3 gap-2 p-3 rounded-lg bg-surface-dark border",
                                    tier.highlight ? "border-cta/40" : "border-border/30"
                                  )}
                                >
                                  <div>
                                    <p className={cn("font-medium text-sm", tier.highlight ? "text-cta" : "text-foreground")}>{tier.name}</p>
                                  </div>
                                  <p className="text-sm font-semibold text-accent-blue text-right self-center">
                                    ${tier.costLow.toLocaleString()}-${tier.costHigh.toLocaleString()}
                                  </p>
                                  <p className={cn("text-sm font-bold text-right self-center", tier.highlight ? "text-cta" : "text-foreground")}>
                                    ${clientMsrpLow.toLocaleString()}-${clientMsrpHigh.toLocaleString()}
                                  </p>
                                </div>
                              );
                            })}
                          </div>

                          {/* Client MSRP Margin Slider */}
                          <div className="bg-surface-dark rounded-lg p-4 border border-border/30 mb-4">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-xs text-text-muted">Client MSRP Margin</span>
                              <span className="text-sm font-semibold text-cta">{Math.round(40 + ((clientHourlyRate - 90) / (180 - 90)) * (150 - 40))}%</span>
                            </div>
                            <Slider
                              value={[clientHourlyRate]}
                              onValueChange={(value) => setClientHourlyRate(value[0])}
                              min={90}
                              max={180}
                              step={5}
                              className="w-full"
                            />
                            <div className="flex justify-between mt-2">
                              <span className="text-xs text-text-muted/60">40% margin</span>
                              <span className="text-xs text-text-muted/60">150% margin</span>
                            </div>
                          </div>

                          <div className="space-y-3 pt-4 border-t border-border/30">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-text-muted">Expected Timeline</span>
                              <span className="text-foreground font-medium">{estimate.timelineMonths}+ months</span>
                            </div>
                          </div>

                          <p className="text-xs text-text-muted mt-4">
                            Adjust slider to set your margin. "Professional" tier is most common.
                          </p>
                        </>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-text-muted">Answer all questions above to see recommended pricing.</p>
                        </div>
                      )}
                    </div>

                    {estimate && (
                      <>
                        {/* What's Included */}
                        <div className="bg-surface-elevated rounded-xl p-5 border border-border/30">
                          <p className="text-sm font-semibold text-foreground mb-3">What's Included:</p>
                          <ul className="space-y-2 text-sm text-text-muted">
                            <li className="flex items-start gap-2">
                              <span className="text-cta mt-0.5">✓</span>
                              On-page visual & technical SEO
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cta mt-0.5">✓</span>
                              GBP optimization & maintenance
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cta mt-0.5">✓</span>
                              Citation building (structured & unstructured)
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cta mt-0.5">✓</span>
                              Local link building & authority
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cta mt-0.5">✓</span>
                              Hub & spoke AI-supported content
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cta mt-0.5">✓</span>
                              GA4, GSC & GTM setup + conversion tracking
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cta mt-0.5">✓</span>
                              White-label monthly reporting
                            </li>
                          </ul>
                        </div>

                        {/* Expected Outcomes */}
                        <div className="bg-surface-elevated rounded-xl p-5 border border-border/30">
                          <p className="text-sm font-semibold text-foreground mb-3">Expected Outcomes:</p>
                          <ul className="space-y-2 text-sm text-text-muted">
                            <li className="flex items-start gap-2">
                              <span className="text-accent-blue mt-0.5">→</span>
                              Improved Local 3-Pack visibility
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-blue mt-0.5">→</span>
                              Increased phone calls & direction requests
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-blue mt-0.5">→</span>
                              Higher review volume & rating
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-blue mt-0.5">→</span>
                              Better organic rankings for local keywords
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-blue mt-0.5">→</span>
                              AI Overview citation eligibility
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-12 lg:py-16 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-cta-foreground font-semibold rounded-xl hover:bg-cta/90 transition-colors shadow-lg shadow-cta/20"
              >
                Let's Talk Partnership
                <span>→</span>
              </Link>
              <span className="text-text-muted">or</span>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border/50 rounded-xl text-foreground hover:border-accent-blue/50 transition-colors"
              >
                <Phone className="h-4 w-4 text-accent-blue" />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </section>

        {/* Soft Divider */}
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>

        {/* Educational Content */}
        <section className="py-16 lg:py-24 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <SEOEducationalContent />
            </div>
          </div>
        </section>

        {/* Soft Divider */}
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>

        {/* Pricing Comparison */}
        <section className="py-16 lg:py-24 bg-surface-elevated">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <PricingComparisonTable />
            </div>
          </div>
        </section>

        {/* Soft Divider */}
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>

        {/* Agency Partner Videos */}
        <AgencyPartnerVideos />

        {/* Contact Form Section */}
        <ContactForm />
      </main>
      
      <Footer />
    </>
  );
};

export default SEOCalculator;
