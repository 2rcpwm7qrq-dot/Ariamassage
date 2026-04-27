import { Sparkles, Heart, Leaf } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function AboutPreview() {
  const { t } = useLang();
  const items = [
    { icon: Sparkles, t: t.about.h1, d: t.about.h1d },
    { icon: Heart, t: t.about.h2, d: t.about.h2d },
    { icon: Leaf, t: t.about.h3, d: t.about.h3d },
  ];
  return (
    <section className="bg-background py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
              — {t.about.eyebrow}
            </span>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.05] text-foreground text-balance sm:text-5xl">
              {t.about.title}
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-3">
            <p className="font-serif text-2xl leading-snug text-foreground/90 text-pretty sm:text-[1.7rem]">
              {t.about.body}
            </p>
          </div>
        </div>

        <div className="mt-20 divider-rule" />

        <div className="mt-14 grid gap-y-12 gap-x-10 sm:grid-cols-3">
          {items.map(({ icon: Icon, t: title, d }, i) => (
            <div key={title} className="relative">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-2xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}