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
  { id: 16, title: "Discover Your Colors", cat: "Сайты", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/36354196-276e-4e78-856d-e90855476e40.jpg", color: "#0d0820" },
  { id: 17, title: "Dress For Success", cat: "Сайты", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/03166548-7edb-4780-87db-2727fb2b54fc.jpg", color: "#080f1a" },
  { id: 18, title: "Shop Smarter Look Better", cat: "Сайты", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/6bba7c20-e700-4983-8c51-03816ffe0d6e.jpg", color: "#061a10" },
  { id: 19, title: "Less Is More", cat: "Сайты", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/d8e85a1c-966e-41bd-97a3-dc8fffb92c0e.jpg", color: "#1a080f" },
  { id: 20, title: "Style That Lasts", cat: "Сайты", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/391e6e62-cc8b-4774-84e4-3346a8b09291.jpg", color: "#1a1008" },
  { id: 7, title: "Меню Бургеры", cat: "Меню кафе", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/2846a508-8ae3-4920-8ba8-ffa52481448d.jpg", color: "#1a0d00" },
  { id: 8, title: "Меню Кофейня", cat: "Меню кафе", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/a02377da-e308-47d3-85f4-d0a45e8c607d.jpg", color: "#1a0e00" },
  { id: 9, title: "Меню Суши Бар", cat: "Меню кафе", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/5e287550-f996-472d-a028-f81fd6b95669.jpg", color: "#0d0005" },
  { id: 21, title: "Меню Мороженое", cat: "Меню кафе", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/aa106d06-470b-468c-b2f1-19298e077101.jpg", color: "#0d1a15" },
  { id: 22, title: "Меню ВОК", cat: "Меню кафе", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/00738761-63b2-454e-b1a0-2468386aa38f.jpg", color: "#1a0500" },
  { id: 10, title: "Обложка ВК Бьюти", cat: "Обложки ВК", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/39d5cbb1-e710-4d63-a402-69015fe70424.jpg", color: "#1a0d10" },
  { id: 11, title: "Обложка ВК Авто", cat: "Обложки ВК", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/6d526fa2-8df5-4f1a-a8c2-a8c3fca70db7.jpg", color: "#1a0500" },
  { id: 12, title: "Обложка ВК Образование", cat: "Обложки ВК", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/3f91d0ab-cad5-4ee1-bf32-48557176586c.jpg", color: "#080d1a" },
  { id: 23, title: "Обложка ВК Туризм", cat: "Обложки ВК", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/cae1115a-7048-4dc1-9436-50f735ff2c94.jpg", color: "#1a0e00" },
  { id: 24, title: "Обложка ВК Медицина", cat: "Обложки ВК", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/4a429772-a0f9-4f88-bed1-fad463474d2d.jpg", color: "#061a10" },
  { id: 13, title: "Зёрна — кофейня", cat: "Визуал", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/dcb51a10-177d-49fc-8c38-96e00ca2cb8c.jpg", color: "#150f08" },
  { id: 14, title: "Blade — барбершоп", cat: "Визуал", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/e89f06ae-44d0-4fe9-bcbb-bb6ef73e7621.jpg", color: "#0d0a08" },
  { id: 15, title: "Сила — фитнес", cat: "Визуал", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/28821ac7-8ff1-4e77-8556-c27e65e2d58b.jpg", color: "#120d08" },
  { id: 25, title: "Bloom — цветочный", cat: "Визуал", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/e050bacc-4af4-4e7a-b1f7-0974a2ba0eaf.jpg", color: "#150a10" },
  { id: 26, title: "Boss Burger — ресторан", cat: "Визуал", img: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/f519ac3c-43b4-40d2-8e65-50626edcfb5f.jpg", color: "#1a0500" },
];

export default function Portfolio() {
  const [active, setActive] = useState("Все");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const filtered = active === "Все" ? items : items.filter((i) => i.cat === active);
  const withImg = items.filter((i) => i.img);

  const openLightbox = (item: Item) => { if (item.img) setLightbox(item); };

  const navigate = (dir: 1 | -1, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightbox) return;
    const idx = withImg.findIndex((i) => i.id === lightbox.id);
    const next = withImg[(idx + dir + withImg.length) % withImg.length];
    setLightbox(next);
  };

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
            onClick={() => openLightbox(item)}
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

          {/* Prev */}
          <button
            className="absolute left-3 md:left-6 text-white/60 hover:text-white transition-colors p-2 rounded-full"
            style={{ background: "rgba(255,255,255,0.08)" }}
            onClick={(e) => navigate(-1, e)}
          >
            <Icon name="ChevronLeft" size={32} />
          </button>

          <img
            src={lightbox.img}
            alt={lightbox.title}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
            style={{ boxShadow: "0 0 60px rgba(0,170,255,0.2)" }}
            onClick={e => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-3 md:right-6 text-white/60 hover:text-white transition-colors p-2 rounded-full"
            style={{ background: "rgba(255,255,255,0.08)" }}
            onClick={(e) => navigate(1, e)}
          >
            <Icon name="ChevronRight" size={32} />
          </button>

          <p className="absolute bottom-6 text-white/60 text-sm">{lightbox.title}</p>
        </div>
      )}
    </section>
  );
}