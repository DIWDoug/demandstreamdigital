import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import AgencyPartnerVideos from "@/components/calculators/AgencyPartnerVideos";
import ContactForm from "@/components/sections/ContactForm";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowRight, BookOpen, TrendingUp, Users } from "lucide-react";
import { getBlogFeaturedImage } from "@/lib/blogImages";
import { getBlogSchema } from "@/lib/schema";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  published_at: string;
}

const Blog = () => {
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, slug, excerpt, featured_image, published_at')
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data as Blog[];
    },
  });

  const featuredPost = blogs?.[0];
  const remainingPosts = blogs?.slice(1);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Digital Marketing Insights | White Label SEO & PPC Blog</title>
        <meta name="description" content="Actionable tips for agency owners. Explore white label SEO, PPC, email, and more on the Dialed-in Web digital marketing blog." />
        <link rel="canonical" href="https://dialedinweb.com/blog" />
        <meta name="keywords" content="white label SEO blog, agency marketing tips, PPC insights, digital marketing articles, local SEO strategy" />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href="https://dialedinweb.com/blog" />
        <link rel="alternate" hrefLang="en-CA" href="https://dialedinweb.com/blog" />
        <link rel="alternate" hrefLang="x-default" href="https://dialedinweb.com/blog" />
        
        <script type="application/ld+json">{JSON.stringify(getBlogSchema())}</script>
        
        {/* Open Graph */}
        <meta property="og:title" content="Digital Marketing Insights | White Label SEO & PPC Blog" />
        <meta property="og:description" content="Actionable tips for agency owners. Explore white label SEO, PPC, email, and more on the Dialed-in Web digital marketing blog." />
        <meta property="og:url" content="https://dialedinweb.com/blog" />
        <meta property="og:type" content="blog" />
        <meta property="og:site_name" content="Dialed-In Web" />
        <meta property="og:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Insights | White Label SEO & PPC Blog" />
        <meta name="twitter:description" content="Actionable tips for agency owners. Explore white label SEO, PPC, email, and more on the Dialed-in Web digital marketing blog." />
        <meta name="twitter:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
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
                Expert perspectives on white-label fulfillment, local SEO, paid media, and building an agency that thrives.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2 text-text-secondary">
                  <BookOpen className="w-5 h-5 text-cta" />
                  <span className="text-sm">In-Depth Guides</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <TrendingUp className="w-5 h-5 text-accent-blue" />
                  <span className="text-sm">Proven Strategies</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Users className="w-5 h-5 text-cta" />
                  <span className="text-sm">Agency-Focused</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            {isLoading ? (
              <div className="space-y-12">
                {/* Featured Skeleton */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <Skeleton className="h-80 rounded-2xl" />
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-10 w-40" />
                  </div>
                </div>
                {/* Grid Skeleton */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="bg-background border-border">
                      <Skeleton className="h-48 w-full rounded-t-lg" />
                      <CardHeader>
                        <Skeleton className="h-6 w-3/4" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-2/3" />
                      </CardContent>
                    </Card>
                  ))}
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
                      {getBlogFeaturedImage(featuredPost.featured_image) ? (
                        <div className="relative h-64 lg:h-80 overflow-hidden">
                          <img 
                            src={getBlogFeaturedImage(featuredPost.featured_image)!} 
                            alt={featuredPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-cta text-cta-foreground text-xs font-semibold rounded-full">
                              Featured
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="h-64 lg:h-80 bg-surface-elevated flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-border" />
                        </div>
                      )}
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
                    <h3 className="text-xl font-semibold text-foreground mb-6">More Articles</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {remainingPosts.map((blog) => (
                        <Link key={blog.id} to={`/blog/${blog.slug}`}>
                          <Card className="bg-background border-border hover:border-cta/30 transition-all duration-300 h-full group">
                            {getBlogFeaturedImage(blog.featured_image) ? (
                              <div className="relative h-48 overflow-hidden rounded-t-lg">
                                <img 
                                  src={getBlogFeaturedImage(blog.featured_image)!} 
                                  alt={blog.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            ) : (
                              <div className="h-48 bg-surface-elevated flex items-center justify-center rounded-t-lg">
                                <BookOpen className="w-12 h-12 text-border" />
                              </div>
                            )}
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


      {/* Agency Partner Testimonials */}
      <AgencyPartnerVideos />

      {/* Fulfillment Steps with Contact Form */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default Blog;
