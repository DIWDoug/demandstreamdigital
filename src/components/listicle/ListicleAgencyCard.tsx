import { ExternalLink, Star, Users, Calendar, Globe, DollarSign, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AgencyData } from "@/data/listicles/white-label-seo-agencies";

interface ListicleAgencyCardProps {
  agency: AgencyData;
  isTopPick?: boolean;
}

const ListicleAgencyCard = ({ agency, isTopPick }: ListicleAgencyCardProps) => {
  if (!agency.deepDive) return null;

  return (
    <div
      id={isTopPick ? "top-pick-dialed-in-web" : `${agency.rank}-${agency.name.toLowerCase().replace(/\s+/g, "-")}`}
      className={`scroll-mt-24 ${isTopPick ? "mb-12" : "mb-10"}`}
    >
      {/* Card Header */}
      <div className={`rounded-xl border ${isTopPick ? "border-primary/30 bg-primary/5" : "border-border bg-card"} overflow-hidden`}>
        {/* Title Bar */}
        <div className={`px-6 py-4 border-b ${isTopPick ? "border-primary/20 bg-primary/10" : "border-border bg-muted/30"}`}>
          <div className="flex items-center gap-3">
            {isTopPick ? (
              <span className="text-2xl">⭐</span>
            ) : (
              <span className="text-xl font-bold text-muted-foreground">{agency.rank}.</span>
            )}
            <h3 className={`text-xl md:text-2xl font-bold ${isTopPick ? "text-primary" : "text-foreground"}`}>
              {isTopPick ? "Top Pick: " : ""}{agency.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Website</p>
                {isTopPick ? (
                  <a
                    href={agency.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[hsl(var(--accent-blue))] hover:underline inline-flex items-center gap-1"
                  >
                    {agency.websiteDisplay}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-sm font-medium text-foreground">{agency.websiteDisplay}</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Min Project</p>
                <p className="text-sm font-medium text-foreground">{agency.minProject}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <div>
                <p className="text-xs text-muted-foreground">Client Rating</p>
                <p className="text-sm font-medium text-foreground">
                  {agency.clientRating.toFixed(1)} ({agency.clientReviews} reviews)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Years in Business</p>
                <p className="text-sm font-medium text-foreground">{agency.yearsInBusiness}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 border-t border-border/50">
            <div>
              <p className="text-xs text-muted-foreground">Monthly Visits</p>
              <p className="text-sm font-medium text-foreground">{agency.monthlyVisits}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Team Size (LinkedIn)</p>
              <p className="text-sm font-medium text-foreground">{agency.linkedInMembers}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Employee Rating</p>
              <p className="text-sm font-medium text-foreground">
                {agency.employeeRating.toFixed(1)} ({agency.employeeReviews} reviews)
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Hourly Rate</p>
              <p className="text-sm font-medium text-foreground">{agency.hourlyRate}</p>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-lg font-medium text-foreground italic border-l-4 border-primary pl-4">
            {agency.deepDive.tagline}
          </p>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {agency.deepDive.description}
          </p>

          {/* Core Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Core Services:</h4>
            <ul className="space-y-2">
              {agency.deepDive.coreServices.map((service, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why They Rank */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">
              Why They Rank {isTopPick ? "as Top Pick" : `#${agency.rank}`}:
            </h4>
            <ul className="space-y-2">
              {agency.deepDive.whyTheyRank.map((reason, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonials */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">What Partners Are Saying:</h4>
            <div className="space-y-3">
              {agency.deepDive.clientTestimonials.map((testimonial, index) => (
                <blockquote
                  key={index}
                  className="text-sm italic text-muted-foreground bg-muted/30 rounded-lg p-4 border-l-2 border-primary/30"
                >
                  "{testimonial}"
                </blockquote>
              ))}
            </div>
          </div>

          {/* CTA */}
          {isTopPick && (
            <div className="pt-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="/contact">Start the Conversation</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListicleAgencyCard;
