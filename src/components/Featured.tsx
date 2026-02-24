const marketplaces = [
  {
    name: "OZON",
    description: "Разработка уникального дизайна карточек товаров для OZON, оптимизация для повышения конверсии и привлечения покупателей.",
    color: "#005BFF",
    badge: "ozon.ru",
    image: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/files/861532a9-f9a8-4901-a4db-78dbe82b7a01.jpg",
  },
  {
    name: "WILDBERRIES",
    description: "Создание продающего визуального контента для Wildberries, включая инфографику, фото и видео, с учётом требований площадки.",
    color: "#CB11AB",
    badge: "wildberries.ru",
    image: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/files/861532a9-f9a8-4901-a4db-78dbe82b7a01.jpg",
  },
  {
    name: "ЯНДЕКС МАРКЕТ",
    description: "Дизайн и оформление карточек для Яндекс Маркета, создание эффективных визуальных решений для увеличения продаж.",
    color: "#FC3F1D",
    badge: "market.yandex.ru",
    image: "https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/files/861532a9-f9a8-4901-a4db-78dbe82b7a01.jpg",
  },
];

export default function Featured() {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-20" style={{ background: "#080d1a" }}>
      {/* Desktop: 3 columns */}
      <div className="hidden md:grid grid-cols-3 gap-6 max-w-7xl mx-auto">
        {marketplaces.map((mp) => (
          <div
            key={mp.name}
            className="rounded-xl overflow-hidden border border-white/10 hover:border-[#00aaff]/40 transition-all duration-300 cursor-pointer group"
            style={{ background: "linear-gradient(145deg, #0d1b2e, #080d1a)" }}
          >
            <div className="relative h-44 overflow-hidden">
              <img src={mp.image} alt={mp.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 40%, #0d1b2e 100%)` }} />
              <div
                className="absolute top-3 left-3 px-3 py-1 rounded text-white text-xs font-bold uppercase"
                style={{ background: mp.color }}
              >
                {mp.badge}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-white font-extrabold text-lg uppercase mb-2 tracking-wide">{mp.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{mp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: list */}
      <div className="md:hidden flex flex-col gap-4 max-w-7xl mx-auto">
        {marketplaces.map((mp) => (
          <div
            key={mp.name}
            className="rounded-xl overflow-hidden border border-white/10 flex"
            style={{ background: "linear-gradient(145deg, #0d1b2e, #080d1a)" }}
          >
            <div className="relative w-28 shrink-0">
              <img src={mp.image} alt={mp.name} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to right, transparent 50%, #0d1b2e 100%)` }} />
            </div>
            <div className="p-4 flex flex-col justify-center">
              <h3 className="text-white font-extrabold text-sm uppercase mb-1 tracking-wide">{mp.name}</h3>
              <p className="text-white/60 text-xs leading-relaxed">{mp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
