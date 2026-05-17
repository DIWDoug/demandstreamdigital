import ServiceTestimonialsSection from "@/components/services/generic/ServiceTestimonialsSection";

const Testimonials = () => {
  return (
    <ServiceTestimonialsSection
      featured={{
        eyebrow: "Real Reviews From Real Operators",
        quote: `Working with our SEO partner has been one of the best marketing decisions we've made. In just a few months, he has completely transformed our SEO performance with a roadmap that is not only strategic, but clearly tailored to our business. For the first time, we don't feel like we're guessing. We have a plan, data to back it up, and a partner who keeps us accountable.\n\nWhat truly sets him apart is transparency. After past experiences with agencies where SEO felt like a "black box," it's refreshing to work with a team that provides real, clear data and explains what's working and why. His insights are thoughtful, his ideas are strong, and his use of AI is smart and intentional, not gimmicky.\n\nBeyond the strategy, the results speak for themselves. We saw a 40% year-over-year revenue increase this past December, and while SEO isn't the only factor, it has absolutely contributed to that growth.\n\nHe is passionate about what he does, and it shows in both his work and his team. This is not a vendor relationship. This is a true partnership.\n\nIf you're looking for an SEO company that is strategic, transparent, and genuinely invested in your success, I can't recommend him enough.`,
        author: "Pure Plumbing & Air",
        source: "Google Review",
        metricBadge: "40% year-over-year revenue increase",
      }}
      ratingLine="4.9 out of 5 · 22 Google Reviews for Demand Stream Digital"
    />
  );
};

export default Testimonials;
