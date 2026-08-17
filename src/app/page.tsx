import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";
import AboutUs from "@/components/AboutUs";
import MissionVision from "@/components/MissionVision";
import Values from "@/components/Values";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <QuickLinks />
        <AboutUs />
        <MissionVision />
        <Values />
        <Process />
        <Services />
        <Careers />
      </main>
      <Footer />
    </>
  );
}
