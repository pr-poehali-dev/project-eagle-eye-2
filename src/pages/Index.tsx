import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WebsitesBlock from "@/components/WebsitesBlock";
import VkCoversBlock from "@/components/VkCoversBlock";
import MarketCardsBlock from "@/components/MarketCardsBlock";
import LogosBlock from "@/components/LogosBlock";
import SocialVisualBlock from "@/components/SocialVisualBlock";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import VkBanner from "@/components/VkBanner";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

function SeoBanner() {
  const navigate = useNavigate();
  return (
    <section className="py-10 px-6 md:px-12 lg:px-20" style={{ background: "linear-gradient(135deg, #060c18 0%, #080d1a 100%)" }}>
      <div
        className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden flex flex-col md:flex-row items-center"
        style={{ background: "linear-gradient(120deg, #060d1f 0%, #0a1228 60%, #0d1535 100%)", border: "1px solid rgba(255,255,255,0.08)", minHeight: 260 }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 100% at 70% 50%, rgba(0,80,200,0.15) 0%, transparent 70%)" }} />

        {/* Text */}
        <div className="relative z-10 flex-1 px-8 md:px-12 py-10 md:py-12">
          <p className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-3">Не нужен дизайн?</p>
          <p className="font-black mb-3 leading-tight" style={{ fontSize: "clamp(1.2rem, 3vw, 1.75rem)", color: "#fff" }}>
            Может нужно продвижение<br />сайта в ТОП? 🔍
          </p>
          <p className="text-white/55 mb-2 text-sm leading-relaxed">Ссылки • Статьи • Крауд-маркетинг</p>
          <p className="text-white/55 mb-7 text-sm leading-relaxed">Высокий ИКС • Рост позиций</p>
          <button
            onClick={() => navigate("/prodvizhenie")}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #0060c0, #00aaff)", boxShadow: "0 0 30px rgba(0,140,255,0.4)", color: "#fff", fontSize: "0.95rem" }}
          >
            Смотреть услуги продвижения
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full md:w-[48%] h-56 md:h-auto md:self-stretch flex-shrink-0">
          <img
            src="https://cdn.poehali.dev/projects/25f186af-48c8-4ca3-855d-9a56ba005137/bucket/ce6cd70a-80d4-420a-9418-c723234d38aa.jpg"
            alt="SEO продвижение сайтов"
            className="w-full h-full object-cover object-center"
            style={{ mixBlendMode: "lighten" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #060d1f 0%, transparent 40%)" }} />
          <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(to top, #060d1f 0%, transparent 50%)" }} />
        </div>
      </div>
    </section>
  );
}

const Index = () => {
  const [introPlayed, setIntroPlayed] = useState(false);

  return (
    <>
      {!introPlayed && <Intro onDone={() => setIntroPlayed(true)} />}
      <main className="min-h-screen" style={{ background: "#080d1a" }}>
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <WebsitesBlock />
        <MarketCardsBlock />
        <VkCoversBlock />
        <LogosBlock />
        <SocialVisualBlock />
        <HowItWorks />
        <Pricing />
        <Stats />
        <FAQ />
        <About />
        <Contact />
        <VkBanner />
        <SeoBanner />
        <Footer />
      </main>
    </>
  );
};

export default Index;