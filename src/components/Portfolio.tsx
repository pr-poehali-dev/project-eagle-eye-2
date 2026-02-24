import { useState } from "react";
import Icon from "@/components/ui/icon";

type Item = { id: number; title: string; cat: string; color: string; img?: string; emoji?: string };

const filters = ["Все", "Маркетплейсы", "Сайты", "Меню кафе", "Обложки ВК", "Визуал", "Брендинг"];

const items: Item[] = [
  { id: 1, title: "Кроссовки Blaze Runner X", cat: "Маркетплейсы", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/b2e09f6b-ebe8-48c9-a12e-6bb6e7746fb1.jpg", color: "#0a1f3d" },
  { id: 2, title: "Повербанк 20000 mAh", cat: "Маркетплейсы", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/2034e4b2-e0dd-466b-b2f6-4edf5579f7ef.jpg", color: "#0d1a35" },
  { id: 3, title: "Aurora Espresso Pro", cat: "Маркетплейсы", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/cbde618b-0e84-41f6-8480-f136b2ac598c.jpg", color: "#1a1008" },
  { id: 4, title: "Tactical Vanguard", cat: "Маркетплейсы", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/b124ea8f-6a99-4734-9aef-8d7ae04e4765.jpg", color: "#081a15" },
  { id: 5, title: "Тайная Гармония", cat: "Маркетплейсы", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/657337fb-3199-4597-9165-fe753ab1337b.jpg", color: "#1a0d2e" },
  { id: 16, title: "Сайт кофейни", cat: "Сайты", emoji: "☕", color: "#1a1008" },
  { id: 17, title: "Сайт барбершопа", cat: "Сайты", emoji: "✂️", color: "#0d1a1a" },
  { id: 18, title: "Сайт фитнес-клуба", cat: "Сайты", emoji: "💪", color: "#0a1a10" },
  { id: 7, title: "Меню донер", cat: "Меню кафе", emoji: "🌯", color: "#1a1208" },
  { id: 8, title: "Меню бургеры", cat: "Меню кафе", emoji: "🍔", color: "#1a0d08" },
  { id: 9, title: "Меню мороженое", cat: "Меню кафе", emoji: "🍦", color: "#0d0d1a" },
  { id: 10, title: "Обложка ВК кофейня", cat: "Обложки ВК", emoji: "🖼", color: "#12100a" },
  { id: 11, title: "Обложка ВК барбер", cat: "Обложки ВК", emoji: "💈", color: "#0a1215" },
  { id: 12, title: "Обложка ВК фитнес", cat: "Обложки ВК", emoji: "🏋️", color: "#0a150a" },
  { id: 13, title: "Hair визуал", cat: "Визуал", emoji: "💇", color: "#150a12" },
  { id: 14, title: "Кофейня визуал", cat: "Визуал", emoji: "☕", color: "#150f08" },
  { id: 15, title: "Nail визуал", cat: "Визуал", emoji: "💅", color: "#15080f" },
];

export default function Portfolio() {
  const [active, setActive] = useState("Все");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const filtered = active === "Все" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="портфолио" className="py-16 px-6 md:px-12 lg:px-20" style={{ background: "#060c18" }}>
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-[#00aaff] text-xs uppercase tracking-[0.3em] font-semibold mb-3">Портфолио</p>
        <h2
          className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight"
          style={{ textShadow: "0 0 40px rgba(0,120,255,0.25)" }}
        >
          МОИ РАБОТЫ
        </h2>
        <div
          className="mt-4 mx-auto w-16 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, #00aaff, transparent)" }}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            style={
              active === f
                ? { background: "#00aaff", color: "#fff", boxShadow: "0 0 16px rgba(0,170,255,0.5)" }
                : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.1)" }
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => item.img && setLightbox(item)}
            className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
              background: item.color,
              border: "1px solid rgba(255,255,255,0.07)",
              aspectRatio: "4/3",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              cursor: item.img ? "zoom-in" : "default",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(0,170,255,0.45)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
          >
            {item.img ? (
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3">
                {item.emoji && <span className="text-4xl">{item.emoji}</span>}
                <p className="text-white/40 text-[10px] uppercase tracking-wider text-center leading-tight">Фото скоро</p>
              </div>
            )}

            {/* Hover overlay */}
            <div
              className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(to top, rgba(0,10,30,0.92) 0%, transparent 60%)" }}
            >
              <div className="flex items-end justify-between w-full">
                <div>
                  <p className="text-white font-bold text-xs leading-snug">{item.title}</p>
                  <p className="text-[#00aaff] text-[10px] mt-0.5">{item.cat}</p>
                </div>
                {item.img && <Icon name="ZoomIn" size={16} className="text-white/70 flex-shrink-0 mb-0.5" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={lightbox.img}
            alt={lightbox.title}
            className="max-w-full max-h-[90vh] rounded-2xl object-contain"
            style={{ boxShadow: "0 0 60px rgba(0,170,255,0.2)" }}
            onClick={e => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white/60 text-sm">{lightbox.title}</p>
        </div>
      )}
    </section>
  );
}
