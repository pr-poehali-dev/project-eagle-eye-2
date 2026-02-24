const About = () => {
  return (
    <section className="py-20 px-4" style={{ background: "#080d1a" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-10">
          ОБО МНЕ
        </p>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-shrink-0">
            <div
              className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 0 40px 8px rgba(139, 92, 246, 0.35), 0 0 80px 20px rgba(6, 182, 212, 0.15)",
              }}
            >
              <img
                src="https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/07915770-4db2-446b-ab0a-3a2d2b1c7645.jpg"
                alt="Стрельцов Иван"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Привет! Стрельцов Иван
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Делаю дизайн для бизнеса с помощью нейросетей.
            </p>
            <div
              className="rounded-xl p-5 border border-white/10"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <p className="text-gray-200 leading-relaxed">
                Пока другие тратят{" "}
                <span className="text-white font-bold">100–300к на агентства</span> и ждут месяц —
                мои клиенты получают результат за{" "}
                <span className="text-white font-bold">2–3 дня в 5 раз дешевле.</span>
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI не заменяет дизайнера. AI — это инструмент в руках дизайнера.{" "}
              <span className="text-white font-semibold">И я знаю как им пользоваться.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
