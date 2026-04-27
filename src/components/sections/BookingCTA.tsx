import { MessageCircle, Phone } from "lucide-react";
import { useLang, WHATSAPP_LINK, WHATSAPP_NUMBER_DISPLAY } from "@/lib/i18n";

export function BookingCTA() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
              — {t.booking.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-[2.6rem] font-medium leading-[1] text-foreground text-balance sm:mt-5 sm:text-7xl md:text-[5.5rem]">
              {t.booking.title}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] text-muted-foreground sm:mt-6 sm:text-lg">
              {t.booking.sub}
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3 sm:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium uppercase tracking-wider text-primary-foreground shadow-soft transition-all active:scale-[0.97] hover:bg-primary/90 sm:rounded-none"
            >
              <MessageCircle className="h-4 w-4" />
              {t.cta.bookNow}
            </a>
            <a
              href={`tel:+62${WHATSAPP_NUMBER_DISPLAY.replace(/^0/, "")}`}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-6 text-sm font-medium tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary sm:rounded-none"
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