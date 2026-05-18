import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Lock,
  Target,
  Search,
  PhoneOff,
  MapPin,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/ad-scan-hero.png";
import heroAlt from "@/assets/ad-scan-hvac.png";
import dougHeadshot from "@/assets/doug-bryson-headshot-2.jpeg";

const ACCENT = "#1E5BD6";
const GOLD = "#F2B705";
const RED = "#C0392B";

const CHECKOUT_URL = "https://demandstream.spiffy.co/checkout/ad-scan-97";

const CTA = ({
  children = "GET MY AD AUDIT FOR $97",
  size = "lg" as "lg" | "md",
  href = CHECKOUT_URL,
}: {
  children?: React.ReactNode;
  size?: "lg" | "md";
  href?: string;
}) => (
  <div className="inline-flex flex-col items-center">
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-3 rounded-md bg-[#C0392B] hover:bg-[#a4301f] active:translate-y-px transition-all text-white font-black uppercase tracking-wide shadow-[0_18px_45px_-12px_rgba(192,57,43,0.75)] ring-1 ring-white/10 ${
        size === "lg"
          ? "px-8 md:px-12 py-5 md:py-6 text-lg md:text-2xl"
          : "px-6 md:px-10 py-4 text-base md:text-lg"
      }`}
    >
      {children}
      <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
    </a>
    <span className="mt-2 text-xs md:text-sm italic opacity-70">
      ($697 value). Secure Spiffy checkout.
    </span>
  </div>
);

// Real audit slide preview — uses an actual page from a redacted client report.
const AuditSlide = ({
  num,
  title,
  src,
  light = false,
}: {
  num: string;
  title: string;
  src: string;
  light?: boolean;
}) => (
  <div
    className={`rounded-xl border overflow-hidden shadow-md ${
      light
        ? "bg-white border-[#E5E7EB]"
        : "bg-white border-white/10"
    }`}
  >
    <div
      className="px-5 py-2.5 text-[10px] md:text-[11px] font-black tracking-[0.25em] uppercase text-white flex items-center justify-between"
      style={{ background: "#0D1B2A" }}
    >
      <span>Slide {num}</span>
      <span className="text-white/60 font-bold tracking-wider">Sample. Client redacted.</span>
    </div>
    <div className="bg-white p-3 md:p-4">
      <div className="aspect-[5/4] overflow-hidden rounded-md border border-[#E5E7EB] bg-[#F7F8FA]">
        <img
          src={src}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <h4 className="mt-3 text-sm md:text-base font-black text-[#0D1B2A] leading-snug">
        {title}
      </h4>
    </div>
  </div>
);

const StepRow = ({
  num,
  title,
  body,
  reverse,
  img,
  alt,
}: {
  num: number;
  title: string;
  body: string;
  reverse?: boolean;
  img: string;
  alt: string;
}) => (
  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
    <div className={reverse ? "md:order-2" : ""}>
      <div
        className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-3"
        style={{ color: ACCENT }}
      >
        Step {num}
      </div>
      <h3 className="text-2xl md:text-3xl font-black text-[#0D1B2A] mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-base md:text-lg text-[#334155] leading-relaxed">{body}</p>
    </div>
    <div className={reverse ? "md:order-1" : ""}>
      <div className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-lg">
        <img src={img} alt={alt} className="w-full block" loading="lazy" />
      </div>
    </div>
  </div>
);

export default function AdScanOffer() {
  return (
    <div className="bg-[#F7F8FA] text-[#0D1B2A]">
      <SEOHead
        title="Local Lead Ad Scan. The $97 Audit That Finds Your Leaks | Demand Stream"
        description="Plumbing and HVAC owners: get a 30-page Local Lead Ad Scan that grades your Google Ads, Meta, missed calls, GBP, and tracking. Normally $697. Today $97. Full refund if we don't find 3 problems."
        canonical="https://demandstreamdigital.com/ad-scan-offer"
        noIndex
      />

      {/* Announcement */}
      <div className="bg-[#C0392B] text-white text-center text-sm md:text-base font-bold py-2.5 px-4 tracking-wide">
        PLUMBING &amp; HVAC OWNERS ONLY. 10 audits per week.{" "}
        <span className="line-through opacity-80">$697</span>{" "}
        <span className="underline">$97</span>.
      </div>

      {/* Hero — title + 3 slide previews */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-12 md:pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div
              className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-5"
              style={{ color: ACCENT }}
            >
              The $97 Local Lead Ad Scan
            </div>
            <h1 className="text-[34px] leading-[1.05] sm:text-5xl md:text-6xl font-black text-[#0D1B2A] mb-5">
              Steal the audit our team uses to find{" "}
              <span style={{ color: ACCENT }}>$500 to $2,000 a month</span> in
              ad waste at Plumbing and HVAC shops
              <span className="text-[#C0392B]">.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#334155] max-w-3xl mx-auto leading-relaxed mb-7">
              A 30 page, data backed report on your Google Ads, Meta, missed
              calls, Google Business Pro, and tracking. Built from real
              ServiceTitan and Housecall Pro shops.{" "}
              <strong>Worth $697. Today $97.</strong>
            </p>
            <CTA>GET MY AD AUDIT FOR $97</CTA>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-sm text-[#475569]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" style={{ color: "#16A34A" }} />
                Refund if we don&rsquo;t find 3 problems
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" style={{ color: ACCENT }} />
                Delivered in 5 business days
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" style={{ color: "#475569" }} />
                Secure Spiffy checkout
              </div>
            </div>
          </div>

          {/* 3 slide previews */}
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            <AuditSlide
              num="03"
              title="$358K attribution mystery, isolated and explained"
              src="/audit-samples/slide-03.jpg"
              light
            />
            <AuditSlide
              num="06"
              title="Paused campaigns: investigate before reactivating"
              src="/audit-samples/slide-06.jpg"
              light
            />
            <AuditSlide
              num="01"
              title="7 months of real data, scored against benchmarks"
              src="/audit-samples/slide-01.jpg"
              light
            />
          </div>
        </div>
      </section>

      {/* Pain — 3 numbered cards */}
      <section className="bg-[#F7F8FA] py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#0D1B2A] leading-tight">
              Not getting enough booked calls from your ads?
            </h2>
            <p className="text-lg text-[#475569] mt-4 max-w-2xl mx-auto">
              It is rarely the market or the techs. <strong>Your ad stack is
              leaking</strong>, in 1 of 3 ways.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "1",
                t: "Your money is leaking",
                b: "Wrong search terms, lazy negatives, geo bleed, and untargeted Meta audiences quietly burn $500 to $2,000 a month. Most owners cannot see it without a real audit.",
              },
              {
                n: "2",
                t: "Your phones are leaking",
                b: "Calls go to voicemail at noon. After hours rings drop. Nobody tracks it. A shop missing 15 percent of calls is leaving 6 figures a year on the table.",
              },
              {
                n: "3",
                t: "Your tracking is leaking",
                b: "GA4 is half built. Call tracking does not tie to ServiceTitan. The Meta pixel is broken. You cannot trust the report your agency sends, so you cannot decide.",
              },
            ].map((p) => (
              <div
                key={p.n}
                className="bg-white border border-[#E5E7EB] rounded-xl p-7 shadow-sm"
              >
                <div
                  className="inline-flex items-center justify-center h-12 w-12 rounded-full text-white font-black text-xl mb-4"
                  style={{ background: ACCENT }}
                >
                  {p.n}
                </div>
                <h3 className="text-xl font-black text-[#0D1B2A] mb-3">{p.t}</h3>
                <p className="text-[#475569] leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <CTA size="md">GET MY AD AUDIT FOR $97</CTA>
          </div>
        </div>
      </section>

      {/* Steps — 4 step rows with screenshots */}
      <section className="bg-white py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div
              className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-3"
              style={{ color: ACCENT }}
            >
              How It Works
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0D1B2A] leading-tight mb-4">
              From $97 checkout to a real action plan in 5 business days.
            </h2>
            <p className="text-lg text-[#475569]">
              No call required. No screen share. We do the digging and hand you
              a report your team can act on Monday morning.
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            <StepRow
              num={1}
              title="Pay the $97 and finish a 10 minute access form"
              body="Pay through Spiffy and you land on a guided onboarding page. You give us look only access to Google Ads, Meta, GBP, GA4, and your call tracking. No passwords. We can read, not change."
              img={heroImg}
              alt="$97 checkout and onboarding"
            />
            <StepRow
              num={2}
              title="We pull live data from your stack"
              body="Our team pulls search term reports, Meta delivery, GBP insights, call logs, and your CRM booked jobs. We grade every channel against the Plumbing and HVAC benchmarks we have built from 15 years of shops."
              reverse
              img={heroAlt}
              alt="Live data pulled from ad accounts"
            />
            <StepRow
              num={3}
              title="We score each channel and quantify the waste"
              body="Every channel gets a 0 to 100 score. Every problem gets a real dollar value tied to your shop size. No vanity metrics. No clicks and impressions. Just booked calls and money."
              img={heroImg}
              alt="Scored channel report"
            />
            <StepRow
              num={4}
              title="You get a 30 page PDF and a 30 day action list"
              body="The report lands in your inbox in 5 business days. Top 3 fixes, prioritized by dollars recovered. Hand it to your team, your agency, or use it to fire your agency. It is yours."
              reverse
              img={heroAlt}
              alt="30 page PDF action list"
            />
          </div>

          <div className="text-center mt-14">
            <CTA size="md">GET MY AD AUDIT FOR $97</CTA>
          </div>
        </div>
      </section>

      {/* What's inside — sample slide gallery */}
      <section className="bg-[#0D1B2A] text-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div
              className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-3"
              style={{ color: GOLD }}
            >
              What&rsquo;s Inside The Audit
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4">
              30 slides of <span style={{ color: GOLD }}>shop specific</span> analysis
            </h2>
            <p className="text-lg text-white/75">
              This is not a generic SEMRush export. Every slide is built from
              your live accounts and scored against Plumbing and HVAC
              benchmarks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AuditSlide num="01" title="Executive summary: 7 months of real data" src="/audit-samples/slide-01.jpg" />
            <AuditSlide num="02" title="The real ROAS picture, broken down by source" src="/audit-samples/slide-02.jpg" />
            <AuditSlide num="03" title="The $358K attribution mystery and 3 root causes" src="/audit-samples/slide-03.jpg" />
            <AuditSlide num="04" title="Where your revenue comes from: zip code analysis" src="/audit-samples/slide-04.jpg" />
            <AuditSlide num="05" title="Match type opportunity: 12x CPA gap" src="/audit-samples/slide-05.jpg" />
            <AuditSlide num="06" title="Paused campaigns: investigate before reactivating" src="/audit-samples/slide-06.jpg" />
            <AuditSlide num="07" title='99 "competitor arrived" cancellations quantified' src="/audit-samples/slide-07.jpg" />
            <AuditSlide num="08" title="Next steps: ready to move when you are" src="/audit-samples/slide-08.jpg" />
          </div>

          <div className="text-center mt-12">
            <CTA size="md">GET MY AD AUDIT FOR $97</CTA>
          </div>
        </div>
      </section>

      {/* From Doug — personal note */}
      <section className="bg-[#F7F8FA] border-b border-[#E5E7EB] py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-5 md:px-8">
          <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-lg p-6 md:p-10">
            <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-8 items-start">
              <img
                src={dougHeadshot}
                alt="Doug Bryson, founder of Demand Stream Digital"
                className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl object-cover border border-[#E5E7EB] shadow-md mx-auto md:mx-0"
                loading="lazy"
              />
              <div>
                <div
                  className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-3"
                  style={{ color: ACCENT }}
                >
                  A note from Doug
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#0D1B2A] mb-3 leading-tight">
                  I built this audit because the industry needed one.
                </h3>
                <p className="text-[#334155] leading-relaxed mb-3">
                  I have spent 16 years quietly cleaning up broken ad accounts
                  for plumbing and HVAC shops while their agencies stay quiet
                  and keep cashing checks.
                </p>
                <p className="text-[#334155] leading-relaxed mb-3">
                  This $97 audit is the same scan we run on every new client.
                  If we cannot find 3 real problems in your accounts, you get
                  every dollar back. No questions.
                </p>
                <p className="italic text-[#475569]">Doug Bryson, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing — single card with strikethrough */}
      <section id="pricing" className="bg-[#0D1B2A] text-white py-16 md:py-24">
        <div className="max-w-[720px] mx-auto px-5 md:px-8">
          <div className="text-center mb-8">
            <div
              className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-3"
              style={{ color: GOLD }}
            >
              Limited Time Offer
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              The Local Lead Ad Scan
            </h2>
            <p className="text-white/75 mt-3 text-lg">
              Everything you need to see exactly where your ad spend is
              leaking, scored against real Plumbing and HVAC shops.
            </p>
          </div>

          <div className="bg-white text-[#0D1B2A] rounded-2xl p-8 md:p-10 shadow-2xl border border-white/10">
            <div className="text-center mb-6">
              <div
                className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-2"
                style={{ color: ACCENT }}
              >
                The Local Lead Ad Scan Package
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl md:text-3xl font-black text-[#9CA3AF] line-through">
                  $697
                </span>
                <span className="text-5xl md:text-6xl font-black" style={{ color: RED }}>
                  $97
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                <><strong>30 page audit PDF</strong> built from your live Google, Meta, GBP, GA4, and call tracking data.</>,
                <><strong>0 to 100 score per channel</strong> graded against Plumbing and HVAC benchmarks.</>,
                <><strong>Top 3 fixes</strong> with real dollar values tied to your shop size.</>,
                <><strong>Booked call forecast</strong> showing the revenue impact of shipping the fixes.</>,
                <><strong>30 day action list</strong> your team or agency can execute Monday morning.</>,
                <><strong>Refund guarantee</strong>: if we cannot find 3 problems, you get every dollar back.</>,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-6 w-6 flex-shrink-0 mt-0.5"
                    style={{ color: "#16A34A" }}
                  />
                  <span className="text-[#1F2937] text-base md:text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center">
              <CTA>GET MY AD AUDIT FOR $97</CTA>
            </div>
            <p className="text-center text-xs text-[#6B7280] mt-4">
              Limited to 10 audits per week. Delivered in 5 business days.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee strip */}
      <section className="bg-[#F7F8FA] py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-5 md:px-8">
          <div
            className="rounded-2xl p-8 md:p-12 text-center"
            style={{
              background: "linear-gradient(135deg, #F2B705 0%, #E0A800 100%)",
              color: "#0D1B2A",
            }}
          >
            <ShieldCheck className="h-14 w-14 mx-auto mb-4" />
            <h2 className="text-2xl md:text-4xl font-black mb-3 leading-tight">
              If we don&rsquo;t find <span style={{ color: RED }}>3 problems</span>, full refund. No questions.
            </h2>
            <p className="text-base md:text-lg text-[#0D1B2A]/80 max-w-2xl mx-auto">
              Refund requests must be submitted within 14 days of report
              delivery. See our{" "}
              <Link to="/terms" className="underline font-bold">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20 border-t border-[#E5E7EB]">
        <div className="max-w-[820px] mx-auto px-5 md:px-8">
          <div className="text-center mb-10">
            <div
              className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-3"
              style={{ color: ACCENT }}
            >
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0D1B2A] leading-tight">
              Quick answers before you buy.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do I need to be running ads to buy this?",
                a: "Yes. The audit is built for plumbing and HVAC shops actively spending on Google Ads, Meta, or LSAs. If you are not running ads yet, save the $97 and come back when you are.",
              },
              {
                q: "What access do you need?",
                a: "Look only access to Google Ads, Meta Business, Google Business Pro, GA4, and your call tracking. No passwords. We cannot change anything in your accounts.",
              },
              {
                q: "How long does the audit take?",
                a: "5 business days from the moment we have all access granted. The full PDF lands in your inbox with the action list.",
              },
              {
                q: "Will this replace my current agency?",
                a: "It does not have to. Many owners hand the audit to their existing agency as a scorecard. Others use it to fire the agency and find a better one. Your call.",
              },
              {
                q: "What if my numbers are not as bad as you say?",
                a: "Great. You spend $97 and find out your ad stack is healthy. If we cannot find 3 real problems with a dollar value, you get a full refund.",
              },
              {
                q: "Is this only for plumbing and HVAC?",
                a: "Yes. The benchmarks, the language, and the recommendations are built for plumbing and HVAC shops. We do not audit electricians, GCs, or franchises.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-lg p-5 group"
              >
                <summary className="cursor-pointer text-lg font-black text-[#0D1B2A] flex items-start justify-between gap-4">
                  <span>{item.q}</span>
                  <span className="text-[#475569] group-open:rotate-45 transition-transform text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[#334155] leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <CTA size="md">GET MY AD AUDIT FOR $97</CTA>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="bg-[#0D1B2A] text-white/70 py-8 text-center text-sm">
        <div className="max-w-[900px] mx-auto px-5 md:px-8">
          Demand Stream Digital &middot; Dallas, TX &middot;{" "}
          <Link to="/terms" className="underline">
            Terms
          </Link>{" "}
          &middot;{" "}
          <Link to="/privacy" className="underline">
            Privacy
          </Link>
        </div>
      </section>
    </div>
  );
}
