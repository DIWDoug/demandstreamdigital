import { ArrowRight } from "lucide-react";
import bookImage from "@/assets/local-growth-engine-book-v3.png";

const BookCTA = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cta/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Book Image */}
            <div className="flex justify-center md:justify-end order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-cta/20 rounded-lg blur-2xl transform rotate-3" />
                <img 
                  src={bookImage} 
                  alt="The Local Growth Engine Book" 
                  className="relative w-64 md:w-80 drop-shadow-2xl"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 md:order-2">
              <p className="text-cta font-medium uppercase tracking-widest mb-4">
                Free Resource
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Local Growth Engine
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Get the playbook for scaling local marketing services. Learn the exact strategies we use to help agencies 
                dominate local search for their clients—from SEO to paid media to reputation management.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-cta" />
                  Proven frameworks for local lead generation
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-cta" />
                  Real case studies from multi-location campaigns
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-cta" />
                  Step-by-step implementation guides
                </li>
              </ul>
              <a 
                href="#contact" 
                className="btn-cta group inline-flex"
              >
                Get the Book
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCTA;
