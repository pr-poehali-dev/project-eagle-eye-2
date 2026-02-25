import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  className?: string;
}

const navItems = [
  { label: "Услуги", href: "#услуги" },
  { label: "Маркетплейсы", href: "#маркетплейсы" },
  { label: "Сайты", href: "#сайты" },
  { label: "Логотипы", href: "#логотипы" },
  { label: "Портфолио", href: "#портфолио" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "#контакты" },
];

export default function Header({ className }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <header
        className={`absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 ${className ?? ""}`}
        style={{ background: "linear-gradient(to bottom, rgba(5,12,26,0.85) 0%, transparent 100%)" }}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
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
              <div className="flex items-center gap-1" style={{ color: "#2b9fff", fontSize: "1.05rem" }}>
                Digital
                <span className="relative group" style={{ display: "inline-flex" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: "1px", cursor: "pointer" }}>
                    <circle cx="12" cy="12" r="12" fill="#1D9BF0"/>
                    <path d="M9.5 16.5L5.5 12.5L6.91 11.09L9.5 13.67L17.09 6.08L18.5 7.5L9.5 16.5Z" fill="white"/>
                  </svg>
                  <span
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md text-white text-xs font-semibold whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: "#1D9BF0", boxShadow: "0 4px 14px rgba(29,155,240,0.5)" }}
                  >
                    ✓ Verified Business
                    <span className="absolute top-full left-1/2 -translate-x-1/2" style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "5px solid #1D9BF0" }} />
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8">
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
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              className="text-white p-1"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <Icon name={mobileOpen ? "X" : "Menu"} size={26} />
            </button>
          </div>
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
