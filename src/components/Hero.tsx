export default function Hero() {
  return (
    <div
      className="relative flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #050c1a 0%, #071222 50%, #081830 100%)",
        minHeight: "clamp(380px, 48vw, 600px)",
      }}
    >
      {/* Background glow centre-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 85% at 72% 55%, rgba(0,80,220,0.28) 0%, rgba(0,30,100,0.12) 45%, transparent 70%)",
        }}
      />

      {/* Right side: hero image — covers right 60%, vertically centered */}
      <div className="absolute right-0 top-0 bottom-0 w-[60%] pointer-events-none overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/files/706e994d-f22b-458d-92fa-f0cb89f010da.jpg"
          alt="Продающие карточки для маркетплейсов"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient fade: left edge blends into dark bg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #050c1a 0%, rgba(5,12,26,0.7) 18%, rgba(5,12,26,0.2) 38%, transparent 60%)",
          }}
        />
        {/* Gradient fade: bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #050c1a 0%, transparent 20%)",
          }}
        />
      </div>

      {/* ТОП ПРОДАЖ badge — top centre */}
      <div
        className="absolute top-[10%] left-[50%] -translate-x-1/2 px-3 py-2 rounded-full text-white text-[9px] font-extrabold uppercase tracking-wider text-center leading-tight z-10 hidden md:flex flex-col items-center"
        style={{
          background: "linear-gradient(135deg, rgba(0,50,160,0.95), rgba(0,130,255,0.85))",
          border: "1.5px solid rgba(0,180,255,0.7)",
          boxShadow: "0 0 22px rgba(0,150,255,0.6), inset 0 0 12px rgba(0,180,255,0.2)",
        }}
      >
        ТОП<br />ПРОДАЖ
      </div>

      {/* ТОП ПРОДАЖ badge — bottom right */}
      <div
        className="absolute bottom-[10%] right-[6%] px-3 py-2 rounded-full text-white text-[9px] font-extrabold uppercase tracking-wider text-center leading-tight z-10 hidden md:flex flex-col items-center"
        style={{
          background: "linear-gradient(135deg, rgba(0,50,160,0.95), rgba(0,130,255,0.85))",
          border: "1.5px solid rgba(0,180,255,0.7)",
          boxShadow: "0 0 22px rgba(0,150,255,0.6), inset 0 0 12px rgba(0,180,255,0.2)",
        }}
      >
        ТОП<br />ПРОДАЖ
      </div>

      {/* Diamond decorations */}
      {[
        { top: "15%", right: "55%", size: 10 },
        { top: "72%", right: "57%", size: 7 },
        { top: "30%", right: "5%",  size: 9 },
        { top: "58%", right: "40%", size: 6 },
        { top: "20%", right: "28%", size: 7 },
      ].map((d, i) => (
        <div
          key={i}
          className="absolute rotate-45 hidden md:block z-10"
          style={{
            top: d.top, right: d.right,
            width: d.size, height: d.size,
            background: "rgba(0,180,255,0.75)",
            boxShadow: "0 0 12px rgba(0,200,255,0.9)",
          }}
        />
      ))}

      {/* Left content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 w-full md:max-w-[46%]">
        <h1
          className="font-extrabold uppercase text-white leading-[1.05] mb-7"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 4.2rem)",
            textShadow: "0 2px 30px rgba(0,60,180,0.35)",
          }}
        >
          ПРОДАЮЩИЕ<br />
          КАРТОЧКИ ДЛЯ<br />
          МАРКЕТПЛЕЙСОВ
        </h1>

        <a
          href="#contact"
          className="inline-block font-bold uppercase tracking-widest transition-all duration-300 hover:brightness-125"
          style={{
            fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
            padding: "clamp(10px, 1.3vw, 15px) clamp(22px, 3.2vw, 38px)",
            background: "transparent",
            border: "2px solid #00aaff",
            color: "#00aaff",
            borderRadius: "4px",
            boxShadow: "0 0 28px rgba(0,170,255,0.3), inset 0 0 28px rgba(0,170,255,0.06)",
          }}
        >
          Обсудить проект
        </a>
      </div>
    </div>
  );
}
