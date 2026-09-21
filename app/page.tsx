import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyThermoSection from "@/components/WhyThermoSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import ProcessSection from "@/components/ProcessSection";



export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WhyThermoSection />
        <ProjectsSection />
        <FinalCtaSection />
        <ProcessSection />


      </main>
    </>
  );
}