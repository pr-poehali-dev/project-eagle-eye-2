import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts, categoryColors, BlogCategory } from "@/data/blogData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const filters: ("Все" | BlogCategory)[] = ["Все", "Дизайн", "Нейросети", "Маркетплейсы", "Кафе", "Брендинг", "Кейс", "Гайд"];

const INITIAL_COUNT = 6;

export default function Blog() {
  const [active, setActive] = useState<"Все" | BlogCategory>("Все");
  const [visible, setVisible] = useState(INITIAL_COUNT);

  const filtered = active === "Все" ? blogPosts : blogPosts.filter(p => p.category === active);
  const shown = filtered.slice(0, visible);

  return (
    <div className="min-h-screen" style={{ background: "#0a0e1a" }}>
      <Header />

      {/* Hero */}
      <div className="pt-28 pb-12 px-6 text-center" style={{ background: "linear-gradient(to bottom, #080d1a, #0a0e1a)" }}>
        <p className="text-[#00d4ff] text-xs uppercase tracking-[0.3em] font-semibold mb-3">Стрельцов Digital</p>
        <h1 className="text-white font-extrabold text-4xl md:text-5xl uppercase tracking-tight mb-4"
          style={{ textShadow: "0 0 40px rgba(0,212,255,0.2)" }}>
          БЛОГ
        </h1>
        <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto">
          Статьи о дизайне, нейросетях и бизнесе
        </p>
        <div className="mt-5 mx-auto w-16 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, #00d4ff, transparent)" }} />
      </div>

      {/* Filters */}
      <div className="px-6 md:px-12 mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => { setActive(f); setVisible(INITIAL_COUNT); }}
              className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300"
              style={active === f
                ? { background: "#00d4ff", color: "#0a0e1a", boxShadow: "0 0 16px rgba(0,212,255,0.5)" }
                : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.1)" }
              }
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {shown.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#111827",
                border: "1px solid #1e293b",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#00d4ff";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(0,212,255,0.12)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#1e293b";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: categoryColors[post.category], color: "#0a0e1a" }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h2 className="text-white font-bold text-base leading-snug line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-[#94a3b8] text-sm leading-relaxed line-clamp-3 flex-1">
                  {post.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/8">
                  <div className="flex items-center gap-3 text-[#64748b] text-xs">
                    <span>📅 {post.date}</span>
                    <span>⏱ {post.readTime} мин</span>
                  </div>
                  <span className="text-[#00d4ff] text-xs font-semibold">Читать →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load more */}
        {visible < filtered.length && (
          <div className="text-center pb-16">
            <button
              onClick={() => setVisible(v => v + INITIAL_COUNT)}
              className="px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white transition-all hover:opacity-90"
              style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)" }}
            >
              Загрузить ещё статьи
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
