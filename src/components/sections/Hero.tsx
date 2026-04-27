import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useLang, WHATSAPP_LINK } from "@/lib/i18n";

function FrangipaniBg() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -right-20 -top-10 h-[420px] w-[420px] opacity-90"
      viewBox="0 0 400 400"
      fill="none"
    >
      <g transform="translate(200 200)">
        {[0, 72, 144, 216, 288].map((rot) => (
          <ellipse
            key={rot}
            cx="0"
            cy="-90"
            rx="55"
            ry="95"
            transform={`rotate(${rot})`}
            fill="oklch(0.88 0.06 30)"
            opacity="0.85"
          />
        ))}
        <circle cx="0" cy="0" r="28" fill="oklch(0.85 0.11 80)" opacity="0.95" />
      </g>
    </svg>
  );
}

export function Hero() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <FrangipaniBg />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-6 sm:pt-48 sm:pb-24 md:pb-36 md:pt-56">
        <div className="animate-fade-up">
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
            — {t.hero.eyebrow}
          </span>
          <h1 className="mt-6 max-w-4xl font-serif text-[2.6rem] font-medium leading-[1.05] text-foreground text-balance sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {t.hero.title}
          </h1>
          <h2 className="mt-2 max-w-3xl font-serif text-3xl italic font-normal leading-tight text-primary sm:text-4xl md:text-5xl">
            {t.hero.titleAccent}
          </h2>
          <div className="mt-10 flex max-w-xl flex-col gap-6 sm:flex-row sm:items-end sm:gap-10">
            <p className="flex-1 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              {t.hero.subtitle}
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-medium uppercase tracking-wider text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-card active:scale-[0.97] active:translate-y-0"
            >
              <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-8deg] group-active:rotate-[-12deg]" />
              {t.cta.whatsapp}
              <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </a>
            <Link
              to="/body-treatments"
              className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-foreground hover:text-primary"
            >
              <span className="underline-coral">{t.cta.viewServices}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}