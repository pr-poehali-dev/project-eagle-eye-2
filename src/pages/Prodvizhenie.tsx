import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "TrendingUp",
    title: "Продвижение на маркетплейсах",
    desc: "Ozon, Wildberries — настройка рекламы, SEO карточек, аналитика и рост продаж.",
    color: "#00aaff",
  },
  {
    icon: "Instagram",
    title: "SMM и соцсети",
    desc: "Ведение ВКонтакте и Telegram: контент-план, дизайн постов, таргетированная реклама.",
    color: "#a855f7",
  },
  {
    icon: "Search",
    title: "SEO-продвижение сайта",
    desc: "Вывод в топ Яндекса и Google. Семантика, оптимизация, ссылочная масса.",
    color: "#22d3ee",
  },
  {
    icon: "Megaphone",
    title: "Контекстная реклама",
    desc: "Яндекс Директ — настройка, ведение, оптимизация кампаний под вашу нишу.",
    color: "#f59e0b",
  },
  {
    icon: "BarChart2",
    title: "Аналитика и отчёты",
    desc: "Еженедельные отчёты, дашборды, прозрачная аналитика по каждому каналу.",
    color: "#34d399",
  },
  {
    icon: "Users",
    title: "Управление репутацией",
    desc: "Работа с отзывами, рейтингами, SERM — формируем положительный образ бренда.",
    color: "#f87171",
  },
];

const steps = [
  { num: "01", title: "Аудит", desc: "Анализируем текущее состояние, конкурентов и точки роста." },
  { num: "02", title: "Стратегия", desc: "Разрабатываем план продвижения под вашу нишу и бюджет." },
  { num: "03", title: "Запуск", desc: "Настраиваем каналы, создаём контент, запускаем рекламу." },
  { num: "04", title: "Результат", desc: "Ведём, оптимизируем и отчитываемся каждую неделю." },
];

const results = [
  { value: "×3", label: "рост продаж на маркетплейсах" },
  { value: "50+", label: "проектов в нише SMB" },
  { value: "14 дн", label: "до первых результатов" },
  { value: "0₽", label: "скрытых платежей" },
];

export default function Prodvizhenie() {
  const navigate = useNavigate();

  useEffect(() => {
    const prev = document.title;
    document.title = "Продвижение бизнеса — Стрельцов Digital";
    const setMeta = (sel: string, val: string) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute("content", val);
    };
    setMeta('meta[name="description"]', "Продвижение на маркетплейсах, SMM, SEO, контекстная реклама. Стрельцов Digital — рост продаж для малого и среднего бизнеса.");
    return () => { document.title = prev; };
  }, []);

  return (
    <div style={{ background: "#080d1a", minHeight: "100vh", color: "#fff", fontFamily: "'Montserrat', sans-serif" }}>
      <Header />

      {/* Hero */}
      <section
        className="relative flex flex-col justify-center overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/8d69c828-476d-47e8-bc88-0de8aec5b2d0.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Dark overlay — stronger on left for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(100deg, rgba(5,10,22,0.92) 0%, rgba(5,10,22,0.75) 45%, rgba(5,10,22,0.2) 100%)" }}
        />

        <div className="relative z-10 px-8 md:px-16 lg:px-24 pt-32 pb-20 max-w-3xl">
          <div
            className="inline-block uppercase tracking-widest text-xs font-bold mb-8 px-4 py-2 rounded-full"
            style={{ background: "rgba(0,140,255,0.15)", border: "1px solid rgba(0,140,255,0.4)", color: "#2b9fff" }}
          >
            Стрельцов Digital
          </div>

          <h1
            className="font-black leading-none mb-6"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", letterSpacing: "-0.03em" }}
          >
            ПРОДВИЖЕНИЕ
            <br />
            САЙТОВ
            <br />
            <span style={{ color: "#00aaff" }}>В ТОП</span>
          </h1>

          <p className="mb-3 font-semibold" style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "rgba(255,255,255,0.85)" }}>
            Крауд-ссылки. Вечные ссылки.
          </p>
          <p className="mb-3 font-semibold" style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "rgba(255,255,255,0.85)" }}>
            Статьи на площадках. Высокий ИКС.
          </p>
          <p className="mb-10 font-semibold" style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "rgba(255,255,255,0.6)" }}>
            Больше трафика. Больше клиентов. Из поиска.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => document.getElementById("контакты")?.scrollIntoView({ behavior: "smooth" }), 100);
              }}
              className="px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg, #0060c0, #00aaff)", boxShadow: "0 0 35px rgba(0,140,255,0.45)", fontSize: "1rem", letterSpacing: "0.04em" }}
            >
              ЗАКАЗАТЬ ПРОДВИЖЕНИЕ
            </button>
            <button
              onClick={() => document.getElementById("тарифы")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-white/10"
              style={{ border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: "1rem", letterSpacing: "0.04em" }}
            >
              СМОТРЕТЬ ТАРИФЫ
            </button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map((r) => (
            <div
              key={r.label}
              className="text-center p-6 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="font-black mb-1" style={{ fontSize: "2.5rem", color: "#00aaff" }}>{r.value}</div>
              <div className="text-white/50 text-sm">{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="услуги-продвижения" className="px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="inline-block uppercase tracking-widest text-xs font-bold mb-4 px-4 py-2 rounded-full"
              style={{ background: "rgba(0,140,255,0.12)", border: "1px solid rgba(0,140,255,0.3)", color: "#2b9fff" }}
            >
              Услуги
            </div>
            <h2 className="font-black" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}>
              Что входит в продвижение
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${s.color}18`, border: `1px solid ${s.color}40` }}
                >
                  <Icon name={s.icon as "TrendingUp"} size={22} style={{ color: s.color }} />
                </div>
                <h3 className="font-bold text-white mb-2" style={{ fontSize: "1.05rem" }}>{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-12 py-20" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="inline-block uppercase tracking-widest text-xs font-bold mb-4 px-4 py-2 rounded-full"
              style={{ background: "rgba(0,140,255,0.12)", border: "1px solid rgba(0,140,255,0.3)", color: "#2b9fff" }}
            >
              Процесс
            </div>
            <h2 className="font-black" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}>
              Как мы работаем
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="relative">
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 left-full w-full h-px z-0"
                    style={{ background: "linear-gradient(to right, rgba(0,140,255,0.4), transparent)" }}
                  />
                )}
                <div
                  className="relative z-10 p-6 rounded-2xl text-center"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 font-black"
                    style={{ background: "rgba(0,140,255,0.15)", border: "2px solid rgba(0,140,255,0.4)", color: "#00aaff", fontSize: "1.1rem" }}
                  >
                    {s.num}
                  </div>
                  <h3 className="font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-black mb-5" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}>
            Готовы к росту?
          </h2>
          <p className="text-white/50 mb-10" style={{ fontSize: "1.1rem" }}>
            Расскажите о вашем бизнесе — подберём каналы и рассчитаем стоимость продвижения.
          </p>
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => document.getElementById("контакты")?.scrollIntoView({ behavior: "smooth" }), 100);
            }}
            className="px-10 py-5 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #0070d6, #00aaff)", boxShadow: "0 0 40px rgba(0,140,255,0.4)" }}
          >
            Получить бесплатный аудит
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}