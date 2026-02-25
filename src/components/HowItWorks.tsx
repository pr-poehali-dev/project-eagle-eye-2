const steps = [
  { title: "ПИШЕТЕ МНЕ", desc: "Рассказываете что нужно — сайт, карточки, меню или обложку" },
  { title: "БЕСПЛАТНЫЙ МАКЕТ ЗА 24 ЧАСА", desc: "Показываю первый вариант — если не нравится, не платите" },
  { title: "ДОДЕЛЫВАЮ И ОТДАЮ", desc: "Вношу правки, финализирую и отдаю готовые файлы" },
];

export default function HowItWorks() {
  return (
    <section
      id="как-работаю"
      className="py-16 px-6 md:px-12 lg:px-20"
      style={{ background: "linear-gradient(180deg, #060c18 0%, #080d1a 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#00aaff] text-xs uppercase tracking-[0.3em] font-semibold mb-3">Процесс</p>
          <h2
            className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight"
            style={{ textShadow: "0 0 40px rgba(0,120,255,0.25)" }}
          >
            Как я работаю
          </h2>
          <div
            className="mt-4 mx-auto w-16 h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, #00aaff, transparent)" }}
          />
        </div>

        <div className="flex flex-col items-center gap-0">
          {steps.map((step, i) => {
            const highlight = i === 1;
            return (
              <div key={i} className="flex flex-col items-center w-full">
                <div
                  className="w-full max-w-lg rounded-2xl p-6 flex items-start gap-5 transition-all duration-300"
                  style={{
                    background: highlight
                      ? "linear-gradient(145deg, #0a1f40, #0d2550)"
                      : "linear-gradient(145deg, #0d1b2e, #090f1e)",
                    border: highlight
                      ? "1px solid rgba(0,170,255,0.45)"
                      : "1px solid rgba(255,255,255,0.07)",
                    boxShadow: highlight ? "0 0 32px rgba(0,120,255,0.2)" : "none",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-extrabold text-lg"
                    style={
                      highlight
                        ? { background: "linear-gradient(135deg, #0055ff, #00aaff)", color: "#fff", boxShadow: "0 0 20px rgba(0,170,255,0.5)" }
                        : { background: "rgba(0,170,255,0.1)", color: "#00aaff", border: "1.5px solid rgba(0,170,255,0.3)" }
                    }
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3
                      className="font-extrabold text-sm uppercase tracking-wide mb-1.5"
                      style={{ color: highlight ? "#fff" : "rgba(255,255,255,0.9)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <div className="flex flex-col items-center my-2">
                    <div className="w-[2px] h-5" style={{ background: "rgba(0,170,255,0.25)" }} />
                    <div
                      style={{
                        width: 0, height: 0,
                        borderLeft: "6px solid transparent",
                        borderRight: "6px solid transparent",
                        borderTop: "8px solid rgba(0,170,255,0.35)",
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
