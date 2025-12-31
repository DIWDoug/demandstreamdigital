import { Sparkles, MessageSquare, Search, Globe } from "lucide-react";
import SubtleOrbs from "@/components/SubtleOrbs";
import { useState, useEffect, useRef } from "react";
import { searchPixabayImages } from "@/lib/pixabay";

// Lazy-loaded Pixabay image for the AI section
const LazyPixabayCard = ({ keyword, alt }: { keyword: string; alt: string }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px', threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const fetchImage = async () => {
      try {
        const response = await searchPixabayImages({
          query: keyword,
          imageType: 'photo',
          orientation: 'horizontal',
          perPage: 3,
          minWidth: 600,
          safeSearch: true,
          order: 'popular'
        });

        if (response.hits.length > 0) {
          setImageUrl(response.hits[0].webformatURL);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [isInView, keyword]);

  return (
    <div ref={imgRef} className="relative h-40 rounded-lg overflow-hidden mb-6">
      {(isLoading || !isInView) && (
        <div className="absolute inset-0 bg-gradient-to-br from-surface-elevated to-surface-card animate-pulse" />
      )}
      {imageUrl && (
        <>
          <img
            src={imageUrl}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent" />
        </>
      )}
    </div>
  );
};

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

          {/* The insight with Pixabay image */}
          <div className="premium-card mb-12">
            <LazyPixabayCard 
              keyword="artificial intelligence technology futuristic" 
              alt="AI technology and machine learning visualization"
            />
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  We didn't pivot to AI. Our approach was already there.
                </h3>
                <p className="text-text-secondary mb-4">
                  AI models don't just scrape websites. They evaluate authority signals, 
                  content depth, citation consistency, and reputation markers. These are the 
                  exact foundations of our Local Growth Engine framework.
                </p>
                <p className="text-text-secondary">
                  Clients optimized with our methodology are already appearing in ChatGPT recommendations, 
                  Gemini responses, and Google's AI Overviews, without any additional "AI SEO" work.
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
                Additional cost for AI visibility. It's built into our standard fulfillment.
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
