import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Calendar, Search, X, BookOpen, ArrowRight, TrendingUp } from "lucide-react";
import PixabayImage from "@/components/PixabayImage";

// Generate a relevant Pixabay search keyword from post title/category
const getImageKeyword = (title: string, category?: string | null): string => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('seo') || lowerTitle.includes('search')) return 'digital marketing SEO';
  if (lowerTitle.includes('ppc') || lowerTitle.includes('paid') || lowerTitle.includes('ads')) return 'advertising marketing';
  if (lowerTitle.includes('content') || lowerTitle.includes('blog')) return 'content marketing writing';
  if (lowerTitle.includes('social') || lowerTitle.includes('media')) return 'social media marketing';
  if (lowerTitle.includes('email')) return 'email marketing business';
  if (lowerTitle.includes('local')) return 'local business storefront';
  if (lowerTitle.includes('agency') || lowerTitle.includes('white label')) return 'business team collaboration';
  if (category) return `${category} marketing`;
  return 'digital marketing business';
};
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  published_at: string | null;
  category: string | null;
}

const OurBlog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: posts = [], isLoading, error } = useQuery({
    queryKey: ["our-blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("id, title, slug, excerpt, featured_image, published_at, category")
        .order("published_at", { ascending: false });

      if (error) throw error;
      return (data ?? []) as BlogPost[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    const query = searchQuery.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt?.toLowerCase().includes(query) ||
        post.category?.toLowerCase().includes(query)
    );
  }, [posts, searchQuery]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  const formatDate = (date: string | null) => {
    if (!date) return null;
    try {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return null;
    }
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Agency Growth Blog | White Label SEO, PPC & Marketing Insights</title>
        <meta
          name="description"
          content="Expert insights on white label SEO, PPC management, and agency growth strategies. Practical guides for digital marketing agency owners."
        />
        <link rel="canonical" href="https://dialedinweb.com/our-blog" />
      </Helmet>

      <Header />

      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-dark to-background" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cta/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta/10 border border-cta/20 rounded-full text-cta text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Agency Growth Insights
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
                Our Blog
              </h1>
              <p className="text-lg text-text-secondary max-w-xl mx-auto">
                Actionable strategies for scaling your agency with white-label fulfillment, local SEO, and paid media.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-lg mx-auto mt-10 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-5 bg-surface-elevated/50 backdrop-blur border-border/50 text-foreground placeholder:text-text-muted rounded-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-text-muted hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-8">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-surface-elevated rounded-xl h-52 mb-4" />
                    <div className="bg-surface-elevated rounded h-4 w-24 mb-3" />
                    <div className="bg-surface-elevated rounded h-6 w-full mb-2" />
                    <div className="bg-surface-elevated rounded h-4 w-3/4" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="w-8 h-8 text-red-400" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Unable to load articles</h2>
                <p className="text-text-secondary">Please refresh the page or try again later.</p>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-surface-elevated rounded-full flex items-center justify-center mx-auto mb-4">
                  {searchQuery ? <Search className="w-8 h-8 text-text-muted" /> : <BookOpen className="w-8 h-8 text-text-muted" />}
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {searchQuery ? "No results found" : "Coming soon"}
                </h2>
                <p className="text-text-secondary mb-4">
                  {searchQuery
                    ? `No articles match "${searchQuery}"`
                    : "We're preparing expert content for agency growth."}
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-cta hover:text-cta-glow transition-colors font-medium"
                  >
                    Clear search
                  </button>
                )}
              </div>
            ) : (
              <>
                {/* Results count when searching */}
                {searchQuery && (
                  <p className="text-sm text-text-muted mb-6">
                    {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
                  </p>
                )}

                {/* Featured Post */}
                {featuredPost && !searchQuery && (
                  <Link to={`/blog/${featuredPost.slug}`} className="group block mb-12">
                    <article className="grid lg:grid-cols-2 gap-8 bg-surface-dark border border-border/50 rounded-2xl overflow-hidden hover:border-cta/30 transition-all duration-300">
                      <div className="h-64 lg:h-auto bg-surface-elevated overflow-hidden">
                      {featuredPost.featured_image ? (
                          <img
                            src={featuredPost.featured_image}
                            alt={featuredPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <PixabayImage
                            keyword={getImageKeyword(featuredPost.title, featuredPost.category)}
                            alt={featuredPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            placeholderClassName="w-full h-full"
                            priority
                          />
                        )}
                      </div>
                      <div className="p-8 lg:py-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          {featuredPost.category && (
                            <span className="text-xs font-semibold uppercase tracking-wider text-cta bg-cta/10 px-3 py-1 rounded-full">
                              {featuredPost.category}
                            </span>
                          )}
                          {formatDate(featuredPost.published_at) && (
                            <span className="text-sm text-text-muted flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              {formatDate(featuredPost.published_at)}
                            </span>
                          )}
                        </div>
                        <h2 className="font-serif text-2xl lg:text-3xl text-foreground group-hover:text-cta transition-colors mb-4">
                          {featuredPost.title}
                        </h2>
                        {featuredPost.excerpt && (
                          <p className="text-text-secondary line-clamp-3 mb-6">{featuredPost.excerpt}</p>
                        )}
                        <span className="inline-flex items-center gap-2 text-cta font-medium group-hover:gap-3 transition-all">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </article>
                  </Link>
                )}

                {/* Post Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(searchQuery ? filteredPosts : remainingPosts).map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                      <article className="h-full bg-surface-dark border border-border/50 rounded-xl overflow-hidden hover:border-cta/30 hover:shadow-xl hover:shadow-cta/5 transition-all duration-300">
                        <div className="h-48 bg-surface-elevated overflow-hidden">
                          {post.featured_image ? (
                            <img
                              src={post.featured_image}
                              alt={post.title}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <PixabayImage
                              keyword={getImageKeyword(post.title, post.category)}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              placeholderClassName="w-full h-48"
                            />
                          )}
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            {post.category && (
                              <span className="text-xs font-medium uppercase tracking-wider text-cta">
                                {post.category}
                              </span>
                            )}
                            {post.category && formatDate(post.published_at) && (
                              <span className="text-text-muted">•</span>
                            )}
                            {formatDate(post.published_at) && (
                              <span className="text-xs text-text-muted">{formatDate(post.published_at)}</span>
                            )}
                          </div>
                          <h3 className="font-semibold text-lg text-foreground group-hover:text-cta transition-colors line-clamp-2 mb-3">
                            {post.title}
                          </h3>
                          {post.excerpt && (
                            <p className="text-sm text-text-secondary line-clamp-2 mb-4">{post.excerpt}</p>
                          )}
                          <span className="inline-flex items-center gap-1.5 text-sm text-cta font-medium group-hover:gap-2.5 transition-all">
                            Read More <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurBlog;
