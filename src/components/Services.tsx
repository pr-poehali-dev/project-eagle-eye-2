const services = [
  {
    emoji: "📦",
    title: "Карточки для маркетплейсов",
    desc: "Продающие фото и инфографика для Ozon, Wildberries, Яндекс Маркет",
    price: "от 1 990₽",
  },
  {
    emoji: "🌐",
    title: "Сайты через нейросети",
    desc: "Лендинги и многостраничники с AI-дизайном за 2–3 дня",
    price: "от 25 000₽",
  },
  {
    emoji: "📺",
    title: "Меню для кафе на ТВ-экраны",
    desc: "Электронные меню-борды для любого заведения",
    price: "от 2 990₽",
  },
  {
    emoji: "🎨",
    title: "Обложки для групп ВК",
    desc: "Профессиональные баннеры, которые выделяют среди конкурентов",
    price: "от 1 990₽",
  },
  {
    emoji: "📱",
    title: "Визуал для соцсетей",
    desc: "Контент-паки 8–15 фото в едином стиле для любой ниши",
    price: "от 2 990₽",
  },
  {
    emoji: "🏷",
    title: "Логотипы и брендинг",
    desc: "Логотип + фирменный стиль + визитки + упаковка",
    price: "от 4 990₽",
  },
  {
    emoji: "🎬",
    title: "Видео-контент",
    desc: "AI-клипы для рилс и клипов ВК, 10–30 секунд",
    price: "от 3 990₽",
  },
  {
    emoji: "🏪",
    title: "Дизайн для кафе под ключ",
    desc: "Меню + вывеска + соцсети + упаковка + карта лояльности",
    price: "от 9 990₽",
  },
];

export default function Services() {
  return (
    <section id="услуги" className="py-16 px-6 md:px-12 lg:px-20" style={{ background: "#080d1a" }}>
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[#00aaff] text-xs uppercase tracking-[0.3em] font-semibold mb-3">Что я делаю</p>
        <h2 className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight"
          style={{ textShadow: "0 0 40px rgba(0,120,255,0.25)" }}>
          УСЛУГИ
        </h2>
        <div className="mt-4 mx-auto w-16 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, #00aaff, transparent)" }} />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-xl p-5 flex flex-col gap-3 cursor-pointer transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(145deg, #0d1b2e, #090f1e)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(0,170,255,0.4)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
          >
            <div className="text-3xl">{s.emoji}</div>
            <h3 className="text-white font-bold text-sm leading-snug">{s.title}</h3>
            <p className="text-white/50 text-xs leading-relaxed flex-1">{s.desc}</p>
            <div
              className="text-sm font-extrabold mt-1"
              style={{ color: "#00aaff", textShadow: "0 0 12px rgba(0,170,255,0.4)" }}
            >
              {s.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
