import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { LangProvider, useLang } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

function NotFoundComponent() {
  const { t } = useLang();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t.notFound.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t.notFound.body}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.notFound.home}
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#f7e8de" },
      { title: "Aria Bali Massage — Home Service Massage in Seminyak" },
      {
        name: "description",
        content:
          "Professional home service massage in Seminyak, Bali. Balinese, hot stone, deep tissue, reflexology & lymphatic drainage at your villa. Book on WhatsApp.",
      },
      { name: "author", content: "Aria Bali Massage" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "Aria Bali Massage" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Aria Bali Massage — Home Service Massage in Seminyak" },
      { name: "twitter:title", content: "Aria Bali Massage — Home Service Massage in Seminyak" },
      { name: "description", content: "Aria Bali Massage offers professional, mobile-first home massage services in Seminyak, Bali, focused on relaxation and recovery." },
      { property: "og:description", content: "Aria Bali Massage offers professional, mobile-first home massage services in Seminyak, Bali, focused on relaxation and recovery." },
      { name: "twitter:description", content: "Aria Bali Massage offers professional, mobile-first home massage services in Seminyak, Bali, focused on relaxation and recovery." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f206284d-15f2-47bf-b95c-81d9ab75697b/id-preview-14d8072e--ab144ecd-ab2a-48d4-8048-6c9236d662ba.lovable.app-1777301101575.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f206284d-15f2-47bf-b95c-81d9ab75697b/id-preview-14d8072e--ab144ecd-ab2a-48d4-8048-6c9236d662ba.lovable.app-1777301101575.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://images.unsplash.com" },
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "Aria Bali Massage",
          description:
            "Professional home service massage in Seminyak, Bali. Balinese, hot stone, deep tissue, reflexology, and lymphatic drainage at your villa or home.",
          telephone: "+62 822-6629-6329",
          email: "komangdarisasih88@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Dewi Saraswati II",
            addressLocality: "Seminyak",
            addressRegion: "Bali",
            postalCode: "80361",
            addressCountry: "ID",
          },
          areaServed: ["Seminyak", "Kuta", "Canggu", "Bali"],
          priceRange: "$$",
          openingHours: "Mo-Su 09:00-22:00",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LangProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <StickyWhatsApp />
      </div>
    </LangProvider>
  );
}
