import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Target, BarChart3, Filter, Sparkles, Wrench, Anchor, Camera, Car, Home, Gavel, Building2 } from "lucide-react";
import { caseStudyCards } from "@/data/caseStudyData";
import { motion, AnimatePresence } from "framer-motion";

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
    seoSpend: string;
  };
  challenge: string;
  thumbnail?: string;
}

// Export for use in detail page
export const caseStudies: CaseStudy[] = caseStudyCards;

// Industry filter options with icons
const industryFilters = [
  { id: "all", label: "All Industries", icon: Sparkles },
  { id: "Plumbing/Home Services", label: "Home Services", icon: Wrench },
  { id: "Recreational Boating", label: "Boating", icon: Anchor },
  { id: "Barn Restoration", label: "Construction", icon: Building2 },
  { id: "Photography", label: "Photography", icon: Camera },
  { id: "Tourist Vehicle Rentals", label: "Rentals", icon: Car },
  { id: "Custom Home Building", label: "Home Building", icon: Home },
  { id: "Auction House", label: "Auction", icon: Gavel },
];

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredStudies = useMemo(() => {
    if (activeFilter === "all") return caseStudies;
    return caseStudies.filter(study => study.industry === activeFilter);
  }, [activeFilter]);

  // Get unique industries from case studies for dynamic filter badges
  const availableIndustries = useMemo(() => {
    const industries = new Set(caseStudies.map(s => s.industry));
    return industryFilters.filter(f => f.id === "all" || industries.has(f.id));
  }, []);

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
        <title>Case Studies | White Label Marketing Results for Agency Partners</title>
        <meta 
          name="description" 
          content="Real results from real agency partnerships. See how we've helped agencies scale with white label SEO, PPC, and content marketing services." 
        />
        <link rel="canonical" href="https://dialedinweb.com/case-studies" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Case Studies | White Label Marketing Results for Agency Partners" />
        <meta property="og:description" content="Real results from real agency partnerships. See how we've helped agencies scale with white label SEO, PPC, and content marketing services." />
        <meta property="og:url" content="https://dialedinweb.com/case-studies" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | White Label Marketing Results for Agency Partners" />
        <meta name="twitter:description" content="Real results from real agency partnerships. See how we've helped agencies scale with white label SEO, PPC, and content marketing services." />
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
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm flex items-center justify-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Case Studies
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Real Results from Real{" "}
                <span className="text-primary">Partnerships</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See how we've helped agency partners scale their client results with 
                white label SEO, paid media, and content marketing services.
              </p>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stats.totalCases}</div>
                <div className="text-sm text-muted-foreground">Case Studies</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-green-500">{stats.avgGrowth}%+</div>
                <div className="text-sm text-muted-foreground">Avg Growth</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stats.industries}</div>
                <div className="text-sm text-muted-foreground">Industries</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Filter Bar */}
        <section className="py-8 border-b border-border/50 sticky top-16 bg-background/95 backdrop-blur-md z-40">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mr-2 flex-shrink-0">
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Filter:</span>
              </div>
              {availableIndustries.map((filter) => {
                const Icon = filter.icon;
                const isActive = activeFilter === filter.id;
                const count = filter.id === "all" 
                  ? caseStudies.length 
                  : caseStudies.filter(s => s.industry === filter.id).length;
                
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0
                      ${isActive 
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                        : 'bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{filter.label}</span>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs px-1.5 py-0 h-5 ${isActive ? 'bg-primary-foreground/20 text-primary-foreground' : ''}`}
                    >
                      {count}
                    </Badge>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Case Studies Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {filteredStudies.length > 0 ? (
                <motion.div 
                  key={activeFilter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                  {filteredStudies.map((study, index) => (
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
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">No Case Studies Found</h2>
                  <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    No case studies match the selected filter. Try selecting a different industry.
                  </p>
                  <button 
                    onClick={() => setActiveFilter("all")}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    View All Case Studies
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
        
        {/* CTA Section */}
        {caseStudies.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-surface-dark to-background relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
            </div>
            
            <div className="container mx-auto px-6 lg:px-8 text-center relative">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4" />
                  Join Our Success Stories
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Create Your{" "}
                  <span className="text-primary">Success Story</span>?
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

  return (
    <Link to={`/case-studies/${study.slug}`} className="group block h-full">
      <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden flex flex-col">
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
            <div className="absolute top-4 left-4">
              <Badge 
                variant="secondary" 
                className="bg-background/90 backdrop-blur-sm border-0 text-foreground flex items-center gap-1.5 px-3 py-1"
              >
                {getIndustryIcon(study.industry)}
                {study.industry}
              </Badge>
            </div>
            
            {/* Hero Metric Overlay */}
            <div className="absolute bottom-4 right-4 text-right">
              <div className="bg-card/95 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-primary">{study.heroMetric.value}</span>
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground max-w-[140px] leading-tight">{study.heroMetric.label}</p>
              </div>
            </div>
          </div>
        )}
        
        <CardContent className="p-6 flex flex-col flex-1">
          {/* Headline */}
          <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {study.headline}
          </h3>
          
          {/* Challenge Preview */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
            {study.challenge}
          </p>
          
          {/* ROI Highlight */}
          {study.roiHighlight && (
            <div className="bg-gradient-to-r from-green-500/10 to-primary/10 border border-green-500/20 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-center flex-1">
                  <p className="text-lg font-bold text-green-500">{study.roiHighlight.roiRange}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">ROI</p>
                </div>
                <div className="w-px h-10 bg-border/50" />
                <div className="text-center flex-1">
                  <p className="text-lg font-bold text-primary">{study.roiHighlight.monthlyRevenue}</p>
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
          <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all pt-2 border-t border-border/50">
            Read Full Case Study
            <ArrowRight className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CaseStudies;
