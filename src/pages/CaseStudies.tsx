import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Target, BarChart3 } from "lucide-react";
import { caseStudyCards } from "@/data/caseStudyData";

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
  challenge: string;
  thumbnail?: string;
}

// Export for use in detail page
export const caseStudies: CaseStudy[] = caseStudyCards;

const CaseStudies = () => {
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
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-surface-dark to-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
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
          </div>
        </section>
        
        {/* Case Studies Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            {caseStudies.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study) => (
                  <CaseStudyCard key={study.slug} study={study} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Case Studies Coming Soon</h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                  We're currently compiling our best partnership success stories. 
                  Check back soon to see real results from real agency partnerships.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Section */}
        {caseStudies.length > 0 && (
          <section className="py-16 bg-surface-dark">
            <div className="container mx-auto px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss how we can help you deliver exceptional results for your clients.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Start the Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

// Case Study Card Component
const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  const getIndustryIcon = (industry: string) => {
    // Could expand this based on industry types
    return <Target className="w-5 h-5" />;
  };

  return (
    <Link to={`/case-studies/${study.slug}`}>
      <Card className="group h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
        {study.thumbnail && (
          <div className="aspect-video bg-surface-dark overflow-hidden">
            <img 
              src={study.thumbnail} 
              alt={`${study.client} case study`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <CardContent className="p-6">
          {/* Industry & Services */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            {getIndustryIcon(study.industry)}
            <span>{study.industry}</span>
          </div>
          
          {/* Hero Metric */}
          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary">{study.heroMetric.value}</span>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">{study.heroMetric.label}</p>
          </div>
          
          {/* Headline */}
          <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {study.headline}
          </h3>
          
          {/* Challenge Preview */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {study.challenge}
          </p>
          
          {/* Services Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {study.services.slice(0, 3).map((service) => (
              <span 
                key={service}
                className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
          
          {/* Read More */}
          <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
            Read Case Study
            <ArrowRight className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CaseStudies;
