import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <div
      className="relative"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+320px)] -top-[100vh]">
        <div
          className="h-[320px] sticky top-[calc(100vh-320px)]"
          style={{ background: "linear-gradient(145deg, #07101f, #060c18)" }}
        >
          <div className="px-6 md:px-12 py-8 h-full w-full flex flex-col justify-between">

            {/* Top row: logo + nav columns */}
            <div className="flex flex-col sm:flex-row justify-between gap-8">
              {/* Logo */}
              <div className="flex items-center gap-2.5 shrink-0">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #0055ff, #00aaff)",
                    boxShadow: "0 0 16px rgba(0, 170, 255, 0.6)",
                  }}
                >
                  <Icon name="Zap" size={18} className="text-white" />
                </div>
                <div className="text-white font-bold text-sm leading-tight">
                  <div>Streltsov</div>
                  <div style={{ color: "#00aaff" }}>Digital</div>
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

            {/* Bottom: copyright + socials + big brand */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
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

              {/* Big STRELTSOV text */}
              <h2
                className="text-[16vw] sm:text-[14vw] lg:text-[12vw] leading-[0.85] font-extrabold tracking-tight uppercase"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #003388 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                STRELTSOV
              </h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}