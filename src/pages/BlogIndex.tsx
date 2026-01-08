console.log("[BlogIndex MODULE] File is being loaded!");
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Search, X, BookOpen, ArrowRight } from "lucide-react";

interface BlogItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  published_at: string | null;
}

const formatDate = (value: string | null) => {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

export default function BlogIndex() {
  console.log("[BlogIndex] Component mounting...");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      console.log("[BlogIndex] Fetching blogs from Supabase...");
      const { data, error } = await supabase
        .from("blogs")
        .select("id, title, slug, excerpt, featured_image, published_at")
        .order("published_at", { ascending: false });

      console.log("[BlogIndex] Query result:", { data: data?.length, error });
      if (error) throw error;
      return (data ?? []) as BlogItem[];
    },
  });
  
  console.log("[BlogIndex] Render state:", { isLoading, error: error?.message, blogCount: blogs?.length });

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return blogs ?? [];
    return (blogs ?? []).filter(
      (b) => b.title.toLowerCase().includes(q) || (b.excerpt ? b.excerpt.toLowerCase().includes(q) : false)
    );
  }, [blogs, searchQuery]);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Digital Marketing Insights | White Label SEO & PPC Blog</title>
        <meta
          name="description"
          content="Actionable tips for agency owners. Explore white label SEO, PPC, email, and more on the Dialed-in Web digital marketing blog."
        />
        <link rel="canonical" href="https://dialedinweb.com/blog" />
      </Helmet>

      <Header />

      <main className="pt-32 pb-16">
        <section className="relative overflow-hidden pb-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cta/5 via-transparent to-accent-blue/5 pointer-events-none" />
          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-cta/10 border border-cta/20 rounded-full text-cta text-sm font-medium mb-6">
                Agency Growth Insights
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                The Dialed-In Web <span className="text-cta">Blog</span>
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
                Search, scan, and share in-depth guides on white-label fulfillment, local SEO, paid media, and agency operations.
              </p>

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
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-background border border-border rounded-lg overflow-hidden">
                    <Skeleton className="h-48 w-full" />
                    <div className="p-6 space-y-3">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-16 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <p className="text-text-secondary">Failed to load blog posts. Please try again later.</p>
              </div>
            ) : filtered.length === 0 && searchQuery ? (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-border mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-foreground mb-2">No Results Found</h2>
                <p className="text-text-secondary mb-4">No articles match “{searchQuery}”.</p>
                <button onClick={() => setSearchQuery("")} className="text-cta hover:underline">
                  Clear search
                </button>
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-border mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-foreground mb-2">Coming Soon</h2>
                <p className="text-text-secondary">We’re working on expert content for agency growth. Check back soon.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {searchQuery && (
                  <p className="text-sm text-text-muted">
                    Showing {filtered.length} result{filtered.length !== 1 ? "s" : ""} for “{searchQuery}”
                  </p>
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((blog) => {
                    const dateLabel = formatDate(blog.published_at);
                    return (
                      <Link key={blog.id} to={`/blog/${blog.slug}`} className="group">
                        <div className="bg-background border border-border hover:border-cta/30 transition-all duration-300 rounded-lg overflow-hidden h-full">
                          <div className="h-48 bg-surface-elevated overflow-hidden flex items-center justify-center">
                            {blog.featured_image ? (
                              <img
                                src={blog.featured_image}
                                alt={blog.title}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            ) : (
                              <BookOpen className="w-10 h-10 text-border" />
                            )}
                          </div>
                          <div className="p-6">
                            {dateLabel && (
                              <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
                                <Calendar className="w-4 h-4" />
                                <span>{dateLabel}</span>
                              </div>
                            )}
                            <h2 className="text-lg font-semibold text-foreground group-hover:text-cta transition-colors line-clamp-2">
                              {blog.title}
                            </h2>
                            {blog.excerpt && (
                              <p className="text-text-secondary text-sm mt-3 line-clamp-3">{blog.excerpt}</p>
                            )}
                            <div className="mt-4 text-cta text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                              Read More <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
