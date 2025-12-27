import { Sparkles, MessageSquare, Search, Globe } from "lucide-react";
import SubtleOrbs from "@/components/SubtleOrbs";

const AIVisibility = () => {
  const platforms = [
    { icon: MessageSquare, name: "ChatGPT", description: "OpenAI's conversational search" },
    { icon: Sparkles, name: "Gemini", description: "Google's AI assistant" },
    { icon: Search, name: "AI Overviews", description: "Google's AI-powered results" },
    { icon: Globe, name: "Perplexity", description: "AI-native search engine" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface-dark relative overflow-hidden">
      <SubtleOrbs variant="bottom-left" />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Ahead of the Curve
            </div>
            
            <h2 className="mb-6 text-foreground">
              Already Optimized for<br />AI Search
            </h2>
            
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              When AI search emerged, we realized something: the methodology we'd been using for years 
              was exactly what large language models look for when recommending local businesses.
            </p>
          </div>

          {/* The insight */}
          <div className="premium-card mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  We didn't pivot to AI. Our approach was already there.
                </h3>
                <p className="text-text-secondary mb-4">
                  AI models don't just scrape websites — they evaluate authority signals, 
                  content depth, citation consistency, and reputation markers. These are the 
                  exact foundations of our Local Growth Engine framework.
                </p>
                <p className="text-text-secondary">
                  Clients optimized with our methodology are already appearing in ChatGPT recommendations, 
                  Gemini responses, and Google's AI Overviews — without any additional "AI SEO" work.
                </p>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-text-muted uppercase tracking-widest mb-4">
                  Where our clients appear
                </p>
                {platforms.map((platform, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg bg-surface-dark border border-border"
                  >
                    <div className="p-2 rounded-lg bg-accent-blue/10">
                      <platform.icon className="h-4 w-4 text-accent-blue" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium text-sm">{platform.name}</p>
                      <p className="text-text-muted text-xs">{platform.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What this means */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <p className="text-3xl font-bold text-cta mb-2">Zero</p>
              <p className="text-text-secondary text-sm">
                Additional cost for AI visibility — it's built into our standard fulfillment
              </p>
            </div>
            <div className="text-center p-6">
              <p className="text-3xl font-bold text-cta mb-2">Future-Proof</p>
              <p className="text-text-secondary text-sm">
                As AI search grows, your clients are already positioned to capture that traffic
              </p>
            </div>
            <div className="text-center p-6">
              <p className="text-3xl font-bold text-cta mb-2">Proven</p>
              <p className="text-text-secondary text-sm">
                The same methodology that's generated $2M+ in partner revenue
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default AIVisibility;
