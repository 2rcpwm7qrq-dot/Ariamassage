import { useLang } from "@/lib/i18n";

// Reviews — DISPLAYED EXACTLY AS WRITTEN, never translated or edited.
const REVIEWS = [
  {
    name: "Harkirat Singh",
    meta: "Local Guide · 18 reviews · 4 photos",
    when: "2 months ago",
    body: "The massage was very good and helped relieve a lot of tension in my shoulders and back. The therapist was professional , attentive, and made sure I was comfortable throughout the session",
    response: "thank you very much sir",
    responseWhen: "Response from the owner 2 months ago",
  },
  {
    name: "Simon & Michelle",
    meta: "4 reviews",
    when: "a month ago",
    body: "Such a wonderful and relaxing massage and reflexology. Truly melted all the stress and tension away. Thank you so much Komang xx",
    response: "thank you🙏 …",
    responseWhen: "Response from the owner a month ago",
  },
  {
    name: "Dee-anne Mears",
    meta: "7 reviews",
    when: "4 months ago",
    body: "\"Highly recommend! Lymphatic drainage massage after my surgery from Komang was a GAME CHANGER. Helped reduce swelling and got me moving faster. Super relaxing too! 💆\" Honest and reliable. …",
    response: "Thank you so much 🥰🙏 …",
    responseWhen: "Response from the owner 4 months ago",
  },
];

export function Testimonials() {
  const { t } = useLang();
  return (
    <section className="bg-gradient-soft py-14 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
            — {t.reviews.eyebrow}
          </span>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.05] text-foreground text-balance sm:text-5xl">
            {t.reviews.title}
          </h2>
        </div>

        <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              className={
                i % 2 === 0
                  ? "grid gap-6 md:grid-cols-12"
                  : "grid gap-6 md:grid-cols-12 md:[&>*:first-child]:order-2"
              }
            >
              <div className="md:col-span-3">
                <div className="font-serif text-2xl text-foreground">{r.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{r.meta}</div>
                <div className="text-xs text-muted-foreground">{r.when}</div>
              </div>
              <div className="md:col-span-9">
                <span className="font-serif text-5xl leading-none text-primary/60">“</span>
                <blockquote className="mt-1 font-serif text-2xl leading-snug text-foreground/90 text-pretty whitespace-pre-line sm:text-[1.7rem]">
                  {r.body}
                </blockquote>
                <figcaption className="mt-6 border-l-2 border-primary/40 pl-4 text-sm text-muted-foreground">
                  <div className="text-[11px] uppercase tracking-[0.2em]">{r.responseWhen}</div>
                  <p className="mt-1 text-foreground/75">{r.response}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}