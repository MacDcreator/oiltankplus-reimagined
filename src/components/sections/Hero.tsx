import { Link } from "react-router-dom";
import { ArrowRight, Phone, ShieldCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import heroImg from "@/assets/hero-home.jpg";

interface HeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  image?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  compact?: boolean;
}

export const Hero = ({
  eyebrow = "OFTEC registered • Nationwide UK",
  title,
  subtitle,
  image = heroImg,
  primaryCta = { label: "Get a free quote", to: "/quote" },
  secondaryCta,
  compact = false,
}: HeroProps) => {
  return (
    <section className={`relative isolate overflow-hidden ${compact ? "min-h-[58vh]" : "min-h-[88vh]"} flex items-end`}>
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-fade-in-slow"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(184_55%_38%/.18),transparent_60%)]" aria-hidden />

      <div className="relative container-prose pt-32 pb-20 lg:pb-28 w-full">
        <div className="max-w-3xl text-white animate-fade-in">
          <p className="eyebrow text-accent">
            <span className="inline-block size-1.5 rounded-full bg-accent" />
            {eyebrow}
          </p>
          <h1 className="mt-5 text-white font-display font-semibold text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl tracking-[-0.02em]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed">{subtitle}</p>
          )}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to={primaryCta.to}>
                {primaryCta.label} <ArrowRight className="size-4" />
              </Link>
            </Button>
            {secondaryCta ? (
              <Button asChild variant="ghostLight" size="xl">
                <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
              </Button>
            ) : (
              <Button asChild variant="ghostLight" size="xl">
                <a href={SITE.phoneHref}>
                  <Phone className="size-4" /> {SITE.phone}
                </a>
              </Button>
            )}
          </div>
          {!compact && (
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 max-w-2xl">
              {[
                { icon: ShieldCheck, label: "OFTEC Registered" },
                { icon: Award, label: "Made in Britain" },
                { icon: ShieldCheck, label: "25+ Years" },
                { icon: Award, label: "5★ Trustpilot" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-sm text-white/85">
                  <b.icon className="size-4 text-accent shrink-0" />
                  <span className="font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
