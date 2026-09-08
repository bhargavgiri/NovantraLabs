# 🔍 Novantra Labs — Complete Website Audit Report
**Audited by:** Senior Web Architect + UI/UX Expert + SEO Specialist + Conversion Expert + Performance Engineer  
**Date:** May 3, 2026  
**Stack:** Next.js 16 (App Router) · Tailwind CSS v4 · Framer Motion · React Hook Form + Zod · Three.js

---

## 🔥 SUMMARY SCORE

| Category | Score | Verdict |
|---|---|---|
| **UI/UX** | **7.5 / 10** | Premium desktop; mobile breaks drag this down hard |
| **SEO** | **8.0 / 10** | Strong metadata, but missing OG image, canonical, schema |
| **Performance** | **7.0 / 10** | Fast shell, but Framer Motion on every section is heavy |
| **Conversion** | **7.5 / 10** | CTAs exist everywhere, but form is fake (no real backend) |

---

## 🔴 CRITICAL ISSUES (Top 10 — Fix These First)

### #1 — Contact Form Submits to Nowhere (BUSINESS-CRITICAL)
**File:** `Contact.tsx` · Lines 32–39  
**Issue:** `onSubmit` does `await new Promise((r) => setTimeout(r, 1500))` then `void data` — **form data is silently discarded**. Every inquiry is lost.  
```ts
// CURRENT — broken
const onSubmit = async (data: FormData) => {
  setLoading(true)
  await new Promise((r) => setTimeout(r, 1500))
  void data   // ← data thrown away
  setLoading(false)
  setSubmitted(true)
}
```
**Fix:** Integrate Formspree, Web3Forms, or a Next.js API route immediately.

---

### #2 — Framer Motion in Contact + Portfolio = Hydration Risk
**Files:** `Contact.tsx` (line 4), `Portfolio.tsx` (line 4), `About.tsx` (line 3), `Services.tsx` (line 4), `WhyUs.tsx` (line 3)  
**Issue:** Five sections import and render Framer Motion server-side (`whileInView`, `motion.div` with `initial`). The Hero was correctly fixed with CSS animations — but every other section still uses Framer. On slow connections or SSR mismatches, elements can flash invisible before hydration completes.  
**Fix:** Mirror the Hero pattern: use CSS `reveal` / `stagger-grid` classes + IntersectionObserver, OR add `'use client'` barrier + `dynamic()` import for heavy animation wrappers.

---

### #3 — Social Links in Footer Are Dead `#` Hrefs
**File:** `Footer.tsx` · Lines 78–80  
```tsx
{ icon: TwitterIcon, label: 'Twitter/X', href: '#' },
{ icon: LinkedinIcon, label: 'LinkedIn',  href: '#' },
{ icon: GithubIcon,  label: 'GitHub',    href: '#' },
```
**Issue:** Clicking social icons scrolls to top. For a professional dev studio, this is an immediate trust-killer. Clients check social proof.  
**Fix:** Replace `#` with real profile URLs, or remove the icons entirely if profiles don't exist yet.

---

### #4 — Hamburger Button Missing `display: flex` on Mobile
**File:** `Navbar.tsx` · Lines 347–360  
```tsx
style={{
  width: '44px',
  height: '44px',
  alignItems: 'center',      // ← has no effect without display: flex
  justifyContent: 'center',  // ← same
  ...
}}
```
**Issue:** `display` is missing from the inline style object on the hamburger button. The button container may not center the icon properly in all browsers. The icon renders, but alignment is CSS-undefined.  
**Fix:** Add `display: 'flex'` to the hamburger button's style object.

---

### #5 — No Real OG Image (Open Graph)
**File:** `layout.tsx` · Lines 44–52  
**Issue:** The `openGraph` block in metadata has no `images` field. When anyone shares the site on Twitter, LinkedIn, Slack, or WhatsApp, the link preview shows **no image** — just text. This directly kills referral traffic quality.  
**Fix:** Generate a 1200×630 OG image and add:
```ts
openGraph: {
  images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Novantra Labs' }],
}
```

---

### #6 — `About.tsx` Avatar Shows Plain "N" — Visually Confuses Users
**File:** `About.tsx` · Lines 77–85  
**Issue:** The team card avatar renders the letter `N` in a gradient square — identical in appearance to the Navbar logo. On mobile, when both are on-screen, users can mistake this for a logo element rather than a team/people indicator.  
**Fix:** Replace the `N` with actual team member avatars, a team photo, or a meaningful icon (e.g., group icon from Lucide).

---

### #7 — "Coming Soon" Cards Have No Visual Differentiation
**File:** `Portfolio.tsx` · Lines 225, 296–299  
```tsx
const isReal = linkUrl.startsWith('https://')
// ...
<span className="text-white/30 text-sm font-body">Coming Soon</span>
```
**Issue:** "Coming Soon" is styled as `text-white/30` — nearly invisible against the dark card. Users can't tell the difference between a real product and a placeholder. This undermines the portfolio's credibility.  
**Fix:** Add a distinct `Coming Soon` badge: amber pill with `🚧` icon, higher contrast text, and a slightly different card treatment (e.g., dashed border, reduced opacity on the whole card).

---

### #8 — No `<label>` `for` / `htmlFor` Linking to Inputs (Accessibility)
**File:** `Contact.tsx` · `FormField` component (Lines 251–282)  
**Issue:** `FormField` renders a `<label>` but it has no `htmlFor` attribute connecting it to the child `<input>`. Clicking the label text doesn't focus the field. Screen readers can't associate the label with the control. This violates WCAG 2.1 Level A.  
```tsx
// CURRENT — broken accessibility
<label className="...">
  {label}
</label>
{children}  // <-- input has no id linkage
```
**Fix:** Pass `id` into `FormField` and add `htmlFor={id}` on the label. (The inputs already have `id` attributes — they just aren't linked.)

---

### #9 — No `canonical` URL Set
**File:** `layout.tsx`  
**Issue:** `metadataBase` is set to `https://novantra.com`, but no explicit `alternates.canonical` is defined. If the site is accessible on both `www.novantra.com` and `novantra.com`, Google may index duplicate content and split link equity.  
**Fix:**
```ts
export const metadata: Metadata = {
  alternates: { canonical: 'https://novantra.com' },
  ...
}
```

---

### #10 — WhyUs `stagger-grid` Items Start Invisible, May Never Animate
**File:** `globals.css` · Lines 322–332, `WhyUs.tsx` · Line 18  
**Issue:** `.stagger-grid > *` sets `opacity: 0` as a permanent CSS rule. If `useScrollReveal` fails to attach (server render, JS error, slow JS), all six "Why Choose Us" cards are **permanently invisible**. The CSS fallback for `.reveal` (line 299–303) starts visible — but `stagger-grid` children do **not** follow this safety pattern.  
**Fix:** Default `.stagger-grid > *` to `opacity: 1`, and only apply the `will-animate` hidden state via JS (mirror the `.reveal.will-animate` pattern).

---

## 🟠 MAJOR IMPROVEMENTS

### M1 — Announcement Bar Has No "Don't Show Again" Persistence
**File:** `AnnouncementBar.tsx`  
**Issue:** Dismissal state lives in React `useState`. Every page reload re-shows the bar, even if user dismissed it. Annoying UX, especially for return visitors.  
**Fix:** Persist to `localStorage`: `localStorage.setItem('announcementDismissed', '1')` and read it in `useEffect`.

### M2 — No `aria-label` on Section Headings or Nav Landmark
**Files:** All section components  
**Issue:** Sections use `<section id="...">` but no `aria-label` or `aria-labelledby`, making the page's landmark structure meaningless to screen readers.  
**Fix:** Add `aria-label` to each section: `<section id="services" aria-label="Our Services">`.

### M3 — "Learn More →" in Service Cards Leads to `#contact`, Not Service Detail
**File:** `Services.tsx` · Line 151  
**Issue:** Every service card's "Learn More →" points to `#contact`. Users expecting to learn more about a specific service (Mobile Apps, AI, etc.) are dropped into a contact form instead. This is a UX anti-pattern and kills intent-matching.  
**Fix:** Either add dedicated service detail pages/sections, or rename the link to "Get a Quote →" to set correct expectations.

### M4 — Hero Trust Badges Collapse Poorly on Mid-Width Screens
**File:** `Hero.tsx` · Lines 211–226  
**Issue:** The 4 trust badges use `flex-wrap justify-center lg:justify-start`. At 640–767px viewport widths, two badges end up on each row, but alignment shifts between `center` and left mid-animation, creating a janky visual.  
**Fix:** Fix to `justify-start` always, and set a `max-w-md` to prevent centering past the left-aligned copy.

### M5 — Portfolio Stats Bar Shows "15+ Web Projects" but Only 4 Are Listed
**File:** `Portfolio.tsx` · Lines 18–23  
```tsx
const stats = [
  { value: '15+', label: 'Web Projects' },  // ← claims 15+
]
```
But `WebGrid` only renders entries from `webProjects` data (confirmed: 4 items). **Credibility mismatch**. Prospects who click "Web Projects" tab and see 4 will notice the discrepancy.  
**Fix:** Either add more web projects, or change the stat to match actual visible items.

### M6 — Framer Motion `whileInView` Without SSR Guard Causes CLS
**Files:** `Portfolio.tsx`, `About.tsx`, `Contact.tsx`, `Services.tsx`, `WhyUs.tsx`  
**Issue:** `motion.div` with `initial="hidden"` renders with `opacity: 0` during SSR, then becomes visible after hydration. This causes a visible "flash" on first load (Cumulative Layout Shift), degrading Core Web Vitals.

### M7 — No Structured Data / JSON-LD Schema
**Issue:** The site has no `Organization`, `LocalBusiness`, or `WebSite` schema markup. Rich results (Google Business Panel, Sitelinks) are impossible without it. Competitors with schema markup will outrank you for branded searches.  
**Fix:** Add to `layout.tsx`:
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Novantra Labs",
  "url": "https://novantra.com",
  "contactPoint": { "@type": "ContactPoint", "telephone": "+91-9157433115", "contactType": "customer service" }
}) }} />
```

### M8 — No `robots.txt` or `sitemap.xml`
**Issue:** Not visible in `/public`. Without a sitemap, Google crawls the site inefficiently. Might miss legal pages (`/privacy`, `/terms`, `/nda`).  
**Fix:** Add `src/app/sitemap.ts` (Next.js 13+ built-in) and `src/app/robots.ts`.

---

## 🟡 MINOR FIXES

| # | Issue | File | Fix |
|---|---|---|---|
| 1 | `section-container` horizontal padding is only `1rem` on mobile — text nearly touches edges | `globals.css:171` | Change `padding: 0 1rem` → `0 1.25rem` on mobile |
| 2 | `WhyUs` CTA button is `bg-blue-600` Tailwind utility — inconsistent with rest of site's `#2563EB` inline style pattern | `WhyUs.tsx:126` | Use `GlowButton` component like every other section |
| 3 | Footer copyright shows `© 2026` hardcoded — will be wrong next year | `Footer.tsx:178` | Use `new Date().getFullYear()` |
| 4 | `section-label` CSS uses `::before` and `::after` pseudo-elements that render literal `"- "` text — this text is read aloud by screen readers | `globals.css:217-220` | Add `aria-hidden="true"` to the pseudo-content, or apply via `content` on the HTML element's data attribute |
| 5 | No `loading="lazy"` on any images (confirmed no `<img>` elements exist — all are CSS backgrounds or emoji) | All sections | Consider converting emoji icons to proper `<img>` / SVG with alt text |
| 6 | `CursorGlow.tsx` runs on all devices including touch — a cursor glow on mobile does nothing but burn GPU cycles | `CursorGlow.tsx` | Gate behind `window.matchMedia('(pointer: fine)')` check |
| 7 | Location text in Contact section has double space: `"India -  Remote Worldwide"` | `Contact.tsx:78` | Fix typo: `'India — Remote Worldwide'` |
| 8 | Announcement bar dismiss button uses `×` (HTML entity via JSX string) instead of `<X />` icon from lucide — inconsistent icon system | `AnnouncementBar.tsx:53` | Use `<X size={12} />` from lucide-react |
| 9 | `scroll-behavior: smooth` is defined in BOTH `html` CSS and `className="scroll-smooth"` — redundant | `globals.css:99`, `layout.tsx:70` | Remove the Tailwind class, keep the CSS |
| 10 | `min-width: 0` applied globally to every element via `*` selector — this is overly aggressive and can cause unexpected layout collapses in third-party embedded components | `globals.css:120-122` | Scope this to `.section-container *` or flex/grid children only |

---

## 🚀 ACTION PLAN

### Phase 1 — IMMEDIATE (Do Today, Revenue at Risk)

1. **Fix the contact form backend.** Integrate Formspree or Web3Forms. Every day without this = every form submission is lost. This is a zero-revenue website right now.
2. **Fix the hamburger button** `display: 'flex'` missing in Navbar.tsx.
3. **Replace dead social icon hrefs** in Footer.tsx with real URLs.
4. **Add OG image** — create a `1200×630` image and wire it into metadata. Every share without this = unprofessional preview.

### Phase 2 — THIS WEEK (Conversion & Trust)

5. **Style "Coming Soon" cards distinctly** in Portfolio.tsx — amber badge, reduced opacity, dashed border.
6. **Fix `stagger-grid` invisible-by-default** CSS in globals.css — make items visible by default, only animate when JS confirms.
7. **Add `htmlFor` to all form labels** in Contact.tsx for accessibility compliance.
8. **Add `localStorage` persistence** to AnnouncementBar dismissal.
9. **Fix stat discrepancy** — Web Projects stat (15+) vs. displayed items (4).
10. **Add JSON-LD schema** to layout.tsx for Organization/LocalBusiness.

### Phase 3 — NEXT 2 WEEKS (SEO & Polish)

11. **Add `sitemap.ts` and `robots.ts`** via Next.js App Router conventions.
12. **Add `canonical` URL** to metadata.
13. **Gate CursorGlow** behind pointer media query.
14. **Replace "Learn More →" labels** in service cards with honest CTAs.
15. **Fix Footer copyright year** to be dynamic.
16. **Fix mobile container padding** from `1rem` to `1.25rem`.
17. **Add `aria-label` to all `<section>` landmarks**.

---

## 💣 FINAL VERDICT

### Is this website ready for clients? ❌ NO

**What is blocking conversions:**

1. 🔴 **The form doesn't work.** This alone makes the website a zero-conversion asset. Prospects who fill out the contact form will never hear back — because the data is discarded.

2. 🔴 **Zero social proof.** No testimonials, no client logos, no case study links, no star ratings. The "80+ Happy Clients" stat is unverifiable. Tech clients expect proof.

3. 🟠 **Dead social links.** An agency with placeholder social icons signals "we don't finish things." This is the exact opposite of the brand message.

4. 🟠 **Stats don't match content.** "15+ Web Projects" with 4 showing = immediate credibility hit for anyone who clicks the tab.

5. 🟡 **The desktop experience is genuinely excellent** — premium aesthetics, solid visual hierarchy, clean CTA placement, fast animations. The foundation is strong.

**Bottom line:** Fix the form backend first. Fix social links second. Add a testimonials section third. Then this site can legitimately convert clients at a high rate. The visual quality is above average for an Indian dev studio — don't let a broken form waste it.
