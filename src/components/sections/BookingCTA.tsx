import { MessageCircle, Phone } from "lucide-react";
import { useLang, WHATSAPP_LINK, WHATSAPP_NUMBER_DISPLAY } from "@/lib/i18n";

export function BookingCTA() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
              — {t.booking.eyebrow}
            </span>
            <h2 className="mt-5 font-serif text-5xl font-medium leading-[1] text-foreground text-balance sm:text-7xl md:text-[5.5rem]">
              {t.booking.title}
            </h2>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              {t.booking.sub}
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 bg-primary px-7 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="h-4 w-4" />
              {t.cta.bookNow}
            </a>
            <a
              href={`tel:+62${WHATSAPP_NUMBER_DISPLAY.replace(/^0/, "")}`}
              className="inline-flex h-14 items-center justify-center gap-2 border border-foreground/20 bg-transparent px-6 text-sm font-medium tracking-wider text-foreground hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              {WHATSAPP_NUMBER_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}