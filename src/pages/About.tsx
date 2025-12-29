import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";
import { Users, Eye, Shield, Handshake, Clock, Award, CheckCircle2 } from "lucide-react";

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
      image: dougHeadshot,
      featured: true
    },
    {
      name: "John Joseph Santos",
      role: "COO",
      image: null
    },
    {
      name: "Samanta Sanchezborja Leal",
      role: "Client Success Manager",
      image: null
    },
    {
      name: "Shera Lee Fabian",
      role: "Senior Project Manager",
      image: null
    },
    {
      name: "Ira Salvador",
      role: "Project Manager",
      image: null
    },
    {
      name: "Bianca Lapuz",
      role: "Executive Assistant",
      image: null
    },
    {
      name: "Richard Baylon",
      role: "Senior Content Strategist",
      image: null
    },
    {
      name: "Desiree Abbariao",
      role: "Content Strategist",
      image: null
    },
    {
      name: "Shane Suniga",
      role: "OnPage Specialist",
      image: null
    },
    {
      name: "Leilani Maravillas",
      role: "OnPage Specialist",
      image: null
    },
    {
      name: "James Brylle Belmes",
      role: "Citations Specialist",
      image: null
    },
    {
      name: "Martini Mabifa",
      role: "SEO Web Developer",
      image: null
    },
    {
      name: "Aria Jazzmine Ong",
      role: "SEO Support",
      image: null
    },
    {
      name: "Bel Aniano",
      role: "Marketing Coordinator",
      image: null
    },
    {
      name: "Lanilyn Erauda",
      role: "SOP Specialist",
      image: null
    }
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
              Since 2011, we've helped agencies deliver results they can stand behind. 
              No cookie-cutter packages. No crossed fingers. Just work that's scoped 
              to each client's actual market.
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

            {/* Featured Team Member - Doug */}
            <div className="mb-12">
              <div className="bg-background border border-border rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-40 h-40 lg:w-48 lg:h-48 flex-shrink-0">
                  <img 
                    src={dougHeadshot}
                    alt="Doug Bryson, CEO & Founder"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cta rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-cta-foreground" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-1">
                    Doug Bryson
                  </h3>
                  <p className="text-cta font-medium mb-4">CEO & Founder</p>
                  <p className="font-serif text-text-secondary leading-relaxed max-w-xl">
                    Running agencies since 2011. A practitioner who learned the work by doing it, 
                    not just managing it. Built Dialed-In Web to offer the fulfillment partner 
                    he wished he had when outsourcing was a coin flip.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {teamMembers.filter(m => !m.featured).map((member, index) => (
                <div 
                  key={index}
                  className="bg-background border border-border rounded-xl p-4 lg:p-5 text-center hover:border-cta/30 transition-colors"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-dark flex items-center justify-center">
                    <Users className="w-6 h-6 text-text-secondary" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1 line-clamp-1">
                    {member.name}
                  </h4>
                  <p className="text-xs text-text-secondary line-clamp-2">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactForm />
      
      <Footer />
    </>
  );
};

export default About;
