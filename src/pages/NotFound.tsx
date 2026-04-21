import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Layout>
    <Seo title="Page not found" path="/404" />
    <section className="section-pad min-h-[60vh] grid place-items-center">
      <div className="container-prose text-center max-w-xl">
        <p className="eyebrow justify-center">Error 404</p>
        <h1 className="mt-4 text-6xl sm:text-7xl font-display font-semibold text-primary-deep">Page not found.</h1>
        <p className="mt-5 text-muted-foreground">The page you're looking for doesn't exist or has moved. Let's get you back on track.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild variant="cta" size="lg"><Link to="/">Back to home</Link></Button>
          <Button asChild variant="outline" size="lg"><Link to="/contact">Contact us</Link></Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFound;
