const bullets = [
  "3-5 вариантов на выбор за 1 день",
  "PNG на прозрачном фоне",
  "Версия на белом и тёмном фоне",
  "Мокапы — вывеска, визитка, стакан, футболка",
  "Фирменные цвета и шрифты",
  "Подходит для печати и digital",
];

export default function LogosBlock() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: "#060c18" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#00aaff] text-xs uppercase tracking-[0.3em] font-semibold mb-3">Брендинг</p>
          <h2
            className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight mb-4"
            style={{ textShadow: "0 0 40px rgba(0,120,255,0.25)" }}
          >
            ЛОГОТИПЫ И БРЕНДИНГ
          </h2>
          <p className="text-[#00aaff] text-lg font-semibold">
            Уникальный логотип для вашего бизнеса за 1 день
          </p>
          <div
            className="mt-4 mx-auto w-16 h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, #00aaff, transparent)" }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Image */}
          <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden shrink-0"
            style={{ boxShadow: "0 0 40px rgba(0,120,255,0.15)" }}>
            <img
              src="https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/7042dd62-c715-4814-923e-f953f37b7cfa.jpg"
              alt="Логотипы и брендинг"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-6 w-full">
            <p className="text-gray-300 text-lg leading-relaxed">
              Не шаблон из конструктора. Не клипарт.<br />
              <span className="text-white font-semibold">Уникальный логотип через нейросети</span> с доработкой под ваш бизнес.
            </p>

            <div className="flex flex-col gap-3">
              {bullets.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <span className="text-green-400 text-lg leading-none mt-0.5">✅</span>
                  <span className="text-gray-200 text-sm">{b}</span>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-5 border border-white/10 flex flex-col gap-3"
              style={{ background: "rgba(0,170,255,0.06)" }}
            >
              <p className="text-gray-400 text-sm">Стоимость</p>
              <p className="text-white text-3xl font-black">от 2 990₽</p>
              <a
                href="https://t.me/streltsov_digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #0088ff, #0055cc)",
                  color: "#fff",
                  boxShadow: "0 0 20px rgba(0,120,255,0.4)",
                }}
              >
                Хочу логотип → Написать
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
