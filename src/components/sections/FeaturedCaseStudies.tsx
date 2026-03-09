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
    <section className="py-28 lg:py-36 bg-background relative overflow-hidden">
      <StreamTexture variant="dark" opacity={0.08} />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent-blue/10 text-accent-blue text-sm font-medium rounded-full mb-5">
            Proven Results
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">Plumbing & HVAC Digital Marketing Results</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results for real clients. See how we've helped businesses dominate their local markets.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto mb-14">
          {featuredStudies.map((study, index) => {
            if (!study) return null;
            const Icon = getIcon(index);

            return (
              <Link
                key={study.slug}
                to={`/case-studies/${study.slug}`}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">

                {/* Thumbnail */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={study.thumbnail}
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Hero Metric Overlay */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-xs text-white/70 uppercase tracking-wider">
                        {study.industry}
                      </span>
                    </div>
                    <div className="text-4xl font-bold text-white">
                      {study.heroMetric.value}
                    </div>
                    <div className="text-base text-white/80 mt-0.5">
                      {study.heroMetric.label}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {study.headline}
                  </h3>
                  
                  {/* ROI Highlight */}
                  {study.roiHighlight &&
                  <div className="flex items-center justify-between text-sm pt-4 border-t border-border/50">
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
                <div className="absolute top-5 right-5 w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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