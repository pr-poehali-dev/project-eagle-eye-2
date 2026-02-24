const plans = [
  {
    medal: "🥉",
    name: "ЛАЙТ",
    price: "от 1 990₽",
    items: [
      "1 обложка ВК",
      "или 1 карточка товара",
      "или 1 баннер",
    ],
    accent: "#cd7f32",
    glow: "rgba(180,100,30,0.2)",
    border: "rgba(180,100,30,0.3)",
  },
  {
    medal: "🥈",
    name: "СТАНДАРТ",
    price: "от 14 000₽",
    items: [
      "Сайт-визитка (3–5 стр.)",
      "или 5 карточек товара",
      "или меню для ТВ + обложка ВК",
    ],
    accent: "#aab8c2",
    glow: "rgba(150,170,185,0.15)",
    border: "rgba(150,170,185,0.3)",
  },
  {
    medal: "🥇",
    name: "БИЗНЕС",
    price: "от 35 000₽",
    items: [
      "Бизнес-сайт (10–20 стр.)",
      "или лендинг + брендинг",
    ],
    accent: "#ffd700",
    glow: "rgba(220,170,0,0.2)",
    border: "rgba(220,170,0,0.4)",
    popular: true,
  },
  {
    medal: "💎",
    name: "ПРЕМИУМ",
    price: "от 80 000₽",
    items: [
      "Каталог (20+ стр.)",
      "+ брендинг",
      "+ контент для соцсетей",
      "+ всё под ключ",
    ],
    accent: "#00aaff",
    glow: "rgba(0,170,255,0.2)",
    border: "rgba(0,170,255,0.4)",
  },
  {
    medal: "🔄",
    name: "ПОДПИСКА",
    price: "4 990₽/мес",
    items: [
      "8 постов для соцсетей",
      "4 сторис",
      "2 баннера акций",
      "Обновление контента",
    ],
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.18)",
    border: "rgba(168,85,247,0.35)",
  },
];

export default function Pricing() {
  return (
    <section
      id="цены"
      className="py-16 px-6 md:px-12 lg:px-20"
      style={{ background: "linear-gradient(180deg, #080d1a 0%, #060c18 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#00aaff] text-xs uppercase tracking-[0.3em] font-semibold mb-3">Стоимость</p>
          <h2
            className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight"
            style={{ textShadow: "0 0 40px rgba(0,120,255,0.25)" }}
          >
            Пакеты
          </h2>
          <div
            className="mt-4 mx-auto w-16 h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, #00aaff, transparent)" }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: `linear-gradient(160deg, #0d1b2e, #090f1e)`,
                border: `1px solid ${plan.border}`,
                boxShadow: `0 4px 28px ${plan.glow}`,
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                    boxShadow: "0 0 16px rgba(245,158,11,0.5)",
                  }}
                >
                  Популярный
                </div>
              )}

              {/* Medal + name */}
              <div>
                <div className="text-3xl mb-2">{plan.medal}</div>
                <h3
                  className="font-extrabold text-base uppercase tracking-wide"
                  style={{ color: plan.accent }}
                >
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div
                className="text-xl font-extrabold"
                style={{ color: "#fff", textShadow: `0 0 16px ${plan.glow}` }}
              >
                {plan.price}
              </div>

              {/* Divider */}
              <div
                className="w-full h-[1px]"
                style={{ background: `linear-gradient(90deg, ${plan.border}, transparent)` }}
              />

              {/* Items */}
              <ul className="flex flex-col gap-2 flex-1">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span style={{ color: plan.accent }} className="text-xs mt-0.5 shrink-0">•</span>
                    <span className="text-white/65 text-xs leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#контакты"
                className="block text-center text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg transition-all duration-300 hover:brightness-125 mt-auto"
                style={{
                  background: `linear-gradient(135deg, ${plan.accent}22, ${plan.accent}44)`,
                  border: `1px solid ${plan.border}`,
                  color: plan.accent,
                }}
              >
                Выбрать
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}