import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <div
            className="w-full h-full"
            style={{ background: "linear-gradient(135deg, #060c18 0%, #0d1f3c 50%, #060c18 100%)" }}
          />
          {/* Neon glow orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #0055ff 0%, transparent 70%)" }} />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
              style={{ background: "radial-gradient(circle, #00ccff 0%, transparent 70%)" }} />
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase leading-tight mb-6">
          Увеличиваем продажи<br />через дизайн
        </h2>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Создаём карточки товаров, которые выделяются среди конкурентов и конвертируют просмотры в покупки
        </p>
        <button
          className="px-10 py-4 text-white font-bold uppercase tracking-wide text-sm transition-all duration-300 hover:opacity-90"
          style={{
            border: "2px solid #00aaff",
            background: "rgba(0, 170, 255, 0.1)",
            boxShadow: "0 0 30px rgba(0, 170, 255, 0.3)"
          }}
        >
          Получить консультацию
        </button>
      </div>
    </div>
  );
}
