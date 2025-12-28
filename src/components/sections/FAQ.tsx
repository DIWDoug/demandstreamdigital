import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const FAQ = () => {
  const sectionRef = useScrollReveal();
  const faqs = [
    // Core Local SEO Concepts
    {
      question: "What actually drives local search rankings?",
      answer: "Google evaluates three core factors: relevance (how well your client matches search intent), distance (proximity to the searcher), and prominence (online authority through reviews, citations, and backlinks). We optimize across all three pillars to maximize visibility in both the Local Pack and organic results."
    },
    {
      question: "What's the difference between the Local Pack and organic results?",
      answer: "The Local Pack (map 3-pack) is powered primarily by Google Business Profile optimization, while organic results depend on website authority and on-page SEO. Most local businesses need both—the Pack drives immediate calls, while organic captures research-phase traffic. We build strategies that dominate both."
    },
    {
      question: "What is a Google Business Profile and why does it matter?",
      answer: "Google Business Profile (formerly Google My Business) is the foundation of local visibility. It controls how businesses appear in Maps and the Local Pack. Optimization includes accurate categories, complete business info, photos, posts, Q&A, and attributes. A well-optimized profile can be the difference between page one and invisibility."
    },
    {
      question: "How important is NAP consistency really?",
      answer: "Critical. Name, Address, and Phone number consistency across directories, social profiles, and your client's website is a foundational trust signal. Inconsistencies confuse both Google and potential customers. We audit and correct NAP data across structured citations (Yelp, Yellow Pages) and unstructured mentions (blogs, news articles)."
    },
    {
      question: "What are citations and why do they matter?",
      answer: "Citations are online mentions of a business's name, address, and phone number. They come in two forms: structured (business directories like Yelp, Yellow Pages) and unstructured (mentions in blog posts, news articles, social media). Consistent citations build trust with Google and help verify business legitimacy."
    },
    {
      question: "How do reviews impact local rankings?",
      answer: "Reviews influence both rankings and conversions. Google considers review quantity, velocity, star rating, and keyword mentions. Equally important: response rate. Businesses that actively respond to reviews signal trustworthiness. We help establish review generation systems and response workflows."
    },
    {
      question: "What role do local backlinks play?",
      answer: "Local backlinks signal geographic relevance to Google. Links from local news sites, chambers of commerce, sponsorships, and complementary local businesses carry significant weight. We build geo-relevant link profiles through community partnerships and local PR opportunities."
    },
    {
      question: "What on-page factors matter for local SEO?",
      answer: "Key on-page elements include location-specific title tags and meta descriptions, NAP in the footer or contact page, embedded Google Maps, local schema markup, city/region mentions in content, and dedicated service area pages. We ensure every page signals local relevance to search engines."
    },
    {
      question: "How does local keyword research differ from traditional SEO?",
      answer: "Local keyword research focuses on geo-modified terms ('plumber in Dallas'), 'near me' queries, neighborhood names, and service-specific local intent. We identify the exact phrases your clients' customers use when ready to buy—not just high-volume vanity terms."
    },
    {
      question: "What is local schema markup?",
      answer: "Schema markup is structured data that helps search engines understand business information. LocalBusiness schema tells Google exactly what a business does, where it's located, hours of operation, and services offered. Proper schema implementation improves rich snippet eligibility and AI search visibility."
    },
    {
      question: "How do you optimize for 'near me' searches?",
      answer: "Near me optimization involves ensuring Google understands the business's service area, maintaining accurate GBP location data, building local citations, earning reviews that mention neighborhoods, and creating location-specific content. Mobile optimization is also critical since most 'near me' searches happen on phones."
    },
    {
      question: "What's the difference between service area businesses and brick-and-mortar?",
      answer: "Service area businesses (plumbers, electricians, cleaning services) travel to customers, while brick-and-mortar locations receive customers on-site. Each requires different GBP settings and optimization strategies. We configure profiles correctly and build appropriate local signals for each business model."
    },
    // AI and Emerging Trends
    {
      question: "How is AI changing local search?",
      answer: "AI systems like ChatGPT and Google's AI Overviews now influence how consumers discover local businesses. These systems favor businesses with strong citations, dedicated service pages, and presence on curated 'best of' lists. We build these signals into every campaign to ensure visibility in traditional and AI-powered search."
    },
    {
      question: "Does voice search matter for local SEO?",
      answer: "Yes. Voice searches are often local and conversational ('Where's the nearest coffee shop?'). Optimizing for voice means focusing on natural language queries, FAQ content, featured snippet eligibility, and ensuring Google has accurate business information to serve voice assistants."
    },
    // Process and Strategy
    {
      question: "How long does local SEO take to show results?",
      answer: "Initial improvements in GBP visibility can happen within weeks. Meaningful organic ranking gains typically take 3-6 months. Competitive markets may take longer. We set realistic expectations upfront and provide monthly progress tracking so you can communicate timelines confidently to clients."
    },
    {
      question: "How do you handle multi-location businesses?",
      answer: "Each location gets its own optimized Google Business Profile, location-specific landing pages, and targeted citation building. We create scalable systems that maintain consistency while allowing for location-specific customization—essential for franchise and multi-location clients."
    },
    {
      question: "Do you offer local SEO audits?",
      answer: "Yes. Our audits cover GBP optimization status, citation accuracy, review profile analysis, on-page local signals, competitor benchmarking, and backlink profile assessment. Audits identify quick wins and long-term opportunities—perfect for onboarding new clients or diagnosing stalled campaigns."
    },
    {
      question: "What's included in ongoing local SEO management?",
      answer: "Ongoing management includes GBP optimization and posting, citation building and cleanup, review monitoring and response guidance, local content creation, link building outreach, technical SEO maintenance, and monthly performance reporting. We handle execution so you can focus on client relationships."
    },
    // Partnership Questions
    {
      question: "How does white-label fulfillment work?",
      answer: (
        <>
          We operate entirely behind the scenes. You maintain the client relationship, set pricing, and own communication. We handle execution under your brand.{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline decoration-dotted cursor-help">Clients never know we exist</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>We're like marketing ninjas. But with fewer throwing stars. 🥷</p>
            </TooltipContent>
          </Tooltip>
          .
        </>
      )
    },
    {
      question: "Do you require long-term contracts?",
      answer: (
        <>
          No. We work on a month-to-month basis with a{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline decoration-dotted cursor-help">30-day notice policy</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>We don't believe in holding people hostage. Bad for morale. 🔓</p>
            </TooltipContent>
          </Tooltip>
          . Our retention comes from results, not lock-in agreements.
        </>
      )
    },
    {
      question: "What industries do you specialize in?",
      answer: "We focus on local service businesses: legal, medical, home services, automotive, real estate, and similar verticals. Our strategies are built for location-based visibility and lead generation where proximity and trust signals matter most."
    },
    {
      question: "How do you report on local SEO performance?",
      answer: "We provide white-labeled reports tracking Local Pack rankings, organic visibility, citation health, review metrics, and website traffic from local searches. Reports are designed for client conversations—clear outcomes, not vanity metrics."
    },
    {
      question: "Can you help with local SEO for competitive markets?",
      answer: "Absolutely. Competitive markets require more aggressive strategies: stronger link building, more comprehensive citation coverage, enhanced review generation, and deeper content development. We assess competition upfront and scope campaigns accordingly."
    },
    {
      question: "What tools do you use for local SEO?",
      answer: "We use industry-leading tools including BrightLocal for citation tracking, Semrush and Ahrefs for competitive analysis, Google Search Console for performance data, and proprietary tracking for GBP metrics. All reporting is white-labeled for your client presentations."
    }
  ];

  // Split FAQs into two columns
  const midpoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midpoint);
  const rightColumn = faqs.slice(midpoint);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 section-light reveal-section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg">
              Common questions from agency partners.
            </p>
          </div>

          {/* FAQ Accordion - Two Columns */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <Accordion type="single" collapsible className="space-y-4">
              {leftColumn.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-left-${index}`}
                  className="bg-white border border-gray-200 rounded-lg px-6 data-[state=open]:border-[hsl(224,60%,55%)]/30 transition-all duration-300 shadow-sm"
                >
                  <AccordionTrigger className="text-base font-medium text-gray-900 hover:no-underline py-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Right Column */}
            <Accordion type="single" collapsible className="space-y-4">
              {rightColumn.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-right-${index}`}
                  className="bg-white border border-gray-200 rounded-lg px-6 data-[state=open]:border-[hsl(224,60%,55%)]/30 transition-all duration-300 shadow-sm"
                >
                  <AccordionTrigger className="text-base font-medium text-gray-900 hover:no-underline py-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
