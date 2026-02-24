import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 pt-8 pb-0 flex flex-col"
      style={{ background: "linear-gradient(145deg, #07101f, #060c18)" }}
    >
      {/* Top row: logo + nav columns */}
      <div className="flex flex-col sm:flex-row justify-between gap-8 mb-6">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(145deg, #0a1a3a, #0d2050)",
              boxShadow: "0 0 0 2px rgba(0,160,255,0.6), 0 0 20px rgba(0,140,255,0.4)",
            }}
          >
            <Icon name="Zap" size={22} style={{ color: "#00c8ff" }} />
          </div>
          <div className="font-bold leading-snug">
            <div className="text-white" style={{ fontSize: "1.05rem" }}>Streltsov</div>
            <div style={{ color: "#2b9fff", fontSize: "1.05rem" }}>Digital</div>
          </div>
        </div>

        {/* Nav columns */}
        <div className="flex gap-12 sm:gap-20">
          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4 font-semibold">Услуги</p>
            <ul className="flex flex-col gap-2.5">
              {["OZON", "Wildberries", "Яндекс Маркет"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4 font-semibold">Компания</p>
            <ul className="flex flex-col gap-2.5">
              {["Портфолио", "О нас", "Контакты"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright + socials */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} Стрельцов Digital
        </p>
        <div className="flex gap-3 items-center">
          {[
            { icon: "Facebook", label: "Facebook" },
            { icon: "Instagram", label: "Instagram" },
            { icon: "Send", label: "Telegram" },
            { icon: "MessageCircle", label: "VK" },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#00aaff] hover:text-[#00aaff] transition-all duration-300"
            >
              <Icon name={s.icon as "Facebook"} size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Big STRELTSOV text — прижат к низу без отступа снизу */}
      <h2
        className="text-[16vw] sm:text-[14vw] lg:text-[12vw] leading-[0.8] font-extrabold tracking-tight uppercase block"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #003388 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: "-0.15em",
        }}
      >
        STRELTSOV
      </h2>
    </footer>
  );
}