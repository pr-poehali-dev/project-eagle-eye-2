import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINE1 = "STRELTSOV".split("");
const LINE2 = "DIGITAL".split("");

export default function Intro({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"typing" | "glow" | "exit">("typing");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("glow"), 1600);
    const t2 = setTimeout(() => setPhase("exit"), 2600);
    const t3 = setTimeout(() => onDone(), 3300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: "#050c1a" }}
        >
          {/* Glow background pulse */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={phase === "glow" ? { opacity: [0, 0.6, 0.3] } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,120,255,0.3) 0%, transparent 70%)",
            }}
          />

          <div className="flex flex-col items-center gap-2 select-none">
            {/* STRELTSOV */}
            <div className="flex">
              {LINE1.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.08, duration: 0.35, ease: "easeOut" }}
                  className="font-extrabold uppercase tracking-tight"
                  style={{
                    fontSize: "clamp(3rem, 10vw, 9rem)",
                    lineHeight: 1,
                    color: phase === "glow" ? "#fff" : "#c8e0ff",
                    textShadow: phase === "glow"
                      ? "0 0 30px #00aaff, 0 0 80px #0055ff, 0 0 160px #0033cc"
                      : "0 0 10px rgba(0,150,255,0.3)",
                    transition: "text-shadow 0.5s ease, color 0.5s ease",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* DIGITAL */}
            <div className="flex">
              {LINE2.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.7 + i * 0.08, duration: 0.35, ease: "easeOut" }}
                  className="font-extrabold uppercase tracking-[0.25em]"
                  style={{
                    fontSize: "clamp(1.2rem, 3.5vw, 3.2rem)",
                    lineHeight: 1,
                    color: phase === "glow" ? "#00aaff" : "#5599cc",
                    textShadow: phase === "glow"
                      ? "0 0 20px #00aaff, 0 0 60px #0055ff"
                      : "0 0 6px rgba(0,150,255,0.2)",
                    transition: "text-shadow 0.5s ease, color 0.5s ease",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Neon line under */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="mt-4 h-[2px] w-2/3"
              style={{
                background: "linear-gradient(90deg, transparent, #00aaff, transparent)",
                boxShadow: "0 0 12px #00aaff",
              }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
