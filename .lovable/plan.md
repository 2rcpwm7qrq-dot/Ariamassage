# Aria Bali Massage — Website Plan

A calm, premium, mobile-first website to drive WhatsApp bookings for a home-service massage business in Seminyak.

## Brand & design system
- **Palette**: coral, soft pink, beige, warm white, subtle gold accent (no harsh contrasts)
- **Typography**: elegant serif for headings (e.g. Cormorant Garamond / Playfair), modern sans-serif for body (Inter)
- **Visuals**: soft gradients, frangipani SVG accents, generous whitespace, rounded corners, soft shadows, subtle scroll/fade animations
- **Imagery**: curated free stock of *objects only* (oils, stones, frangipani, towels, candles) — no people/faces, no AI-generated imagery
- **Mobile-first**: every layout designed for phone first, then scaled up

## Page structure (separate routes for SEO)
- `/` Home — hero + brief highlights of each section + booking CTA
- `/services` — full services list
- `/about` — about Aria Bali Massage & therapist Komang
- `/contact` — location, address, booking, map embed

Each route has its own SEO metadata (title, description, og tags).

## Shared elements (on every page)
- **Header**: logo wordmark "Aria Bali Massage", nav (Home / Services / About / Contact), EN/ID toggle top-right
- **Footer**: business name, WhatsApp, address, minimal links
- **Sticky WhatsApp floating button** on mobile (bottom-right) — always visible

## Home page sections
1. **Hero** — "Relax. Recharge. Rebalance — Massage at Your Home in Bali" + subtext + two CTAs (Book via WhatsApp / View Services), soft coral-pink gradient with frangipani accent
2. **About preview** — short intro + 3 highlight chips (Professional therapist Komang / Attentive & reliable / Comfort & results)
3. **Services preview** — clean cards for Balinese, Relaxation, Reflexology, Lymphatic Drainage, Back & Shoulder Relief (name, short description, duration 60/90 min)
4. **Why Choose Us** — 5 icon points: home service, professional therapist, trusted, clean & hygienic, personalized
5. **Testimonials** — 3 reviews displayed *exactly as written* (Harkirat Singh, Simon & Michelle, Dee-anne Mears) including owner responses, on soft cards with reviewer name, badges, and date
6. **Location** — address (Jl. Dewi Saraswati II, Seminyak…) + "Serving Seminyak and surrounding areas" + embedded Google Map
7. **Booking CTA band** — "Ready to relax?" + large "Book Now via WhatsApp" button (wa.me link with prefilled message to 082266296329)

## Language toggle (EN / ID)
- Simple in-page toggle in header (no URL change), preference saved to localStorage, English default
- All copy stored in a translations file with EN + natural ID versions (Pijat Home Service di Bali, Pesan Sekarang via WhatsApp, Layanan Kami, Ulasan Pelanggan, etc.)
- Testimonial text stays in original English (real customer reviews — never translated)

## WhatsApp integration
- Phone: `082266296329` → wa.me link `https://wa.me/6282266296329`
- Prefilled message: "Hi, I'd like to book a massage with Aria Bali Massage."
- Used by: hero CTA, services CTAs, booking band, sticky floating button, footer

## UX & performance
- Smooth scroll, fade-in on scroll for sections
- Lazy-loaded images with proper sizing
- Clear repeated CTA throughout
- Fast load: minimal images, efficient font loading
- Accessible color contrast and tap targets sized for mobile