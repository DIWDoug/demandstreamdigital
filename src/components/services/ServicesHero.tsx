import { ArrowRight } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cta/5 rounded-full blur-3xl opacity-60" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cta font-medium uppercase tracking-widest text-sm mb-6">
            White-Label Fulfillment
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
            Digital Marketing Fulfillment,{" "}
            <span className="text-gradient-primary">Executed as a System</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-6">
            White-label SEO, paid media, and retention execution for agencies that value 
            clarity, scope discipline, and long-term client relationships.
          </p>
          <p className="text-base text-text-muted max-w-2xl mx-auto leading-relaxed mb-10">
            No rigid packages. Services are scoped intentionally and executed on a monthly 
            planning cadence—whether you engage one channel or coordinate across many.
          </p>
          <a 
            href="#contact" 
            className="btn-cta group inline-flex items-center text-lg px-8 py-4"
          >
            Start a Partner Conversation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
