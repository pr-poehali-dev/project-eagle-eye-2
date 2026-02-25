import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Визуал Лайт",
    price: "2 990₽",
    emoji: "📱",
    color: "#2b9fff",
    glow: "rgba(43,159,255,0.25)",
    features: [
      "8 фото в едином стиле",
      "Квадратный формат 1:1",
      "Для ВК или Telegram",
    ],
  },
  {
    name: "Визуал Стандарт",
    price: "4 990₽",
    emoji: "📱",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.25)",
    popular: true,
    features: [
      "12 фото в едином стиле",
      "Квадрат 1:1 + сторис 9:16",
      "2 баннера для акций",
      "Для ВК и Telegram",
    ],
  },
  {
    name: "Визуал Премиум",
    price: "7 990₽",
    emoji: "📱",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.25)",
    features: [
      "15 фото + 5 сторис",
      "3 баннера для акций",
      "Контент-план на месяц",
      "Тексты к каждому посту",
      "Хештеги",
    ],
  },
];

const bullets = [
  "8–15 фото в едином стиле",
  "Посты + сторис + баннеры акций",
  "Под вашу нишу и фирменные цвета",
  "Готово к публикации — просто выкладывай",
  "Контент-план + тексты в пакете Премиум",
];

export default function SocialVisualBlock() {
  const [hovered, setHovered] = useState<number | null>(null);
  const navigate = useNavigate();

  const goToContacts = (planName: string) => {
    const el = document.getElementById("контакты");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => document.getElementById("контакты")?.scrollIntoView({ behavior: "smooth" }), 100);
    }
    setTimeout(() => {
      const textarea = document.querySelector<HTMLTextAreaElement>("#контакты textarea");
      if (textarea) {
        textarea.value = `Хочу заказать: ${planName}`;
        textarea.dispatchEvent(new Event("input", { bubbles: true }));
        textarea.focus();
      }
    }, 600);
  };

  return (
    <section
      id="визуал"
      className="py-24 px-6 md:px-12"
      style={{ background: "linear-gradient(180deg, #080d1a 0%, #0a0f20 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-5"
            style={{ background: "rgba(43,159,255,0.1)", color: "#2b9fff", border: "1px solid rgba(43,159,255,0.25)" }}
          >
            Соцсети
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight mb-4"
            style={{
              background: "linear-gradient(135deg, #ffffff 30%, #2b9fff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Визуал для соцсетей
          </h2>
          <p className="text-white/50 text-lg mb-3">
            Готовый контент-пак для ВК, Telegram и соцсетей
          </p>
          <p className="text-white/70 text-base leading-relaxed max-w-2xl">
            Ваша лента будет выглядеть как у крупного бренда.<br />
            8–15 фото в едином стиле. Посты, сторис, баннеры.<br />
            Выложил — и подписчики думают что у вас SMM-отдел.
          </p>
        </div>

        {/* Bullets */}
        <ul className="flex flex-wrap gap-x-8 gap-y-2 mb-12">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm text-white/70">
              <Icon name="CheckCircle2" size={15} style={{ color: "#2b9fff", flexShrink: 0 }} />
              {b}
            </li>
          ))}
        </ul>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden mb-14" style={{ border: "1px solid rgba(43,159,255,0.15)" }}>
          <img
            src="https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/6e9f3022-5c69-403c-aed0-fd1e0c0d02f7.jpg"
            alt="Визуал для соцсетей"
            className="w-full object-cover"
            style={{ maxHeight: "380px" }}
          />
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative rounded-2xl p-7 flex flex-col gap-5 cursor-pointer transition-all duration-300"
              style={{
                background: hovered === i
                  ? `linear-gradient(145deg, rgba(10,18,38,0.95), rgba(12,22,50,0.9))`
                  : "linear-gradient(145deg, rgba(8,14,30,0.9), rgba(10,18,40,0.85))",
                border: `1px solid ${hovered === i ? plan.color : "rgba(255,255,255,0.07)"}`,
                boxShadow: hovered === i ? `0 0 40px ${plan.glow}` : "none",
                transform: hovered === i ? "translateY(-4px)" : "none",
              }}
            >
              {plan.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: plan.color, color: "#fff" }}
                >
                  Популярный
                </span>
              )}

              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{plan.emoji} {plan.name}</p>
                <p className="text-3xl font-extrabold text-white">{plan.price}</p>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                    <Icon name="Check" size={14} style={{ color: plan.color, flexShrink: 0, marginTop: "3px" }} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => goToContacts(`${plan.name} — ${plan.price}`)}
                className="mt-2 w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300"
                style={{
                  background: hovered === i ? plan.color : "transparent",
                  color: hovered === i ? "#fff" : plan.color,
                  border: `1px solid ${plan.color}`,
                }}
              >
                Заказать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}