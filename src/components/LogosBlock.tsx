const bullets = [
  "3-5 вариантов на выбор за 1 день",
  "PNG на прозрачном фоне",
  "Версия на белом и тёмном фоне",
  "Мокапы — вывеска, визитка, стакан, футболка",
  "Фирменные цвета и шрифты",
  "Подходит для печати и digital",
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
  return (
    <section
      className="py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #080d1a 0%, #060c18 100%)" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 75% 40%, rgba(120,0,255,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#00aaff] text-xs uppercase tracking-[0.3em] font-semibold mb-3">Брендинг</p>
          <h2
            className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight"
            style={{ textShadow: "0 0 40px rgba(0,120,255,0.25)" }}
          >
            ⚡ Логотипы и Брендинг
          </h2>
          <p className="text-white/50 mt-4 text-sm md:text-base max-w-xl mx-auto">
            Не шаблон из конструктора. Не клипарт.{" "}
            <span className="text-[#00aaff]">Уникальный логотип через нейросети</span> за 1 день.
          </p>
          <div
            className="mt-4 mx-auto w-16 h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, #00aaff, transparent)" }}
          />
        </div>

        {/* Portfolio image */}
        <div
          className="w-full rounded-2xl overflow-hidden mb-12"
          style={{ boxShadow: "0 0 60px rgba(0,100,255,0.15), 0 0 0 1px rgba(255,255,255,0.06)" }}
        >
          <img
            src="https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/7042dd62-c715-4814-923e-f953f37b7cfa.jpg"
            alt="Логотипы и брендинг — портфолио"
            className="w-full object-cover"
          />
        </div>

        {/* Bottom grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Что включено */}
          <div
            className="rounded-2xl p-6 border border-white/8 flex flex-col gap-3"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <p className="text-[#00aaff] text-xs uppercase tracking-widest font-semibold mb-1">Что включено</p>
            {bullets.map((b) => (
              <div key={b} className="flex items-start gap-2">
                <span className="text-green-400 text-sm mt-0.5">✅</span>
                <span className="text-white/80 text-sm">{b}</span>
              </div>
            ))}
          </div>

          {/* Ниши */}
          <div
            className="rounded-2xl p-6 border border-white/8 flex flex-col gap-3"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <p className="text-[#00aaff] text-xs uppercase tracking-widest font-semibold mb-1">Примеры ниш</p>
            {niches.map((n) => (
              <div key={n.label} className="flex items-center gap-3">
                <span className="text-xl">{n.emoji}</span>
                <div>
                  <span className="text-white text-sm font-medium">{n.label}</span>
                  <span className="text-white/40 text-xs"> — {n.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Цена */}
          <div
            className="rounded-2xl p-6 border border-white/8 flex flex-col gap-4"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <p className="text-[#00aaff] text-xs uppercase tracking-widest font-semibold mb-1">Цена</p>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-white/8 pb-3">
                <div>
                  <p className="text-white text-sm font-semibold">Логотип</p>
                  <p className="text-white/40 text-xs">3-5 вариантов + исходники</p>
                </div>
                <span className="text-[#00aaff] font-bold text-lg">2 990₽</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/8 pb-3">
                <div>
                  <p className="text-white text-sm font-semibold">Лого + фирменный стиль</p>
                  <p className="text-white/40 text-xs">цвета, шрифты, мокапы</p>
                </div>
                <span className="text-[#00aaff] font-bold text-lg">4 990₽</span>
              </div>
            </div>
            <a
              href="https://t.me/streltsov_digital"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #0088ff, #0055cc)",
                boxShadow: "0 0 20px rgba(0,120,255,0.35)",
              }}
            >
              Хочу логотип →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
