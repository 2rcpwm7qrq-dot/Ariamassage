import { createFileRoute } from "@tanstack/react-router";
import { BODY_TREATMENTS, translateMenuItem, useLang, WHATSAPP_LINK } from "@/lib/i18n";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { ArrowUpRight, Flower2 } from "lucide-react";

export const Route = createFileRoute("/body-treatments")({
  head: () => ({
    meta: [
      { title: "Body Treatments — Aria Bali Massage" },
      {
        name: "description",
        content:
          "Full menu of body treatments in Seminyak: Balinese, Deep Tissue, Hot Stone, Reflexology, Lymphatic Drainage, Pregnancy Massage and more. Home service in Bali.",
      },
      { property: "og:title", content: "Body Treatments — Aria Bali Massage" },
      {
        property: "og:description",
        content:
          "Browse our full body treatment menu — pricing & duration. Book via WhatsApp for home service in Seminyak.",
      },
    ],
  }),
  component: BodyTreatmentsPage,
});

function BodyTreatmentsPage() {
  const { t } = useLang();
  return (
    <>
      <section className="bg-gradient-hero pb-14 pt-32 sm:pb-20 sm:pt-52">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            — {t.nav.body}
          </span>
          <h1 className="mt-3 font-serif text-4xl font-medium text-foreground sm:text-5xl">
            Body Treatment Menu
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            All prices in thousands of Indonesian Rupiah (e.g. 200 = 200,000 IDR).
          </p>
        </div>
      </section>

      <section className="bg-gradient-soft py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <ul className="border-t border-border/70">
            {BODY_TREATMENTS.map((item, i) => (
              <li key={item.name} className="border-b border-border/70">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-12 items-center gap-3 px-2 py-5 transition-all duration-300 hover:bg-background/60 hover:px-4 active:bg-background/80 active:px-4 sm:gap-4 sm:py-6"
                >
                  <div className="col-span-1 hidden sm:block">
                    <span className="text-[11px] font-medium tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="col-span-7 sm:col-span-7">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Flower2 className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:rotate-[-6deg] group-active:rotate-[-6deg]" />
                      <h3 className="font-serif text-lg leading-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                        {item.name}
                      </h3>
                    </div>
                    {item.desc && (
                      <p className="mt-2 ml-6 max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {item.desc}
                      </p>
                    )}
                    <span className="mt-1 ml-6 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:hidden">
                      {item.duration}
                    </span>
                  </div>
                  <div className="col-span-2 hidden text-right sm:block">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {item.duration}
                    </span>
                  </div>
                  <div className="col-span-5 flex items-center justify-end gap-2 sm:col-span-2">
                    <span className="font-serif text-lg text-foreground sm:text-xl">
                      {item.price}
                      <span className="ml-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">K</span>
                    </span>
                    <ArrowUpRight className="hidden h-4 w-4 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
