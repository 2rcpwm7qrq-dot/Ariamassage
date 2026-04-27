import { Flower2, Sparkles, Footprints, Droplets, Hand, ArrowUpRight } from "lucide-react";
import { useLang, WHATSAPP_LINK } from "@/lib/i18n";

const ICONS = [Flower2, Sparkles, Footprints, Droplets, Hand];

export function Services({ compact = false }: { compact?: boolean }) {
  const { t } = useLang();
  return (
    <section className="bg-gradient-soft py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
              — {t.services.eyebrow}
            </span>
            <h2 className="mt-5 max-w-2xl font-serif text-[2rem] font-medium leading-[1.05] text-foreground text-balance sm:text-5xl">
              {t.services.title}
            </h2>
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {t.services.durations}
          </span>
        </div>

        <ul className="mt-14 border-t border-border/70">
          {t.services.items.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            const Wrapper = compact ? "div" : "a";
            const wrapperProps = compact
              ? {}
              : { href: WHATSAPP_LINK, target: "_blank", rel: "noopener noreferrer" };
            return (
              <li key={s.name} className="border-b border-border/70">
                <Wrapper
                  {...wrapperProps}
                  className="group grid grid-cols-12 items-start gap-4 px-2 py-7 transition-all duration-300 hover:bg-background/60 hover:px-4 active:bg-background/80 active:px-4 sm:py-9"
                >
                  <div className="col-span-2 flex items-center gap-3 sm:col-span-1">
                    <span className="text-[11px] font-medium tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-primary">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="col-span-10 sm:col-span-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg] group-active:scale-110 group-active:rotate-[-6deg]" />
                      <h3 className="font-serif text-2xl text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                        {s.name}
                      </h3>
                    </div>
                  </div>
                  <p className="col-span-12 text-sm leading-relaxed text-muted-foreground sm:col-span-6 sm:text-base">
                    {s.desc}
                  </p>
                  {!compact && (
                    <div className="col-span-12 flex justify-end sm:col-span-1">
                      <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-active:-translate-y-1 group-active:translate-x-1" />
                    </div>
                  )}
                </Wrapper>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}