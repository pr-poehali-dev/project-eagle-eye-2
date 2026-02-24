import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div
            className="py-4 sm:py-6 lg:py-8 px-6 md:px-12 h-full w-full flex flex-col justify-between"
            style={{ background: "linear-gradient(145deg, #080d1a, #060c18)" }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#00aaff] flex items-center justify-center">
                  <Icon name="Zap" size={16} className="text-white" />
                </div>
                <div className="text-white font-bold text-base leading-tight">
                  <div>Streltsov</div>
                  <div className="text-[#00aaff]">Digital</div>
                </div>
              </div>

              {/* Nav links */}
              <div className="flex gap-12 sm:gap-20">
                <div className="flex flex-col gap-2">
                  <h3 className="mb-2 uppercase text-white/40 text-xs tracking-wide">Услуги</h3>
                  {["OZON", "Wildberries", "Яндекс Маркет"].map((s) => (
                    <a key={s} href="#" className="text-white/70 hover:text-[#00aaff] transition-colors text-sm">{s}</a>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="mb-2 uppercase text-white/40 text-xs tracking-wide">Компания</h3>
                  {["Портфолио", "О нас", "Контакты"].map((s) => (
                    <a key={s} href="#" className="text-white/70 hover:text-[#00aaff] transition-colors text-sm">{s}</a>
                  ))}
                </div>
              </div>

              {/* Social icons */}
              <div className="flex gap-4">
                {[
                  { name: "Facebook", icon: "Facebook" },
                  { name: "Instagram", icon: "Instagram" },
                  { name: "Send", icon: "Send" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#00aaff] hover:text-[#00aaff] transition-all duration-300"
                  >
                    <Icon name={s.icon as "Facebook"} size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <h1
                className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 font-extrabold tracking-tight uppercase"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #004499 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                STRELTSOV
              </h1>
              <p className="text-white/40 text-sm shrink-0">© {new Date().getFullYear()} Стрельцов Digital</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
