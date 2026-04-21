import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CTASection } from "@/components/sections/CTASection";
import commercialImg from "@/assets/commercial-tanks.jpg";
import { Wrench, Trash2, Droplets, Filter, ClipboardCheck, ArrowDownToLine, ArrowUpRight } from "lucide-react";

const services = [
  { id: "installation", icon: Wrench, title: "Commercial Installation", body: "From single tanks to multi-tank farms — site-built or pre-fabricated, fully compliant." },
  { id: "decommissioning", icon: Trash2, title: "Decommissioning", body: "Safe, certified decommissioning for sites coming offline, with full documentation." },
  { id: "cleaning", icon: Droplets, title: "Tank Cleaning", body: "Internal cleaning to remove sludge, water and contamination — keeping fuel quality high." },
  { id: "pump-out", icon: ArrowDownToLine, title: "Fuel Pump Out", body: "Rapid fuel removal and safe transfer for emergency or planned works." },
  { id: "polishing", icon: Filter, title: "Fuel Polishing", body: "On-site filtration and polishing to restore fuel to a clean, usable spec." },
  { id: "servicing", icon: ClipboardCheck, title: "Servicing & Inspection", body: "Scheduled servicing and statutory inspections to keep your site compliant." },
];

const CommercialPage = () => (
  <Layout>
    <Seo
      title="Commercial Oil Tanks & Servicing"
      description="UK-wide commercial oil tank installation, cleaning, fuel polishing, decommissioning and servicing. Trusted by farms, fleets and industrial sites."
      path="/commercial-oil-tanks"
    />
    <Hero
      eyebrow="Commercial & industrial"
      title={<>Built for <span className="text-accent">demanding sites.</span></>}
      subtitle="Whether it's a single commercial tank or an entire fuel farm, our specialist team delivers compliant work with minimal disruption."
      image={commercialImg}
      compact
    />
    <TrustStrip />
    <section className="section-pad">
      <div className="container-prose">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">Commercial services</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">Six specialisms, one trusted team.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} id={s.id} className="hover-lift rounded-2xl bg-card border border-border/60 p-7 shadow-card group">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-display font-semibold text-primary-deep">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Enquire <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
    <CTASection title="Need a commercial site quote?" body="Tell us about your site and we'll arrange a survey at a time that suits operations." />
  </Layout>
);

export default CommercialPage;
