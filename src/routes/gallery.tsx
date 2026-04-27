import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Aria Bali Massage" },
      {
        name: "description",
        content:
          "Photos and videos of Aria Bali Massage treatments, therapists, and home service experiences in Seminyak, Bali.",
      },
      { property: "og:title", content: "Gallery — Aria Bali Massage" },
      {
        property: "og:description",
        content: "A visual look at our massage treatments and home service experience in Bali.",
      },
      { property: "og:image", content: gallery2 },
      { name: "twitter:image", content: gallery2 },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: gallery2, alt: "Aria Bali Massage therapists in our treatment room" },
  { src: gallery1, alt: "Wood roller leg massage at home in Seminyak" },
  { src: gallery3, alt: "Back massage with aromatherapy oils" },
];

const videos = [
  { src: "/gallery/video-1.mp4", poster: gallery1 },
  { src: "/gallery/video-2.mp4", poster: gallery3 },
];

function GalleryPage() {
  const { t } = useLang();

  return (
    <>
      <section className="bg-gradient-hero pb-14 pt-32 sm:pb-20 sm:pt-52">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            — {t.nav.gallery}
          </span>
          <h1 className="mt-3 font-serif text-4xl font-medium text-foreground sm:text-5xl">
            {t.gallery.title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {t.gallery.sub}
          </p>
        </div>
      </section>

      <section className="bg-gradient-soft py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
            — {t.gallery.photos}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((p, i) => (
              <div
                key={i}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border/70 bg-background/60 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  width={600}
                  height={800}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>

          <h2 className="mt-20 text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
            — Videos
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {videos.map((v, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-border/70 bg-background/60 shadow-soft"
              >
                <video
                  src={v.src}
                  poster={v.poster}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full bg-black"
                />
              </div>
            ))}
          </div>

          <p className="mt-16 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Photos & videos · Aria Bali Massage
          </p>
        </div>
      </section>
    </>
  );
}
