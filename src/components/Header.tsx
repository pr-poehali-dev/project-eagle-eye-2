import { useState } from "react";
import Icon from "@/components/ui/icon";

const navItems = [
  { label: "Услуги", href: "#услуги" },
  { label: "Портфолио", href: "#портфолио" },
  { label: "Обо мне", href: "#о нас" },
  { label: "Контакты", href: "#контакты" },
];

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 ${className ?? ""}`}
        style={{ background: "linear-gradient(to bottom, rgba(5,12,26,0.85) 0%, transparent 100%)" }}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(145deg, #0a1a3a, #0d2050)",
                backgroundClip: "padding-box",
                boxShadow: "0 0 0 2px rgba(0,160,255,0.6), 0 0 20px rgba(0,140,255,0.4)",
              }}
            >
              <Icon name="Zap" size={22} style={{ color: "#00c8ff" }} />
            </div>
            <div className="font-bold leading-snug">
              <div className="text-white" style={{ fontSize: "1.05rem" }}>Streltsov</div>
              <div style={{ color: "#2b9fff", fontSize: "1.05rem" }}>Digital</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={26} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-24 px-8 gap-6"
          style={{ background: "rgba(5,12,26,0.97)" }}
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="text-left text-white text-2xl font-bold uppercase tracking-widest border-b border-white/10 pb-4 hover:text-[#00aaff] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}