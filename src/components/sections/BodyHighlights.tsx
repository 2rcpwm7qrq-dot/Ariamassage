import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Flower2 } from "lucide-react";
import { BODY_TREATMENTS, translateMenuItem, useLang } from "@/lib/i18n";

export function BodyHighlights() {
  const { t, lang } = useLang();
  // Pick a few signature treatments to showcase (lookup by canonical English name)
  const highlightNames = [
    "Balinese Massage",
    "Hot Stone Massage",
    "Deep Tissue Massage",
    "Lymphatic Drainage",
    "Four Hand Massage",
    "Pregnancy Massage",
  ];
  const items = highlightNames
    .map((name) => BODY_TREATMENTS.find((b) => b.name === name))
    .filter(Boolean)
    .map((b) => translateMenuItem(b as (typeof BODY_TREATMENTS)[number], lang));

  return (
    <section className="bg-gradient-soft py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
              — {t.nav.body}
            </span>
            <h2 className="mt-5 max-w-2xl font-serif text-[2rem] font-medium leading-[1.05] text-foreground text-balance sm:text-5xl">
              {t.bodyMenu.signatureTitle}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t.bodyMenu.signatureSub}
            </p>
          </div>
          <Link
            to="/body-treatments"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-border bg-card/70 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary md:self-end"
          >
            {t.cta.viewFullMenu}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Link
              key={item.name}
              to="/body-treatments"
              className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border/70 bg-background/70 p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card sm:p-7"
            >
              <div className="flex items-center justify-between">
                <Flower2 className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-[-6deg]" />
                <span className="text-[10px] font-medium tracking-[0.25em] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-foreground transition-colors group-hover:text-primary">
                {item.name}
              </h3>
              <div className="mt-auto flex items-end justify-between border-t border-border/60 pt-4">
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {item.duration}
                </span>
                <span className="font-serif text-2xl text-foreground">
                  {item.price}
                  <span className="ml-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    K
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
