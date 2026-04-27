import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { BodyHighlights } from "@/components/sections/BodyHighlights";
import { SpaAtmosphere } from "@/components/sections/SpaAtmosphere";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aria Bali Massage — Home Service Massage in Seminyak, Bali" },
      {
        name: "description",
        content:
          "Relax, recharge, rebalance. Professional home service massage in Seminyak — Balinese, hot stone, reflexology, lymphatic drainage. Book via WhatsApp.",
      },
      { property: "og:title", content: "Aria Bali Massage — Home Service in Seminyak" },
      {
        property: "og:description",
        content: "Massage at your villa or home in Bali. Book via WhatsApp.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/94b846d7-fed5-4d3d-8b9d-0ac95c44b818/id-preview-8d68900d--76c819c0-bb1a-46cf-9787-86fa0e1e6136.lovable.app-1777261167275.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/94b846d7-fed5-4d3d-8b9d-0ac95c44b818/id-preview-8d68900d--76c819c0-bb1a-46cf-9787-86fa0e1e6136.lovable.app-1777261167275.png",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <BodyHighlights />
      <SpaAtmosphere />
      <WhyChoose />
      <Testimonials />
      <Location />
      <BookingCTA />
    </>
  );
}
