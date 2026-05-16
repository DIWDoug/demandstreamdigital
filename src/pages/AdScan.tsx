import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Phone,
  Search,
  Target,
  PhoneOff,
  MapPin,
  TrendingUp,
  AlertTriangle,
  Lock,
  Star,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/ad-scan-hero.png";
import heroAlt from "@/assets/ad-scan-hvac.png";

const ACCENT = "#1E5BD6"; // ClickFunnels-style royal blue accent
const GOLD = "#F2B705";
const RED = "#C0392B";

const CTA = ({ children = "CLAIM MY $97 AD SCAN", size = "lg" as "lg" | "md" }) => (
  <a
    href="#order"
    className={`inline-flex items-center justify-center gap-3 rounded-md bg-[#C0392B] hover:bg-[#a4301f] active:translate-y-px transition-all text-white font-black uppercase tracking-wide shadow-[0_18px_45px_-12px_rgba(192,57,43,0.75)] ring-1 ring-white/10 ${
      size === "lg"
        ? "px-8 md:px-12 py-5 md:py-6 text-lg md:text-2xl"
        : "px-6 md:px-10 py-4 text-base md:text-lg"
    }`}
  >
    {children}
    <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
  </a>
);

const Pillar = ({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Search;
  title: string;
  body: string;
}) => (
  <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
      style={{ background: `${ACCENT}15`, color: ACCENT }}
    >
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-extrabold text-[#0D1B2A] mb-2">{title}</h3>
    <p className="text-[#475569] text-sm leading-relaxed">{body}</p>
  </div>
);

const Check = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: "#16A34A" }} />
    <span className="text-[#1F2937] text-base md:text-lg leading-relaxed">{children}</span>
  </li>
);

export default function AdScan() {
  return (
    <div className="bg-[#F7F8FA] text-[#0D1B2A]">
      <SEOHead
        title="Local Lead Ad Scan — Find The Leaks In Your Marketing | $97"
        description="A 5-channel forensic audit of your Google Ads, Facebook Ads, missed calls, and Google Business Pro for Plumbing & HVAC operators. Normally $297. Today $97. 100% money-back guarantee."
        canonical="https://demandstreamdigital.com/ad-scan"
        noIndex
      />

      {/* Announcement bar */}
      <div className="bg-[#C0392B] text-white text-center text-sm md:text-base font-bold py-2.5 px-4 tracking-wide">
        LIMITED: Only 10 Ad Scans accepted per week. Normally <span className="line-through opacity-80">$297</span> — today <span className="underline">$97</span>.
      </div>

      {/* Hero */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-12 md:pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div
              className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-5"
              style={{ color: ACCENT }}
            >
              For Plumbing &amp; HVAC Operators Only
            </div>
            <h1 className="text-[34px] leading-[1.05] sm:text-5xl md:text-6xl font-black text-[#0D1B2A] mb-5">
              We&rsquo;ll Tear Apart Your Local Ads &amp; Show You{" "}
              <span style={{ color: ACCENT }}>Exactly Where Your Money Is Leaking</span>
              <span className="text-[#C0392B]">.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#334155] max-w-3xl mx-auto leading-relaxed mb-7">
              A 5-channel forensic audit of your Google Ads, Facebook Ads,
              tracking, missed calls, and Google Business Pro. Delivered as a
              scored report. <strong>$297 value. Today $97.</strong>
            </p>
            <CTA>CLAIM MY $97 AD SCAN</CTA>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-sm text-[#475569]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" style={{ color: "#16A34A" }} />
                100% money-back guarantee
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" style={{ color: ACCENT }} />
                Delivered in 72 hours
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" style={{ color: "#475569" }} />
                Secure checkout
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-14 rounded-xl overflow-hidden border border-[#E5E7EB] shadow-xl">
            <img
              src={heroImg}
              alt="Local Lead Ad Scan — We find the leaks"
              className="w-full block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Pain section */}
      <section className="bg-[#0D1B2A] text-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <div
              className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-3"
              style={{ color: GOLD }}
            >
              The Honest Reality
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              You&rsquo;re Spending Thousands On Ads.
              <br className="hidden md:block" />
              <span style={{ color: GOLD }}> Are You Sure It&rsquo;s Working?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              "Your Google Ads cost-per-call keeps creeping up and nobody can explain why.",
              "Facebook leads come in, but the phone barely rings on Monday.",
              "You suspect calls are being missed, but nobody is tracking them.",
              "Your Google Business Pro hasn&rsquo;t been touched in 6 months.",
              "Your agency sends &ldquo;reports&rdquo; full of impressions, clicks, and CTR. Useless.",
              "You don&rsquo;t actually know your real cost-per-booked-job.",
            ].map((t) => (
              <div
                key={t}
                className="flex items-start gap-3 bg-[#1A2E44] rounded-lg p-5 border border-white/5"
              >
                <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
                <p
                  className="text-white/90 text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: t }}
                />
              </div>
            ))}
          </div>

          <p className="text-center text-white/70 max-w-2xl mx-auto mt-10 text-lg italic">
            One leak in your funnel can quietly cost a Plumbing or HVAC shop $40k a year. The Ad Scan finds them.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-[#F7F8FA] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <div
              className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-3"
              style={{ color: ACCENT }}
            >
              The 5-Channel Forensic Audit
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0D1B2A] mb-4 leading-tight">
              Here&rsquo;s Exactly What We Tear Apart.
            </h2>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              Every channel is graded against the Plumbing &amp; HVAC benchmarks we&rsquo;ve built over 15+ years.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Pillar
              icon={Target}
              title="01 — Google Ads Forensics"
              body="Search terms, negative gaps, geo waste, ad copy, Quality Score, smart bidding, conversion mapping. Every dollar audited."
            />
            <Pillar
              icon={Search}
              title="02 — Facebook / Meta Ads"
              body="Audiences, creative fatigue, pixel events, lead quality, cost-per-booked-call. The hidden waste most shops never catch."
            />
            <Pillar
              icon={PhoneOff}
              title="03 — Missed Call Audit"
              body="We pull your call data and quantify every unanswered ring, voicemail dump, and after-hours drop in real dollars."
            />
            <Pillar
              icon={MapPin}
              title="04 — Google Business Pro"
              body="The full 110% optimization scorecard: categories, services, photos, posts, Q&A, review velocity, geo signals."
            />
            <Pillar
              icon={TrendingUp}
              title="05 — Tracking &amp; Attribution"
              body="GA4, call tracking, conversion mapping, CRM tie-in. We check if you can actually trust your numbers."
            />
            <Pillar
              icon={CheckCircle2}
              title="The Scored Report"
              body="A clear 0&ndash;100 score per channel, prioritized fixes, and a 30-day action list. Yours to keep, agency or no agency."
            />
          </div>
        </div>
      </section>

      {/* Split — image + bullets */}
      <section className="bg-white py-16 md:py-24 border-t border-b border-[#E5E7EB]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-lg order-2 md:order-1">
            <img src={heroAlt} alt="HVAC field tech inspecting a unit" className="w-full block" />
          </div>
          <div className="order-1 md:order-2">
            <div
              className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-3"
              style={{ color: ACCENT }}
            >
              What You Walk Away With
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0D1B2A] mb-6 leading-tight">
              A Report Your Current Agency Will Never Send You.
            </h2>
            <ul className="space-y-4">
              <Check>A 0&ndash;100 score for each of your 5 channels.</Check>
              <Check>The exact dollar value of waste we found in your accounts.</Check>
              <Check>Your top 3 highest-ROI fixes, ranked by impact.</Check>
              <Check>A side-by-side benchmark vs other Plumbing &amp; HVAC shops in your size range.</Check>
              <Check>A 30-day action plan you can hand to anyone, including your in-house team.</Check>
            </ul>
            <div className="mt-8">
              <CTA size="md">GET MY AD SCAN FOR $97</CTA>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-[#0D1B2A] text-white py-16 md:py-20">
        <div className="max-w-[900px] mx-auto px-5 md:px-8">
          <div
            className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #F2B705 0%, #E0A800 100%)",
              color: "#0D1B2A",
            }}
          >
            <ShieldCheck className="h-16 w-16 mx-auto mb-4" />
            <div className="text-xs font-black tracking-[0.25em] uppercase mb-2">
              Iron-Clad 100% Money-Back Guarantee
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
              If We Don&rsquo;t Find <span style={{ color: RED }}>3 Real Problems</span> Costing You Money, You Pay Nothing.
            </h2>
            <p className="text-base md:text-lg text-[#0D1B2A]/80 max-w-2xl mx-auto">
              We&rsquo;ll refund your $97 in full, no questions asked. We&rsquo;ve never had to.
            </p>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-[#F7F8FA] py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div className="text-center mb-10">
            <div
              className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-3"
              style={{ color: ACCENT }}
            >
              Operators We&rsquo;ve Audited
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0D1B2A] leading-tight">
              Real Shops. Real Leaks. Real Money Recovered.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                quote:
                  "They found $4,200/mo in wasted Google Ads spend in our first scan. Paid for itself 40x over in month one.",
                name: "Owner, Pure Plumbing &amp; Air",
                metric: "+40% YoY",
              },
              {
                quote:
                  "Turns out we were missing 31% of inbound calls after 5pm. Nobody had ever told us. Game changer.",
                name: "GM, Regional HVAC Group",
                metric: "31% missed calls",
              },
              {
                quote:
                  "Our GBP was scored 42/100. Six weeks later we&rsquo;re #1 in the 3-pack for our zip. Worth $97 alone.",
                name: "Owner, Family Plumbing Co.",
                metric: "#1 in 3-pack",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm"
              >
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-current" style={{ color: GOLD }} />
                  ))}
                </div>
                <p
                  className="text-[#1F2937] font-medium mb-4 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
                />
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white font-bold text-xs"
                  style={{ background: "#2E7D86" }}
                >
                  {t.metric}
                </div>
                <div
                  className="text-sm text-[#6B7280] mt-3"
                  dangerouslySetInnerHTML={{ __html: t.name }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Order */}
      <section id="order" className="bg-[#0D1B2A] py-16 md:py-24 text-white">
        <div className="max-w-[820px] mx-auto px-5 md:px-8">
          <div className="text-center mb-10">
            <div
              className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-3"
              style={{ color: GOLD }}
            >
              Claim Your Spot
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-3 leading-tight">
              The Local Lead Ad Scan
            </h2>
            <p className="text-white/70 text-lg">
              Only 10 scans accepted per week to keep quality high.
            </p>
          </div>

          <div className="bg-white text-[#0D1B2A] rounded-2xl overflow-hidden shadow-2xl border-4" style={{ borderColor: GOLD }}>
            <div className="px-6 md:px-10 py-8 md:py-10">
              <div className="text-center mb-6">
                <div className="text-sm font-bold uppercase tracking-wider text-[#6B7280] mb-2">
                  Today&rsquo;s Investment
                </div>
                <div className="flex items-baseline justify-center gap-4">
                  <span className="text-2xl text-[#6B7280] line-through font-bold">$297</span>
                  <span className="text-6xl md:text-7xl font-black" style={{ color: RED }}>
                    $97
                  </span>
                </div>
                <div className="text-sm text-[#6B7280] mt-2">One-time. No subscription. Yours to keep.</div>
              </div>

              <ul className="space-y-3 mb-8 max-w-md mx-auto">
                <Check>Full 5-channel forensic audit</Check>
                <Check>Scored report (0&ndash;100 per channel)</Check>
                <Check>Dollar value of waste identified</Check>
                <Check>30-day prioritized action plan</Check>
                <Check>100% money-back guarantee</Check>
              </ul>

              <div className="text-center">
                <a
                  href="https://buy.stripe.com/test_placeholder"
                  className="inline-flex items-center justify-center gap-3 w-full rounded-md bg-[#C0392B] hover:bg-[#a4301f] transition-colors text-white font-black uppercase tracking-wide px-6 py-5 md:py-6 text-lg md:text-2xl shadow-[0_18px_45px_-12px_rgba(192,57,43,0.75)]"
                >
                  <Lock className="h-5 w-5" />
                  YES &mdash; START MY AD SCAN
                </a>
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#6B7280]">
                  <Lock className="h-3 w-3" /> Secure checkout. Delivered in 72 hours.
                </div>
              </div>
            </div>
            <div className="bg-[#F7F8FA] border-t border-[#E5E7EB] px-6 py-4 text-center text-sm text-[#475569]">
              Prefer to talk first? <Link to="/contact" className="font-bold underline" style={{ color: ACCENT }}>Book a 15-min call</Link>.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[820px] mx-auto px-5 md:px-8">
          <div className="text-center mb-10">
            <div
              className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-3"
              style={{ color: ACCENT }}
            >
              Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0D1B2A]">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Why is this only $97?",
                a: "Because once you see how we work, a percentage of operators ask us to fix what we found. The Ad Scan is our front door. It stands on its own value either way.",
              },
              {
                q: "Do I need to give you my ad account logins?",
                a: "Yes — read-only access to Google Ads, Meta Ads Manager, GBP, and your call tracking. We send a secure access request. We never change anything.",
              },
              {
                q: "How long does it take?",
                a: "72 hours from the moment we have access. You get a PDF report plus a 20-minute Loom walkthrough.",
              },
              {
                q: "What if I don&rsquo;t run Facebook ads (or Google ads)?",
                a: "We still audit every other channel and tell you whether adding the missing one is worth it for your market.",
              },
              {
                q: "What&rsquo;s your guarantee again?",
                a: "If we don&rsquo;t find at least 3 real, fixable problems costing you money, we refund the $97. Simple.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group bg-[#F7F8FA] border border-[#E5E7EB] rounded-lg p-5 open:shadow-md transition-shadow"
              >
                <summary
                  className="cursor-pointer list-none font-extrabold text-[#0D1B2A] text-lg flex items-start justify-between gap-4"
                  dangerouslySetInnerHTML={{ __html: f.q }}
                />
                <p
                  className="mt-3 text-[#475569] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: f.a }}
                />
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#C0392B] text-white py-14 md:py-20">
        <div className="max-w-[900px] mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
            Stop Guessing. Find The Leaks. <br className="hidden md:block" />
            Keep More Of Every Dollar You Spend.
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            $97 today. $297 next week. 100% guarantee either way.
          </p>
          <a
            href="#order"
            className="inline-flex items-center justify-center gap-3 rounded-md bg-white text-[#C0392B] hover:bg-[#0D1B2A] hover:text-white transition-colors font-black uppercase tracking-wide px-10 py-5 md:py-6 text-lg md:text-2xl shadow-2xl ring-2 ring-white/30"
          >
            CLAIM MY $97 AD SCAN
            <ArrowRight className="h-6 w-6" />
          </a>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-white/80">
            <Phone className="h-4 w-4" /> Questions? <Link to="/contact" className="underline font-bold ml-1">Talk to us</Link>
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="bg-[#0D1B2A] text-white/60 text-center text-xs py-6 px-4">
        &copy; {new Date().getFullYear()} DemandStream Digital. Plumbing &amp; HVAC growth marketing. Dallas, TX.
      </footer>
    </div>
  );
}
