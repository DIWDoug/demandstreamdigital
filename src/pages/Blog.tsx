import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Calendar, ArrowRight, BookOpen, TrendingUp, Users, Search, X } from "lucide-react";

interface BlogItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  published_at: string;
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, slug, excerpt, featured_image, published_at')
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data as BlogItem[];
    },
  });

  const filteredBlogs = useMemo(() => {
    if (!blogs || !searchQuery.trim()) return blogs;
    const query = searchQuery.toLowerCase();
    return blogs.filter(blog => 
      blog.title.toLowerCase().includes(query) || 
      (blog.excerpt && blog.excerpt.toLowerCase().includes(query))
    );
  }, [blogs, searchQuery]);

  const featuredPost = searchQuery ? null : blogs?.[0];
  const remainingPosts = searchQuery ? filteredBlogs : blogs?.slice(1);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Plumbing & HVAC Marketing Blog | DemandStream Digital</title>
        <meta name="description" content="Actionable marketing tips for plumbing and HVAC business owners. SEO, Google Ads, email, and more on the Demand Stream Digital blog." />
        <link rel="canonical" href="https://demandstreamdigital.com/blog" />
        {/* Open Graph */}
        <meta property="og:title" content="Plumbing & HVAC Marketing Blog | DemandStream Digital" />
        <meta property="og:description" content="Actionable marketing tips for plumbing and HVAC business owners. SEO, Google Ads, email, and more on the Demand Stream Digital blog." />
        <meta property="og:url" content="https://demandstreamdigital.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content="https://demandstreamdigital.com/og-images/blog.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plumbing & HVAC Marketing Blog | DemandStream Digital" />
        <meta name="twitter:description" content="Actionable marketing tips for plumbing and HVAC business owners. SEO, Google Ads, email, and more on the Demand Stream Digital blog." />
        <meta name="twitter:image" content="https://demandstreamdigital.com/og-images/blog.png" />
      </Helmet>
      
      <Header />
      
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-cta/5 via-transparent to-accent-blue/5 pointer-events-none" />
          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-cta/10 border border-cta/20 rounded-full text-cta text-sm font-medium mb-6">
                Agency Growth Insights
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Strategies for <span className="text-cta">Scaling</span> Your Agency
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
                Expert perspectives on local SEO, paid media, AI search, and growing your plumbing or HVAC business.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-10">
                <div className="flex items-center gap-2 text-text-secondary">
                  <BookOpen className="w-5 h-5 text-accent-blue" />
                  <span className="text-sm">In-Depth Guides</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <TrendingUp className="w-5 h-5 text-accent-blue" />
                  <span className="text-sm">Proven Strategies</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Users className="w-5 h-5 text-accent-blue" />
                  <span className="text-sm">Agency-Focused</span>
                </div>
              </div>

              {/* Search Bar */}
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-10 py-6 bg-surface-elevated border-border text-foreground placeholder:text-text-muted rounded-full text-base"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            {isLoading ? (
              <div className="space-y-12">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Skeleton className="h-80 rounded-2xl" />
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-10 w-40" />
                  </div>
                </div>
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <p className="text-text-secondary">Failed to load blog posts. Please try again later.</p>
              </div>
            ) : blogs && blogs.length > 0 ? (
              <div className="space-y-16">
                {/* Featured Post */}
                {featuredPost && (
                  <Link to={`/blog/${featuredPost.slug}`} className="block group">
                    <div className="grid lg:grid-cols-2 gap-8 items-center bg-background rounded-2xl border border-border overflow-hidden hover:border-cta/30 transition-all duration-300">
                      <div className="h-64 lg:h-80 bg-surface-elevated flex items-center justify-center overflow-hidden">
                        {featuredPost.featured_image ? (
                          <img 
                            src={featuredPost.featured_image} 
                            alt={featuredPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <BookOpen className="w-16 h-16 text-border" />
                        )}
                      </div>
                      <div className="p-6 lg:p-8">
                        <div className="flex items-center gap-2 text-sm text-text-muted mb-3">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.published_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-cta transition-colors">
                          {featuredPost.title}
                        </h2>
                        {featuredPost.excerpt && (
                          <p className="text-text-secondary mb-6 line-clamp-3">
                            {featuredPost.excerpt}
                          </p>
                        )}
                        <span className="inline-flex items-center gap-2 text-cta font-medium group-hover:gap-3 transition-all">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                )}

                {/* Remaining Posts Grid */}
                {remainingPosts && remainingPosts.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      {searchQuery ? `${remainingPosts.length} result${remainingPosts.length !== 1 ? 's' : ''} for "${searchQuery}"` : 'More Articles'}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {remainingPosts.map((blog) => (
                        <Link key={blog.id} to={`/blog/${blog.slug}`}>
                          <Card className="bg-background border-border hover:border-cta/30 transition-all duration-300 h-full group overflow-hidden">
                            <div className="h-48 bg-surface-elevated flex items-center justify-center overflow-hidden">
                              {blog.featured_image ? (
                                <img 
                                  src={blog.featured_image} 
                                  alt={blog.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              ) : (
                                <BookOpen className="w-12 h-12 text-border" />
                              )}
                            </div>
                            <CardHeader>
                              <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
                                <Calendar className="w-4 h-4" />
                                {new Date(blog.published_at).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </div>
                              <CardTitle className="text-lg group-hover:text-cta transition-colors line-clamp-2">
                                {blog.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              {blog.excerpt && (
                                <p className="text-text-secondary text-sm line-clamp-3 mb-4">
                                  {blog.excerpt}
                                </p>
                              )}
                              <span className="text-cta text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read More <ArrowRight className="w-4 h-4" />
                              </span>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : searchQuery && filteredBlogs?.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-border mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No Results Found</h3>
                <p className="text-text-secondary mb-4">No articles match "{searchQuery}"</p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="text-cta hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-border mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Coming Soon</h3>
                <p className="text-text-secondary">We're working on expert content for agency growth. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;