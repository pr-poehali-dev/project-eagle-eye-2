import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen" style={{ background: "#080d1a" }}>
      <Header />
      <Hero />
      <Featured />
      <Footer />
    </main>
  );
};

export default Index;
