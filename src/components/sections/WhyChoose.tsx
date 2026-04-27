import { useLang } from "@/lib/i18n";

export function WhyChoose() {
  const { t } = useLang();
  return (
    <section className="bg-background py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
              — {t.why.eyebrow}
            </span>
            <h2 className="mt-5 font-serif text-[2rem] font-medium leading-[1.05] text-foreground text-balance sm:text-5xl">
              {t.why.title}
            </h2>
          </div>
          <ol className="md:col-span-7">
            {t.why.items.map((it, i) => (
              <li
                key={it.t}
                className="group grid grid-cols-12 items-baseline gap-4 border-b border-border/70 px-2 py-6 transition-all duration-300 last:border-b-0 hover:bg-foreground/[0.02] hover:px-4 active:bg-foreground/[0.04] active:px-4"
              >
                <span className="col-span-2 font-serif text-2xl text-primary transition-transform duration-300 group-hover:scale-110 group-active:scale-110 sm:col-span-1">
                  0{i + 1}
                </span>
                <div className="col-span-10 sm:col-span-11">
                  <h3 className="font-serif text-xl text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                    {it.t}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}