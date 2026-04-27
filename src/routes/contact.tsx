import { createFileRoute } from "@tanstack/react-router";
import { Location } from "@/components/sections/Location";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { useLang, WHATSAPP_LINK, WHATSAPP_NUMBER_DISPLAY, CONTACT_EMAIL, EMAIL_LINK } from "@/lib/i18n";
import { MessageCircle, Phone, MapPin, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aria Bali Massage" },
      {
        name: "description",
        content:
          "Book your home service massage in Seminyak via WhatsApp. Serving Seminyak and surrounding areas.",
      },
      { property: "og:title", content: "Contact — Aria Bali Massage" },
      {
        property: "og:description",
        content: "WhatsApp +62 822-6629-6329 — Aria Bali Massage, Seminyak.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  return (
    <>
      <section className="bg-gradient-hero pb-12 pt-28 sm:pb-24 sm:pt-52">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {t.nav.contact}
          </span>
          <h1 className="mt-3 font-serif text-4xl font-medium text-foreground sm:text-5xl">
            {t.booking.title}
          </h1>
          <p className="mt-4 text-muted-foreground">{t.booking.sub}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" /> {t.cta.bookNow}
            </a>
            <a
              href={`tel:+62${WHATSAPP_NUMBER_DISPLAY.replace(/^0/, "")}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-6 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" /> {WHATSAPP_NUMBER_DISPLAY}
            </a>
          </div>
          <a
            href={EMAIL_LINK}
            className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-6 text-sm font-medium text-foreground hover:border-primary hover:text-primary sm:w-auto sm:px-8"
          >
            <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
          </a>
          <div className="mt-6 inline-flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 text-primary" />
            <span>{t.location.address}</span>
          </div>
        </div>
      </section>
      <Location />
      <BookingCTA />
    </>
  );
}