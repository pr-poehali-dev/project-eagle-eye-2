import { useLang } from "@/context/LanguageContext";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }
};

export default function Hero() {
  const { t } = useLang();
  const [line1, line2] = t.hero.title.split("\n");

  return (
    <div
      className="relative flex items-center overflow-hidden pt-20 md:pt-0"
      style={{
        background: "linear-gradient(135deg, #050c1a 0%, #071222 50%, #081830 100%)",
        minHeight: "clamp(380px, 48vw, 600px)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at 72% 55%, rgba(0,100,255,0.32) 0%, rgba(0,50,150,0.14) 45%, transparent 70%)",
        }}
      />

      <div className="absolute right-0 top-0 bottom-0 w-[62%] pointer-events-none">
        <img
          src="https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/e8d94d6d-6d33-4114-8828-378d2556a84a.jpg"
          alt="Design for business powered by AI"
          className="w-full h-full object-cover object-left-top"
          style={{ mixBlendMode: "lighten" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #060d1f 0%, rgba(6,13,31,0.75) 15%, rgba(6,13,31,0.2) 35%, transparent 55%)",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #060d1f 0%, transparent 18%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #060d1f 0%, transparent 12%)" }} />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-16 w-full md:max-w-[46%]">
        <h1
          className="font-extrabold uppercase text-white leading-[1.05] mb-7"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 4.2rem)",
            textShadow: "0 2px 30px rgba(0,60,180,0.35)",
          }}
        >
          {line1}<br />{line2}
        </h1>

        <p className="text-white/60 text-sm md:text-base mb-2 leading-relaxed">{t.hero.sub1}</p>
        <p className="text-white/60 text-sm md:text-base mb-6 leading-relaxed">{t.hero.sub2}</p>

        <p
          className="text-white/80 text-sm md:text-base font-medium mb-8 leading-snug"
          style={{ textShadow: "0 0 20px rgba(0,150,255,0.3)" }}
        >
          {t.hero.tagline}
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo("контакты")}
            className="font-bold uppercase tracking-widest transition-all duration-300 hover:brightness-125"
            style={{
              fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
              padding: "clamp(10px, 1.3vw, 15px) clamp(22px, 3.2vw, 38px)",
              background: "transparent",
              border: "2px solid #00aaff",
              color: "#00aaff",
              borderRadius: "4px",
              boxShadow: "0 0 28px rgba(0,170,255,0.3), inset 0 0 28px rgba(0,170,255,0.06)",
              cursor: "pointer",
            }}
          >
            {t.hero.cta}
          </button>
          <button
            onClick={() => scrollTo("портфолио")}
            className="font-bold uppercase tracking-widest transition-all duration-300 hover:brightness-125"
            style={{
              fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
              padding: "clamp(10px, 1.3vw, 15px) clamp(22px, 3.2vw, 38px)",
              background: "rgba(255,255,255,0.07)",
              border: "2px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.85)",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {t.hero.portfolio}
          </button>
        </div>
      </div>
    </div>
  );
}
