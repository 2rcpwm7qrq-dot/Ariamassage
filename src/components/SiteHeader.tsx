import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { useLang, WHATSAPP_LINK } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/use-scroll-reveal";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(8);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const navItems = [
    { to: "/", label: t.nav.home },
    { to: "/body-treatments", label: t.nav.body },
    { to: "/packages", label: t.nav.packages },
    { to: "/gallery", label: t.nav.gallery },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm",
      )}
    >
      <div className="relative">
        <div
          className={cn(
            "mx-auto flex w-full max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Link
            to="/"
            aria-label="Aria Bali Massage — Home"
            onClick={() => setOpen(false)}
            className="transition-transform duration-200 hover:scale-[1.02]"
          >
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="group relative px-2.5 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary data-[status=active]:text-primary lg:px-3"
              >
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-2.5 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100 group-data-[status=active]:scale-x-100 lg:inset-x-3"
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div
              role="group"
              aria-label="Language"
              className="relative flex overflow-hidden rounded-full border border-border/70 bg-card/80 p-0.5 text-xs font-medium backdrop-blur-sm"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-y-0.5 w-[calc(50%-2px)] rounded-full bg-primary shadow-soft transition-transform duration-300 ease-out",
                  lang === "id" ? "translate-x-full" : "translate-x-0",
                )}
              />
              {(["en", "id"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={cn(
                    "relative z-10 min-h-[36px] px-3.5 py-1.5 uppercase tracking-wider transition-colors duration-200",
                    lang === l ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden h-9 items-center gap-1.5 rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-card sm:inline-flex"
            >
              <MessageCircle className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-[-8deg]" />
              {t.cta.whatsappShort}
            </a>

            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-all duration-200 hover:bg-foreground/5 active:scale-90 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <Menu
                className={cn(
                  "absolute h-5 w-5 transition-all duration-300",
                  open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
                )}
              />
              <X
                className={cn(
                  "absolute h-5 w-5 transition-all duration-300",
                  open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
                )}
              />
            </button>
          </div>
        </div>

        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className={cn(
            "fixed inset-0 top-16 z-30 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 md:hidden",
            open ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        />

        {/* Mobile sheet */}
        <div
          className={cn(
            "absolute inset-x-0 top-full z-40 origin-top overflow-hidden border-b border-border/60 bg-background/98 shadow-card backdrop-blur-md transition-all duration-300 ease-out md:hidden",
            open ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0",
          )}
        >
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4">
            {navItems.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{
                  className:
                    "text-primary [&>span:last-child]:scale-x-100 [&>span:last-child]:opacity-100",
                }}
                style={{
                  animationDelay: open ? `${i * 60 + 80}ms` : "0ms",
                  animationFillMode: "both",
                }}
                className={cn(
                  "group relative flex items-center justify-between border-b border-border/40 px-2 py-4 text-lg font-serif text-foreground/85 transition-colors last:border-b-0 hover:text-primary active:text-primary",
                  open && "animate-fade-up",
                )}
              >
                <span className="flex items-center gap-3">
                  <span className="text-[10px] font-sans font-medium tracking-[0.2em] text-muted-foreground/70">
                    0{i + 1}
                  </span>
                  {item.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-primary/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-active:-translate-y-0.5 group-active:translate-x-0.5" />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-2 bottom-0 h-px origin-left scale-x-0 bg-primary opacity-0 transition-all duration-300"
                />
              </Link>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{
                animationDelay: open ? `${navItems.length * 60 + 80}ms` : "0ms",
                animationFillMode: "both",
              }}
              className={cn(
                "mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium uppercase tracking-wider text-primary-foreground shadow-soft transition-all duration-200 active:scale-[0.97]",
                open && "animate-fade-up",
              )}
            >
              <MessageCircle className="h-4 w-4" />
              {t.cta.whatsapp}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
