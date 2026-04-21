import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";

interface CTASectionProps {
  title?: string;
  body?: string;
  primary?: { label: string; to: string };
}

export const CTASection = ({
  title = "Ready for a calm, professional quote?",
  body = "Most quotes are returned same-day. No obligation, no pressure — just clear answers from real engineers.",
  primary = { label: "Get a free quote", to: "/quote" },
}: CTASectionProps) => (
  <section className="section-pad">
    <div className="container-prose">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 sm:p-16 text-primary-foreground shadow-elevated">
        <div className="absolute -top-20 -right-20 size-72 rounded-full bg-accent/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-20 -left-10 size-72 rounded-full bg-primary-glow/20 blur-3xl" aria-hidden />
        <div className="relative max-w-3xl">
          <h2 className="text-white text-4xl sm:text-5xl font-display font-semibold leading-tight">{title}</h2>
          <p className="mt-5 text-white/85 text-lg leading-relaxed">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to={primary.to}>{primary.label} <ArrowRight className="size-4" /></Link>
            </Button>
            <Button asChild variant="ghostLight" size="xl">
              <a href={SITE.phoneHref}><Phone className="size-4" /> {SITE.phone}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
