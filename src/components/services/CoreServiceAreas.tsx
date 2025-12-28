import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { hubs } from "@/data/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceBlockProps {
  title: string;
  slug: string;
  description: string;
  capabilities: string[];
  spokes: { title: string; slug: string }[];
}

const serviceDescriptions: Record<string, { description: string; capabilities: string[] }> = {
  "local-seo": {
    description: "Organic visibility for service-area businesses. We optimize for local search intent, build geographic authority, and capture demand where your clients operate.",
    capabilities: [
      "On-page optimization for location-specific pages",
      "Technical SEO for multi-location architecture",
      "Local content strategy and development",
      "Keyword research and intent mapping",
      "Competitor and market analysis"
    ]
  },
  "google-maps": {
    description: "Google Business Profile optimization and local pack visibility. We manage the elements that drive calls, directions, and high-intent traffic from Maps results.",
    capabilities: [
      "GBP audit and optimization",
      "Review generation and response management",
      "Citation building and consistency",
      "Local pack ranking strategy",
      "Multi-location GBP management"
    ]
  },
  "paid-media": {
    description: "Paid acquisition across search and social channels. We build and manage campaigns that convert, with transparent reporting and scope-defined budgets.",
    capabilities: [
      "Google Ads search and display campaigns",
      "Meta advertising (Facebook/Instagram)",
      "Landing page strategy",
      "Conversion tracking implementation",
      "Budget allocation and optimization"
    ]
  },
  "authority": {
    description: "Trust signals that support rankings and conversions. We build credibility through strategic placements, content, and digital PR that reinforces expertise.",
    capabilities: [
      "Local link acquisition",
      "Digital PR and media placements",
      "Content syndication",
      "Industry authority building",
      "Citation and directory optimization"
    ]
  },
  "reporting": {
    description: "Measurement infrastructure and performance reporting. We build the tracking, dashboards, and reporting cadence that keeps everyone aligned on results.",
    capabilities: [
      "Analytics setup and configuration",
      "Custom dashboard development",
      "Call tracking integration",
      "Monthly performance reporting",
      "Goal and conversion tracking"
    ]
  },
  "email-marketing": {
    description: "Retention and re-engagement through email and retargeting. We help clients stay connected with past customers and nurture leads that aren't ready to convert.",
    capabilities: [
      "Email campaign strategy and execution",
      "List segmentation and management",
      "Retargeting campaign setup",
      "Automation workflows",
      "Performance optimization"
    ]
  }
};

const ServiceBlock = ({ title, slug, description, capabilities, spokes }: ServiceBlockProps) => {
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);

  return (
    <div className="border-b border-border/30 pb-10 mb-10 last:border-0 last:pb-0 last:mb-0">
      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
        {description}
      </p>

      <Accordion type="single" collapsible className="mb-6">
        <AccordionItem value="capabilities" className="border-0">
          <AccordionTrigger className="text-sm text-text-muted hover:text-foreground py-0 hover:no-underline">
            What this supports
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <ul className="space-y-2">
              {capabilities.map((capability, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="w-1 h-1 rounded-full bg-accent-blue/50 mt-2 flex-shrink-0" />
                  {capability}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Supporting Capabilities (collapsed) */}
      {spokes.length > 0 && (
        <div className="mb-6">
          <button
            onClick={() => setCapabilitiesOpen(!capabilitiesOpen)}
            className="flex items-center gap-2 text-sm text-text-muted hover:text-foreground transition-colors"
          >
            <ChevronDown className={`h-4 w-4 transition-transform ${capabilitiesOpen ? 'rotate-180' : ''}`} />
            <span>Supporting capabilities</span>
          </button>
          
          {capabilitiesOpen && (
            <div className="mt-4 pl-6 border-l border-border/30">
              <p className="text-xs text-text-muted mb-3">
                These capabilities support execution and are not deployed independently.
              </p>
              <ul className="space-y-1">
                {spokes.map((spoke, index) => (
                  <li key={index}>
                    <Link 
                      to={`/services/${slug}/${spoke.slug}`}
                      className="text-sm text-text-secondary hover:text-accent-blue transition-colors"
                    >
                      {spoke.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <Link 
        to={`/services/${slug}`}
        className="inline-flex items-center gap-2 text-sm text-cta hover:text-cta/80 transition-colors"
      >
        View {title} details
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

const CoreServiceAreas = () => {
  return (
    <section className="py-16 lg:py-24 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Core Service Areas
          </h2>
          <p className="text-text-secondary mb-12">
            Each area represents a category of execution, not a standalone offering. 
            Scope determines which capabilities are activated and how they're coordinated.
          </p>

          {hubs.map((hub, index) => {
            const details = serviceDescriptions[hub.slug] || {
              description: hub.summary,
              capabilities: hub.spokes.slice(0, 5).map(s => s.title)
            };
            
            return (
              <ServiceBlock
                key={index}
                title={hub.title}
                slug={hub.slug}
                description={details.description}
                capabilities={details.capabilities}
                spokes={hub.spokes.map(s => ({ title: s.title, slug: s.slug }))}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServiceAreas;
