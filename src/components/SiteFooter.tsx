import { Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { useLang, WHATSAPP_LINK, WHATSAPP_NUMBER_DISPLAY, CONTACT_EMAIL, EMAIL_LINK } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="bg-foreground/[0.03]">
      <div className="mx-auto max-w-6xl px-5 py-14 pb-28 sm:px-6 sm:py-20 sm:pb-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Logo />
            <p className="mt-5 max-w-md font-serif text-xl leading-snug text-foreground/80 sm:text-2xl">
              {t.footer.tagline}
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              {t.nav.contact}
            </div>
            <div className="mt-4 space-y-3 text-sm sm:space-y-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[40px] items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={`tel:+62${WHATSAPP_NUMBER_DISPLAY.replace(/^0/, "")}`}
                className="flex min-h-[40px] items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" /> {WHATSAPP_NUMBER_DISPLAY}
              </a>
              <a
                href={EMAIL_LINK}
                className="flex min-h-[40px] items-center gap-2 break-all text-foreground/80 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0" /> {CONTACT_EMAIL}
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="text-pretty">{t.location.address}</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              {t.nav.home}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm md:grid-cols-1 md:gap-y-2">
              <Link to="/services" className="min-h-[40px] flex items-center text-foreground/80 hover:text-primary">{t.nav.services}</Link>
              <Link to="/body-treatments" className="min-h-[40px] flex items-center text-foreground/80 hover:text-primary">{t.nav.body}</Link>
              <Link to="/packages" className="min-h-[40px] flex items-center text-foreground/80 hover:text-primary">{t.nav.packages}</Link>
              <Link to="/gallery" className="min-h-[40px] flex items-center text-foreground/80 hover:text-primary">{t.nav.gallery}</Link>
              <Link to="/about" className="min-h-[40px] flex items-center text-foreground/80 hover:text-primary">{t.nav.about}</Link>
              <Link to="/contact" className="min-h-[40px] flex items-center text-foreground/80 hover:text-primary">{t.nav.contact}</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:mt-16 sm:flex-row">
          <span>© {new Date().getFullYear()} Aria Bali Massage</span>
          <span>{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}