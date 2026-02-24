import Icon from "@/components/ui/icon";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
            style={{
              background: "linear-gradient(145deg, #0a1a3a, #0d2050)",
              border: "2px solid transparent",
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

        {/* Nav */}
        <nav className="hidden md:flex gap-8">
          {["Услуги", "Портфолио", "О нас", "Контакты"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile burger */}
        <button className="md:hidden text-white">
          <Icon name="Menu" size={24} />
        </button>
      </div>
    </header>
  );
}