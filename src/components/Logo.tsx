import logoSrc from "@/assets/aria-logo.webp";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoSrc}
        alt="Aria Bali Massage"
        width={40}
        height={40}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
      <div className="flex flex-col leading-none">
        <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
          Ari'a
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Bali Massage
        </span>
      </div>
    </div>
  );
}