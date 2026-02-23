import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import WhoWeAre from "@/components/sections/WhoWeAre";
import MissionVisionValues from "@/components/sections/MissionVisionValues";
import ContinuingEducation from "@/components/sections/ContinuingEducation";
import { ArrowRight, Phone, Linkedin, Briefcase } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import StreamTexture from "@/components/StreamTexture";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Team images - local imports
import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";
import wyler from "@/assets/wyler.jpg";
import johnSantos from "@/assets/team/john-santos.webp";
import carolMora from "@/assets/team/carol-mora.png";
import iraSalvador from "@/assets/team/ira-salvador.png";
import samantaLeal from "@/assets/team/samanta-leal.webp";
import lanilynErauda from "@/assets/team/lanilyn-erauda.webp";
import desireeAbbariao from "@/assets/team/desiree-abbariao.webp";
import muhammadBilal from "@/assets/team/muhammad-bilal.png";
import leilaniMaravillas from "@/assets/team/leilani-maravillas.png";
import athenaYenko from "@/assets/team/athena-yenko.jpeg";

// Other assets
import clientLogosBanner from "@/assets/client-logos-banner.png";

const About = () => {
  const teamMembers = [
    {
      name: "Doug Bryson",
      role: "CEO & Founder",
      bio: "15 years building marketing systems for local service businesses. The last several focused entirely on plumbing and HVAC. Doug built DemandStream around a single conviction: trade operators deserve marketing that speaks their language and reports in metrics they can act on.",
      image: dougHeadshot,
      linkedin: "https://www.linkedin.com/in/douglasebryson/"
    },
    {
      name: "John Joseph Santos (JJ)",
      role: "Team Lead",
      bio: "Specialist in on-page optimization and paid advertising for local service companies. Builds and manages campaigns with a focus on qualified call volume and cost per booked call.",
      image: johnSantos,
      linkedin: "https://www.linkedin.com/in/jj-santosads/"
    },
    {
      name: "Wyler",
      role: "Chief Morale Officer",
      bio: "Ensures team morale stays high. Undefeated in this role.",
      image: wyler
    },
    {
      name: "Carol Mora",
      role: "Senior Project Manager",
      bio: "Keeps client campaigns on schedule and communication clear. Ensures every deliverable is executed on time and every client always knows where things stand.",
      image: carolMora,
    },
    {
      name: "Ira Salvador",
      role: "Project Manager",
      bio: "Manages campaign workflows and client deliverables. Focused on execution quality and timeline consistency.",
      image: iraSalvador,
      linkedin: "https://www.linkedin.com/in/indira-salvador-926b7a212/"
    },
    {
      name: "Samanta Sanchezborja Leal",
      role: "Client Success Manager",
      bio: "Point of contact for client communication and campaign performance reviews. Focused on making sure clients always have clarity on results.",
      image: samantaLeal,
      linkedin: "https://www.linkedin.com/in/esamanthasbl87/"
    },
    {
      name: "Lanilyn Erauda",
      role: "Systems and Processes",
      bio: "Builds and maintains the internal processes that keep campaign quality consistent across every client account.",
      image: lanilynErauda,
      linkedin: "https://www.linkedin.com/in/lanilyn-erauda-87b077265/"
    },
    {
      name: "Desiree Abbariao",
      role: "Content Strategist",
      bio: "Creates content that connects high-value searches to booked service calls. Trade-aware writing built for local search performance.",
      image: desireeAbbariao,
      linkedin: "https://www.linkedin.com/in/desireeabbariao/"
    },
    {
      name: "Athena Yenko",
      role: "Senior SEO Content Manager",
      bio: "Leads SEO content strategy and execution for plumbing and HVAC accounts. Focused on building topical authority through service pages and location content that ranks and drives qualified call volume.",
      image: athenaYenko,
    },
    {
      name: "Leilani Maravillas",
      role: "OnPage Specialist",
      bio: "Handles on-page optimization across client sites: headings, meta data, internal linking, and page structure built for local search.",
      image: leilaniMaravillas,
      linkedin: "https://www.linkedin.com/in/leilani-jean-maravillas-67a5b746/"
    },
    {
      name: "Muhammad Bilal",
      role: "Web Developer",
      bio: "Builds and maintains client websites with a focus on speed, structure, and conversion-ready design for plumbing and HVAC companies.",
      image: muhammadBilal,
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Our Plumbing & HVAC Marketing Experts | DemandStream Digital</title>
        <meta 
          name="description" 
          content="Exclusively serving plumbing and HVAC companies, our team has managed millions in ad spend and built revenue-first marketing systems that generate more booked service calls. Meet the team." 
        />
        <meta name="keywords" content="plumbing marketing company, HVAC marketing team, Doug Bryson SEO, Demand Stream Digital, growth marketing Dallas" />
        <link rel="canonical" href="https://demandstreamdigital.com/about" />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href="https://demandstreamdigital.com/about" />
        <link rel="alternate" hrefLang="x-default" href="https://demandstreamdigital.com/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Demand Stream Digital | Growth Marketing for Plumbing & HVAC Companies" />
        <meta property="og:description" content="Discover how Demand Stream Digital helps plumbing and HVAC companies grow through SEO, paid advertising, content marketing, and reputation management." />
        <meta property="og:url" content="https://demandstreamdigital.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content="https://demandstreamdigital.com/og-images/about.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Demand Stream Digital | Growth Marketing for Plumbing & HVAC Companies" />
        <meta name="twitter:description" content="Discover how Demand Stream Digital helps plumbing and HVAC companies grow through SEO, paid advertising, content marketing, and reputation management." />
        <meta name="twitter:image" content="https://demandstreamdigital.com/og-images/about.jpg" />
        {/* Connected Organization + Person Schema for AI/LLM visibility */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
              "@type": "Organization",
                "@id": "https://demandstreamdigital.com/#organization",
                "name": "Demand Stream Digital",
                "legalName": "Demand Stream Digital LLC",
                "url": "https://demandstreamdigital.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://demandstreamdigital.com/logo.png"
                },
                "foundingDate": "2011",
                "founder": { "@id": "https://demandstreamdigital.com/#founder" },
                "areaServed": [
                  { "@type": "Country", "name": "United States" }
                ],
                "knowsAbout": [
                  { "@type": "Thing", "name": "Local SEO", "sameAs": "https://en.wikipedia.org/wiki/Local_search_(Internet)" },
                  { "@type": "Thing", "name": "Google Business Profile Optimization" },
                  { "@type": "Thing", "name": "Plumbing & HVAC Marketing" },
                  { "@type": "Thing", "name": "Pay-Per-Click Advertising", "sameAs": "https://en.wikipedia.org/wiki/Pay-per-click" }
                ],
                "sameAs": [
                  "https://www.linkedin.com/company/demand-stream-digital/",
                  "https://www.facebook.com/demandstreamdigital",
                  "https://www.instagram.com/demandstreamdigital/"
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": 4.9,
                  "reviewCount": 21,
                  "bestRating": 5,
                  "worstRating": 1
                }
              },
              {
                "@type": "Person",
                "@id": "https://demandstreamdigital.com/#founder",
                "name": "Doug Bryson",
                "jobTitle": "CEO & Founder",
                "description": "Digital marketing veteran with 14+ years of experience in SEO, paid advertising, and growth marketing for service businesses. Expert-vetted Upwork specialist who has managed millions in ad spend and served 100+ clients.",
                "worksFor": { "@id": "https://demandstreamdigital.com/#organization" },
                "knowsAbout": [
                  { "@type": "Thing", "name": "Local SEO", "sameAs": "https://en.wikipedia.org/wiki/Local_search_(Internet)" },
                  { "@type": "Thing", "name": "Google Ads", "sameAs": "https://en.wikipedia.org/wiki/Google_Ads" },
                  { "@type": "Thing", "name": "Meta Advertising" },
                  { "@type": "Thing", "name": "Amazon PPC" },
                  { "@type": "Thing", "name": "Plumbing & HVAC Marketing" },
                  { "@type": "Thing", "name": "Growth Marketing Operations" }
                ],
                "sameAs": [
                  "https://www.linkedin.com/in/dougbryson",
                  "https://www.upwork.com/freelancers/~01dougbryson"
                ]
              },
              {
                "@type": "AboutPage",
                "@id": "https://demandstreamdigital.com/about#webpage",
                "url": "https://demandstreamdigital.com/about",
                "name": "About Us | Demand Stream Digital",
                "isPartOf": { "@id": "https://demandstreamdigital.com/#website" },
                "about": { "@id": "https://demandstreamdigital.com/#organization" },
                "mainEntity": { "@id": "https://demandstreamdigital.com/#organization" }
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden bg-surface-dark">
        {/* Background image with overlay */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-surface-dark/90" />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/80 to-transparent" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Title */}
            <div>
              <p className="text-sm text-accent-blue uppercase tracking-widest font-medium mb-4">
                About DemandStream Digital
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1] mb-6">
                Built for Plumbing <span className="text-accent-blue">& HVAC Companies.</span>
              </h1>
              {/* Credibility stats */}
              <div className="flex items-start gap-6 lg:gap-10">
                <div>
                  <p className="text-2xl lg:text-3xl font-bold text-cta">15+</p>
                  <p className="text-xs text-text-secondary">Years of Execution</p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-bold text-cta">100+</p>
                  <p className="text-xs text-text-secondary">SMB & National Campaigns</p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-bold text-cta">$10M+</p>
                  <p className="text-xs text-text-secondary">Ad Spend Managed</p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-bold text-cta">4.9★</p>
                  <p className="text-xs text-text-secondary">Average Client Rating</p>
                </div>
              </div>
            </div>
            
            {/* Right - Description */}
            <div className="lg:border-l lg:border-border/50 lg:pl-12">
              <p className="font-serif text-lg lg:text-xl text-text-secondary leading-relaxed mb-4">
                We work exclusively with plumbing and HVAC companies. Not dentists. Not restaurants. Not e-commerce. Every system we build, every keyword we target, every campaign we run is designed around one outcome: more booked service calls for trade operators.
              </p>
              <p className="font-serif text-base lg:text-lg text-text-secondary leading-relaxed">
                If you run 3 to 40+ trucks and want a marketing partner who understands your service area, your seasonal swings, and what a full dispatch board actually requires: this is where that starts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anchor Navigation */}
      <nav className="sticky top-16 z-40 bg-accent-blue border-y border-accent-blue/80 shadow-lg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 md:gap-6 lg:gap-10 py-3 overflow-x-auto">
            {[
              { label: 'Mission & Values', href: '#mission-values' },
              { label: 'Who We Are', href: '#who-we-are' },
              { label: 'Timeline', href: '#timeline' },
              { label: 'Reviews', href: '#reviews' },
              { label: 'Team', href: '#team' },
              { label: 'Education', href: '#continuing-education' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm md:text-base font-medium text-white/90 hover:text-white whitespace-nowrap transition-colors duration-200 px-2 py-1"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* How We Got Here */}
      <section className="py-20 lg:py-28 bg-[hsl(var(--navy))] relative overflow-hidden">
        <StreamTexture variant="dark" opacity={0.06} />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: headline + intro */}
              <div>
                <p className="text-sm text-accent-blue uppercase tracking-widest font-medium mb-4">
                  How We Got Here
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground leading-tight mb-6">
                  15 Years in the Field. One Decision That Changed Everything.
                </h2>
                <p className="text-text-secondary leading-relaxed text-base lg:text-lg font-serif">
                  DemandStream Digital is the result of 15 years of hands-on digital marketing work across 100+ SMB and national campaigns. SEO, paid advertising, reputation management, web design. Every channel. Every market. Built and executed by practitioners, not account managers reading from a script.
                </p>
              </div>

              {/* Right: accordion */}
              <div>
                <Accordion type="single" collapsible className="space-y-3">
                  <AccordionItem value="credentials" className="border-border/30 rounded-xl bg-background/5 px-6 border">
                    <AccordionTrigger className="text-foreground hover:no-underline text-left text-base lg:text-lg font-semibold py-5 [&[data-state=open]>svg]:text-accent-blue">
                      The Credentials
                    </AccordionTrigger>
                    <AccordionContent className="text-text-secondary leading-relaxed text-base font-serif pb-6">
                      Doug Bryson spent that time earning an Expert-Vetted designation on Upwork, reaching the top 1% of freelancers globally in paid advertising and SEO. He managed millions in ad spend across industries ranging from apartment locators to national franchises to e-commerce brands.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pattern" className="border-border/30 rounded-xl bg-background/5 px-6 border">
                    <AccordionTrigger className="text-foreground hover:no-underline text-left text-base lg:text-lg font-semibold py-5 [&[data-state=open]>svg]:text-accent-blue">
                      The Pattern
                    </AccordionTrigger>
                    <AccordionContent className="text-text-secondary leading-relaxed text-base font-serif pb-6">
                      But a pattern kept emerging. The clients that got the best results, the ones where marketing actually moved the dispatch board, were plumbing and HVAC companies. Call-driven. Seasonal. Reputation-dependent. Businesses where every dollar of marketing spend either produced a booked job or it did not.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="decision" className="border-border/30 rounded-xl bg-background/5 px-6 border">
                    <AccordionTrigger className="text-foreground hover:no-underline text-left text-base lg:text-lg font-semibold py-5 [&[data-state=open]>svg]:text-accent-blue">
                      The Decision
                    </AccordionTrigger>
                    <AccordionContent className="text-text-secondary leading-relaxed text-base font-serif pb-6">
                      In 2026, the decision was made to take everything that worked best and build a dedicated system for the trades. DemandStream Digital was created as a focused growth engine for plumbing and HVAC companies — built on 15 years of execution experience and designed entirely around how trade businesses grow.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="result" className="border-border/30 rounded-xl bg-background/5 px-6 border">
                    <AccordionTrigger className="text-foreground hover:no-underline text-left text-base lg:text-lg font-semibold py-5 [&[data-state=open]>svg]:text-accent-blue">
                      The Result
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground leading-relaxed text-base font-serif font-medium pb-6">
                      That is what DemandStream is. Not a general agency that happens to take trade clients. A trade-specific growth system built by someone who has done the work — and continues to do it every day.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <div id="mission-values" className="scroll-mt-32">
        <MissionVisionValues />
      </div>

      {/* Who We Are */}
      <div id="who-we-are" className="scroll-mt-32">
        <WhoWeAre />
      </div>

      {/* The True Timeline */}
      <section id="timeline" className="py-16 lg:py-24 bg-surface-dark overflow-hidden scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-accent-blue uppercase tracking-widest font-medium mb-4">
                The Experience Behind DemandStream Digital
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                From Nashville Songwriter to Plumbing & HVAC Marketing
              </h2>
              <p className="text-text-secondary max-w-3xl mx-auto">
                Every phase below represents constraints learned, mistakes corrected, and systems refined. That experience now runs through how DemandStream serves plumbing and HVAC companies today.
              </p>
            </div>
            
            {/* Timeline with connecting lines */}
            <div className="relative">
              {/* Vertical connecting line - visible on desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-cta to-accent-blue opacity-30" style={{ transform: 'translateX(-50%)' }} />
              
              {/* Timeline Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">

                {/* 2011-2015 - Building the Foundation */}
                <div className="group bg-background border border-border rounded-2xl p-6 hover:border-accent-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent-blue/20 hover:scale-[1.08] hover:z-20 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center border-2 border-accent-blue">
                      <span className="text-accent-blue font-bold text-sm">'11</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-accent-blue uppercase tracking-wide">2011-2015</p>
                      <p className="text-lg font-semibold text-foreground">Building the Foundation</p>
                    </div>
                  </div>
                  <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                    Started in local SEO and digital marketing across multiple industries. Learned the mechanics of local search, review velocity, and what it takes to rank in competitive markets.
                  </p>
                  <div className="pt-4 border-t border-border/50 space-y-2">
                    <p className="text-sm text-foreground font-medium">Ranked local service businesses across Nashville in multiple categories.</p>
                    <p className="text-sm text-text-secondary">Developed reputation management systems that still inform how we handle review growth today.</p>
                  </div>
                </div>

                {/* 2014-2015 - Agency Training */}
                <div className="group bg-background border border-border rounded-2xl p-6 hover:border-accent-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent-blue/20 hover:scale-[1.08] hover:z-20 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center border-2 border-accent-blue">
                      <span className="text-accent-blue font-bold text-sm">'14</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-accent-blue uppercase tracking-wide">2014-2015</p>
                      <p className="text-lg font-semibold text-foreground">Agency Training</p>
                    </div>
                  </div>
                  <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                    Joined a full-service agency. Learned integrated marketing at scale: SEO, paid advertising, and media strategy working together. This is where the system-over-tactics mindset was forged.
                  </p>
                  <div className="pt-4 border-t border-border/50 space-y-2">
                    <p className="text-sm text-foreground font-medium">Inbound marketing: SEO + paid media integration.</p>
                    <p className="text-sm text-text-secondary">Managed client accounts across verticals, learning what separates sustainable growth from short-term wins.</p>
                  </div>
                </div>

                {/* 2015-2019 - Paid Advertising at Scale */}
                <div className="group bg-background border border-border rounded-2xl p-6 hover:border-cta/50 transition-all duration-300 hover:shadow-xl hover:shadow-cta/20 hover:scale-[1.08] hover:z-20 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center border-2 border-cta">
                      <span className="text-cta font-bold text-xs">'15-19</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cta uppercase tracking-wide">2015-2019</p>
                      <p className="text-lg font-semibold text-foreground">Paid Advertising at Scale</p>
                    </div>
                  </div>
                  <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                    Moved to Dallas. Ran paid advertising campaigns across industries: apartments, dental, home services, and e-commerce. Managed $100K-$150K/mo in ad spend. Learned what call-driven businesses need from paid campaigns versus everything else.
                  </p>
                  <div className="pt-4 border-t border-border/50 space-y-2">
                    <p className="text-sm text-foreground font-medium">400+ leads in a single month for a locator client using paid search + social.</p>
                    <p className="text-sm text-text-secondary">Multiple proximity-based rankings and national-scale SEO for service companies.</p>
                  </div>
                </div>

                {/* 2019-2020 - Performance Marketing */}
                <div className="group bg-background border border-border rounded-2xl p-6 hover:border-cta/50 transition-all duration-300 hover:shadow-xl hover:shadow-cta/20 hover:scale-[1.08] hover:z-20 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center border-2 border-cta">
                      <span className="text-cta font-bold text-xs">'19-20</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cta uppercase tracking-wide">2019-2020</p>
                      <p className="text-lg font-semibold text-foreground">Performance Marketing</p>
                    </div>
                  </div>
                  <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                    Ran enterprise paid media. Generated close to a million dollars in retainer revenue for one client. Built performance-based campaign structures that tied spend directly to revenue outcomes.
                  </p>
                  <div className="pt-4 border-t border-border/50 space-y-2">
                    <p className="text-sm text-foreground font-medium">Enterprise paid media: direct response at scale.</p>
                    <p className="text-sm text-text-secondary">This phase confirmed that marketing systems only work when tied to trackable business outcomes.</p>
                  </div>
                </div>

                {/* 2019-2021 - Expert-Vetted Upwork */}
                <div className="group bg-accent-blue/5 border-2 border-accent-blue rounded-2xl p-6 hover:shadow-xl hover:shadow-accent-blue/30 hover:scale-[1.08] hover:z-20 transition-all duration-300 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent-blue flex items-center justify-center animate-pulse" style={{ animationDuration: '3s' }}>
                      <span className="text-white font-bold text-xs">'19-21</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-accent-blue uppercase tracking-wide">2019-2021</p>
                      <p className="text-lg font-semibold text-accent-blue">Top 1% Upwork: Expert-Vetted</p>
                    </div>
                  </div>
                  <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                    Reached top 1% of all Upwork freelancers for paid advertising and SEO. $2M+ in client revenue generated. Worked with multi-location franchises, national service brands, and high-volume e-commerce.
                  </p>
                  <div className="pt-4 border-t border-accent-blue/20 space-y-2">
                    <p className="text-sm text-foreground font-medium">Multi-location franchise support.</p>
                    <p className="text-sm text-text-secondary">National advertising campaigns across multiple industries.</p>
                  </div>
                </div>

                {/* 2021-2025 - White Label Partnerships */}
                <div className="group bg-background border border-border rounded-2xl p-6 hover:border-accent-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent-blue/20 hover:scale-[1.08] hover:z-20 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center border-2 border-accent-blue">
                      <span className="text-accent-blue font-bold text-xs">'21-25</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-accent-blue uppercase tracking-wide">2021-2025</p>
                      <p className="text-lg font-semibold text-foreground">White Label Partnerships</p>
                    </div>
                  </div>
                  <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                    Managed white label fulfillment across a wide range of industries — from cowboy boots to water parks, national luxury outdoor furniture to local service brands. Built repeatable systems for agency partners who needed reliable execution without the overhead.
                  </p>
                  <div className="pt-4 border-t border-border/50 space-y-2">
                    <p className="text-sm text-foreground font-medium">Full-service fulfillment: SEO, paid media, content, and reporting.</p>
                    <p className="text-sm text-text-secondary">Managed campaigns across dozens of verticals under agency brands.</p>
                  </div>
                </div>

                {/* 2026-Present - The Plumbing & HVAC Pivot */}
                <div className="group bg-cta/10 border-2 border-cta rounded-2xl p-6 hover:shadow-xl hover:shadow-cta/30 hover:scale-[1.08] hover:z-20 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-3 right-3 bg-cta text-white text-xs font-bold px-2 py-1 rounded-full">
                    NOW
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-cta shadow-lg">
                      <img src={dougHeadshot} alt="Doug Bryson" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cta uppercase tracking-wide">2026-Present</p>
                      <p className="text-lg font-semibold text-cta">The Plumbing & HVAC Pivot</p>
                    </div>
                  </div>
                  <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                    Stopped serving every industry. Went all in on plumbing and HVAC. Managed several million dollars in paid advertising and SEO for trade companies. Built the connected system that DemandStream runs on today.
                  </p>
                  <div className="pt-4 border-t border-cta/20 space-y-2">
                    <p className="text-sm text-foreground font-medium">Plumbing and HVAC companies exclusively.</p>
                    <p className="text-sm text-text-secondary">SEO, paid ads, reputation, and retention built as one system for call-driven service businesses.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See Our Work CTA */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              See the Results in Action
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8">
              Explore detailed case studies showcasing real growth metrics, ROI breakdowns, and the strategies behind our partners' success.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/case-studies">
                See Our Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Real Reviews from Real Clients */}
      <section id="reviews" className="py-20 lg:py-28 bg-background scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-sm text-accent-blue uppercase tracking-widest font-medium mb-4">
                What Agencies and Business Owners Say
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                Real Reviews <span className="text-cta">from Real Clients</span>
              </h2>
              <p className="font-serif text-text-secondary mt-4 max-w-2xl mx-auto">
                These reviews span 14 years across different company names. We've kept them all for transparency.
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 10000,
                  stopOnInteraction: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  {
                    quote: "I've owned an ad agency in Dallas for a decade and partnered with Doug's team for seven years. They're second to none — incredibly articulate when it comes to campaign structure, from paid advertising to organic SEO to answer engine optimization. Extremely competitive pricing for the level of wisdom and responsiveness you receive. They will make your company money.",
                    name: "Cole",
                    date: "December 2025",
                    services: "PPC, Local SEO, National SEO, AEO",
                    rating: 5
                  },
                  {
                    quote: "We needed a partner we could trust to deliver quality work across different client situations. The ability to have real conversations about scope and strategy made a measurable difference in client retention. Most clients stayed at least a year.",
                    name: "Jeremy",
                    date: "December 2025",
                    services: "Local SEO, PPC, Authority Building, GBP SEO",
                    rating: 5
                  },
                  {
                    quote: "What stood out was the consistency. Every month, we knew what to expect. Communication was clear, deliverables arrived on time, and we could actually explain the work to our clients without scrambling. That reliability changed how we operate.",
                    name: "Trevor Anderson",
                    date: "December 2025",
                    services: "PPC, Local SEO, Franchise Marketing",
                    rating: 5
                  },
                  {
                    quote: "The biggest win was knowing we could count on them. Our team could confidently discuss campaigns with clients because we understood what was happening and why. That clarity is hard to find.",
                    name: "Florida Agency Owner",
                    date: "2024",
                    services: "Local SEO, PPC",
                    rating: 5
                  },
                  {
                    quote: "I don't write many reviews but after having a great experience with Dialed-In, I had to let everyone know! Doug helped us create our website and was with us every step of the way. This was the first time I had built a website and didn't know what to expect or even where to begin, but Doug answered all of our questions and made the process so easy. Doug has proven he has great business ethics and is always professional. I highly recommend this business for anyone looking to enhance their online presence, website, or increase business.",
                    name: "David Dorn",
                    date: "2018",
                    services: "Web Design",
                    rating: 5
                  },
                  {
                    quote: "Doug is incredible to work with. I was blown away at how quickly he caught onto what I was hoping to build. Without much direction he had setup campaigns pulling artwork and copy without even having to tell him what to do. Streamlined my process and generated successful campaigns. Would hire again in a heartbeat.",
                    name: "Brian Sperry",
                    date: "2020",
                    services: "PPC",
                    rating: 5
                  },
                  {
                    quote: "Dialedin Local has done an exceptional job with our SEO management. We have seen consistent improvements and sales growth since working with Doug. I highly recommend them!",
                    name: "Curtis Feather",
                    date: "2016",
                    services: "Local SEO",
                    rating: 5
                  },
                  {
                    quote: "The Dialed-In Web team have always been professional and knowledgable in their industry. I had a great experience working with them, and would highly recommend this business to grow your online presence.",
                    name: "Cynthia Cavoto",
                    date: "2019",
                    services: "Local SEO, Web Design",
                    rating: 5
                  },
                  {
                    quote: "I was looking for an SEO firm that could help me optimize my local listings and improve our rankings for certain location specific keywords without breaking the bank. Doug and the team at Dialed-In did just that. As a small business owner, I simply don't have $10,000 a month to retain a firm unless I don't want to pay my mortgage. Doug and his team did excellent work for a reasonable price.",
                    name: "Joseph Dillon",
                    date: "2017",
                    services: "Local SEO",
                    rating: 5
                  },
                  {
                    quote: "We at Veterans Auto Services have really appreciated Dialed-In. Doug Bryson was great to work with. He closely monitored our companies reviews and was always quick to act with ideas and would implement them to make sure that our company was in full view the public. Thank you Doug and Dialed-In for all that you do.",
                    name: "Wendy Burns",
                    date: "2015",
                    services: "Local SEO, Reputation Management",
                    rating: 5
                  },
                  {
                    quote: "We run a national car wash company with multiple units. After looking at different companies to help us with our SEO efforts, we ultimately decided to try Dialed-In Local. From the first time we met with Doug we felt confident in his ability to help us. He has proven that he has the technical skills and know how but has proven he genuinely cares about seeing his clients succeed.",
                    name: "Car Spa",
                    date: "2014",
                    services: "National SEO, Multi-Location SEO",
                    rating: 5
                  },
                  {
                    quote: "I would highly recommend Doug at Dialed in Local to any business looking to grow with SEO. Doug is a great business partner and an excellent communicator. My rankings have shown tremendous growth in a very short period of time. Highly recommended!",
                    name: "ASAP Apartment Finders",
                    date: "2016",
                    services: "Local SEO",
                    rating: 5
                  }
                ].map((review, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2">
                    <div className="bg-surface-dark border border-border rounded-2xl p-6 lg:p-8 h-full">
                      <p className="font-serif text-text-secondary leading-relaxed mb-6">
                        "{review.quote}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-cta mb-1">{review.name}</p>
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs block text-text-secondary">{review.date}</span>
                          <span className="text-xs text-accent-blue">{review.services}</span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-6">
                <CarouselPrevious className="static translate-y-0 bg-surface-dark border-border hover:bg-cta/10 hover:border-cta/30" />
                <CarouselNext className="static translate-y-0 bg-surface-dark border-border hover:bg-cta/10 hover:border-cta/30" />
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
                <Link 
                  to="/contact" 
                  className="btn-cta group"
                >
                  Explore a Partnership
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a 
                  href={PHONE_HREF}
                  className="flex items-center gap-2 px-6 py-4 rounded-lg border border-border text-foreground hover:bg-surface-elevated transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  {PHONE_NUMBER}
                </a>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section id="clients" className="py-16 lg:py-20 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm text-accent-blue uppercase tracking-widest font-medium mb-4">
                From Those Who Know Us Best
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                A Handful of Clients We've Supported Over the Years
              </h2>
            </div>
            <div className="relative border border-border/30 rounded-2xl p-6 md:p-8 lg:p-12 bg-white overflow-hidden">
              <img 
                src={clientLogosBanner} 
                alt="Client logos including Cherry Blow Dry Bar, Armor Roofing, Wash N Roll, Angel Maids, and more"
                width={1100}
                height={358}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 lg:py-28 relative bg-background scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-sm text-accent-blue uppercase tracking-widest font-medium mb-4">
                The People Behind the Work
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Our Team
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                A delivery-focused team built for execution, communication, and long-term client results. Everyone here works exclusively on plumbing and HVAC accounts.
              </p>
            </div>

            {/* Team Grid - Large Photos */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="group text-center"
                >
                  <div className="aspect-[4/5] mb-4 rounded-xl overflow-hidden bg-surface-dark border border-border group-hover:border-accent-blue/30 transition-colors relative">
                    <img 
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      className="w-full h-full object-cover object-top"
                    />
                    {member.bio && (
                      <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <p className="text-text-secondary text-xs leading-relaxed text-center">{member.bio}</p>
                      </div>
                    )}
                  </div>
                  <h4 className="text-base lg:text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-text-secondary mb-2">
                    {member.role}
                  </p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-colors"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Continuing Education */}
      <div id="continuing-education" className="scroll-mt-32">
        <ContinuingEducation />
      </div>

      {/* Contact CTA */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>
      
      <Footer />
    </>
  );
};

export default About;
