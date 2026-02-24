import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Наверх"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 999,
        width: 52,
        height: 52,
        borderRadius: "50%",
        border: "1.5px solid rgba(0,170,255,0.6)",
        background: hovered
          ? "linear-gradient(135deg, rgba(0,170,255,0.25), rgba(120,0,255,0.2))"
          : "rgba(5,12,26,0.85)",
        backdropFilter: "blur(12px)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: hovered
          ? "0 0 24px rgba(0,170,255,0.7), 0 0 48px rgba(0,170,255,0.25), inset 0 0 12px rgba(0,170,255,0.1)"
          : "0 0 12px rgba(0,170,255,0.35), 0 0 24px rgba(0,170,255,0.1)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible
          ? hovered ? "translateY(-3px) scale(1.08)" : "translateY(0) scale(1)"
          : "translateY(16px) scale(0.85)",
        transition: "opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
      }}
    >
      <Icon name="ArrowUp" size={22} style={{ color: "#00aaff", filter: "drop-shadow(0 0 6px rgba(0,170,255,0.9))" }} />
    </button>
  );
}
