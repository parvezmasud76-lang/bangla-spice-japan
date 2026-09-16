import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Phone, MapPin, ShoppingBag, UtensilsCrossed, Package, CalendarHeart,
  Store, ChefHat, Sparkles, Mail, Send, ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import { CallButton } from "@/components/site/CallButton";
import { OrderButton } from "@/components/site/OrderButton";


import hero from "@/assets/hero.jpg";
import biryani from "@/assets/biryani.jpg";
import curry from "@/assets/curry.jpg";
import tandoori from "@/assets/tandoori.jpg";
import samosa from "@/assets/samosa.jpg";
import naan from "@/assets/naan.jpg";
import jalebi from "@/assets/jalebi.jpg";
import drinks from "@/assets/drinks.jpg";
import grocery from "@/assets/grocery.jpg";
import restaurant from "@/assets/restaurant.jpg";
import event from "@/assets/event.jpg";
import cateringImg from "@/assets/catering.jpg";

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Authentic halal Indian curry, tandoori chicken and naan at Bangla Kitchen Japan"
        width={1600}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.15_0.05_155)]/85 via-[oklch(0.15_0.05_155)]/65 to-[oklch(0.15_0.05_155)]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.13_85/0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full gold-border bg-white/5 px-4 py-1.5 text-xs sm:text-sm tracking-widest uppercase text-[oklch(0.88_0.12_85)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Halal Certified · 日本全国
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-white">
            本格インド・<br className="sm:hidden" />バングラデシュ料理
          </h1>
          <p className="mt-3 text-xl sm:text-3xl font-display gold-text">
            Halal Indian &amp; Bangladeshi Restaurant
          </p>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed">
            Authentic halal cuisine, takeout, catering and grocery services across Japan.
            本物のスパイスと、家庭の温もりを。
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#locations"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[oklch(0.78_0.13_85)] px-7 py-4 text-base font-semibold text-[oklch(0.20_0.05_155)] shadow-xl shadow-black/30 hover:bg-[oklch(0.82_0.13_85)] hover:scale-[1.02] transition-all"
            >
              <Store className="h-5 w-5" /> 店舗を見る
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <CallButton
              className="inline-flex items-center justify-center gap-2 rounded-full gold-border bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur hover:bg-white/10 transition"
            >
              <Phone className="h-5 w-5 text-[oklch(0.85_0.14_85)]" /> 電話する
            </CallButton>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-md">
            {[
              { k: "2", v: "Locations" },
              { k: "100%", v: "Halal" },
              { k: "9–22:30", v: "Daily" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl sm:text-3xl gold-text">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative">
          <img
            src={restaurant}
            alt="Bangla Kitchen restaurant interior"
            loading="lazy"
            width={1280}
            height={960}
            className="rounded-2xl object-cover w-full aspect-[5/4] shadow-2xl shadow-[oklch(0.20_0.05_155)]/30"
          />
          <div className="absolute -bottom-6 -right-4 sm:-right-8 hidden sm:block bg-[oklch(0.20_0.05_155)] text-white rounded-2xl gold-border p-5 max-w-[220px] shadow-xl">
            <div className="font-display text-3xl gold-text">SPICIA</div>
            <div className="text-xs tracking-widest uppercase text-white/70">合同会社 · Since 2019</div>
          </div>
        </div>

        <div>
          <span className="text-xs tracking-[0.25em] uppercase text-[oklch(0.55_0.12_85)]">About Us</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[oklch(0.22_0.05_155)]">
            A taste of South Asia,<br />rooted in Japan.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Bangla Kitchen</strong> is operated by{" "}
            <strong className="text-foreground">SPICIA合同会社</strong>. We provide authentic
            Indian and Bangladeshi halal cuisine, takeout, catering services, event sales
            and halal grocery products.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">バングラキッチン</strong>は<strong className="text-foreground">SPICIA合同会社</strong>が運営する、本格インド・バングラデシュ料理のハラールレストランです。店内飲食・テイクアウト・ケータリング・イベント出店・ハラール食材販売まで幅広く対応しております。
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Most of our customers are local Japanese families and international residents
            who love our hand-ground spices, tandoor-baked breads, and slow-cooked curries.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            地元の日本人ファミリーや在住外国人のお客様に、手挽きスパイス、タンドール窯で焼いたパン、じっくり煮込んだカレーをお楽しみいただいております。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Halal Certified", "Tandoor Oven", "Hand-Ground Spices", "Family Friendly"].map((t) => (
              <span key={t} className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const services = [
  { icon: UtensilsCrossed, title: "Restaurant Dining", jp: "店舗ダイニング", desc: "Warm interiors, freshly cooked tandoor specialties.", descJp: "温かみのある店内で、焼きたてのタンドール料理をどうぞ。", img: restaurant },
  { icon: Package, title: "Takeout", jp: "テイクアウト", desc: "Order ahead by phone or Uber Eats for fast pickup.", descJp: "お電話またはUber Eatsで事前注文、スピーディーにお持ち帰り。", img: curry },
  { icon: ChefHat, title: "Catering", jp: "ケータリング", desc: "Buffets for companies, schools and weddings.", descJp: "企業・学校・結婚式向けのビュッフェに対応します。", img: cateringImg },
  { icon: CalendarHeart, title: "Event Sales", jp: "イベント出店", desc: "Festivals, matsuri and cultural events nationwide.", descJp: "全国のお祭り・文化イベントに出店いたします。", img: event },
  { icon: ShoppingBag, title: "Halal Grocery", jp: "ハラール食材", desc: "Imported spices, rice, lentils and halal meats.", descJp: "輸入スパイス・お米・豆類・ハラールミートを販売。", img: grocery },
];
export function Services() {
  return (
    <section id="services" className="deep-gradient text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs tracking-[0.25em] uppercase text-[oklch(0.85_0.14_85)]">Our Services</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">What we offer</h2>
          <p className="mt-4 text-white/70">From a quiet dinner to a 300-guest catering — we handle it all, fully halal.</p>
          <p className="mt-2 text-white/60 text-sm">少人数のお食事から300名規模のケータリングまで、すべて100％ハラールで対応いたします。</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, jp, desc, descJp, img }, i) => (
            <article
              key={title}
              className={`group relative overflow-hidden rounded-2xl gold-border bg-white/[0.03] backdrop-blur transition-all hover:bg-white/[0.06] ${i === 0 ? "lg:row-span-2 lg:col-span-1" : ""}`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/5]" : "aspect-[16/10]"}`}>
                <img src={img} alt={title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.05_155)] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[oklch(0.78_0.13_85)] text-[oklch(0.20_0.05_155)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-white">{title}</h3>
                    <div className="text-xs tracking-widest text-[oklch(0.85_0.14_85)]">{jp}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/70">{desc}</p>
                <p className="mt-2 text-sm text-white/60">{descJp}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCATIONS ---------------- */
type Branch = {
  key: "ginan" | "komaki";
  name: string; sub: string; phone: string; phoneRaw: string;
  postal: string; address: string;
  maps: string;
};
const branches: Branch[] = [
  {
    key: "ginan",
    name: "バングラキッチン岐南店",
    sub: "本店 · Ginan Main Branch",
    phone: "058-240-3113",
    phoneRaw: "0582403113",
    postal: "〒501-6002",
    address: "岐阜県羽島郡岐南町三宅5-39-103",
    maps: "https://share.google/nBTM68SmzhxU7vZk6",
  },
  {
    key: "komaki",
    name: "バングラキッチン小牧店",
    sub: "Komaki Branch",
    phone: "0568-48-7670",
    phoneRaw: "0568487670",
    postal: "〒485-0016",
    address: "愛知県小牧市間々原新田1900-1",
    maps: "https://share.google/0A134NXl71s3DCkZK",
  },
];


const hoursWeekday = [
  ["モーニング", "9:00 – 11:00"],
  ["ランチ", "11:00 – 15:00"],
  ["ディナー", "17:00 – 22:30"],
];
const hoursWeekend = [
  ["モーニング", "9:00 – 11:00"],
  ["ランチ", "11:00 – 16:00"],
  ["ディナー", "16:00 – 22:30"],
];

export function Locations() {
  return (
    <section id="locations" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.25em] uppercase text-[oklch(0.55_0.12_85)]">Our Branches</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[oklch(0.22_0.05_155)]">店舗案内 · Locations</h2>
          <p className="mt-4 text-muted-foreground">Two branches across Gifu &amp; Aichi. Tap to call, navigate, or order online.<br /><span className="text-sm">岐阜・愛知に2店舗。タップでお電話・地図・オンライン注文ができます。</span></p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {branches.map((b) => (
            <article key={b.name} className="overflow-hidden rounded-3xl bg-card shadow-xl shadow-[oklch(0.22_0.05_155)]/10 ring-1 ring-border">
              <div className="deep-gradient text-white p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl">{b.name}</h3>
                    <div className="mt-1 text-xs tracking-widest gold-text uppercase">{b.sub}</div>
                  </div>
                  <a href={`tel:${b.phoneRaw}`} className="rounded-full bg-[oklch(0.78_0.13_85)] px-4 py-2 text-sm font-semibold text-[oklch(0.20_0.05_155)] hover:bg-[oklch(0.82_0.13_85)]">
                    {b.phone}
                  </a>
                </div>
                <div className="mt-5 flex items-start gap-2 text-sm text-white/80">
                  <MapPin className="h-4 w-4 mt-0.5 text-[oklch(0.85_0.14_85)] shrink-0" />
                  <div>
                    <div>{b.postal}</div>
                    <div>{b.address}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h4 className="font-display text-lg text-[oklch(0.22_0.05_155)]">営業時間 · Business Hours</h4>
                <div className="mt-4 grid sm:grid-cols-2 gap-5">
                  <div className="rounded-xl bg-secondary p-4">
                    <div className="text-xs font-semibold tracking-wider uppercase text-[oklch(0.55_0.12_85)]">月曜日 · 火曜日</div>
                    <dl className="mt-2 space-y-1.5 text-sm">
                      {hoursWeekday.map(([k, v]) => (
                        <div key={k} className="flex justify-between"><dt className="text-muted-foreground">{k}</dt><dd className="font-medium">{v}</dd></div>
                      ))}
                    </dl>
                  </div>
                  <div className="rounded-xl bg-secondary p-4">
                    <div className="text-xs font-semibold tracking-wider uppercase text-[oklch(0.55_0.12_85)]">水曜 – 日曜 · 祝日</div>
                    <dl className="mt-2 space-y-1.5 text-sm">
                      {hoursWeekend.map(([k, v]) => (
                        <div key={k} className="flex justify-between"><dt className="text-muted-foreground">{k}</dt><dd className="font-medium">{v}</dd></div>
                      ))}
                    </dl>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                  <a href={`tel:${b.phoneRaw}`} className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[oklch(0.30_0.07_155)] text-white py-3 text-xs sm:text-sm font-medium hover:opacity-90">
                    <Phone className="h-4 w-4" /> 電話する
                  </a>
                  <a href={b.maps} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[oklch(0.78_0.13_85)] text-[oklch(0.20_0.05_155)] py-3 text-xs sm:text-sm font-medium hover:opacity-90">
                    <MapPin className="h-4 w-4" /> Google Maps
                  </a>
                  <OrderButton branch={b.key} />

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MENU ---------------- */
const menu = [
  { key: "Curry", jp: "カレー", img: curry, desc: "Butter chicken, masala, dal & more — slow-cooked with hand-ground spices.", descJp: "バターチキン、マサラ、ダルなど。挽きたてスパイスでじっくり煮込みました。" },
  { key: "Biryani", jp: "ビリヤニ", img: biryani, desc: "Fragrant basmati rice, saffron, tender halal meat in a sealed handi.", descJp: "香り高いバスマティライスとサフラン、柔らかなハラールミートを土鍋で蒸し上げ。" },
  { key: "Naan", jp: "ナン", img: naan, desc: "Soft tandoor-baked naan — plain, garlic, butter or cheese.", descJp: "タンドール窯で焼き上げたふわふわのナン。プレーン・ガーリック・バター・チーズ。" },
  { key: "Tandoori", jp: "タンドリー", img: tandoori, desc: "Chicken & seekh kebabs marinated overnight, fired in clay tandoor.", descJp: "一晩マリネしたチキンとシークケバブを、タンドール窯で香ばしく焼き上げ。" },
  { key: "Samosa", jp: "サモサ", img: samosa, desc: "Crispy pastry stuffed with spiced potato, served with chutneys.", descJp: "スパイス香るポテトを包んだサクサクの揚げ生地。チャツネを添えて。" },
  { key: "Jalebi", jp: "ジャレビ", img: jalebi, desc: "Crisp golden swirls soaked in fragrant saffron-cardamom syrup.", descJp: "サフランとカルダモンのシロップに浸した、黄金色の伝統スイーツ。" },
  { key: "Drinks", jp: "ドリンク", img: drinks, desc: "Mango lassi, masala chai, fresh juices & soft drinks.", descJp: "マンゴーラッシー、マサラチャイ、フレッシュジュース、各種ソフトドリンク。" },
];

export function MenuSection() {
  const [active, setActive] = useState(menu[0].key);
  return (
    <section id="menu" className="py-20 sm:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-[oklch(0.55_0.12_85)]">Menu</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[oklch(0.22_0.05_155)]">メニュー</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">A handcrafted selection of the most loved Indian & Bangladeshi dishes.<br /><span className="text-sm">人気のインド・バングラデシュ料理を、心を込めて手作りでご提供します。</span></p>
          </div>
          <div className="flex flex-wrap gap-2">
            {menu.map((m) => (
              <button
                key={m.key}
                onClick={() => setActive(m.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === m.key
                    ? "bg-[oklch(0.30_0.07_155)] text-white"
                    : "bg-white text-foreground hover:bg-[oklch(0.78_0.13_85)] hover:text-[oklch(0.20_0.05_155)]"
                }`}
              >
                {m.key}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {menu.map((m) => {
            const isActive = m.key === active;
            return (
              <article
                key={m.key}
                onMouseEnter={() => setActive(m.key)}
                className={`group overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all ${
                  isActive ? "ring-[oklch(0.78_0.13_85)] shadow-xl shadow-[oklch(0.78_0.13_85)]/20 -translate-y-1" : "hover:-translate-y-1"
                }`}
              >
                <div className="aspect-[5/4] overflow-hidden">
                  <img src={m.img} alt={`${m.key} - ${m.jp}`} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl text-[oklch(0.22_0.05_155)]">{m.key}</h3>
                    <span className="text-sm gold-text font-semibold">{m.jp}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                  <p className="mt-1 text-sm text-muted-foreground/80">{m.descJp}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
import galleryFood1 from "@/assets/gallery-food-1.jpg";
import galleryFood2 from "@/assets/gallery-food-2.jpg";
import galleryFood3 from "@/assets/gallery-food-3.jpg";
import galleryFood4 from "@/assets/gallery-food-4.jpg";
import galleryFood5 from "@/assets/gallery-food-5.jpg";

const gallery = [
  { src: galleryFood1, alt: "Naan and curry" },
  { src: galleryFood2, alt: "Naan and curry" },
  { src: galleryFood3, alt: "Naan and curry" },
  { src: galleryFood4, alt: "Spicy fried chicken" },
  { src: galleryFood5, alt: "Spiced rice and meatballs" },
  { src: restaurant, alt: "Restaurant interior" },
  { src: biryani, alt: "Chicken biryani" },
  { src: tandoori, alt: "Tandoori chicken" },
  { src: event, alt: "Event sales stall" },
  { src: grocery, alt: "Halal grocery store" },
  { src: cateringImg, alt: "Catering buffet" },
  { src: samosa, alt: "Samosa" },
  { src: jalebi, alt: "Jalebi dessert" },
];
export function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.25em] uppercase text-[oklch(0.55_0.12_85)]">Gallery</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[oklch(0.22_0.05_155)]">ギャラリー</h2>
          <p className="mt-4 text-muted-foreground">From kitchen flames to festival nights.<br /><span className="text-sm">厨房の炎から、お祭りの夜まで。</span></p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {gallery.map((g, i) => (
            <div key={i} className={`overflow-hidden rounded-2xl group ${i % 5 === 0 ? "row-span-2 aspect-square md:aspect-[1/2]" : "aspect-square"}`}>
              <img src={g.src} alt={g.alt} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CATERING ---------------- */
export function Catering() {
  return (
    <section id="catering" className="relative overflow-hidden py-20 sm:py-28 deep-gradient text-white">
      <img src={cateringImg} alt="" aria-hidden loading="lazy" width={1280} height={960} className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.05_155)] via-[oklch(0.15_0.05_155)]/85 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs tracking-[0.25em] uppercase text-[oklch(0.85_0.14_85)]">Catering</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">ケータリングサービス</h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            We provide catering for festivals, company events, schools, cultural events
            and private parties throughout Japan. お祭り・企業・学校・文化イベント・
            プライベートパーティーまで、日本全国対応。
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
            {["Corporate buffets", "Weddings & parties", "School events", "Festival stalls", "Custom halal menus", "20 – 1,000+ guests"].map((t) => (
              <li key={t} className="flex items-center gap-2 rounded-xl gold-border bg-white/5 px-4 py-3">
                <Sparkles className="h-4 w-4 text-[oklch(0.85_0.14_85)] shrink-0" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[oklch(0.78_0.13_85)] px-7 py-3.5 text-sm font-semibold text-[oklch(0.20_0.05_155)] hover:bg-[oklch(0.82_0.13_85)]">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <CallButton className="inline-flex items-center justify-center gap-2 rounded-full gold-border bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
              <Phone className="h-4 w-4" /> 電話する
            </CallButton>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <img src={event} alt="Event catering" loading="lazy" width={1280} height={960} className="rounded-3xl object-cover w-full aspect-[4/5] gold-border" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- GROCERY ---------------- */
export function Grocery() {
  return (
    <section id="grocery" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <img src={grocery} alt="Halal grocery store" loading="lazy" width={1280} height={960} className="rounded-3xl object-cover w-full aspect-[4/3] shadow-xl" />
        <div>
          <span className="text-xs tracking-[0.25em] uppercase text-[oklch(0.55_0.12_85)]">Halal Grocery</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[oklch(0.22_0.05_155)]">ハラール食材店</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Imported spices, basmati rice, lentils, frozen halal meats, paneer, snacks, sweets,
            and ready-to-cook sauces — sourced directly from India and Bangladesh.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            輸入スパイス、バスマティライス、豆類、冷凍ハラールミート、パニール、スナック、お菓子、
            ソース類などをインド・バングラデシュから直輸入しています。
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
            {["Spices & Masala", "Basmati Rice", "Halal Meat", "Lentils & Beans", "Snacks & Sweets", "Frozen Items"].map((t) => (
              <span key={t} className="rounded-xl bg-secondary px-4 py-3 text-sm font-medium">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const message = form.message.trim();
    if (!name || !message) {
      toast.error("Please enter your name and message.");
      return;
    }
    setBusy(true);
    const { error } = await supabase.from("contact_inquiries").insert({
      name: name.slice(0, 100),
      phone: form.phone.trim() ? form.phone.trim().slice(0, 30) : null,
      email: form.email.trim() ? form.email.trim().slice(0, 255) : null,
      message: message.slice(0, 2000),
    });
    setBusy(false);
    if (error) {
      toast.error("Could not send. Please try again or call us directly.");
      return;
    }
    setForm({ name: "", phone: "", email: "", message: "" });
    toast.success("Inquiry received. We'll get back to you shortly. ありがとうございます！");
  };
}