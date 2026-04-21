import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface FaqItem { q: string; a: string; }

interface FaqProps {
  eyebrow?: string;
  title?: string;
  items: FaqItem[];
}

export const FAQAccordion = ({ eyebrow = "FAQs", title = "Questions, answered.", items }: FaqProps) => (
  <section className="section-pad bg-secondary/30">
    <div className="container-prose">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">{title}</h2>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {items.map((it, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base sm:text-lg font-display font-semibold text-primary-deep hover:no-underline">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{it.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </section>
);
