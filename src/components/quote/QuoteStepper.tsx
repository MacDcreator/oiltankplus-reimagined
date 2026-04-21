import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { quoteSchema, SERVICE_OPTIONS, type QuoteFormValues } from "./schema";
import { SITE } from "@/config/site";

const steps = ["What you need", "Tank details", "Location", "Your details"] as const;

const Choice = ({ active, onClick, label, desc }: { active: boolean; onClick: () => void; label: string; desc?: string }) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "text-left rounded-2xl border-2 p-5 transition-all",
      active ? "border-accent bg-accent-soft shadow-card" : "border-border bg-card hover:border-primary/30",
    )}
  >
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="font-semibold text-primary-deep">{label}</div>
        {desc && <div className="text-sm text-muted-foreground mt-1">{desc}</div>}
      </div>
      <div className={cn("size-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5", active ? "border-accent bg-accent text-white" : "border-border")}>
        {active && <Check className="size-3" />}
      </div>
    </div>
  </button>
);

export const QuoteStepper = () => {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    mode: "onTouched",
    defaultValues: {
      service: undefined as unknown as QuoteFormValues["service"],
      tankType: "unsure",
      capacity: "unsure",
      propertyType: "domestic",
      postcode: "",
      name: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  const { watch, setValue, register, formState: { errors }, handleSubmit, trigger } = form;
  const v = watch();

  const next = async () => {
    const fields: (keyof QuoteFormValues)[][] = [
      ["service"],
      ["tankType", "capacity", "propertyType"],
      ["postcode"],
      ["name", "email", "phone"],
    ];
    const ok = await trigger(fields[step]);
    if (ok) setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const back = () => setStep((s) => Math.max(0, s - 1));

  const onSubmit = (data: QuoteFormValues) => {
    // mailto fallback — easily upgradable to backend later
    const body = `Service: ${data.service}\nTank type: ${data.tankType}\nCapacity: ${data.capacity}\nProperty: ${data.propertyType}\nPostcode: ${data.postcode}\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nNotes:\n${data.notes ?? ""}`;
    const href = `${SITE.emailHref}?subject=${encodeURIComponent("Quote request from website")}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setDone(true);
  };

  if (done) {
    return (
      <div className="rounded-3xl bg-card border border-border p-10 text-center shadow-card">
        <div className="mx-auto size-16 rounded-full bg-trust/10 text-trust flex items-center justify-center">
          <CheckCircle2 className="size-8" />
        </div>
        <h2 className="mt-6 text-3xl font-display font-semibold text-primary-deep">Thanks — we've got your details.</h2>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">A member of our team will be in touch shortly. For anything urgent, call us on <a className="text-accent font-semibold" href={SITE.phoneHref}>{SITE.phone}</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl bg-card border border-border shadow-card overflow-hidden">
      {/* Progress */}
      <div className="bg-gradient-soft border-b border-border p-6">
        <div className="flex items-center justify-between gap-2">
          {steps.map((label, i) => (
            <div key={label} className="flex-1 flex items-center gap-2 last:flex-none">
              <div className={cn("flex items-center gap-2", i > step && "opacity-50")}>
                <div className={cn("size-7 rounded-full text-xs font-semibold flex items-center justify-center", i < step ? "bg-trust text-white" : i === step ? "bg-accent text-white" : "bg-secondary text-muted-foreground")}>
                  {i < step ? <Check className="size-3.5" /> : i + 1}
                </div>
                <span className="hidden sm:inline text-xs font-semibold text-primary-deep">{label}</span>
              </div>
              {i < steps.length - 1 && <div className={cn("flex-1 h-px", i < step ? "bg-trust" : "bg-border")} />}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-10 min-h-[380px]">
        {step === 0 && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-display font-semibold text-primary-deep">What do you need?</h3>
            <p className="text-muted-foreground mt-1">Pick the option that best describes your project.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {SERVICE_OPTIONS.map((o) => (
                <Choice key={o.value} active={v.service === o.value} onClick={() => setValue("service", o.value, { shouldValidate: true })} label={o.label} desc={o.desc} />
              ))}
            </div>
            {errors.service && <p className="mt-3 text-sm text-destructive">{errors.service.message}</p>}
          </div>
        )}

        {step === 1 && (
          <div className="animate-fade-in space-y-8">
            <div>
              <h3 className="text-2xl font-display font-semibold text-primary-deep">Tank details</h3>
              <p className="text-muted-foreground mt-1">Don't worry if you're unsure — we'll confirm at survey.</p>
            </div>
            <div>
              <Label className="text-sm font-semibold">Tank type</Label>
              <div className="mt-3 grid sm:grid-cols-3 gap-3">
                {(["bunded", "single-skin", "unsure"] as const).map((t) => (
                  <Choice key={t} active={v.tankType === t} onClick={() => setValue("tankType", t)} label={t === "unsure" ? "Not sure" : t === "bunded" ? "Bunded" : "Single skin"} />
                ))}
              </div>
            </div>
            <div>
              <Label className="text-sm font-semibold">Capacity (litres)</Label>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-5 gap-3">
                {(["<1500", "1500-2500", "2500-5000", ">5000", "unsure"] as const).map((c) => (
                  <Choice key={c} active={v.capacity === c} onClick={() => setValue("capacity", c)} label={c === "unsure" ? "Not sure" : c} />
                ))}
              </div>
            </div>
            <div>
              <Label className="text-sm font-semibold">Property type</Label>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                {(["domestic", "commercial"] as const).map((p) => (
                  <Choice key={p} active={v.propertyType === p} onClick={() => setValue("propertyType", p)} label={p[0].toUpperCase() + p.slice(1)} />
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-display font-semibold text-primary-deep">Where is the property?</h3>
            <p className="text-muted-foreground mt-1">Just a postcode — we cover the whole UK.</p>
            <div className="mt-6 max-w-sm">
              <Label htmlFor="postcode" className="text-sm font-semibold">Postcode</Label>
              <Input id="postcode" placeholder="e.g. EX1 1AB" {...register("postcode")} className="mt-2 h-12 rounded-xl uppercase" />
              {errors.postcode && <p className="mt-2 text-sm text-destructive">{errors.postcode.message}</p>}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in space-y-5">
            <div>
              <h3 className="text-2xl font-display font-semibold text-primary-deep">Your details</h3>
              <p className="text-muted-foreground mt-1">We'll only use these to send you your quote.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name" className="text-sm font-semibold">Name</Label>
                <Input id="name" {...register("name")} className="mt-2 h-12 rounded-xl" />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-semibold">Phone</Label>
                <Input id="phone" type="tel" {...register("phone")} className="mt-2 h-12 rounded-xl" />
                {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
              <Input id="email" type="email" {...register("email")} className="mt-2 h-12 rounded-xl" />
              {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="notes" className="text-sm font-semibold">Notes (optional)</Label>
              <Textarea id="notes" rows={4} {...register("notes")} className="mt-2 rounded-xl" placeholder="Anything that would help us prepare an accurate quote." />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 px-6 sm:px-10 py-5 border-t border-border bg-secondary/30">
        <Button type="button" variant="ghost" onClick={back} disabled={step === 0}>
          <ArrowLeft className="size-4" /> Back
        </Button>
        {step < steps.length - 1 ? (
          <Button type="button" variant="cta" onClick={next}>Continue <ArrowRight className="size-4" /></Button>
        ) : (
          <Button type="submit" variant="cta">Send my quote request <ArrowRight className="size-4" /></Button>
        )}
      </div>
    </form>
  );
};
