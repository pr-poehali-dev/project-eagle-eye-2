import { useLang } from "@/context/LanguageContext";

const About = () => {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="о нас" className="py-20 px-4" style={{ background: "#080d1a" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-10">{a.tag}</p>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-shrink-0">
            <div
              className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 0 40px 8px rgba(139, 92, 246, 0.35), 0 0 80px 20px rgba(6, 182, 212, 0.15)",
              }}
            >
              <img
                src="https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/07915770-4db2-446b-ab0a-3a2d2b1c7645.jpg"
                alt="Стрельцов Иван"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">{a.title}</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{a.p1}</p>
            <div
              className="rounded-xl p-5 border border-white/10"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <p className="text-gray-200 leading-relaxed">
                {a.p2_pre}{" "}
                <span className="text-white font-bold">{a.p2_bold1}</span>{" "}
                {a.p2_mid}{" "}
                <span className="text-white font-bold">{a.p2_bold2}</span>
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {a.p3}
              <span className="text-white font-semibold">{a.p3_bold}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
