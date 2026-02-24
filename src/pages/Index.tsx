import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WebsitesBlock from "@/components/WebsitesBlock";
import VkCoversBlock from "@/components/VkCoversBlock";
import MarketCardsBlock from "@/components/MarketCardsBlock";
import LogosBlock from "@/components/LogosBlock";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

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
        <HowItWorks />
        <Pricing />
        <Stats />
        <FAQ />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;