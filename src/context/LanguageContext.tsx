import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "ru" | "en";

const translations = {
  ru: {
    nav: {
      services: "Услуги",
      marketplaces: "Маркетплейсы",
      sites: "Сайты",
      logos: "Логотипы",
      portfolio: "Портфолио",
      blog: "Блог",
      contacts: "Контакты",
    },
    hero: {
      title: "Дизайн для бизнеса\nчерез нейросети",
      sub1: "Карточки товаров\u00a0•\u00a0Сайты\u00a0•\u00a0Меню для кафе",
      sub2: "Обложки ВК\u00a0•\u00a0Визуал для соцсетей\u00a0•\u00a0Брендинг",
      tagline: "Быстрее фрилансера.\u00a0Дешевле агентства.\u00a0Круче шаблонов.",
      cta: "Обсудить проект",
      portfolio: "Смотреть портфолио",
    },
    about: {
      tag: "ОБО МНЕ",
      title: "Привет! Меня зовут Стрельцов Иван",
      p1: "Делаю дизайн для бизнеса с помощью нейросетей.",
      p2_pre: "Пока другие тратят",
      p2_bold1: "100–300к на агентства",
      p2_mid: "и ждут месяц — мои клиенты получают результат за",
      p2_bold2: "2–3 дня в 5 раз дешевле.",
      p3: "AI не заменяет дизайнера. AI — это инструмент в руках дизайнера. ",
      p3_bold: "И я знаю как им пользоваться.",
    },
    services: {
      tag: "Что я делаю",
      title: "УСЛУГИ",
      items: [
        { title: "Карточки для маркетплейсов", desc: "Продающие фото и инфографика для Ozon, Wildberries, Яндекс Маркет", price: "от 1 990₽" },
        { title: "Сайты через нейросети", desc: "Лендинги и многостраничники с AI-дизайном за 2–3 дня", price: "от 14 000₽" },
        { title: "Меню для кафе на ТВ-экраны", desc: "Электронные меню-борды для любого заведения", price: "от 2 990₽" },
        { title: "Обложки для групп ВК", desc: "Профессиональные баннеры, которые выделяют среди конкурентов", price: "от 1 990₽" },
        { title: "Визуал для соцсетей", desc: "Контент-паки 8–15 фото в едином стиле для любой ниши", price: "от 2 990₽" },
        { title: "Логотипы и брендинг", desc: "Логотип + фирменный стиль + визитки + упаковка", price: "от 4 990₽" },
        { title: "Видео-контент", desc: "AI-клипы для рилс и клипов ВК, 10–30 секунд", price: "от 3 990₽" },
        { title: "Дизайн для кафе под ключ", desc: "Меню + вывеска + соцсети + упаковка + карта лояльности", price: "от 9 990₽" },
      ],
    },
    how: {
      tag: "Процесс",
      title: "Как я работаю",
      steps: [
        { title: "ПИШЕТЕ МНЕ", desc: "Рассказываете что нужно — сайт, карточки, меню или обложку" },
        { title: "БЕСПЛАТНЫЙ МАКЕТ ЗА 24 ЧАСА", desc: "Показываю первый вариант — если не нравится, не платите" },
        { title: "ДОДЕЛЫВАЮ И ОТДАЮ", desc: "Вношу правки, финализирую и отдаю готовые файлы" },
      ],
    },
    stats: {
      tag: "Результаты",
      title: "В цифрах",
      items: [
        { value: "50+", label: "проектов" },
        { value: "15+", label: "ниш бизнеса" },
        { value: "24 ч", label: "первый макет" },
        { value: "5×", label: "дешевле агентства" },
      ],
    },
    portfolio: {
      tag: "Портфолио",
      title: "МОИ РАБОТЫ",
      filters: ["Все", "Маркетплейсы", "Сайты", "Меню кафе", "Обложки ВК", "Визуал", "Брендинг"],
    },
    faq: {
      tag: "FAQ",
      title: "Частые вопросы",
      items: [
        { q: "Это реальные фото или нейросеть?", a: "Генерирую нейросетью и дорабатываю. Не отличить от профессиональной съёмки." },
        { q: "Сколько времени занимает сайт?", a: "Лендинг — 2–3 дня. Многостраничный — 5–7 дней." },
        { q: "На чём делаете сайты?", a: "На нейро платформах." },
        { q: "А если не понравится?", a: "Макет бесплатный. Не нравится — не платите." },
        { q: "Можно ли вносить правки?", a: "До 3 правок включены в стоимость." },
      ],
    },
    contact: {
      tag: "Контакты",
      title: "Обсудить проект",
      sub: "Напишите мне — покажу бесплатный макет\nпод ваш бизнес за 24 часа",
      vk: "Написать в ВК",
      tg: "Написать в Telegram",
    },
    footer: {
      tagline: "Дизайн для бизнеса через нейросети.\nБыстрее фрилансера, дешевле агентства.",
      services: "Услуги",
      nav: "Навигация",
      copyright: "Все права защищены",
      slogan: "Дизайн через нейросети · Быстро · Качественно · Доступно",
      serviceItems: [
        { label: "Карточки для маркетплейсов", href: "#маркетплейсы" },
        { label: "Сайты через нейросети", href: "#сайты" },
        { label: "Обложки для ВК", href: "#обложки" },
        { label: "Логотипы и брендинг", href: "#логотипы" },
        { label: "Меню для кафе", href: "#услуги" },
      ],
      navItems: [
        { label: "Портфолио", href: "#портфолио" },
        { label: "Обо мне", href: "#о нас" },
        { label: "Блог", href: "/blog" },
        { label: "Контакты", href: "#контакты" },
      ],
    },
    vkBanner: {
      desc: "Дизайн для бизнеса · Визуал · Брендинг",
      follow: "Подписаться",
    },
  },
  en: {
    nav: {
      services: "Services",
      marketplaces: "Marketplaces",
      sites: "Websites",
      logos: "Logos",
      portfolio: "Portfolio",
      blog: "Blog",
      contacts: "Contacts",
    },
    hero: {
      title: "Business Design\nPowered by AI",
      sub1: "Product Cards\u00a0•\u00a0Websites\u00a0•\u00a0Cafe Menus",
      sub2: "VK Covers\u00a0•\u00a0Social Visuals\u00a0•\u00a0Branding",
      tagline: "Faster than a freelancer.\u00a0Cheaper than an agency.\u00a0Better than templates.",
      cta: "Discuss a project",
      portfolio: "View portfolio",
    },
    about: {
      tag: "ABOUT ME",
      title: "Hi! My name is Ivan Streltsov",
      p1: "I create business design using AI tools.",
      p2_pre: "While others spend",
      p2_bold1: "100–300k on agencies",
      p2_mid: "and wait a month — my clients get results in",
      p2_bold2: "2–3 days at 5x lower cost.",
      p3: "AI doesn't replace a designer. AI is a tool in a designer's hands. ",
      p3_bold: "And I know how to use it.",
    },
    services: {
      tag: "What I do",
      title: "SERVICES",
      items: [
        { title: "Marketplace Product Cards", desc: "Selling photos & infographics for Ozon, Wildberries, Yandex Market", price: "from ₽1,990" },
        { title: "AI-Powered Websites", desc: "Landing pages & multi-page sites with AI design in 2–3 days", price: "from ₽14,000" },
        { title: "Cafe TV Menu Boards", desc: "Digital menu boards for any food establishment", price: "from ₽2,990" },
        { title: "VK Group Covers", desc: "Professional banners that stand out from competitors", price: "from ₽1,990" },
        { title: "Social Media Visuals", desc: "Content packs of 8–15 photos in one unified style for any niche", price: "from ₽2,990" },
        { title: "Logos & Branding", desc: "Logo + corporate identity + business cards + packaging", price: "from ₽4,990" },
        { title: "Video Content", desc: "AI clips for reels and VK videos, 10–30 seconds", price: "from ₽3,990" },
        { title: "Cafe Design Turnkey", desc: "Menu + signage + social media + packaging + loyalty card", price: "from ₽9,990" },
      ],
    },
    how: {
      tag: "Process",
      title: "How I work",
      steps: [
        { title: "CONTACT ME", desc: "Tell me what you need — a website, product cards, menu or cover" },
        { title: "FREE MOCKUP IN 24 HOURS", desc: "I show the first version — if you don't like it, you don't pay" },
        { title: "FINISH & DELIVER", desc: "I make edits, finalize and deliver the ready files" },
      ],
    },
    stats: {
      tag: "Results",
      title: "By the numbers",
      items: [
        { value: "50+", label: "projects" },
        { value: "15+", label: "business niches" },
        { value: "24h", label: "first mockup" },
        { value: "5×", label: "cheaper than agency" },
      ],
    },
    portfolio: {
      tag: "Portfolio",
      title: "MY WORKS",
      filters: ["All", "Marketplaces", "Websites", "Cafe Menu", "VK Covers", "Visuals", "Branding"],
    },
    faq: {
      tag: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        { q: "Are these real photos or AI-generated?", a: "I generate with AI and refine. Indistinguishable from professional photography." },
        { q: "How long does a website take?", a: "A landing page — 2–3 days. Multi-page — 5–7 days." },
        { q: "What platform do you build sites on?", a: "On AI platforms." },
        { q: "What if I don't like it?", a: "The mockup is free. If you don't like it — you don't pay." },
        { q: "Can I request revisions?", a: "Up to 3 revisions are included in the price." },
      ],
    },
    contact: {
      tag: "Contacts",
      title: "Discuss a project",
      sub: "Write to me — I'll show a free mockup\ntailored to your business in 24 hours",
      vk: "Message on VK",
      tg: "Message on Telegram",
    },
    footer: {
      tagline: "Business design powered by AI.\nFaster than a freelancer, cheaper than an agency.",
      services: "Services",
      nav: "Navigation",
      copyright: "All rights reserved",
      slogan: "AI Design · Fast · Quality · Affordable",
      serviceItems: [
        { label: "Marketplace Cards", href: "#маркетплейсы" },
        { label: "AI Websites", href: "#сайты" },
        { label: "VK Covers", href: "#обложки" },
        { label: "Logos & Branding", href: "#логотипы" },
        { label: "Cafe Menus", href: "#услуги" },
      ],
      navItems: [
        { label: "Portfolio", href: "#портфолио" },
        { label: "About me", href: "#о нас" },
        { label: "Blog", href: "/blog" },
        { label: "Contacts", href: "#контакты" },
      ],
    },
    vkBanner: {
      desc: "Business Design · Visuals · Branding",
      follow: "Follow",
    },
  },
};

type Translations = typeof translations.ru;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");
  const t = translations[lang] as Translations;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
