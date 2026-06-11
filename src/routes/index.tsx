import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Hero, About, Services, Locations, MenuSection, Gallery, Catering, Grocery, Contact,
} from "@/components/site/sections";

const TITLE = "Bangla Kitchen | SPICIA合同会社 — Halal Indian & Bangladeshi Restaurant Japan";
const DESC = "Authentic halal Indian & Bangladeshi cuisine, takeout, catering and grocery in Gifu (岐南) and Komaki (小牧), Japan. Bangla Kitchen by SPICIA合同会社.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Halal restaurant Japan, Indian restaurant Gifu, Bangladeshi restaurant Japan, Halal food Gifu, Halal food Komaki, Indian curry Japan, Bangla Kitchen, ハラール料理, インド料理, バングラデシュ料理" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Bangla Kitchen | SPICIA合同会社",
        servesCuisine: ["Indian", "Bangladeshi", "Halal"],
        priceRange: "¥¥",
        telephone: "+81-58-240-3113",
        email: "info@spicia.co.jp",
        location: [
          {
            "@type": "Place",
            name: "バングラキッチン岐南店（本店）",
            telephone: "+81-58-240-3113",
            address: { "@type": "PostalAddress", postalCode: "501-6002", streetAddress: "岐阜県羽島郡岐南町三宅5-3-9-103", addressCountry: "JP" },
          },
          {
            "@type": "Place",
            name: "バングラキッチン小牧店",
            telephone: "+81-568-48-7670",
            address: { "@type": "PostalAddress", postalCode: "485-0012", streetAddress: "愛知県小牧市間々原新田1900-1", addressCountry: "JP" },
          },
        ],
      }),
    }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Locations />
        <MenuSection />
        <Gallery />
        <Catering />
        <Grocery />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
