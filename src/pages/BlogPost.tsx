import React, { useState, useRef, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";
import SocialShareBar from "@/components/SocialShareBar";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Play, Pause, Clock, Loader2, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAuthorById, Author } from "@/data/authors";
import { cleanBlogContent } from "@/lib/cleanBlogContent";
import { getRelatedFAQs, getExternalLink } from "@/lib/blogInternalLinks";
import { useToast } from "@/hooks/use-toast";
import { getBlogFeaturedImage } from "@/lib/blogImages";
import { getBreadcrumbSchema, getOrganizationSchema } from "@/lib/schema";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  source_url: string;
  published_at: string;
  category: string | null;
}

const getPostAuthor = (slug: string): Author => {
  // Map articles to their authors
  const authorMap: Record<string, string> = {
    // Desiree Abbariao's articles
    'benefits-of-white-label-seo-services': 'desiree-abbariao',
    'white-label-local-ppc': 'desiree-abbariao',
    'on-page-optimization-local-seo': 'desiree-abbariao',
    // Richard Baylon's articles
    'what-is-white-label-digital-marketing': 'richard-baylon',
    'white-label-social-media': 'richard-baylon',
    'white-label-seo-for-agencies-checklist': 'richard-baylon',
  };
  
  const authorId = authorMap[slug] || 'doug-bryson';
  return getAuthorById(authorId)!;
};

const categoryLabels: Record<string, string> = {
  'white-label-seo': 'Trade SEO',
  'local-seo': 'Local SEO',
  'agency-growth': 'Agency Growth',
  'paid-media': 'Paid Media',
  'content-marketing': 'Content Marketing',
  'email-marketing': 'Email Marketing',
};

// Calculate reading time based on word count
const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  
  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);

  const { data: blog, isLoading, error } = useQuery({
    queryKey: ['blog', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
      
      if (error) throw error;
      return data as BlogPost | null;
    },
    enabled: !!slug,
  });

  // Strip markdown for clean text
  const stripMarkdown = (text: string): string => {
    return text
      .replace(/#{1,6}\s?/g, '') // Remove headers
      .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
      .replace(/\*([^*]+)\*/g, '$1') // Remove italic
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
      .replace(/^[-*+]\s+/gm, '') // Remove list markers
      .replace(/^\d+\.\s+/gm, '') // Remove numbered list markers
      .replace(/`([^`]+)`/g, '$1') // Remove code
      .replace(/>\s?/g, '') // Remove blockquotes
      .replace(/\n{3,}/g, '\n\n') // Normalize whitespace
      .trim();
  };

  const handlePlayPause = useCallback(async () => {
    if (!blog) return;

    // If already playing, pause
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    // If we have audio loaded, resume
    if (audioRef.current && audioUrlRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      return;
    }

    // Generate new audio
    setIsLoadingAudio(true);
    try {
      const cleanText = stripMarkdown(cleanBlogContent(blog.content));
      
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/elevenlabs-tts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ text: cleanText }),
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
        toast({
          title: "Playback Error",
          description: "Failed to play audio. Please try again.",
          variant: "destructive",
        });
      };

      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.error("TTS error:", err);
      toast({
        title: "Audio Generation Failed",
        description: "Unable to generate audio. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingAudio(false);
    }
  }, [blog, isPlaying, toast]);

  if (isLoading) {
    return (
      <div className="dark min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-16">
          <Skeleton className="w-full h-[60vh]" />
          <div className="container mx-auto px-4 max-w-3xl py-12 text-center">
            <Skeleton className="h-6 w-32 mx-auto mb-4" />
            <Skeleton className="h-14 w-full mb-4" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
            <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
            <Skeleton className="h-4 w-32 mx-auto" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="dark min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you are looking for does not exist.</p>
            <Link to="/our-blog">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const author = getPostAuthor(blog.slug);
  const cleanedContent = cleanBlogContent(blog.content, blog.slug);
  const readingTime = calculateReadingTime(cleanedContent);
  const relatedFAQs = getRelatedFAQs(blog.slug);

  const resolvedFeaturedImage = getBlogFeaturedImage(blog.featured_image);

  // Build breadcrumb items for schema
  const breadcrumbItems = [
    { name: "Home", url: "https://demandstreamdigital.com" },
    { name: "Blog", url: "https://demandstreamdigital.com/our-blog" },
  ];
  if (blog.category) {
    breadcrumbItems.push({
      name: categoryLabels[blog.category] || blog.category,
      url: `https://demandstreamdigital.com/blog?category=${blog.category}`
    });
  }
  breadcrumbItems.push({
    name: blog.title,
    url: `https://demandstreamdigital.com/blog/${blog.slug}`
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getBreadcrumbSchema(breadcrumbItems),
      {
        "@type": "Article",
        "@id": `https://demandstreamdigital.com/blog/${blog.slug}#article`,
        "headline": blog.title,
        "description": blog.excerpt || `Read ${blog.title} on Demand Stream Digital`,
        "image": resolvedFeaturedImage || undefined,
        "datePublished": blog.published_at,
        "dateModified": blog.published_at,
        "author": { "@id": `https://demandstreamdigital.com/authors/${author.slug}#person` },
        "publisher": { "@id": "https://demandstreamdigital.com/#organization" },
        "mainEntityOfPage": { "@id": `https://demandstreamdigital.com/blog/${blog.slug}` },
        "isPartOf": { "@id": "https://demandstreamdigital.com/#website" },
        "keywords": blog.category ? categoryLabels[blog.category] : undefined,
        "timeRequired": `PT${readingTime}M`
      },
      {
        "@type": "Person",
        "@id": `https://demandstreamdigital.com/authors/${author.slug}#person`,
        "name": author.name,
        "jobTitle": author.role,
        "description": author.shortBio,
        "url": `https://demandstreamdigital.com/authors/${author.slug}`,
        "worksFor": { "@id": "https://demandstreamdigital.com/#organization" },
        "sameAs": author.schemaData.sameAs,
        "knowsAbout": author.schemaData.knowsAbout.map(topic => ({
          "@type": "Thing",
          "name": topic.name,
          "sameAs": topic.sameAs
        }))
      }
    ]
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{blog.title} | Demand Stream Digital</title>
        <meta name="description" content={blog.excerpt || `Read ${blog.title} on Demand Stream Digital`} />
        <link rel="canonical" href={`https://demandstreamdigital.com/blog/${blog.slug}`} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href={`https://demandstreamdigital.com/blog/${blog.slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://demandstreamdigital.com/blog/${blog.slug}`} />
        
        <meta property="article:author" content={author.name} />
        {blog.category && <meta property="article:section" content={categoryLabels[blog.category] || blog.category} />}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        
        {/* Open Graph */}
        <meta property="og:title" content={`${blog.title} | Demand Stream Digital`} />
        <meta property="og:description" content={blog.excerpt || `Read ${blog.title} on Demand Stream Digital`} />
        <meta property="og:url" content={`https://demandstreamdigital.com/blog/${blog.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content={resolvedFeaturedImage || "https://demandstreamdigital.com/demand-stream-digital-logo.png"} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${blog.title} | Demand Stream Digital`} />
        <meta name="twitter:description" content={blog.excerpt || `Read ${blog.title} on Demand Stream Digital`} />
        <meta name="twitter:image" content={resolvedFeaturedImage || "https://demandstreamdigital.com/demand-stream-digital-logo.png"} />
      </Helmet>
      
      <Header />

      {/* Social Share Bar */}
      <SocialShareBar 
        url={`https://demandstreamdigital.com/blog/${blog.slug}`} 
        title={blog.title}
      />
      
      <main className="pt-16">
        {/* Back Link - Fixed Position */}
        <div className="container mx-auto px-4 py-4">
          <Link to="/our-blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-3 h-3 mr-1.5" />
            Back to Blog
          </Link>
        </div>

        {/* HERO IMAGE - Full Width */}
        {getBlogFeaturedImage(blog.featured_image) && (
          <figure className="w-full">
            <img 
              src={getBlogFeaturedImage(blog.featured_image)!} 
              alt={`Featured image for ${blog.title} - plumbing HVAC marketing strategy`}
              className="w-full h-[50vh] md:h-[60vh] object-cover"
            />
          </figure>
        )}

        {/* HEADER SECTION - Centered */}
        <header className="container mx-auto px-4 max-w-4xl py-12 text-center">
          {/* Category Tag */}
          {blog.category && (
            <Link 
              to={`/blog?category=${blog.category}`}
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cta mb-6 hover:text-cta/80 transition-colors"
            >
              {categoryLabels[blog.category] || blog.category}
            </Link>
          )}

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-foreground">
            {blog.title}
          </h1>
          
          {/* Subtitle/Excerpt */}
          {blog.excerpt && (
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {blog.excerpt}
            </p>
          )}

          {/* Author Section */}
          <div className="flex flex-col items-center mb-8">
            {/* Author Photo */}
            <Link to={`/authors/${author.slug}`} className="mb-4">
              <img 
                src={author.image} 
                alt={`${author.name} - ${author.role} at Demand Stream Digital`}
                className="w-16 h-16 rounded-full object-cover border-2 border-border hover:border-cta transition-colors"
              />
            </Link>
            
            {/* Author Name */}
            <Link 
              to={`/authors/${author.slug}`}
              className="text-sm font-medium text-foreground hover:text-cta transition-colors"
            >
              By {author.name}
            </Link>
            
            {/* Date */}
            <time 
              dateTime={blog.published_at}
              className="text-sm text-muted-foreground mt-1"
            >
              {new Date(blog.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          {/* Listen + Reading Time */}
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground border-t border-b border-border py-4">
            <button 
              onClick={handlePlayPause}
              disabled={isLoadingAudio}
              className="flex items-center gap-2 hover:text-foreground transition-colors disabled:opacity-50"
            >
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                {isLoadingAudio ? (
                  <Loader2 className="w-3 h-3 text-background animate-spin" />
                ) : isPlaying ? (
                  <Pause className="w-3 h-3 text-background fill-background" />
                ) : (
                  <Play className="w-3 h-3 text-background fill-background ml-0.5" />
                )}
              </div>
              <span className="font-medium text-foreground">
                {isLoadingAudio ? "Loading..." : isPlaying ? "Pause" : "Listen"}
              </span>
              <span>• {readingTime} minutes</span>
            </button>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readingTime} min read</span>
            </div>
          </div>
        </header>

        {/* Breadcrumbs */}
        <nav 
          aria-label="Breadcrumb" 
          className="container mx-auto px-4 max-w-7xl mb-8"
        >
          <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <li>
              <Link 
                to="/" 
                className="hover:text-foreground transition-colors flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link 
                to="/our-blog"
                className="hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </li>
            {blog.category && (
              <>
                <li>
                  <ChevronRight className="w-3.5 h-3.5" />
                </li>
                <li>
                  <Link 
                    to={`/blog?category=${blog.category}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {categoryLabels[blog.category] || blog.category}
                  </Link>
                </li>
              </>
            )}
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-foreground font-medium truncate max-w-[200px] md:max-w-[300px]">
              {blog.title}
            </li>
          </ol>
        </nav>

        {/* CONTENT GRID - Article + Sidebar */}
        <div className="container mx-auto px-4 pb-16 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Article Content */}
            <article className="lg:col-span-7 xl:col-span-8">
              <div className="max-w-none">
                {/* Article prose with proper editorial typography */}
                <div className="article-content">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => (
                        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-14 mb-6 leading-tight">
                          {children}
                        </h2>
                      ),
                      h2: ({ children }) => (
                        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-14 mb-6 leading-tight">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mt-10 mb-4 leading-snug">
                          {children}
                        </h3>
                      ),
                      h4: ({ children }) => (
                        <h4 className="font-sans text-lg md:text-xl font-semibold text-foreground mt-8 mb-3">
                          {children}
                        </h4>
                      ),
                      p: ({ children }) => (
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed md:leading-[1.85] mb-6">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="my-6 ml-1 space-y-3">
                          {React.Children.map(children, (child) => {
                            if (React.isValidElement(child) && child.type === 'li') {
                              return React.cloneElement(child as React.ReactElement<any>, { 'data-list-type': 'ul' });
                            }
                            return child;
                          })}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="my-6 ml-1 space-y-4">
                          {React.Children.map(children, (child, index) => {
                            if (React.isValidElement(child) && child.type === 'li') {
                              return React.cloneElement(child as React.ReactElement<any>, { 'data-list-type': 'ol', 'data-index': index + 1 });
                            }
                            return child;
                          })}
                        </ol>
                      ),
                      li: ({ children, ...props }) => {
                        const listType = (props as any)['data-list-type'];
                        const index = (props as any)['data-index'];
                        
                        if (listType === 'ol') {
                          return (
                            <li className="flex items-start gap-3 text-muted-foreground text-base md:text-lg leading-relaxed">
                              <span className="flex-shrink-0 font-bold text-cta min-w-[1.5rem]">{index}.</span>
                              <span className="flex-1">{children}</span>
                            </li>
                          );
                        }
                        
                        return (
                          <li className="flex items-start gap-3 text-muted-foreground text-base md:text-lg leading-relaxed">
                            <span className="flex-shrink-0 w-2 h-2 bg-cta rounded-full mt-2.5" aria-hidden="true" />
                            <span className="flex-1">{children}</span>
                          </li>
                        );
                      },
                      a: ({ href, children }) => {
                        // Check if this is an old dialedinweb.com link (not blog)
                        if (href?.includes('dialedinweb.com') && !href?.includes('dialedinweb.com/blog')) {
                          return <span className="font-semibold text-foreground">{children}</span>;
                        }
                        
                        // Check if this is an internal link (starts with /)
                        const isInternalLink = href?.startsWith('/') && !href?.startsWith('//');
                        
                        // Check if this is our external authority link
                        const externalLink = slug ? getExternalLink(slug) : null;
                        const isExternalAuthority = externalLink && href === externalLink.url;
                        
                        if (isInternalLink) {
                          return (
                            <Link 
                              to={href || '#'}
                              className="text-accent-blue underline underline-offset-2 decoration-accent-blue/50 hover:text-cta hover:decoration-cta transition-colors font-medium"
                            >
                              {children}
                            </Link>
                          );
                        }
                        
                        // External link with source badge for authority links
                        return (
                          <a 
                            href={href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-accent-blue underline underline-offset-2 decoration-accent-blue/50 hover:text-cta hover:decoration-cta transition-colors font-medium"
                          >
                            {children}
                            {isExternalAuthority && (
                              <span className="inline-flex items-center ml-1.5 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide bg-accent-blue/10 text-accent-blue rounded border border-accent-blue/20 align-middle">
                                {externalLink.source}
                              </span>
                            )}
                          </a>
                        );
                      },
                      strong: ({ children }) => (
                        <strong className="font-semibold text-foreground">{children}</strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic text-muted-foreground">{children}</em>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="my-8 pl-6 border-l-4 border-cta bg-surface-dark/30 py-4 pr-6 rounded-r-lg">
                          <div className="text-muted-foreground text-lg italic leading-relaxed">
                            {children}
                          </div>
                        </blockquote>
                      ),
                      code: ({ children }) => (
                        <code className="bg-surface-dark px-2 py-1 rounded text-sm font-mono text-foreground">
                          {children}
                        </code>
                      ),
                      pre: ({ children }) => (
                        <pre className="bg-surface-dark p-4 rounded-lg overflow-x-auto my-6 border border-border">
                          {children}
                        </pre>
                      ),
                      hr: () => (
                        <hr className="my-10 border-t border-border/50" />
                      ),
                      img: ({ src, alt }) => {
                        // Resolve image source - check if it's a key in our blogImages map
                        const resolvedSrc = src ? (getBlogFeaturedImage(src) || src) : '';
                        return (
                          <figure className="my-10">
                            <img 
                              src={resolvedSrc} 
                              alt={alt || 'Blog content illustration'} 
                              className="w-full rounded-xl shadow-lg"
                              loading="lazy"
                            />
                            {alt && (
                              <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                                {alt}
                              </figcaption>
                            )}
                          </figure>
                        );
                      },
                    }}
                  >
                    {cleanedContent}
                  </ReactMarkdown>
                </div>

                {/* Tags Section */}
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                    {blog.category && (
                      <Link 
                        to={`/blog?category=${blog.category}`}
                        className="inline-block px-4 py-1.5 bg-surface-dark border border-border rounded-full text-sm text-foreground hover:border-cta hover:text-cta transition-colors"
                      >
                        {categoryLabels[blog.category] || blog.category}
                      </Link>
                    )}
                    <Link 
                      to="/blog?category=agency-growth"
                      className="inline-block px-4 py-1.5 bg-surface-dark border border-border rounded-full text-sm text-foreground hover:border-cta hover:text-cta transition-colors"
                    >
                      Agency Growth
                    </Link>
                    <Link 
                      to="/blog"
                      className="inline-block px-4 py-1.5 bg-surface-dark border border-border rounded-full text-sm text-foreground hover:border-cta hover:text-cta transition-colors"
                    >
                      Marketing
                    </Link>
                  </div>
                </div>

                {/* Related FAQs Section */}
                {relatedFAQs.length > 0 && (
                  <div className="mt-12 p-6 md:p-8 bg-surface-dark rounded-xl border border-border/50">
                    <h3 className="text-xl font-bold mb-4 text-foreground">Related Questions</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Looking for more answers? Check out these frequently asked questions from our service pages:
                    </p>
                    <div className="space-y-4">
                      {relatedFAQs.map((faqGroup, index) => (
                        <div key={index}>
                          <Link 
                            to={faqGroup.hubUrl}
                            className="text-sm font-semibold text-cta hover:text-cta/80 transition-colors"
                          >
                            {faqGroup.hubPage} FAQs →
                          </Link>
                          <ul className="mt-2 space-y-1.5">
                            {faqGroup.questions.map((question, qIndex) => (
                              <li key={qIndex} className="text-sm text-muted-foreground pl-4 border-l-2 border-border">
                                {question}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Box */}
                <div className="mt-12 p-8 md:p-10 bg-cta/10 rounded-xl border border-cta/20 text-center">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Ready to Scale Your Agency?</h3>
                  <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                    Let us handle your white-label fulfillment while you focus on growing your business.
                  </p>
                  <Link to="/#contact">
                    <Button size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground font-medium">
                      Get Started Today
                    </Button>
                  </Link>
                </div>

                {/* You May Also Like */}
                <YouMayAlsoLike currentSlug={blog.slug} currentCategory={blog.category} />
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-5 xl:col-span-4">
              <div className="lg:sticky lg:top-24">
                <BlogSidebar />
              </div>
            </aside>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
