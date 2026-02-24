const benefits = [
  "Уникальный дизайн — не похож ни на кого",
  "Адаптив — работает на телефоне и компьютере",
  "Быстро — готово за 2–3 дня",
  "Тексты — пишу продающие тексты",
  "Фото — генерирую через нейросеть под ваш бизнес",
];

const siteTypes = [
  { emoji: "🏠", title: "Лендинг (одностраничник)", price: "от 9 990₽" },
  { emoji: "🏢", title: "Многостраничный сайт", price: "от 19 990₽" },
  { emoji: "🛒", title: "Интернет-магазин", price: "от 29 990₽" },
  { emoji: "📱", title: "Мини-сайт визитка", price: "от 4 990₽" },
];

const clients = [
  { emoji: "☕", label: "Кафе и рестораны" },
  { emoji: "💈", label: "Барбершопы и салоны красоты" },
  { emoji: "🏋️", label: "Фитнес-клубы и тренеры" },
  { emoji: "🌸", label: "Цветочные магазины" },
  { emoji: "🏠", label: "Строительные компании" },
  { emoji: "👗", label: "Шоурумы и бренды одежды" },
  { emoji: "📚", label: "Онлайн-школы" },
  { emoji: "🔧", label: "Услуги любые" },
];

export default function WebsitesBlock() {
  return (
    <section
      id="сайты"
      className="py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #070f1e 0%, #080d1a 100%)" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(0,80,220,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#00aaff] text-xs uppercase tracking-[0.3em] font-semibold mb-3">Услуга</p>
          <h2
            className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight leading-tight"
            style={{ textShadow: "0 0 40px rgba(0,120,255,0.25)" }}
          >
            🌐 Делаю сайты<br className="sm:hidden" /> через нейросети
          </h2>
          <p className="text-white/50 mt-4 text-sm md:text-base">
            Не шаблон. Не конструктор. Уникальный AI-дизайн.
          </p>
          <div
            className="mt-4 mx-auto w-16 h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, #00aaff, transparent)" }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Benefits */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "linear-gradient(145deg, #0d1b2e, #090f1e)",
              border: "1px solid rgba(0,170,255,0.15)",
            }}
          >
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 text-[#00aaff]">
              Что получаете
            </h3>
            <ul className="flex flex-col gap-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px]"
                    style={{ background: "rgba(0,170,255,0.2)", color: "#00aaff", border: "1px solid rgba(0,170,255,0.4)" }}
                  >
                    ✓
                  </span>
                  <span className="text-white/70 text-sm leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Site types */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "linear-gradient(145deg, #0d1b2e, #090f1e)",
              border: "1px solid rgba(0,170,255,0.15)",
            }}
          >
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 text-[#00aaff]">
              Какие сайты делаю
            </h3>
            <ul className="flex flex-col gap-4">
              {siteTypes.map((s) => (
                <li key={s.title} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{s.emoji}</span>
                    <span className="text-white/80 text-sm leading-snug">{s.title}</span>
                  </div>
                  <span
                    className="text-xs font-extrabold shrink-0"
                    style={{ color: "#00aaff" }}
                  >
                    {s.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* For whom */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "linear-gradient(145deg, #0d1b2e, #090f1e)",
              border: "1px solid rgba(0,170,255,0.15)",
            }}
          >
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 text-[#00aaff]">
              Для кого
            </h3>
            <ul className="flex flex-col gap-2.5">
              {clients.map((c) => (
                <li key={c.label} className="flex items-center gap-2.5">
                  <span className="text-base">{c.emoji}</span>
                  <span className="text-white/65 text-sm">{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
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
            Хочу сайт → Написать в ЛС
          </a>
        </div>
      </div>
    </section>
  );
}
