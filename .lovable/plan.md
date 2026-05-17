
# Plan — Premium "Framer-grade" redesign of Oil Tanks Plus

I crawled the live site (home, `/oil-tank-range`, `/commercial-oil-tanks`) and lined up everything missing in our build, then scoped a visual + motion upgrade to move us into Framer/Webflow territory without losing the calm, trustworthy tone.

## 1. Content gaps to close (from the real site)

**Tank Range page** — original has **4 distinct categories** (we currently only show a tank list grid):
- Bunded Oil Tanks
- Single Skinned Oil Tanks
- Steel Oil Tanks
- Fire Rated Oil Tanks

→ Restructure `/oil-tank-range` into a **category landing page** (4 large category cards with imagery + short description), then keep our filterable tank list lower on the page as "Explore individual models". Add 4 new category pages (`/oil-tank-range/bunded`, `/single-skinned`, `/steel`, `/fire-rated`) — each with hero, benefits, use-cases, models in that category, FAQ.

**Commercial page** — original has **7 services**, we have 6. Missing:
- Interceptor Maintenance & Cleaning (environmental services)

→ Add it as a 7th service card; expand each card with a real photo (not just an icon) like the original does.

**Header navigation** — currently flat links. Add a real **mega-menu** with dropdowns for:
- Oil Tank Range → 4 categories + "View all"
- Commercial → 7 services grouped (Install / Maintain / Decommission)
- About → About, Locations, News, Contact

## 2. "Framer/Webflow" feel — motion & visual upgrades

Today we have hover-lift cards + a couple of reveal-ups. To get to premium-tier we add a coherent motion system:

**Scroll-driven motion** (lightweight, CSS + IntersectionObserver, no heavy lib):
- Section eyebrows + headlines stagger-fade with a 60ms cascade
- Images scale from `1.05 → 1.0` and fade in as they enter viewport ("Ken Burns lite")
- Parallax-y depth on hero background + commercial/aerial photos (translateY with `transform` only, GPU-safe)
- Number counters in StatsBand already animate — add a subtle underline-grow on the section heading
- A thin "scroll progress" bar at the very top of the page in accent orange

**Micro-interactions**:
- Buttons get a magnetic hover (cursor pull within ~8px), plus existing shimmer
- Card hover: image inside zooms 1.04, arrow icon slides + rotates 8°, border lights up (we already have border + lift — extend with image zoom)
- Nav links: animated underline that draws left→right
- Mega-menu: fades + slides down 8px with backdrop blur
- Accordion FAQ: caret rotates with spring easing, content fades + height-grows
- Form inputs (quote stepper): floating labels, focus ring pulse

**Page transitions**: cross-fade + slight upward translate when route changes (using `AnimatePresence` from framer-motion which is already common; otherwise CSS-only via `key` on Layout).

**Reduced-motion**: all of the above respect `prefers-reduced-motion` (already wired in `index.css`).

## 3. Strategic imagery (the biggest visible upgrade)

Right now images are concentrated in the hero. Premium sites place a strong image every 1–2 sections. Plan:

| Section / page | New image | Source |
|---|---|---|
| Home — between ServicePillars and BenefitsGrid | Wide shot of installed bunded tank in garden | AI generate |
| Home — BenefitsGrid background | Soft blurred UK countryside | AI generate |
| Home — Process timeline | Inline photos per step (survey → install → recycle) | AI generate, 3 small |
| Home — before CTA | Engineer portrait, friendly | AI generate |
| Range page categories | 4 product-style photos per category | Reuse scraped + AI |
| Commercial — each of 7 service cards | Real photo per service (matching original) | Scrape originals where licensable + AI fill |
| About | Team-at-work photo, warehouse / made-in-britain shot | AI generate |
| Locations | UK map illustration (custom SVG) | Built in-code |
| News | Larger featured-article hero card | Layout-only |

Add a reusable `<MediaFrame>` component: rounded-2xl, soft inner shadow, optional caption overlay, lazy-loaded, with the Ken-Burns-on-enter behavior baked in. Used everywhere going forward.

## 4. Structural changes

**New / restructured pages**
- `/oil-tank-range` — rebuilt as category hub (4 category cards + filter grid below)
- `/oil-tank-range/bunded` (+ single-skinned, steel, fire-rated) — 4 new category pages, same template
- `/commercial-oil-tanks` — add Interceptor service, switch icon-cards to image-cards
- Optional per-service commercial pages can stub-link to anchors for v1

**New components**
- `components/layout/MegaMenu.tsx` (desktop) + updated mobile sheet
- `components/ui/MediaFrame.tsx` (image wrapper with motion)
- `components/sections/CategoryGrid.tsx` (range hub)
- `components/sections/ScrollProgress.tsx`
- `hooks/useMagnetic.ts`, `hooks/useParallax.ts`

**Touched files**
- `Header.tsx`, `Footer.tsx`, `Hero.tsx`, `ServicePillars.tsx`, `BenefitsGrid.tsx`, `ProcessTimeline.tsx`, `CTASection.tsx`, `Index.tsx`
- `Range.tsx` (restructure), `Commercial.tsx` (add 7th + image cards), `About.tsx`
- `data/tanks.ts` — add `category: "bunded"|"single-skinned"|"steel"|"fire-rated"` to each model; add fire-rated models
- `App.tsx` — 4 new routes; `sitemap.xml` updated
- `index.css` / `tailwind.config.ts` — new keyframes (parallax-safe), scroll-progress, magnetic transition tokens

## 5. SEO

- Each new category page gets its own `<Seo>` title/desc + `Product`/`ItemList` JSON-LD
- Commercial services get `Service` JSON-LD
- Sitemap updated with all new routes
- Breadcrumbs component on inner pages with `BreadcrumbList` schema

## 6. Out of scope for this pass

- Real CMS / news backend
- Per-commercial-service standalone pages (we'll anchor-link for v1; can split out later)
- Custom cursor (often feels gimmicky on a trust-led business site — happy to add if you want it)

---

### Technical notes (skip if not interested)

- Motion lib: add `framer-motion` for `AnimatePresence` + variants; CSS keyframes still handle scroll reveals via existing `useInView` to keep bundle lean
- All animations transform/opacity only (no layout thrash)
- Mega-menu built on shadcn `NavigationMenu` (already installed) so a11y/keyboard nav is free
- Images: AI-generated at 1600w max, served as `.jpg` (photos) with `loading="lazy"` + `decoding="async"`; the existing hero stays eager
