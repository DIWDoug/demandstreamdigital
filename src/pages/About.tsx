import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhyPartnerWithUs from "@/components/sections/WhyPartnerWithUs";
import Testimonials from "@/components/sections/Testimonials";
import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";
import wyler from "@/assets/wyler.jpg";
import clientLogosBanner from "@/assets/client-logos-banner.png";
import { Eye, Shield, Handshake, Clock, Award, CheckCircle2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We do what we say we're going to do. Our own reputation reflects the standards we hold for our clients."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Full reports on every activity. Strategies agreed upon in advance. No surprises, no hidden work."
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "This works best as a mutual investment. We're not order-takers. We're invested in your outcomes."
    },
    {
      icon: Clock,
      title: "Consistency",
      description: "Low turnover, familiar faces. You'll know who you're working with, and they'll know your business."
    },
    {
      icon: CheckCircle2,
      title: "Ethical Practices",
      description: "White-hat only. Every tactic aligns with Google's quality guidelines. Sustainable results, not shortcuts."
    },
    {
      icon: Award,
      title: "Competency",
      description: "Delivered by experienced practitioners who invest in continuous learning. Not rented headcount."
    }
  ];

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
      name: "Mohammed Bilal",
      role: "Web Developer",
      image: "https://dialedinweb.com/wp-content/uploads/2025/11/Dental-Team-4.webp"
    }
  ];

  // Pyramid layout: 1, 2, 3, 4, 5 = 15 members
  const pyramidRows = [
    teamMembers.slice(0, 1),   // Row 1: 1 (Doug)
    teamMembers.slice(1, 3),   // Row 2: 2 (JJ, Wyler)
    teamMembers.slice(3, 6),   // Row 3: 3 (Shera, Ira, Samanta)
    teamMembers.slice(6, 10),  // Row 4: 4 (Lanilyn, Martini, Richard, Desiree)
    teamMembers.slice(10, 15), // Row 5: 5 (Leilani, James, Bel, Bianca, Mohammed)
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Dialed-In Web - White-Label Digital Marketing</title>
        <meta 
          name="description" 
          content="Meet the team behind Dialed-In Web. Built by marketers, for marketers. Learn about our mission, vision, and values driving agency success." 
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden bg-background">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cta/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
              About Dialed-In Web
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Built by a Marketer, <br className="hidden md:block" />
              <span className="text-accent-blue">For Marketers</span>
            </h1>
            <p className="font-serif text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Since 2011, we've helped agencies and small-to-medium businesses 
              deliver full inbound marketing results: SEO, paid advertising, 
              conversion rate optimization, email marketing, and more. 
              All working together as one system.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 relative bg-surface-dark">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Mission */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-cta/10 rounded-full blur-2xl" />
                <div className="relative bg-surface-dark border border-border rounded-2xl p-8 lg:p-10">
                  <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
                    Our Mission
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-6">
                    Fulfillment That Keeps Clients
                  </h2>
                  <p className="font-serif text-text-secondary leading-relaxed">
                    We exist to help agencies deliver white-label digital marketing 
                    that actually works. Sustainable strategies, scoped to each client's 
                    industry and local market. Work you can explain without flinching. 
                    Results that protect your margins and your reputation.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-blue/10 rounded-full blur-2xl" />
                <div className="relative bg-surface-dark border border-border rounded-2xl p-8 lg:p-10">
                  <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
                    Our Vision
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-6">
                    Partners, Not Vendors
                  </h2>
                  <p className="font-serif text-text-secondary leading-relaxed">
                    We believe agencies deserve fulfillment partners they can trust. 
                    By taking execution off your plate through a mutually invested 
                    partnership, you can focus on what you do best: growing your 
                    agency and delighting your clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 relative bg-background">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
                What We Stand For
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                Our Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-surface-dark border border-border rounded-xl p-6 lg:p-8 hover:border-cta/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-cta" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-serif text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 relative bg-surface-dark">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
                The People Behind the Work
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                Our Team
              </h2>
            </div>

            {/* Team Pyramid */}
            <div className="flex flex-col items-center gap-4 lg:gap-6">
              {pyramidRows.map((row, rowIndex) => (
                <div 
                  key={rowIndex}
                  className="flex flex-wrap justify-center gap-4 lg:gap-6"
                >
                  {row.map((member, index) => (
                    <div 
                      key={index}
                      className="bg-background border border-border rounded-xl p-4 lg:p-5 text-center hover:border-cta/30 transition-colors w-40 lg:w-48"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                        <img 
                          src={member.image}
                          alt={`${member.name}, ${member.role}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">
                        {member.name}
                      </h4>
                      <p className="text-xs text-text-secondary">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* From Those Who Know Us Best - Client Logos */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
                From Those Who Know Us Best
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Clients We've Served Over the Years
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-8 lg:p-12">
              <img 
                src={clientLogosBanner} 
                alt="Client logos including Cherry Blow Dry Bar, Armor Roofing, Wash N Roll, Angel Maids, and more"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The True Timeline - Road Map */}
      <section className="py-16 lg:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
                The True Timeline
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                From Nashville Songwriter to Full-Service Agency
              </h2>
              <p className="font-serif text-text-secondary max-w-2xl mx-auto">
                Experience equals wisdom. Make enough mistakes and you get to call it history.
              </p>
            </div>
            
            {/* Timeline Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* 2011 */}
              <div className="group bg-surface-dark border border-border rounded-2xl p-6 hover:border-cta/50 transition-all duration-300 hover:shadow-lg hover:shadow-cta/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center border-2 border-cta">
                    <span className="text-cta font-bold text-sm">'11</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-cta uppercase tracking-wide">March 2011</p>
                    <p className="text-lg font-semibold text-foreground">The Beginning</p>
                  </div>
                </div>
                <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                  Nashville songwriter turned digital marketer. Tower Records closed. Publishing deal ended. A new road opened.
                </p>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-cta font-semibold mb-1">Angel Maids</p>
                  <p className="text-xs text-text-secondary">15→75+ cleanings/week. Page 1 for 20+ keywords. Most recognized Nashville house cleaner by 2013.</p>
                </div>
              </div>

              {/* 2013-2015 */}
              <div className="group bg-surface-dark border border-border rounded-2xl p-6 hover:border-cta/50 transition-all duration-300 hover:shadow-lg hover:shadow-cta/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center border-2 border-cta">
                    <span className="text-cta font-bold text-sm">'13</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-cta uppercase tracking-wide">2013-2015</p>
                    <p className="text-lg font-semibold text-foreground">Dialed-In Local</p>
                  </div>
                </div>
                <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                  Found the local SEO niche. Built reputation in Nashville. Started ranking businesses across multiple industries.
                </p>
                <div className="pt-3 border-t border-border/50 space-y-2">
                  <div>
                    <p className="text-xs text-cta font-semibold">Sonya Smithson DDS</p>
                    <p className="text-xs text-text-secondary">Page 1: "Brentwood Dentist," "Brentwood Sedation Dentist," "Brentwood Family Dentistry"</p>
                  </div>
                  <div>
                    <p className="text-xs text-cta font-semibold">HandyPro + Veteran's Auto</p>
                    <p className="text-xs text-text-secondary">Page 1: "Nashville Handyman," "Nashville Auto Service"</p>
                  </div>
                  <div>
                    <p className="text-xs text-cta font-semibold">Joseph Dillon / Equitable Mediation</p>
                    <p className="text-xs text-text-secondary">Page 1: "Chicago Divorce Mediation"</p>
                  </div>
                  <div>
                    <p className="text-xs text-cta font-semibold">Love & Pho</p>
                    <p className="text-xs text-text-secondary">Online reputation + rankings for Nashville pho keywords</p>
                  </div>
                  <p className="text-xs text-text-secondary italic">+ Pharo Pediatric, Darfan's Restaurants, G7 Marketing</p>
                </div>
              </div>

              {/* 2015 - Agency Side */}
              <div className="group bg-surface-dark border border-border rounded-2xl p-6 hover:border-accent-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center border-2 border-accent-blue">
                    <span className="text-accent-blue font-bold text-sm">'15</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-accent-blue uppercase tracking-wide">2015</p>
                    <p className="text-lg font-semibold text-foreground">Agency Side</p>
                  </div>
                </div>
                <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                  Worked inside agencies to understand operations from the other side.
                </p>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-accent-blue font-semibold mb-1">Horton Group (Nashville)</p>
                  <p className="text-xs text-accent-blue font-semibold mb-1">More Cabbage (Dallas)</p>
                  <p className="text-xs text-text-secondary">Enterprise clients. Agency workflows. Team dynamics.</p>
                </div>
              </div>

              {/* 2017 */}
              <div className="group bg-surface-dark border border-border rounded-2xl p-6 hover:border-cta/50 transition-all duration-300 hover:shadow-lg hover:shadow-cta/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center border-2 border-cta">
                    <span className="text-cta font-bold text-sm">'17</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-cta uppercase tracking-wide">2017</p>
                    <p className="text-lg font-semibold text-foreground">Dialed-In Web</p>
                  </div>
                </div>
                <p className="font-serif text-text-secondary text-sm leading-relaxed">
                  Full-service agency. Built the team. Expanded beyond local SEO into web development, paid media, and comprehensive digital marketing.
                </p>
              </div>

              {/* 2019 - iProspect */}
              <div className="group bg-surface-dark border border-border rounded-2xl p-6 hover:border-accent-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center border-2 border-accent-blue">
                    <span className="text-accent-blue font-bold text-sm">'19</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-accent-blue uppercase tracking-wide">2019</p>
                    <p className="text-lg font-semibold text-foreground">iProspect</p>
                  </div>
                </div>
                <p className="font-serif text-text-secondary text-sm leading-relaxed">
                  6 months at a major global agency. Enterprise-level paid media campaigns. Fortune 500 processes.
                </p>
              </div>

              {/* 2019-2021 - Upwork */}
              <div className="group bg-accent-blue/5 border-2 border-accent-blue rounded-2xl p-6 hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-300">
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
                <div className="pt-3 border-t border-accent-blue/20 space-y-1">
                  <p className="text-sm text-foreground font-semibold">$2M+ in client revenue generated</p>
                  <p className="text-sm text-foreground font-semibold">$100K-$150K/mo paid ad campaigns</p>
                  <p className="text-xs text-text-secondary">SEO, Amazon PPC, Google Ads, Meta Ads, the works.</p>
                </div>
              </div>

              {/* 2020 - Coaching */}
              <div className="group bg-surface-dark border border-border rounded-2xl p-6 hover:border-cta/50 transition-all duration-300 hover:shadow-lg hover:shadow-cta/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center border-2 border-cta">
                    <span className="text-cta font-bold text-sm">'20</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-cta uppercase tracking-wide">2020</p>
                    <p className="text-lg font-semibold text-foreground">Coaching World</p>
                  </div>
                </div>
                <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                  High-ticket funnel builds and online course launches.
                </p>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-text-secondary">Kevin Hutto, Kevin Nations, Shanda Sumpter, Talking More</p>
                </div>
              </div>

              {/* 2021-2022 */}
              <div className="group bg-surface-dark border border-border rounded-2xl p-6 hover:border-cta/50 transition-all duration-300 hover:shadow-lg hover:shadow-cta/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center border-2 border-cta">
                    <span className="text-cta font-bold text-sm">'21</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-cta uppercase tracking-wide">2021-2022</p>
                    <p className="text-lg font-semibold text-foreground">White-Label Pivot</p>
                  </div>
                </div>
                <p className="font-serif text-text-secondary text-sm leading-relaxed mb-3">
                  Pivoted to serving agencies while maintaining select direct relationships.
                </p>
                <div className="pt-3 border-t border-border/50 space-y-2">
                  <div>
                    <p className="text-xs text-cta font-semibold">John Perieteanu / Amazon</p>
                    <p className="text-xs text-text-secondary">$150K/mo Amazon ads across 25 SKUs until successful exit</p>
                  </div>
                  <div>
                    <p className="text-xs text-cta font-semibold">ASAP Apartment Finders</p>
                    <p className="text-xs text-text-secondary">Still page 1 for Dallas apartment locator keywords today</p>
                  </div>
                </div>
              </div>

              {/* 2025 - The System */}
              <div className="group bg-cta/10 border-2 border-cta rounded-2xl p-6 hover:shadow-lg hover:shadow-cta/20 transition-all duration-300 relative overflow-hidden">
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
                <div className="pt-3 border-t border-cta/20 grid grid-cols-2 gap-2">
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">14</p>
                    <p className="text-xs text-text-secondary">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">100+</p>
                    <p className="text-xs text-text-secondary">Clients</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">4.8★</p>
                    <p className="text-xs text-text-secondary">Google</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">$M+</p>
                    <p className="text-xs text-text-secondary">Ad Spend</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Reviews from Real Clients */}
      <section className="py-20 lg:py-28 bg-surface-dark">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
                What Clients Say
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                Real Reviews <span className="text-cta">from Real Clients</span>
              </h2>
              <p className="font-serif text-text-secondary mt-4 max-w-2xl mx-auto">
                These reviews span 12+ years across different company names. We've kept them all for transparency.
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  {
                    quote: "I don't write many reviews but after having a great experience with Dialed-In, I had to let everyone know! Doug helped us create our website and was with us every step of the way. This was the first time I had built a website and didn't know what to expect or even where to begin, but Doug answered all of our questions and made the process so easy. Doug has proven he has great business ethics and is always professional. I highly recommend this business for anyone looking to enhance their online presence, website, or increase business. Thanks again for the amazing work on our website!",
                    name: "David Dorn",
                    date: "2018",
                    rating: 5
                  },
                  {
                    quote: "Doug is incredible to work with. I was blown away at how quickly he caught onto what I was hoping to build. Without much direction he had setup campaigns pulling artwork and copy without even having to tell him what to do. Streamlined my process and generated successful campaigns. Would hire again in a heartbeat and will refer him to others.",
                    name: "Brian Sperry",
                    date: "2020",
                    rating: 5
                  },
                  {
                    quote: "Dialedin Local has done an exceptional job with our SEO management. We have seen consistent improvements and sales growth since working with Doug. I highly recommend them!",
                    name: "Curtis Feather",
                    date: "2016",
                    rating: 5
                  },
                  {
                    quote: "The Dialed-In Web team have always been professional and knowledgable in their industry. I had a great experience working with them, and would highly recommend this business to grow your online presence.",
                    name: "Cynthia Cavoto",
                    date: "2019",
                    rating: 5
                  },
                  {
                    quote: "I was looking for an SEO firm that could help me optimize my local listings and improve our rankings for certain location specific keywords without breaking the bank. Doug and the team at Dialed-In did just that. As a small business owner, I simply don't have $10,000 a month to retain a firm unless I don't want to pay my mortgage. Doug and his team did excellent work for a reasonable price and in many cases, went above and beyond what they promised. Dialed-In Web is your firm.",
                    name: "Joseph Dillon",
                    date: "2017",
                    rating: 5
                  },
                  {
                    quote: "We at Veterans Auto Services have really appreciated Dialed-In. Doug Bryson was great to work with. He closely monitored our companies reviews and was always quick to act with ideas and would implement them to make sure that our company was in full view the public. Thank you Doug and Dialed-In for all that you do. You have brought success to our door and we thank you. I highly recommend their services.",
                    name: "Wendy Burns",
                    date: "2015",
                    rating: 5
                  },
                  {
                    quote: "We run a national car wash company with multiple units. After looking at different companies to help us with our SEO efforts, we ultimately decided to try Dialed-In Local. From the first time we met with Doug we felt confident in his ability to help us. He has proven that he has the technical skills and know how but has proven he genuinely cares about seeing his clients succeed. Highly recommend.",
                    name: "Car Spa",
                    date: "2014",
                    rating: 5
                  },
                  {
                    quote: "I would highly recommend Doug at Dialed in Local to any business looking to grow with SEO. Doug is a great business partner and an excellent communicator. My rankings have shown tremendous growth in a very short period of time. Highly recommended!",
                    name: "ASAP Apartment Finders",
                    date: "2016",
                    rating: 5
                  },
                  {
                    quote: "I've worked with Doug for several years now as a consultant. Although I'm not a client, we've worked very closely together on several projects. I've had the opportunity to see how he works from the inside of his business and would recommend him to anyone who wants to build their business through online marketing. Doug lives his values in every way, and strives to put his client's success above everything else. He's an extremely dedicated partner with his clients and works hard to help them achieve their goals. But the best thing about working with Dialed-In is Doug himself. He's a savvy businessman with a big heart who knows how to talk to his clients about the complicated world of SEO and inbound digital marketing in words us normal folks can understand. Doug gets the job done, and has a huge team of professionals he can call on to make sure his clients are happy and successful. I'd recommend him without hesitation!",
                    name: "Rebecca Macfarlane",
                    date: "2017",
                    rating: 5
                  },
                  {
                    quote: "I have worked with Doug and the Dialed-In Local team for many years in a variety of capacities. Doug is incredibly talented at what he does. He has a great business mind and is adept at understanding the unique needs, goals and visions of his clients.",
                    name: "Rebecca Daneault",
                    date: "2015",
                    rating: 5
                  },
                  {
                    quote: "I've worked with Doug and Dialed-In Local for several years now and am always impressed with their broad technical knowledge of the constantly changing landscape of online marketing. Not only do they understand it, they take the time to explain it in terms that make sense.",
                    name: "Chris Farr",
                    date: "2016",
                    rating: 5
                  },
                  {
                    quote: "Doug does a great job providing customized and well-managed services for clients. He was able to appropriately size his SEO and design services to what I wanted. I can be pretty particular sometimes and Doug helped me right-size what I needed.",
                    name: "Daxon Edwards",
                    date: "2018",
                    rating: 5
                  },
                  {
                    quote: "Dialed-In Local is definitely where I go for all things web. Doug's understanding of the web market has been a huge resource for my web presence in Nashville. Being an IT Company by trait we tend to learn technology based systems quickly, and Doug keeps up with the best of them.",
                    name: "Tommy Wolosin",
                    date: "2014",
                    rating: 5
                  },
                  {
                    quote: "After wasting a lot of time and money with other marketing companies, I was pretty burned out and was starting to feel like it was all a scam. I was beginning to think the only real priority for these companies was taking my money. Then I found Dialed-In and everything changed.",
                    name: "Jack Haynes",
                    date: "2019",
                    rating: 5
                  },
                  {
                    quote: "Doug has done an awesome job getting our sales up for our e-commerce store. In fact, we are seeing a 10x return based on the work he has done. Highly recommend using this company.",
                    name: "Free Sunshields",
                    date: "2020",
                    rating: 5
                  },
                  {
                    quote: "Doug and his team have been great to work with. His monthly reporting really lets me see what his team is doing on a monthly basis. The results have been great. I really enjoy working with such a professional company! Keep up the good work!",
                    name: "East Coast Window Films",
                    date: "2021",
                    rating: 5
                  },
                  {
                    quote: "Doug is very professional, organized and knowledgable. He always goes above and beyond. You will not only get an SEO manager but you'll get a partnership. I would give them six stars if there was an option.",
                    name: "Advanced Apartment Locators",
                    date: "2022",
                    rating: 5
                  },
                  {
                    quote: "This is an unethical spam-shop. If you want your business advertised in the same way as Hot Teen Webcam Girls, mail-order Viagra, and knockoff designer handbags, these are the folks who can give you a black eye all over the Internet.",
                    name: "James D. Macdonald",
                    date: "2013",
                    rating: 1
                  }
                ].map((review, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2">
                    <div className="bg-background border border-border rounded-2xl p-6 lg:p-8 h-full">
                      <p className="font-serif text-text-secondary leading-relaxed mb-6">
                        "{review.quote}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`font-semibold mb-1 ${review.rating === 1 ? 'text-text-secondary' : 'text-cta'}`}>{review.name}</p>
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <svg key={i} className={`w-4 h-4 fill-current ${review.rating === 1 ? 'text-text-secondary' : 'text-yellow-400'}`} viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <span className={`text-xs ${review.rating === 1 ? 'text-text-secondary/60' : 'text-text-secondary'}`}>{review.date}</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0 bg-background border-border hover:bg-cta/10 hover:border-cta/30" />
                <CarouselNext className="static translate-y-0 bg-background border-border hover:bg-cta/10 hover:border-cta/30" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <WhoWeAre />

      {/* What Actually Changes When Fulfillment Works */}
      <WhyPartnerWithUs />

      {/* What Agency Partners Say */}
      <Testimonials />

      {/* Contact CTA */}
      <ContactForm />
      
      <Footer />
    </>
  );
};

export default About;
