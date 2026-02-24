import Icon from "@/components/ui/icon";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
            style={{
              background: "linear-gradient(135deg, #0055ff, #00aaff)",
              boxShadow: "0 0 16px rgba(0, 170, 255, 0.6)",
            }}
          >
            <Icon name="Zap" size={18} className="text-white" />
          </div>
          <div className="text-white font-bold text-sm leading-tight">
            <div>Streltsov</div>
            <div style={{ color: "#00aaff" }}>Digital</div>
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
