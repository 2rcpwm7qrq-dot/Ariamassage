import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Heart, Leaf } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aria Bali Massage" },
      {
        name: "description",
        content:
          "Aria Bali Massage offers professional home service treatments in Seminyak with therapist Komang. Relax, recover, feel your best.",
      },
      { property: "og:title", content: "About — Aria Bali Massage" },
      {
        property: "og:description",
        content: "Professional home service massage with therapist Komang in Seminyak, Bali.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  const items = [
    { icon: Sparkles, t: t.about.h1, d: t.about.h1d },
    { icon: Heart, t: t.about.h2, d: t.about.h2d },
    { icon: Leaf, t: t.about.h3, d: t.about.h3d },
  ];
  return (
    <>
      <section className="bg-gradient-hero pb-12 pt-28 sm:pb-24 sm:pt-52">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {t.about.eyebrow}
          </span>
          <h1 className="mt-3 font-serif text-[2rem] font-medium text-foreground sm:text-5xl">
            {t.about.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.about.body}</p>
        </div>
      </section>
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="space-y-12">
            {items.map(({ icon: Icon, t: title, d }, i) => (
              <div key={title} className="grid grid-cols-12 items-baseline gap-4 border-b border-border/70 pb-12 last:border-b-0">
                <span className="col-span-2 font-serif text-2xl text-primary sm:col-span-1">0{i + 1}</span>
                <div className="col-span-10 sm:col-span-11">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <h2 className="font-serif text-3xl text-foreground">{title}</h2>
                  </div>
                  <p className="mt-3 text-base text-muted-foreground sm:text-lg">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhyChoose />
      <Testimonials />
      <BookingCTA />
    </>
  );
}