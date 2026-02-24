const benefits = [
  "Статичные обложки — 1 картинка",
  "Живые обложки — 5 сменяющихся картинок",
  "Под любую нишу и стиль",
  "С текстом, акциями, контактами",
];

const niches = [
  { emoji: "☕", label: "Кофейня", desc: "тёплые тона, латте-арт, уют" },
  { emoji: "💈", label: "Барбершоп", desc: "тёмный стиль, мужской вайб" },
  { emoji: "🍕", label: "Пиццерия", desc: "аппетитная пицца с тянущимся сыром" },
  { emoji: "💅", label: "Nail-мастер", desc: "нежные тона, ногти, цветы" },
  { emoji: "🏋️", label: "Фитнес", desc: "мощный, энергичный, мотивация" },
  { emoji: "🌸", label: "Цветы", desc: "нежный, романтичный" },
];

const prices = [
  { title: "Статичная обложка", price: "990₽", desc: "1 картинка" },
  { title: "Живая обложка", price: "2 490₽", desc: "5 сменяющихся слайдов" },
  { title: "Обложка + аватарка + хайлайтс", price: "3 990₽", desc: "полный пакет" },
];

export default function VkCoversBlock() {
  return (
    <section
      id="обложки"
      className="py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #080d1a 0%, #070f1e 100%)" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(100,0,220,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#00aaff] text-xs uppercase tracking-[0.3em] font-semibold mb-3">Услуга</p>
          <h2
            className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight"
            style={{ textShadow: "0 0 40px rgba(0,120,255,0.25)" }}
          >
            🎨 Обложки для групп ВК
          </h2>
          <p className="text-white/55 mt-4 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Первое что видит человек заходя в группу — обложка.<br />
            <span style={{ color: "#ff4d4d" }}>Скучная обложка = ушёл.</span>{" "}
            <span style={{ color: "#00aaff" }}>Яркая обложка = подписался.</span>
          </p>
          <div
            className="mt-4 mx-auto w-16 h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, #00aaff, transparent)" }}
          />
        </div>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden mb-8" style={{ border: "1px solid rgba(0,170,255,0.15)" }}>
          <img
            src="https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/5f9abddd-119e-44cd-b126-e123c2925853.jpg"
            alt="Обложки для групп ВК"
            className="w-full object-cover"
            style={{ maxHeight: "380px" }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Benefits */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "linear-gradient(145deg, #0d1b2e, #090f1e)",
              border: "1px solid rgba(0,170,255,0.15)",
            }}
          >
            <h3 className="text-[#00aaff] font-bold text-xs uppercase tracking-widest mb-5">Что делаю</h3>
            <ul className="flex flex-col gap-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px]"
                    style={{ background: "rgba(0,170,255,0.15)", color: "#00aaff", border: "1px solid rgba(0,170,255,0.35)" }}
                  >
                    ✓
                  </span>
                  <span className="text-white/70 text-sm leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Niches */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "linear-gradient(145deg, #0d1b2e, #090f1e)",
              border: "1px solid rgba(0,170,255,0.15)",
            }}
          >
            <h3 className="text-[#00aaff] font-bold text-xs uppercase tracking-widest mb-5">Примеры ниш</h3>
            <ul className="flex flex-col gap-3">
              {niches.map((n) => (
                <li key={n.label} className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">{n.emoji}</span>
                  <span className="text-sm">
                    <span className="text-white font-semibold">{n.label}</span>
                    <span className="text-white/45"> — {n.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prices */}
          <div
            className="rounded-2xl p-6 flex flex-col gap-4"
            style={{
              background: "linear-gradient(145deg, #0d1b2e, #090f1e)",
              border: "1px solid rgba(0,170,255,0.15)",
            }}
          >
            <h3 className="text-[#00aaff] font-bold text-xs uppercase tracking-widest">Цены</h3>
            {prices.map((p) => (
              <div
                key={p.title}
                className="rounded-xl p-4"
                style={{ background: "rgba(0,170,255,0.06)", border: "1px solid rgba(0,170,255,0.12)" }}
              >
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <p className="text-white text-sm font-semibold leading-snug">{p.title}</p>
                    <p className="text-white/40 text-xs mt-0.5">{p.desc}</p>
                  </div>
                  <span
                    className="text-base font-extrabold shrink-0"
                    style={{ color: "#00aaff", textShadow: "0 0 12px rgba(0,170,255,0.4)" }}
                  >
                    {p.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#контакты"
            className="inline-flex items-center gap-2 font-bold uppercase tracking-widest transition-all duration-300 hover:brightness-125"
            style={{
              fontSize: "0.85rem",
              padding: "14px 40px",
              background: "linear-gradient(135deg, #0055ff, #00aaff)",
              color: "#fff",
              borderRadius: "6px",
              boxShadow: "0 0 32px rgba(0,170,255,0.4)",
            }}
          >
            Хочу обложку → Написать в ЛС
          </a>
        </div>
      </div>
    </section>
  );
}