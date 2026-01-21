import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import SEOEducationalContent from "@/components/calculators/SEOEducationalContent";
import AgencyPartnerVideos from "@/components/calculators/AgencyPartnerVideos";
import PricingComparisonTable from "@/components/calculators/PricingComparisonTable";
import SEOPdfExport from "@/components/calculators/SEOPdfExport";
import { useState, useMemo } from "react";
import { Calculator, MapPin, Globe, Zap, FileText, Swords, Calendar, TrendingUp, DollarSign, Info, Building, ChevronDown, ChevronRight, X, Search, Phone, RotateCcw } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { metros, Metro, tierMultipliers, searchMetros, formatPopulation } from "@/data/metros";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import { getCalculatorSchema } from "@/lib/schema";

const seoCalculatorSchema = getCalculatorSchema({
  name: "SEO Growth Forecast Calculator for Agencies",
  description: "Forecast organic traffic growth and SEO outcomes. Free calculator for agencies to plan and pitch local SEO campaigns.",
  url: "https://dialedinweb.com/partner-tools/seo-calculator",
  category: "BusinessApplication"
});

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
  const [clientHourlyRate, setClientHourlyRate] = useState<number>(40);
  const [includeCSM, setIncludeCSM] = useState<boolean>(false);
  const [pricingSeries, setPricingSeries] = useState<"hc" | "lc">("hc");
  const [tierOverride, setTierOverride] = useState<string | null>(null);

  const metroSearchResults = useMemo(() => searchMetros(metroSearch), [metroSearch]);

  // Auto-switch pricing series based on competition level
  const handleCompetitionChange = (newCompetition: string) => {
    setCompetition(newCompetition);
    // Auto-switch to appropriate series
    if (newCompetition === "low") {
      setPricingSeries("lc");
    } else {
      setPricingSeries("hc");
    }
  };

  const applyIndustryPreset = (industryId: string) => {
    const preset = industryPresets.find(i => i.id === industryId);
    if (preset) {
      setSelectedIndustry(industryId);
      if (preset.competition) {
        setCompetition(preset.competition);
        // Auto-switch series based on preset competition
        if (preset.competition === "low") {
          setPricingSeries("lc");
        } else {
          setPricingSeries("hc");
        }
      }
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

  const clearAll = () => {
    setSelectedIndustry("");
    setSelectedMetro(null);
    setMetroSearch("");
    setShowMetroDropdown(false);
    setShowIndustryDropdown(false);
    setLocations("");
    setAudience("");
    setAggressiveness("");
    setPages("");
    setCompetition("");
    setWebsiteAge("");
    setCurrentRankings("");
    setClientHourlyRate(40);
    setIncludeCSM(false);
    setPricingSeries("hc");
    setTierOverride(null);
  };

  const selectedIndustryName = industryPresets.find(i => i.id === selectedIndustry)?.name || "";

  const isComplete = locations && audience && aggressiveness && pages && competition && websiteAge && currentRankings;

  const estimate = useMemo(() => {
    if (!isComplete) return null;

    // Package-based pricing aligned to HC OEM tiers
    // HC Series: $1,319, $1,539, $1,759, $1,979 (10% increase)
    // Low competition uses lower range
    const baseByCompetition: Record<string, { low: number; high: number }> = {
      "low": { low: 715, high: 1319 },      // Starter range (+10%)
      "medium": { low: 1100, high: 1759 },  // Mid range (+10%)
      "high": { low: 1319, high: 1979 }     // HC Series full range (+10%)
    };

    // Minimum floors aligned to HC OEM tiers (+10%)
    // HC Series: $1,319, $1,539, $1,759, $1,979
    const getMinimumFloor = (comp: string, metroTier: string | null): number => {
      if (comp === "high") {
        // High competition starts at HC tier minimum
        if (metroTier === "mega") return 1759;   // HC 300
        if (metroTier === "major") return 1539;  // HC 200
        if (metroTier === "large") return 1319;  // HC 100
        if (metroTier === "medium") return 1319; // HC 100
        return 1319; // HC 100 base
      }
      if (comp === "medium") {
        // Medium competition uses mid range
        if (metroTier === "mega") return 1539;
        if (metroTier === "major") return 1319;
        if (metroTier === "large") return 1100;
        if (metroTier === "medium") return 1100;
        return 990;
      }
      // Low competition uses starter range
      if (metroTier === "mega") return 990;
      if (metroTier === "major") return 825;
      if (metroTier === "large") return 715;
      return 715; // Starter base
    };

    const base = baseByCompetition[competition] || { low: 666, high: 1392 };
    let baseLow = base.low;
    let baseHigh = base.high;

    // Location multiplier - multi-location campaigns scale up
    const locationMultipliers: Record<string, { low: number; high: number }> = {
      "none": { low: 0.95, high: 1.0 },
      "1-5": { low: 1, high: 1.1 },
      "6-20": { low: 1.4, high: 1.6 },
      "21-50": { low: 2.0, high: 2.4 },
      "50+": { low: 3.0, high: 4.0 }
    };

    // Audience multiplier - regional/national adds complexity
    const audienceMultipliers: Record<string, { low: number; high: number }> = {
      "local": { low: 1, high: 1 },
      "regional": { low: 1.2, high: 1.35 },
      "national": { low: 1.6, high: 1.9 },
      "global": { low: 2.0, high: 2.5 }
    };

    // Aggressiveness multiplier - affects tier selection within series
    const aggressivenessMultipliers: Record<string, { low: number; high: number }> = {
      "steady": { low: 0.9, high: 0.95 },     // Stays closer to 100-level
      "moderate": { low: 1.0, high: 1.1 },    // Mid-tier (200-300)
      "aggressive": { low: 1.15, high: 1.3 }  // Pushes toward 400-level
    };

    // Pages multiplier - site complexity
    const pagesMultipliers: Record<string, { low: number; high: number }> = {
      "1-10": { low: 0.95, high: 1.0 },
      "11-25": { low: 1.0, high: 1.1 },
      "26-50": { low: 1.1, high: 1.2 },
      "50+": { low: 1.2, high: 1.35 }
    };

    // Website age multiplier (newer = more foundation work)
    const ageMultipliers: Record<string, { low: number; high: number }> = {
      "new": { low: 1.1, high: 1.2 },
      "1-3": { low: 1.0, high: 1.05 },
      "3+": { low: 0.95, high: 1.0 }
    };

    // Rankings multiplier (worse rankings = more catch-up work)
    const rankingsMultipliers: Record<string, { low: number; high: number }> = {
      "top10": { low: 0.95, high: 1.0 },
      "11-30": { low: 1.0, high: 1.1 },
      "31-100": { low: 1.1, high: 1.2 },
      "100+": { low: 1.2, high: 1.35 }
    };

    // Metro tier multiplier - larger metros require more effort
    const getMetroMultiplier = (comp: string, tier: string | null): number => {
      if (!tier) return 1;
      
      // High competition industries scale more with metro size
      if (comp === "high") {
        const highCompTiers: Record<string, number> = {
          small: 0.9,
          medium: 1.0,
          large: 1.1,
          major: 1.25,
          mega: 1.4
        };
        return highCompTiers[tier] || 1;
      }
      
      // Medium competition
      if (comp === "medium") {
        const medCompTiers: Record<string, number> = {
          small: 0.9,
          medium: 1.0,
          large: 1.1,
          major: 1.2,
          mega: 1.35
        };
        return medCompTiers[tier] || 1;
      }
      
      // Low competition - still affected but less dramatically
      const lowCompTiers: Record<string, number> = {
        small: 0.9,
        medium: 1.0,
        large: 1.05,
        major: 1.15,
        mega: 1.25
      };
      return lowCompTiers[tier] || 1;
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
    monthlyHigh = Math.max(monthlyHigh, Math.round(minimumFloor * 1.3 / 50) * 50);

    // Apply CSM fixed fee if enabled ($150/mo)
    if (includeCSM) {
      monthlyLow = monthlyLow + 150;
      monthlyHigh = monthlyHigh + 150;
    }

    // Estimate timeline based on competition and rankings
    let timelineMonths = 6;
    if (competition === "high") timelineMonths += 4;
    if (competition === "medium") timelineMonths += 2;
    if (currentRankings === "100+") timelineMonths += 3;
    if (currentRankings === "31-100") timelineMonths += 2;
    if (aggressiveness === "steady") timelineMonths += 2;
    if (metroTier === "mega" || metroTier === "major") timelineMonths += 2;

    // Factor breakdown for visualization
    const factors = [
      { label: "Competition", value: competition, impact: competition === "high" ? 2.6 : competition === "medium" ? 1.5 : 1, color: competition === "high" ? "bg-red-500" : competition === "medium" ? "bg-yellow-500" : "bg-emerald-500" },
      { label: "Metro Size", value: selectedMetro?.tier || "none", impact: metroMult, color: metroMult > 1.5 ? "bg-red-500" : metroMult > 1.2 ? "bg-yellow-500" : "bg-emerald-500" },
      { label: "Locations", value: locations, impact: (locMult.low + locMult.high) / 2, color: locMult.low > 2 ? "bg-red-500" : locMult.low > 1.3 ? "bg-yellow-500" : "bg-emerald-500" },
      { label: "Target Audience", value: audience, impact: (audMult.low + audMult.high) / 2, color: audMult.low > 1.5 ? "bg-red-500" : audMult.low > 1.2 ? "bg-yellow-500" : "bg-emerald-500" },
      { label: "Aggressiveness", value: aggressiveness, impact: (aggMult.low + aggMult.high) / 2, color: aggMult.low > 1.4 ? "bg-red-500" : aggMult.low > 1.1 ? "bg-yellow-500" : "bg-emerald-500" },
      { label: "Site Size", value: pages, impact: (pageMult.low + pageMult.high) / 2, color: pageMult.low > 1.3 ? "bg-red-500" : pageMult.low > 1.05 ? "bg-yellow-500" : "bg-emerald-500" },
      { label: "Website Age", value: websiteAge, impact: (ageMult.low + ageMult.high) / 2, color: ageMult.low > 1.2 ? "bg-red-500" : ageMult.low > 1.05 ? "bg-yellow-500" : "bg-emerald-500" },
      { label: "Current Rankings", value: currentRankings, impact: (rankMult.low + rankMult.high) / 2, color: rankMult.low > 1.3 ? "bg-red-500" : rankMult.low > 1.05 ? "bg-yellow-500" : "bg-emerald-500" }
    ];

    // Determine recommended package tier based on inputs (not just price matching)
    const getRecommendedTier = (): { 
      lowTier: string; 
      highTier: string; 
      series: string; 
      recommendedSeries: "hc" | "lc";
      scoreBreakdown: {
        total: number;
        rawTotal: number;
        pageFloor: number;
        aggressiveFloor: number;
        items: Array<{ label: string; points: number; maxPoints: number }>;
      };
    } => {
      // Determine which series to recommend based on competition
      const recommendedSeries: "hc" | "lc" = competition === "low" ? "lc" : "hc";
      const series = competition === "high" ? "High Competition" : competition === "medium" ? "Medium Competition" : "Low Competition";
      
      // Track individual score contributions
      const scoreItems: Array<{ label: string; points: number; maxPoints: number }> = [];
      
      // Calculate a "need score" from 0-100 based on all inputs
      // Higher score = more aggressive tier needed
      let needScore = 0;
      
      // Competition baseline - high competition industries inherently need more (0-15 points)
      const competitionPoints = competition === "high" ? 15 : competition === "medium" ? 8 : 0;
      needScore += competitionPoints;
      scoreItems.push({ label: "Competition Level", points: competitionPoints, maxPoints: 15 });
      
      // Aggressiveness is the PRIMARY driver (0-25 points)
      const aggressivenessPoints = aggressiveness === "aggressive" ? 25 : aggressiveness === "moderate" ? 12 : 0;
      needScore += aggressivenessPoints;
      scoreItems.push({ label: "Aggressiveness", points: aggressivenessPoints, maxPoints: 25 });
      
      // Current rankings - the gap to close (0-18 points)
      const rankingsPoints = currentRankings === "100+" ? 18 : currentRankings === "31-100" ? 12 : currentRankings === "11-30" ? 5 : 0;
      needScore += rankingsPoints;
      scoreItems.push({ label: "Current Rankings", points: rankingsPoints, maxPoints: 18 });
      
      // Pages needing optimization - THIS ENFORCES MINIMUM TIERS
      let pageMinScore = 0;
      if (pages === "50+") pageMinScore = 63;
      else if (pages === "26-50") pageMinScore = 43;
      else if (pages === "11-25") pageMinScore = 23;
      
      // Aggressive aggressiveness enforces minimum Tier 300
      let aggressiveMinScore = 0;
      if (aggressiveness === "aggressive") aggressiveMinScore = 43;
      
      // Add incremental points for pages (on top of minimum)
      const pagesPoints = pages === "50+" ? 15 : pages === "26-50" ? 10 : pages === "11-25" ? 5 : 0;
      needScore += pagesPoints;
      scoreItems.push({ label: "Pages to Optimize", points: pagesPoints, maxPoints: 15 });
      
      // Website age - foundation work needed (-3 to 10 points)
      const agePoints = websiteAge === "new" ? 10 : websiteAge === "1-3" ? 4 : -3;
      needScore += agePoints;
      scoreItems.push({ label: "Website Age", points: agePoints, maxPoints: 10 });
      
      // Metro size impact (0-10 points)
      const metroTier = selectedMetro?.tier || null;
      const metroPoints = metroTier === "mega" ? 10 : metroTier === "major" ? 6 : metroTier === "large" ? 3 : 0;
      needScore += metroPoints;
      scoreItems.push({ label: "Metro Size", points: metroPoints, maxPoints: 10 });
      
      // Locations impact - multi-location complexity (0-8 points)
      const locationPoints = locations === "50+" ? 8 : locations === "21-50" ? 5 : locations === "6-20" ? 2 : 0;
      needScore += locationPoints;
      scoreItems.push({ label: "Locations", points: locationPoints, maxPoints: 8 });
      
      // Store raw score before floor/cap
      const rawNeedScore = needScore;
      
      // Combine floors: use the maximum of page floor, aggressive floor, and calculated score
      const combinedFloor = Math.max(pageMinScore, aggressiveMinScore);
      
      // Ensure score stays in reasonable bounds, BUT enforce minimum floors
      needScore = Math.max(combinedFloor, Math.min(100, needScore));
      
      // Map score to tier with refined thresholds
      const getTierFromScore = (score: number, seriesPrefix: string): string => {
        if (score >= 63) return `${seriesPrefix} 400`;
        if (score >= 43) return `${seriesPrefix} 300`;
        if (score >= 23) return `${seriesPrefix} 200`;
        return `${seriesPrefix} 100`;
      };
      
      const seriesPrefix = recommendedSeries === "hc" ? "HC" : "LC";
      
      // Calculate low and high tier recommendations
      const baseTier = getTierFromScore(needScore, seriesPrefix);
      
      // High tier buffer: add ~15 points for contingency/upsell opportunity
      const highScoreBuffer = Math.min(needScore + 15, 100);
      const highTier = getTierFromScore(highScoreBuffer, seriesPrefix);
      
      return { 
        lowTier: baseTier, 
        highTier: highTier === baseTier ? baseTier : highTier, 
        series, 
        recommendedSeries,
        scoreBreakdown: {
          total: needScore,
          rawTotal: rawNeedScore,
          pageFloor: pageMinScore,
          aggressiveFloor: aggressiveMinScore,
          items: scoreItems
        }
      };
    };
    
    const recommendedTier = getRecommendedTier();

    return {
      monthlyLow,
      monthlyHigh,
      annualLow: monthlyLow * 12,
      annualHigh: monthlyHigh * 12,
      timelineMonths,
      factors,
      recommendedTier
    };
  }, [locations, audience, aggressiveness, pages, competition, websiteAge, currentRankings, selectedMetro, isComplete, includeCSM]);

  return (
    <>
      <Helmet>
        <title>SEO Growth Forecast Calculator for Agencies | Project Organic Traffic & Rankings | Dialed-in Web</title>
        <meta name="description" content="Forecast SEO outcomes and keyword growth. Dialed-in Web's calculator helps agencies pitch and plan scalable campaigns." />
        <link rel="canonical" href="https://dialedinweb.com/partner-tools/seo-calculator" />
        <meta name="keywords" content="SEO calculator, local SEO cost estimator, organic traffic forecast, SEO pricing tool, agency SEO planner" />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href="https://dialedinweb.com/partner-tools/seo-calculator" />
        <link rel="alternate" hrefLang="en-CA" href="https://dialedinweb.com/partner-tools/seo-calculator" />
        <link rel="alternate" hrefLang="x-default" href="https://dialedinweb.com/partner-tools/seo-calculator" />
        
        <script type="application/ld+json">{JSON.stringify(seoCalculatorSchema)}</script>
        
        {/* Open Graph */}
        <meta property="og:title" content="SEO Growth Forecast Calculator for Agencies | Project Organic Traffic & Rankings | Dialed-in Web" />
        <meta property="og:description" content="Forecast SEO outcomes and keyword growth. Dialed-in Web's calculator helps agencies pitch and plan scalable campaigns." />
        <meta property="og:url" content="https://dialedinweb.com/partner-tools/seo-calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dialed-In Web" />
        <meta property="og:image" content="https://dialedinweb.com/og-images/seo-calculator.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Growth Forecast Calculator for Agencies | Project Organic Traffic & Rankings | Dialed-in Web" />
        <meta name="twitter:description" content="Forecast SEO outcomes and keyword growth. Dialed-in Web's calculator helps agencies pitch and plan scalable campaigns." />
        <meta name="twitter:image" content="https://dialedinweb.com/og-images/seo-calculator.jpg" />
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
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-foreground mb-2">Tell us about the project</h2>
                        <p className="text-sm text-text-muted">Answer each question to calculate an estimated monthly investment.</p>
                      </div>
                      <button
                        type="button"
                        onClick={clearAll}
                        className="text-xs text-text-muted hover:text-foreground transition-colors flex items-center gap-1 px-2 py-1 rounded hover:bg-surface-dark"
                      >
                        <RotateCcw className="h-3 w-3" />
                        Clear All
                      </button>
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
                        <SelectButton selected={competition === "low"} onClick={() => handleCompetitionChange("low")}>Low</SelectButton>
                        <SelectButton selected={competition === "medium"} onClick={() => handleCompetitionChange("medium")}>Medium</SelectButton>
                        <SelectButton selected={competition === "high"} onClick={() => handleCompetitionChange("high")}>High</SelectButton>
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

                          {/* Series Toggle */}
                          <div className="flex gap-2 mb-4">
                            <button
                              type="button"
                              onClick={() => setPricingSeries("hc")}
                              className={cn(
                                "flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all border",
                                pricingSeries === "hc"
                                  ? "bg-destructive/10 border-destructive text-destructive"
                                  : "bg-surface-dark border-border/50 text-text-secondary hover:border-destructive/50"
                              )}
                            >
                              HC Series
                            </button>
                            <button
                              type="button"
                              onClick={() => setPricingSeries("lc")}
                              className={cn(
                                "flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all border",
                                pricingSeries === "lc"
                                  ? "bg-emerald-500/10 border-emerald-500 text-emerald-500"
                                  : "bg-surface-dark border-border/50 text-text-secondary hover:border-emerald-500/50"
                              )}
                            >
                              LC Series
                            </button>
                          </div>

                          {/* Client Success Manager Checkbox - Above Tiers */}
                          <label className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-surface-dark mb-4 cursor-pointer hover:border-cta/50 transition-colors">
                            <input
                              type="checkbox"
                              checked={includeCSM}
                              onChange={(e) => setIncludeCSM(e.target.checked)}
                              className="w-4 h-4 rounded border-border text-cta focus:ring-cta focus:ring-offset-0 bg-surface-dark"
                            />
                            <span className="text-sm font-medium text-foreground flex-1">Client Success Manager</span>
                            <span className={cn(
                              "text-xs font-semibold px-2 py-0.5 rounded",
                              includeCSM ? "bg-cta/10 text-cta" : "text-text-muted"
                            )}>
                              +$150/mo
                            </span>
                          </label>

                          {/* Tiered Pricing */}
                          <div className="space-y-2 mb-4">
                            {(pricingSeries === "hc" ? [
                              { name: "HC 100", cost: 1319, tooltip: "Foundation tier: On-page SEO, GBP optimization, 2 blog posts/mo, basic citation building, monthly reporting" },
                              { name: "HC 200", cost: 1539, tooltip: "Growth tier: Everything in 100 + 4 blog posts/mo, expanded citations, link building (2-4 links/mo), competitor monitoring" },
                              { name: "HC 300", cost: 1759, tooltip: "Acceleration tier: Everything in 200 + 6 blog posts/mo, aggressive link building (5-8 links/mo), schema markup, conversion optimization" },
                              { name: "HC 400", cost: 1979, tooltip: "Domination tier: Everything in 300 + 8+ blog posts/mo, premium link building (10+ links/mo), multi-location support, priority support" }
                            ] : [
                              { name: "LC 100", cost: 604, tooltip: "Foundation tier: On-page SEO, GBP optimization, 1 blog post/mo, basic citation building, monthly reporting" },
                              { name: "LC 200", cost: 824, tooltip: "Growth tier: Everything in 100 + 2 blog posts/mo, expanded citations, light link building (1-2 links/mo)" },
                              { name: "LC 300", cost: 1044, tooltip: "Acceleration tier: Everything in 200 + 3 blog posts/mo, link building (3-4 links/mo), schema markup" },
                              { name: "LC 400", cost: 1264, tooltip: "Domination tier: Everything in 300 + 4+ blog posts/mo, enhanced link building (5+ links/mo), conversion optimization" }
                            ]).map((tier, i) => {
                              // Apply CSM fixed fee if enabled ($150/mo)
                              const baseCost = includeCSM 
                                ? tier.cost + 150
                                : tier.cost;
                              // MSRP margin: slider goes from 40% (1.4x) to 150% (2.5x)
                              const marginMultiplier = 1 + (clientHourlyRate / 100);
                              const clientMsrp = Math.round(baseCost * marginMultiplier / 50) * 50;
                              // Check if this tier is highlighted (override takes priority over recommendation)
                              const isOverride = tierOverride === tier.name;
                              const isRecommended = !tierOverride && (estimate.recommendedTier.lowTier === tier.name || estimate.recommendedTier.highTier === tier.name);
                              const isHighlighted = isOverride || isRecommended;
                              return (
                                <div 
                                  key={i}
                                  className={cn(
                                    "grid grid-cols-3 gap-2 p-3 rounded-lg bg-surface-dark border",
                                    isOverride ? "border-yellow-500/60 ring-1 ring-yellow-500/30" :
                                    isRecommended ? "border-cta/40" : "border-border/30"
                                  )}
                                >
                                  <div className="flex items-center gap-1.5">
                                    <p className={cn(
                                      "font-medium text-sm",
                                      isOverride ? "text-yellow-400" : isRecommended ? "text-cta" : "text-foreground"
                                    )}>{tier.name}</p>
                                    {isOverride && (
                                      <span className="text-[9px] px-1 py-0.5 rounded bg-yellow-500/20 text-yellow-400 font-medium">Override</span>
                                    )}
                                    <TooltipProvider delayDuration={0}>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <button type="button" className="text-text-muted hover:text-accent-blue transition-colors">
                                            <Info className="h-3 w-3" />
                                          </button>
                                        </TooltipTrigger>
                                        <TooltipContent side="top" className="max-w-xs bg-surface-elevated border-border/50 text-foreground z-50">
                                          <p className="text-xs font-body">{tier.tooltip}</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  </div>
                                  <p className="text-sm font-semibold text-accent-blue text-right self-center">
                                    ${baseCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                  </p>
                                  <p className={cn(
                                    "text-sm font-bold text-right self-center",
                                    isOverride ? "text-yellow-400" : isRecommended ? "text-cta" : "text-foreground"
                                  )}>
                                    ${clientMsrp.toLocaleString()}
                                  </p>
                                </div>
                              );
                            })}
                          </div>

                          {/* Client MSRP Margin Slider */}
                          <div className="bg-surface-dark rounded-lg p-4 border border-border/30 mb-4">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-xs text-text-muted">Client MSRP Margin</span>
                              <span className="text-sm font-semibold text-cta">{clientHourlyRate}%</span>
                            </div>
                            <Slider
                              value={[clientHourlyRate]}
                              onValueChange={(value) => setClientHourlyRate(value[0])}
                              min={40}
                              max={150}
                              step={5}
                              className="w-full"
                            />
                            <div className="flex justify-between mt-2">
                              <span className="text-xs text-text-muted/60">40% margin</span>
                              <span className="text-xs text-text-muted/60">150% margin</span>
                            </div>
                          </div>

                          {/* Recommended Package Tier */}
                          <div className={cn(
                            "rounded-lg p-4 border",
                            estimate.recommendedTier.recommendedSeries === "hc" 
                              ? "bg-gradient-to-r from-destructive/10 to-orange-500/10 border-destructive/30"
                              : "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/30"
                          )}>
                            <div className="flex items-center justify-between mb-2">
                              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Recommended Package</p>
                              <span className={cn(
                                "text-xs px-2 py-1 rounded-full",
                                competition === "high" ? "bg-destructive/10 text-destructive" : 
                                competition === "medium" ? "bg-yellow-500/10 text-yellow-500" : 
                                "bg-emerald-500/10 text-emerald-500"
                              )}>
                                {estimate.recommendedTier.series}
                              </span>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                              <span className={cn(
                                "text-lg font-bold",
                                estimate.recommendedTier.recommendedSeries === "hc" ? "text-destructive" : "text-emerald-500"
                              )}>
                                {estimate.recommendedTier.lowTier === estimate.recommendedTier.highTier 
                                  ? estimate.recommendedTier.lowTier 
                                  : `${estimate.recommendedTier.lowTier} – ${estimate.recommendedTier.highTier}`}
                              </span>
                            </div>
                            
                            {/* Tier Override */}
                            <div className="pt-3 border-t border-border/20">
                              <div className="flex items-center justify-between gap-2">
                                <label className="text-xs text-text-muted">Override tier:</label>
                                <select
                                  value={tierOverride || ""}
                                  onChange={(e) => setTierOverride(e.target.value || null)}
                                  className="flex-1 max-w-[140px] px-2 py-1.5 text-xs rounded-md bg-surface-dark border border-border/50 text-foreground focus:outline-none focus:border-cta/50"
                                >
                                  <option value="">Use Recommended</option>
                                  <optgroup label={pricingSeries === "hc" ? "HC Series" : "LC Series"}>
                                    <option value={`${pricingSeries.toUpperCase()} 100`}>{pricingSeries.toUpperCase()} 100</option>
                                    <option value={`${pricingSeries.toUpperCase()} 200`}>{pricingSeries.toUpperCase()} 200</option>
                                    <option value={`${pricingSeries.toUpperCase()} 300`}>{pricingSeries.toUpperCase()} 300</option>
                                    <option value={`${pricingSeries.toUpperCase()} 400`}>{pricingSeries.toUpperCase()} 400</option>
                                  </optgroup>
                                </select>
                              </div>
                              {tierOverride && (
                                <p className="text-[10px] text-yellow-400 mt-2 flex items-center gap-1">
                                  <span>⚠️</span> Overriding recommendation to {tierOverride}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Score Breakdown Debug Panel */}
                          <details className="mt-4 group">
                            <summary className="flex items-center gap-2 cursor-pointer text-xs font-medium text-text-muted hover:text-foreground transition-colors select-none">
                              <ChevronRight className="h-3.5 w-3.5 transition-transform group-open:rotate-90" />
                              <span>Score Breakdown</span>
                              <span className="ml-auto font-mono text-accent-blue">
                                {estimate.recommendedTier.scoreBreakdown.total}/100
                              </span>
                            </summary>
                            <div className="mt-3 space-y-3 pt-3 border-t border-border/20">
                              {/* Score Summary */}
                              <div className="grid grid-cols-4 gap-2 text-center">
                                <div className="bg-surface-dark rounded-lg p-2">
                                  <p className="text-[10px] text-text-muted uppercase tracking-wider">Raw</p>
                                  <p className="text-sm font-bold text-foreground">{estimate.recommendedTier.scoreBreakdown.rawTotal}</p>
                                </div>
                                <div className="bg-surface-dark rounded-lg p-2">
                                  <p className="text-[10px] text-text-muted uppercase tracking-wider">Page Floor</p>
                                  <p className="text-sm font-bold text-orange-400">{estimate.recommendedTier.scoreBreakdown.pageFloor || "—"}</p>
                                </div>
                                <div className="bg-surface-dark rounded-lg p-2">
                                  <p className="text-[10px] text-text-muted uppercase tracking-wider">Aggr. Floor</p>
                                  <p className="text-sm font-bold text-red-400">{estimate.recommendedTier.scoreBreakdown.aggressiveFloor || "—"}</p>
                                </div>
                                <div className="bg-surface-dark rounded-lg p-2">
                                  <p className="text-[10px] text-text-muted uppercase tracking-wider">Final</p>
                                  <p className="text-sm font-bold text-cta">{estimate.recommendedTier.scoreBreakdown.total}</p>
                                </div>
                              </div>
                              
                              {/* Tier Thresholds */}
                              <div className="bg-surface-dark rounded-lg p-2">
                                <div className="relative h-2 bg-background rounded-full overflow-hidden">
                                  <div className="absolute inset-y-0 left-0 w-[23%] bg-emerald-500/30" />
                                  <div className="absolute inset-y-0 left-[23%] w-[20%] bg-yellow-500/30" />
                                  <div className="absolute inset-y-0 left-[43%] w-[20%] bg-orange-500/30" />
                                  <div className="absolute inset-y-0 left-[63%] right-0 bg-red-500/30" />
                                  <div 
                                    className="absolute top-0 bottom-0 w-0.5 bg-foreground"
                                    style={{ left: `${estimate.recommendedTier.scoreBreakdown.total}%` }}
                                  />
                                </div>
                                <div className="flex justify-between text-[9px] text-text-muted mt-1">
                                  <span>100</span>
                                  <span className="ml-[18%]">200</span>
                                  <span className="ml-[14%]">300</span>
                                  <span className="ml-[14%]">400</span>
                                </div>
                              </div>
                              
                              {/* Individual Factors */}
                              <div className="space-y-1.5">
                                {estimate.recommendedTier.scoreBreakdown.items.map((item, i) => (
                                  <div key={i} className="flex items-center justify-between text-xs">
                                    <span className="text-text-muted">{item.label}</span>
                                    <div className="flex items-center gap-2">
                                      <div className="w-16 h-1.5 bg-surface-dark rounded-full overflow-hidden">
                                        <div 
                                          className={cn(
                                            "h-full rounded-full transition-all",
                                            item.points < 0 ? "bg-emerald-500" :
                                            item.points === 0 ? "bg-border" :
                                            item.points <= item.maxPoints * 0.33 ? "bg-emerald-500" :
                                            item.points <= item.maxPoints * 0.66 ? "bg-yellow-500" : "bg-red-500"
                                          )}
                                          style={{ width: `${Math.abs(item.points) / item.maxPoints * 100}%` }}
                                        />
                                      </div>
                                      <span className={cn(
                                        "font-mono w-8 text-right",
                                        item.points < 0 ? "text-emerald-400" :
                                        item.points === 0 ? "text-text-muted" :
                                        item.points <= item.maxPoints * 0.33 ? "text-emerald-400" :
                                        item.points <= item.maxPoints * 0.66 ? "text-yellow-400" : "text-red-400"
                                      )}>
                                        {item.points > 0 ? "+" : ""}{item.points}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              {estimate.recommendedTier.scoreBreakdown.pageFloor > 0 && estimate.recommendedTier.scoreBreakdown.rawTotal < estimate.recommendedTier.scoreBreakdown.pageFloor && (
                                <p className="text-[10px] text-orange-400 bg-orange-500/10 rounded px-2 py-1">
                                  ⚠️ Page count requires minimum Tier {estimate.recommendedTier.scoreBreakdown.pageFloor >= 63 ? "400" : estimate.recommendedTier.scoreBreakdown.pageFloor >= 43 ? "300" : "200"}
                                </p>
                              )}
                              {estimate.recommendedTier.scoreBreakdown.aggressiveFloor > 0 && estimate.recommendedTier.scoreBreakdown.rawTotal < estimate.recommendedTier.scoreBreakdown.aggressiveFloor && estimate.recommendedTier.scoreBreakdown.aggressiveFloor >= estimate.recommendedTier.scoreBreakdown.pageFloor && (
                                <p className="text-[10px] text-red-400 bg-red-500/10 rounded px-2 py-1">
                                  ⚠️ Aggressive strategy requires minimum Tier 300
                                </p>
                              )}
                            </div>
                          </details>

                          <div className="space-y-3 pt-4 border-t border-border/30">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-text-muted">Expected Timeline</span>
                              <span className="text-foreground font-medium">{estimate.timelineMonths}+ months</span>
                            </div>
                          </div>

                          {/* Factor Breakdown */}
                          <div className="mt-6 pt-4 border-t border-border/30">
                            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Pricing Factors</p>
                            <div className="space-y-2">
                              {estimate.factors.map((factor, i) => {
                                const impactPercent = Math.min(100, Math.max(10, ((factor.impact - 0.75) / 2) * 100));
                                const impactLabel = factor.impact >= 1.5 ? "High" : factor.impact >= 1.1 ? "Mod" : factor.impact < 1 ? "Low" : "Base";
                                return (
                                  <div key={i} className="space-y-1">
                                    <div className="flex justify-between items-center text-xs">
                                      <span className="text-text-muted">{factor.label}</span>
                                      <span className={cn(
                                        "font-medium",
                                        factor.impact >= 1.5 ? "text-red-400" : 
                                        factor.impact >= 1.1 ? "text-yellow-400" : 
                                        factor.impact < 1 ? "text-emerald-400" : "text-text-secondary"
                                      )}>
                                        {factor.impact < 1 ? "−" : factor.impact > 1 ? "+" : ""}{Math.abs(Math.round((factor.impact - 1) * 100))}%
                                      </span>
                                    </div>
                                    <div className="h-1.5 bg-surface-dark rounded-full overflow-hidden">
                                      <div 
                                        className={cn("h-full rounded-full transition-all", factor.color)}
                                        style={{ width: `${impactPercent}%` }}
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            <p className="text-[10px] text-text-muted/60 mt-3">
                              Green = cost reduction · Yellow = moderate increase · Red = significant increase
                            </p>
                          </div>

                          {/* PDF Export */}
                          <SEOPdfExport
                            estimate={estimate}
                            tiers={(pricingSeries === "hc" ? [
                              { level: 100, name: "Foundation", baseCost: includeCSM ? Math.round(1199 * 1.1 / 50) * 50 - 0.05 : 1199 },
                              { level: 200, name: "Growth", baseCost: includeCSM ? Math.round(1399 * 1.1 / 50) * 50 - 0.05 : 1399 },
                              { level: 300, name: "Acceleration", baseCost: includeCSM ? Math.round(1599 * 1.1 / 50) * 50 - 0.05 : 1599 },
                              { level: 400, name: "Domination", baseCost: includeCSM ? Math.round(1799 * 1.1 / 50) * 50 - 0.05 : 1799 }
                            ] : [
                              { level: 100, name: "Foundation", baseCost: includeCSM ? Math.round(549 * 1.1 / 50) * 50 - 0.05 : 549 },
                              { level: 200, name: "Growth", baseCost: includeCSM ? Math.round(749 * 1.1 / 50) * 50 - 0.05 : 749 },
                              { level: 300, name: "Acceleration", baseCost: includeCSM ? Math.round(949 * 1.1 / 50) * 50 - 0.05 : 949 },
                              { level: 400, name: "Domination", baseCost: includeCSM ? Math.round(1149 * 1.1 / 50) * 50 - 0.05 : 1149 }
                            ]).map(tier => ({
                              ...tier,
                              clientMsrp: Math.round(tier.baseCost * (1 + clientHourlyRate / 100) / 50) * 50,
                              profit: Math.round(tier.baseCost * (1 + clientHourlyRate / 100) / 50) * 50 - tier.baseCost,
                              isRecommended: estimate.recommendedTier.lowTier.includes(tier.level.toString()) || 
                                            estimate.recommendedTier.highTier.includes(tier.level.toString())
                            }))}
                            selectedIndustryName={selectedIndustryName}
                            selectedMetroName={selectedMetro?.name || ""}
                            competition={competition}
                            aggressiveness={aggressiveness}
                            clientMargin={clientHourlyRate}
                          />

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
