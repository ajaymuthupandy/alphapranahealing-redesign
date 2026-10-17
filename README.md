# Alpha Prana Healing — website

Next.js (App Router) + TypeScript + Tailwind CSS v4 rebuild of [alphapranahealing.com](https://alphapranahealing.com).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live

| Path | What |
| --- | --- |
| `lib/site.ts` | Phone, email, WhatsApp/booking URLs, navigation — all taken from the live site |
| `lib/content.ts` | Services, sessions, yoga classes, blessing program, testimonials (verbatim), blog list |
| `lib/images.ts` | Static imports + alt text for every original photo in `assets/images/` |
| `app/globals.css` | Brand tokens (from the original Elementor kit) and the scroll-reveal motion |
| `components/` | Header, Footer, buttons, PageHero, CtaBand, Testimonials, Gallery, video + contact widgets |

## Brand system

- **Two colour themes:** logo teal `#466D68` (sampled from the logo; shades `#2F4B47`, `#1E2E2C`) and sand `#DDCFBF` (tint `#F4EFE9`).
- **Two type families:** Playfair Display (headings) and Lato (everything else). Header menu and footer links share `.nav-text`.
- **Theme element:** the lotus from the logo (`public/brand/lotus-mark.png`), applied with the `.lotus` class as a tinted watermark.
- **Hero video:** `public/video/hero.mp4` — a silent 30s loop (720p, ~4.3 MB) cut from the opening of the "Open Online Class" YouTube video. It plays in a plain `<video>` with no controls, fading in 1.5s after load (`components/HeroVideo.tsx`); reduced-motion and data-saver visitors see the photo instead.

## Notes

- Blog posts link to the existing articles on alphapranahealing.com; their bodies were not migrated.
- The contact form has no backend — it composes the enquiry and opens WhatsApp (the business's booking channel).
- The Instagram link is the generic `https://www.instagram.com/` used on the live site; replace it in `lib/site.ts` with the real profile.
