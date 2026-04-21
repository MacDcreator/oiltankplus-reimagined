// Site-wide config: brand info, contact, navigation
export const SITE = {
  name: "Oil Tanks Plus",
  tagline: "The UK's Leading Oil Tank Installation & Replacement Company",
  description:
    "OFTEC-registered oil tank installation, replacement, disposal and commercial servicing across the UK. 25+ years of experience. Free quotes nationwide.",
  url: "https://www.oiltanksplus.co.uk",
  phone: "0333 222 4037",
  phoneHref: "tel:+443332224037",
  email: "sales@oiltanksplus.co.uk",
  emailHref: "mailto:sales@oiltanksplus.co.uk",
  hours: "Mon–Fri 8:00–17:30",
  address: {
    line1: "Head Office",
    region: "United Kingdom",
    postcode: "",
  },
} as const;

export const NAV = [
  { label: "Installations", href: "/oil-tank-installation" },
  { label: "Tank Disposal", href: "/oil-tank-disposal" },
  { label: "Tank Range", href: "/oil-tank-range" },
  { label: "Commercial", href: "/commercial-oil-tanks" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
] as const;
