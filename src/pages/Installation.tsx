import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import engineerImg from "@/assets/engineer-at-work.jpg";

const faqs = [
  { q: "How long does an oil tank installation take?", a: "Most domestic installs are completed in a single day. Larger or more complex sites can take 1–2 days. We'll confirm timings at survey." },
  { q: "Do you remove my old tank?", a: "Yes — we can decommission, drain, remove and responsibly recycle your existing tank as part of the same visit." },
  { q: "Are your engineers OFTEC registered?", a: "Every engineer is fully OFTEC registered and insured. Your installation will be certified and compliant." },
  { q: "Where can my new tank be located?", a: "We'll advise on the best location during the free site survey, factoring in safety distances, access, ground conditions and aesthetics." },
  { q: "What warranty do tanks come with?", a: "Most plastic tanks come with a 10-year manufacturer warranty. Steel tanks vary by model — we'll outline the options in your quote." },
];

const InstallationPage = () => (
  <Layout>
    <Seo
      title="Domestic Oil Tank Installation"
      description="OFTEC-registered domestic oil tank installation across the UK. Free site survey, transparent pricing, all tanks made in Britain."
      path="/oil-tank-installation"
      jsonLd={{ "@context": "https://schema.org", "@type": "Service", name: "Domestic Oil Tank Installation", provider: { "@type": "LocalBusiness", name: "Oil Tanks Plus" }, areaServed: "United Kingdom" }}
    />
    <Hero
      eyebrow="Domestic installation"
      title={<>A new oil tank, <span className="text-accent">installed properly.</span></>}
      subtitle="From your free survey to the final certificate, our OFTEC engineers handle everything. Clean work. Clear pricing. Calm process."
      image={engineerImg}
      compact
    />
    <TrustStrip />
    <ProcessTimeline
      steps={[
        { n: "01", title: "Free survey", body: "We visit, measure, and recommend the right tank and location for your property." },
        { n: "02", title: "Transparent quote", body: "A clear, fixed quote — no hidden fees, no pressure. You take your time." },
        { n: "03", title: "Careful install", body: "Our OFTEC engineers install your tank to spec — usually in a single day." },
        { n: "04", title: "Recycle the old tank", body: "We decommission and responsibly recycle your old tank if needed." },
      ]}
    />
    <FAQAccordion items={faqs} />
    <CTASection title="Get a free, no-obligation install quote." />
  </Layout>
);

export default InstallationPage;
