export default function Contact() {
  return (
    <section
      id="контакты"
      className="py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #060c18 0%, #080d1a 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(0,100,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <p className="text-[#00aaff] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Контакты</p>
        <h2
          className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight mb-4"
          style={{ textShadow: "0 0 40px rgba(0,120,255,0.3)" }}
        >
          Обсудить проект
        </h2>
        <p className="text-white/55 text-sm md:text-base leading-relaxed mb-10">
          Напишите мне — покажу бесплатный макет<br />под ваш бизнес за 24 часа
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="https://vk.com/blacksetpro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest transition-all duration-300 hover:brightness-110 rounded-lg"
            style={{
              padding: "14px 36px",
              background: "linear-gradient(135deg, #0055cc, #0077ff)",
              color: "#fff",
              fontSize: "0.82rem",
              boxShadow: "0 0 28px rgba(0,100,255,0.35)",
            }}
          >
            <span className="text-lg">🅰</span>
            Написать в ВК
          </a>
          <a
            href="https://t.me/seovzlet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest transition-all duration-300 hover:brightness-110 rounded-lg"
            style={{
              padding: "14px 36px",
              background: "linear-gradient(135deg, #0088cc, #00aaee)",
              color: "#fff",
              fontSize: "0.82rem",
              boxShadow: "0 0 28px rgba(0,170,230,0.35)",
            }}
          >
            <span className="text-lg">✈️</span>
            Написать в Telegram
          </a>
        </div>

        <div
          className="w-24 h-[1px] mx-auto mb-8"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,170,255,0.4), transparent)" }}
        />

        <a
          href="tel:+79859758010"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 text-base font-semibold"
        >
          <span>📞</span>
          +7 985 975-80-10
        </a>
      </div>
    </section>
  );
}
