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
  roleDescription: string;
  capabilities: string[];
  spokes: { title: string; slug: string }[];
}

const serviceContent: Record<string, { roleDescription: string; capabilities: string[] }> = {
  "local-seo": {
    roleDescription: "Local SEO provides the organic foundation for visibility in local search results. It supports Google Maps performance, authority building, and conversion efforts. Local SEO can be engaged as a standalone service or as part of a coordinated fulfillment system.",
    capabilities: [
      "On-page optimization aligned to local intent",
      "Local landing page structure and internal linking",
      "Competitive gap analysis and prioritization",
      "Content alignment for service and location relevance",
      "Foundational SEO hygiene and technical clarity"
    ]
  },
  "google-maps": {
    roleDescription: "Google Maps execution focuses on proximity-driven visibility and high-intent local searches. It works alongside Local SEO and authority signals. Google Maps can be engaged independently or as part of a coordinated system.",
    capabilities: [
      "Google Business Profile optimization and hygiene",
      "Category and service alignment",
      "Review velocity and trust signal coordination",
      "Local relevance and engagement signals",
      "Ongoing monitoring and maintenance"
    ]
  },
  "paid-media": {
    roleDescription: "Paid media captures demand when and where it makes sense. It can operate as a standalone channel or alongside organic visibility and conversion infrastructure to ensure spend is intentional and measurable.",
    capabilities: [
      "Search and performance-based ad execution",
      "Budget pacing and guardrails",
      "Landing page and intent alignment",
      "Conversion tracking hygiene",
      "Ongoing optimization within defined scope"
    ]
  },
  "authority": {
    roleDescription: "Authority building reinforces trust signals that support rankings, Maps visibility, and conversion confidence. It may be engaged independently but is most effective when coordinated with visibility and content efforts.",
    capabilities: [
      "Link strategy aligned to brand and risk profile",
      "Anchor text diversification and quality control",
      "Supporting content for authority assets",
      "Entity reinforcement signals",
      "Long-term authority pacing"
    ]
  },
  "reporting": {
    roleDescription: "Measurement provides clarity without vanity metrics. Reporting can support standalone services or coordinated execution, always designed to inform agency decisions and client communication.",
    capabilities: [
      "KPI definition and alignment",
      "Local and organic visibility tracking",
      "Paid media performance clarity",
      "Attribution context and limitations",
      "Executive-level reporting structure"
    ]
  },
  "email-marketing": {
    roleDescription: "Retention and re-engagement support ongoing relationships and improve conversion efficiency. These efforts may be deployed independently or alongside acquisition channels to stabilize performance.",
    capabilities: [
      "Retargeting audience strategy",
      "Email campaign support and cadence",
      "Offer and seasonal planning",
      "Review and reputation alignment",
      "Consistency across touchpoints"
    ]
  }
};

const linkLabels: Record<string, string> = {
  "local-seo": "View Local SEO Execution",
  "google-maps": "View Google Maps Execution",
  "paid-media": "View Paid Media Execution",
  "authority": "View Authority Execution",
  "reporting": "View Reporting Framework",
  "email-marketing": "View Retention Execution"
};

const ServiceBlock = ({ title, slug, roleDescription, capabilities, spokes }: ServiceBlockProps) => {
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);

  return (
    <div className="border-b border-border/30 pb-10 mb-10 last:border-0 last:pb-0 last:mb-0">
      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-xs text-text-muted uppercase tracking-wide mb-4">
        Role in the system
      </p>
      <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
        {roleDescription}
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
                These capabilities support {title} execution and are not deployed independently.
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
        {linkLabels[slug] || `View ${title} details`}
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
            Each area represents a category of execution that can be engaged individually or as part 
            of a coordinated system. Scope determines which capabilities are activated and how they're prioritized.
          </p>

          {hubs.map((hub, index) => {
            const content = serviceContent[hub.slug] || {
              roleDescription: hub.summary,
              capabilities: hub.spokes.slice(0, 5).map(s => s.title)
            };
            
            return (
              <ServiceBlock
                key={index}
                title={hub.title}
                slug={hub.slug}
                roleDescription={content.roleDescription}
                capabilities={content.capabilities}
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
