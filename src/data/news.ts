export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readMins: number;
}

export const NEWS: NewsItem[] = [
  { slug: "bunded-vs-single-skin", title: "Bunded vs single skin: which oil tank do you actually need?", excerpt: "A clear, jargon-free guide to the regulations, the risks, and how to decide between the two main tank types.", date: "2025-03-12", category: "Buying Guide", readMins: 5 },
  { slug: "winter-oil-tank-checklist", title: "Your winter oil tank checklist", excerpt: "Five quick checks to keep your tank reliable through the coldest months — and one easy mistake to avoid.", date: "2025-02-04", category: "Maintenance", readMins: 3 },
  { slug: "oftec-regulations-2025", title: "OFTEC regulations explained: what changed in 2025", excerpt: "We break down the latest OFTEC guidance so homeowners know exactly what's expected of a compliant install.", date: "2025-01-22", category: "Regulations", readMins: 6 },
  { slug: "tank-life-expectancy", title: "How long should an oil tank really last?", excerpt: "Plastic vs steel, bunded vs single skin — and the warning signs that mean it's time for a replacement.", date: "2024-12-08", category: "Buying Guide", readMins: 4 },
];
