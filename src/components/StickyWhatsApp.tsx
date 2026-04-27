import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, useLang } from "@/lib/i18n";
import { useScrollDirection } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

export function StickyWhatsApp() {
  const { t } = useLang();
  const dir = useScrollDirection(120, 8);
  const hidden = dir === "down";

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.cta.bookNow}
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
        right: "max(1.25rem, env(safe-area-inset-right))",
      }}
      className={cn(
        "group fixed z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-all duration-300 ease-out hover:scale-110 hover:shadow-card active:scale-95 sm:h-16 sm:w-16",
        hidden ? "translate-y-24 opacity-0" : "translate-y-0 opacity-100",
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full bg-primary opacity-60 motion-safe:animate-ping"
      />
      <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[-8deg] group-active:rotate-[-12deg]" />
    </a>
  );
}
