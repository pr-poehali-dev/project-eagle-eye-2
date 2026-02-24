export default function Hero() {
  return (
    <div
      className="relative flex items-center min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(135deg, #050c1a 0%, #081428 40%, #0a1a35 100%)" }}
    >
      {/* Background glow effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(0,100,255,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 60% 50%, rgba(0,150,255,0.08) 0%, transparent 80%)",
        }}
      />

      {/* Neon rings on the ground */}
      <div className="absolute right-[5%] md:right-[8%] top-1/2 -translate-y-1/2 w-[45vw] max-w-[580px] aspect-square pointer-events-none">
        {/* Outer ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "2px solid rgba(0, 150, 255, 0.4)",
            boxShadow: "0 0 40px rgba(0,150,255,0.3), inset 0 0 40px rgba(0,150,255,0.1)",
            transform: "scaleY(0.3) translateY(100%)",
          }}
        />
        {/* Middle ring */}
        <div
          className="absolute inset-[8%] rounded-full"
          style={{
            border: "1.5px solid rgba(0, 180, 255, 0.5)",
            boxShadow: "0 0 25px rgba(0,180,255,0.4), inset 0 0 25px rgba(0,180,255,0.15)",
            transform: "scaleY(0.3) translateY(100%)",
          }}
        />
        {/* Inner ring */}
        <div
          className="absolute inset-[18%] rounded-full"
          style={{
            border: "1px solid rgba(100, 200, 255, 0.5)",
            boxShadow: "0 0 15px rgba(100,200,255,0.5)",
            transform: "scaleY(0.3) translateY(100%)",
          }}
        />

        {/* Central image */}
        <div className="absolute inset-[5%] flex items-center justify-center">
          <img
            src="https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/files/9905bf05-bd78-4a4b-9463-31f188c13978.jpg"
            alt="Продающие карточки"
            className="w-full h-full object-contain drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 30px rgba(0,150,255,0.4))" }}
          />
        </div>

        {/* Badge ТОП ПРОДАЖ top */}
        <div
          className="absolute top-[8%] right-[10%] px-3 py-1.5 rounded-full text-white text-[10px] font-extrabold uppercase tracking-wider text-center"
          style={{
            background: "linear-gradient(135deg, #0055ff, #00aaff)",
            boxShadow: "0 0 20px rgba(0,170,255,0.6)",
          }}
        >
          ТОП<br />ПРОДАЖ
        </div>

        {/* Badge ТОП ПРОДАЖ bottom right */}
        <div
          className="absolute bottom-[10%] right-[0%] px-3 py-1.5 rounded-full text-white text-[10px] font-extrabold uppercase tracking-wider text-center"
          style={{
            background: "linear-gradient(135deg, #0055ff, #00aaff)",
            boxShadow: "0 0 20px rgba(0,170,255,0.6)",
          }}
        >
          ТОП<br />ПРОДАЖ
        </div>

        {/* Diamond decorations */}
        <div
          className="absolute top-[15%] left-[5%] w-4 h-4 rotate-45"
          style={{ background: "rgba(0,150,255,0.5)", boxShadow: "0 0 10px rgba(0,150,255,0.8)" }}
        />
        <div
          className="absolute bottom-[20%] left-[10%] w-3 h-3 rotate-45"
          style={{ background: "rgba(0,180,255,0.4)", boxShadow: "0 0 8px rgba(0,180,255,0.7)" }}
        />
        <div
          className="absolute top-[40%] right-[2%] w-2.5 h-2.5 rotate-45"
          style={{ background: "rgba(100,200,255,0.5)", boxShadow: "0 0 8px rgba(100,200,255,0.8)" }}
        />
      </div>

      {/* Left content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[55%] md:max-w-[50%]">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white leading-tight mb-8"
          style={{ textShadow: "0 0 40px rgba(0,100,255,0.3)" }}
        >
          ПРОДАЮЩИЕ<br />
          КАРТОЧКИ ДЛЯ<br />
          МАРКЕТПЛЕЙСОВ
        </h1>

        <a
          href="#contact"
          className="inline-block px-8 py-3.5 rounded font-bold uppercase text-white text-sm tracking-wider transition-all duration-300 hover:brightness-110"
          style={{
            background: "transparent",
            border: "2px solid #00aaff",
            color: "#00aaff",
            boxShadow: "0 0 20px rgba(0,170,255,0.3), inset 0 0 20px rgba(0,170,255,0.05)",
          }}
        >
          Обсудить проект
        </a>
      </div>
    </div>
  );
}
