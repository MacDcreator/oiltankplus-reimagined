## Polish Pass: Micro-animations, Home FAQ, and Brand Video

Tighten the site's feel with subtle motion, add a homepage FAQ, and bring back the brand video embed from the original site — all within the existing Refined Teal + Orange system.

### 1. Micro-animations (subtle, brand-appropriate)

Use Tailwind keyframes already in `tailwind.config.ts` plus a few additions. No new libraries.

- **Scroll reveals**: lightweight `useInView` hook (IntersectionObserver) → adds `animate-fade-in` with small stagger to section headings, cards, timeline steps. Respects `prefers-reduced-motion`.
- **Hero**: gentle gradient drift on the overlay, eyebrow fade-in, headline word-by-word fade (200ms stagger), CTA settle.
- **Service pillar / benefit cards**: refined `hover-lift` — soft shadow bloom, icon tile tilts ~3°, arrow nudges right, border tints to `accent/40`.
- **Buttons**: CTA gets a slow shimmer on hover (gradient sweep) and a press-down on `:active`.
- **Stats band**: numbers count up when in view.
- **Process timeline**: step number circles pulse-in; connecting line draws across on reveal.
- **Header**: shadow + backdrop-blur fades in once scrolled past 16px (currently abrupt).
- **Accordion chevron**: rotates with custom easing to match the design system's `--ease-out-soft`.

### 2. Homepage FAQ Section

Reuse `FAQAccordion` so styling stays consistent. Place it between `Testimonials` and the final `CTASection`.

Curated top-of-funnel questions covering all services so it earns FAQ rich snippets:
- How quickly can you install a new oil tank?
- Are your engineers OFTEC registered?
- Do you cover my area?
- Do you remove and recycle my old tank?
- How much does a new oil tank cost?
- Do you work on commercial sites and fuel farms?
- What warranty comes with a new tank?

Add `FAQPage` JSON-LD on the home page (extend the existing `jsonLd` array in `src/pages/Index.tsx`) for SEO.

Service pages already have FAQs — leave those as-is.

### 3. YouTube Video Embed

The original site embeds `https://www.youtube.com/embed/LNLEMh_asw8`. Bring it back as a new `BrandVideo` section.

- New component: `src/components/sections/BrandVideo.tsx`
- Lightweight facade pattern: render the YouTube poster (`https://i.ytimg.com/vi/LNLEMh_asw8/maxresdefault.jpg`) with a branded play button. Click → swap in the iframe (`?autoplay=1`). Keeps Lighthouse score intact.
- Layout: 16:9 framed card with teal gradient border, soft shadow, eyebrow "See us at work", headline "A day with the OilTanksPlus team.", short supporting line.
- Placement: on home, between `BenefitsGrid` and `StatsBand`. Also surface on `/about`.

### 4. Polish odds & ends

- Add `scroll-mt-24` to anchor targets so deep links don't tuck under sticky header.
- Tighten section spacing on mobile (`section-pad` → `py-16 md:py-24 lg:py-28`).
- Footer: subtle hover underline grow on links (`story-link` utility).
- Sticky mobile CTA: slide-up entrance, hide on scroll-down/show on scroll-up.

### Files

**New**
- `src/hooks/useInView.ts`
- `src/components/sections/BrandVideo.tsx`
- `src/components/sections/HomeFAQ.tsx` (thin wrapper around `FAQAccordion` with the curated list + JSON-LD data)

**Edited**
- `src/index.css` — add shimmer, count-up, line-draw keyframes; reduced-motion guard
- `tailwind.config.ts` — register new animations
- `src/pages/Index.tsx` — insert `BrandVideo`, `HomeFAQ`; extend JSON-LD with `FAQPage`
- `src/pages/About.tsx` — insert `BrandVideo`
- `src/components/sections/Hero.tsx` — staggered reveal
- `src/components/sections/ServicePillars.tsx`, `BenefitsGrid.tsx`, `ProcessTimeline.tsx`, `StatsBand.tsx`, `Testimonials.tsx` — apply `useInView` reveals + card polish
- `src/components/layout/Header.tsx` — scroll-aware shadow
- `src/components/layout/StickyMobileCTA.tsx` — scroll direction behaviour
- `src/components/ui/button.tsx` — shimmer on `cta`/`hero` variants

### Out of scope
No content rewrites, no new pages, no backend, no library additions.