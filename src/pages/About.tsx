import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { StatsBand } from "@/components/sections/StatsBand";
import { CTASection } from "@/components/sections/CTASection";
import engineerImg from "@/assets/engineer-at-work.jpg";

const AboutPage = () => (
  <Layout>
    <Seo
      title="About Oil Tanks Plus"
      description="A family-run, OFTEC-registered oil tank specialist with 25+ years of experience installing and servicing tanks across the UK."
      path="/about"
    />
    <Hero
      eyebrow="Our story"
      title={<>A family business, <span className="text-accent">built on trust.</span></>}
      subtitle="Twenty-five years installing oil tanks the right way — clean, careful and compliant — for thousands of UK homes and businesses."
      image={engineerImg}
      compact
    />
    <TrustStrip />

    <section className="section-pad">
      <div className="container-prose grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <span className="eyebrow">Who we are</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">Quietly competent. Genuinely helpful.</h2>
        </div>
        <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed">
          <p>Oil Tanks Plus started as a small family operation with one simple idea: do oil tank installations properly, every time, and treat each customer the way you'd want a relative treated.</p>
          <p>Twenty-five years on, that idea hasn't changed — but the team has grown into a UK-wide network of OFTEC-registered engineers who handle everything from a single garden tank to multi-tank commercial fuel farms.</p>
          <p>What's stayed the same is what matters: arrive when we say we will, leave the place tidier than we found it, and always be on the end of a phone if you need us.</p>
        </div>
      </div>
    </section>

    <StatsBand />

    <section className="section-pad">
      <div className="container-prose">
        <span className="eyebrow">What we stand for</span>
        <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight max-w-2xl">Three values that guide everything.</h2>
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {[
            { t: "Craft", b: "Every installation is treated as a piece of careful work — not a transaction. Detail matters." },
            { t: "Honesty", b: "Plain English quotes. Honest advice. If you don't need a job done, we'll tell you." },
            { t: "Care", b: "We work in your home or on your site. We'll always treat both with respect." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl bg-card border border-border/60 p-8 shadow-card">
              <h3 className="text-2xl font-display font-semibold text-primary-deep">{v.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default AboutPage;
