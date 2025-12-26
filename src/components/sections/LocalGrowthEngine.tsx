import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import bookCover from "@/assets/local-growth-engine-cover.png";
import authorCutout from "@/assets/doug-bryson-cutout.png";

const LocalGrowthEngine = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    toast({
      title: "You're on the list!",
      description: "We'll notify you when The Local Growth Engine is available.",
    });
  };

  return (
    <section id="book" className="py-24 lg:py-32 section-light relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Book + Author */}
          <div className="relative flex justify-center min-h-[450px]">
            {/* Fanned books */}
            <div className="absolute left-8 top-8">
              <img 
                src={bookCover} 
                alt="The Local Growth Engine" 
                className="absolute w-36 lg:w-44 drop-shadow-lg -rotate-12 opacity-50"
              />
              <img 
                src={bookCover} 
                alt="The Local Growth Engine" 
                className="absolute left-8 top-2 w-36 lg:w-44 drop-shadow-lg -rotate-3 opacity-70"
              />
              <img 
                src={bookCover} 
                alt="The Local Growth Engine" 
                className="absolute left-16 top-4 w-36 lg:w-44 drop-shadow-xl rotate-6"
              />
            </div>
            
            {/* Author */}
            <div className="absolute right-4 bottom-12 z-10">
              <img 
                src={authorCutout} 
                alt="Doug Bryson" 
                className="w-44 lg:w-64 drop-shadow-2xl"
              />
            </div>
            
            {/* Author name */}
            <div className="absolute bottom-0 left-8 z-20">
              <p className="text-xl font-semibold text-gray-900">Doug Bryson</p>
              <p className="text-gray-600 text-sm">Founder & Author</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium text-accent-blue bg-accent-blue/10 rounded-full mb-4">
              Coming Soon
            </span>
            
            <h2 className="text-gray-900 mb-4">
              The Local Growth Engine
            </h2>
            
            <p className="text-xl text-gray-700 font-medium mb-6">
              The framework behind everything we deliver.
            </p>

            <p className="text-gray-600 mb-8">
              Most white-label partners just say "we do the work." We teach you to understand it deeply enough to communicate it clearly to clients. That's what keeps them.
            </p>

            {/* Email signup */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-cta whitespace-nowrap"
                >
                  {isSubmitting ? "..." : "Get Early Access"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-accent-blue/10 border border-accent-blue/20 max-w-md">
                <CheckCircle2 className="h-5 w-5 text-accent-blue" />
                <p className="text-gray-900">You're on the list.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalGrowthEngine;