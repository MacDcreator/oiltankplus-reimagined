import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicePillars } from "@/components/sections/ServicePillars";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { StatsBand } from "@/components/sections/StatsBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { SITE } from "@/config/site";

const Index = () => (
  <Layout>
    <Seo
      title={`${SITE.name} — UK's Leading Oil Tank Installation & Replacement`}
      description={SITE.description}
      path="/"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE.name,
          description: SITE.description,
          url: SITE.url,
          telephone: SITE.phone,
          email: SITE.email,
          areaServed: "United Kingdom",
          priceRange: "££",
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE.name,
          url: SITE.url,
        },
      ]}
    />
    <Hero
      title={
        <>
          The UK's most trusted <span className="text-accent">oil tank</span> installers.
        </>
      }
      subtitle="OFTEC-registered specialists for domestic and commercial oil tanks. Survey, supply, install, recycle — one calm, careful team across the UK."
      secondaryCta={{ label: "Explore our services", to: "/oil-tank-installation" }}
    />
    <TrustStrip />
    <ServicePillars />
    <BenefitsGrid />
    <StatsBand />
    <Testimonials />
    <CTASection />
  </Layout>
);

export default Index;
