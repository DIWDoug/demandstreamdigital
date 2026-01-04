import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import AuthorByline from "@/components/AuthorByline";
import { getAuthorById, Author } from "@/data/authors";
import { cleanBlogContent } from "@/lib/cleanBlogContent";

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
  return getAuthorById("doug-bryson")!;
};

const categoryLabels: Record<string, string> = {
  'white-label-seo': 'White-Label SEO',
  'local-seo': 'Local SEO',
  'agency-growth': 'Agency Growth',
  'paid-media': 'Paid Media',
  'content-marketing': 'Content Marketing',
  'email-marketing': 'Email Marketing',
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

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

  if (isLoading) {
    return (
      <div className="dark min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <Skeleton className="h-6 w-24 mb-4" />
            <Skeleton className="h-14 w-full mb-2" />
            <Skeleton className="h-14 w-3/4 mb-6" />
            <Skeleton className="h-6 w-64 mb-8" />
            <Skeleton className="h-[450px] w-full mb-12" />
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
            <Link to="/blog">
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
  const cleanedContent = cleanBlogContent(blog.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://dialedinweb.com/blog/${blog.slug}#article`,
        "headline": blog.title,
        "description": blog.excerpt || `Read ${blog.title} on Dialed-In Web`,
        "image": blog.featured_image || undefined,
        "datePublished": blog.published_at,
        "dateModified": blog.published_at,
        "author": { "@id": `https://dialedinweb.com/authors/${author.slug}#person` },
        "publisher": { "@id": "https://dialedinweb.com/#organization" },
        "mainEntityOfPage": { "@id": `https://dialedinweb.com/blog/${blog.slug}` },
        "isPartOf": { "@id": "https://dialedinweb.com/#website" },
        "keywords": blog.category ? categoryLabels[blog.category] : undefined
      },
      {
        "@type": "Person",
        "@id": `https://dialedinweb.com/authors/${author.slug}#person`,
        "name": author.name,
        "jobTitle": author.role,
        "description": author.shortBio,
        "url": `https://dialedinweb.com/authors/${author.slug}`,
        "worksFor": { "@id": "https://dialedinweb.com/#organization" },
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
        <title>{blog.title} | Dialed-In Web</title>
        <meta name="description" content={blog.excerpt || `Read ${blog.title} on Dialed-In Web`} />
        <link rel="canonical" href={`https://dialedinweb.com/blog/${blog.slug}`} />
        {blog.featured_image && <meta property="og:image" content={blog.featured_image} />}
        <meta property="article:author" content={author.name} />
        {blog.category && <meta property="article:section" content={categoryLabels[blog.category] || blog.category} />}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-16">
        {/* AD-Style Header: Category, Title, Byline, Hero - All Full Width */}
        <header className="container mx-auto px-4 max-w-5xl">
          {/* Back Link - Subtle */}
          <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-3 h-3 mr-1.5" />
            Back to Blog
          </Link>

          {/* Category Tag - Small, uppercase like AD */}
          {blog.category && (
            <Link 
              to={`/blog?category=${blog.category}`}
              className="block text-xs font-bold text-cta uppercase tracking-widest mb-4 hover:text-cta/80 transition-colors"
            >
              {categoryLabels[blog.category] || blog.category}
            </Link>
          )}

          {/* Large Headline - AD Style */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-foreground">
            {blog.title}
          </h1>
          
          {/* Byline Row - Author + Date */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
            <span className="font-medium text-foreground">By {author.name}</span>
            <span className="text-muted-foreground/50">|</span>
            <time dateTime={blog.published_at}>
              {new Date(blog.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          {/* Hero Image - Full Width, Edge to Edge in Container */}
          {blog.featured_image && (
            <figure className="mb-12">
              <img 
                src={blog.featured_image} 
                alt={blog.title}
                className="w-full h-auto aspect-[16/9] object-cover"
              />
            </figure>
          )}
        </header>

        {/* AD-Style Content Grid: Article Left, Sidebar Right */}
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Article Content - Left/Main Column */}
            <article className="lg:col-span-8">
              {/* Lead paragraph styling like AD */}
              <div className="prose prose-invert prose-lg max-w-none
                prose-p:text-[17px] prose-p:leading-[1.75] prose-p:text-muted-foreground
                prose-headings:font-serif prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-a:text-cta prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-blockquote:border-l-cta prose-blockquote:text-muted-foreground prose-blockquote:not-italic
                prose-li:text-muted-foreground
              ">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => <h2 className="font-serif">{children}</h2>,
                    h2: ({ children }) => <h2 className="font-serif">{children}</h2>,
                    h3: ({ children }) => <h3 className="font-serif">{children}</h3>,
                    p: ({ children }) => <p>{children}</p>,
                    ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
                    li: ({ children }) => <li>{children}</li>,
                    a: ({ href, children }) => {
                      if (href?.includes('dialedinweb.com') && !href?.includes('dialedinweb.com/blog')) {
                        return <span className="font-semibold">{children}</span>;
                      }
                      return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
                    },
                    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
                    code: ({ children }) => <code className="bg-surface-dark px-2 py-1 rounded text-sm">{children}</code>,
                    pre: ({ children }) => <pre className="bg-surface-dark p-4 rounded-lg overflow-x-auto my-4">{children}</pre>,
                    img: () => null, // Skip all inline images
                  }}
                >
                  {cleanedContent}
                </ReactMarkdown>
              </div>

              {/* CTA Box */}
              <div className="mt-16 p-8 bg-surface-dark rounded-lg border border-border text-center">
                <h3 className="text-2xl font-bold mb-2">Ready to Scale Your Agency?</h3>
                <p className="text-muted-foreground mb-6">
                  Let us handle your white-label fulfillment while you focus on growing your business.
                </p>
                <Link to="/#contact">
                  <Button size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground">
                    Get Started Today
                  </Button>
                </Link>
              </div>

              {/* You May Also Like */}
              <YouMayAlsoLike currentSlug={blog.slug} currentCategory={blog.category} />
            </article>

            {/* Sidebar - Right Column, Sticky like AD */}
            <aside className="lg:col-span-4">
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
