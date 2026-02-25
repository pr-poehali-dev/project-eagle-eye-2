import { useLang } from "@/context/LanguageContext";

const emojis = ["📦", "🌐", "📺", "🎨", "📱", "🏷", "🎬", "🏪"];

export default function Services() {
  const { t } = useLang();
  const s = t.services;

  return (
    <section id="услуги" className="py-16 px-6 md:px-12 lg:px-20" style={{ background: "#080d1a" }}>
      <div className="text-center mb-12">
        <p className="text-[#00aaff] text-xs uppercase tracking-[0.3em] font-semibold mb-3">{s.tag}</p>
        <h2 className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight"
          style={{ textShadow: "0 0 40px rgba(0,120,255,0.25)" }}>
          {s.title}
        </h2>
        <div className="mt-4 mx-auto w-16 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, #00aaff, transparent)" }} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {s.items.map((item, i) => (
          <div
            key={item.title}
            className="group rounded-xl p-5 flex flex-col gap-3 cursor-pointer transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(145deg, #0d1b2e, #090f1e)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(0,170,255,0.4)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
          >
            <div className="text-3xl">{emojis[i]}</div>
            <h3 className="text-white font-bold text-sm leading-snug">{item.title}</h3>
            <p className="text-white/50 text-xs leading-relaxed flex-1">{item.desc}</p>
            <div
              className="text-sm font-extrabold mt-1"
              style={{ color: "#00aaff", textShadow: "0 0 12px rgba(0,170,255,0.4)" }}
            >
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
