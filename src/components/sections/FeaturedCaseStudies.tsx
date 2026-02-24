import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Award, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudyCards } from "@/data/caseStudyData";
import StreamTexture from "@/components/StreamTexture";


// Featured case studies - Las Vegas Plumbing & Dallas Plumbing
const featuredSlugs = [
"las-vegas-plumbing-seo",
"dallas-plumbing-seo"];


const getIcon = (index: number) => {
  const icons = [TrendingUp, Trophy, Award];
  return icons[index % icons.length];
};

const FeaturedCaseStudies = () => {
  const featuredStudies = featuredSlugs.
  map((slug) => caseStudyCards.find((c) => c.slug === slug)).
  filter(Boolean);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <StreamTexture variant="dark" opacity={0.08} />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent-blue/10 text-accent-blue text-sm font-medium rounded-full mb-4">
            Proven Results
          </span>
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Plumbing & HVAC Digital Marketing Results

          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results for real clients. See how we've helped businesses dominate their local markets.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-10">
          {featuredStudies.map((study, index) => {
            if (!study) return null;
            const Icon = getIcon(index);

            return (
              <Link
                key={study.slug}
                to={`/case-studies/${study.slug}`}
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">

                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={study.thumbnail}
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Hero Metric Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-xs text-white/70 uppercase tracking-wider">
                        {study.industry}
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-white">
                      {study.heroMetric.value}
                    </div>
                    <div className="text-sm text-white/80">
                      {study.heroMetric.label}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {study.headline}
                  </h3>
                  
                  {/* ROI Highlight */}
                  {study.roiHighlight &&
                  <div className="flex items-center justify-between text-sm pt-3 border-t border-border/50">
                      <div>
                        <span className="text-muted-foreground">Revenue: </span>
                        <span className="text-foreground font-medium">{study.roiHighlight.monthlyRevenue}</span>
                      </div>
                      <div className="text-primary font-semibold">
                        {study.roiHighlight.roiRange} ROI
                      </div>
                    </div>
                  }
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </Link>);

          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="group">
            <Link to="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>);

};

export default FeaturedCaseStudies;