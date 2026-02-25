import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  { q: "Это реальные фото или нейросеть?", a: "Генерирую нейросетью и дорабатываю. Не отличить от профессиональной съёмки." },
  { q: "Сколько времени занимает сайт?", a: "Лендинг — 2–3 дня. Многостраничный — 5–7 дней." },
  { q: "На чём делаете сайты?", a: "На нейро платформах." },
  { q: "А если не понравится?", a: "Макет бесплатный. Не нравится — не платите." },
  { q: "Можно ли вносить правки?", a: "До 3 правок включены в стоимость." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-16 px-6 md:px-12 lg:px-20"
      style={{ background: "linear-gradient(180deg, #080d1a 0%, #060c18 100%)" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#00aaff] text-xs uppercase tracking-[0.3em] font-semibold mb-3">FAQ</p>
          <h2
            className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight"
            style={{ textShadow: "0 0 40px rgba(0,120,255,0.25)" }}
          >
            Частые вопросы
          </h2>
          <div
            className="mt-4 mx-auto w-16 h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, #00aaff, transparent)" }}
          />
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                background: "linear-gradient(145deg, #0d1b2e, #090f1e)",
                border: open === i ? "1px solid rgba(0,170,255,0.4)" : "1px solid rgba(255,255,255,0.07)",
                boxShadow: open === i ? "0 0 20px rgba(0,120,255,0.12)" : "none",
              }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center gap-4 px-5 py-4">
                <p className="text-white font-semibold text-sm leading-snug">❓ {faq.q}</p>
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: open === i ? "rgba(0,170,255,0.2)" : "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(0,170,255,0.2)",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <Icon name="Plus" size={14} className="text-[#00aaff]" />
                </div>
              </div>
              {open === i && (
                <div className="px-5 pb-4" style={{ borderTop: "1px solid rgba(0,170,255,0.1)" }}>
                  <p className="text-white/60 text-sm leading-relaxed pt-3">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
