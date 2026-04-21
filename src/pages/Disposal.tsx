import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CTASection } from "@/components/sections/CTASection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import disposalImg from "@/assets/disposal-recycling.jpg";
import { Leaf, Recycle, ShieldCheck } from "lucide-react";

const DisposalPage = () => (
  <Layout>
    <Seo
      title="Oil Tank Disposal & Recycling"
      description="Safe, compliant decommissioning, removal and recycling of old oil tanks across the UK. Environmentally responsible. Fully certified."
      path="/oil-tank-disposal"
    />
    <Hero
      eyebrow="Disposal & recycling"
      title={<>Out with the old — <span className="text-accent">responsibly.</span></>}
      subtitle="Decommissioning an oil tank is a regulated, hazardous job. We do it safely, cleanly and with full environmental compliance."
      image={disposalImg}
      compact
    />
    <TrustStrip />

    <section className="section-pad">
      <div className="container-prose grid lg:grid-cols-3 gap-6">
        {[
          { icon: ShieldCheck, t: "Fully compliant", b: "Every removal follows OFTEC and Environment Agency guidance, with documentation issued on completion." },
          { icon: Leaf, t: "Environment first", b: "Any residual fuel is recovered and reused. Tanks are stripped and recycled — not landfilled." },
          { icon: Recycle, t: "Replace at the same visit", b: "Combine disposal with a new install in one efficient visit, cutting cost and disruption." },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl bg-card border border-border/60 p-7 shadow-card">
            <div className="inline-flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent"><c.icon className="size-5" /></div>
            <h3 className="mt-5 text-lg font-display font-semibold text-primary-deep">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.b}</p>
          </div>
        ))}
      </div>
    </section>

    <ProcessTimeline
      eyebrow="Our removal process"
      title="Safe, clean, certified."
      steps={[
        { n: "01", title: "Site assessment", body: "We confirm tank type, location and any contamination risks." },
        { n: "02", title: "Drain & decommission", body: "Residual fuel safely recovered; tank made safe for handling." },
        { n: "03", title: "Remove", body: "Lifted out without damage to surroundings. Site left tidy." },
        { n: "04", title: "Recycle", body: "Tank stripped and recycled at certified facilities. Paperwork issued." },
      ]}
    />

    <CTASection title="Old tank coming out? Let's plan the safest route." />
  </Layout>
);

export default DisposalPage;
