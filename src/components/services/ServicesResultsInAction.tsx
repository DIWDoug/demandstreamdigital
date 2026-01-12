import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudyCards } from "@/data/caseStudyData";

// Featured case studies for Services page - showing breadth of inbound marketing results
const featuredSlugs = [
  "barn-restoration-seo",
  "dallas-plumbing-seo",
  "recreational-boating-seo",
];

const ServicesResultsInAction = () => {
  const featuredStudies = featuredSlugs
    .map(slug => caseStudyCards.find(c => c.slug === slug))
    .filter(Boolean);

  return (
    <section id="results" className="py-16 lg:py-20 bg-surface-dark scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Proven Results
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Results in Action
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              See how our inbound marketing approach delivers measurable growth across industries.
            </p>
          </div>

          {/* Compact Case Study Cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {featuredStudies.map((study) => {
              if (!study) return null;
              
              return (
                <Link
                  key={study.slug}
                  to={`/case-studies/${study.slug}`}
                  className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={study.thumbnail}
                      alt={study.client}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Hero Metric Overlay */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <TrendingUp className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs text-white/70 uppercase tracking-wider">
                          {study.industry}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {study.heroMetric.value}
                      </div>
                      <div className="text-xs text-white/80">
                        {study.heroMetric.label}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {study.headline}
                    </h3>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-3 right-3 w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-3.5 h-3.5 text-primary" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button asChild variant="outline" size="sm" className="group">
              <Link to="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesResultsInAction;
