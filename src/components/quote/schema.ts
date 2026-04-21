import { z } from "zod";

export const quoteSchema = z.object({
  service: z.enum(["new-install", "replacement", "disposal", "commercial"]),
  tankType: z.enum(["bunded", "single-skin", "unsure"]),
  capacity: z.enum(["<1500", "1500-2500", "2500-5000", ">5000", "unsure"]),
  propertyType: z.enum(["domestic", "commercial"]),
  postcode: z.string().trim().min(2, "Enter a postcode").max(12, "Postcode is too long")
    .regex(/^[A-Za-z0-9 ]+$/, "Use letters, numbers and spaces only"),
  name: z.string().trim().min(2, "Tell us your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20)
    .regex(/^[0-9 +()-]+$/, "Numbers, spaces and + ( ) - only"),
  notes: z.string().trim().max(800).optional().or(z.literal("")),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;

export const SERVICE_OPTIONS = [
  { value: "new-install", label: "New installation", desc: "First-time oil tank for a property" },
  { value: "replacement", label: "Replacement", desc: "Replacing an older tank" },
  { value: "disposal", label: "Disposal only", desc: "Decommission and remove existing tank" },
  { value: "commercial", label: "Commercial / industrial", desc: "Larger sites or multiple tanks" },
] as const;
