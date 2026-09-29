# ClgBites — Website

An award-oriented single-page site for **ClgBites**, the food delivery app for VIT-AP hostellers.
Editorial storytelling, parallax scrolling, and a fixed Play Store CTA that follows the user everywhere.

## Stack

- **Next.js 15** (App Router) — SSG for LCP, `next/image` for automatic AVIF/WebP.
- **Tailwind CSS** — warm Vijayawada palette (chilli, saffron, ivory on deep charcoal).
- **Framer Motion** — parallax + section transitions.
- **Lenis** — buttery smooth scroll (respects `prefers-reduced-motion`).
- **Google Fonts** — Fraunces (display serif) + Inter (body).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
```

Deploy to Vercel with zero config (`vercel` or push to GitHub → import).

## The four things you will want to change

### 1. Play Store URL
`lib/config.ts` → `PLAY_STORE_URL`. Replace the placeholder `com.clgbites` with your real package ID.

### 2. The 1.5s intro animation
Wired to `public/intro.mp4` (the ClgBites login animation). It locks scroll
for exactly 1.5s and fades to the landing page. To swap in a new one, drop
a fresh file at `public/intro.mp4` — no code change needed. If the video
ever fails to load, a branded fallback splash (logo + halo) shows instead.

### 3. Images
Currently the site pulls tasteful Unsplash placeholders. When your ClgBites photography is ready:

- Drop images in `public/` (e.g. `public/hero.jpg`, `public/parcels.jpg`).
- Edit `lib/config.ts` and swap the URLs in the `IMG` object to `/hero.jpg`, etc.
- Keep the aspect ratios similar so the layout stays balanced.

### 4. Copy
Every section lives in its own file under `components/sections/`. Edit in place — no CMS.

## Page structure (one page, seven chapters + CTA)

1. **Hero** — parallax biryani shot, tagline, primary CTAs.
2. **Chapter 01 · The Bill** — juxtaposition: bloated fee receipt vs `₹10` promise.
3. **Chapter 02 · The Ledger** — animated count-up of Day 1–4 growth (₹30 → ₹1,000).
4. **Chapter 03 · The Night** — the 80-parcel story, full-bleed parallax.
5. **Chapter 04 · The Leap** — Mandadam → Vijayawada, the "risk lenidey rusk ledu" turn.
6. **Chapter 05 · What you get** — six honest promises in a bento grid.
7. **Chapter 06 · Still ahead** — "It was all a dream for me", closing parallax.
8. **Final CTA + Footer** — big Google Play button, contact.

The floating **Get on Google Play** pill is fixed to the bottom-right at all times.

## Performance notes

- All images use `next/image` with `sizes` + AVIF/WebP.
- Only the hero uses `priority`; everything else lazy-loads.
- Lenis smooth scroll is skipped for users with `prefers-reduced-motion: reduce`.
- Grain overlay is an inline SVG — no image request.
- Splash locks scroll so the hero can prime its LCP paint before anyone can scroll.

## Accessibility

- WCAG AA contrast on every text block.
- Focus rings on all interactive elements.
- Every image has descriptive alt text (edit as you swap photos).
- Icon buttons have `aria-label`.
- Reduced-motion path removes parallax + smooth scroll + splash animation.
