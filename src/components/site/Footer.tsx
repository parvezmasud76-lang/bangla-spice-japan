import { Instagram, Facebook, MessageCircle, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="deep-gradient text-[oklch(0.92_0.02_90)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full gold-border text-[oklch(0.85_0.14_85)] font-display text-lg font-bold">B</span>
              <div>
                <div className="font-display text-lg">Bangla Kitchen</div>
                <div className="text-xs tracking-widest gold-text uppercase">SPICIA合同会社</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70 max-w-xs">
              Authentic halal Indian & Bangladeshi cuisine across Japan. 本格ハラール料理。
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg gold-text">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[oklch(0.85_0.14_85)]" /> <a href="tel:0582403113" className="hover:text-white">058-240-3113</a> <span className="text-white/50">岐南店</span></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[oklch(0.85_0.14_85)]" /> <a href="tel:0568487670" className="hover:text-white">0568-48-7670</a> <span className="text-white/50">小牧店</span></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[oklch(0.85_0.14_85)]" /> <a href="mailto:info@spicia.co.jp" className="hover:text-white">info@spicia.co.jp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg gold-text">Follow</h4>
            <div className="mt-4 flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Facebook, label: "Facebook", href: "#" },
                { Icon: MessageCircle, label: "LINE", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full gold-border text-[oklch(0.85_0.14_85)] hover:bg-[oklch(0.78_0.13_85)] hover:text-[oklch(0.20_0.05_155)] transition"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} SPICIA合同会社. All rights reserved.</div>
          <div>Halal Certified · Indian · Bangladeshi · Japan</div>
        </div>
      </div>
    </footer>
  );
}
