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

      {/* Ссылочное продвижение — тарифы */}
      <section id="тарифы" className="px-6 md:px-16 py-24" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block uppercase tracking-widest text-xs font-bold mb-5 px-4 py-2 rounded-full"
              style={{ background: "rgba(0,140,255,0.12)", border: "1px solid rgba(0,140,255,0.3)", color: "#2b9fff" }}
            >
              Услуга 1
            </div>
            <h2 className="font-black mb-5" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}>
              Ссылочное продвижение
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
              Наращиваем ссылочную массу вашего сайта. Поисковики видят что на вас ссылаются — и поднимают в выдаче.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                badge: "ПРОБНЫЙ",
                title: "Профессиональные ссылки — 300 шт.",
                price: "850 ₽",
                features: [
                  "300 ссылок с проверенных площадок",
                  "Ручное размещение",
                  "Отчёт со всеми ссылками",
                  "Срок: 3–5 дней",
                ],
                note: "Подходит для: новых сайтов, которым нужен первый толчок в продвижении",
                popular: false,
                color: "#00aaff",
              },
              {
                badge: "PRO",
                title: "Статейные ссылки — 90 шт.",
                price: "1 990 ₽",
                features: [
                  "90 статейных ссылок",
                  "Размещение в тематических статьях",
                  "Вечные ссылки — не удаляются",
                  "Отчёт со всеми ссылками",
                  "Срок: 5–7 дней",
                ],
                note: "Подходит для: сайтов, которым нужен стабильный рост позиций",
                popular: false,
                color: "#00aaff",
              },
              {
                badge: "PREMIUM",
                title: "Статейные ссылки — 150 шт.",
                price: "2 650 ₽",
                features: [
                  "150 статейных ссылок",
                  "Размещение на качественных площадках",
                  "Вечные ссылки — работают постоянно",
                  "Разнообразие анкоров",
                  "Подробный отчёт",
                  "Срок: 5–10 дней",
                ],
                note: "Подходит для: бизнесов, которые хотят обойти конкурентов в выдаче",
                popular: true,
                color: "#00aaff",
              },
              {
                badge: "ULTRA",
                title: "4000 ссылок в мини-статьях",
                price: "3 390 ₽",
                features: [
                  "4000 ссылок в мини-статьях",
                  "Массовое наращивание ссылочной массы",
                  "Широкий охват площадок",
                  "Разнообразие анкоров и источников",
                  "Подробный отчёт",
                  "Срок: 7–14 дней",
                ],
                note: "Подходит для: агрессивного продвижения и быстрого роста позиций",
                popular: false,
                color: "#00aaff",
              },
            ].map((plan) => (
              <div
                key={plan.badge}
                className="relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: plan.popular
                    ? "linear-gradient(160deg, rgba(0,100,200,0.25) 0%, rgba(0,60,140,0.18) 100%)"
                    : "rgba(255,255,255,0.04)",
                  border: plan.popular
                    ? "1.5px solid rgba(0,140,255,0.55)"
                    : "1px solid rgba(255,255,255,0.09)",
                  boxShadow: plan.popular ? "0 0 40px rgba(0,140,255,0.18)" : "none",
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest"
                    style={{ background: "linear-gradient(90deg, #0070d6, #00aaff)", color: "#fff" }}
                  >
                    Популярный
                  </div>
                )}

                <div
                  className="inline-block self-start text-xs font-black uppercase tracking-widest px-3 py-1 rounded-lg mb-4"
                  style={{ background: "rgba(0,140,255,0.15)", color: "#00aaff", border: "1px solid rgba(0,140,255,0.3)" }}
                >
                  {plan.badge}
                </div>

                <h3 className="font-bold text-white mb-4 leading-snug" style={{ fontSize: "0.95rem" }}>{plan.title}</h3>

                <div className="font-black mb-6" style={{ fontSize: "2rem", color: "#fff", letterSpacing: "-0.02em" }}>
                  {plan.price}
                </div>

                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                      <span style={{ color: "#22d3ee", marginTop: 2, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="text-white/35 text-xs leading-relaxed mb-6">{plan.note}</p>

                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => document.getElementById("контакты")?.scrollIntoView({ behavior: "smooth" }), 100);
                  }}
                  className="w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
                  style={
                    plan.popular
                      ? { background: "linear-gradient(135deg, #0060c0, #00aaff)", color: "#fff", boxShadow: "0 0 25px rgba(0,140,255,0.4)" }
                      : { background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }
                  }
                >
                  Заказать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Крауд-маркетинг и статьи */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block uppercase tracking-widest text-xs font-bold mb-5 px-4 py-2 rounded-full"
              style={{ background: "rgba(0,140,255,0.12)", border: "1px solid rgba(0,140,255,0.3)", color: "#2b9fff" }}
            >
              Услуга 2
            </div>
            <h2 className="font-black mb-5" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}>
              Крауд-маркетинг и размещение статей
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
              Размещаем ссылки и статьи на авторитетных площадках. Естественный ссылочный профиль который нравится поисковикам.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                badge: "СТАТЬИ В БЛОГАХ",
                title: "Размещение статей в 150 RU-блогах",
                price: "17 400 ₽",
                features: [
                  "150 уникальных статей",
                  "Размещение на русскоязычных блогах",
                  "Вечные публикации — не удаляются",
                  "Естественные ссылки в контексте статьи",
                  "Рост авторитета сайта в глазах поисковиков",
                  "Подробный отчёт с URL каждой статьи",
                  "Срок: 14–21 день",
                ],
                note: "Подходит для: серьёзного продвижения. Поисковики высоко ценят ссылки из статей — это самый естественный тип ссылок.",
                popular: false,
              },
              {
                badge: "ФОРУМНЫЕ ССЫЛКИ",
                title: "Ссылки в тематических статьях на форумах — 100 шт.",
                price: "5 000 ₽",
                features: [
                  "100 ссылок на тематических форумах",
                  "Размещение в контексте обсуждений",
                  "Живые аккаунты с историей",
                  "Тематическое окружение ссылки",
                  "Отчёт со всеми ссылками",
                  "Срок: 7–14 дней",
                ],
                note: "Подходит для: создания естественного ссылочного профиля. Поисковики видят что ваш сайт обсуждают реальные люди.",
                popular: false,
              },
              {
                badge: "РЕКОМЕНДАТЕЛЬНЫЕ ССЫЛКИ",
                title: "Dofollow-ссылки по типу «вопрос-ответ» — 100 шт.",
                price: "20 500 ₽",
                features: [
                  "100 dofollow-ссылок",
                  "Размещение на сервисах вопросов-ответов",
                  "Рекомендательный формат — высокое доверие",
                  "Все ссылки передают вес вашему сайту",
                  "Естественное окружение",
                  "Подробный отчёт",
                  "Срок: 14–21 день",
                ],
                note: "Подходит для: максимального эффекта от ссылок. Dofollow-ссылки напрямую передают авторитет вашему сайту и сильнее всего влияют на позиции.",
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.badge}
                className="relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
              >
                <div
                  className="inline-block self-start text-xs font-black uppercase tracking-widest px-3 py-1 rounded-lg mb-4"
                  style={{ background: "rgba(0,140,255,0.15)", color: "#00aaff", border: "1px solid rgba(0,140,255,0.3)" }}
                >
                  {plan.badge}
                </div>

                <h3 className="font-bold text-white mb-4 leading-snug" style={{ fontSize: "0.95rem" }}>{plan.title}</h3>

                <div className="font-black mb-6" style={{ fontSize: "2rem", color: "#fff", letterSpacing: "-0.02em" }}>
                  {plan.price}
                </div>

                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                      <span style={{ color: "#22d3ee", marginTop: 2, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="text-white/35 text-xs leading-relaxed mb-6">{plan.note}</p>

                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => document.getElementById("контакты")?.scrollIntoView({ behavior: "smooth" }), 100);
                  }}
                  className="w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  Заказать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Премиум продвижение */}
      <section className="px-6 md:px-16 py-24" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block uppercase tracking-widest text-xs font-bold mb-5 px-4 py-2 rounded-full"
              style={{ background: "rgba(0,140,255,0.12)", border: "1px solid rgba(0,140,255,0.3)", color: "#2b9fff" }}
            >
              Услуга 3
            </div>
            <h2 className="font-black mb-5" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}>
              Премиум продвижение
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
              Максимальный результат для тех кто хочет доминировать в поисковой выдаче. Площадки с высоким ИКС и ежедневное размещение.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                badge: "ВЫСОКИЙ ИКС",
                title: "130 ссылок с ИКС от 100",
                price: "9 990 ₽",
                features: [
                  "130 ссылок с площадок с ИКС от 100",
                  "Высокий авторитет каждой площадки",
                  "Яндекс доверяет таким ссылкам больше всего",
                  "Вечное размещение",
                  "Подробный отчёт с ИКС каждой площадки",
                  "Срок: 10–14 дней",
                ],
                note: "Подходит для: продвижения в Яндексе. ИКС — показатель авторитетности площадки. Чем выше ИКС донора — тем сильнее эффект от ссылки.",
                accentColor: "#a78bfa",
              },
              {
                badge: "МОЩНЫЕ ДОНОРЫ",
                title: "50 безанкорных ссылок с ИКС от 500",
                price: "3 950 ₽",
                features: [
                  "50 ссылок с площадок с ИКС от 500",
                  "Безанкорное размещение — максимально естественно",
                  "Самые авторитетные площадки Рунета",
                  "Мощная передача веса вашему сайту",
                  "Подробный отчёт",
                  "Срок: 7–10 дней",
                ],
                note: "Подходит для: быстрого усиления позиций. Каждая ссылка с сайта с ИКС 500+ даёт мощный импульс вашему продвижению.",
                accentColor: "#a78bfa",
              },
              {
                badge: "ЕЖЕДНЕВНОЕ РАЗМЕЩЕНИЕ",
                title: "Статьи на 300 форумах — ежедневно 30 дней",
                price: "28 990 ₽",
                features: [
                  "300 русскоязычных форумов",
                  "Ежедневное размещение на протяжении 30 дней",
                  "Постепенное наращивание — выглядит максимально естественно",
                  "Поисковики видят стабильный рост упоминаний",
                  "Мощный накопительный эффект",
                  "Еженедельные отчёты о ходе работы",
                  "Срок: 30 дней",
                ],
                note: "Подходит для: комплексного продвижения. Ежедневное размещение создаёт эффект «снежного кома» — позиции растут с каждой неделей всё быстрее.",
                accentColor: "#a78bfa",
              },
            ].map((plan) => (
              <div
                key={plan.badge}
                className="relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(160deg, rgba(100,60,200,0.12) 0%, rgba(80,40,160,0.06) 100%)",
                  border: "1px solid rgba(167,139,250,0.2)",
                }}
              >
                <div
                  className="inline-block self-start text-xs font-black uppercase tracking-widest px-3 py-1 rounded-lg mb-4"
                  style={{ background: "rgba(167,139,250,0.15)", color: "#a78bfa", border: "1px solid rgba(167,139,250,0.35)" }}
                >
                  {plan.badge}
                </div>

                <h3 className="font-bold text-white mb-4 leading-snug" style={{ fontSize: "0.95rem" }}>{plan.title}</h3>

                <div className="font-black mb-6" style={{ fontSize: "2rem", color: "#fff", letterSpacing: "-0.02em" }}>
                  {plan.price}
                </div>

                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                      <span style={{ color: "#a78bfa", marginTop: 2, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="text-white/35 text-xs leading-relaxed mb-6">{plan.note}</p>

                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => document.getElementById("контакты")?.scrollIntoView({ behavior: "smooth" }), 100);
                  }}
                  className="w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
                  style={{ background: "rgba(167,139,250,0.12)", color: "#a78bfa", border: "1px solid rgba(167,139,250,0.3)" }}
                >
                  Заказать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block uppercase tracking-widest text-xs font-bold mb-5 px-4 py-2 rounded-full"
              style={{ background: "rgba(0,140,255,0.12)", border: "1px solid rgba(0,140,255,0.3)", color: "#2b9fff" }}
            >
              Почему мы
            </div>
            <h2 className="font-black" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}>
              Почему клиенты выбирают нас
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔗", title: "Только живые ссылки", desc: "Никаких ботов и автоматических прогонов. Каждая ссылка размещается вручную на реальных площадках." },
              { icon: "📊", title: "Прозрачные отчёты", desc: "После выполнения работы вы получаете подробный отчёт с URL каждой размещённой ссылки." },
              { icon: "⚡", title: "Быстрый старт", desc: "Начинаем работу в день оплаты. Первые результаты видны уже через 2–4 недели." },
              { icon: "🛡️", title: "Безопасные методы", desc: "Используем только белые методы продвижения. Никакого риска попасть под фильтры поисковых систем." },
              { icon: "🎯", title: "3000+ заказов", desc: "Более 3000 успешно выполненных заказов по SEO. Знаем что работает в каждой нише." },
              { icon: "💬", title: "Поддержка 24/7", desc: "На связи каждый день. Ответим на любые вопросы по продвижению вашего сайта." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(0,140,255,0.1)", border: "1px solid rgba(0,140,255,0.2)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2" style={{ fontSize: "1rem" }}>{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
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