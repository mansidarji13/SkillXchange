import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import HowItWorks from "../components/landing/HowItWorks";
import PopularSkills from "../components/landing/PopularSkills";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

function Landing() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <PopularSkills />
      <CTA />
      <Footer />
    </main>
  );
}

export default Landing;