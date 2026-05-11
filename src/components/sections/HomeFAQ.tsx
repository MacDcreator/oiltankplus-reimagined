import { FAQAccordion, type FaqItem } from "./FAQAccordion";

export const homeFaqs: FaqItem[] = [
  {
    q: "How quickly can you install a new oil tank?",
    a: "Most domestic installs are booked within 1–2 weeks of your survey and completed in a single day. Urgent leaks can usually be handled faster — call us and we'll do our best.",
  },
  {
    q: "Are your engineers OFTEC registered?",
    a: "Yes — every engineer is fully OFTEC registered, insured and experienced. Your install is certified and fully compliant with UK regulations.",
  },
  {
    q: "Do you cover my area?",
    a: "We're genuinely nationwide — from Cornwall to Aberdeen. Check our locations page or just call and we'll confirm coverage for your postcode.",
  },
  {
    q: "Do you remove and recycle my old tank?",
    a: "Absolutely. We can decommission, drain, remove and responsibly recycle your existing tank as part of the same visit — paperwork issued on completion.",
  },
  {
    q: "How much does a new oil tank cost?",
    a: "Prices vary by tank size, material and site access. After a free survey we'll give you a clear, fixed quote — no hidden costs, no pressure.",
  },
  {
    q: "Do you work on commercial sites and fuel farms?",
    a: "Yes. We install, service, polish, pump-out and decommission fuel for farms, fleets, schools and industrial sites across the UK.",
  },
  {
    q: "What warranty comes with a new tank?",
    a: "Most plastic tanks carry a 10-year manufacturer warranty. Steel tank warranties vary by model — we'll lay out the options in your quote.",
  },
];

export const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const HomeFAQ = () => (
  <FAQAccordion
    eyebrow="Common questions"
    title="Everything you wanted to ask."
    items={homeFaqs}
  />
);
