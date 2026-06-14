import { useState } from "react";
import { ShoppingBag, ExternalLink } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  branch: "ginan" | "komaki";
  className?: string;
  label?: string;
};

const links = {
  ginan: {
    name: "バングラキッチン岐南店 · Ginan",
    uber: "https://www.ubereats.com/jp/search?q=" + encodeURIComponent("Bangla Kitchen 岐南"),
    demae: "https://demae-can.com/search/?keyword=" + encodeURIComponent("Bangla Kitchen 岐南"),
    rocket: "https://rocketnow.jp/search?q=" + encodeURIComponent("Bangla Kitchen 岐南"),
  },
  komaki: {
    name: "バングラキッチン小牧店 · Komaki",
    uber: "https://www.ubereats.com/jp/search?q=" + encodeURIComponent("Bangla Kitchen 小牧"),
    demae: "https://demae-can.com/search/?keyword=" + encodeURIComponent("Bangla Kitchen 小牧"),
    rocket: "https://rocketnow.jp/search?q=" + encodeURIComponent("Bangla Kitchen 小牧"),
  },
};

export function OrderButton({ branch, className, label = "Online Order" }: Props) {
  const [open, setOpen] = useState(false);
  const b = links[branch];

  const services = [
    { name: "Uber Eats", url: b.uber, color: "bg-black text-white" },
    { name: "出前館 · Demae-can", url: b.demae, color: "bg-[oklch(0.55_0.20_25)] text-white" },
    { name: "Rocket Now", url: b.rocket, color: "bg-[oklch(0.30_0.07_155)] text-white" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className={className ?? "flex flex-col items-center justify-center gap-1 rounded-xl bg-foreground text-background py-3 text-xs sm:text-sm font-medium hover:opacity-90"}>
          <ShoppingBag className="h-4 w-4" /> {label}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>オンライン注文 · Online Order</DialogTitle>
          <DialogDescription>{b.name} — デリバリーサービスを選択 · Choose a delivery service</DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 mt-2">
          {services.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between rounded-xl ${s.color} px-4 py-3 text-sm font-semibold hover:opacity-90`}
            >
              <span>{s.name}</span>
              <ExternalLink className="h-4 w-4 opacity-80" />
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
