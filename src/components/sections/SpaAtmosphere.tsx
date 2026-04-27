import teamSpa from "@/assets/team-spa.jpeg";
import { useLang } from "@/lib/i18n";

const STOCK = [
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=70",
    alt: "Stack of warm hot stones for massage therapy",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=70",
    alt: "Peaceful candles and frangipani flowers in a Bali spa",
  },
  {
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=600&q=70",
    alt: "Calming spa setup with essential oils and stones",
  },
];

export function SpaAtmosphere() {
  const { t } = useLang();
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
            — {t.spa.eyebrow}
          </span>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.05] text-foreground text-balance sm:text-5xl">
            {t.spa.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t.spa.body}
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img
                src={teamSpa}
                alt="Aria Bali Massage therapists welcoming guests in the treatment room"
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="grid gap-4 md:col-span-5 md:gap-6">
            {STOCK.map((img) => (
              <div
                key={img.src}
                className="overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover transition-transform duration-700 hover:scale-[1.04] sm:h-56 md:h-[11.5rem]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
