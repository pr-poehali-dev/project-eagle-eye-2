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

      {/* Stats */}
      <section className="px-6 md:px-16 py-16" style={{ background: "rgba(0,0,0,0.3)", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "3000+", top: "выполненных", bot: "заказов" },
            { value: "5 лет", top: "опыт", bot: "в SEO" },
            { value: "150+", top: "сайтов в", bot: "ТОПе" },
            { value: "ТОП-10", top: "за 2–3", bot: "месяца" },
          ].map((s) => (
            <div
              key={s.value}
              className="text-center py-6 px-4 rounded-2xl"
              style={{ background: "rgba(0,140,255,0.06)", border: "1px solid rgba(0,140,255,0.2)" }}
            >
              <div className="font-black mb-2" style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", color: "#00aaff", letterSpacing: "-0.02em" }}>{s.value}</div>
              <div className="text-white/60 text-sm leading-snug">{s.top}<br />{s.bot}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How SEO works */}
      <section id="услуги-продвижения" className="px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block uppercase tracking-widest text-xs font-bold mb-5 px-4 py-2 rounded-full"
              style={{ background: "rgba(0,140,255,0.12)", border: "1px solid rgba(0,140,255,0.3)", color: "#2b9fff" }}
            >
              Как это работает
            </div>
            <h2 className="font-black mb-5" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}>
              Почему сайты без SEO теряют клиентов
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
              Каждый день тысячи людей ищут ваши услуги в Яндексе и Google. Вопрос — находят они вас или ваших конкурентов?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Анализ сайта",
                desc: "Проверяем текущие позиции, ссылочный профиль, конкурентов и точки роста. Составляем стратегию продвижения.",
                icon: "Search",
              },
              {
                num: "02",
                title: "Ссылочная масса",
                desc: "Размещаем качественные ссылки на ваш сайт с авторитетных площадок. Поисковики начинают доверять вашему сайту.",
                icon: "Link",
              },
              {
                num: "03",
                title: "Рост позиций",
                desc: "Сайт поднимается в поисковой выдаче. Чем выше позиция — тем больше людей переходят на ваш сайт.",
                icon: "TrendingUp",
              },
              {
                num: "04",
                title: "Клиенты из поиска",
                desc: "Вы получаете бесплатный поток клиентов из Яндекса и Google каждый день. Без оплаты за клики.",
                icon: "Users",
              },
            ].map((card, i) => (
              <div
                key={card.num}
                className="relative p-7 rounded-2xl flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)" }}
              >
                {/* Connector line */}
                {i < 3 && (
                  <div
                    className="hidden lg:block absolute top-10 left-full w-6 h-px z-10"
                    style={{ background: "linear-gradient(to right, rgba(0,140,255,0.5), transparent)" }}
                  />
                )}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm"
                  style={{ background: "rgba(0,140,255,0.15)", border: "1.5px solid rgba(0,140,255,0.35)", color: "#00aaff" }}
                >
                  {card.num}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2" style={{ fontSize: "1.05rem" }}>{card.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OLD How it works — hidden, replaced above */}
      <section className="hidden px-6 md:px-12 py-20" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-5xl mx-auto">
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