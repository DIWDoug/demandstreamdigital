import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import TrustReel from "@/components/sections/TrustReel";
import ContactForm from "@/components/sections/ContactForm";
import { Star, Quote, Play } from "lucide-react";

const Testimonials = () => {
  const videoTestimonials = [
    {
      name: "Cole",
      title: "Digital Marketing Agency Owner",
      location: "Dallas, TX",
      thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
      videoUrl: "#",
      quote: "Doug's team has been instrumental in scaling our client results. The white-label reporting alone saves us 20+ hours per month.",
      services: ["Local SEO", "PPC", "Reputation Management"]
    },
    {
      name: "Sarah",
      title: "Agency Founder",
      location: "Austin, TX",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      videoUrl: "#",
      quote: "Finally found a fulfillment partner who understands the agency model. They make us look good to our clients.",
      services: ["GBP Optimization", "Citation Building", "Content"]
    },
    {
      name: "Marcus",
      title: "Marketing Agency Director",
      location: "Houston, TX",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
      videoUrl: "#",
      quote: "The communication and transparency is what sets them apart. No surprises, just results.",
      services: ["Technical SEO", "Link Building", "Schema"]
    }
  ];

  const writtenTestimonials = [
    {
      quote: "We've worked with Doug and his team for over 5 years now. They handle all of our local SEO fulfillment and the results speak for themselves. Our client retention has never been higher.",
      name: "Cole",
      title: "Digital Marketing Agency Owner",
      location: "Dallas, TX",
      tenure: "5+ Years Partner",
      services: ["Local SEO", "PPC", "AEO", "National SEO"],
      rating: 5
    },
    {
      quote: "What I appreciate most is how they adapt to each client's market. They're not just running a playbook—they're actually analyzing the competition and adjusting strategy accordingly.",
      name: "Jennifer",
      title: "Agency Owner",
      location: "Phoenix, AZ",
      tenure: "3 Years Partner",
      services: ["GBP SEO", "Paid Media", "Reputation"],
      rating: 5
    },
    {
      quote: "The white-label dashboards are a game changer. Our clients think we built them ourselves. It's elevated our entire brand perception.",
      name: "Trevor",
      title: "Digital Agency Founder",
      location: "Denver, CO",
      tenure: "2 Years Partner",
      services: ["Reporting", "Local SEO", "Authority Building"],
      rating: 5
    },
    {
      quote: "They've helped us scale from 15 to 45 clients without adding a single FTE to our team. The ROI on this partnership is insane.",
      name: "Michael",
      title: "Agency Principal",
      location: "San Antonio, TX",
      tenure: "4 Years Partner",
      services: ["Full-Service Fulfillment"],
      rating: 5
    },
    {
      quote: "I was skeptical about white-label at first, but the quality of work they deliver is indistinguishable from in-house. Actually, it's often better.",
      name: "Amanda",
      title: "Marketing Agency Owner",
      location: "Fort Worth, TX",
      tenure: "18 Months Partner",
      services: ["Email Marketing", "Local SEO", "Paid Media"],
      rating: 5
    },
    {
      quote: "The onboarding process was seamless. Within 30 days, they were fully ramped and delivering results that exceeded our previous vendor.",
      name: "David",
      title: "Agency Co-Founder",
      location: "Nashville, TN",
      tenure: "1 Year Partner",
      services: ["Technical SEO", "Content", "Link Building"],
      rating: 5
    }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Agency Partner Testimonials | Dialed-In Web</title>
        <meta name="description" content="See what agency owners say about partnering with Dialed-In Web for white-label SEO, local search, paid media, and digital marketing fulfillment." />
        <link rel="canonical" href="https://dialedinweb.com/testimonials" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cta/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-cta/10 border border-cta/20 rounded-full text-cta text-sm font-medium mb-6">
              Partner Success Stories
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Agencies That Trust Us to Deliver
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Real results from real agency partnerships. See why digital marketing agencies across the country choose us as their white-label fulfillment partner.
            </p>
          </div>
        </div>
      </section>

      <TrustReel />

      {/* Video Testimonials Section */}
      <section className="py-20 bg-surface-dark">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Hear From Our Partners
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Agency owners share their experience working with our team
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
              <div 
                key={index}
                className="group relative bg-background border border-border rounded-2xl overflow-hidden hover:border-cta/30 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-cta/90 flex items-center justify-center group-hover:bg-cta group-hover:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 text-cta-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-text-secondary mb-4 line-clamp-2">"{video.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cta/20 flex items-center justify-center">
                      <span className="text-cta font-semibold">{video.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{video.name}</p>
                      <p className="text-xs text-text-secondary">{video.title}, {video.location}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {video.services.map((service, i) => (
                      <span key={i} className="px-2 py-0.5 bg-cta/10 text-cta text-xs rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              What Agency Partners Say
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Long-term partnerships built on trust, transparency, and results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writtenTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-surface-dark border border-border rounded-2xl p-6 hover:border-cta/30 transition-all duration-300 flex flex-col"
              >
                <Quote className="w-8 h-8 text-cta/30 mb-4" />
                <p className="text-text-secondary leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-cta fill-cta" />
                  ))}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cta/20 flex items-center justify-center">
                    <span className="text-cta font-semibold text-lg">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-text-secondary">{testimonial.title}</p>
                    <p className="text-xs text-cta">{testimonial.tenure}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {testimonial.services.map((service, i) => (
                    <span key={i} className="px-2 py-0.5 bg-cta/10 text-cta text-xs rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface-dark border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Agency Partners" },
              { value: "500+", label: "Clients Served" },
              { value: "5+", label: "Avg. Years Partnership" },
              { value: "98%", label: "Partner Retention" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-4xl md:text-5xl text-cta mb-2">{stat.value}</p>
                <p className="text-text-secondary text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Testimonials;
