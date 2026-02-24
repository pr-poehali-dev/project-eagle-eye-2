export default function Hero() {
  return (
    <div
      className="relative flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #050c1a 0%, #071222 50%, #081830 100%)",
        minHeight: "clamp(420px, 55vw, 680px)",
      }}
    >
      {/* Deep background glow on the right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 75% 50%, rgba(0,90,220,0.22) 0%, rgba(0,40,120,0.1) 40%, transparent 75%)",
        }}
      />

      {/* Right side: full bleed image */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] md:w-[58%] pointer-events-none">
        <img
          src="https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/files/a32573fd-a066-4c1b-890c-4597bd512f80.jpg"
          alt="Продающие карточки для маркетплейсов"
          className="w-full h-full object-cover object-left"
          style={{ filter: "drop-shadow(0 0 40px rgba(0,120,255,0.35))" }}
        />
        {/* Fade left edge to blend with bg */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #050c1a 0%, rgba(5,12,26,0.3) 30%, transparent 60%)",
          }}
        />
      </div>

      {/* Floating badges */}
      <div
        className="absolute top-[12%] right-[38%] px-3 py-2 rounded-full text-white text-[9px] font-extrabold uppercase tracking-wider text-center border leading-tight z-10 hidden md:flex flex-col items-center"
        style={{
          background: "linear-gradient(135deg, rgba(0,60,180,0.9), rgba(0,140,255,0.8))",
          border: "1.5px solid rgba(0,180,255,0.6)",
          boxShadow: "0 0 20px rgba(0,150,255,0.5), inset 0 0 10px rgba(0,180,255,0.2)",
        }}
      >
        ТОП<br />ПРОДАЖ
      </div>
      <div
        className="absolute bottom-[14%] right-[8%] px-3 py-2 rounded-full text-white text-[9px] font-extrabold uppercase tracking-wider text-center border leading-tight z-10 hidden md:flex flex-col items-center"
        style={{
          background: "linear-gradient(135deg, rgba(0,60,180,0.9), rgba(0,140,255,0.8))",
          border: "1.5px solid rgba(0,180,255,0.6)",
          boxShadow: "0 0 20px rgba(0,150,255,0.5), inset 0 0 10px rgba(0,180,255,0.2)",
        }}
      >
        ТОП<br />ПРОДАЖ
      </div>

      {/* Diamond decorations */}
      {[
        { top: "18%", right: "52%", size: 10 },
        { top: "70%", right: "55%", size: 7 },
        { top: "35%", right: "6%", size: 8 },
        { top: "55%", right: "42%", size: 6 },
      ].map((d, i) => (
        <div
          key={i}
          className="absolute rotate-45 hidden md:block z-10"
          style={{
            top: d.top, right: d.right,
            width: d.size, height: d.size,
            background: "rgba(0,180,255,0.7)",
            boxShadow: "0 0 10px rgba(0,180,255,0.9)",
          }}
        />
      ))}

      {/* Left content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 w-full md:max-w-[48%]">
        <h1
          className="font-extrabold uppercase text-white leading-[1.05] mb-6"
          style={{
            fontSize: "clamp(1.8rem, 4.2vw, 4rem)",
            textShadow: "0 2px 30px rgba(0,80,200,0.4)",
          }}
        >
          ПРОДАЮЩИЕ<br />
          КАРТОЧКИ ДЛЯ<br />
          МАРКЕТПЛЕЙСОВ
        </h1>

        <a
          href="#contact"
          className="inline-block font-bold uppercase text-white tracking-wider transition-all duration-300 hover:brightness-125"
          style={{
            fontSize: "clamp(0.7rem, 1.1vw, 0.85rem)",
            padding: "clamp(10px, 1.2vw, 14px) clamp(20px, 3vw, 36px)",
            background: "transparent",
            border: "2px solid #00aaff",
            color: "#00aaff",
            borderRadius: "4px",
            boxShadow: "0 0 24px rgba(0,170,255,0.35), inset 0 0 24px rgba(0,170,255,0.07)",
          }}
        >
          Обсудить проект
        </a>
      </div>
    </div>
  );
}
