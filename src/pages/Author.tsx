import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { getAuthorBySlug } from "@/data/authors";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Linkedin, ExternalLink, Calendar, ArrowRight, BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { getBlogFeaturedImage } from "@/lib/blogImages";
import { getPageOgImage } from "@/lib/ogImages";

// Map author slugs to their blog post slugs
const authorArticleMap: Record<string, string[]> = {
  'desiree-abbariao': [
    'benefits-of-white-label-seo-services',
    'white-label-local-ppc',
    'on-page-optimization-local-seo',
  ],
  'richard-baylon': [
    'what-is-white-label-digital-marketing',
    'white-label-social-media',
    'white-label-seo-for-agencies-checklist',
  ],
  'doug-bryson': [], // Default author - gets any articles not assigned to others
};

const Author = () => {
  const { slug } = useParams<{ slug: string }>();
  const author = slug ? getAuthorBySlug(slug) : undefined;

  // Fetch articles by this author
  const { data: articles, isLoading: articlesLoading } = useQuery({
    queryKey: ['author-articles', slug],
    queryFn: async () => {
      const articleSlugs = authorArticleMap[slug || ''] || [];
      
      if (articleSlugs.length === 0) {
        // For Doug or unknown authors, get articles not assigned to others
        const assignedSlugs = Object.values(authorArticleMap).flat();
        const { data, error } = await supabase
          .from('blogs')
          .select('id, title, slug, excerpt, featured_image, published_at')
          .not('slug', 'in', `(${assignedSlugs.join(',')})`)
          .order('published_at', { ascending: false });
        
        if (error) throw error;
        return data || [];
      }
      
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, slug, excerpt, featured_image, published_at')
        .in('slug', articleSlugs)
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
    enabled: !!slug,
  });

  if (!author) {
    return <Navigate to="/about" replace />;
  }

  const ogImage = getPageOgImage('author');

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `https://dialedinweb.com/authors/${author.slug}#person`,
        "name": author.name,
        "jobTitle": author.role,
        "description": author.shortBio,
        "image": author.image,
        "worksFor": {
          "@type": "Organization",
          "@id": "https://dialedinweb.com/#organization",
          "name": "Dialed-In Web"
        },
        "sameAs": author.schemaData.sameAs,
        "knowsAbout": author.schemaData.knowsAbout.map(topic => ({
          "@type": "Thing",
          "name": topic.name,
          "sameAs": topic.sameAs
        }))
      },
      {
        "@type": "ProfilePage",
        "@id": `https://dialedinweb.com/authors/${author.slug}`,
        "name": `${author.name} - ${author.role}`,
        "description": author.shortBio,
        "mainEntity": { "@id": `https://dialedinweb.com/authors/${author.slug}#person` },
        "isPartOf": { "@id": "https://dialedinweb.com/#website" }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{author.name} - {author.role} | Dialed-In Web</title>
        <meta name="description" content={author.shortBio} />
        <link rel="canonical" href={`https://dialedinweb.com/authors/${author.slug}`} />
        <meta name="keywords" content={`${author.name}, ${author.role}, white label marketing expert, agency SEO specialist`} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href={`https://dialedinweb.com/authors/${author.slug}`} />
        <link rel="alternate" hrefLang="en-CA" href={`https://dialedinweb.com/authors/${author.slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://dialedinweb.com/authors/${author.slug}`} />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        
        {/* Open Graph */}
        <meta property="og:title" content={`${author.name} - ${author.role} | Dialed-In Web`} />
        <meta property="og:description" content={author.shortBio} />
        <meta property="og:url" content={`https://dialedinweb.com/authors/${author.slug}`} />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Dialed-In Web" />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${author.name} - ${author.role} | Dialed-In Web`} />
        <meta name="twitter:description" content={author.shortBio} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to About
            </Link>
          </nav>

          {/* Author Header */}
          <header className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="shrink-0">
              <img
                src={author.image}
                alt={author.name}
                className="w-48 h-48 rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {author.name}
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                {author.role}
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                {author.shortBio}
              </p>
              
              {/* Social Links */}
              {author.socialLinks && (
                <div className="flex gap-3">
                  {author.socialLinks.linkedin && (
                    <a
                      href={author.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#0077B5]/90 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  )}
                  {author.socialLinks.upwork && (
                    <a
                      href={author.socialLinks.upwork}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#14A800] text-white rounded-lg hover:bg-[#14A800]/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Upwork
                    </a>
                  )}
                </div>
              )}
            </div>
          </header>

          {/* Credentials */}
          {author.credentials.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">Credentials</h2>
              <div className="flex flex-wrap gap-2">
                {author.credentials.map((credential, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1.5 px-3">
                    {credential}
                  </Badge>
                ))}
              </div>
            </section>
          )}

          {/* Full Bio */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">About {author.name.split(' ')[0]}</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              {author.fullBio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Expertise */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">Areas of Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {author.expertise.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm py-1.5 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          {/* Articles by Author */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Articles by {author.name.split(' ')[0]}
            </h2>
            
            {articlesLoading ? (
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <Card key={i} className="bg-surface-dark border-border">
                    <Skeleton className="h-40 w-full rounded-t-lg" />
                    <CardHeader>
                      <Skeleton className="h-5 w-3/4" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-2/3" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : articles && articles.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <Link key={article.id} to={`/blog/${article.slug}`}>
                    <Card className="bg-surface-dark border-border hover:border-cta/30 transition-all duration-300 h-full group">
                      {getBlogFeaturedImage(article.featured_image) ? (
                        <div className="relative h-40 overflow-hidden rounded-t-lg">
                          <img 
                            src={getBlogFeaturedImage(article.featured_image)!} 
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="h-40 bg-surface-elevated flex items-center justify-center rounded-t-lg">
                          <BookOpen className="w-10 h-10 text-border" />
                        </div>
                      )}
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.published_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <CardTitle className="text-lg group-hover:text-cta transition-colors line-clamp-2">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {article.excerpt && (
                          <p className="text-text-secondary text-sm line-clamp-2 mb-3">
                            {article.excerpt}
                          </p>
                        )}
                        <span className="text-cta text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-surface-dark rounded-xl">
                <BookOpen className="w-12 h-12 text-border mx-auto mb-3" />
                <p className="text-text-secondary">No articles published yet.</p>
              </div>
            )}
          </section>

          {/* CTA */}
          <section className="bg-muted/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              Work With Our Team
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Ready to explore how our team can support your agency's growth? Let's start a conversation.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Start the Conversation</Link>
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Author;
