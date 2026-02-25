const statItems = [
  { value: "50+", label: "проектов" },
  { value: "15+", label: "ниш бизнеса" },
  { value: "24 ч", label: "первый макет" },
  { value: "5×", label: "дешевле агентства" },
];

export default function Stats() {
  return (
    <section
      className="py-14 px-6 md:px-12"
      style={{ background: "linear-gradient(135deg, #060c18 0%, #080d1a 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#00aaff] text-xs uppercase tracking-[0.3em] font-semibold mb-3">Результаты</p>
          <h2
            className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight"
            style={{ textShadow: "0 0 40px rgba(0,120,255,0.25)" }}
          >
            В цифрах
          </h2>
          <div
            className="mt-4 mx-auto w-16 h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, #00aaff, transparent)" }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statItems.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-6 flex flex-col items-center text-center"
              style={{
                background: "linear-gradient(145deg, #0d1b2e, #090f1e)",
                border: "1px solid rgba(0,170,255,0.15)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
            >
              <span
                className="font-extrabold leading-none mb-2"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  color: "#00aaff",
                  textShadow: "0 0 24px rgba(0,170,255,0.5)",
                }}
              >
                {item.value}
              </span>
              <span className="text-white/55 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
