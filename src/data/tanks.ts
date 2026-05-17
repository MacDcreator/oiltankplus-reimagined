export type TankCategory = "bunded" | "single-skinned" | "steel" | "fire-rated";

export interface TankOption {
  slug: string;
  name: string;
  type: "Bunded" | "Single Skin";
  material: "Plastic" | "Steel";
  capacityLitres: number;
  use: "Domestic" | "Commercial" | "Both";
  category: TankCategory;
  features: string[];
  description: string;
}

export const TANKS: TankOption[] = [
  { slug: "bunded-plastic-1200", name: "Bunded Plastic 1,200L", type: "Bunded", material: "Plastic", capacityLitres: 1200, use: "Domestic", category: "bunded", features: ["Integrally bunded", "10-yr warranty", "OFTEC OFS T100"], description: "A compact bunded plastic tank ideal for smaller domestic properties with limited space." },
  { slug: "bunded-plastic-2500", name: "Bunded Plastic 2,500L", type: "Bunded", material: "Plastic", capacityLitres: 2500, use: "Domestic", category: "bunded", features: ["Integrally bunded", "Lockable lid", "Made in UK"], description: "Our most popular domestic tank — generous capacity with a tidy footprint." },
  { slug: "bunded-plastic-5000", name: "Bunded Plastic 5,000L", type: "Bunded", material: "Plastic", capacityLitres: 5000, use: "Both", category: "bunded", features: ["Integrally bunded", "Heavy-duty", "BSI tested"], description: "High capacity bunded plastic tank suitable for larger homes and small commercial." },
  { slug: "bunded-plastic-1800", name: "Bunded Plastic 1,800L", type: "Bunded", material: "Plastic", capacityLitres: 1800, use: "Domestic", category: "bunded", features: ["Slim profile", "Easy install", "OFTEC compliant"], description: "Slim-profile bunded tank perfect for tight side passages." },

  { slug: "single-skin-plastic-1300", name: "Single Skin Plastic 1,300L", type: "Single Skin", material: "Plastic", capacityLitres: 1300, use: "Domestic", category: "single-skinned", features: ["Lightweight", "Cost-effective", "UV stabilised"], description: "Cost-effective single skin tank where bunding is not required by site survey." },
  { slug: "single-skin-plastic-2500", name: "Single Skin Plastic 2,500L", type: "Single Skin", material: "Plastic", capacityLitres: 2500, use: "Domestic", category: "single-skinned", features: ["Slimline option", "Easy fitment", "UV stabilised"], description: "Versatile single skin plastic tank for standard domestic settings." },

  { slug: "bunded-steel-3500", name: "Bunded Steel 3,500L", type: "Bunded", material: "Steel", capacityLitres: 3500, use: "Both", category: "steel", features: ["Powder coated", "Vandal resistant", "Long lifespan"], description: "Robust steel construction for properties that demand maximum durability." },
  { slug: "bunded-steel-9000", name: "Bunded Steel 9,000L", type: "Bunded", material: "Steel", capacityLitres: 9000, use: "Commercial", category: "steel", features: ["High flow outlets", "Lockable cabinet", "Made to order"], description: "Commercial-grade bunded steel tank for industrial and farm use." },
  { slug: "single-skin-steel-15000", name: "Single Skin Steel 15,000L", type: "Single Skin", material: "Steel", capacityLitres: 15000, use: "Commercial", category: "steel", features: ["Site-built option", "Custom fittings", "30+ yr life"], description: "Large-capacity steel tank for commercial fuel storage with full bund liner option." },

  { slug: "fire-rated-1200", name: "Fire Rated 1,200L", type: "Bunded", material: "Plastic", capacityLitres: 1200, use: "Domestic", category: "fire-rated", features: ["30-min fire protection", "Reduced clearance", "OFTEC OFS T200"], description: "Fire protected bunded tank — ideal for sites where boundary clearances are tight." },
  { slug: "fire-rated-2500", name: "Fire Rated 2,500L", type: "Bunded", material: "Plastic", capacityLitres: 2500, use: "Domestic", category: "fire-rated", features: ["60-min fire protection", "Steel casing", "Made in UK"], description: "Heavy-duty fire rated tank with steel-clad casing for superior protection." },
  { slug: "fire-rated-1800", name: "Fire Rated 1,800L", type: "Bunded", material: "Plastic", capacityLitres: 1800, use: "Domestic", category: "fire-rated", features: ["30-min fire protection", "Slim profile", "Compliant"], description: "Slim fire rated tank for properties close to buildings or boundaries." },
];

export const CATEGORIES: Array<{
  slug: TankCategory;
  name: string;
  short: string;
  description: string;
  benefits: string[];
  useCases: string[];
}> = [
  {
    slug: "bunded",
    name: "Bunded Oil Tanks",
    short: "Double-skinned peace of mind.",
    description:
      "Also known as double-skinned tanks, bunded oil tanks provide a built-in secondary containment layer that catches up to 110% of the tank's contents — protecting your property and the environment from leaks.",
    benefits: [
      "Required for most domestic UK installations",
      "Built-in 110% spill containment",
      "Up to 12-year manufacturer warranty",
      "Compliant with OFTEC OFS T100",
    ],
    useCases: ["Standard family homes", "Properties near watercourses", "New-build installations"],
  },
  {
    slug: "single-skinned",
    name: "Single Skinned Oil Tanks",
    short: "Lighter, simpler, cost-effective.",
    description:
      "Single skinned tanks are a streamlined, lower-cost option for sites where a site survey confirms bunding isn't required by regulation — typically smaller properties at low environmental risk.",
    benefits: [
      "Lower upfront cost than bunded",
      "Lighter and easier to position",
      "UV stabilised UK manufacture",
      "Slimline profiles available",
    ],
    useCases: ["Smaller domestic properties", "Replacements where bunding isn't mandated", "Low-risk sites"],
  },
  {
    slug: "steel",
    name: "Steel Oil Tanks",
    short: "Built to last decades.",
    description:
      "Powder-coated steel oil tanks combine industrial durability with vandal resistance — the right choice for commercial sites, farms and anywhere maximum lifespan matters.",
    benefits: [
      "30+ year lifespan with care",
      "Powder-coated weather protection",
      "Vandal and impact resistant",
      "Custom outlets and fittings",
    ],
    useCases: ["Commercial fuel storage", "Agricultural sites", "High-capacity industrial use"],
  },
  {
    slug: "fire-rated",
    name: "Fire Rated Oil Tanks",
    short: "30 or 60 minute fire protection.",
    description:
      "Fire rated tanks meet OFTEC OFS T200 with up to 60 minutes of fire protection — letting you safely install closer to buildings, boundaries and openings where regulations would otherwise require larger clearances.",
    benefits: [
      "30 or 60 minute fire protection",
      "Reduces required clearance distances",
      "Steel-clad protective casing",
      "OFTEC OFS T200 compliant",
    ],
    useCases: ["Tight side passages", "Close to boundaries or openings", "High fire-risk locations"],
  },
];
