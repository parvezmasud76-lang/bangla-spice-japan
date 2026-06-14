import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CallButton } from "@/components/site/CallButton";

const links = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#locations", label: "Locations" },
  { href: "#catering", label: "Catering" },
  { href: "#grocery", label: "Grocery" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "deep-gradient/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "linear-gradient(160deg, oklch(0.22 0.05 155 / 0.95), oklch(0.15 0.04 155 / 0.95))" } : undefined}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          <a href="#home" className="flex min-w-0 items-center gap-2">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full gold-border bg-[oklch(0.22_0.05_155)] text-[oklch(0.85_0.14_85)] font-display text-lg font-bold">B</span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate font-display text-base sm:text-lg font-semibold text-[oklch(0.95_0.02_90)]">Bangla Kitchen</span>
              <span className="truncate text-[10px] sm:text-xs tracking-widest gold-text uppercase">SPICIA合同会社</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[oklch(0.92_0.02_90)]/85 hover:text-[oklch(0.85_0.14_85)] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <CallButton
              className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.78_0.13_85)] px-4 py-2 text-sm font-semibold text-[oklch(0.20_0.05_155)] shadow-md shadow-black/20 hover:bg-[oklch(0.82_0.13_85)] transition"
            >
              <Phone className="h-4 w-4" /> 電話する
            </CallButton>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full gold-border text-[oklch(0.95_0.02_90)]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10" style={{ background: "linear-gradient(160deg, oklch(0.22 0.05 155 / 0.98), oklch(0.15 0.04 155 / 0.98))" }}>
          <nav className="flex flex-col px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-[oklch(0.95_0.02_90)] border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:0582403113"
              className="mt-3 mb-2 inline-flex items-center justify-center gap-2 rounded-full bg-[oklch(0.78_0.13_85)] px-4 py-3 text-sm font-semibold text-[oklch(0.20_0.05_155)]"
            >
              <Phone className="h-4 w-4" /> 電話する
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
