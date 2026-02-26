import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts, categoryColors } from "@/data/blogData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function ShareButtons({ title }: { title: string }) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(title);

  const share = (href: string) => window.open(href, "_blank", "width=600,height=400");

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-[#64748b] text-sm">Поделиться:</span>
      <button
        onClick={() => share(`https://vk.com/share.php?url=${url}&title=${text}`)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
        style={{ background: "#0077ff" }}
      >
        ВКонтакте
      </button>
      <button
        onClick={() => share(`https://t.me/share/url?url=${url}&text=${text}`)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
        style={{ background: "#29b6f6", color: "#0a0e1a" }}
      >
        Telegram
      </button>
      <button
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          alert("Ссылка скопирована!");
        }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
        style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
      >
        Скопировать ссылку
      </button>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) return;
    const seoTitle = post.seoTitle || `${post.title} | Стрельцов Digital`;
    const seoDesc = post.seoDescription || post.description;
    const prevTitle = document.title;
    const setMeta = (sel: string, val: string) => document.querySelector(sel)?.setAttribute("content", val);

    document.title = seoTitle;
    setMeta('meta[name="description"]', seoDesc);
    setMeta('meta[property="og:title"]', seoTitle);
    setMeta('meta[property="og:description"]', seoDesc);
    setMeta('meta[property="og:image"]', post.image);
    setMeta('meta[property="og:url"]', `https://streltsovdigital.ru/blog/${post.slug}`);
    setMeta('meta[name="twitter:title"]', seoTitle);
    setMeta('meta[name="twitter:description"]', seoDesc);
    setMeta('meta[name="twitter:image"]', post.image);
    if (post.seoKeywords) {
      let kw = document.querySelector('meta[name="keywords"]');
      if (!kw) { kw = document.createElement("meta"); (kw as HTMLMetaElement).name = "keywords"; document.head.appendChild(kw); }
      kw.setAttribute("content", post.seoKeywords);
    }

    return () => { document.title = prevTitle; };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0a0e1a" }}>
        <div className="text-center">
          <p className="text-white text-2xl font-bold mb-4">Статья не найдена</p>
          <Link to="/blog" className="text-[#00d4ff] hover:underline">← Вернуться в блог</Link>
        </div>
      </div>
    );
  }

  const related = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen" style={{ background: "#0a0e1a" }}>
      <Header />

      <article className="pt-28 pb-20 px-6 max-w-3xl mx-auto">
        {/* Back */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-[#64748b] hover:text-[#00d4ff] text-sm mb-8 transition-colors">
          ← Назад в блог
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-5">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: categoryColors[post.category], color: "#0a0e1a" }}
          >
            {post.category}
          </span>
          <span className="text-[#64748b] text-sm">📅 {post.date}</span>
          <span className="text-[#64748b] text-sm">⏱ {post.readTime} мин чтения</span>
        </div>

        {/* Title */}
        <h1 className="text-white font-extrabold text-3xl md:text-4xl leading-tight mb-6">
          {post.title}
        </h1>

        {/* Share top */}
        <div className="mb-8">
          <ShareButtons title={post.title} />
        </div>

        {/* Cover */}
        <div className="rounded-2xl overflow-hidden mb-10"
          style={{ boxShadow: "0 0 40px rgba(0,212,255,0.1)" }}>
          <img src={post.image} alt={post.title} className="w-full object-cover" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          {post.content.map((section, i) => {
            if (section.type === "paragraph") {
              return <p key={i} className="text-[#94a3b8] text-lg leading-relaxed">{section.text}</p>;
            }
            if (section.type === "heading") {
              return <h2 key={i} className="text-white font-bold text-xl md:text-2xl mt-4">{section.text}</h2>;
            }
            if (section.type === "highlight") {
              return (
                <div key={i} className="rounded-xl p-5"
                  style={{ background: "#1e293b", borderLeft: "3px solid #00d4ff" }}>
                  <p className="text-white/90 text-base leading-relaxed">{section.text}</p>
                </div>
              );
            }
            if (section.type === "list" && section.items) {
              return (
                <ul key={i} className="flex flex-col gap-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#94a3b8] text-base">
                      <span className="text-[#00d4ff] mt-1 shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (section.type === "image" && section.src) {
              return (
                <div key={i} className="rounded-xl overflow-hidden">
                  <img src={section.src} alt={section.alt || ""} className="w-full object-cover" />
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* CTA */}
        {post.category === "Продвижение" ? (
          <div className="mt-14 rounded-2xl p-8 text-center"
            style={{ background: "linear-gradient(135deg, #0a1628, #0d1f3c)", border: "1px solid rgba(0,140,255,0.3)" }}>
            <p className="text-2xl font-extrabold text-white mb-2">🚀 Хотите вывести сайт в ТОП?</p>
            <p className="text-[#94a3b8] mb-2">Более 3000 выполненных заказов с 2019 года.</p>
            <p className="text-[#94a3b8] mb-6">Проанализируем ваш сайт и подберём стратегию — бесплатно.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://t.me/seovzlet" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #0060c0, #00aaff)", boxShadow: "0 0 25px rgba(0,140,255,0.4)" }}>
                Написать в Telegram
              </a>
              <a href="/prodvizhenie"
                className="px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:bg-white/10"
                style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff" }}>
                Смотреть тарифы
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-14 rounded-2xl p-8 text-center"
            style={{ background: "linear-gradient(135deg, #111827, #0d1a2e)", border: "1px solid rgba(0,212,255,0.2)" }}>
            <p className="text-2xl font-extrabold text-white mb-2">🔥 Хотите такой же результат?</p>
            <p className="text-[#94a3b8] mb-6">Сделаю дизайн для вашего бизнеса.<br />Первый макет бесплатно за 24 часа.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://vk.com/blacksetpro" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white transition-all hover:opacity-90"
                style={{ background: "#0077ff" }}>
                Написать в ВК
              </a>
              <a href="https://t.me/seovzlet" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:opacity-90"
                style={{ background: "#00d4ff", color: "#0a0e1a" }}>
                Написать в Telegram
              </a>
            </div>
          </div>
        )}

        {/* Share bottom */}
        <div className="mt-10 pt-8 border-t border-white/8">
          <ShareButtons title={post.title} />
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="text-white font-bold text-xl mb-6">Читайте также:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map(r => (
                <Link key={r.id} to={`/blog/${r.slug}`}
                  className="group rounded-xl overflow-hidden transition-all hover:-translate-y-1"
                  style={{ background: "#111827", border: "1px solid #1e293b" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00d4ff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#1e293b"; }}
                >
                  <img src={r.image} alt={r.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ aspectRatio: "16/9" }} />
                  <div className="p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block"
                      style={{ background: categoryColors[r.category], color: "#0a0e1a" }}>
                      {r.category}
                    </span>
                    <p className="text-white text-sm font-semibold leading-snug line-clamp-2">{r.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
}