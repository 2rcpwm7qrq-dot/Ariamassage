import { createFileRoute } from "@tanstack/react-router";
import { PACKAGE_TREATMENTS, useLang, WHATSAPP_LINK } from "@/lib/i18n";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Package Treatments — Aria Bali Massage" },
      {
        name: "description",
        content:
          "Curated massage & spa packages: Honeymoon, Single, 90-min and 120-min packages. Home service in Seminyak, Bali.",
      },
      { property: "og:title", content: "Package Treatments — Aria Bali Massage" },
      {
        property: "og:description",
        content:
          "Honeymoon, Single & duration-based packages — at your villa or home in Bali. Book via WhatsApp.",
      },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  const { t } = useLang();
  return (
    <>
      <section className="bg-gradient-hero pb-14 pt-32 sm:pb-20 sm:pt-52">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            — {t.nav.packages}
          </span>
          <h1 className="mt-3 font-serif text-4xl font-medium text-foreground sm:text-5xl">
            Package Treatments
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            All prices in thousands of Indonesian Rupiah (e.g. 500 = 500,000 IDR).
          </p>
        </div>
      </section>

      <section className="bg-gradient-soft py-20 sm:py-28">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-2 sm:px-6">
          {PACKAGE_TREATMENTS.map((p, i) => (
            <a
              key={p.name}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-background/70 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card active:translate-y-0"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium tracking-[0.2em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Sparkles className="h-4 w-4 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                  {p.name}
                </h3>
                {p.desc && (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                )}
              </div>
              <div className="mt-8 flex items-end justify-between border-t border-border/60 pt-5">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {p.duration}
                  </p>
                  <p className="mt-1 font-serif text-3xl text-foreground">
                    {p.price}
                    <span className="ml-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">K</span>
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
