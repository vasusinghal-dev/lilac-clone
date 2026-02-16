import Hero from "../components/main/Hero";
import LifeSection from "../components/main/LifeSection";
import Specialties from "../components/main/Specialties";
import Symptoms from "../components/main/Symptoms";
import About from "../components/main/About";
import FAQ from "../components/main/FAQ";
import Profession from "../components/main/Profession";
import CTA from "../components/main/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LifeSection />
      <Specialties />
      <Symptoms />
      <About />
      <FAQ />
      <Profession />
      <CTA />
    </>
  );
}
