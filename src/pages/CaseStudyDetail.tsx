import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState, useRef } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { ArrowLeft, ArrowRight, TrendingUp, CheckCircle2, Download, Volume2, VolumeX, Pause, Play, BookOpen, X, Loader2, FileX, ExternalLink, Users, User, Trophy, Target, Rocket, BarChart3, Star, Shield, Zap, Crown } from "lucide-react";
import { caseStudies } from "./CaseStudies";
import { caseStudyFullContent, getCaseStudyNarration } from "@/data/caseStudyData";


// Extended case study content structure
export interface CaseStudyContent {
  slug: string;
  client: string;
  industry: string;
  services: string[];
  headline: string;
  heroMetric: {
    value: string;
    label: string;
  };
  secondaryMetrics: {
    value: string;
    label: string;
  }[];
  challenge: string;
  challengeDetails: string[];
  solution: string;
  solutionDetails: string[];
  results: string;
  resultDetails: string[];
  roiImpact?: {
    headline: string;
    details: string[];
    metrics: Record<string, string>;
  };
  highlights?: {
    icon: "trophy" | "target" | "rocket" | "chart" | "star" | "shield" | "zap" | "crown";
    title: string;
    description: string;
  }[];
  timeline?: string;
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
  heroImage?: string;
  growthChart?: string;
  pdfDownload?: string;
  narrationText?: string;
  noContentBadge?: boolean;
  relationshipType?: "partner" | "direct";
}

// Use imported content
export const caseStudyContent = caseStudyFullContent;

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Audio state
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);
  
  
  
  
  const study = slug ? caseStudyContent[slug] : null;
  const basicStudy = caseStudies.find(s => s.slug === slug);
  
  if (!study && !basicStudy) {
    return <Navigate to="/case-studies" replace />;
  }
  
  // Use full content if available, otherwise show placeholder
  const content = study || {
    ...basicStudy,
    challengeDetails: [],
    solutionDetails: [],
    resultDetails: [],
    secondaryMetrics: basicStudy?.secondaryMetrics || [],
  } as CaseStudyContent;

  // Find next/prev case studies for navigation
  const currentIndex = caseStudies.findIndex(s => s.slug === slug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  // Audio playback handler
  const handlePlayAudio = async () => {
    // If already playing, pause
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }
    
    // If we already have the audio loaded, just play it
    if (audioRef.current && audioUrlRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      return;
    }
    
    // Fetch and play new audio
    const narrationText = getCaseStudyNarration(slug || '');
    if (!narrationText) return;
    
    setIsLoadingAudio(true);
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/elevenlabs-case-study-tts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ text: narrationText, slug }),
        }
      );
      
      if (!response.ok) {
        throw new Error("Failed to generate audio");
      }
      
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      audioUrlRef.current = audioUrl;
      
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      
      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => {
        setIsPlaying(false);
        console.error("Audio playback error");
      };
      
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("TTS error:", error);
    } finally {
      setIsLoadingAudio(false);
    }
  };

  // Generate OG image URL from slug
  const getOgImageUrl = (caseStudySlug: string) => {
    const slugToImage: Record<string, string> = {
      'recreational-boating-seo': 'recreational-boating-hero.jpg',
      'barn-restoration-seo': 'barn-restoration-hero.jpg',
      'florida-photography-seo': 'florida-photography-hero.jpg',
      'tourist-vehicle-rentals-seo': 'tourist-vehicle-rentals-hero.jpg',
      'custom-home-builder-seo': 'custom-home-builder-hero.jpg',
      'auction-house-seo': 'auction-house-hero.jpg',
      'dallas-plumbing-seo': 'dallas-plumbing-hero.jpg',
      'las-vegas-plumbing-seo': 'las-vegas-plumbing-hero.jpg',
    };
    const imageName = slugToImage[caseStudySlug] || 'dialedinweb-logo.png';
    return slugToImage[caseStudySlug] 
      ? `https://dialedinweb.com/og-images/${imageName}`
      : `https://dialedinweb.com/${imageName}`;
  };

  const ogImageUrl = getOgImageUrl(slug || '');

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{content.headline} | Case Study | Dialed-In Web</title>
        <meta 
          name="description" 
          content={`${content.heroMetric.value} ${content.heroMetric.label}. See how we helped this ${content.industry} client achieve exceptional results.`} 
        />
        <link rel="canonical" href={`https://dialedinweb.com/case-studies/${slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${content.headline} | Case Study`} />
        <meta property="og:description" content={`${content.heroMetric.value} ${content.heroMetric.label}. A white label marketing success story.`} />
        <meta property="og:url" content={`https://dialedinweb.com/case-studies/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Dialed-In Web" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${content.headline} | Case Study`} />
        <meta name="twitter:description" content={`${content.heroMetric.value} ${content.heroMetric.label}. A white label marketing success story.`} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-surface-dark to-background">
          <div className="container mx-auto px-6 lg:px-8">
            {/* Breadcrumb */}
            <Link 
              to="/case-studies"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Industry Tag, Relationship Badge & No Content Badge */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {content.industry}
                  </div>
                  
                  {/* Relationship Type Badge */}
                  {(() => {
                    const isPartner = content.relationshipType === "partner" || content.relationshipType === undefined;
                    return (
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                        isPartner 
                          ? "bg-blue-600/20 text-blue-400 border border-blue-500/40" 
                          : "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                      }`}>
                        {isPartner ? <Users className="w-4 h-4" /> : <User className="w-4 h-4" />}
                        {isPartner ? "Partner Relationship" : "Direct Relationship"}
                      </div>
                    );
                  })()}
                  
                  {content.noContentBadge && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-400 rounded-full text-sm font-semibold animate-pulse">
                      <FileX className="w-4 h-4" />
                      Zero On-Site Content
                    </div>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {content.headline}
                </h1>
                
                {/* Services */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {content.services.map((service) => (
                    <span 
                      key={service}
                      className="text-sm px-3 py-1 bg-card border border-border rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  {content.pdfDownload && (
                    <>
                      <a 
                        href={content.pdfDownload}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:bg-surface-elevated transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </a>
                      <a
                        href={content.pdfDownload}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:bg-surface-elevated transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View PDF
                      </a>
                    </>
                  )}
                  
                  {content.narrationText && (
                    <button
                      onClick={handlePlayAudio}
                      disabled={isLoadingAudio}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                    >
                      {isLoadingAudio ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Loading...
                        </>
                      ) : isPlaying ? (
                        <>
                          <Pause className="w-4 h-4" />
                          Pause Audio
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4" />
                          Listen to Case Study
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
              
              {/* Metrics Card */}
              <div className="bg-card border border-border rounded-2xl p-8">
                {/* Hero Metric */}
                <div className="text-center pb-6 border-b border-border mb-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-5xl md:text-6xl font-bold text-primary">
                      {content.heroMetric.value}
                    </span>
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground">{content.heroMetric.label}</p>
                </div>
                
                {/* Secondary Metrics */}
                {content.secondaryMetrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-6">
                    {content.secondaryMetrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                          {metric.value}
                        </p>
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Hero Image */}
        {content.heroImage && (
          <section className="pb-8 md:pb-12">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="relative aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden">
                <img 
                  src={content.heroImage} 
                  alt={`${content.client} - ${content.industry}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </section>
        )}
        
        
        {/* Content Sections */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-16">
              
              {/* Key Highlights Cards - At Top */}
              {content.highlights && content.highlights.length > 0 && (
                <div className="not-prose">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">★</span>
                    Key Highlights
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {content.highlights.map((highlight, index) => {
                      const IconComponent = {
                        trophy: Trophy,
                        target: Target,
                        rocket: Rocket,
                        chart: BarChart3,
                        star: Star,
                        shield: Shield,
                        zap: Zap,
                        crown: Crown,
                      }[highlight.icon];
                      
                      const gradients = [
                        "from-primary/20 to-blue-500/10 border-primary/30",
                        "from-green-500/20 to-emerald-500/10 border-green-500/30",
                        "from-amber-500/20 to-orange-500/10 border-amber-500/30",
                      ];
                      
                      const iconColors = [
                        "text-primary",
                        "text-green-500",
                        "text-amber-500",
                      ];
                      
                      return (
                        <div 
                          key={index}
                          className={`relative overflow-hidden bg-gradient-to-br ${gradients[index % 3]} border rounded-xl p-6`}
                        >
                          <div className={`w-12 h-12 rounded-xl bg-card/50 backdrop-blur-sm flex items-center justify-center mb-4 ${iconColors[index % 3]}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {/* The Challenge */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-destructive/10 text-destructive rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  The Challenge
                </h2>
                <p className="text-lg text-muted-foreground mb-6">{content.challenge}</p>
                {content.challengeDetails.length > 0 && (
                  <ul className="space-y-3">
                    {content.challengeDetails.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              {/* The Solution */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Our Approach
                </h2>
                <p className="text-lg text-muted-foreground mb-6">{content.solution}</p>
                {content.solutionDetails.length > 0 && (
                  <ul className="space-y-3">
                    {content.solutionDetails.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              {/* The Results */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  The Results
                </h2>
                <p className="text-lg text-muted-foreground mb-6">{content.results}</p>
                {content.resultDetails.length > 0 && (
                  <ul className="space-y-3">
                    {content.resultDetails.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              {/* No Content Callout Box */}
              {content.noContentBadge && (
                <div className="relative overflow-hidden bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-amber-500/5 border-2 border-amber-500/30 rounded-2xl p-8">
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/20 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-tr-full" />
                  
                  <div className="relative flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <FileX className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold text-amber-400 mb-2">
                        No Content Required
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        This entire turnaround was achieved with <span className="text-amber-400 font-semibold">zero on-site content development</span>. 
                        The homepage remains completely text-free to this day — proving that strategic off-page SEO, 
                        GBP optimization, and clean link-building can drive massive growth even without traditional content marketing.
                      </p>
                      <p className="text-sm text-amber-400/80 mt-3 font-medium">
                        ✦ A testament to the power of technical SEO and local optimization
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Proof of Concept: Off-Page vs Content-Driven Comparison */}
              {content.noContentBadge && (
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-primary/10 to-amber-500/10 px-8 py-4 border-b border-border">
                    <h3 className="text-xl font-bold flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 text-primary rounded-lg flex items-center justify-center text-sm">⚡</span>
                      Proof of Concept: Off-Page SEO Effectiveness
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">How do these results compare to traditional content-driven campaigns?</p>
                  </div>
                  
                  <div className="p-8">
                    {/* Comparison Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* This Campaign */}
                      <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/30 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <FileX className="w-5 h-5 text-amber-400" />
                          <h4 className="font-semibold text-amber-400">This Campaign</h4>
                        </div>
                        <p className="text-xs text-amber-400/80 uppercase tracking-wide mb-3">Off-Page SEO Only</p>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground"><span className="text-foreground font-medium">0 blog posts</span> published</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground"><span className="text-foreground font-medium">0 location pages</span> created</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground"><span className="text-foreground font-medium">Text-free homepage</span> still ranks #1</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground"><span className="text-foreground font-medium">9 months</span> to market leadership</span>
                          </li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-amber-500/20">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-amber-400">+531%</p>
                            <p className="text-xs text-muted-foreground">New User Growth</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Typical Content Campaign */}
                      <div className="bg-surface-elevated border border-border rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <BookOpen className="w-5 h-5 text-muted-foreground" />
                          <h4 className="font-semibold text-muted-foreground">Typical Content Campaign</h4>
                        </div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">Content-Heavy Approach</p>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full border border-border mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">20-50+ blog posts required</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full border border-border mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">Location pages for each market</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full border border-border mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">12-18 months for traction</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full border border-border mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">Ongoing content investment</span>
                          </li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-border">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-muted-foreground">Variable</p>
                            <p className="text-xs text-muted-foreground">Results Depend on Content Quality</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Key Takeaways */}
                    <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary rounded-r-lg p-6">
                      <h4 className="font-semibold mb-3">Key Takeaways</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-start gap-2">
                          <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Off-page signals (links, citations, GBP) can drive rankings <span className="text-foreground">independently of content</span></span>
                        </div>
                        <div className="flex items-start gap-2">
                          <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Local Pack visibility requires <span className="text-foreground">authority signals, not word count</span></span>
                        </div>
                        <div className="flex items-start gap-2">
                          <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Clean technical foundation + strategic links = <span className="text-foreground">faster time to results</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Growth Chart Section */}
              {content.growthChart && (
                <div className="rounded-2xl overflow-hidden border border-border">
                  <img 
                    src={content.growthChart} 
                    alt={`${content.client} organic traffic growth chart`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              )}
              
              {/* ROI Impact Section */}
              {content.roiImpact && (
                <div className="bg-gradient-to-br from-primary/5 to-green-500/5 border border-primary/20 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">$</span>
                    {content.roiImpact.headline}
                  </h2>
                  
                  {/* ROI Metrics Grid - Only show metrics that exist */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {content.roiImpact.metrics.monthlyActions && (
                      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-primary">{content.roiImpact.metrics.monthlyActions}</p>
                        <p className="text-xs text-muted-foreground">Monthly Actions</p>
                      </div>
                    )}
                    {content.roiImpact.metrics.monthlyTraffic && (
                      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-primary">{content.roiImpact.metrics.monthlyTraffic}</p>
                        <p className="text-xs text-muted-foreground">Monthly Organic Traffic</p>
                      </div>
                    )}
                    {content.roiImpact.metrics.qualifiedLeads && (
                      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-primary">{content.roiImpact.metrics.qualifiedLeads}</p>
                        <p className="text-xs text-muted-foreground">Qualified Leads</p>
                      </div>
                    )}
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-green-500">{content.roiImpact.metrics.monthlyRevenue}</p>
                      <p className="text-xs text-muted-foreground">Est. Monthly Revenue</p>
                    </div>
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-green-500">{content.roiImpact.metrics.roiRange}</p>
                      <p className="text-xs text-muted-foreground">ROI</p>
                    </div>
                  </div>
                  
                  {/* ROI Details */}
                  <ul className="space-y-3">
                    {content.roiImpact.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Bottom line callout */}
                  <div className="mt-6 pt-6 border-t border-border/50 text-center">
                    <p className="text-lg font-semibold">
                      <span className="text-muted-foreground">SEO Investment:</span>{" "}
                      <span className="text-primary">{content.roiImpact.metrics.seoSpend}</span>
                      <span className="text-muted-foreground mx-2">→</span>
                      <span className="text-muted-foreground">Revenue:</span>{" "}
                      <span className="text-green-500">{content.roiImpact.metrics.monthlyRevenue}</span>
                    </p>
                  </div>
                </div>
              )}
              
              {/* Testimonial */}
              {content.testimonial && (
                <blockquote className="border-l-4 border-primary pl-6 py-4 bg-card rounded-r-lg">
                  <p className="text-xl italic mb-4">"{content.testimonial.quote}"</p>
                  <footer>
                    <cite className="not-italic">
                      <span className="font-semibold">{content.testimonial.author}</span>
                      <span className="text-muted-foreground"> — {content.testimonial.title}</span>
                    </cite>
                  </footer>
                </blockquote>
              )}
            </div>
          </div>
        </section>
        
        {/* Navigation */}
        {(prevStudy || nextStudy) && (
          <section className="py-12 border-t border-border">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="flex justify-between items-center">
                {prevStudy ? (
                  <Link 
                    to={`/case-studies/${prevStudy.slug}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Previous:</span> {prevStudy.industry}
                  </Link>
                ) : <div />}
                
                {nextStudy ? (
                  <Link 
                    to={`/case-studies/${nextStudy.slug}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="hidden sm:inline">Next:</span> {nextStudy.industry}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : <div />}
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="py-16 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let's discuss how we can help you deliver exceptional results for your clients.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start the Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
