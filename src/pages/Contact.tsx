import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { SITE } from "@/config/site";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().min(5).max(1000),
});

const ContactPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) { setError("Please check the form and try again."); return; }
    const { name, email, phone, message } = parsed.data;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone ?? ""}\n\n${message}`;
    window.location.href = `${SITE.emailHref}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true); setError(null);
  };

  return (
    <Layout>
      <Seo title="Contact Us" description="Get in touch with Oil Tanks Plus. Call, email or send us a message — we'll get back to you fast." path="/contact" />
      <Hero
        eyebrow="Contact us"
        title={<>Talk to a <span className="text-accent">real engineer.</span></>}
        subtitle="No call centres. No bots. Just helpful people who know oil tanks."
        compact
      />
      <section className="section-pad">
        <div className="container-prose grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { icon: Phone, title: "Phone", value: SITE.phone, href: SITE.phoneHref },
              { icon: Mail, title: "Email", value: SITE.email, href: SITE.emailHref },
              { icon: Clock, title: "Hours", value: SITE.hours },
              { icon: MapPin, title: "Coverage", value: "All of the United Kingdom" },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-5 rounded-2xl bg-card border border-border p-6 shadow-card">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent shrink-0"><c.icon className="size-5" /></div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</div>
                  {c.href ? <a href={c.href} className="text-lg font-display font-semibold text-primary-deep hover:text-accent">{c.value}</a> : <div className="text-lg font-display font-semibold text-primary-deep">{c.value}</div>}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-border p-8 shadow-card space-y-5">
            <h2 className="text-2xl font-display font-semibold text-primary-deep">Send a message</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label htmlFor="name">Name</Label><Input id="name" name="name" required maxLength={80} className="mt-2 h-12 rounded-xl" /></div>
              <div><Label htmlFor="phone">Phone (optional)</Label><Input id="phone" name="phone" type="tel" maxLength={20} className="mt-2 h-12 rounded-xl" /></div>
            </div>
            <div><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required maxLength={120} className="mt-2 h-12 rounded-xl" /></div>
            <div><Label htmlFor="message">Message</Label><Textarea id="message" name="message" required rows={5} maxLength={1000} className="mt-2 rounded-xl" /></div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            {sent && <p className="text-sm text-trust">Opening your email client…</p>}
            <Button type="submit" variant="cta" size="lg" className="w-full">Send message</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
