export default function VkBanner() {
  return (
    <section
      className="py-12 px-6 md:px-12 lg:px-20"
      style={{ background: "linear-gradient(135deg, #060c18 0%, #080d1a 100%)" }}
    >
      <div className="max-w-2xl mx-auto">
        <a
          href="https://vk.com/streltsovdigital"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-5 rounded-2xl p-5 transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, rgba(0,80,180,0.15) 0%, rgba(0,40,100,0.25) 100%)",
            border: "1px solid rgba(0,119,255,0.25)",
            boxShadow: "0 0 40px rgba(0,80,200,0.1)",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,119,255,0.55)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(0,100,255,0.2)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,119,255,0.25)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(0,80,200,0.1)";
          }}
        >
          {/* VK Avatar */}
          <div className="relative shrink-0">
            <div
              className="w-14 h-14 rounded-full overflow-hidden"
              style={{ boxShadow: "0 0 0 2px rgba(0,119,255,0.6), 0 0 20px rgba(0,100,255,0.3)" }}
            >
              <img
                src="https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/logo.png"
                alt="Streltsov Digital"
                className="w-full h-full object-cover"
                onError={e => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = "none";
                  (el.parentElement as HTMLElement).style.background = "linear-gradient(145deg, #0a1a3a, #0d2050)";
                  (el.parentElement as HTMLElement).innerHTML = '<span style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-weight:900;font-size:1.3rem;color:#00c8ff">S</span>';
                }}
              />
            </div>
            {/* Online dot */}
            <span
              className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2"
              style={{ background: "#4bb34b", borderColor: "#080d1a" }}
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-white font-bold text-base leading-tight">Streltsov Digital</span>
              {/* VK verified */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <circle cx="12" cy="12" r="12" fill="#0077FF"/>
                <path d="M9.5 16.5L5.5 12.5L6.91 11.09L9.5 13.67L17.09 6.08L18.5 7.5L9.5 16.5Z" fill="white"/>
              </svg>
            </div>
            <p className="text-white/45 text-xs mb-2 truncate">Дизайн для бизнеса · Визуал · Брендинг</p>
            <div className="flex items-center gap-3">
              <span className="text-white/35 text-[11px]">5 800 подписчиков</span>
              <span
                className="text-[11px] font-semibold px-2 py-0.5 rounded-md"
                style={{ background: "rgba(0,119,255,0.18)", color: "#4d9fff" }}
              >
                vk.com/streltsovdigital
              </span>
            </div>
          </div>

          {/* CTA */}
          <div
            className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #0055cc, #0077ff)",
              color: "#fff",
              boxShadow: "0 0 20px rgba(0,100,255,0.3)",
            }}
          >
            {/* VK icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 13.47h-1.5c-.56 0-.74-.45-1.76-1.48-1-.97-1.4-1.1-1.65-1.1-.34 0-.43.1-.43.57v1.34c0 .41-.13.65-1.22.65-1.8 0-3.8-1.09-5.2-3.12C4.7 10.1 4.2 8.26 4.2 7.87c0-.24.09-.47.57-.47h1.5c.43 0 .59.2.75.65.83 2.4 2.2 4.5 2.77 4.5.21 0 .3-.1.3-.64V9.6c-.06-1.14-.67-1.24-.67-1.65 0-.2.17-.4.43-.4h2.36c.37 0 .5.2.5.62v3.34c0 .37.17.5.27.5.21 0 .38-.13.76-.52 1.18-1.32 2.02-3.35 2.02-3.35.11-.24.3-.47.74-.47h1.5c.45 0 .55.23.45.57-.19.87-2.02 3.46-2.02 3.46-.16.27-.22.39 0 .69.16.22.69.67 1.04 1.08.65.73 1.14 1.35 1.27 1.77.14.41-.08.62-.52.62z"/>
            </svg>
            <span className="hidden sm:inline">Подписаться</span>
          </div>
        </a>
      </div>
    </section>
  );
}
