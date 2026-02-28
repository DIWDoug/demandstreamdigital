import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Target, BarChart3, Sparkles, Wrench, Anchor, Camera, Car, Home, Gavel, Building2, ArrowUpDown, ArrowUp, ArrowDown, Calendar, Layers, Users, User, Flame } from "lucide-react";
import { caseStudyCards } from "@/data/caseStudyData";
import { motion, AnimatePresence } from "framer-motion";
import { getPageOgImage } from "@/lib/ogImages";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Case study data structure
export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  services: string[];
  headline: string;
  heroMetric: {
    value: string;
    label: string;
  };
  secondaryMetrics?: {
    value: string;
    label: string;
  }[];
  roiHighlight?: {
    monthlyRevenue: string;
    roiRange: string;
    seoSpend?: string;
  };
  challenge: string;
  thumbnail?: string;
  relationshipType?: "partner" | "direct";
}

// Export for use in detail page
export const caseStudies: CaseStudy[] = caseStudyCards;

// Sorting options
type SortOption = "growth-desc" | "growth-asc" | "industry" | "recency";

const sortOptions: { id: SortOption; label: string; icon: React.ElementType }[] = [
  { id: "growth-desc", label: "Highest Growth", icon: ArrowUp },
  { id: "growth-asc", label: "Lowest Growth", icon: ArrowDown },
  { id: "industry", label: "Industry A-Z", icon: Layers },
  { id: "recency", label: "Most Recent", icon: Calendar },
];

// Helper to extract growth number from hero metric
const extractGrowthNumber = (study: CaseStudy): number => {
  const value = study.heroMetric.value;
  // Handle percentage values like "+306%", "444%", "+85%"
  const match = value.match(/[+-]?(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

// Order for "recency" - most recent campaigns first (based on typical engagement order)
const recencyOrder = [
  "las-vegas-plumbing-seo",   // January 2025 - Present
  "dallas-plumbing-seo",      // July 2025 - Present
  "florida-photography-seo",   // April 2025 - Dec 2025
  "tourist-vehicle-rentals-seo", // April 2025 - Dec 2025
  "recreational-boating-seo",  // April 2025 - Present
  "custom-home-builder-seo",   // May 2025 - Dec 2025
  "barn-restoration-seo",      // May 2024 - Present
  "auction-house-seo",         // 2022 - 2024
];

const CaseStudies = () => {
  const [sortBy, setSortBy] = useState<SortOption>("growth-desc");
  const ogImage = getPageOgImage('case-studies');
  
  const sortedStudies = useMemo(() => {
    let studies = [...caseStudies];
    
    // Apply sorting
    switch (sortBy) {
      case "growth-desc":
        studies.sort((a, b) => extractGrowthNumber(b) - extractGrowthNumber(a));
        break;
      case "growth-asc":
        studies.sort((a, b) => extractGrowthNumber(a) - extractGrowthNumber(b));
        break;
      case "industry":
        studies.sort((a, b) => a.industry.localeCompare(b.industry));
        break;
      case "recency":
        studies.sort((a, b) => {
          const aIndex = recencyOrder.indexOf(a.slug);
          const bIndex = recencyOrder.indexOf(b.slug);
          return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
        });
        break;
    }
    
    return studies;
  }, [sortBy]);

  // Calculate aggregate stats
  const stats = useMemo(() => {
    const avgGrowth = caseStudies.reduce((acc, study) => {
      const value = parseInt(study.heroMetric.value.replace(/[^0-9]/g, '')) || 0;
      return acc + value;
    }, 0) / caseStudies.length;
    
    return {
      totalCases: caseStudies.length,
      avgGrowth: Math.round(avgGrowth),
      industries: new Set(caseStudies.map(s => s.industry)).size,
    };
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Case Studies | SEO & Marketing Results for Plumbing & HVAC Companies</title>
        <meta 
          name="description" 
          content="Real results from real plumbing and HVAC companies. See how we've driven growth with local SEO, Google Ads, and content marketing." 
        />
        <link rel="canonical" href="https://demandstreamdigital.com/case-studies" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Case Studies | SEO & Marketing Results for Plumbing & HVAC Companies" />
        <meta property="og:description" content="Real results from real plumbing and HVAC companies. See how we've driven growth with local SEO, Google Ads, and content marketing." />
        <meta property="og:url" content="https://demandstreamdigital.com/case-studies" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | SEO & Marketing Results for Plumbing & HVAC Companies" />
        <meta name="twitter:description" content="Real results from real plumbing and HVAC companies. See how we've driven growth with local SEO, Google Ads, and content marketing." />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:site_name" content="Demand Stream Digital" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section with Stats */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-surface-dark to-background relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-accent-blue font-medium mb-4 tracking-wide uppercase text-sm flex items-center justify-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Case Studies
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Real Results from Real{" "}
                <span className="text-accent-blue">Partnerships</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See how we've helped plumbing and HVAC companies grow with 
                local SEO, paid media, and content marketing.
              </p>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-accent-blue">{stats.totalCases}</div>
                <div className="text-sm text-muted-foreground">Case Studies</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-accent-blue">{stats.avgGrowth}%+</div>
                <div className="text-sm text-muted-foreground">Avg Growth</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-accent-blue">{stats.industries}</div>
                <div className="text-sm text-muted-foreground">Industries</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sort Bar */}
        <section className="py-6 border-b border-border/50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground text-sm">
                Showing {sortedStudies.length} case studies
              </p>
              
              {/* Sort Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ArrowUpDown className="w-4 h-4" />
                    <span className="hidden sm:inline">Sort:</span>
                    <span className="font-medium">
                      {sortOptions.find(o => o.id === sortBy)?.label}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {sortOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <DropdownMenuItem
                        key={option.id}
                        onClick={() => setSortBy(option.id)}
                        className={`flex items-center gap-2 cursor-pointer ${sortBy === option.id ? 'bg-accent-blue/10 text-accent-blue' : ''}`}
                      >
                        <Icon className="w-4 h-4" />
                        {option.label}
                        {sortBy === option.id && (
                          <span className="ml-auto text-accent-blue">✓</span>
                        )}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </section>
        
        {/* Featured Case Study */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <FeaturedCaseStudy study={caseStudies.find(s => s.slug === "barn-restoration-seo")!} />
          </div>
        </section>
        
        {/* Case Studies Grid */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div 
              key={sortBy}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {sortedStudies.map((study, index) => (
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CaseStudyCard study={study} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        {caseStudies.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-surface-dark to-background relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-3xl" />
            </div>
            
            <div className="container mx-auto px-6 lg:px-8 text-center relative">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 border border-accent-blue/20 rounded-full text-accent-blue text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4" />
                  Join Our Success Stories
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Create Your{" "}
                  <span className="text-accent-blue">Success Story</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Let's discuss how we can help you deliver exceptional results for your clients 
                  and grow your agency with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                  >
                    Start the Conversation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link 
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-8 py-4 rounded-lg font-medium hover:border-primary/50 transition-colors"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

// Enhanced Case Study Card Component
const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  const getIndustryIcon = (industry: string) => {
    const iconMap: Record<string, React.ElementType> = {
      "Plumbing/Home Services": Wrench,
      "Plumbing & HVAC": Flame,
      "Recreational Boating": Anchor,
      "Barn Restoration": Building2,
      "Photography": Camera,
      "Tourist Vehicle Rentals": Car,
      "Custom Home Building": Home,
      "Auction House": Gavel,
    };
    const Icon = iconMap[industry] || Target;
    return <Icon className="w-4 h-4" />;
  };
  
  const isPartner = study.relationshipType === "partner" || study.relationshipType === undefined;

  return (
    <Link to={`/case-studies/${study.slug}`} className="group block h-full">
      <Card className="h-full bg-card border-border hover:border-accent-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent-blue/10 overflow-hidden flex flex-col">
        {/* Thumbnail with Overlay */}
        {study.thumbnail && (
          <div className="aspect-[16/10] bg-surface-dark overflow-hidden relative">
            <img 
              src={study.thumbnail} 
              alt={`${study.client} case study`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
            
            {/* Industry Badge */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <Badge 
                variant="secondary" 
                className="bg-background/90 backdrop-blur-sm border-0 text-foreground flex items-center gap-1.5 px-3 py-1"
              >
                {getIndustryIcon(study.industry)}
                {study.industry}
              </Badge>
              
              {/* Relationship Type Badge */}
              <Badge 
                variant="secondary" 
                className={`backdrop-blur-sm border-0 flex items-center gap-1.5 px-3 py-1 ${
                  isPartner 
                  ? "bg-accent-blue/90 text-white" 
                    : "bg-amber-500/90 text-white"
                }`}
              >
                {isPartner ? <Users className="w-3 h-3" /> : <User className="w-3 h-3" />}
                {isPartner ? "Partner" : "Direct"}
              </Badge>
            </div>
            
            {/* Hero Metric Overlay */}
            <div className="absolute bottom-4 right-4 text-right">
              <div className="bg-card/95 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-accent-blue">{study.heroMetric.value}</span>
                  <TrendingUp className="w-4 h-4 text-accent-blue" />
                </div>
                <p className="text-xs text-muted-foreground max-w-[140px] leading-tight">{study.heroMetric.label}</p>
              </div>
            </div>
          </div>
        )}
        
        
        <CardContent className="p-6 flex flex-col flex-1">
          {/* Headline */}
          <h3 className="text-lg font-semibold mb-3 group-hover:text-accent-blue transition-colors line-clamp-2">
            {study.headline}
          </h3>
          
          {/* Challenge Preview */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
            {study.challenge}
          </p>
          
          {/* ROI Highlight */}
          {study.roiHighlight && (
            <div className="bg-gradient-to-r from-accent-blue/10 to-accent-blue/5 border border-accent-blue/20 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-center flex-1">
                  <p className="text-lg font-bold text-accent-blue">{study.roiHighlight.roiRange}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">ROI</p>
                </div>
                <div className="w-px h-10 bg-border/50" />
                <div className="text-center flex-1">
                  <p className="text-lg font-bold text-accent-blue">{study.roiHighlight.monthlyRevenue}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Revenue</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Services Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {study.services.slice(0, 3).map((service) => (
              <span 
                key={service}
                className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded"
              >
                {service}
              </span>
            ))}
            {study.services.length > 3 && (
              <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded">
                +{study.services.length - 3}
              </span>
            )}
          </div>
          
          {/* Read More */}
          <div className="flex items-center gap-2 text-accent-blue font-medium text-sm group-hover:gap-3 transition-all pt-2 border-t border-border/50">
            Read Full Case Study
            <ArrowRight className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

// Featured Case Study Component
const FeaturedCaseStudy = ({ study }: { study: CaseStudy }) => {
  const getIndustryIcon = (industry: string) => {
    const iconMap: Record<string, React.ElementType> = {
      "Plumbing/Home Services": Wrench,
      "Plumbing & HVAC": Flame,
      "Recreational Boating": Anchor,
      "Barn Restoration": Building2,
      "Photography": Camera,
      "Tourist Vehicle Rentals": Car,
      "Custom Home Building": Home,
      "Auction House": Gavel,
    };
    const Icon = iconMap[industry] || Target;
    return <Icon className="w-5 h-5" />;
  };
  
  const isPartner = study.relationshipType === "partner" || study.relationshipType === undefined;

  return (
    <Link to={`/case-studies/${study.slug}`} className="group block">
      <Card className="bg-gradient-to-br from-accent-blue/5 via-card to-card border-accent-blue/20 hover:border-accent-blue/40 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-blue/10 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Side */}
          {study.thumbnail && (
            <div className="aspect-[16/10] lg:aspect-auto lg:min-h-[400px] bg-surface-dark overflow-hidden relative">
              <img 
                src={study.thumbnail} 
                alt={`${study.client} case study`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:hidden" />
              
              {/* Featured Badge */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <Badge className="bg-accent-blue text-white border-0 flex items-center gap-1.5 px-3 py-1.5 shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  Featured Case Study
                </Badge>
                
                {/* Relationship Type Badge */}
                <Badge 
                  className={`border-0 flex items-center gap-1.5 px-3 py-1.5 shadow-lg ${
                    isPartner 
                      ? "bg-accent-blue/80 text-white" 
                      : "bg-amber-500 text-white"
                  }`}
                >
                  {isPartner ? <Users className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  {isPartner ? "Partner" : "Direct"}
                </Badge>
              </div>
            </div>
          )}
          
          {/* Content Side */}
          <CardContent className="p-8 lg:p-10 flex flex-col justify-center">
            {/* Industry Badge */}
            <div className="flex items-center gap-3 mb-4">
              <Badge 
                variant="secondary" 
                className="bg-background border-border text-foreground flex items-center gap-1.5 px-3 py-1"
              >
                {getIndustryIcon(study.industry)}
                {study.industry}
              </Badge>
            </div>
            
            {/* Headline */}
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-accent-blue transition-colors">
              {study.headline}
            </h2>
            
            {/* Challenge */}
            <p className="text-muted-foreground mb-6 line-clamp-3">
              {study.challenge}
            </p>
            
            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-gradient-to-br from-accent-blue/10 to-transparent rounded-lg border border-accent-blue/20">
                <div className="text-2xl lg:text-3xl font-bold text-accent-blue flex items-center justify-center gap-1">
                  {study.heroMetric.value}
                  <TrendingUp className="w-5 h-5" />
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-tight">{study.heroMetric.label}</p>
              </div>
              {study.secondaryMetrics?.slice(0, 2).map((metric, i) => (
                <div key={i} className="text-center p-3 bg-muted/50 rounded-lg border border-border/50">
                  <div className="text-xl lg:text-2xl font-bold text-foreground">{metric.value}</div>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">{metric.label}</p>
                </div>
              ))}
            </div>
            
            {/* ROI Highlight */}
            {study.roiHighlight && (
              <div className="bg-gradient-to-r from-accent-blue/10 to-accent-blue/5 border border-accent-blue/20 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-around gap-4">
                  <div className="text-center">
                    <p className="text-xl lg:text-2xl font-bold text-accent-blue">{study.roiHighlight.roiRange}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">ROI</p>
                  </div>
                  <div className="w-px h-12 bg-border/50" />
                  <div className="text-center">
                    <p className="text-xl lg:text-2xl font-bold text-accent-blue">{study.roiHighlight.monthlyRevenue}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Revenue Potential</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Services */}
            <div className="flex flex-wrap gap-2 mb-6">
              {study.services.map((service) => (
                <span 
                  key={service}
                  className="text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
            
            {/* CTA */}
            <div className="flex items-center gap-2 text-accent-blue font-semibold group-hover:gap-4 transition-all">
              Read Full Case Study
              <ArrowRight className="w-5 h-5" />
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

export default CaseStudies;
