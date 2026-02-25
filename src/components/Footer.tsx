import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const services = [
  { label: "Карточки для маркетплейсов", href: "#маркетплейсы" },
  { label: "Сайты через нейросети", href: "#сайты" },
  { label: "Обложки для ВК", href: "#обложки" },
  { label: "Логотипы и брендинг", href: "#логотипы" },
  { label: "Меню для кафе", href: "#услуги" },
];

const links = [
  { label: "Портфолио", href: "#портфолио" },
  { label: "Обо мне", href: "#о нас" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "#контакты" },
];

const socials = [
  { icon: "Send", label: "Telegram", href: "https://t.me/seovzlet" },
  { icon: "MessageCircle", label: "ВКонтакте", href: "https://vk.com/seovzlet" },
];

export default function Footer() {
  const navigate = useNavigate();

  const handleNav = (href: string) => {
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
    <footer
      className="px-6 md:px-12 pt-14 pb-0 flex flex-col"
      style={{ background: "linear-gradient(145deg, #07101f, #060c18)", borderTop: "1px solid rgba(0,170,255,0.08)" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Top: logo + tagline + socials */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(145deg, #0a1a3a, #0d2050)",
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
            <p className="text-white/40 text-sm leading-relaxed">
              Дизайн для бизнеса через нейросети.<br />
              Быстрее фрилансера, дешевле агентства.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/60 hover:text-white text-xs font-semibold transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,170,255,0.4)"; (e.currentTarget as HTMLElement).style.color = "#00aaff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
                >
                  <Icon name={s.icon as "Send"} size={14} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex gap-12 sm:gap-20">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-5 font-semibold">Услуги</p>
              <ul className="flex flex-col gap-3">
                {services.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleNav(item.href)}
                      className="text-white/60 hover:text-[#00aaff] text-sm transition-colors duration-300 text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-5 font-semibold">Навигация</p>
              <ul className="flex flex-col gap-3">
                {links.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleNav(item.href)}
                      className="text-white/60 hover:text-[#00aaff] text-sm transition-colors duration-300 text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,170,255,0.2), transparent)" }} className="mb-5" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-5">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Стрельцов Digital — Все права защищены
          </p>
          <p className="text-white/25 text-xs">
            Дизайн через нейросети · Быстро · Качественно · Доступно
          </p>
        </div>
      </div>

      {/* Big STRELTSOV text */}
      <div className="overflow-hidden">
        <h2
          className="text-[13.5vw] sm:text-[14vw] lg:text-[12vw] leading-[0.85] font-extrabold tracking-tight uppercase block"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #003388 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "-0.1em",
          }}
        >
          STRELTSOV
        </h2>
      </div>
    </footer>
  );
}