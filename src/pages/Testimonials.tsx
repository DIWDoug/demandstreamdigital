import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import { Star, Quote, Building2, Users } from "lucide-react";
import { getTestimonialsPageSchema, getOrganizationSchema, BUSINESS_INFO } from "@/lib/schema";

const Testimonials = () => {
  // Agency partner testimonials (Cole, Trevor, Jeremy)
  const agencyTestimonials = [
    {
      quote: "I've owned an ad agency in Dallas for a decade and partnered with Doug's team for seven years. They're second to none: incredibly articulate when it comes to campaign structure, from paid advertising to organic SEO to answer engine optimization. Extremely competitive pricing for the level of wisdom and responsiveness you receive. They will make your company money.",
      name: "Cole",
      title: "Digital Marketing Agency Owner",
      location: "Dallas, TX",
      tenure: "10 Years in Business, 7 Years Partner",
      services: ["Local SEO", "GBP SEO", "National SEO", "Authority Building", "Paid Media", "AEO"],
      rating: 5
    },
    {
      quote: "Our challenge was executing real campaigns at tight price points without sacrificing delivery. We needed flexibility, not rigid packages. The ability to design campaigns around franchise budgets, while still maintaining standards and leveraging AI to stay efficient, allowed us to deliver consistently without blowing margins.",
      name: "Trevor Anderson",
      title: "Founder & CEO, Anderson Collaborative",
      location: "Denver, CO",
      tenure: "5 Years Partner",
      services: ["Local SEO", "GBP SEO", "National SEO", "Authority Building", "Paid Media", "AEO"],
      rating: 5
    },
    {
      quote: "We needed a partner we could depend on to build customized strategies for almost every client that came through the door. Our business is rooted in web design, and generic marketing packages were never going to work. Being able to tailor execution around each site and market made a measurable difference in client retention. Most clients stayed at least a year, with several continuing for multiple cycles.",
      name: "Jeremy",
      title: "Digital Marketing Agency Owner",
      location: "Florida",
      tenure: "5 Years Partner",
      services: ["Local SEO", "PPC", "Authority Building", "GBP SEO"],
      rating: 5
    }
  ];

  // Client testimonials from Google reviews
  const clientTestimonials = [
    {
      quote: "We run a national car wash company with multiple units. After looking at different companies to help us with our SEO efforts, we ultimately decided to try Dialed-In Local. From the first time we met with Doug we felt confident in his ability to help us. Fast forward to today, he has proven that he not only has the technical skills and know how but has proven he genuinely cares about seeing his clients succeed. I really like how he communicates and explains how things work as well as advises us on the best way to go about things (which has ended up saving us money in the long run). He helped clean up our online mess and since working with him, we have seen some sites increase almost 300% in organic searches.",
      name: "Car Spa",
      title: "National Car Wash Company",
      location: "Multiple Locations",
      highlight: "300% increase in organic searches",
      services: ["Paid Media", "SEO"],
      rating: 5
    },
    {
      quote: "I was looking for an SEO firm that could help me optimize my local listings and improve our rankings for certain location specific keywords without breaking the bank. Doug and the team at Dialed-In did just that. As a small business owner, I simply don't have $10,000 a month to retain a firm unless I don't want to pay my mortgage. Doug and his team did excellent work for a reasonable price and in many cases, went above and beyond what they promised. And while Doug never promised results, he and his team delivered with our organic rankings for the targeted keywords up across the board. And that's saying something since we work in a very competitive space (divorce mediation) and in a very populated area (NY/NJ and Chicago).",
      name: "Joseph Dillon",
      title: "Small Business Owner",
      location: "NY/NJ & Chicago",
      highlight: "Competitive divorce mediation space",
      services: ["SEO"],
      rating: 5
    },
    {
      quote: "Doug has done an awesome job getting our sales up for our e-commerce store. In fact, we are seeing a 10x return based on the work he has done. Highly recommend using this company.",
      name: "Free Sunshields",
      title: "E-Commerce Store",
      location: "",
      highlight: "10x return on investment",
      services: ["Paid Media"],
      rating: 5
    },
    {
      quote: "Doug is incredible to work with. I was blown away at how quickly he caught onto what I was hoping to build. Without much direction he had setup campaigns pulling artwork and copy without even having to tell him what to do. Streamlined my process and generated successful campaigns. Would hire again in a heartbeat and will refer him to others.",
      name: "Brian Sperry",
      title: "Business Owner",
      location: "",
      highlight: "Streamlined campaigns",
      services: ["Paid Media"],
      rating: 5
    },
    {
      quote: "After wasting a lot of time and money with other marketing companies, I was pretty burned out and was starting to feel like it was all a scam. After a couple of conversations with Doug Bryson at Dialed-In Local I decided to give him a shot and am glad I did. He not only turned my marketing around, but was very detailed in explaining the process to me, as well as giving me realistic expectations as to the timeline. It took a few months for him to clean up a lot of the junk that previous experts had left behind and get my website on the right track, but it was well worth the wait. My phone now rings with new potential clients regularly.",
      name: "Jack Haynes",
      title: "Business Owner",
      location: "",
      highlight: "Phone rings with new clients regularly",
      services: ["SEO", "Content", "Web Design", "GBP"],
      rating: 5
    },
    {
      quote: "I would highly recommend Doug at Dialed in Local to any business looking to grow with SEO. Doug is a great business partner and excellent communicator. My rankings have shown tremendous growth in a very short period of time.",
      name: "ASAP Apartment Finders",
      title: "Apartment Locator Service",
      location: "",
      highlight: "Tremendous ranking growth",
      services: ["Paid Media", "Local SEO", "GBP"],
      rating: 5
    },
    {
      quote: "We at Veterans Auto Services have really appreciated Dialed-In. Doug Bryson was great to work with. He closely monitored our company's reviews and was always quick to act with ideas and would implement them to make sure that our company was in full view of the public. You have brought success to our door and we thank you.",
      name: "Wendy Burns",
      title: "Veterans Auto Services",
      location: "Nashville, TN",
      highlight: "Review monitoring & visibility",
      services: ["GBP", "SEO", "Local SEO"],
      rating: 5
    },
    {
      quote: "I have worked with Doug and the Dialed-In Local team for many years in a variety of capacities. Doug is incredibly talented at what he does. He has a great business mind and is adept at understanding the unique needs, goals and visions of each company with which he works. This is particularly the case with small businesses. As a copywriter, I've worked with many marketing companies, but few have the drive, passion and the ability to get real results quite like Doug and the Dialed-In team.",
      name: "Rebecca Daneault",
      title: "Copywriter & Marketing Professional",
      location: "",
      highlight: "Years of partnership",
      services: ["Consulting", "Partnership"],
      rating: 5
    },
    {
      quote: "I've worked with Doug and Dialed-In Local for several years now and am always impressed with their broad technical knowledge of the constantly changing landscape of online marketing. Not only do they understand it, they take the time to make sure their clients understand it with detailed explanations of each program offered and detailed follow up. One of their best qualities is their ability to manage expectations. While many other businesses and consultants make their clients believe web marketing happens overnight and is a 'one size fits all' solution, Doug takes the time to outline programs with the best benefits and realistic time frames for results.",
      name: "Chris Farr",
      title: "Business Owner",
      location: "",
      highlight: "Realistic expectations & follow-through",
      services: ["Consulting", "Partnership"],
      rating: 5
    },
    {
      quote: "Doug does a great job providing customized and well-managed services for clients. He was able to appropriately size his SEO and design services to what I wanted. I can be pretty particular sometimes and Doug helped me right-size what I needed and understand what to expect. During our last project, I had to make changes into the project. Although it required me to adjust some things as well, he moved with the changes and the project turned out great for my needs.",
      name: "Daxon Edwards",
      title: "Business Owner",
      location: "",
      highlight: "Customized, right-sized solutions",
      services: ["National SEO", "Consulting", "Partnership"],
      rating: 5
    },
    {
      quote: "Dialed-In Local is definitely where I go for all things web. Doug's understanding of the web market has been a huge resource for my web presence in Nashville. Being an IT Company by trait we tend to learn technology based systems quickly. Having someone like Dialed-In allows me to not have to invest valuable time learning a new and ever changing system. Instead I can invest on doing what I do best and taking care of my clients.",
      name: "Tommy Wolosin",
      title: "IT Company Owner",
      location: "Nashville, TN",
      highlight: "Focus on what you do best",
      services: ["Consulting", "Partnership"],
      rating: 5
    },
    {
      quote: "Doug and his team have been great to work with. His monthly reporting really lets me see what his team is doing on a monthly basis. The results have been great. I really enjoy working with such a professional company!",
      name: "East Coast Window Films",
      title: "Window Film Company",
      location: "",
      highlight: "Transparent monthly reporting",
      services: ["GBP SEO", "Local SEO"],
      rating: 5
    },
    {
      quote: "Doug is very professional, organized and knowledgeable. He always goes above and beyond. You will not only get an SEO manager but you will get a partnership. I would give them six stars if there was an option.",
      name: "Advanced Apartment Locators",
      title: "Apartment Locator Service",
      location: "",
      highlight: "Above and beyond service",
      services: ["Paid Media"],
      rating: 5
    },
    {
      quote: "This was the first time I had built a website and didn't know what to expect or even where to begin, but Doug answered all of our questions and made the process so easy. Doug has proven he has great business ethics and is always professional. I highly recommend this business for anyone looking to enhance their online presence, website, or increase business.",
      name: "David Dorn",
      title: "Business Owner",
      location: "",
      highlight: "Made the process easy",
      services: ["Web Design", "SEO"],
      rating: 5
    },
    {
      quote: "The Dialed-In Web team have always been professional and knowledgeable in their industry. I had a great experience working with them, and would highly recommend this business to grow your online presence.",
      name: "Cynthia Cavoto",
      title: "Business Owner",
      location: "",
      highlight: "Professional & knowledgeable",
      services: ["SEO"],
      rating: 5
    }
  ];

  // Create schema reviews from testimonials
  const schemaReviews = [...agencyTestimonials, ...clientTestimonials].map(t => ({
    author: t.name,
    reviewBody: t.quote,
    ratingValue: t.rating
  }));
  const testimonialsSchema = getTestimonialsPageSchema(schemaReviews);

  // Featured testimonials (top 3 client testimonials with best metrics)
  const featuredTestimonials = clientTestimonials.slice(0, 3);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title="Client Testimonials | DemandStream Digital"
        description="Hear from companies and agency partners who've worked with Demand Stream Digital. Real feedback on our SEO, PPC, and content marketing work."
        canonical="https://demandstreamdigital.com/testimonials"
        ogImage="https://demandstreamdigital.com/og-images/testimonials.jpg"
        keywords="plumbing marketing reviews, HVAC marketing results, client success stories, plumbing SEO testimonials, local marketing feedback"
        schemaJson={testimonialsSchema}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cta/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-cta/10 border border-cta/20 rounded-full text-cta text-sm font-medium mb-6">
              Real Results, Real Relationships
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              What Our Partners & Clients Say
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              From agency partners who trust us with their fulfillment to business owners who have seen real growth. These are their stories.
            </p>
          </div>
        </div>
      </section>

      

      {/* Featured Results */}
      <section className="py-16 bg-surface-dark border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "300%", label: "Organic Search Increase", subtext: "Car Spa" },
              { value: "10x", label: "ROI on SEO Investment", subtext: "Free Sunshields" },
              { value: "14+", label: "Years in Business", subtext: "Since 2010" },
              { value: "5★", label: "Average Rating", subtext: "Google Reviews" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-cta mb-1">{stat.value}</p>
                <p className="text-foreground text-sm font-medium">{stat.label}</p>
                <p className="text-text-secondary text-xs">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Partners Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-cta/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-cta" />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Agency Partners
              </h2>
              <p className="text-text-secondary text-sm">White-label fulfillment partnerships</p>
            </div>
          </div>

          {/* Video Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { id: "DlOyjDWaCZo", title: "Cole - Dallas Agency Owner" },
              { id: "dR2Yxbldi1Q", title: "Trevor - Agency Partner" },
              { id: "i66XV1on6pM", title: "Jeremy - Florida Agency Owner" }
            ].map((video, index) => (
              <div 
                key={index} 
                className="relative aspect-video rounded-xl overflow-hidden border border-border bg-surface-elevated shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {agencyTestimonials.map((testimonial, index) => (
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

      {/* Agency Partners CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Ready to Explore a Partnership?
            </h3>
            <p className="text-text-secondary mb-6 max-w-md">
              Join agencies who trust us with their fulfillment.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-cta text-cta-foreground font-medium rounded-lg hover:bg-cta/90 transition-colors"
            >
              Let's Talk Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Client Results */}
      <section className="py-20 bg-surface-dark">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-cta/20 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-cta" />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Featured Client Results
              </h2>
              <p className="text-text-secondary text-sm">Measurable outcomes from real businesses</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-2xl p-6 hover:border-cta/30 transition-all duration-300 flex flex-col"
              >
                {testimonial.highlight && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-cta/10 border border-cta/20 rounded-full text-cta text-xs font-medium mb-4 w-fit">
                    <Star className="w-3 h-3 fill-cta" />
                    {testimonial.highlight}
                  </div>
                )}
                <Quote className="w-8 h-8 text-cta/30 mb-4" />
                <p className="text-text-secondary leading-relaxed mb-6 flex-grow text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-cta fill-cta" />
                  ))}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cta/20 flex items-center justify-center">
                    <span className="text-cta font-semibold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-text-secondary">{testimonial.title}</p>
                    {testimonial.location && (
                      <p className="text-xs text-text-secondary">{testimonial.location}</p>
                    )}
                  </div>
                </div>
                {testimonial.services && testimonial.services.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                    {testimonial.services.map((service, i) => (
                      <span key={i} className="px-2 py-0.5 bg-cta/10 text-cta text-xs rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Client Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              More Client Stories
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Over a decade of building relationships and delivering results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTestimonials.slice(3).map((testimonial, index) => (
              <div 
                key={index}
                className="bg-surface-dark border border-border rounded-2xl p-6 hover:border-cta/30 transition-all duration-300 flex flex-col"
              >
                <Quote className="w-6 h-6 text-cta/30 mb-3" />
                <p className="text-text-secondary leading-relaxed mb-4 flex-grow text-sm line-clamp-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-cta fill-cta" />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="w-8 h-8 rounded-full bg-cta/20 flex items-center justify-center">
                    <span className="text-cta font-semibold text-sm">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-text-secondary">{testimonial.title}</p>
                  </div>
                </div>
                {testimonial.services && testimonial.services.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {testimonial.services.map((service, i) => (
                      <span key={i} className="px-2 py-0.5 bg-cta/10 text-cta text-xs rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Stories CTA */}
      <section className="py-16 bg-surface-dark">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-text-secondary mb-6 max-w-md">
              Let's discuss how we can help grow your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-cta text-cta-foreground font-medium rounded-lg hover:bg-cta/90 transition-colors"
            >
              Let's Talk Partnership
            </Link>
          </div>
        </div>
      </section>

      <MarketExclusivity />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Testimonials;
