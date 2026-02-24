const benefits = [
  "Уникальный дизайн — не похож ни на кого",
  "Адаптив — работает на телефоне и компьютере",
  "Быстро — готово за 2–3 дня",
  "Тексты — пишу продающие тексты",
  "Фото — генерирую через нейросеть под ваш бизнес",
];

const siteTypes = [
  { emoji: "📱", title: "Визитка (3–5 стр.)", price: "14 000–20 000₽", desc: "Главная, услуги, о нас, контакты", term: "до 5 дней" },
  { emoji: "🏢", title: "Бизнес-сайт (10–20 стр.)", price: "35 000–50 000₽", desc: "Имидж и детальное описание каждого направления", term: "1–2 недели" },
  { emoji: "🗂️", title: "Каталог (20+ стр.)", price: "от 80 000₽", desc: "База товаров или услуг с удобной навигацией", term: "от 14 дней" },
];

const included = [
  "Адаптация под мобильные устройства",
  "Генерация уникального контента через ИИ",
  "Проф SEO-оптимизация",
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

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden mb-8" style={{ border: "1px solid rgba(0,170,255,0.15)" }}>
          <img
            src="https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/e9a15771-6836-4e0e-8ffe-47531f1a3d90.jpg"
            alt="Сайты через нейросети"
            className="w-full object-cover"
            style={{ maxHeight: "380px" }}
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
            className="rounded-2xl p-6 md:col-span-2"
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
                <li key={s.title} className="flex flex-col gap-1 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{s.emoji}</span>
                      <span className="text-white font-semibold text-sm">{s.title}</span>
                    </div>
                    <span className="text-sm font-extrabold shrink-0" style={{ color: "#00aaff" }}>
                      {s.price}
                    </span>
                  </div>
                  <p className="text-white/50 text-xs pl-8">{s.desc}</p>
                  <p className="text-white/35 text-xs pl-8">⏳ Срок: {s.term}</p>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(0,170,255,0.12)" }}>
              <p className="text-[#00aaff] text-xs font-semibold uppercase tracking-widest mb-3">В каждый проект входит</p>
              <ul className="flex flex-col gap-2">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/65 text-xs">
                    <span className="text-[#00aaff]">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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