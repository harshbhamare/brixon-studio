import Hero from "./components/Hero";
import HeroSupport from "./components/HeroSupport";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroSupport />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
