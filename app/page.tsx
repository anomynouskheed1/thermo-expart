import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import { Marquee } from "@/components/ui/Marquee";
import { marqueeItems } from "@/lib/marquee";
import WhyThermoSection from "@/components/WhyThermoSection";
import ProjectsSection from "@/components/ProjectsSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <Marquee items={marqueeItems} speed={28} />
        <WhyThermoSection />
        <ProjectsSection />
        <FinalCtaSection />
        <ProcessSection />
      </main>
    </>
  );
}