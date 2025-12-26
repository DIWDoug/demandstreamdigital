import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 section-light">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">
            What Partners Say
          </h2>
        </div>

        {/* Main testimonial with video */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
          {/* Video */}
          <div className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/dR2Yxbldi1Q"
              title="Agency Partner Testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Quote */}
          <div>
            <Quote className="h-8 w-8 text-gray-300 mb-4" />
            <blockquote className="text-xl text-gray-800 font-medium leading-relaxed mb-6">
              "They're exceptionally dependable. Trustworthy, clear communication, and really consistent—which is rare."
            </blockquote>
            <div>
              <p className="text-gray-900 font-semibold">Trevor Anderson</p>
              <p className="text-gray-600 text-sm">Founder, Anderson Collaborative</p>
            </div>
          </div>
        </div>

        {/* Secondary quote */}
        <div className="max-w-2xl mx-auto text-center border-t border-gray-200 pt-10">
          <p className="text-gray-600 italic">
            "Our retention rate on SEO is about 90%. I can go to sleep knowing we're doing everything we can."
          </p>
          <p className="text-gray-500 text-sm mt-3">— Digital Agency, Florida</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;