import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { QuoteStepper } from "@/components/quote/QuoteStepper";

const QuotePage = () => (
  <Layout>
    <Seo
      title="Get a Free Oil Tank Quote"
      description="Tell us about your project in 4 quick steps and we'll send you a free, no-obligation oil tank quote."
      path="/quote"
    />
    <Hero
      eyebrow="Free quote"
      title={<>A clear quote, in <span className="text-accent">four short steps.</span></>}
      subtitle="No pressure. No call-back chains. Just an honest price from real engineers."
      compact
    />
    <section className="section-pad">
      <div className="container-prose max-w-3xl">
        <QuoteStepper />
      </div>
    </section>
  </Layout>
);

export default QuotePage;
