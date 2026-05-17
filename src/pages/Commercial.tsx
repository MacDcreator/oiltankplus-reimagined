import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CTASection } from "@/components/sections/CTASection";
import { useInView } from "@/hooks/useInView";
import commercialImg from "@/assets/commercial-tanks.jpg";
import installImg from "@/assets/process-install.jpg";
import cleaningImg from "@/assets/service-cleaning.jpg";
import polishingImg from "@/assets/service-polishing.jpg";
import pumpoutImg from "@/assets/service-pumpout.jpg";
import servicingImg from "@/assets/service-servicing.jpg";
import decommImg from "@/assets/service-decommissioning.jpg";
import interceptorImg from "@/assets/service-interceptor.jpg";
import { ArrowUpRight } from "lucide-react";

const services = [
  { id: "installation", title: "Tank Installations", body: "From single tanks to multi-tank farms — site-built or pre-fabricated, fully compliant.", image: installImg },
  { id: "decommissioning", title: "Tank Decommissioning", body: "Safe, certified decommissioning for sites coming offline, with full documentation.", image: decommImg },
  { id: "cleaning", title: "Tank Cleaning", body: "Internal cleaning to remove sludge, water and contamination — keeping fuel quality high.", image: cleaningImg },
  { id: "pump-out", title: "Fuel Pump Out", body: "Rapid fuel removal and safe transfer for emergency or planned works.", image: pumpoutImg },
  { id: "polishing", title: "Fuel Polishing", body: "On-site filtration and polishing to restore fuel to a clean, usable spec.", image: polishingImg },
  { id: "servicing", title: "Servicing & Inspection", body: "Scheduled servicing and statutory inspections to keep your site compliant.", image: servicingImg },
  { id: "interceptor", title: "Interceptor Maintenance", body: "Environmental services — interceptor cleaning and compliance for forecourts and yards.", image: interceptorImg },
];

const CommercialPage = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Layout>
      <Seo
        title="Commercial Oil Tanks & Servicing"
        description="UK-wide commercial oil tank installation, cleaning, fuel polishing, decommissioning, interceptor maintenance and servicing. Trusted by farms, fleets and industrial sites."
        path="/commercial-oil-tanks"
        jsonLd={services.map((s) => ({
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description: s.body,
          areaServed: "United Kingdom",
          provider: { "@type": "LocalBusiness", name: "Oil Tanks Plus" },
        }))}
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
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">Seven specialisms, one trusted team.</h2>
            <p className="mt-4 text-lg text-muted-foreground">A full turnkey commercial service — from the first survey to long-term maintenance.</p>
          </div>
          <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                id={s.id}
                className={`group hover-lift relative flex flex-col overflow-hidden rounded-2xl bg-card border border-border/60 shadow-card reveal-up ${inView ? "is-visible" : ""}`}
                style={{ transitionDelay: inView ? `${i * 80}ms` : "0ms" }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-display font-semibold text-primary-deep">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.body}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Enquire <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Need a commercial site quote?" body="Tell us about your site and we'll arrange a survey at a time that suits operations." />
    </Layout>
  );
};

export default CommercialPage;
