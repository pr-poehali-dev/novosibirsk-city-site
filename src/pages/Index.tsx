import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HistorySection from "@/components/HistorySection";
import SightsSection from "@/components/SightsSection";
import FactsSection from "@/components/FactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <HistorySection />
        <SightsSection />
        <FactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
