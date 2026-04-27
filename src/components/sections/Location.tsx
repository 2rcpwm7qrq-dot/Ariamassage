import { MapPin } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Location() {
  const { t } = useLang();
  const q = encodeURIComponent("Jl. Dewi Saraswati II, Seminyak, Bali 80361");
  return (
    <section className="bg-background py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5 md:pt-4">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
              — {t.location.eyebrow}
            </span>
            <h2 className="mt-5 font-serif text-[2rem] font-medium leading-[1.05] text-foreground text-balance sm:text-5xl">
              {t.location.title}
            </h2>
            <div className="mt-8 divider-rule" />
            <div className="mt-6 flex items-start gap-3 text-foreground/85">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <p className="font-serif text-xl leading-snug">{t.location.address}</p>
            </div>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {t.location.serving}
            </p>
          </div>
          <div className="md:col-span-7">
            <iframe
              title="Aria Bali Massage location"
              src={`https://www.google.com/maps?q=${q}&output=embed`}
              className="h-80 w-full border border-border/70 grayscale-[20%] md:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}