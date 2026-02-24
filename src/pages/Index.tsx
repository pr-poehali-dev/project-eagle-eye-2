import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
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
        <Featured />
        <Footer />
      </main>
    </>
  );
};

export default Index;
