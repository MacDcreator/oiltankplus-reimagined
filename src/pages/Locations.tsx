import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { COUNTIES, REGIONS } from "@/data/locations";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

const LocationsPage = () => {
  const [q, setQ] = useState("");
  const counties = COUNTIES.filter(c => c.toLowerCase().includes(q.toLowerCase()));

  return (
    <Layout>
      <Seo
        title="UK Coverage & Locations"
        description="Oil Tanks Plus covers the whole of the UK. Search by county or region to confirm we serve your area."
        path="/locations"
      />
      <Hero
        eyebrow="Nationwide coverage"
        title={<>From Cornwall to <span className="text-accent">Aberdeen.</span></>}
        subtitle="One trusted team, the whole UK. Find your county or region below."
        compact
      />

      <section className="section-pad">
        <div className="container-prose grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">Search</span>
            <h2 className="mt-3 text-3xl font-display font-semibold leading-tight">Type a county or region</h2>
            <div className="relative mt-5 max-w-sm">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. Devon" className="pl-11 h-12 rounded-xl" />
            </div>
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Regions</h3>
              <ul className="mt-4 grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                {REGIONS.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-foreground/80">
                    <MapPin className="size-3.5 text-accent" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Counties we cover</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {counties.map((c) => (
                <div key={c} className="px-4 py-3 rounded-xl bg-card border border-border text-sm text-foreground/85 hover:border-accent/50 hover:bg-accent-soft transition-colors">
                  {c}
                </div>
              ))}
              {counties.length === 0 && <p className="text-muted-foreground col-span-full">No matches — but we likely still cover you. <a className="text-accent" href="/contact">Get in touch</a>.</p>}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Confirm coverage at your postcode." body="Send us your postcode for a fast, friendly answer and a free quote." />
    </Layout>
  );
};

export default LocationsPage;
