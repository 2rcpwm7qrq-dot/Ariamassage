import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aria Bali Massage" },
      {
        name: "description",
        content:
          "Balinese, relaxation, reflexology, lymphatic drainage and back & shoulder relief — at your home in Seminyak, Bali.",
      },
      { property: "og:title", content: "Services — Aria Bali Massage" },
      {
        property: "og:description",
        content: "Home service massage treatments in Seminyak. Book via WhatsApp.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLang();
  return (
    <>
      <section className="bg-gradient-hero pb-16 pt-40 sm:pb-20 sm:pt-52">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {t.services.eyebrow}
          </span>
          <h1 className="mt-3 font-serif text-[2rem] font-medium text-foreground sm:text-5xl">
            {t.services.title}
          </h1>
          <p className="mt-4 text-muted-foreground">{t.services.durations}</p>
        </div>
      </section>
      <Services />
      <BookingCTA />
    </>
  );
}