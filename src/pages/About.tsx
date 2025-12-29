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
                14 Years on the Road
              </h2>
              <p className="font-serif text-text-secondary max-w-2xl mx-auto">
                Every detour taught something. Every pivot led somewhere better.
              </p>
            </div>
            
            {/* Road Map SVG */}
            <div className="relative">
              <svg 
                viewBox="0 0 1000 700" 
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Road Background/Shadow */}
                <path
                  d="M 80 80 
                     C 250 80, 300 180, 500 180 
                     C 700 180, 750 80, 920 120
                     C 980 140, 980 280, 920 320
                     C 750 400, 550 350, 400 400
                     C 250 450, 200 380, 80 420
                     C 20 440, 20 560, 80 580
                     C 200 620, 400 600, 600 620"
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="60"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-20"
                />
                
                {/* Main Road */}
                <path
                  d="M 80 80 
                     C 250 80, 300 180, 500 180 
                     C 700 180, 750 80, 920 120
                     C 980 140, 980 280, 920 320
                     C 750 400, 550 350, 400 400
                     C 250 450, 200 380, 80 420
                     C 20 440, 20 560, 80 580
                     C 200 620, 400 600, 600 620"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Road Center Dashes */}
                <path
                  d="M 80 80 
                     C 250 80, 300 180, 500 180 
                     C 700 180, 750 80, 920 120
                     C 980 140, 980 280, 920 320
                     C 750 400, 550 350, 400 400
                     C 250 450, 200 380, 80 420
                     C 20 440, 20 560, 80 580
                     C 200 620, 400 600, 600 620"
                  fill="none"
                  stroke="hsl(var(--cta))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="20 12"
                  className="opacity-70"
                />
                
                {/* Stop 1: 2011 */}
                <g>
                  <circle cx="80" cy="80" r="26" fill="hsl(var(--surface-dark))" stroke="hsl(var(--cta))" strokeWidth="4" />
                  <text x="80" y="86" textAnchor="middle" className="fill-cta font-bold" style={{ fontSize: '14px' }}>'11</text>
                </g>
                <foreignObject x="0" y="110" width="160" height="70">
                  <div className="text-center px-2">
                    <p className="text-sm font-semibold text-foreground leading-tight">Dialed-In Marketing Solutions</p>
                    <p className="text-xs text-text-secondary font-serif mt-1">The beginning. Learning the ropes.</p>
                  </div>
                </foreignObject>
                
                {/* Stop 2: 2013 */}
                <g>
                  <circle cx="500" cy="180" r="26" fill="hsl(var(--surface-dark))" stroke="hsl(var(--cta))" strokeWidth="4" />
                  <text x="500" y="186" textAnchor="middle" className="fill-cta font-bold" style={{ fontSize: '14px' }}>'13</text>
                </g>
                <foreignObject x="420" y="210" width="160" height="70">
                  <div className="text-center px-2">
                    <p className="text-sm font-semibold text-foreground leading-tight">Dialed-In Local</p>
                    <p className="text-xs text-text-secondary font-serif mt-1">Found the local SEO niche.</p>
                  </div>
                </foreignObject>
                
                {/* Stop 3: 2017 */}
                <g>
                  <circle cx="920" cy="120" r="26" fill="hsl(var(--surface-dark))" stroke="hsl(var(--cta))" strokeWidth="4" />
                  <text x="920" y="126" textAnchor="middle" className="fill-cta font-bold" style={{ fontSize: '14px' }}>'17</text>
                </g>
                <foreignObject x="820" y="150" width="160" height="70">
                  <div className="text-center px-2">
                    <p className="text-sm font-semibold text-foreground leading-tight">Dialed-In Web</p>
                    <p className="text-xs text-text-secondary font-serif mt-1">Full-service. Built the team.</p>
                  </div>
                </foreignObject>
                
                {/* Stop 4: 2019-21 - Upwork (highlighted) */}
                <g>
                  <circle cx="920" cy="320" r="30" fill="hsl(var(--accent-blue))" className="animate-pulse" style={{ animationDuration: '3s' }} />
                  <circle cx="920" cy="320" r="22" fill="hsl(var(--surface-dark))" />
                  <text x="920" y="326" textAnchor="middle" className="fill-accent-blue font-bold" style={{ fontSize: '12px' }}>'19-21</text>
                </g>
                <foreignObject x="760" y="250" width="150" height="60">
                  <div className="text-right px-2">
                    <p className="text-sm font-semibold text-accent-blue leading-tight">Upwork Expert</p>
                    <p className="text-xs text-text-secondary font-serif mt-1">$100K+ campaigns managed</p>
                  </div>
                </foreignObject>
                
                {/* Stop 5: 2021 */}
                <g>
                  <circle cx="80" cy="420" r="26" fill="hsl(var(--surface-dark))" stroke="hsl(var(--cta))" strokeWidth="4" />
                  <text x="80" y="426" textAnchor="middle" className="fill-cta font-bold" style={{ fontSize: '14px' }}>'21</text>
                </g>
                <foreignObject x="0" y="450" width="160" height="80">
                  <div className="text-center px-2">
                    <p className="text-sm font-semibold text-foreground leading-tight">White-Label Focus</p>
                    <p className="text-xs text-text-secondary font-serif mt-1">Pivoted to agencies. Kept select directs.</p>
                  </div>
                </foreignObject>
                
                {/* Stop 6: 2025 - Destination */}
                <g>
                  <circle cx="600" cy="620" r="34" fill="hsl(var(--cta))" className="drop-shadow-lg" />
                  <circle cx="600" cy="620" r="24" fill="hsl(var(--surface-dark))" />
                  <text x="600" y="626" textAnchor="middle" className="fill-cta font-bold" style={{ fontSize: '14px' }}>'25</text>
                </g>
                <foreignObject x="660" y="580" width="200" height="80">
                  <div className="text-left px-2">
                    <p className="text-sm font-semibold text-cta leading-tight">The System</p>
                    <p className="text-xs text-text-secondary font-serif mt-1">Full inbound marketing operating system. Everything learned, packaged.</p>
                  </div>
                </foreignObject>
                
                {/* Doug Avatar on the road */}
                <g>
                  <circle cx="400" cy="400" r="28" fill="hsl(var(--background))" stroke="hsl(var(--accent-blue))" strokeWidth="4" className="drop-shadow-lg" />
                  <defs>
                    <clipPath id="dougRoadAvatar">
                      <circle cx="400" cy="400" r="24" />
                    </clipPath>
                  </defs>
                  <image 
                    href={dougHeadshot} 
                    x="376" 
                    y="376" 
                    width="48" 
                    height="48" 
                    clipPath="url(#dougRoadAvatar)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>
                
                {/* Direction arrows */}
                <polygon points="260,120 275,130 260,140" fill="hsl(var(--cta))" className="opacity-50" />
                <polygon points="700,155 715,165 700,175" fill="hsl(var(--cta))" className="opacity-50" />
                <polygon points="970,220 980,235 960,235" fill="hsl(var(--cta))" className="opacity-50" />
                <polygon points="600,380 585,370 585,390" fill="hsl(var(--cta))" className="opacity-50" />
                <polygon points="200,440 185,430 185,450" fill="hsl(var(--cta))" className="opacity-50" />
                <polygon points="40,500 50,515 30,515" fill="hsl(var(--cta))" className="opacity-50" />
                <polygon points="350,610 365,600 365,620" fill="hsl(var(--cta))" className="opacity-50" />
                
                {/* "You are here" label near Doug */}
                <foreignObject x="430" y="380" width="100" height="40">
                  <div className="bg-accent-blue/90 text-white text-xs font-semibold px-2 py-1 rounded-full text-center whitespace-nowrap">
                    On the road
                  </div>
                </foreignObject>
              </svg>
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
                    rating: 5
                  },
                  {
                    quote: "Doug is incredible to work with. I was blown away at how quickly he caught onto what I was hoping to build. Without much direction he had setup campaigns pulling artwork and copy without even having to tell him what to do. Streamlined my process and generated successful campaigns. Would hire again in a heartbeat and will refer him to others.",
                    name: "Brian Sperry",
                    rating: 5
                  },
                  {
                    quote: "Dialedin Local has done an exceptional job with our SEO management. We have seen consistent improvements and sales growth since working with Doug. I highly recommend them!",
                    name: "Curtis Feather",
                    rating: 5
                  },
                  {
                    quote: "The Dialed-In Web team have always been professional and knowledgable in their industry. I had a great experience working with them, and would highly recommend this business to grow your online presence.",
                    name: "Cynthia Cavoto",
                    rating: 5
                  },
                  {
                    quote: "I was looking for an SEO firm that could help me optimize my local listings and improve our rankings for certain location specific keywords without breaking the bank. Doug and the team at Dialed-In did just that. As a small business owner, I simply don't have $10,000 a month to retain a firm unless I don't want to pay my mortgage. Doug and his team did excellent work for a reasonable price and in many cases, went above and beyond what they promised. Dialed-In Web is your firm.",
                    name: "Joseph Dillon",
                    rating: 5
                  },
                  {
                    quote: "We at Veterans Auto Services have really appreciated Dialed-In. Doug Bryson was great to work with. He closely monitored our companies reviews and was always quick to act with ideas and would implement them to make sure that our company was in full view the public. Thank you Doug and Dialed-In for all that you do. You have brought success to our door and we thank you. I highly recommend their services.",
                    name: "Wendy Burns",
                    rating: 5
                  },
                  {
                    quote: "We run a national car wash company with multiple units. After looking at different companies to help us with our SEO efforts, we ultimately decided to try Dialed-In Local. From the first time we met with Doug we felt confident in his ability to help us. He has proven that he has the technical skills and know how but has proven he genuinely cares about seeing his clients succeed. Highly recommend.",
                    name: "Car Spa",
                    rating: 5
                  },
                  {
                    quote: "I would highly recommend Doug at Dialed in Local to any business looking to grow with SEO. Doug is a great business partner and an excellent communicator. My rankings have shown tremendous growth in a very short period of time. Highly recommended!",
                    name: "ASAP Apartment Finders",
                    rating: 5
                  },
                  {
                    quote: "I've worked with Doug for several years now as a consultant. Although I'm not a client, we've worked very closely together on several projects. I've had the opportunity to see how he works from the inside of his business and would recommend him to anyone who wants to build their business through online marketing. Doug lives his values in every way, and strives to put his client's success above everything else. He's an extremely dedicated partner with his clients and works hard to help them achieve their goals. But the best thing about working with Dialed-In is Doug himself. He's a savvy businessman with a big heart who knows how to talk to his clients about the complicated world of SEO and inbound digital marketing in words us normal folks can understand. Doug gets the job done, and has a huge team of professionals he can call on to make sure his clients are happy and successful. I'd recommend him without hesitation!",
                    name: "Rebecca Macfarlane",
                    rating: 5
                  },
                  {
                    quote: "I have worked with Doug and the Dialed-In Local team for many years in a variety of capacities. Doug is incredibly talented at what he does. He has a great business mind and is adept at understanding the unique needs, goals and visions of his clients.",
                    name: "Rebecca Daneault",
                    rating: 5
                  },
                  {
                    quote: "I've worked with Doug and Dialed-In Local for several years now and am always impressed with their broad technical knowledge of the constantly changing landscape of online marketing. Not only do they understand it, they take the time to explain it in terms that make sense.",
                    name: "Chris Farr",
                    rating: 5
                  },
                  {
                    quote: "Doug does a great job providing customized and well-managed services for clients. He was able to appropriately size his SEO and design services to what I wanted. I can be pretty particular sometimes and Doug helped me right-size what I needed.",
                    name: "Daxon Edwards",
                    rating: 5
                  },
                  {
                    quote: "Dialed-In Local is definitely where I go for all things web. Doug's understanding of the web market has been a huge resource for my web presence in Nashville. Being an IT Company by trait we tend to learn technology based systems quickly, and Doug keeps up with the best of them.",
                    name: "Tommy Wolosin",
                    rating: 5
                  },
                  {
                    quote: "After wasting a lot of time and money with other marketing companies, I was pretty burned out and was starting to feel like it was all a scam. I was beginning to think the only real priority for these companies was taking my money. Then I found Dialed-In and everything changed.",
                    name: "Jack Haynes",
                    rating: 5
                  },
                  {
                    quote: "Doug has done an awesome job getting our sales up for our e-commerce store. In fact, we are seeing a 10x return based on the work he has done. Highly recommend using this company.",
                    name: "Free Sunshields",
                    rating: 5
                  },
                  {
                    quote: "Doug and his team have been great to work with. His monthly reporting really lets me see what his team is doing on a monthly basis. The results have been great. I really enjoy working with such a professional company! Keep up the good work!",
                    name: "East Coast Window Films",
                    rating: 5
                  },
                  {
                    quote: "Doug is very professional, organized and knowledgable. He always goes above and beyond. You will not only get an SEO manager but you'll get a partnership. I would give them six stars if there was an option.",
                    name: "Advanced Apartment Locators",
                    rating: 5
                  },
                  {
                    quote: "This is an unethical spam-shop. If you want your business advertised in the same way as Hot Teen Webcam Girls, mail-order Viagra, and knockoff designer handbags, these are the folks who can give you a black eye all over the Internet.",
                    name: "James D. Macdonald",
                    rating: 1
                  }
                ].map((review, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2">
                    <div className="bg-background border border-border rounded-2xl p-6 lg:p-8 h-full">
                      <p className="font-serif text-text-secondary leading-relaxed mb-6">
                        "{review.quote}"
                      </p>
                      <div>
                        <p className={`font-semibold mb-2 ${review.rating === 1 ? 'text-text-secondary' : 'text-cta'}`}>{review.name}</p>
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className={`w-5 h-5 fill-current ${review.rating === 1 ? 'text-text-secondary' : 'text-yellow-400'}`} viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
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
