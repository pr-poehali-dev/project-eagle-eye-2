import { useNavigate } from "react-router-dom";
import { useLang } from "@/context/LanguageContext";

const goToContacts = (navigate: ReturnType<typeof useNavigate>, msg: string) => {
  const el = document.getElementById("контакты");
  if (el) { el.scrollIntoView({ behavior: "smooth" }); }
  else { navigate("/"); setTimeout(() => document.getElementById("контакты")?.scrollIntoView({ behavior: "smooth" }), 100); }
  setTimeout(() => {
    const ta = document.querySelector<HTMLTextAreaElement>("#контакты textarea");
    if (ta) { ta.value = msg; ta.dispatchEvent(new Event("input", { bubbles: true })); ta.focus(); }
  }, 600);
};

export default function MarketCardsBlock() {
  const navigate = useNavigate();
  const { t } = useLang();
  const m = t.marketCards;
  const [titleLine1, titleLine2] = m.title.split("\n");

  return (
    <section
      id="маркетплейсы"
      className="py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #070f1e 0%, #080d1a 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 80% 40%, rgba(120,0,255,0.1) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-[#00aaff] text-xs uppercase tracking-[0.3em] font-semibold mb-3">{m.tag}</p>
          <h2
            className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight"
            style={{ textShadow: "0 0 40px rgba(0,120,255,0.25)" }}
          >
            {titleLine1}<br className="sm:hidden" /> {titleLine2}
          </h2>
          <p className="text-white/55 mt-4 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            {m.sub1}{" "}
            <span className="text-white font-semibold">Ozon</span>,{" "}
            <span className="text-white font-semibold">Wildberries</span>,{" "}
            <span className="text-white font-semibold">Яндекс Маркет</span>.<br />
            <span style={{ color: "#ff4d4d" }}>{m.sub2}</span>{" "}
            <span style={{ color: "#00aaff" }}>{m.sub3}</span>
          </p>
          <div className="mt-4 mx-auto w-16 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #00aaff, transparent)" }} />
        </div>

        <div className="rounded-2xl overflow-hidden mb-10" style={{ border: "1px solid rgba(120,0,255,0.2)" }}>
          <img
            src="https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/30e9b306-8bf1-4c92-ac74-a3ac2860be53.jpg"
            alt="Marketplace product cards"
            className="w-full object-cover"
            style={{ maxHeight: "380px" }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {m.packages.map((pkg) => (
            <div
              key={pkg.title}
              className="rounded-2xl p-6 flex flex-col gap-4 relative"
              style={{
                background: pkg.popular ? "linear-gradient(145deg, #120d2e, #0d0a22)" : "linear-gradient(145deg, #0d1b2e, #090f1e)",
                border: pkg.popular ? "1px solid rgba(120,0,255,0.5)" : "1px solid rgba(0,170,255,0.15)",
                boxShadow: pkg.popular ? "0 0 32px rgba(120,0,255,0.15)" : "none",
              }}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #7000ff, #aa44ff)" }}>
                  {m.popular}
                </span>
              )}
              <div className="flex justify-between items-start">
                <p className="text-white font-bold text-base">{pkg.title}</p>
                <span className="text-lg font-extrabold shrink-0"
                  style={{ color: pkg.popular ? "#aa44ff" : "#00aaff", textShadow: pkg.popular ? "0 0 12px rgba(120,0,255,0.5)" : "0 0 12px rgba(0,170,255,0.4)" }}>
                  {pkg.price}
                </span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px]"
                      style={{ background: pkg.popular ? "rgba(120,0,255,0.2)" : "rgba(0,170,255,0.15)", color: pkg.popular ? "#aa44ff" : "#00aaff", border: pkg.popular ? "1px solid rgba(120,0,255,0.4)" : "1px solid rgba(0,170,255,0.35)" }}>
                      ✓
                    </span>
                    <span className="text-white/70 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          <div className="rounded-2xl p-6" style={{ background: "linear-gradient(145deg, #0d1b2e, #090f1e)", border: "1px solid rgba(0,170,255,0.15)" }}>
            <h3 className="text-[#00aaff] font-bold text-xs uppercase tracking-widest mb-5">{m.benefitsTitle}</h3>
            <ul className="flex flex-col gap-3">
              {m.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px]"
                    style={{ background: "rgba(0,170,255,0.15)", color: "#00aaff", border: "1px solid rgba(0,170,255,0.35)" }}>✓</span>
                  <span className="text-white/70 text-sm leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-6" style={{ background: "linear-gradient(145deg, #0d1b2e, #090f1e)", border: "1px solid rgba(0,170,255,0.15)" }}>
            <h3 className="text-[#00aaff] font-bold text-xs uppercase tracking-widest mb-5">{m.nichesTitle}</h3>
            <ul className="flex flex-col gap-3">
              {m.niches.map((n) => (
                <li key={n.label} className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">{n.emoji}</span>
                  <span className="text-sm">
                    <span className="text-white font-semibold">{n.label}</span>
                    <span className="text-white/45"> — {n.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => goToContacts(navigate, m.ctaMsg)}
            className="inline-flex items-center gap-2 font-bold uppercase tracking-widest transition-all duration-300 hover:brightness-125"
            style={{ fontSize: "0.85rem", padding: "14px 40px", background: "linear-gradient(135deg, #0055ff, #00aaff)", color: "#fff", borderRadius: "6px", boxShadow: "0 0 32px rgba(0,170,255,0.4)" }}
          >
            {m.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
