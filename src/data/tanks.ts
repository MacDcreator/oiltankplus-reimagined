export interface TankOption {
  slug: string;
  name: string;
  type: "Bunded" | "Single Skin";
  material: "Plastic" | "Steel";
  capacityLitres: number;
  use: "Domestic" | "Commercial" | "Both";
  features: string[];
  description: string;
}

export const TANKS: TankOption[] = [
  { slug: "bunded-plastic-1200", name: "Bunded Plastic 1,200L", type: "Bunded", material: "Plastic", capacityLitres: 1200, use: "Domestic", features: ["Integrally bunded", "10-yr warranty", "OFTEC OFS T100"], description: "A compact bunded plastic tank ideal for smaller domestic properties with limited space." },
  { slug: "bunded-plastic-2500", name: "Bunded Plastic 2,500L", type: "Bunded", material: "Plastic", capacityLitres: 2500, use: "Domestic", features: ["Integrally bunded", "Lockable lid", "Made in UK"], description: "Our most popular domestic tank — generous capacity with a tidy footprint." },
  { slug: "bunded-plastic-5000", name: "Bunded Plastic 5,000L", type: "Bunded", material: "Plastic", capacityLitres: 5000, use: "Both", features: ["Integrally bunded", "Heavy-duty", "BSI tested"], description: "High capacity bunded plastic tank suitable for larger homes and small commercial." },
  { slug: "single-skin-plastic-1300", name: "Single Skin Plastic 1,300L", type: "Single Skin", material: "Plastic", capacityLitres: 1300, use: "Domestic", features: ["Lightweight", "Cost-effective", "UV stabilised"], description: "Cost-effective single skin tank where bunding is not required by site survey." },
  { slug: "bunded-steel-3500", name: "Bunded Steel 3,500L", type: "Bunded", material: "Steel", capacityLitres: 3500, use: "Both", features: ["Powder coated", "Vandal resistant", "Long lifespan"], description: "Robust steel construction for properties that demand maximum durability." },
  { slug: "bunded-steel-9000", name: "Bunded Steel 9,000L", type: "Bunded", material: "Steel", capacityLitres: 9000, use: "Commercial", features: ["High flow outlets", "Lockable cabinet", "Made to order"], description: "Commercial-grade bunded steel tank for industrial and farm use." },
  { slug: "single-skin-steel-15000", name: "Single Skin Steel 15,000L", type: "Single Skin", material: "Steel", capacityLitres: 15000, use: "Commercial", features: ["Site-built option", "Custom fittings", "30+ yr life"], description: "Large-capacity steel tank for commercial fuel storage with full bund liner option." },
  { slug: "bunded-plastic-1800", name: "Bunded Plastic 1,800L", type: "Bunded", material: "Plastic", capacityLitres: 1800, use: "Domestic", features: ["Slim profile", "Easy install", "OFTEC compliant"], description: "Slim-profile bunded tank perfect for tight side passages." },
];
