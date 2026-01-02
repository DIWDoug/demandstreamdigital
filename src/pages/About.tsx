import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import WhoWeAre from "@/components/sections/WhoWeAre";
import MissionVisionValues from "@/components/sections/MissionVisionValues";
import ContinuingEducation from "@/components/sections/ContinuingEducation";
import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";
import wyler from "@/assets/wyler.jpg";
import moniqueBaetiong from "@/assets/team/monique-baetiong.jpg";
import muhammadBilal from "@/assets/team/muhammad-bilal.png";
import clientLogosBanner from "@/assets/client-logos-banner.png";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
  const teamMembers = [
    {
      name: "Doug Bryson",
      role: "CEO & Founder",
      image: dougHeadshot
    },
    {
      name: "John Joseph Santos",
      role: "OnPage SEO & Paid Ads Specialist",
      image: "https://dialedinweb.com/wp-content/uploads/2025/11/Dental-Team-4.webp"
    },
    {
      name: "Wyler",
      role: "Chief Morale Officer",
      image: wyler
    },
    {
      name: "Shera Lee Fabian",
      role: "Senior Project Manager",
      image: "https://dialedinweb.com/wp-content/uploads/2025/11/Dental-Team-1.webp"
    },
    {
      name: "Ira Salvador",
      role: "Project Manager",
      image: "https://dialedinweb.com/wp-content/uploads/2025/11/Ira-Salvador-min.png"
    },
    {
      name: "Samanta Sanchezborja Leal",
      role: "Client Success Manager",
      image: "https://dialedinweb.com/wp-content/uploads/2025/11/Dental-Team-6.webp"
    },
    {
      name: "Lanilyn Erauda",
      role: "SOP Specialist",
      image: "https://dialedinweb.com/wp-content/uploads/2025/11/Dental-Team-7.webp"
    },
    {
      name: "Martini Mabifa",
      role: "SEO Web Developer",
      image: "https://dialedinweb.com/wp-content/uploads/2025/11/Martini.jpg"
    },
    {
      name: "Richard Baylon",
      role: "Content Strategist",
      image: "https://dialedinweb.com/wp-content/uploads/2025/11/Dental-Team-10.webp"
    },
    {
      name: "Desiree Abbariao",
      role: "Content Strategist",
      image: "https://dialedinweb.com/wp-content/uploads/2025/11/Dental-Team-3.webp"
    },
    {
      name: "Leilani Maravillas",
      role: "OnPage Specialist",
      image: "https://dialedinweb.com/wp-content/uploads/2025/11/Leilani-Maravillas-min.png"
    },
    {
      name: "James Belmes",
      role: "Link Building Specialist",
      image: "https://dialedinweb.com/wp-content/uploads/2025/11/Dental-Team-2.webp"
    },
    {
      name: "Bel Aniano",
      role: "Marketing Coordinator",
      image: "https://dialedinweb.com/wp-content/uploads/2025/11/Bel.webp"
    },
    {
      name: "Bianca Lapuz",
      role: "Marketing Coordinator",
      image: "https://dialedinweb.com/wp-content/uploads/2025/11/Dental-Team-8.webp"
    },
    {
      name: "Muhammad Bilal",
      role: "Web Developer",
      image: muhammadBilal
    },
    {
      name: "Monique Baetiong",
      role: "CPA",
      image: moniqueBaetiong
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Dialed-In Web - White-Label Digital Marketing</title>
        <meta 
          name="description" 
          content="Meet the team behind Dialed-In Web. 14 years of experience, 100+ clients served, millions in ad spend managed. Built by marketers, for marketers." 
        />
        {/* Connected Organization + Person Schema for AI/LLM visibility */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://dialedinweb.com/#organization",
                "name": "Dialed-In Web",
                "legalName": "Dialed-In Web LLC",
                "url": "https://dialedinweb.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://dialedinweb.com/logo.png"
                },
                "foundingDate": "2011",
                "founder": { "@id": "https://dialedinweb.com/#founder" },
                "areaServed": [
                  { "@type": "Country", "name": "United States" },
                  { "@type": "Country", "name": "Canada" }
                ],
                "knowsAbout": [
                  { "@type": "Thing", "name": "Local SEO", "sameAs": "https://en.wikipedia.org/wiki/Local_search_(Internet)" },
                  { "@type": "Thing", "name": "Google Business Profile Optimization" },
                  { "@type": "Thing", "name": "White-Label Marketing Services" },
                  { "@type": "Thing", "name": "Pay-Per-Click Advertising", "sameAs": "https://en.wikipedia.org/wiki/Pay-per-click" }
                ],
                "sameAs": [
                  "https://www.linkedin.com/company/dialedinweb",
                  "https://twitter.com/DialedInWeb"
                ]
              },
              {
                "@type": "Person",
                "@id": "https://dialedinweb.com/#founder",
                "name": "Doug Bryson",
                "jobTitle": "CEO & Founder",
                "description": "Digital marketing veteran with 14+ years of experience in SEO, paid advertising, and agency operations. Expert-vetted Upwork specialist who has managed millions in ad spend and served 100+ clients.",
                "worksFor": { "@id": "https://dialedinweb.com/#organization" },
                "knowsAbout": [
                  { "@type": "Thing", "name": "Local SEO", "sameAs": "https://en.wikipedia.org/wiki/Local_search_(Internet)" },
                  { "@type": "Thing", "name": "Google Ads", "sameAs": "https://en.wikipedia.org/wiki/Google_Ads" },
                  { "@type": "Thing", "name": "Meta Advertising" },
                  { "@type": "Thing", "name": "Amazon PPC" },
                  { "@type": "Thing", "name": "White-Label Marketing" },
                  { "@type": "Thing", "name": "Agency Operations" }
                ],
                "sameAs": [
                  "https://www.linkedin.com/in/dougbryson",
                  "https://www.upwork.com/freelancers/~01dougbryson"
                ]
              },
              {
                "@type": "AboutPage",
                "@id": "https://dialedinweb.com/about#webpage",
                "url": "https://dialedinweb.com/about",
                "name": "About Us | Dialed-In Web",
                "isPartOf": { "@id": "https://dialedinweb.com/#website" },
                "about": { "@id": "https://dialedinweb.com/#organization" },
                "mainEntity": { "@id": "https://dialedinweb.com/#organization" }
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden bg-surface-dark">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-surface-dark/90" />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/80 to-transparent" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Title */}
            <div>
              <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
                About Dialed-In Web
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1] mb-6">
                Built by a Marketer, <span className="text-accent-blue">For Marketers</span>
              </h1>
              {/* Credibility stats - Cashvertising: specificity builds trust */}
              <div className="flex flex-wrap gap-6 lg:gap-8">
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-cta">14</p>
                  <p className="text-sm text-text-secondary">Years</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-cta">100+</p>
                  <p className="text-sm text-text-secondary">Clients</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-cta">$M+</p>
                  <p className="text-sm text-text-secondary">Ad Spend</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-cta">4.8★</p>
                  <p className="text-sm text-text-secondary">Google</p>
                </div>
              </div>
            </div>
            
            {/* Right - Description */}
            <div className="lg:border-l lg:border-border/50 lg:pl-12">
              <p className="font-serif text-lg lg:text-xl text-text-secondary leading-relaxed">
                Since 2011, we've worked directly with small and mid-sized businesses and alongside agencies—building and fulfilling inbound marketing campaigns across local, regional, and national markets. SEO, paid advertising, email marketing, and more. All scoped to the market, explained in plain English, and executed by practitioners who've done the work themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anchor Navigation */}
      <nav className="sticky top-16 z-40 bg-cta border-y border-cta/80 shadow-lg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 md:gap-6 lg:gap-10 py-3 overflow-x-auto">
            {[
              { label: 'Mission & Values', href: '#mission-values' },
              { label: 'Who We Are', href: '#who-we-are' },
              { label: 'Timeline', href: '#timeline' },
              { label: 'Reviews', href: '#reviews' },
              { label: 'Team', href: '#team' },
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
              <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
                The Operating Experience Behind Dialed-In Web
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                From Nashville Songwriter to Full-Service Agency
              </h2>
              <p className="text-text-secondary max-w-3xl mx-auto">
                Each phase below represents constraints learned, mistakes corrected, and systems refined that now inform how we scope, execute, and support our clients today.
              </p>
            </div>
            
            {/* Timeline with connecting lines */}
            <div className="relative">
              {/* Vertical connecting line - visible on desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cta via-accent-blue to-cta opacity-30" style={{ transform: 'translateX(-50%)' }} />
              
              {/* Timeline Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                
                {/* Horizontal dotted connector - top row */}
                <div className="hidden lg:block absolute top-24 left-0 right-0 border-t-2 border-dashed border-cta/20" />
                
                {/* 2011-2015 - Nashville Days */}
                <div className="group bg-background border border-border rounded-2xl p-6 hover:border-cta/50 transition-all duration-300 hover:shadow-xl hover:shadow-cta/20 hover:scale-[1.08] hover:z-20 lg:col-span-2 relative">
                  <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-6 rounded-full bg-cta/20 border-2 border-cta" style={{ transform: 'translateY(-50%)' }} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center border-2 border-cta">
                      <span className="text-cta font-bold text-sm">'11</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cta uppercase tracking-wide">2011-2015</p>
                      <p className="text-lg font-semibold text-foreground">The Nashville Days</p>
                    </div>
                  </div>
                  <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                    Nashville songwriter turned digital marketer. Tower Records closed. Publishing deal ended. A new road opened. Found the local SEO niche and started ranking businesses across multiple industries.
                  </p>
                  <div className="pt-4 border-t border-border/50 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-cta font-semibold">Angel Maids</p>
                      <p className="text-sm text-text-secondary">15→75+ cleanings/week. Page 1 for 20+ keywords. Still one of the most recognized cleaning companies in all of Nashville.</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Wash N Roll</p>
                      <p className="text-sm text-text-secondary">Page 1: "Nashville Car Wash," "Brentwood Car Wash," "Brentwood Truck Wash." Hundreds of reviews. Social media + coupon recoupment.</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Sonya Smithson DDS</p>
                      <p className="text-sm text-text-secondary">Page 1: "Brentwood Dentist," "Brentwood Sedation Dentist," "Brentwood Family Dentistry"</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Next Level Fitness</p>
                      <p className="text-sm text-text-secondary">#1 for "Nashville Personal Trainer." Page 1: "Personal Trainer Near Me," "Nashville Fitness"</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Southside Grill</p>
                      <p className="text-sm text-text-secondary">Page 1 for multiple brunch and lunch keywords</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Darfon's Restaurant</p>
                      <p className="text-sm text-text-secondary">Top ranking: "Nashville Romantic Restaurants." Several hundred reviews through strategic review campaign.</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">HandyPro + Veteran's Auto</p>
                      <p className="text-sm text-text-secondary">Page 1: "Nashville Handyman," "Nashville Auto Service"</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Armor Roofing</p>
                      <p className="text-sm text-text-secondary">Page 1 for multiple roofing and gutter terms</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Joseph Dillon / Equitable Mediation</p>
                      <p className="text-sm text-text-secondary">Page 1: "Chicago Divorce Mediation"</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Love & Pho</p>
                      <p className="text-sm text-text-secondary">Reputation + rankings for Nashville pho keywords</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Maid Right of Williamson County</p>
                      <p className="text-sm text-text-secondary">Local SEO and reputation management (2014)</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary italic">+ Farrow Pediatric Dentistry, G7 Marketing, Local Search Masters contract work</p>
                    </div>
                  </div>
                </div>

                {/* 2015 - Agency Side */}
                <div className="group bg-background border border-border rounded-2xl p-6 hover:border-accent-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent-blue/20 hover:scale-[1.08] hover:z-20 relative">
                  <div className="hidden lg:block absolute -left-3 top-1/2 w-6 h-6 rounded-full bg-accent-blue/20 border-2 border-accent-blue" style={{ transform: 'translateY(-50%)' }} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center border-2 border-accent-blue">
                      <span className="text-accent-blue font-bold text-sm">'15</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-accent-blue uppercase tracking-wide">2014-2015</p>
                      <p className="text-lg font-semibold text-foreground">Agency Training</p>
                    </div>
                  </div>
                  <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                    Freelancing wasn't for me at that stage. Sold my clientele to Horton Group and joined their team. Learned what it really meant to focus on the big picture: the 360. This is where the paid advertising adventure started.
                  </p>
                  <div className="pt-4 border-t border-border/50">
                    <div>
                      <p className="text-sm text-accent-blue font-semibold">Horton Group (Nashville, 2014-2015)</p>
                      <p className="text-sm text-text-secondary">Inbound marketing. SEO + paid media integration. Worked on several clients.</p>
                    </div>
                  </div>
                </div>

                {/* Horizontal dotted connector - second row */}
                <div className="hidden lg:block absolute top-[calc(50%-80px)] left-0 right-0 border-t-2 border-dashed border-accent-blue/20" />

                {/* 2015-2019 - Dallas Days */}
                <div className="group bg-background border border-border rounded-2xl p-6 hover:border-cta/50 transition-all duration-300 hover:shadow-xl hover:shadow-cta/20 hover:scale-[1.08] hover:z-20 lg:col-span-2 relative">
                  <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-6 rounded-full bg-cta/20 border-2 border-cta" style={{ transform: 'translateY(-50%)' }} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center border-2 border-cta">
                      <span className="text-cta font-bold text-xs">'15-19</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cta uppercase tracking-wide">2015-2019</p>
                      <p className="text-lg font-semibold text-foreground">The Dallas Days</p>
                    </div>
                  </div>
                  <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                    Moved to Dallas. Heavy focus on paid advertising and SEO. Dominated the apartment locator niche.
                  </p>
                  <div className="pt-4 border-t border-border/50 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-cta font-semibold">ASAP Apartment Finders</p>
                      <p className="text-sm text-text-secondary">Most leads they ever received. Still page 1 for Dallas apartment locator keywords today.</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Advanced Locators</p>
                      <p className="text-sm text-text-secondary">Paid advertising (social + search). 400+ leads in one month.</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Car Spa (11 locations)</p>
                      <p className="text-sm text-text-secondary">Multiple proximity-based rankings across the nation. Website rebuild. Page 1 for car wash keywords in every market.</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Elite Dental</p>
                      <p className="text-sm text-text-secondary">Page 1 for several "Uptown Dentist" keywords</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Couch Crazy</p>
                      <p className="text-sm text-text-secondary">E-commerce SEO + paid advertising</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary italic">Dialed-In Web goes full-service: web dev, paid media, comprehensive digital marketing</p>
                    </div>
                  </div>
                </div>

                {/* 2019-2020 - iProspect + Coaching */}
                <div className="group bg-background border border-border rounded-2xl p-6 hover:border-accent-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent-blue/20 hover:scale-[1.08] hover:z-20 relative">
                  <div className="hidden lg:block absolute -left-3 top-1/2 w-6 h-6 rounded-full bg-accent-blue/20 border-2 border-accent-blue" style={{ transform: 'translateY(-50%)' }} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center border-2 border-accent-blue">
                      <span className="text-accent-blue font-bold text-xs">'19-20</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-accent-blue uppercase tracking-wide">2019-2020</p>
                      <p className="text-lg font-semibold text-foreground">iProspect + Coaching</p>
                    </div>
                  </div>
                  <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                    Agency life confirmed it wasn't for me, but the results spoke: 180% retainment on Reliant Energy through a pay-per-performance campaign. Generated close to a million dollars in retainer fees for that one client. All through good paid advertising.
                  </p>
                  <div className="pt-4 border-t border-border/50 space-y-3">
                    <div>
                      <p className="text-sm text-accent-blue font-semibold">iProspect</p>
                      <p className="text-sm text-text-secondary">Reliant Energy. Enterprise paid media.</p>
                    </div>
                    <div>
                      <p className="text-sm text-accent-blue font-semibold">Kevin Hutto (Coaching)</p>
                      <p className="text-sm text-text-secondary">Worked under the well-known digital marketing influencer. Managed clients: Kevin Nations, Shanda Sumpter, Taki Moore, Kisma.</p>
                    </div>
                  </div>
                </div>

                {/* Horizontal dotted connector - third row */}
                <div className="hidden lg:block absolute bottom-[280px] left-0 right-0 border-t-2 border-dashed border-cta/20" />

                {/* 2019-2020 - National Clients */}
                <div className="group bg-background border border-border rounded-2xl p-6 hover:border-cta/50 transition-all duration-300 hover:shadow-xl hover:shadow-cta/20 hover:scale-[1.08] hover:z-20 relative">
                  <div className="hidden lg:block absolute -bottom-3 left-1/2 w-6 h-6 rounded-full bg-cta/20 border-2 border-cta" style={{ transform: 'translateX(-50%)' }} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center border-2 border-cta">
                      <span className="text-cta font-bold text-xs">'19-20</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cta uppercase tracking-wide">2019-2020</p>
                      <p className="text-lg font-semibold text-foreground">National Scale</p>
                    </div>
                  </div>
                  <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                    Expanded to national-scale SEO and reputation work.
                  </p>
                  <div className="pt-4 border-t border-border/50 space-y-3">
                    <div>
                      <p className="text-sm text-cta font-semibold">Mesa Moving (Grand Junction, CO)</p>
                      <p className="text-sm text-text-secondary">National moving company. SEO + reputation.</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Car Spa (11 locations)</p>
                      <p className="text-sm text-text-secondary">Multiple proximity-based rankings across the nation. Website rebuild. Page 1 for car wash keywords in every market.</p>
                    </div>
                  </div>
                </div>

                {/* 2019-2021 - Upwork */}
                <div className="group bg-accent-blue/5 border-2 border-accent-blue rounded-2xl p-6 hover:shadow-xl hover:shadow-accent-blue/30 hover:scale-[1.08] hover:z-20 transition-all duration-300 relative">
                  <div className="hidden lg:block absolute -bottom-3 left-1/2 w-6 h-6 rounded-full bg-accent-blue/30 border-2 border-accent-blue" style={{ transform: 'translateX(-50%)' }} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent-blue flex items-center justify-center animate-pulse" style={{ animationDuration: '3s' }}>
                      <span className="text-white font-bold text-xs">'19-21</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-accent-blue uppercase tracking-wide">2019-2021</p>
                      <p className="text-lg font-semibold text-accent-blue">Expert-Vetted Upwork</p>
                    </div>
                  </div>
                  <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                    Top 1% of all Upwork freelancers for paid advertising and SEO.
                  </p>
                  <div className="pt-4 border-t border-accent-blue/20 space-y-2">
                    <p className="text-sm text-foreground font-semibold">$2M+ in client revenue generated</p>
                    <p className="text-sm text-foreground font-semibold">$100K-$150K/mo paid ad campaigns</p>
                    <p className="text-sm text-text-secondary">SEO, Amazon PPC, Google Ads, Meta Ads, the works.</p>
                  </div>
                </div>

                {/* 2021-2022 */}
                <div className="group bg-background border border-border rounded-2xl p-6 hover:border-cta/50 transition-all duration-300 hover:shadow-xl hover:shadow-cta/20 hover:scale-[1.08] hover:z-20 relative">
                  <div className="hidden lg:block absolute -bottom-3 left-1/2 w-6 h-6 rounded-full bg-cta/20 border-2 border-cta" style={{ transform: 'translateX(-50%)' }} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center border-2 border-cta">
                      <span className="text-cta font-bold text-sm">'21</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cta uppercase tracking-wide">2021-Present</p>
                      <p className="text-lg font-semibold text-foreground">White-Label Pivot</p>
                    </div>
                  </div>
                  <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                    Pivoted to serving agencies. Managed several million dollars in paid advertising + SEO.
                  </p>
                  <div className="pt-4 border-t border-border/50 space-y-3">
                    <div>
                      <p className="text-sm text-cta font-semibold">Anderson Collaborative</p>
                      <p className="text-sm text-text-secondary">Millions in paid advertising managed. Multi-location franchises supported. National customized furniture websites. Still partners today.</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Tampa Bay Agency</p>
                      <p className="text-sm text-text-secondary">SMB clients: dog training, dental, digital marketing, tourism, photography, metabolic weight loss (national), heavy machinery lube skids, Kohler generators. Still partners today.</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">Cole's Agency (Dallas)</p>
                      <p className="text-sm text-text-secondary">7-year partnership. Theme parks, water parks, live music festivals, international e-commerce (tens of millions in annual sales), and billion-dollar energy companies.</p>
                    </div>
                    <div>
                      <p className="text-sm text-cta font-semibold">John Perieteanu / Amazon</p>
                      <p className="text-sm text-text-secondary">$150K/mo Amazon ads across 25 SKUs until successful exit</p>
                    </div>
                  </div>
                </div>

              {/* 2025 - The System */}
              <div className="group bg-cta/10 border-2 border-cta rounded-2xl p-6 hover:shadow-xl hover:shadow-cta/30 hover:scale-[1.08] hover:z-20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-3 right-3 bg-cta text-white text-xs font-bold px-2 py-1 rounded-full">
                  NOW
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-cta shadow-lg">
                    <img src={dougHeadshot} alt="Doug Bryson" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-cta uppercase tracking-wide">2025</p>
                    <p className="text-lg font-semibold text-cta">The System</p>
                  </div>
                </div>
                <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                  Everything learned, packaged into one inbound marketing operating system.
                </p>
                <div className="pt-4 border-t border-cta/20 grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground">14</p>
                    <p className="text-sm text-text-secondary">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground">100+</p>
                    <p className="text-sm text-text-secondary">Clients</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground">4.8★</p>
                    <p className="text-sm text-text-secondary">Google</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground">$M+</p>
                    <p className="text-sm text-text-secondary">Ad Spend</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Reviews from Real Clients */}
      <section id="reviews" className="py-20 lg:py-28 bg-background scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
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
            </Carousel>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section id="clients" className="py-16 lg:py-20 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
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
              <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
                The People Behind the Work
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Our Team
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                A delivery-first team built for execution, communication, and long-term client support.
              </p>
            </div>

            {/* Team Grid - Large Photos */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="group text-center"
                >
                  <div className="aspect-[4/5] mb-4 rounded-xl overflow-hidden bg-surface-dark border border-border group-hover:border-cta/30 transition-colors">
                    <img 
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h4 className="text-base lg:text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {member.role}
                  </p>
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
