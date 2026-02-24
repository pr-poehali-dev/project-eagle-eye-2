import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <div
      className="relative h-[300px] sm:h-[400px] lg:h-[500px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+300px)] sm:h-[calc(100vh+400px)] lg:h-[calc(100vh+500px)] -top-[100vh]">
        <div className="h-[300px] sm:h-[400px] lg:h-[500px] sticky top-[calc(100vh-300px)] sm:top-[calc(100vh-400px)] lg:top-[calc(100vh-500px)]">
          <div
            className="px-6 md:px-12 py-8 h-full w-full flex flex-col justify-between"
            style={{ background: "linear-gradient(145deg, #07101f, #060c18)" }}
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
              {/* Logo */}
              <div className="flex items-center gap-2">
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

              {/* Social icons */}
              <div className="flex gap-4 items-center">
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

            {/* Bottom: big brand + copyright */}
            <div className="flex flex-col sm:flex-row justify-between items-end gap-2">
              <h1
                className="text-[16vw] sm:text-[14vw] lg:text-[12vw] leading-[0.85] font-extrabold tracking-tight uppercase"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #003388 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                STRELTSOV
              </h1>
              <p className="text-white/40 text-xs shrink-0 pb-1">
                © {new Date().getFullYear()} Стрельцов Digital
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
