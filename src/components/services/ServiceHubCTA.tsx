import { ArrowRight, Phone } from "lucide-react";
import SubtleOrbs from "@/components/SubtleOrbs";

interface ServiceHubCTAProps {
  hubTitle: string;
}

const ServiceHubCTA = ({ hubTitle }: ServiceHubCTAProps) => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <SubtleOrbs variant="center" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Scale Your{" "}
            <span className="text-accent-blue drop-shadow-[0_0_20px_hsl(var(--accent-blue)/0.4)]">{hubTitle}</span>
            {" "}Offering?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
            Let's discuss how we can become your silent partner for {hubTitle.toLowerCase()} fulfillment. 
            No contracts, no minimums—just quality work that keeps your clients happy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-cta group">
              Schedule a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="tel:2143072995"
              className="flex items-center gap-2 text-foreground font-medium hover:text-cta transition-colors"
            >
              <Phone className="h-5 w-5 text-cta" />
              (214) 307-2995
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHubCTA;
