import { useNavigate } from "react-router-dom";

const goToContacts = (navigate: ReturnType<typeof useNavigate>, msg: string) => {
  const el = document.getElementById("контакты");
  if (el) { el.scrollIntoView({ behavior: "smooth" }); }
  else { navigate("/"); setTimeout(() => document.getElementById("контакты")?.scrollIntoView({ behavior: "smooth" }), 100); }
  setTimeout(() => {
    const ta = document.querySelector<HTMLTextAreaElement>("#контакты textarea");
    if (ta) { ta.value = msg; ta.dispatchEvent(new Event("input", { bubbles: true })); ta.focus(); }
  }, 600);
};

const packages = [
  { title: "Старт", price: "2 990₽", items: ["1 концепция", "2 правки", "PNG + JPG"] },
  { title: "Бизнес", price: "5 990₽", items: ["2 концепции", "5 правок", "PNG + JPG + PDF + SVG", "Подбор цветов и шрифтов"], popular: true },
  { title: "Премиум", price: "9 990₽", items: ["3 концепции", "Неограниченные правки", "Все форматы", "Адаптация под маркетплейсы"] },
];

const niches = [
  { emoji: "☕", label: "Кофейня", desc: "тёплые тона, минимализм" },
  { emoji: "💈", label: "Барбершоп", desc: "мужской стиль, брутал" },
  { emoji: "🍕", label: "Ресторан / кафе", desc: "аппетитно и узнаваемо" },
  { emoji: "💅", label: "Бьюти-студия", desc: "нежно, стильно, женственно" },
  { emoji: "🏋️", label: "Фитнес / спорт", desc: "энергия, динамика, сила" },
  { emoji: "🔧", label: "Услуги / ремонт", desc: "надёжно, профессионально" },
];

export default function LogosBlock() {
  const navigate = useNavigate();

  return (
    <section
      id="логотипы"
      className="py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #080d1a 0%, #060c18 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 60% at 75% 40%, rgba(120,0,255,0.09) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-[#00aaff] text-xs uppercase tracking-[0.3em] font-semibold mb-3">Брендинг</p>
          <h2 className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight"
            style={{ textShadow: "0 0 40px rgba(0,120,255,0.25)" }}>
            ⚡ Логотипы и Брендинг
          </h2>
          <p className="text-white/50 mt-4 text-sm md:text-base max-w-xl mx-auto">
            Не шаблон из конструктора. Не клипарт.{" "}
            <span className="text-[#00aaff]">Уникальный логотип через нейросети</span> за 1 день.
          </p>
          <div className="mt-4 mx-auto w-16 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #00aaff, transparent)" }} />
        </div>

        <div className="w-full rounded-2xl overflow-hidden mb-12"
          style={{ boxShadow: "0 0 60px rgba(0,100,255,0.15), 0 0 0 1px rgba(255,255,255,0.06)" }}>
          <img
            src="https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/0ef27d28-1090-4293-9d00-1f1f17b53554.jpg"
            alt="Logos & Branding portfolio"
            className="w-full object-cover"
            style={{ maxHeight: "380px" }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="rounded-2xl p-6 flex flex-col gap-4 relative"
              style={{
                background: pkg.popular ? "linear-gradient(145deg, #120d2e, #0d0a22)" : "rgba(255,255,255,0.03)",
                border: pkg.popular ? "1px solid rgba(120,0,255,0.5)" : "1px solid rgba(255,255,255,0.08)",
                boxShadow: pkg.popular ? "0 0 32px rgba(120,0,255,0.15)" : "none",
              }}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #7000ff, #aa44ff)" }}>
                  Популярный
                </span>
              )}
              <div className="flex justify-between items-start">
                <p className="text-white font-bold text-base">{pkg.title}</p>
                <span className="text-lg font-extrabold shrink-0"
                  style={{ color: pkg.popular ? "#aa44ff" : "#00aaff", textShadow: pkg.popular ? "0 0 12px rgba(120,0,255,0.5)" : "0 0 12px rgba(0,170,255,0.4)" }}>
                  {pkg.price}
                </span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px]"
                      style={{ background: pkg.popular ? "rgba(120,0,255,0.2)" : "rgba(0,170,255,0.15)", color: pkg.popular ? "#aa44ff" : "#00aaff", border: pkg.popular ? "1px solid rgba(120,0,255,0.4)" : "1px solid rgba(0,170,255,0.35)" }}>
                      ✓
                    </span>
                    <span className="text-white/70 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-6 border border-white/8 mb-8" style={{ background: "rgba(255,255,255,0.03)" }}>
          <p className="text-[#00aaff] text-xs uppercase tracking-widest font-semibold mb-4">Примеры ниш</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {niches.map((n) => (
              <div key={n.label} className="flex items-center gap-2.5">
                <span className="text-xl">{n.emoji}</span>
                <div>
                  <span className="text-white text-sm font-medium">{n.label}</span>
                  <span className="text-white/40 text-xs block">{n.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => goToContacts(navigate, "Хочу заказать логотип и брендинг")}
            className="inline-flex items-center gap-2 font-bold uppercase tracking-widest transition-all duration-300 hover:brightness-125"
            style={{ fontSize: "0.85rem", padding: "14px 40px", background: "linear-gradient(135deg, #0055ff, #00aaff)", color: "#fff", borderRadius: "6px", boxShadow: "0 0 32px rgba(0,170,255,0.4)" }}
          >
            Хочу логотип → Написать в ЛС
          </button>
        </div>
      </div>
    </section>
  );
}
