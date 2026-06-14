import { useState, type ReactNode } from "react";
import { Phone, MapPin, X } from "lucide-react";

const branches = [
  { name: "岐南店 (本店)", nameEn: "Ginan (Main)", tel: "0582403113", display: "058-240-3113" },
  { name: "小牧店", nameEn: "Komaki", tel: "0568487670", display: "0568-48-7670" },
];

export function CallButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-[oklch(0.22_0.05_155)] gold-border p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h3 className="font-display text-2xl text-white">店舗を選択 / Choose Branch</h3>
                <p className="text-sm text-white/60 mt-1">どちらの店舗にお電話しますか？</p>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {branches.map((b) => (
                <a
                  key={b.tel}
                  href={`tel:${b.tel}`}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between gap-3 rounded-xl bg-[oklch(0.30_0.07_155)] hover:bg-[oklch(0.78_0.13_85)] hover:text-[oklch(0.20_0.05_155)] text-white px-4 py-4 transition"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[oklch(0.78_0.13_85)] text-[oklch(0.20_0.05_155)] group-hover:bg-white shrink-0">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="font-semibold truncate">{b.name}</div>
                      <div className="text-xs opacity-80 truncate">{b.nameEn}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Phone className="h-4 w-4" />
                    <span className="font-semibold text-sm whitespace-nowrap">{b.display}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
