import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicePillars } from "@/components/sections/ServicePillars";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { StatsBand } from "@/components/sections/StatsBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { BrandVideo } from "@/components/sections/BrandVideo";
import { HomeFAQ, homeFaqJsonLd } from "@/components/sections/HomeFAQ";
import { EngineerSpotlight } from "@/components/sections/EngineerSpotlight";
import { SITE } from "@/config/site";
import surveyImg from "@/assets/process-survey.jpg";
import installImg from "@/assets/process-install.jpg";
import recycleImg from "@/assets/process-recycle.jpg";

const homeProcess = [
  { n: "01", title: "Free site survey", body: "We visit, measure and recommend — no obligation, no pressure.", image: surveyImg },
  { n: "02", title: "Fit & install", body: "OFTEC engineers install your new tank to spec — usually in a day.", image: installImg },
  { n: "03", title: "Recycle & certify", body: "We remove and recycle your old tank, then hand over full paperwork.", image: recycleImg },
];

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
        homeFaqJsonLd,
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
    <ProcessTimeline
      eyebrow="How it works"
      title="From first call to fresh tank — in three steps."
      steps={homeProcess}
      withImages
    />
    <BenefitsGrid />
    <BrandVideo />
    <StatsBand />
    <Testimonials />
    <EngineerSpotlight />
    <HomeFAQ />
    <CTASection />
  </Layout>
);

export default Index;
